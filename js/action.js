        (function (window) {
            var $ = (sel => document.querySelector(sel));
            setInterval(function() {
                $('.popup').style.opacity = '1';
				$('.CommonSite').style.opacity = '1';
				$('.foot').style.opacity = '1';
				$('.time').style.opacity = '1';
				$('.yiyan').style.opacity = '1';
            }, 1000);
        })(window)