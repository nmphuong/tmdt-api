export const dataComponent = {
  link_order_all: [
    {
      href: "/portal/sale/order/all",
      name: "Tất cả"
    }
  ],
  link_order_unpaid: [
    {
      href: "/portal/sale/order/unpaid",
      name: "Chờ lấy hàng"
    }
  ],
  link_order_cancel: [
    {
      href: "/portal/sale/order/cancel",
      name: "Đơn hủy"
    }
  ],
  link_order_refund: [
    {
      href: "/portal/sale/order/refund",
      name: "Trả hàng hoàn tiền"
    }
  ],
  data: [
    {
      event_key: "all",
      title: "Tất cả",
      href: '/portal/sale/order/all',
      classLink: ''
    },
    {
      event_key: "unpaid",
      title: "Chờ xác nhận",
      href: '/portal/sale/order/unpaid',
      classLink: ''
    },
    {
      event_key: "toship",
      title: "Chờ nhận hàng",
      href: '/portal/sale/order/toship',
      classLink: ''
    },
    {
      event_key: "shipping",
      title: "Đang giao",
      href: '/portal/sale/order/shipping',
      classLink: ''
    },
    {
      event_key: "completed",
      title: "Đã giao",
      href: '/portal/sale/order/completed',
      classLink: ''
    },
    {
      event_key: "cancel",
      title: "Đã hủy",
      href: '/portal/sale/order/cancel',
      classLink: ''
    },
    {
      event_key: "refund",
      title: "Trả hàng hoàn tiền",
      href: '/portal/sale/order/refund',
      classLink: ''
    }
  ]
}

export const BUTTON_ORDER_ALL = [
  // {
  //   disabled: '',
  //   button: true,
  //   id: 'button-all-delivery',
  //   text: 'Giao hàng loạt',
  //   class: 'btn-danger p-1 mr-1',
  //   href: '/portal/sale/order/all-delivery',
  //   classLink: 'all-delivery p-1 text-white font-weight-bold',
  // },
  {
    disabled: '',
    button: true,
    id: 'button-cancel-all-order',
    text: 'Từ chối tất cả',
    class: 'btn-warning p-1',
    href: '/portal/sale/order/all-delivery',
    classLink: 'all-cancel-order p-1 text-white font-weight-bold',
  }
]