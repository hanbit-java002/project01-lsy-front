require([
	"common",
], function() {
	var timer;
	function rotateMainImg() {
		var frontNo = parseInt((Math.random() * 100) % 3);
		var frontImgSrc = "img/front" + frontNo + ".jpg";

		$(".mainFrontImg").css("background-image", "url(" + frontImgSrc + ")");

		clearTimeout(timer);
		timer = setTimeout(rotateMainImg, 3000);
	}
	timer = setTimeout(rotateMainImg, 3000);

	rotateMainImg();
});
