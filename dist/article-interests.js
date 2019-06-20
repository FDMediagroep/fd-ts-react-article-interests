module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var l=n[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,t),l.l=!0,l.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var l in e)t.d(r,l,function(n){return e[n]}.bind(null,l));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";var r,l=this&&this.__extends||(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),i=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n};Object.defineProperty(n,"__esModule",{value:!0});var a=o(t(2)),s=t(3),c=o(t(4)),d=o(t(5)),u=t(6),p=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.onFollowClick=function(e){var t=e.currentTarget;"true"===t.getAttribute("data-selected")?n.props.onUnfollowClick(t.getAttribute("data-tag")):n.props.onFollowClick(t.getAttribute("data-tag"))},n.onEnableAlertClick=function(e){var t=e.currentTarget;n.props.onEnableAlertClick(t.getAttribute("data-tag"))},n.onDisableAlertClick=function(e){var t=e.currentTarget;n.props.onDisableAlertClick(t.getAttribute("data-tag"))},n}return l(n,e),n.prototype.render=function(){var e=this;return a.default.createElement(a.default.Fragment,null,a.default.createElement(g,null),a.default.createElement(d.default,{cardStyle:this.props.cardStyle,className:"fd-article-interests"+(this.props.className?" "+this.props.className:"")},a.default.createElement(c.default,{className:"fd-article-interests-h",textStyle:"card-h"},a.default.createElement("h3",null,a.default.createElement("a",{href:""+(this.props.titleLink?this.props.titleLink:"/mijn-nieuws")},this.props.title?this.props.title:"Volgen via mijn nieuws"))),a.default.createElement("ul",null,this.props.interests.map(function(n){return a.default.createElement("li",{key:n.uuid},a.default.createElement("div",{className:"interest-container"+(n.selected?" selected":"")},a.default.createElement("a",{href:""+(n.link?n.link:"/tag/"+n.tag),title:n.tag},n.tag),a.default.createElement("span",{className:"interest-controls"},a.default.createElement("span",{className:"alert"+(n.alertSelected?" selected":""),"data-addurl":n.addAlertLink?n.addAlertLink:"/add-alert","data-deleteurl":n.addAlertLink?n.addAlertLink:"/add-alert"},a.default.createElement("i",{className:"default-icon icon-bell","data-tag":n.tag,onClick:e.onEnableAlertClick}),a.default.createElement("i",{className:"active-icon icon-bell1","data-tag":n.tag,onClick:e.onDisableAlertClick})),a.default.createElement(u.FollowButton,{buttonStyle:"persoonlijk"===e.props.cardStyle?e.props.cardStyle:"default",onClick:e.onFollowClick,tag:n.tag,selected:n.selected,followLink:n.addInterestLink,unFollowLink:n.deleteInterestLink,followButtonText:n.buttonText,unFollowButtonText:n.activeButtonText}))))}))))},n}(a.PureComponent);n.default=p;var f=s.css(y||(y=i(["\n.fd-article-interests {\n    padding: 15px 15px 0 15px;\n    h3.fd-article-interests-h {\n        min-height: 20px;\n        margin-bottom: 15px;\n    }\n    h3.fd-article-interests-h a {\n        color: inherit;\n        text-decoration: inherit;\n    }\n\n    ul {\n        padding: 0;\n        margin: 0 -15px;\n        list-style: none;\n    }\n\n    li {\n        display: inline-block;\n        width: 100%;\n        border-top: 1px solid rgba(0, 0, 0, 0.1);\n        > div {\n            margin: 10px;\n            display: flex;\n            position: relative;\n            height: 30px;\n        }\n    }\n\n    .interest-container a {\n        flex-grow: 1;\n        position: relative;\n        top: 5px;\n        color: #191919;\n        &:hover {\n            color: #49a4a2;\n        }\n        display: block;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        text-decoration: none;\n        font-family: 'ProximaNovaRegular', Helvetica, sans-serif;\n    }\n\n    .interest-controls {\n        display: flex;\n        justify-content: flex-end;\n        flex: 0 0 140px;\n\n        .alert {\n            margin-right: .5rem;\n            color: #677381;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            i {\n                display: none;\n                cursor: pointer;\n            }\n        }\n    }\n\n    .interest-container.selected {\n        .default-icon {\n            display: inline;\n        }\n    }\n\n    .alert.selected {\n        .default-icon {\n            display: none;\n        }\n        .active-icon {\n            display: inline;\n        }\n    }\n}\n"],["\n.fd-article-interests {\n    padding: 15px 15px 0 15px;\n    h3.fd-article-interests-h {\n        min-height: 20px;\n        margin-bottom: 15px;\n    }\n    h3.fd-article-interests-h a {\n        color: inherit;\n        text-decoration: inherit;\n    }\n\n    ul {\n        padding: 0;\n        margin: 0 -15px;\n        list-style: none;\n    }\n\n    li {\n        display: inline-block;\n        width: 100%;\n        border-top: 1px solid rgba(0, 0, 0, 0.1);\n        > div {\n            margin: 10px;\n            display: flex;\n            position: relative;\n            height: 30px;\n        }\n    }\n\n    .interest-container a {\n        flex-grow: 1;\n        position: relative;\n        top: 5px;\n        color: #191919;\n        &:hover {\n            color: #49a4a2;\n        }\n        display: block;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        text-decoration: none;\n        font-family: 'ProximaNovaRegular', Helvetica, sans-serif;\n    }\n\n    .interest-controls {\n        display: flex;\n        justify-content: flex-end;\n        flex: 0 0 140px;\n\n        .alert {\n            margin-right: .5rem;\n            color: #677381;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            i {\n                display: none;\n                cursor: pointer;\n            }\n        }\n    }\n\n    .interest-container.selected {\n        .default-icon {\n            display: inline;\n        }\n    }\n\n    .alert.selected {\n        .default-icon {\n            display: none;\n        }\n        .active-icon {\n            display: inline;\n        }\n    }\n}\n"])));n.ArticleInterestsStyle=s.css(m||(m=i(["\n","\n","\n","\n","\n"],["\n","\n","\n","\n","\n"])),d.CardStyle,c.getAllTextStyles(["card-h"]),u.FollowButtonStyle,f);var y,m,x,g=s.createGlobalStyle(x||(x=i(["",""],["",""])),n.ArticleInterestsStyle)},function(e,n){e.exports=require("react")},function(e,n){e.exports=require("styled-components")},function(e,n){e.exports=require("@fdmg/fd-typography")},function(e,n){e.exports=require("@fdmg/fd-card")},function(e,n){e.exports=require("@fdmg/fd-buttons")}]);