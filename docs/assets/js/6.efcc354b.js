(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{251:function(t,i,s){},273:function(t,i,s){"use strict";s(251)},285:function(t,i,s){"use strict";var a=s(267),e=s(284),l=s(286),o=s(263);function n(t,i){return t.ownerDocument.defaultView.getComputedStyle(t,null)[i]}var r={name:"Navbar",components:{SidebarButton:l.a,NavLinks:o.a,SearchBox:e.a,AlgoliaSearchBox:a.a},data:()=>({linksWrapMaxWidth:null,isLight:!1}),methods:{toggleLightMode(){this.isLight=!this.isLight,console.log(this.isLight)}},computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(n(this.$el,"paddingLeft"))+parseInt(n(this.$el,"paddingRight")),i=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};i(),window.addEventListener("resize",i,!1)}},h=(s(273),s(15)),g=Object(h.a)(r,(function(){var t=this,i=t._self._c;return i("header",{staticClass:"navbar"},[i("SidebarButton",{on:{"toggle-sidebar":function(i){return t.$emit("toggle-sidebar")}}}),t._v(" "),i("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?i("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?i("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),i("NavLinks",{staticClass:"can-hide"}),t._v(" "),i("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[i("a",{staticClass:"nav-link-right",attrs:{href:"/support"}},[t._v("Support")]),t._v(" "),i("a",{staticClass:"nav-link-right",attrs:{href:"https://discord.gg/7zUPfN4D6g"}},[t._v("Discord")]),t._v(" "),t._m(0),t._v(" "),i("button",{staticClass:"toggle-button",attrs:{"aria-label":"Toggle light mode"},on:{click:t.toggleLightMode}},[i("img",{staticClass:"theme-toggle",attrs:{src:"/docs/images/eva-sun.svg"}})]),t._v(" "),t.isAlgoliaSearch?i("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?i("SearchBox"):t._e()],1)],1)}),[function(){var t=this._self._c;return t("a",{staticClass:"nav-link-right",attrs:{href:"https://github.com/ardriveapp"}},[t("img",{attrs:{src:"/docs/images/Github.svg"}})])}],!1,null,null,null);i.a=g.exports}}]);