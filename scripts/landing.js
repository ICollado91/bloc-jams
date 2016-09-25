alert('Why hello there! I\'m a wee bit of Javascript.');

var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {
    var revealPoint = function (pointIndex) {
        var points = document.getElementsByClassName('point');
    
        points[pointIndex].style.opacity = 1;
        points[pointIndex].style.transform = "scaleX(1) translateY(0)";
        points[pointIndex].style.msTransform = "scaleX(1) translateY(0)";
        points[pointIndex].style.WebkitTransform = "scaleX(1) translateY(0)";
    
        for (var i = 0; i < points.length; i++) {
            revealPoint(i);
        }
    };
}

window.onload = function () {
    if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }
    
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    
    window.addEventListener('scroll', function(event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);
        }
    });
}