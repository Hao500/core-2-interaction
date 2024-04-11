let collection = [

    {
        "Name": "2000archivesmeshtop",
        "When": 2023,
        "Fabric": "Semi-sheer polyester-blend jersey",
        "Fit": "Slim",
        "Details": "Graphics printed throughout,Crewneck,Raw edge at cuffs and hem Part of the TheOpen Product x 2000 Archives collaboration."
    },
    {
        "Name": "Blazer",
        "When": 2020,
        "Fabric": "0",
        "Fit": "Loose",
        "Details": "0"
    },
    {
        "Name": "GaultierCorset",
        "When": "Vintage from 2000s",
        "Fabric": "SIlk",
        "Fit": "Tight",
        "Details": "0"
    },
    {
        "Name": "GaultierSkirt",
        "When": 2022,
        "Fabric": "Nylon tulle skirt,",
        "Fit": "Loose",
        "Details": "Graphic printed throughout,Rib knit waistband,Raw edge at hem,Gathering throughout"
    },
    {
        "Name": "OmightyGlodfish top",
        "When": 2023,
        "Fabric": "0"
    },
    {
        "Name": "Lightweight burnt out slub fabric\"",
        "When": "Tight",
        "Fabric": "A semi sheer off shoulder top ft. a long length 4 that boho lewk, Also can be worn as a teeny tiny dress for 5\"4 and below,"
    },
    {
        "Name": "Ottolingerskirt",
        "When": 2023,
        "Fabric": "Organic Cotton and Elastane,",
        "Fit": "Slim",
        "Details": "Ribbed knit maxi skirt, Featuring asymmetric self tie straps and elasticised waistband"
    },
    {
        "Name": "RickOwensShorts",
        "When": 2022,
        "Fabric": "Cotton in a denim weave,",
        "Fit": "Tight",
        "Details": "High rise,Rear zip fastening,Front slip pockets,Exposed pocket lining,Rear welt pockets,Raw hem"
    },
    {
        "Name": "SupremeHoddie",
        "When": 2023,
        "Fabric": "Cotton ",
        "Fit": "Loose",
        "Details": "0"
    },
    {
        "Name": "Windsorminidress",
        "When": 2024,
        "Fabric": "\""
    },
    {
        "Name": "Satin fabric, full knit lining, \"",
        "When": "Tight,moderate stretch",
        "Fabric": "Sleeveless, square neck, spaghetti straps,Form-fitting,Side pleating,Mini-length hem"
    },
    {
        "Name": "Prayinghat",
        "When": 2024,
        "Fabric": "Real tree camo colourway,",
        "Fit": "thick Center embroidery.",
        "Details": "0"
    },
    {
        "Name": "MuglerBodysuit",
        "When": 2022,
        "Fabric": "Black stretch-jersey paneled with sheer tulle",
        "Fit": "TIght",
        "Details": "Concealed hook and zip fastening at back,snap fastenings at base"
    },
    {
        "Name": "PInkSweater",
        "When": 2023,
        "Fabric": "0",
        "Fit": "Loose",
        "Details": "0"
    },
    {
        "Name": "ChristopherNemthShirt",
        "When": 2023,
        "Fabric": "Cotton broad fabric,",
        "Fit": "Wide and voluminous fit,",
        "Details": "Middle length,3- buttoned cuff,Classic collar,Voluminous sleeve,"
    }
];




let materialist=document.getElementById("material_List");
for(let i = 0; i< collection.length; i++) {
    console.log(collection[i].Fabric);


}

document.addEventListener('DOMContentLoaded', function () {
    // 为每张图片添加鼠标悬浮和离开的事件监听器
    document.querySelectorAll('.item').forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        // 当鼠标悬浮在图片上时，改变背景颜色。
        // 'data-color' 是自定义属性，用于存储每张图片对应的背景色

        console.log("testing hover");
        document.body.style.background =item.dataset.color;
      });
      item.addEventListener('mouseleave', function () {
        // 当鼠标移开图片时，恢复背景颜色为初始的颜色
        document.body.style.background = ''; // 这里设置为你的页面默认的背景颜色
      });
    });
  });
  
