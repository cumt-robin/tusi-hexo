!function(e){function i(){var i=e(".navbar-main .navbar-start").outerWidth()+e(".navbar-main .navbar-end").outerWidth();e(document).outerWidth()<i?e(".navbar-main .navbar-menu").addClass("is-flex-start"):e(".navbar-main .navbar-menu").removeClass("is-flex-start")}if(e('.article img:not(".not-gallery-item")').each(function(){0===e(this).parent("a").length&&(e(this).wrap('<a class="gallery-item" href="'+e(this).attr("src")+'"></a>'),this.alt&&e(this).after('<div class="has-text-centered is-size-6 has-text-grey caption">'+this.alt+"</div>"))}),"function"==typeof moment&&e(".article-meta time").each(function(){e(this).text(moment(e(this).attr("datetime")).fromNow())}),e(".article > .content > table").each(function(){e(this).width()>e(this).parent().width()&&e(this).wrap('<div class="table-overflow"></div>')}),i(),e(window).resize(i),e("figure.highlight table").wrap('<div class="highlight-body">'),"undefined"!=typeof IcarusThemeSettings&&void 0!==IcarusThemeSettings.article&&void 0!==IcarusThemeSettings.article.highlight){"undefined"!=typeof ClipboardJS&&IcarusThemeSettings.article.highlight.clipboard&&(e("figure.highlight").each(function(){var i="code-"+Date.now()+(1e3*Math.random()|0),a='<a href="javascript:;" class="copy" title="Copy" data-clipboard-target="#'+i+' .code"><i class="fas fa-copy"></i></a>';e(this).attr("id",i),e(this).find("figcaption").length?e(this).find("figcaption").prepend(a):e(this).prepend("<figcaption>"+a+"</figcaption>")}),new ClipboardJS(".highlight .copy"));var a=IcarusThemeSettings.article.highlight.fold;if(a.trim()){var t='<span class="fold">'+("unfolded"===a?'<i class="fas fa-angle-down"></i>':'<i class="fas fa-angle-right"></i>')+"</span>";function n(i,a){var t=e(i).find(".fold i");a?e(i).addClass("folded"):e(i).removeClass("folded"),a?t.removeClass("fa-angle-down"):t.removeClass("fa-angle-right"),a?t.addClass("fa-angle-right"):t.addClass("fa-angle-down")}e("figure.highlight").each(function(){e(this).find("figcaption").length?e(this).find("figcaption").prepend(t):e(this).prepend("<figcaption>"+t+"</figcaption>")}),e("figure.highlight").each(function(){n(this,"folded"===a)}),e("figure.highlight figcaption .fold").click(function(){var i=e(this).closest("figure.highlight");n(i.eq(0),!i.hasClass("folded"))})}}var s=e("#toc");if(0<s.length){var h=e("<div>");function l(){s.toggleClass("is-active"),h.toggleClass("is-active")}h.attr("id","toc-mask"),e("body").append(h),s.on("click",l),h.on("click",l),e(".navbar-main .catalogue").on("click",l)}}(jQuery);