let menuItem = [
  {
    type: "group",
    icon: 'category',
    active: "true",
    label: "資產註冊管理",
    child: [
      { label: '註冊資產清單', icon: "format_list_bulleted", link: './2.1_assets-list.html' },
      { label: '資產審核', icon: "grading", link: './2.2_assets-review.html' },
      // { label: '資產類別 (P2)', icon: "edit", link: './CP2.0_register-assets.html' },
    ]
  }, {
    type: "group",
    icon: 'shopping_cart',
    active: "true",
    label: "商品上架管理",
    child: [
      { label: 'B2C上架清單', icon: "format_list_bulleted", link: './3.1_selling-list.html' },
      { label: 'B2C上架審核', icon: "grading", link: './3.2_selling-review.html' },
      { label: 'C2C出售清單', icon: "format_list_bulleted", link: './7.1_c2c-selling-list.html' },
      { label: '訂單一覽', icon: "receipt_long", link: './5.3_order-list.html' },
    ]
  }, {
    type: "group",
    icon: 'storefront',
    active: "true",
    label: "商城管理",
    child: [
      { label: '行銷版位', icon: "campaign", link: './3.3_maketing-slot.html' },
      { label: '官方旗艦店(P2)', icon: "storefront", link: './3.4_official-store.html' },
      // { label: '搜尋推薦', icon: "storefront", link: './in-progress.html' },
      // { label: '首頁商品設定', icon: "storefront", link: './3.5_langing-setting.html' },
    ]
  }, 
  // {
  //   type: "group",
  //   active: "true",
  //   label: "優惠設定",
  //   child: [
  //     { label: '優惠設定', icon: "sell", link: './in-progress.html' },
  //     { label: '優惠碼設定', icon: "subtitles", link: './in-progress.html' },
  //     { label: '行銷標籤設置', icon: "sell", link: './in-progress.html' },
  //   ]
  // },
  {
    type: "group",
    icon: 'support_agent',
    active: "true",
    label: "客服管理(P2)",
    child: [
      { label: '訂單查詢', icon: "manage_search", link: './6.1_search-order.html' },
      // { label: '商品移轉紀錄', icon: "storefront", link: './in-progress.html' },
      // { label: '背包資產紀錄', icon: "storefront", link: './in-progress.html' },
    ]
  }, 
  {
    type: "item",
    icon: "storefront",
    label: "黑名單管理(P2)",
    link: "javascript:;"
  },
  // {
  //   type: "group",
  //   icon: 'festival',
  //   active: "true",
  //   label: "C2C交易平台管理",
  //   child: [
  //     { label: 'C2C出售清單', icon: "format_list_bulleted", link: './7.1_c2c-selling-list.html' },
  //     // { label: '黑名單', icon: "storefront", link: './in-progress.html' },
  //   ]
  // },
  {
    type: "group",
    icon: 'work_outline',
    active: "true",
    label: "廠商管理(P2)",
    child: [
      { label: '廠商名單管理', icon: "groups", link: './4.1_cp-list.html' },
      // { label: '黑名單', icon: "storefront", link: './in-progress.html' },
    ]
  }, 
  {
    type: "group",
    icon: 'paid',
    active: "true",
    label: "財務管理(P2)",
    child: [
      { label: '履保額度', icon: "verified_user", link: './5.1_performance-bond.html' },
      { label: '銀行帳戶驗證', icon: "account_balance", link: './5.2_bank-account.html' },
      
    ]
  },
  {
    type: "group",
    icon: "settings",
    active: "true",
    label: "後台設定(P2)",
    child: [
      { label: '帳號管理', icon: "manage_accounts", link: './8.1_account-list.html' },
      { label: '角色權限', icon: "assignment_ind", link: './8.2_role-list.html' },
      { label: '資料權限', icon: "table_chart", link: './8.3_data-list.html' },
      // { label: '通知管理', icon: "storefront", link: './in-progress.html' },
    ]
  },
]



// Opens the sidebar menu
$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#header").toggleClass("active");
  $("#sidebar-wrapper").toggleClass("expand");
  $(".overlay").toggleClass("show");
});

$(".overlay").click(function (e) {
  e.preventDefault();
  $("#header").toggleClass("active");
  $("#sidebar-wrapper").toggleClass("expand");
  $("#menu-close").toggleClass("show");
  $(".overlay").toggleClass("show");
});

// Initialize tooltip component
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})
// Initialize popover component
$(function () {
  $('[data-toggle="popover"]').popover();
})


//  頁面開啟時 menu 標示出目前頁面
function currentPage(str) {
  // if(idx) {
  //   let item = $('#sidebar li').eq(group-1).find('li').eq(idx-1);
  //   $('#sidebar li').eq(group-1).addClass('active')
  //   item.children().addClass('active')
  // } else {
  //   $('#sidebar li').eq(group-1).addClass('active')
  // }
  let item = $('#sidebar a').each(function () {
    let name = this.outerText.split(' ')
    if (name.length < 2) {
      name = this.outerText.split('\n')[1]
    } else {
      name = name[1]
    }
    // console.log(name, str)
    if (name === str) {
      $(this).addClass('active')
      $(this).parents('.menu-group').addClass('active expand')
      $(this).parents('.menu-item').addClass('active')
    }
  });

}



// 產出 sidebar 的選單
for (i = 0; i < menuItem.length; i++) {
  let item = menuItem[i];
  if (menuItem[i].type === "item") {
    $("#sidebar").append(`
    <li class="menu-item animated fadeIn" data-status="${item.active}">
    <a href="${item.link}" class="d-block">
    <span class="material-icons">${item.icon}</span>
    ${item.label}
    </a>
    </li>
    `)
  }
  if (menuItem[i].type === "group") {
    let subItemGroup = "";

    $.each(item.child, function (key, value) {
      subItemGroup += `
      <li>
      <a class="menu-item animated fadeIn" data-status="${value.active}" href="${value.link}">
      <span class="material-icons">${value.icon}</span>
      ${value.label}
      </a>
      </li>
      `
    });
    $("#sidebar").append(`
    <li class="menu-group animated fadeIn" data-status="${item.active}">
    <label>
    <span class="material-icons">${item.icon}</span>
    ${item.label}
    <span class="material-icons folder-arrow">expand_less</span>
    </label>
    <ul>
    ${subItemGroup}
    </ul>
    </li>    
    `)
  }
}




$(".menu-group").each(function (index) {
  $(this).on("click", function () {
    $(this).toggleClass("expand")

  });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// 判斷裝置

function whatDevice() {
  var mobileDevices = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
  var isMobileDevice = false

  for (var i = 0; i < mobileDevices.length; i++) {
    if (navigator.userAgent.match(mobileDevices[i])) {
      isMobileDevice = true

      document.getElementById('main-content').classList.add('mobile')
    }
  }
  // console.log(navigator.userAgent)
  return isMobileDevice
}

whatDevice()

