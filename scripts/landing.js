alert('Why hello there! I\'m a wee bit of Javascript.');
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