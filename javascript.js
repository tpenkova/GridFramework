function addProgressDiv(box) {
	$(box).find(".info").remove();
	$(box).append('<div class="progress-info"></div>');
}

function addProgress(box, progress) {
	$(box).find(".progress-info").append('<span>'+ progress+ '% finished</span>');
	$(box).find(".progress-info").append('<div class="progress"></div>');
}

function addProgressBar(box, progress) {
	addProgressDiv(box);
	addProgress(box, progress);
	$(box).find(".progress").append('<div class="progress-bar" role="progressbar" aria-valuenow="' + progress + '" aria-valuemin="0" aria-valuemax="100" style="width:' + progress + '%"></div>');
}

addProgressBar('#started-course', 66);

addProgressBar('#started-course-info', 66);

addProgressBar('#finished-course', 100);

addProgressBar('#finished-course-submenu', 100);

function addStar(box) {
	$(box).find(".rated").append('<i class="glyphicon glyphicon-star"></i>');
}

function addStars(box) {
	addStar(box);
	addStar(box);
	addStar(box);
	addStar(box);
	addStar(box);
	$(box).find(".rated").append('<span class="rated-count gray">(3)</span>');
}
addStars('#available-course');


function addEmptyStar(box) {
	$(box).find(".stars").append('<i class="glyphicon glyphicon-star-empty"></i>');
}

function addEmptyStars(box) {
	addEmptyStar(box);
	addEmptyStar(box);
	addEmptyStar(box);
	addEmptyStar(box);
	addEmptyStar(box);
	$(box).find(".stars").append('<span class="text">rate this</span>');
}

addEmptyStars('#finished-course');


function addTitle(box, title) {
	$(box).find(".title").append(title);
}

addTitle("#available-course", "Leadership");
addTitle("#started-course", "Leadership");
addTitle("#started-course-info", "Leadership");
addTitle("#finished-course", "Leadership");
addTitle("#finished-course-submenu", "Leadership");

function addMoreInfo(box, info,color) {
	$(box).find(".more-info").append('<span class="' + color + '">' + info + '</span>');
}

addMoreInfo("#available-course", "24 lectures * 61 quiz questions", "gray");
addMoreInfo("#started-course-info", "Your access will end on 01.15.2016", "red");

function addPrice(box, price, color) {
	$(box).find(".price").append('<span class="' + color + '">' + price + '</span>');
}

addPrice("#available-course", "54.99 &#8364; / month", "green")