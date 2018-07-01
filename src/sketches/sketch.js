'use strict';

var sketch = function( p ) {

  var pointCount = 600;
  var freq = 2;
  var phi = 0;
  var modFreq = 12;

  var drawFrequency = true;
  var drawModulation = true;
  var drawCombination = true;

  var angle;
  var y;

  p.setup = function() {
    p.createCanvas(p.windowWidth,800);
    p.noFill();
    pointCount = p.width;
  };

  p.draw = function() {
    p.background(255);
    p.strokeWeight(1);

    p.translate(0, p.height / 2);

    // draw oscillator with freq and phi
    if (drawFrequency) {
      p.beginShape();
      for (var i = 0; i <= pointCount; i++) {
        angle = p.map(i, 0, pointCount, 0, p.TAU);
        y = p.sin(angle * freq + p.radians(phi));
        y *= p.height / 4;
        p.vertex(i,y);
      }
      p.endShape();
    }

    // draw oscillator with modFreq
    if (drawModulation) {
      p.stroke(0,130,164,128);
      p.beginShape();
      for (var i = 0; i <= pointCount; i++) {
        angle = p.map(i, 0, pointCount, 0, p.TAU);
        y = p.cos(angle * modFreq);
        y *= p.height / 4;
        p.vertex(i,y);
      }
      p.endShape();
    }

    // draw both combined
    p.stroke(0);
    p.strokeWeight(2);
    p.beginShape();
    for (var i = 0; i <= pointCount; i++) {
       angle = p.map(i, 0, pointCount, 0, p.TAU);
       var info = p.sin(angle * freq + p.radians(phi));
       var carrier = p.cos(angle * modFreq);
       y = info * carrier;
       y *= p.height / 4;
       p.vertex(i,y);
    }
    p.endShape();
  };
};
