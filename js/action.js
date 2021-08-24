        (function (window) {
            var $ = (sel => document.querySelector(sel));
            setInterval(function() {
                $('.copyright').style.opacity = '1';
				$('.CommonSite').style.opacity = '1';
            }, 1000);
        })(window)
