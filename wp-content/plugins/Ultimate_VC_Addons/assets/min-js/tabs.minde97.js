function setmytime(t,i){var c=[],r=[],_=!0,a=escape(window.location.hash.substr(1));if(""!=t&&void 0!==t&&(a=t),""!=a){var e=jQuery("a.ult_a[href$='"+a+"']");if(0<e.parents(".ult_tabs").length){var n=e.parents(".ult_tabs"),l=n.data("activebg"),s=n.data("titlebg"),u=n.data("titlecolor"),o=n.data("activetitle"),d=n.data("tabsstyle"),b=n.data("activeicon"),f=n.find("li.ult_tab_li").data("iconcolor");if(""==b)b=n.find("li.ult_tab_li").data("iconhover");n.find("li.ult_tab_li").removeClass("current"),e.hasClass("ult_a")&&e.parent().addClass("current"),"style1"==d||"style2"==d?(n.find("a.ult_a").css({"background-color":s}),e.css({"background-color":l})):(n.find("li.ult_tab_li").css({"background-color":s}),e.parent().css({"background-color":l})),n.find("a.ult_a").css({color:u}),e.css({color:o}),n.find(".ult_tab_icon").css({color:f}),e.find(".ult_tab_icon").css({color:b});var h=e.parent().index()+1;n.find(".ult_tabcontent").css({display:"block"}),n.find(".ult_tabitemname").css({display:"none"}),n.find(".ult_tabitemname:nth-child("+h+")").css({display:"block"}),jQuery(document).trigger("ultAdvancedTabClickedDualBtn",n.find(".ult_tabitemname:nth-child("+h+")"));n.offset().top,n.offset().left;n.addClass("ult_aniamte"),n.find("ul.ult_tabmenu li a.ult_a").click(function(t){t.preventDefault(),jQuery("html,body").clearQueue(),jQuery("html,body").stop()})}}jQuery(".ult_tabs").each(function(){var t=jQuery(this).data("fullheight"),i=0;"on"==t&&jQuery(this).find(".ult_tabitemname").each(function(){i<jQuery(this).outerHeight()&&(i=jQuery(this).outerHeight(),jQuery(this).parents(".ult_tabcontent").css({"min-height":i+"px"}))});var a=jQuery(this).data("tabsstyle"),e=jQuery(window).width(),n=jQuery(this).data("respmode"),l=jQuery(this).data("respwidth"),s=jQuery(this).data("responsivemode"),u=jQuery(this).closest(".ult_tabs").data("animation");if("Slide-Horizontal"==u){e=jQuery(this).find("div.ult_tabcontent").outerWidth();jQuery(this).find(".ult_tabcontent").find("div.ult_tabitemname:eq(0)").addClass("ult_active_tabnme")}"Scale"==u&&(jQuery(this).find(".ult_tabitemname").not("div.ult_tabitemname:eq(0)").addClass("scaleTabname"),jQuery(this).find(".ult_tabcontent").find("div.ult_tabitemname:eq(0)").addClass("scaleTabname2")),"Slide-Zoom"==u&&(jQuery(this).closest(".ult_tabs").find("div.ult_tabitemname").removeClass("owl-backSlide-in"),jQuery(this).closest(".ult_tabs").find("div.ult_tabitemname").removeClass("owl-backSlide-in"));var o=jQuery(this).attr("id");l<=e?(jQuery(this).parent().find("."+o).css({display:"none"}),jQuery(this).parent().find("#"+o).css({display:"block"})):"Accordion"==n&&(jQuery(this).parent().find("."+o).css({display:"block"}),jQuery(this).parent().find("#"+o).css({display:"none"}));var d=0;_="false",jQuery(this).find(".ult_tab_li").each(function(){d<jQuery(this).outerHeight()&&(d=jQuery(this).outerHeight())}),jQuery(this).find(".ult_a").addClass(_),ht1=parseInt(d),"style2"==a&&(ht1=parseInt(ht1/2),300<e&&e<660&&(ht1=d/2)),300<e&&e<660&&(jQuery(this).find(".ult_a ").removeClass("false"),r.push(ht1),"Both"!=s&&(jQuery(this).find(".aio-icon").hasClass("icon-top")&&jQuery(this).find(".aio-icon").removeClass("icon-top").addClass("ult_tab_resp_icon"),jQuery(this).find(".ult_tab_main").hasClass("ult_top")&&jQuery(this).find(".ult_tab_main").removeClass("ult_top").addClass("ult_tab_resp_ult_top"))),jQuery(this).find(".ult_a ").hasClass("false")&&c.push(ht1)}),jQuery(window).resize(function(t){var n;n=jQuery(window).width(),jQuery(".ult_tabs").each(function(){jQuery(this).data("tabsstyle");var t=jQuery(this).data("respmode"),i=jQuery(this).data("respwidth"),a=jQuery(this).data("responsivemode"),e=jQuery(this).attr("id");i<=n?(jQuery(this).parent().find("."+e).css({display:"none"}),jQuery(this).parent().find("#"+e).css({display:"block"}),"Both"!=a&&(jQuery(this).find(".aio-icon").hasClass("ult_tab_resp_icon")&&jQuery(this).find(".aio-icon").removeClass("ult_tab_resp_icon").addClass("icon-top"),jQuery(this).find(".ult_tab_main").hasClass("ult_tab_resp_ult_top")&&jQuery(this).find(".ult_tab_main").removeClass("ult_tab_resp_ult_top").addClass("ult_top"))):("Accordion"==t&&(jQuery(this).parent().find("."+e).css({display:"block"}),jQuery(this).parent().find("#"+e).css({display:"none"})),"Both"!=a&&(jQuery(this).find(".aio-icon").hasClass("icon-top")&&jQuery(this).find(".aio-icon").removeClass("icon-top").addClass("ult_tab_resp_icon"),jQuery(this).find(".ult_tab_main").hasClass("ult_top")&&jQuery(this).find(".ult_tab_main").removeClass("ult_top").addClass("ult_tab_resp_ult_top"))),300<n&&n<660&&(jQuery(this).find(".ult_a ").removeClass("false"),r.push(ht1),"Both"!=a&&(jQuery(this).find(".aio-icon").hasClass("icon-top")&&jQuery(this).find(".aio-icon").removeClass("icon-top").addClass("ult_tab_resp_icon"),jQuery(this).find(".ult_tab_main").hasClass("ult_top")&&jQuery(this).find(".ult_tab_main").removeClass("ult_top").addClass("ult_tab_resp_ult_top")))})})}jQuery(document).ready(function(v){v(".ult_tabs").each(function(){function u(){clearTimeout(a),i-1<++m&&(m=0),a=setTimeout(function(){t.find("ul.ult_tabmenu li.ult_tab_li").each(function(t){m==t&&v(this).find("a.ult_a").trigger("click")})},1e3*r)}var t=v(this),o=v(this).data("tabsstyle"),d=v(this).data("titlecolor"),c=v(this).data("titlebg"),e=v(this).data("titlehovercolor"),n=v(this).data("titlehoverbg"),r=parseInt(v(this).data("rotatetabs")),i=v(this).find("ul.ult_tabmenu li.ult_tab_li").length,_=v(this).data("activetitle"),b=v(this).data("activeicon"),f=v(this).data("activebg"),h=parseInt(v(this).find(".ult_tabcontent").outerWidth()),m=0,y=[];y.push(0),v(this).find("ul.ult_tabmenu").addClass("active").find("> li.ult_tab_li:eq(0)").addClass("current"),v(this).find("ul.ult_tabmenu li.ult_tab_li").each(function(t){var i=v(this).data("iconhover"),a=v(this).data("iconcolor");""==b&&(b=i),0==t&&("style2"==o||"style1"==o?(v(this).find("a.ult_a").css({background:f,color:_}),v(this).find(".ult_tab_icon").css({color:b})):(v(this).find("a.ult_a").css({color:_}),v(this).css({background:f,color:_}),v(this).find(".ult_tab_icon").css({color:_}))),v(this).on("mouseover",function(){v(this).hasClass("current")||(v(this).hasClass("current")||"style2"==o||"style1"==o?(v(this).find("a.ult_a").css({background:n,color:e}),v(this).find(".ult_tab_icon").css({color:i})):(v(this).find("a.ult_a").css({color:e}),v(this).css({background:n,color:e}),v(this).find("a.ult_a").find(".ult_tab_icon").css({color:i})))}).on("mouseleave",function(){v(this).hasClass("current")||("style2"==o||"style1"==o?(v(this).find("a.ult_a").css({background:c,color:d}),v(this).find(".ult_tab_icon").css({color:a})):(v(this).find("a.ult_a").css({color:d}),v(this).css({background:c,color:d}),v(this).find("a.ult_a").find(".ult_tab_icon").css({color:a})))})}),v(this).find("ul.ult_tabmenu li a.ult_a").click(function(t){var i=v(this).closest(".ult_tabs"),a=v(this).closest("li.ult_tab_li").index(),e=v(this).parent().data("iconcolor");v(this).parent().data("iconhover");y.push(a);y[y.length-1];var n=y[y.length-2],l=v(this).closest(".ult_tabs").data("animation");i.find("ul.ult_tabmenu > li.ult_tab_li").removeClass("current"),"style2"==o||"style1"==o?(i.find("ul.ult_tabmenu > li.ult_tab_li").find("a").css({background:c,color:d}),i.find("ul.ult_tabmenu > li.ult_tab_li").find(".ult_tab_icon").css({color:e})):(i.find("ul.ult_tabmenu > li.ult_tab_li").find("a.ult_a").css({color:d}),i.find("ul.ult_tabmenu > li.ult_tab_li").css({background:c,color:d}));var s=v(this).closest("li.ult_tab_li").addClass("current");m=("Slide"==l?("style2"==o||"style1"==o?(s.find("a.ult_a").css({background:f,color:_}),s.find(".ult_tab_icon").css({color:b})):(s.find("a.ult_a").css({color:_}),s.css({background:f,color:_})),i.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq("+a+")").stop().slideUp(500,function(){0<r&&u()}),i.find(".ult_tabcontent").find("div.ult_tabitemname:eq("+a+")").stop().slideDown(500,function(){})):"Fade"==l?("style2"==o||"style1"==o?(s.find("a.ult_a").css({background:f,color:_}),s.find(".ult_tab_icon").css({color:b})):(s.find("a.ult_a").css({color:_}),s.css({background:f,color:_})),i.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq("+a+")").fadeOut(100,function(){0<r&&u()}),i.find(".ult_tabcontent").find("div.ult_tabitemname:eq("+a+")").fadeIn(1200)):"Scale"==l?("style2"==o||"style1"==o?(s.find("a.ult_a").css({background:f,color:_}),s.find(".ult_tab_icon").css({color:b})):(s.find("a.ult_a").css({color:_}),s.css({background:f,color:_})),i.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq("+a+")").fadeOut(100,function(){0<r&&u(),i.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq("+a+")").addClass("scaleTabname"),i.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq("+a+")").removeClass("scaleTabname2")}),i.find(".ult_tabcontent").find("div.ult_tabitemname:eq("+a+")").fadeIn(300,function(){i.find(".ult_tabcontent").find("div.ult_tabitemname:eq("+a+")").removeClass("scaleTabname"),i.find(".ult_tabcontent").find("div.ult_tabitemname:eq("+a+")").addClass("scaleTabname2")})):"Slide-Zoom"==l?("style2"==o||"style1"==o?(s.find("a.ult_a").css({background:f,color:_}),s.find(".ult_tab_icon").css({color:b})):(s.find("a.ult_a").css({color:_}),s.css({background:f,color:_})),i.find(".ult_tabcontent").find("div.ult_tabitemname").removeClass("ult_owl-backSlide-in"),i.find(".ult_tabcontent").find("div.ult_tabitemname").removeClass("ult_owl-backSlide-out"),i.find(".ult_tabcontent").find("div.ult_tabitemname").removeClass("ult_owl-backSlideright-in"),i.find(".ult_tabcontent").find("div.ult_tabitemname").removeClass("ult_owl-backSlideright-out"),i.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq("+a+")").fadeOut(200,function(){i.find(".ult_tabcontent").find("div.ult_tab_min_contain").addClass("ult_owl-origin"),a<n?(i.find(".ult_tabcontent").find("div.ult_tabitemname:eq("+a+")").addClass("ult_owl-backSlide-in"),i.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq("+a+")").removeClass(" ult_owl-backSlide-out"),i.find(".ult_tabcontent").find("div.ult_tabitemname:eq("+n+")").addClass("ult_owl-backSlide-out")):(i.find(".ult_tabcontent").find("div.ult_tabitemname:eq("+a+")").addClass("ult_owl-backSlideright-in"),i.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq("+a+")").removeClass(" ult_owl-backSlideright-out"),i.find(".ult_tabcontent").find("div.ult_tabitemname:eq("+n+")").addClass("ult_owl-backSlideright-out")),0<r&&u()}),i.find(".ult_tabcontent").find("div.ult_tabitemname:eq("+a+")").fadeIn(1500,function(){i.find(".ult_tabcontent").find("div.ult_tab_min_contain").removeClass("ult_owl-origin"),a<n?(i.find(".ult_tabcontent").find("div.ult_tabitemname:eq("+n+")").removeClass(" ult_owl-backSlide-in"),i.find(".ult_tabcontent").find("div.ult_tabitemname:eq("+a+")").removeClass(" ult_owl-backSlide-out")):(i.find(".ult_tabcontent").find("div.ult_tabitemname:eq("+n+")").removeClass(" ult_owl-backSlideright-in"),i.find(".ult_tabcontent").find("div.ult_tabitemname:eq("+a+")").removeClass(" ult_owl-backSlideright-out"))})):"Slide-Horizontal"==l?("style2"==o||"style1"==o?(s.find("a.ult_a").css({background:f,color:_}),s.find(".ult_tab_icon").css({color:b})):(s.find("a.ult_a").css({color:_}),s.css({background:f,color:_})),0==(e=i.find(".ult_tabcontent").find("div.ult_tabitemname:eq("+a+")").hasClass("ult_active_tabnme"))?(i.find(".ult_tabcontent").find("div.ult_tabitemname:eq("+a+")").hide(10,function(){jQuery(this).addClass("ult_active_tabnme"),i.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq("+a+")").removeClass("ult_active_tabnme"),i.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq("+a+")").hide(10),n<a?jQuery(this).animate({left:"-"+h+"px"},10):jQuery(this).animate({left:h+"px"},10),0<r&&u()}),i.find(".ult_tabcontent").find("div.ult_tabitemname:eq("+a+")").show(100,function(){jQuery(this).animate({left:"0px"},800)})):(i.find(".ult_tabcontent").find("div.ult_tabitemname:eq("+a+")").animate({opacity:1},1,function(){0<r&&u()}),i.find(".ult_tabcontent").find("div.ult_tabitemname:eq("+a+")").animate({opacity:1},1,function(){}))):("style2"==o||"style1"==o?(s.find("a.ult_a").css({background:f,color:_}),s.find(".ult_tab_icon").css({color:b})):(s.find("a.ult_a").css({color:_}),s.css({background:f,color:_})),i.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq("+a+")").hide(1,function(){0<r&&u()}),i.find(".ult_tabcontent").find("div.ult_tabitemname:eq("+a+")").show(10)),a),t.preventDefault()});var a=0;0<r&&u()})}),jQuery(document).ready(function(e){e(this).find("ul.ult_tabmenu li a.ult_a").click(function(t){e(this).closest("li.ult_tab_li").siblings().each(function(t,i){var a=e(this).data("iconcolor");e(this).find(".ult_tab_icon").css({color:a})})})}),jQuery(document).ready(function(){jQuery(this).find("a").click(function(t){var i=jQuery(this).attr("href");if(void 0!==i&&0<i.length){var a=escape(i.substring(i.indexOf("#")+1)),e=jQuery("a.ult_a[href$='"+a+"']"),n=e.attr("href");void 0!==n&&""!==n&&(n=n.replace("#","")),0<e.parents(".ult_tabs").length&&a==n&&setmytime(n)}}),jQuery(".ult_tabs").each(function(){var t=window.location.href,i=t.substr(t.indexOf("#")+1),a=jQuery(this).data("activeindex");""==a&&"0"!=a&&(a=1);var e=jQuery(this).find("ul.ult_tabmenu li.ult_tab_li:nth-child("+a+")").find(".ult_a").attr("id");i!==t&&(e=i),void 0!==e?1<=e.length&&1<=a&&setmytime(e,!0):jQuery(this).find(".ult_tabcontent").css({display:"none"})}),jQuery(this).find("ul.ult_tabmenu li a.ult_a").click(function(t){var i=jQuery(this).closest(".ult_tabs").data("animation");if(j=jQuery(this).closest("li.ult_tab_li").index(),"Fade"==i){var a=jQuery(this).closest(".ult_tabs").find("div.ult_tabitemname:eq("+j+")").outerHeight();jQuery(this).closest(".ult_tabs").find(".ult_tabitemname").css({position:"absolute",left:"0",right:"0"}),jQuery(this).closest(".ult_tabs").find(".ult_tabcontent").animate({height:a},"slow")}if("Slide-Horizontal"==i){a=jQuery(this).closest(".ult_tabs").find("div.ult_tabitemname:eq("+j+")").outerHeight();jQuery(this).closest(".ult_tabs").find(".ult_tabcontent").css({overflow:"hidden"}),jQuery(this).closest(".ult_tabs").find(".ult_tabcontent").animate({height:a},"slow")}var e=jQuery(this).closest(".ult_tabs").find("div.ult_tabitemname:eq("+j+")");jQuery(document).trigger("ultAdvancedTabClickedCarousel",e),jQuery(document).trigger("ultAdvancedTabClickedDualBtn",e)})}),jQuery(document).ready(function(){jQuery(this).find("ul.ult_tabmenu li a.ult_a").click(function(t){jQuery(".slick-slider").parents(".ult_tabitemname").length&&setTimeout(function(){jQuery(".slick-slider").slick("setPosition"),jQuery(window).trigger("resize")},200)}),jQuery(".vc_toggle").parents(".ult_tabs")&&jQuery(".vc_toggle").click(function(){jQuery(this).parents(".ult_tabitemname").height();jQuery(this).find(".vc_toggle_content").toggleClass("vc_toggle_for_tab"),jQuery(this).find(".vc_toggle_content").hasClass("vc_toggle_for_tab")?setTimeout(function(){var t=jQuery(".ult_tabitemname").height();jQuery(".ult_tabcontent").animate({height:t},100)},100):setTimeout(function(){var t=jQuery(".vc_toggle").parents(".ult_tabitemname").height();jQuery(".ult_tabcontent").animate({height:t},100)},200)})});