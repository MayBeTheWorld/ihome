import { pxCheck } from '../../utils/pxCheck';
import { onMounted, provide, VNode, ref, Ref, computed, onActivated, watch } from 'vue';
export class Title {
  title: string = '';
  titleSlot?: VNode[];
  paneKey: string = '';
  disabled: boolean = false;
  constructor() {}
}
export type TabsSize = 'large' | 'normal' | 'small';
export const component = {
    options: {
        virtualHost: true,
        addGlobalClass: true,
    },
  props: {
    modelValue: {
      type: [String, Number],
      default: 0
    },
    color: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: 'horizontal' //vertical
    },
    size: {
      type: String as import('vue').PropType<TabsSize>,
      default: 'normal'
    },
    type: {
      type: String,
      default: 'line' //card、line、smile
    },
    titleScroll: {
      type: Boolean,
      default: false
    },
    ellipsis: {
      type: Boolean,
      default: true
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: ''
    },
    animatedTime: {
      type: [Number, String],
      default: 300
    },
    titleGutter: {
      type: [Number, String],
      default: 0
    },
    popClass: {
        type: String,
        default: ''
    }
  },

  components: {},
  emits: ['update:modelValue', 'click', 'change'],

  setup(props: any, { emit, slots }: any) {
    provide('activeKey', { activeKey: computed(() => props.modelValue) });
    provide('autoHeight', { autoHeight: computed(() => props.autoHeight) });

    const childVnodes = ref([])
    provide('addNode',(nodeItem)=>{
        childVnodes.value.push(nodeItem)
        renderTitles(childVnodes.value)
    })

    //const titles = props.titles
    const titles: Ref<Title[]> = ref([]);
    const renderTitles = (vnodes: VNode[]) => {
        titles.value = []
          vnodes.forEach((vnode: VNode, index: number) => {
            let type = vnode.type;
            type = (type as any).name || type;
            if (type == 'nut-tabpane') {
              let title = new Title();
              if (vnode.props?.title || vnode.props?.['pane-key'] || vnode.props?.['paneKey']) {
                title.title = vnode.props?.title;
                title.paneKey = vnode.props?.['pane-key'] || vnode.props?.['paneKey'] || index;
                title.disabled = vnode.props?.disabled;
              } else {
                // title.titleSlot = vnode.children?.title() as VNode[];
              }
              titles.value.push(title);
            } else {
              renderTitles(vnode.children as VNode[]);
            }
          });
    };

    const currentIndex = ref((props.modelValue as number) || 0);
    const findTabsIndex = (value: string | number) => {
        //console.log('find',value)
       // console.log('find titles',titles.value)
      let index = titles.value.findIndex((item) => item.paneKey == value);
      if (titles.value.length == 0) {
        console.error('[NutUI] <Tabs> 当前未找到 TabPane 组件元素 , 请检查 .');
      } else if (index == -1) {
        console.error('[NutUI] <Tabs> 请检查 v-model 值是否为 paneKey ,如 paneKey 未设置，请采用下标控制 .');
      } else {
        currentIndex.value = index;
      }
    };
    const init = (vnodes) => {
      titles.value = [];
      if (vnodes && vnodes.length) {
        renderTitles(vnodes);
      }
      findTabsIndex(props.modelValue);
    };
    
    /**
    watch(
      () => slots.default,
      () => {
        init(childVnodes);
      }
    );
    **/
   
    
    watch(
      () => props.modelValue,
      (value: string | number) => {
        findTabsIndex(value);
      }
    );
    
    onMounted(()=>{
       // init(childVnodes);
    });
    onActivated(()=>{
        //init(childVnodes);
    });
    const contentStyle = computed(() => {
      return {
        transform:
          props.direction == 'horizontal'
            ? `translate3d(-${currentIndex.value * 100}%, 0, 0)`
            : `translate3d( 0,-${currentIndex.value * 100}%, 0)`,
        transitionDuration: `${props.animatedTime}ms`
      };
    });
    const tabsNavStyle = computed(() => {
      return {
        background: props.background
      };
    });
    const tabsActiveStyle = computed(() => {
      return {
        color: props.type == 'smile' ? props.color : '',
        background: props.type == 'line' ? props.color : ''
      };
    });
    const titleStyle = computed(() => {
      return {
        marginLeft: pxCheck(props.titleGutter),
        marginRight: pxCheck(props.titleGutter)
      };
    });
    const methods = {
      tabChange: (item: Title, index: number) => {
        emit('click', item);
        if (item.disabled) {
          return;
        }
        currentIndex.value = index;
        emit('update:modelValue', item.paneKey);
        emit('change', item);
      }
    };

    return {
      titles,
      contentStyle,
      tabsNavStyle,
      titleStyle,
      tabsActiveStyle,
      ...methods
    };
  }
};
