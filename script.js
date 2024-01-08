function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./male0001.png
     ./male0002.png
     ./male0003.png
     ./male0004.png
     ./male0005.png
     ./male0006.png
     ./male0007.png
     ./male0008.png
     ./male0009.png
     ./male0010.png
     ./male0011.png
     ./male0012.png
     ./male0013.png
     ./male0014.png
     ./male0015.png
     ./male0016.png
     ./male0017.png
     ./male0018.png
     ./male0019.png
     ./male0020.png
     ./male0021.png
     ./male0022.png
     ./male0023.png
     ./male0024.png
     ./male0025.png
     ./male0026.png
     ./male0027.png
     ./male0028.png
     ./male0029.png
     ./male0030.png
     ./male0031.png
     ./male0032.png
     ./male0033.png
     ./male0034.png
     ./male0035.png
     ./male0036.png
     ./male0037.png
     ./male0038.png
     ./male0039.png
     ./male0040.png
     ./male0041.png
     ./male0042.png
     ./male0043.png
     ./male0044.png
     ./male0045.png
     ./male0046.png
     ./male0047.png
     ./male0048.png
     ./male0049.png
     ./male0050.png
     ./male0051.png
     ./male0052.png
     ./male0053.png
     ./male0054.png
     ./male0055.png
     ./male0056.png
     ./male0057.png
     ./male0058.png
     ./male0059.png
     ./male0060.png
     ./male0061.png
     ./male0062.png
     ./male0063.png
     ./male0064.png
     ./male0065.png
     ./male0066.png
     ./male0067.png
     ./male0068.png
     ./male0069.png
     ./male0070.png
     ./male0071.png
     ./male0072.png
     ./male0073.png
     ./male0074.png
     ./male0075.png
     ./male0076.png
     ./male0077.png
     ./male0078.png
     ./male0079.png
     ./male0080.png
     ./male0081.png
     ./male0082.png
     ./male0083.png
     ./male0084.png
     ./male0085.png
     ./male0086.png
     ./male0087.png
     ./male0088.png
     ./male0089.png
     ./male0090.png
     ./male0091.png
     ./male0092.png
     ./male0093.png
     ./male0094.png
     ./male0095.png
     ./male0096.png
     ./male0097.png
     ./male0098.png
     ./male0099.png
     ./male0100.png
     ./male0101.png
     ./male0102.png
     ./male0103.png
     ./male0104.png
     ./male0105.png
     ./male0106.png
     ./male0107.png
     ./male0108.png
     ./male0109.png
     ./male0110.png
     ./male0111.png
     ./male0112.png
     ./male0113.png
     ./male0114.png
     ./male0115.png
     ./male0116.png
     ./male0117.png
     ./male0118.png
     ./male0119.png
     ./male0120.png
     ./male0121.png
     ./male0122.png
     ./male0123.png
     ./male0124.png
     ./male0125.png
     ./male0126.png
     ./male0127.png
     ./male0128.png
     ./male0129.png
     ./male0130.png
     ./male0131.png
     ./male0132.png
     ./male0133.png
     ./male0134.png
     ./male0135.png
     ./male0136.png
     ./male0137.png
     ./male0138.png
     ./male0139.png
     ./male0140.png
     ./male0141.png
     ./male0142.png
     ./male0143.png
     ./male0144.png
     ./male0145.png
     ./male0146.png
     ./male0147.png
     ./male0148.png
     ./male0149.png
     ./male0150.png
     ./male0151.png
     ./male0152.png
     ./male0153.png
     ./male0154.png
     ./male0155.png
     ./male0156.png
     ./male0157.png
     ./male0158.png
     ./male0159.png
     ./male0160.png
     ./male0161.png
     ./male0162.png
     ./male0163.png
     ./male0164.png
     ./male0165.png
     ./male0166.png
     ./male0167.png
     ./male0168.png
     ./male0169.png
     ./male0170.png
     ./male0171.png
     ./male0172.png
     ./male0173.png
     ./male0174.png
     ./male0175.png
     ./male0176.png
     ./male0177.png
     ./male0178.png
     ./male0179.png
     ./male0180.png
     ./male0181.png
     ./male0182.png
     ./male0183.png
     ./male0184.png
     ./male0185.png
     ./male0186.png
     ./male0187.png
     ./male0188.png
     ./male0189.png
     ./male0190.png
     ./male0191.png
     ./male0192.png
     ./male0193.png
     ./male0194.png
     ./male0195.png
     ./male0196.png
     ./male0197.png
     ./male0198.png
     ./male0199.png
     ./male0200.png
     ./male0201.png
     ./male0202.png
     ./male0203.png
     ./male0204.png
     ./male0205.png
     ./male0206.png
     ./male0207.png
     ./male0208.png
     ./male0209.png
     ./male0210.png
     ./male0211.png
     ./male0212.png
     ./male0213.png
     ./male0214.png
     ./male0215.png
     ./male0216.png
     ./male0217.png
     ./male0218.png
     ./male0219.png
     ./male0220.png
     ./male0221.png
     ./male0222.png
     ./male0223.png
     ./male0224.png
     ./male0225.png
     ./male0226.png
     ./male0227.png
     ./male0228.png
     ./male0229.png
     ./male0230.png
     ./male0231.png
     ./male0232.png
     ./male0233.png
     ./male0234.png
     ./male0235.png
     ./male0236.png
     ./male0237.png
     ./male0238.png
     ./male0239.png
     ./male0240.png
     ./male0241.png
     ./male0242.png
     ./male0243.png
     ./male0244.png
     ./male0245.png
     ./male0246.png
     ./male0247.png
     ./male0248.png
     ./male0249.png
     ./male0250.png
     ./male0251.png
     ./male0252.png
     ./male0253.png
     ./male0254.png
     ./male0255.png
     ./male0256.png
     ./male0257.png
     ./male0258.png
     ./male0259.png
     ./male0260.png
     ./male0261.png
     ./male0262.png
     ./male0263.png
     ./male0264.png
     ./male0265.png
     ./male0266.png
     ./male0267.png
     ./male0268.png
     ./male0269.png
     ./male0270.png
     ./male0271.png
     ./male0272.png
     ./male0273.png
     ./male0274.png
     ./male0275.png
     ./male0276.png
     ./male0277.png
     ./male0278.png
     ./male0279.png
     ./male0280.png
     ./male0281.png
     ./male0282.png
     ./male0283.png
     ./male0284.png
     ./male0285.png
     ./male0286.png
     ./male0287.png
     ./male0288.png
     ./male0289.png
     ./male0290.png
     ./male0291.png
     ./male0292.png
     ./male0293.png
     ./male0294.png
     ./male0295.png
     ./male0296.png
     ./male0297.png
     ./male0298.png
     ./male0299.png
     ./male0300.png
     ./male0301.png
     ./male0302.png
     ./male0303.png
     ./male0304.png
     ./male0305.png
     ./male0306.png
     ./male0307.png
     ./male0308.png
     ./male0309.png
     ./male0310.png
     ./male0311.png
     ./male0312.png
     ./male0313.png
     ./male0314.png
     ./male0315.png
     ./male0316.png
     ./male0317.png
     ./male0318.png
     ./male0319.png
     ./male0320.png
     ./male0321.png
     ./male0322.png
     ./male0323.png
     ./male0324.png
     ./male0325.png
     ./male0326.png
     ./male0327.png
     ./male0328.png
     ./male0329.png
     ./male0330.png
     ./male0331.png
     ./male0332.png
     ./male0333.png
     ./male0334.png
     ./male0335.png
     ./male0336.png
     ./male0337.png
     ./male0338.png
     ./male0339.png
     ./male0340.png
     ./male0341.png
     ./male0342.png
     ./male0343.png
     ./male0344.png
     ./male0345.png
     ./male0346.png
     ./male0347.png
     ./male0348.png
     ./male0349.png
     ./male0350.png
     ./male0351.png
     ./male0352.png
     ./male0353.png
     ./male0354.png
     ./male0355.png
     ./male0356.png
     ./male0357.png
     ./male0358.png
     ./male0359.png
     ./male0360.png
     ./male0361.png
     ./male0362.png
     ./male0363.png
     ./male0364.png
     ./male0365.png
     ./male0366.png
     ./male0367.png
     ./male0368.png
     ./male0369.png
     ./male0370.png
     ./male0371.png
     ./male0372.png
     ./male0373.png
     ./male0374.png
     ./male0375.png
     ./male0376.png
     ./male0377.png
     ./male0378.png
     ./male0379.png
     ./male0380.png
     ./male0381.png
     ./male0382.png
     ./male0383.png
     ./male0384.png
     ./male0385.png
     ./male0386.png
     ./male0387.png
     ./male0388.png
     ./male0389.png
     ./male0390.png
     ./male0391.png
     ./male0392.png
     ./male0393.png
     ./male0394.png
     ./male0395.png
     ./male0396.png
     ./male0397.png
     ./male0398.png
     ./male0399.png
     ./male0400.png
     ./male0401.png
     ./male0402.png
     ./male0403.png
     ./male0404.png
     ./male0405.png
     ./male0406.png
     ./male0407.png
     ./male0408.png
     ./male0409.png
     ./male0410.png
     ./male0411.png
     ./male0412.png
     ./male0413.png
     ./male0414.png
     ./male0415.png
     ./male0416.png
     ./male0417.png
     ./male0418.png
     ./male0419.png
     ./male0420.png
     ./male0421.png
     ./male0422.png
     ./male0423.png
     ./male0424.png
     ./male0425.png
     ./male0426.png
     ./male0427.png
     ./male0428.png
     ./male0429.png
     ./male0430.png
     ./male0431.png
     ./male0432.png
     ./male0433.png
     ./male0434.png
     ./male0435.png
     ./male0436.png
     ./male0437.png
     ./male0438.png
     ./male0439.png
     ./male0440.png
     ./male0441.png
     ./male0442.png
     ./male0443.png
     ./male0444.png
     ./male0445.png
     ./male0446.png
     ./male0447.png
     ./male0448.png
     ./male0449.png
     ./male0450.png
     ./male0451.png
     ./male0452.png
     ./male0453.png
     ./male0454.png
     ./male0455.png
     ./male0456.png
     ./male0457.png
     ./male0458.png
     ./male0459.png
     ./male0460.png
     ./male0461.png
     ./male0462.png
     ./male0463.png
     ./male0464.png
     ./male0465.png
     ./male0466.png
     ./male0467.png
     ./male0468.png
     ./male0469.png
     ./male0470.png
     ./male0471.png
     ./male0472.png
     ./male0473.png
     ./male0474.png
     ./male0475.png
     ./male0476.png
     ./male0477.png
     ./male0478.png
     ./male0479.png
     ./male0480.png
     ./male0481.png
     ./male0482.png
     ./male0483.png
     ./male0484.png
     ./male0485.png
     ./male0486.png
     ./male0487.png
     ./male0488.png
     ./male0489.png
     ./male0490.png
     ./male0491.png
     ./male0492.png
     ./male0493.png
     ./male0494.png
     ./male0495.png
     ./male0496.png
     ./male0497.png
     ./male0498.png
     ./male0499.png
     ./male0500.png
     ./male0501.png
     ./male0502.png
     ./male0503.png
     ./male0504.png
     ./male0505.png
     ./male0506.png
     ./male0507.png
     ./male0508.png
     ./male0509.png
     ./male0510.png
     ./male0511.png
     ./male0512.png
     ./male0513.png
     ./male0514.png
     ./male0515.png
     ./male0516.png
     ./male0517.png
     ./male0518.png
     ./male0519.png
     ./male0520.png
     ./male0521.png
     ./male0522.png
     ./male0523.png
     ./male0524.png
     ./male0525.png
     ./male0526.png
     ./male0527.png
     ./male0528.png
     ./male0529.png
     ./male0530.png
     ./male0531.png
     ./male0532.png
     ./male0533.png
     ./male0534.png
     ./male0535.png
     ./male0536.png
     ./male0537.png
     ./male0538.png
     ./male0539.png
     ./male0540.png
     ./male0541.png
     ./male0542.png
     ./male0543.png
     ./male0544.png
     ./male0545.png
     ./male0546.png
     ./male0547.png
     ./male0548.png
     ./male0549.png
     ./male0550.png
     ./male0551.png
     ./male0552.png
     ./male0553.png
     ./male0554.png
     ./male0555.png
     ./male0556.png
     ./male0557.png
     ./male0558.png
     ./male0559.png
     ./male0560.png
     ./male0561.png
     ./male0562.png
     ./male0563.png
     ./male0564.png
     ./male0565.png
     ./male0566.png
     ./male0567.png
     ./male0568.png
     ./male0569.png
     ./male0570.png
     ./male0571.png
     ./male0572.png
     ./male0573.png
     ./male0574.png
     ./male0575.png
     ./male0576.png
     ./male0577.png
     ./male0578.png
     ./male0579.png
     ./male0580.png
     ./male0581.png
     ./male0582.png
     ./male0583.png
     ./male0584.png
     ./male0585.png
     ./male0586.png
     ./male0587.png
     ./male0588.png
     ./male0589.png
     ./male0590.png
     ./male0591.png
     ./male0592.png
     ./male0593.png
     ./male0594.png
     ./male0595.png
     ./male0596.png
     ./male0597.png
     ./male0598.png
     ./male0599.png
     ./male0600.png
`;
  return data.split("\n")[index];
}

const frameCount = 600;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `1004% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `1004% top`,
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
