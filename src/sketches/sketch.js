export default function sketch (p) {
  let rotation = 0;

  p.setup = function () {
    p.createCanvas(600, 400, p.WEBGL);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
  };

  p.draw = function () {
    p.background(100);
    p.noStroke();
    p.push();
    p.rotateY(p.frameCount* Math.PI / 180);
    p.rotateX(-p.frameCount / 3* Math.PI / 180);
    p.box(100);
    p.pop();
  };
};
