(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0f8c":function(t,e,a){"use strict";a("f234")},"25fe":function(t,e,a){t.exports=a.p+"img/new.2fe1ca9b.png"},"63d8":function(t,e,a){t.exports=a.p+"img/hlw.7a5fc5b1.gif"},"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("q-page",{staticClass:"bb",staticStyle:{"background-color":"rgba(247, 223, 118,0.1)",height:"100%"}},[e("div",{staticClass:"q-pa-lg flex flex-center",staticStyle:{display:"flex","justify-content":"space-between"}},[e("q-chip",{attrs:{round:""}},[e("q-avatar",{staticStyle:{"background-color":"#f76060","font-weight":"bold"},attrs:{"text-color":"white"}},[t._v(t._s(t.diff.length)+"\n      ")]),t._v("\n      Unread Quotes\n    ")],1),e("img",{staticStyle:{"margin-right":"-57px","margin-top":"-35px"},attrs:{src:a("63d8"),width:"100"}})],1),t._l(t.allQuotes,(function(s,i){return e("div",{directives:[{name:"show",rawName:"v-show",value:i==t.currPage-1,expression:"i==currPage-1"}],key:i,staticClass:"q-pa-md row items-start q-gutter-md",staticStyle:{"padding-bottom":"65px"}},t._l(s,(function(s){return e("q-card",{directives:[{name:"show",rawName:"v-show",value:s.status,expression:"qoute.status"}],key:s.key,staticClass:"my-card cards"},[t.diff.includes(s.key)?e("img",{staticStyle:{position:"absolute",width:"50px",margin:"-1px"},attrs:{src:a("25fe"),width:"50"}}):t._e(),e("div",{staticStyle:{"text-align":"right"}},[e("span",{staticStyle:{color:"rgb(72, 53, 53)","font-weight":"bold","margin-right":"10px","margin-top":"10px"}},[t._v(t._s(s.date))])]),e("q-card-section",{staticStyle:{margin:"0px",padding:"0px"}},[e("div",{staticClass:"box",domProps:{innerHTML:t._s(s.quote)}})])],1)})),1)})),e("div",{staticClass:"abb",staticStyle:{position:"fixed",width:"100%","max-width":"500px",bottom:"0px","background-color":"white"}},[e("div",{staticStyle:{display:"flex","justify-content":"space-between",padding:"10px"}},[e("q-chip",{attrs:{square:""}},[e("q-avatar",{staticStyle:{"background-color":"#F7E36E","font-weight":"bold"},attrs:{"text-color":"black"}},[t._v(t._s(t.allQuotes.length)+"\n        ")]),t._v("\n        Total Page\n      ")],1),e("q-pagination",{attrs:{color:"black",max:t.allQuotes.length,"max-pages":3,ellipses:!1,"boundary-numbers":!1},model:{value:t.currPage,callback:function(e){t.currPage=e},expression:"currPage"}})],1)]),""!=t.text?e("q-footer",{staticStyle:{"max-width":"500px","background-color":"#F7E36E",height:"50px","margin-left":"auto","margin-right":"auto"},attrs:{elevated:""}},[e("q-toolbar",{staticStyle:{height:"100%"}},[e("q-toolbar-title",{staticStyle:{color:"black","text-align":"center","letter-spacing":"2px"}},[t._v("\n        "+t._s(t.text)+"\n      ")])],1)],1):t._e()],2)},i=[],o=(a("14d9"),a("cee4")),r={name:"PageIndex",data(){return{quotes:{},old:[],diff:[],text:"",allQuotes:[],currPage:0,visitedPage:[],apiKey:new Date,startTime:(new Date).toLocaleString("en-Us",{timeZone:"Asia/Kolkata"})}},watch:{currPage(){this.visitedPage.push(this.currPage);let t={key:this.apiKey,startTime:this.startTime,list:this.visitedPage},e={method:"post",maxBodyLength:1/0,url:"https://mrtzq-1-x3287120.deta.app/pv",data:t};o["a"].request(e).then((t=>{console.log(JSON.stringify(t.data))})).catch((t=>{console.log(t)}))}},mounted(){this.old=this.$store.state.kys;let t=this.$store.state.kys;0==t.length?(this.text="Welcome!",setTimeout((()=>{this.text=""}),3e3)):(this.text="Welcome Back!",setTimeout((()=>{this.text=""}),3e3));let e={method:"get",maxBodyLength:1/0,url:"https://mrtzq-1-x3287120.deta.app/get",headers:{}};o["a"].request(e).then((t=>{this.quotes=t.data,this.quotes.items=this.quotes.items.reverse(),this.$store.commit("quotes",this.quotes.items);let e=[];this.quotes.items.forEach((t=>{e.push(t.key),this.$store.commit("key",e)}));let a=[],s=5;for(let o=0;o<this.quotes.items.length;o+=s)a.push(this.quotes.items.slice(o,o+s));this.currPage=1,this.allQuotes=a;let i=e.filter((t=>!this.old.includes(t)));this.diff=i,this.$forceUpdate()})).catch((t=>{console.log(t)}));let a=this.quotes.items.filter((t=>!this.old.includes(t)));this.diff=a}},l=r,n=(a("0f8c"),a("2877")),c=a("9989"),d=a("b047"),h=a("cb32"),u=a("f09f"),g=a("a370"),p=a("3b16"),m=a("7ff0"),f=a("65c6"),x=a("6ac5"),b=a("eebe"),y=a.n(b),q=Object(n["a"])(l,s,i,!1,null,"4d790b04",null);e["default"]=q.exports;y()(q,"components",{QPage:c["a"],QChip:d["a"],QAvatar:h["a"],QCard:u["a"],QCardSection:g["a"],QPagination:p["a"],QFooter:m["a"],QToolbar:f["a"],QToolbarTitle:x["a"]})},f234:function(t,e,a){}}]);