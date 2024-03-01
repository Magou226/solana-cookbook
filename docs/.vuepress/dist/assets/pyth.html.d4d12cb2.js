import{_ as l,r as e,o as u,c as i,a as n,b as a,w as t,F as r,d as s}from"./app.55b1b60c.js";const k={},b=n("h1",{id:"pyth",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pyth","aria-hidden":"true"},"#"),s(" Pyth")],-1),m=n("p",null,"Pyth\u306F\u3001\u73FE\u5B9F\u4E16\u754C\u306E\u91D1\u878D\u304A\u3088\u3073\u6697\u53F7\u5E02\u5834\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u308BOracle\u3067\u3059\u3002Pyth Oracle\u306F\u3001\u3055\u307E\u3056\u307E\u306A\u30E6\u30FC\u30B9\u30B1\u30FC\u30B9\u3067\u30C7\u30FC\u30BF\u3092\u6D88\u8CBB\u3059\u308B\u969B\u306B\u30AA\u30F3\u30C1\u30A7\u30FC\u30F3\u30D7\u30ED\u30B0\u30E9\u30E0\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002",-1),d=n("h2",{id:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3066\u3099pyth\u3092\u4F7F\u7528\u3059\u308B\u65B9\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3066\u3099pyth\u3092\u4F7F\u7528\u3059\u308B\u65B9\u6CD5","aria-hidden":"true"},"#"),s(" \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3067Pyth\u3092\u4F7F\u7528\u3059\u308B\u65B9\u6CD5")],-1),h=s("Pyth\u306F**@pythnetwork/client**\u3068\u3057\u3066\u547C\u3073\u51FA\u3055\u308C\u308BJavaScript/TypeScript\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002\u3053\u306E\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u4F7F\u7528\u3057\u3066\u3001\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u3067\u306EPyth\u4FA1\u683C\u306E\u8868\u793A\u306A\u3069\u3068\u3044\u3063\u305F\u3001\u30AA\u30D5\u30C1\u30A7\u30FC\u30F3\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u4F7F\u7528\u3059\u308B\u30AA\u30F3\u30C1\u30A7\u30FC\u30F3Pyth \u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u8A73\u7D30\u306F"),y={href:"https://www.npmjs.com/package/@pythnetwork/client",target:"_blank",rel:"noopener noreferrer"},_=s("\u3053\u3061\u3089"),g=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token keyword"},"as"),s(" web3 "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@solana/web3.js"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token keyword"},"as"),s(" pyth "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@pythnetwork/client"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" connection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"web3"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Connection"),n("span",{class:"token punctuation"},"("),s(`
    web3`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clusterApiUrl"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"devnet"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"confirmed"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" pythConnection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"pyth"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"PythConnection"),n("span",{class:"token punctuation"},"("),s(`
    connection`),n("span",{class:"token punctuation"},","),s(`
    pyth`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPythProgramKeyForCluster"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"devnet"'),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  pythConnection`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onPriceChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("product"),n("span",{class:"token punctuation"},","),s(" price"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},"."),s("price "),n("span",{class:"token operator"},"&&"),s(" price"),n("span",{class:"token punctuation"},"."),s("confidence"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("product"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"symbol"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},": $"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("price"),n("span",{class:"token punctuation"},"."),s("price"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," \\xB1$"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("price"),n("span",{class:"token punctuation"},"."),s("confidence"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),s(`
      `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("product"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"symbol"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},": price currently unavailable. status is "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("price"),n("span",{class:"token punctuation"},"."),s("status"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),s(`
      `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  pythConnection`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br")])],-1),f=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" pythConnection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"pyth"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"PythConnection"),n("span",{class:"token punctuation"},"("),s(`
  connection`),n("span",{class:"token punctuation"},","),s(`
  pyth`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPythProgramKeyForCluster"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"devnet"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

pythConnection`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onPriceChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("product"),n("span",{class:"token punctuation"},","),s(" price"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},"."),s("price "),n("span",{class:"token operator"},"&&"),s(" price"),n("span",{class:"token punctuation"},"."),s("confidence"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("product"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"symbol"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},": $"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("price"),n("span",{class:"token punctuation"},"."),s("price"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," \\xB1$"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("price"),n("span",{class:"token punctuation"},"."),s("confidence"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("product"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"symbol"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},": price currently unavailable. status is "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("price"),n("span",{class:"token punctuation"},"."),s("status"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

pythConnection`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br")])],-1),w=n("h2",{id:"anchor\u3066\u3099pyth\u3092\u4F7F\u7528\u3059\u308B\u65B9\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#anchor\u3066\u3099pyth\u3092\u4F7F\u7528\u3059\u308B\u65B9\u6CD5","aria-hidden":"true"},"#"),s(" Anchor\u3067Pyth\u3092\u4F7F\u7528\u3059\u308B\u65B9\u6CD5")],-1),x=n("p",null,"Pyth\u306F\u3001\u30AA\u30F3\u30C1\u30A7\u30FC\u30F3\u30D7\u30ED\u30B0\u30E9\u30E0\u307E\u305F\u306F\u30AA\u30D5\u30C1\u30A7\u30FC\u30F3\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304Cpyth\u306E\u30C7\u30FC\u30BF\u3092\u6D88\u8CBB\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3067\u304D\u308BRust Crate\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002",-1),C=n("div",{class:"language-rust ext-rs line-numbers-mode"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"use"),s(),n("span",{class:"token namespace"},[s("anchor_lang"),n("span",{class:"token punctuation"},"::"),s("prelude"),n("span",{class:"token punctuation"},"::")]),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"use"),s(),n("span",{class:"token namespace"},[s("pyth_client"),n("span",{class:"token punctuation"},"::")]),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"self"),n("span",{class:"token punctuation"},","),s(" load_price"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Price"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token macro property"},"declare_id!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"6B7XgKFmo73geJY8ZboSpLhkTumvwXeCXBpeP7nCT35w"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token attribute attr-name"},"#[program]"),s(`
`),n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"mod"),s(),n("span",{class:"token module-declaration namespace"},"pyth_test"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"use"),s(),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"get_sol_price"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Context"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"SolPrice"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Result"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" pyth_price_info "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("ctx"),n("span",{class:"token punctuation"},"."),s("accounts"),n("span",{class:"token punctuation"},"."),s("pyth_account"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" pyth_price_data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("pyth_price_info"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"try_borrow_data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" price_account"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Price"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"*"),n("span",{class:"token function"},"load_price"),n("span",{class:"token punctuation"},"("),s("pyth_price_data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unwrap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token macro property"},"msg!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"price_account .. {:?}"'),n("span",{class:"token punctuation"},","),s(" pyth_price_info"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token macro property"},"msg!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"price_type ... {:?}"'),n("span",{class:"token punctuation"},","),s(" price_account"),n("span",{class:"token punctuation"},"."),s("ptype"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token macro property"},"msg!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"price ........ {}"'),n("span",{class:"token punctuation"},","),s(" price_account"),n("span",{class:"token punctuation"},"."),s("agg"),n("span",{class:"token punctuation"},"."),s("price"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token class-name"},"Ok"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token attribute attr-name"},"#[derive(Accounts)]"),s(`
`),n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token type-definition class-name"},"SolPrice"),n("span",{class:"token operator"},"<"),n("span",{class:"token lifetime-annotation symbol"},"'info"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token attribute attr-name"},"#[account(mut)]"),s(`
    `),n("span",{class:"token keyword"},"pub"),s(" user_account"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Signer"),n("span",{class:"token operator"},"<"),n("span",{class:"token lifetime-annotation symbol"},"'info"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"pub"),s(" pyth_account"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"UncheckedAccount"),n("span",{class:"token operator"},"<"),n("span",{class:"token lifetime-annotation symbol"},"'info"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"pub"),s(" system_program"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"UncheckedAccount"),n("span",{class:"token operator"},"<"),n("span",{class:"token lifetime-annotation symbol"},"'info"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"pub"),s(" rent"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Sysvar"),n("span",{class:"token operator"},"<"),n("span",{class:"token lifetime-annotation symbol"},"'info"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Rent"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br")])],-1),v=n("div",{class:"language-rust ext-rs line-numbers-mode"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"let"),s(" pyth_price_info "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("ctx"),n("span",{class:"token punctuation"},"."),s("accounts"),n("span",{class:"token punctuation"},"."),s("pyth_account"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"let"),s(" pyth_price_data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("pyth_price_info"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"try_borrow_data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"let"),s(" price_account"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Price"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"*"),n("span",{class:"token function"},"load_price"),n("span",{class:"token punctuation"},"("),s("pyth_price_data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unwrap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br")])],-1),P=n("h2",{id:"\u305D\u306E\u4ED6\u53C2\u8003\u8CC7\u6599",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u305D\u306E\u4ED6\u53C2\u8003\u8CC7\u6599","aria-hidden":"true"},"#"),s(" \u305D\u306E\u4ED6\u53C2\u8003\u8CC7\u6599")],-1),$={href:"https://docs.pyth.network/consumers/client-libraries",target:"_blank",rel:"noopener noreferrer"},S=s("Client Libraries"),A={href:"https://github.dev/solana-labs/solana/tree/master/web3.js/examples",target:"_blank",rel:"noopener noreferrer"},B=s("JS Example Code"),E={href:"https://github.com/project-OpenBook/anchor/tree/master/tests/pyth",target:"_blank",rel:"noopener noreferrer"},F=s("Rust Example Code"),T={href:"https://github.com/0xPratik/pyth-anchor-example",target:"_blank",rel:"noopener noreferrer"},j=s("Anchor Example Code");function G(I,L){const o=e("ExternalLinkIcon"),c=e("SolanaCodeGroupItem"),p=e("SolanaCodeGroup");return u(),i(r,null,[b,m,d,n("p",null,[h,n("a",y,[_,a(o)])]),a(p,null,{default:t(()=>[a(c,{title:"TS",active:""},{default:t(()=>[g]),preview:t(()=>[f]),_:1})]),_:1}),w,x,a(p,null,{default:t(()=>[a(c,{title:"Anchor",active:""},{default:t(()=>[C]),preview:t(()=>[v]),_:1})]),_:1}),P,n("ul",null,[n("li",null,[n("a",$,[S,a(o)])]),n("li",null,[n("a",A,[B,a(o)])]),n("li",null,[n("a",E,[F,a(o)])]),n("li",null,[n("a",T,[j,a(o)])])])],64)}var J=l(k,[["render",G]]);export{J as default};