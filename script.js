function showScenario(type){

let back = document.getElementById("backPanelContent");
let front = document.getElementById("frontPanelContent");

if(type==="old"){

back.innerHTML=
`
<div>
Foxboro 34C-AP
<br>
RTD / TC → 3-15 PSI
</div>
`;

front.innerHTML=
`
<div>
Foxboro Pneumatic Recorder
<br><br>
Foxboro Pneumatic Controller
</div>
`;

}

if(type==="modular"){

back.innerHTML=
`
<div>
Modular Nest
<br><br>
RTD/TC Converter
<br>
↓
<br>
4-20 mA
<br>
↓
<br>
PH10
<br>
↓
<br>
3-15 PSI
</div>
`;

front.innerHTML=
`
<div>
Foxboro Pneumatic Recorder
<br><br>
Foxboro Pneumatic Controller
</div>
`;

}

if(type==="electronic"){

back.innerHTML=
`
<div>
Modular Nest
<br><br>
RTD/TC Converter
<br>
↓
<br>
4-20 mA
</div>
`;

front.innerHTML=
`
<div>
GX10 Recorder
<br><br>
Electronic Controller
</div>
`;

}

if(type==="dcs"){

back.innerHTML=
`
<div>
Modular Nest
<br><br>
Communication Module
<br>
↓
<br>
Modbus TCP
</div>
`;

front.innerHTML=
`
<div>
DCS Server
<br><br>
SCADA Workstation
</div>
`;

}

}

showScenario("old");

let slider=document.getElementById("tempSlider");

function updateValues(){

let temp=parseFloat(slider.value);

let ma=4+(temp/800)*16;

let psi=3+(temp/800)*12;

document.getElementById("tempValue").innerHTML=
"Temperature = "+temp.toFixed(1)+" °C";

document.getElementById("maValue").innerHTML=
"4-20 mA = "+ma.toFixed(2)+" mA";

document.getElementById("psiValue").innerHTML=
"3-15 PSI = "+psi.toFixed(2)+" PSI";

}

slider.addEventListener("input",updateValues);

updateValues();
