export const dataComponent = {
  link_product_all: [
    {
      href: "/portal/sale/product/all",
      name: "Tất cả"
    }
  ],
  link_product_active: [
    {
      href: "/portal/sale/product/active",
      name: "Đang hoạt động"
    }
  ],
  link_product_soldout: [
    {
      href: "/portal/sale/product/solđout",
      name: "Hết hàng"
    }
  ],
  link_product_banned: [
    {
      href: "/portal/sale/product/banned/action",
      name: "Đã tạm khóa"
    }
  ],
  link_product_unlisted: [
    {
      href: "/portal/sale/product/unlisted",
      name: "Đã ẩn"
    }
  ],
  data: [
    {
      event_key: "all",
      title: "Tất cả",
      href: '/portal/sale/product/all',
      classLink: ''
    },
    {
      event_key: "active",
      title: "Đang hoạt động",
      href: '/portal/sale/product/active',
      classLink: ''
    },
    {
      event_key: "soldout",
      title: "Hết hàng",
      href: '/portal/sale/product/soldout',
      classLink: ''
    },
    {
      event_key: "banned",
      title: "Đã tạm khóa",
      href: '/portal/sale/product/banned/action',
      classLink: ''
    },
    {
      event_key: "unlisted",
      title: "Đã ẩn",
      href: '/portal/sale/product/unlisted',
      classLink: ''
    },
  ],
  dataBannedProduct: [
    {
      event_key: "action",
      title: "Yêu cầu thao tác",
      href: '/portal/sale/product/banned/action',
      classLink: ''
    },
    {
      event_key: "deleted",
      title: "Đã xóa bởi Rokida",
      href: '/portal/sale/product/banned/deleted',
      classLink: ''
    }
  ],
  theadProductBannedAction: ['Tên sản phẩm', 'Thời gian cập nhật', 'Hạn sửa lỗi', 'Loại vi phạm', 'Gợi ý', 'Thao tác'],
  theadProductBannedDeleted: ['Tên sản phẩm', 'Thời gian xóa', 'Loại vi phạm', 'Gợi ý', 'Thao tác'],
  theadProducAll: ['Tên sản phẩm', 'SKU phân loại', 'Phân loại hàng', 'Giá', 'Kho hàng', 'Đã bán', 'Sửa thông tin']
}