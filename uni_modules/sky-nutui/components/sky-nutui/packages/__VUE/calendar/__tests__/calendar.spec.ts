import { mount, config } from '@vue/test-utils';
import Calendar from '../index.vue';
import { nextTick, toRefs, reactive } from 'vue';
import Icon from '../../icon/index.vue';
import PopUp from '../../popup/index.vue';
import Button from '../../button/index.vue';
import OverLay from '../../overlay/index.vue';
import CalendarItem from '../../calendaritem/index.vue';

beforeAll(() => {
  config.global.components = {
    [Icon.name]: Icon,
    [PopUp.name]: PopUp,
    [Button.name]: Button,
    [OverLay.name]: OverLay,
    [CalendarItem.name]: CalendarItem
  };
});
test('show-title prop', async () => {
  const wrapper = mount(Calendar, {
    props: {
      poppable: false,
      defaultValue: '2022-03-18',
      showTitle: true,
      startDate: '2022-01-01',
      endDate: '2022-12-31'
    }
  });
  await nextTick();
  expect(wrapper.find('.calendar-title').exists()).toBeTruthy();
  await wrapper.setProps({ showTitle: false });
  expect(wrapper.find('.calendar-title').exists()).toBeFalsy();
});
test('show-sub-title prop', async () => {
  const wrapper = mount(Calendar, {
    props: {
      poppable: false,
      defaultValue: '2022-03-18',
      showSubTitle: true,
      startDate: '2022-01-01',
      endDate: '2022-12-31'
    }
  });
  await nextTick();
  expect(wrapper.find('.calendar-curr-month').exists()).toBeTruthy();
  await wrapper.setProps({ showSubTitle: false });
  expect(wrapper.find('.calendar-curr-month').exists()).toBeFalsy();
});
test('show-today prop', async () => {
  const wrapper = mount(Calendar, {
    props: {
      poppable: false,
      defaultValue: '2022-03-18',
      showToday: true,
      startDate: '2022-01-01',
      endDate: '2022-12-31'
    }
  });
  await nextTick();
  // expect(wrapper.find('.calendar-curr-tip-curr').exists()).toBeTruthy();
  await wrapper.setProps({ showToday: false });
  expect(wrapper.find('.calendar-curr-tip-curr').exists()).toBeFalsy();
});

test('should render slot correctly', async () => {
  const wrapper = mount(Calendar, {
    props: {
      poppable: false,
      defaultValue: '2022-03-18',
      startDate: '2022-01-01',
      endDate: '2022-12-31'
    },
    slots: {
      btn: '<div class="d_div"> 最近七天</div>',
      day: (date) => {
        return `custom${date.date.day}`;
      },
      bottomInfo: (date) => `${date.date ? (date.date.day <= 10 ? '上旬' : date.date.day <= 20 ? '中旬' : '下旬') : ''}`
    }
  });
  await nextTick();
  expect(wrapper.find('.calendar-top-slot').html()).toContain('<div class="d_div"> 最近七天</div>');
  expect(wrapper.find('.viewArea').html()).toMatchSnapshot();
});

test('select event when click item', async () => {
  const wrapper = mount(Calendar, {
    props: {
      poppable: false,
      defaultValue: '2022-03-18',
      showToday: true,
      isAutoBackFill: true,
      startDate: '2022-01-01',
      endDate: '2022-12-31'
    }
  });

  await nextTick();
  wrapper.findAll('.calendar-month-day')[15].trigger('click');
  let arr: any = wrapper.emitted<[Date]>('select')![0][0];
  expect(arr[3]).toEqual('2022-02-14');
});
test('choose event when click item', async () => {
  const wrapper = mount(Calendar, {
    props: {
      poppable: false,
      defaultValue: '2022-03-18',
      showToday: true,
      isAutoBackFill: true,
      startDate: '2022-01-01',
      endDate: '2022-12-31'
    }
  });

  await nextTick();
  wrapper.findAll('.calendar-month-day')[15].trigger('click');
  let arr2: any = wrapper.emitted<[Date]>('choose')![0][0];
  expect(arr2[3]).toEqual('2022-02-14');
});
