import { h, computed,provide,getCurrentInstance,onMounted } from 'vue';
import type { ExtractPropTypes, SetupContext, RenderFunction } from 'vue';
import { createComponent } from '../../utils/create';
import { pxCheck } from '../../utils/pxCheck';
import { useProvide } from '../../utils/useRelation/useProvide';

const { componentName } = createComponent('grid');

export const GRID_KEY = Symbol('grid');

export type GridDirection = 'horizontal' | 'vertical';

export const gridProps = {
  // 列数
  columnNum: {
    type: [Number, String],
    default: 4
  },
  // 图标大小
  iconSize: {
    type: [Number, String],
    default: 28
  },
  // 图标颜色
  iconColor: {
    type: String
  },
  // 是否显示边框
  border: {
    type: Boolean,
    default: true
  },
  // 格子之间间隔距离
  gutter: {
    type: [Number, String],
    default: 0
  },
  // 是否内容居中
  center: {
    type: Boolean,
    default: true
  },
  // 是否固定正方形
  square: {
    type: Boolean,
    default: false
  },
  // 内容与文字翻转
  reverse: {
    type: Boolean,
    default: false
  },
  // 内容排列方向
  direction: {
    type: String as import('vue').PropType<GridDirection>
  },
  // 是否开启点击反馈
  clickable: {
    type: Boolean,
    default: false
  }
};

export type GridProps = ExtractPropTypes<typeof gridProps>;

export const component = {
  props: gridProps,
  options: { 
      virtualHost: true
  },
  setup(props: GridProps,{slots}) {
      console.log(slots,'slots')
     
    provide(GRID_KEY, { props });

    onMounted(()=>{
        console.log(getCurrentInstance(),'getCurrentInstance')
    })
    const rootClass = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--border`]: props.border && !props.gutter
      };
    });

    const rootStyle = computed(() => {
      const style: import('vue').CSSProperties = {};

      if (props.gutter) {
        style.paddingLeft = pxCheck(props.gutter);
      }

      return style;
    });

    return {
        rootStyle,
        rootClass
    }
  }
};
