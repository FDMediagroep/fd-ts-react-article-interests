module.exports=function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){n.exports=t(1)},function(n,e,t){"use strict";var r,o=this&&this.__extends||(r=function(n,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(n,e)},function(n,e){function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),a=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},i=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var l=i(t(2)),s=t(3),c=i(t(4)),d=function(n){function e(){var e=null!==n&&n.apply(this,arguments)||this;return e.onFollowClick=function(n){var t=n.currentTarget;"true"===t.getAttribute("data-selected")?e.props.onUnfollowClick(t.getAttribute("data-tag")):e.props.onFollowClick(t.getAttribute("data-tag"))},e.onEnableAlertClick=function(n){var t=n.currentTarget;e.props.onEnableAlertClick(t.getAttribute("data-tag"))},e.onDisableAlertClick=function(n){var t=n.currentTarget;e.props.onDisableAlertClick(t.getAttribute("data-tag"))},e}return o(e,n),e.prototype.render=function(){var n=this;return l.default.createElement(l.default.Fragment,null,l.default.createElement(f,null),l.default.createElement("section",{className:"fd-article-interests"+(this.props.className?" "+this.props.className:"")},l.default.createElement(c.default,{className:"fd-article-interests-h",textStyle:"card-h"},l.default.createElement("h3",null,l.default.createElement("a",{href:""+(this.props.titleLink?this.props.titleLink:"/mijn-nieuws")},this.props.title?this.props.title:"Volgen via mijn nieuws"))),l.default.createElement("ul",null,this.props.interests.map(function(e){return l.default.createElement("li",{key:e.uuid},l.default.createElement("div",{className:"interest-container"+(e.selected?" selected":"")},l.default.createElement("a",{href:""+(e.link?e.link:"/tag/"+e.tag),title:e.tag},e.tag),l.default.createElement("span",{className:"interest-controls"},l.default.createElement("span",{className:"alert"+(e.alertSelected?" selected":""),"data-addurl":e.addAlertLink?e.addAlertLink:"/add-alert","data-deleteurl":e.addAlertLink?e.addAlertLink:"/add-alert"},l.default.createElement("i",{className:"default-icon icon-bell","data-tag":e.tag,onClick:n.onEnableAlertClick}),l.default.createElement("i",{className:"active-icon icon-bell1","data-tag":e.tag,onClick:n.onDisableAlertClick})),l.default.createElement("button",{onClick:n.onFollowClick,"data-tag":e.tag,"data-selected":e.selected,"data-addurl":e.addInterestLink?e.addInterestLink:"/add-interest","data-deleteurl":e.deleteInterestLink?e.deleteInterestLink:"/delete-interest"},l.default.createElement("span",{className:"cross"})," ",l.default.createElement("span",{className:"button-text default-text"},e.buttonText?e.buttonText:"Volg"),l.default.createElement("span",{className:"button-text active-text"},e.buttonText?e.buttonText:"Ontvolg")))))}))))},e}(l.PureComponent);e.default=d;var u,p,f=s.createGlobalStyle(u||(u=a(["\n.fd-article-interests {\n    background: rgba(0, 0, 0, 0.04);\n    padding: 15px 15px 0 15px;\n    h3.fd-article-interests-h {\n        min-height: 20px;\n        margin-bottom: 15px;\n    }\n    h3.fd-article-interests-h a {\n        color: inherit;\n        text-decoration: inherit;\n    }\n\n    ul {\n        padding: 0;\n        margin: 0 -15px;\n        list-style: none;\n    }\n\n    li {\n        display: inline-block;\n        width: 100%;\n        border-top: 1px solid rgba(0, 0, 0, 0.1);\n        > div {\n            margin: 10px;\n            display: flex;\n            position: relative;\n            height: 30px;\n        }\n    }\n\n    .interest-container a {\n        flex-grow: 1;\n        position: relative;\n        top: 5px;\n        color: #191919;\n        &:hover {\n            color: #49a4a2;\n        }\n        display: block;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        text-decoration: none;\n        font-family: 'ProximaNovaRegular', Helvetica, sans-serif;\n    }\n\n    .interest-controls {\n        display: flex;\n        justify-content: flex-end;\n        flex: 0 0 140px;\n\n        .alert {\n            margin-right: .5rem;\n            color: #677381;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            i {\n                display: none;\n                cursor: pointer;\n            }\n        }\n\n        .cross {\n            &:before {\n                content: '+';\n                display: block;\n                width: 10px;\n                height: 10px;\n                line-height: 10px;\n            }\n            display: inline-block;\n            transform: rotate(0deg);\n            transition: transform .5s;\n            transform-origin: center center;\n            font-size: 20px;\n            position: relative;\n            top: 2px;\n        }\n\n        .button-text {\n            margin-left: 5px;\n        }\n\n        .active-text {\n            display: none;\n        }\n\n        button {\n            outline: none;\n            border-radius: 2px;\n            white-space: nowrap;\n            float: right;\n            padding: 5px 10px;\n            border: 1px solid #49a4a2;\n            color: #49a4a2;\n            background-color: transparent;\n            cursor: pointer;\n            transition: color .2s;\n            font-family: 'ProximaNovaRegular', sans-serif;\n            &:hover {\n                background-color: #49a4a2;\n                color: #ffeadb;\n            }\n        }\n    }\n\n    .interest-container.selected {\n        .interest-controls {\n            .cross {\n                transform: rotate(45deg);\n            }\n        }\n\n        button {\n            background-color: #49a4a2;\n            color: #ffeadb;\n        }\n        button .default-text {\n            display: none;\n        }\n        .default-icon,\n        button .active-text {\n            display: inline;\n        }\n    }\n\n    .alert.selected {\n        .default-icon {\n            display: none;\n        }\n        .active-icon {\n            display: inline;\n        }\n    }\n\n    &.persoonlijk {\n        h3 {\n            color: #e57e30;\n        }\n\n        .cross,\n        .button-text {\n            color: black;\n        }\n\n        button:hover {\n            .cross,\n            .button-text {\n                color: white;\n            }\n        }\n\n        .interest-container a:hover {\n            color: #e57e30;\n        }\n\n        .interest-container.selected {\n            .button-text, .cross {\n                color: #ffffff;\n            }\n        }\n    }\n}\n"],["\n.fd-article-interests {\n    background: rgba(0, 0, 0, 0.04);\n    padding: 15px 15px 0 15px;\n    h3.fd-article-interests-h {\n        min-height: 20px;\n        margin-bottom: 15px;\n    }\n    h3.fd-article-interests-h a {\n        color: inherit;\n        text-decoration: inherit;\n    }\n\n    ul {\n        padding: 0;\n        margin: 0 -15px;\n        list-style: none;\n    }\n\n    li {\n        display: inline-block;\n        width: 100%;\n        border-top: 1px solid rgba(0, 0, 0, 0.1);\n        > div {\n            margin: 10px;\n            display: flex;\n            position: relative;\n            height: 30px;\n        }\n    }\n\n    .interest-container a {\n        flex-grow: 1;\n        position: relative;\n        top: 5px;\n        color: #191919;\n        &:hover {\n            color: #49a4a2;\n        }\n        display: block;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        text-decoration: none;\n        font-family: 'ProximaNovaRegular', Helvetica, sans-serif;\n    }\n\n    .interest-controls {\n        display: flex;\n        justify-content: flex-end;\n        flex: 0 0 140px;\n\n        .alert {\n            margin-right: .5rem;\n            color: #677381;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            i {\n                display: none;\n                cursor: pointer;\n            }\n        }\n\n        .cross {\n            &:before {\n                content: '+';\n                display: block;\n                width: 10px;\n                height: 10px;\n                line-height: 10px;\n            }\n            display: inline-block;\n            transform: rotate(0deg);\n            transition: transform .5s;\n            transform-origin: center center;\n            font-size: 20px;\n            position: relative;\n            top: 2px;\n        }\n\n        .button-text {\n            margin-left: 5px;\n        }\n\n        .active-text {\n            display: none;\n        }\n\n        button {\n            outline: none;\n            border-radius: 2px;\n            white-space: nowrap;\n            float: right;\n            padding: 5px 10px;\n            border: 1px solid #49a4a2;\n            color: #49a4a2;\n            background-color: transparent;\n            cursor: pointer;\n            transition: color .2s;\n            font-family: 'ProximaNovaRegular', sans-serif;\n            &:hover {\n                background-color: #49a4a2;\n                color: #ffeadb;\n            }\n        }\n    }\n\n    .interest-container.selected {\n        .interest-controls {\n            .cross {\n                transform: rotate(45deg);\n            }\n        }\n\n        button {\n            background-color: #49a4a2;\n            color: #ffeadb;\n        }\n        button .default-text {\n            display: none;\n        }\n        .default-icon,\n        button .active-text {\n            display: inline;\n        }\n    }\n\n    .alert.selected {\n        .default-icon {\n            display: none;\n        }\n        .active-icon {\n            display: inline;\n        }\n    }\n\n    &.persoonlijk {\n        h3 {\n            color: #e57e30;\n        }\n\n        .cross,\n        .button-text {\n            color: black;\n        }\n\n        button:hover {\n            .cross,\n            .button-text {\n                color: white;\n            }\n        }\n\n        .interest-container a:hover {\n            color: #e57e30;\n        }\n\n        .interest-container.selected {\n            .button-text, .cross {\n                color: #ffffff;\n            }\n        }\n    }\n}\n"])));e.ArticleInterestsStyle=s.createGlobalStyle(p||(p=a(["\n","\n","\n"],["\n","\n","\n"])),c.getAllTextStyles(["card-h"]).globalStyle.rules,f.globalStyle.rules)},function(n,e){n.exports=require("react")},function(n,e){n.exports=require("styled-components")},function(n,e){n.exports=require("@fdmg/fd-typography")}]);