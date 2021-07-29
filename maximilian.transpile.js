"use strict";
/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};
function __Z7webMainv(){
	var tmp0=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc();
	console.log(tmp0);
}
function _cheerpCreate_ZN6client6StringC2EPKc(){
	var tmp0=0,Lgeptoindexphi=0,tmp2=null,tmp3=null;
	tmp2=String();
	Lgeptoindexphi=0;
	tmp0=77;
	while(1){
		tmp3=String.fromCharCode(tmp0<<24>>24);
		tmp2=tmp2.concat(tmp3);
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if(_$pstr===_$pstr&&(0+Lgeptoindexphi|0)===39)return String(tmp2);
		tmp0=_$pstr[0+Lgeptoindexphi|0]|0;
		continue;
	}
}
function __ZN13maxiDelayline14dlFromPositionEdidi(Larg0,Larg1,Larg2,Larg3,Larg4){
	var L$poptgep$poptgep1$poptgepsqueezed=null,tmp1=0;
	tmp1=Larg0.i1|0;
	if((tmp1|0)>=(Larg2|0)){
		Larg0.i1=0;
		tmp1=0;
	}
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a5;
	Larg0.d4=+L$poptgep$poptgep1$poptgepsqueezed[(Larg4|0)<(Larg2|0)?Larg4|0:0|0];
	L$poptgep$poptgep1$poptgepsqueezed[tmp1]=Larg1*Larg3+ +L$poptgep$poptgep1$poptgepsqueezed[tmp1]*Larg3;
	Larg0.i1=tmp1+1|0;
	return +Larg0.d4;
}
function __ZN13maxiDelayline2dlEdid(Larg0,Larg1,Larg2,Larg3){
	var tmp0=0;
	tmp0=Larg0.i1|0;
	if((tmp0|0)>=(Larg2|0)){
		Larg0.i1=0;
		tmp0=0;
	}
	Larg0.d4=+Larg0.a5[tmp0];
	Larg0.a5[tmp0]=Larg1*Larg3*.5+ +Larg0.a5[tmp0]*Larg3;
	Larg0.i1=tmp0+1|0;
	return +Larg0.d4;
}
function __ZN13maxiDelaylineC1Ev(Larg0){
	var L$poptgep$poptgep$poptgepsqueezed=null,Lgeptoindexphi=0;
	L$poptgep$poptgep$poptgepsqueezed=Larg0.a5;
	Lgeptoindexphi=0;
	while(1){
		L$poptgep$poptgep$poptgepsqueezed[Lgeptoindexphi]=0;
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if(L$poptgep$poptgep$poptgepsqueezed!==L$poptgep$poptgep$poptgepsqueezed||88200!==(0+Lgeptoindexphi|0))continue;
		break;
	}
}
function __ZN7maxiOsc8triangleEd(Larg0,Larg1){
	var tmp0=-0.;
	tmp0=+Larg0.d1;
	if(tmp0>=1){
		tmp0+=-1;
		Larg0.d1=tmp0;
	}
	tmp0+=(1/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1));
	Larg0.d1=tmp0;
	if(!(tmp0<=.5)){
		tmp0=1-tmp0;
	}
	tmp0=(tmp0+-0.25)*4;
	Larg0.d4=tmp0;
	return tmp0;
}
function __ZN7maxiOsc4rectEdd(Larg0,Larg1,Larg2){
	return +Larg0.d4;
}
function __ZN7maxiOsc4sawnEd(Larg0,Larg1){
	var tmp0=0,tmp1=-0.,tmp2=-0.,tmp3=-0.;
	tmp1=+Larg0.d1;
	if(tmp1>=.5){
		tmp1+=-1;
		Larg0.d1=tmp1;
	}
	tmp1+=(1/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1));
	Larg0.d1=tmp1;
	tmp2=8820.22/Larg1*tmp1;
	if(tmp2<-0.5){
		tmp2=-0.5;
	}else if(tmp2>.5){
		tmp2=.5;
	}
	tmp2=tmp2*1000+500;
	tmp3=+Math.floor(tmp2);
	tmp3=tmp2-tmp3;
	tmp0=~~tmp2;
	tmp1=tmp3* +_transition[tmp0+1|0]+ +_transition[tmp0]*(1-tmp3)-tmp1;
	Larg0.d4=tmp1;
	return tmp1;
}
function __ZN7maxiOsc3sawEd(Larg0,Larg1){
	var tmp0=-0.,tmp1=-0.;
	tmp0=+Larg0.d1;
	Larg0.d4=tmp0;
	if(tmp0>=1){
		tmp1=tmp0+-2;
		Larg0.d1=tmp1;
	}else{
		tmp1=tmp0;
	}
	Larg0.d1=tmp1+1/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1)*2;
	return tmp0;
}
function __ZN7maxiOsc13phasorBetweenEddd(Larg0,Larg1,Larg2,Larg3){
	var tmp0=-0.,L$pmux=-0.,tmp2=-0.;
	tmp0=+Larg0.d1;
	Larg0.d4=tmp0;
	if(tmp0<Larg2){
		tmp2=Larg2;
	}else{
		tmp2=tmp0;
	}
	L$pmux=tmp2>=Larg3?Larg2:tmp2;
	a:{
		if(!(tmp2>=Larg3))if(!(tmp0<Larg2))break a;
		Larg0.d1=L$pmux;
		tmp2=L$pmux;
	}
	Larg0.d1=tmp2+(Larg3-Larg2)/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1);
	return tmp0;
}
function __ZN7maxiOsc7impulseEd(Larg0,Larg1){
	var tmp0=-0.,tmp1=-0.;
	tmp1=+Larg0.d1;
	if(tmp1>=1){
		tmp1+=-1;
		Larg0.d1=tmp1;
	}
	tmp0=1/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1);
	Larg0.d1=tmp1+tmp0;
	return tmp1<tmp0?1:0;
}
function __ZN7maxiOsc5pulseEdd(Larg0,Larg1,Larg2){
	var tmp0=-0.,tmp1=-0.;
	if(Larg2<0){
		tmp0=0;
	}else if(Larg2>1){
		tmp0=1;
	}else{
		tmp0=Larg2;
	}
	tmp1=+Larg0.d1;
	if(tmp1>=1){
		tmp1+=-1;
		Larg0.d1=tmp1;
	}
	tmp1+=(1/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1));
	Larg0.d1=tmp1;
	if(tmp1<tmp0)Larg0.d4=-1;
	if(tmp1>tmp0){
		Larg0.d4=1;
		return 1;
	}
	return +Larg0.d4;
}
function __ZN7maxiOsc6squareEd(Larg0,Larg1){
	var tmp0=-0.;
	tmp0=+Larg0.d1;
	if(tmp0<.5)Larg0.d4=-1;
	if(tmp0>.5)Larg0.d4=1;
	if(tmp0>=1){
		tmp0+=-1;
		Larg0.d1=tmp0;
	}
	Larg0.d1=tmp0+1/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1);
	return +Larg0.d4;
}
function __ZN7maxiOsc6phasorEd(Larg0,Larg1){
	var tmp0=-0.,tmp1=-0.;
	tmp0=+Larg0.d1;
	Larg0.d4=tmp0;
	if(tmp0>=1){
		tmp1=tmp0+-1;
		Larg0.d1=tmp1;
	}else{
		tmp1=tmp0;
	}
	Larg0.d1=tmp1+1/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1);
	return tmp0;
}
function __ZN7maxiOsc7coswaveEd(Larg0,Larg1){
	var tmp0=-0.,tmp1=-0.;
	tmp0=+Math.cos( +Larg0.d1*6.2831853071795862);
	Larg0.d4=tmp0;
	tmp1=+Larg0.d1;
	if(tmp1>=1){
		tmp1+=-1;
		Larg0.d1=tmp1;
	}
	Larg0.d1=tmp1+1/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1);
	return tmp0;
}
function __ZN7maxiOsc7sinebufEd(Larg0,Larg1){
	var tmp0=0,tmp1=-0.,tmp2=-0.;
	tmp1= +Larg0.d1+512/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1);
	if(tmp1>=511){
		tmp1+=-512;
	}
	Larg0.d1=tmp1;
	tmp2=+Math.floor(tmp1);
	tmp2=tmp1-tmp2;
	tmp0=~~tmp1;
	tmp1=(1-tmp2)* +_sineBuffer[tmp0+1|0]+tmp2* +_sineBuffer[tmp0+2|0];
	Larg0.d4=tmp1;
	return tmp1;
}
function __ZN7maxiOsc8sinebuf4Ed(Larg0,Larg1){
	var tmp0=0,tmp1=-0.,tmp2=-0.,tmp3=-0.,tmp4=-0.,tmp5=-0.;
	tmp3= +Larg0.d1+512/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1);
	if(tmp3>=511){
		tmp3+=-512;
	}
	Larg0.d1=tmp3;
	tmp4=+Math.floor(tmp3);
	tmp4=tmp3-tmp4;
	tmp0=~~tmp3;
	if(tmp3===0){
		tmp1=+_sineBuffer[tmp0+1|0];
		tmp2=+_sineBuffer[tmp0+2|0];
		tmp5=+_sineBuffer[tmp0];
		tmp3=0;
	}else{
		tmp1=+_sineBuffer[tmp0+1|0];
		tmp2=+_sineBuffer[tmp0+2|0];
		tmp3=+_sineBuffer[tmp0-1|0];
		tmp5=+_sineBuffer[tmp0];
	}
	tmp5+=(tmp4*((tmp1-tmp3)*.5+tmp4*(tmp3-tmp5*2.5+tmp1*2-tmp2*.5+tmp4*((tmp5-tmp1)*1.5+(tmp2-tmp3)*.5))));
	Larg0.d4=tmp5;
	return tmp5;
}
function __ZN7maxiOsc8sinewaveEd(Larg0,Larg1){
	var tmp0=-0.,tmp1=-0.;
	tmp0=+Math.sin( +Larg0.d1*6.2831853071795862);
	Larg0.d4=tmp0;
	tmp1=+Larg0.d1;
	if(tmp1>=1){
		tmp1+=-1;
		Larg0.d1=tmp1;
	}
	Larg0.d1=tmp1+1/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1);
	return tmp0;
}
function __ZN7maxiOsc10phaseResetEd(Larg0,Larg1){
	Larg0.d1=Larg1;
}
function __ZN7maxiOsc5noiseEv(Larg0){
	var tmp0=0,tmp1=0,tmp2=0,tmp3=0,tmp4=0,tmp5=-0.,L$poptgep$poptgep$poptgepsqueezed=null,L$poptgep$poptgep7$poptgepsqueezed=null,tmp8=0;
	L$poptgep$poptgep7$poptgepsqueezed=_impure_data.a14;
	if(L$poptgep$poptgep7$poptgepsqueezed===null){
		L$poptgep$poptgep7$poptgepsqueezed={a0:new Uint16Array(6),i1:0,a2:new Int32Array(2)};
		_impure_data.a14=L$poptgep$poptgep7$poptgepsqueezed;
		L$poptgep$poptgep$poptgepsqueezed=L$poptgep$poptgep7$poptgepsqueezed.a0;
		L$poptgep$poptgep$poptgepsqueezed[0]=13070;
		L$poptgep$poptgep$poptgepsqueezed[1]=43981;
		L$poptgep$poptgep$poptgepsqueezed[2]=4660;
		L$poptgep$poptgep$poptgepsqueezed[3]=58989;
		L$poptgep$poptgep$poptgepsqueezed[4]=57068;
		L$poptgep$poptgep$poptgepsqueezed[5]=5;
		L$poptgep$poptgep7$poptgepsqueezed.i1=11;
		L$poptgep$poptgep7$poptgepsqueezed=L$poptgep$poptgep7$poptgepsqueezed.a2;
		L$poptgep$poptgep7$poptgepsqueezed[1]=0;
		L$poptgep$poptgep7$poptgepsqueezed[0]=1;
		L$poptgep$poptgep7$poptgepsqueezed=_impure_data.a14;
	}
	L$poptgep$poptgep7$poptgepsqueezed=L$poptgep$poptgep7$poptgepsqueezed.a2;
	tmp0=L$poptgep$poptgep7$poptgepsqueezed[0]|0;
	tmp1=tmp0>>>16;
	tmp8=tmp0&65535;
	tmp2=(tmp1*32557|0)+(tmp8*19605|0)|0;
	tmp3=tmp2<<16;
	tmp8=tmp8*32557|0;
	tmp4=tmp3+tmp8|0;
	L$poptgep$poptgep7$poptgepsqueezed[1]=(((((tmp0*1481765933|0)+((L$poptgep$poptgep7$poptgepsqueezed[1]|0)*1284865837|0)|0)+(tmp1*19605|0)|0)+(tmp2>>>16)|0)+(tmp3>>>0>(tmp8^ -1)>>>0?1:0)|0)+((tmp4|0)===-1?1:0)|0;
	L$poptgep$poptgep7$poptgepsqueezed[0]=tmp4+1|0;
	tmp5=(+(_impure_data.a14.a2[1]&2147483647|0))*4.6566128730773926E-10*2+-1;
	Larg0.d4=tmp5;
	return tmp5;
}
function __ZN7maxiOscC1Ev(Larg0){
	Larg0.d1=0;
}
function __ZN12maxiPolyBLEP13setPulseWidthEd(Larg0,Larg1){
	__ZN8PolyBLEP13setPulseWidthEd();
}
function __ZN12maxiPolyBLEP11setWaveformEN8PolyBLEP8WaveformE(Larg0,Larg1){
	__ZN8PolyBLEP11setWaveformENS_8WaveformE();
}
function __ZN12maxiPolyBLEP4playEd(Larg0,Larg1){
	__ZN8PolyBLEP12setFrequencyEd();
	return +__ZN8PolyBLEP9getAndIncEv();
}
function __ZN12maxiPolyBLEPC1Ev(Larg0){
	__ZN8PolyBLEPC1Ed();
	__ZN8PolyBLEP13setSampleRateEd();
}
function __ZN12maxiRatioSeqC1Ev(Larg0){
	Larg0.d0=0;
	Larg0.i1=0;
	Larg0.i2=0;
}
function __ZN12maxiRatioSeq10playValuesEdPN6client12Float64ArrayES2_(Larg0,Larg1,Larg2,Larg3){
	var tmp0=-0.,tmp1=0,tmp2=-0.,tmp3=0,tmp4=0,tmp5=0,tmp6=-0.,tmp7=-0.,tmp8=-0.;
	tmp2=+Larg3.length;
	tmp3=~~tmp2;
	if((Larg0.i2|0)!==(tmp3|0)){
		Larg0.i2=tmp3;
		Larg0.i1=tmp3-1|0;
	}
	tmp4=~~ +Larg2.length;
	if((tmp4|0)!==0){
		tmp5=0;
		tmp2=0;
		while(1){
			tmp2+= +Larg2[0+tmp5|0];
			tmp5=tmp5+1|0;
			if((tmp5|0)!==(tmp4|0))continue;
			break;
		}
		tmp0=-1/(+(__ZN12maxiSettings10sampleRateE|0));
		tmp6=0;
		tmp5=0;
		while(1){
			tmp6+= +Larg2[0+tmp5|0];
			tmp7=tmp6/tmp2;
			if(tmp7===1){
				tmp7=0;
			}
			tmp8=+Larg0.d0;
			if(tmp8>Larg1){
				Larg0.d0=tmp0;
				tmp8=tmp0;
			}
			tmp1=tmp8<=tmp7?1:0;
			if(tmp7<Larg1)if(tmp1){
				Larg0.d0=Larg1;
				tmp4=(Larg0.i1|0)+1|0;
				tmp3=(tmp4|0)===(tmp3|0)?0|0:tmp4|0;
				Larg0.i1=tmp3;
				return +Larg3[0+tmp3|0];
			}
			tmp5=tmp5+1|0;
			if(tmp5>>>0<tmp4>>>0)continue;
			break;
		}
	}
	Larg0.d0=Larg1;
	return +Larg3[0+(Larg0.i1|0)|0];
}
function __ZN12maxiRatioSeq8playTrigEdPN6client12Float64ArrayE(Larg0,Larg1,Larg2){
	var tmp0=0,tmp1=-0.,tmp2=0,tmp3=-0.,tmp4=0,tmp5=-0.,tmp6=-0.,tmp7=-0.;
	tmp0=~~ +Larg2.length;
	if((tmp0|0)===0){
		Larg0.d0=Larg1;
		return 0;
	}
	tmp4=0;
	tmp3=0;
	while(1){
		tmp3+= +Larg2[0+tmp4|0];
		tmp4=tmp4+1|0;
		if((tmp4|0)!==(tmp0|0))continue;
		break;
	}
	tmp1=-1/(+(__ZN12maxiSettings10sampleRateE|0));
	tmp5=0;
	tmp4=0;
	while(1){
		tmp5+= +Larg2[0+tmp4|0];
		tmp6=tmp5/tmp3;
		if(tmp6===1){
			tmp6=0;
		}
		tmp7=+Larg0.d0;
		if(tmp7>Larg1){
			Larg0.d0=tmp1;
			tmp7=tmp1;
		}
		tmp2=tmp7<=tmp6?1:0;
		if(tmp6<Larg1)if(tmp2){
			Larg0.d0=Larg1;
			return 1;
		}
		tmp4=tmp4+1|0;
		if(tmp4>>>0<tmp0>>>0)continue;
		break;
	}
	Larg0.d0=Larg1;
	return 0;
}
function __ZN9maxiIndexC1Ev(Larg0){
	Larg0.d0=1;
	Larg0.i1=1;
	Larg0.d2=0;
}
function __ZN9maxiIndex4pullEddPN6client12Float64ArrayE(Larg0,Larg1,Larg2,Larg3){
	var Lgeptoindexphi=0,L$psroa$p8$p0=null,L$psroa$p8$p0o=0,tmp2=0,tmp3=0,L$psroa$p0$p0=null,Lgeptoindexphi2=0,tmp6=-0.;
	tmp2=~~ +Larg3.length;
	tmp3=tmp2<<3;
	if((tmp3|0)!==0){
		L$psroa$p0$p0=new Float64Array(tmp3/8|0);
		if((tmp3|0)>0){
			tmp3=tmp2&536870911;
			if((tmp3|0)!==0){
				Lgeptoindexphi2=0;
				Lgeptoindexphi=0;
				while(1){
					L$psroa$p0$p0[Lgeptoindexphi2]=+Larg3[0+Lgeptoindexphi|0];
					Lgeptoindexphi2=Lgeptoindexphi2+1|0;
					if(L$psroa$p0$p0!==L$psroa$p0$p0||(0+tmp3|0)!==(0+Lgeptoindexphi2|0)){
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						continue;
					}
					break;
				}
			}
			L$psroa$p8$p0o=0+(tmp2&536870911)|0;
			L$psroa$p8$p0=L$psroa$p0$p0;
		}else{
			L$psroa$p8$p0o=0;
			L$psroa$p8$p0=L$psroa$p0$p0;
		}
	}else{
		L$psroa$p0$p0=nullArray;
		L$psroa$p8$p0o=0;
		L$psroa$p8$p0=nullArray;
	}
	a:{
		if( +Larg0.d0<=0){
			if(!(Larg1>0))break a;
		}else{
			tmp2=Larg0.i1|0;
			if(!(Larg1>0))break a;
			if((tmp2&255)===0)break a;
		}
		Larg0.d0=Larg1;
		Larg0.i1=0;
		if(Larg2<0){
			tmp6=0;
		}else if(Larg2>1){
			tmp6=1;
		}else{
			tmp6=Larg2;
		}
		tmp6=+Math.floor(tmp6*.99999998999999994*(+(((L$psroa$p8$p0o)*8)-((0)*8)>>3>>>0)));
		tmp6=+L$psroa$p0$p0[~~tmp6];
		Larg0.d2=tmp6;
		return tmp6;
	}
	Larg0.d0=Larg1;
	Larg0.i1=0;
	return +Larg0.d2;
}
function __ZN10maxiBiquadC1Ev(Larg0){
	var L$poptgep$poptgep6$poptgepsqueezed=null;
	Larg0.d0=0;
	Larg0.d1=0;
	Larg0.d2=0;
	Larg0.d3=0;
	Larg0.d4=0;
	Larg0.d6=1.4142135623730951;
	L$poptgep$poptgep6$poptgepsqueezed=Larg0.a7;
	L$poptgep$poptgep6$poptgepsqueezed[0]=0;
	L$poptgep$poptgep6$poptgepsqueezed[1]=0;
	L$poptgep$poptgep6$poptgepsqueezed[2]=0;
}
function __ZN10maxiBiquad3setENS_11filterTypesEddd(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=-0.,tmp1=-0.,tmp2=-0.,tmp3=-0.,tmp4=-0.,tmp5=-0.;
	tmp0=+Math.abs(Larg4);
	tmp0=+Math.pow(10,tmp0/20);
	tmp1=+Math.tan(Larg2*3.1415926535897931/(+(__ZN12maxiSettings10sampleRateE|0)));
	switch(Larg1|0){
		case 0:
		tmp2=tmp1*tmp1;
		tmp1/=Larg3;
		tmp0=1/(tmp2+(tmp1+1));
		tmp3=tmp2*tmp0;
		Larg0.d0=tmp3;
		Larg0.d1=tmp3*2;
		Larg0.d2=tmp3;
		Larg0.d3=(tmp2+-1)*2*tmp0;
		Larg0.d4=(tmp2+(1-tmp1))*tmp0;
		break;
		case 1:
		tmp3=tmp1*tmp1;
		tmp1/=Larg3;
		tmp0=1/(tmp3+(tmp1+1));
		Larg0.d0=tmp0;
		Larg0.d1=tmp0*-2;
		Larg0.d2=tmp0;
		Larg0.d3=(tmp3+-1)*2*tmp0;
		Larg0.d4=(tmp3+(1-tmp1))*tmp0;
		break;
		case 2:
		tmp2=tmp1*tmp1;
		tmp1/=Larg3;
		tmp0=1/(tmp2+(tmp1+1));
		tmp3=tmp1*tmp0;
		Larg0.d0=tmp3;
		Larg0.d1=0;
		Larg0.d2=-tmp3;
		Larg0.d3=(tmp2+-1)*2*tmp0;
		Larg0.d4=(tmp2+(1-tmp1))*tmp0;
		break;
		case 3:
		tmp4=tmp1*tmp1;
		tmp1/=Larg3;
		tmp0=1/(tmp4+(tmp1+1));
		tmp3=(tmp4+1)*tmp0;
		Larg0.d0=tmp3;
		tmp2=(tmp4+-1)*2*tmp0;
		Larg0.d1=tmp2;
		Larg0.d2=tmp3;
		Larg0.d3=tmp2;
		Larg0.d4=(tmp4+(1-tmp1))*tmp0;
		break;
		case 4:
		if(Larg4>=0){
			tmp3=tmp1*tmp1;
			tmp2=1/Larg3*tmp1;
			tmp4=1/(tmp3+(tmp2+1));
			tmp1*=(tmp0/Larg3);
			Larg0.d0=(tmp3+(tmp1+1))*tmp4;
			tmp0=(tmp3+-1)*2*tmp4;
			Larg0.d1=tmp0;
			Larg0.d2=(tmp3+(1-tmp1))*tmp4;
			Larg0.d3=tmp0;
			Larg0.d4=(tmp3+(1-tmp2))*tmp4;
			break;
		}
		tmp3=tmp0/Larg3*tmp1;
		tmp2=tmp1*tmp1;
		tmp4=1/(tmp2+(tmp3+1));
		tmp1*=(1/Larg3);
		Larg0.d0=(tmp2+(tmp1+1))*tmp4;
		tmp0=(tmp2+-1)*2*tmp4;
		Larg0.d1=tmp0;
		Larg0.d2=(tmp2+(1-tmp1))*tmp4;
		Larg0.d3=tmp0;
		Larg0.d4=(tmp2+(1-tmp3))*tmp4;
		break;
		case 5:
		if(Larg4>=0){
			tmp3=tmp1*tmp1;
			tmp2=1/(tmp3+(tmp1* +Larg0.d6+1));
			tmp4=tmp0*2;
			tmp0=tmp1*(tmp0*tmp1);
			Larg0.d0=(tmp0+(tmp1* +Math.sqrt(tmp4)+1))*tmp2;
			Larg0.d1=(tmp0+-1)*2*tmp2;
			Larg0.d2=tmp2*(tmp0+(1-tmp1* +Math.sqrt(tmp4)));
			Larg0.d3=(tmp3+-1)*2*tmp2;
			Larg0.d4=tmp2*(tmp3+(1-tmp1* +Larg0.d6));
			break;
		}
		tmp5=tmp0*2;
		tmp0=tmp1*(tmp0*tmp1);
		tmp4=1/(tmp0+(tmp1* +Math.sqrt(tmp5)+1));
		tmp3=tmp1*tmp1;
		tmp2=tmp1* +Larg0.d6;
		Larg0.d0=tmp4*(tmp3+(tmp2+1));
		Larg0.d1=(tmp3+-1)*2*tmp4;
		Larg0.d2=tmp4*(tmp3+(1-tmp2));
		Larg0.d3=(tmp0+-1)*2*tmp4;
		Larg0.d4=tmp4*(tmp0+(1-tmp1* +Math.sqrt(tmp5)));
		break;
		case 6:
		if(Larg4>=0){
			tmp3=tmp1*tmp1;
			tmp2=1/(tmp3+(tmp1* +Larg0.d6+1));
			tmp4=tmp0*2;
			Larg0.d0=(tmp3+(tmp0+tmp1* +Math.sqrt(tmp4)))*tmp2;
			Larg0.d1=(tmp3-tmp0)*2*tmp2;
			Larg0.d2=tmp2*(tmp3+(tmp0-tmp1* +Math.sqrt(tmp4)));
			Larg0.d3=(tmp3+-1)*2*tmp2;
			Larg0.d4=tmp2*(tmp3+(1-tmp1* +Larg0.d6));
			break;
		}
		tmp3=tmp0*2;
		tmp2=tmp1*tmp1;
		tmp4=1/(tmp2+(tmp0+tmp1* +Math.sqrt(tmp3)));
		tmp5=tmp1* +Larg0.d6;
		Larg0.d0=tmp4*(tmp2+(tmp5+1));
		Larg0.d1=(tmp2+-1)*2*tmp4;
		Larg0.d2=tmp4*(tmp2+(1-tmp5));
		Larg0.d3=(tmp2-tmp0)*2*tmp4;
		Larg0.d4=tmp4*(tmp2+(tmp0-tmp1* +Math.sqrt(tmp3)));
		break;
		default:
	}
}
function __ZN10maxiBiquad4playEd(Larg0,Larg1){
	var L$poptgep$poptgep2$poptgepsqueezed=null,tmp1=-0.,tmp2=-0.,tmp3=-0.,tmp4=-0.,tmp5=-0.,tmp6=-0.;
	L$poptgep$poptgep2$poptgepsqueezed=Larg0.a7;
	tmp1=+L$poptgep$poptgep2$poptgepsqueezed[1];
	tmp2=+L$poptgep$poptgep2$poptgepsqueezed[2];
	tmp3=Larg1- +Larg0.d3*tmp1- +Larg0.d4*tmp2;
	L$poptgep$poptgep2$poptgepsqueezed[0]=tmp3;
	tmp4=+Larg0.d0;
	tmp5=+Larg0.d1;
	tmp6=+Larg0.d2;
	L$poptgep$poptgep2$poptgepsqueezed[2]=tmp1;
	L$poptgep$poptgep2$poptgepsqueezed[1]=tmp3;
	return tmp3*tmp4+tmp1*tmp5+tmp2*tmp6;
}
function __ZN16maxiNonlinearityC1Ev(Larg0){
}
function __ZN16maxiNonlinearity12fastAtanDistEdd(Larg0,Larg1,Larg2){
	var tmp0=-0.;
	tmp0=Larg1*Larg2;
	return 1/(Larg2/(Larg2*Larg2*.28+1))*(tmp0/(tmp0*tmp0*.28+1));
}
function __ZN16maxiNonlinearity8atanDistEdd(Larg0,Larg1,Larg2){
	return 1/ +Math.atan(Larg2)* +Math.atan(Larg1*Larg2);
}
function __ZN16maxiNonlinearity8fastatanEd(Larg0,Larg1){
	return Larg1/(Larg1*Larg1*.28+1);
}
function __ZN16maxiNonlinearity8softclipEd(Larg0,Larg1){
	if(Larg1>=1)return 1;
	if(Larg1<=-1)return -1;
	return (Larg1- +Math.pow(Larg1,3)/3)*.66666666666666663;
}
function __ZN16maxiNonlinearity8hardclipEd(Larg0,Larg1){
	if(Larg1>=1)return 1;
	if(Larg1<=-1)return -1;
	return Larg1;
}
function __ZN16maxiNonlinearity8asymclipEddd(Larg0,Larg1,Larg2,Larg3){
	if(Larg1>=1)return 1;
	if(Larg1<=-1)return -1;
	if(Larg1<0)return - +Math.pow(-Larg1,Larg2);
	return +Math.pow(Larg1,Larg3);
}
function __ZN7maxiMapC1Ev(Larg0){
}
function __ZN7maxiMap5clampEddd(Larg0,Larg1,Larg2){
	if(Larg0>Larg2)return Larg2;
	if(Larg0<Larg1)return Larg1;
	return Larg0;
}
function __ZN7maxiMap6explinEddddd(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=-0.;
	tmp0=Larg2<Larg0?Larg2:Larg0;
	tmp0=+Math.log((tmp0<Larg1?Larg1:tmp0)/Larg1);
	return (Larg4-Larg3)*(tmp0/ +Math.log(Larg2/Larg1))+Larg3;
}
function __ZN7maxiMap6linexpEddddd(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=-0.;
	tmp0=Larg2<Larg0?Larg2:Larg0;
	return  +Math.pow(Larg4/Larg3,((tmp0<Larg1?Larg1:tmp0)-Larg1)/(Larg2-Larg1))*Larg3;
}
function __ZN7maxiMap6linlinEddddd(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=-0.;
	tmp0=Larg2<Larg0?Larg2:Larg0;
	return (Larg4-Larg3)*(((tmp0<Larg1?Larg1:tmp0)-Larg1)/(Larg2-Larg1))+Larg3;
}
function __ZN10maxiSample8autoTrimEffbb(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=null,tmp1=-0.,tmp2=-0.,tmp3=-0.,tmp4=0,tmp5=-0.,L$pidx$pval=null,tmp7=-0.,tmp8=0,tmp9=0,tmp10=null,tmp10o=0,tmp11=0;
	if(Larg3){
		if( +Larg0.a8.length>0){
			tmp1=Larg2;
			tmp2=Larg1;
			tmp3=1-tmp2;
			tmp5=0;
			tmp4=0;
			while(1){
				L$pidx$pval=Larg0.a8;
				tmp7=+L$pidx$pval[0+tmp4|0];
				tmp7=+Math.abs(tmp7);
				tmp5=tmp3*tmp5+tmp7*tmp2;
				if(!(tmp5>tmp1)){
					tmp4=tmp4+1|0;
					if( +L$pidx$pval.length>(+(tmp4|0)))continue;
				}
				break;
			}
		}else{
			tmp4=0;
		}
	}else{
		tmp4=0;
	}
	tmp8=~~( +Larg0.a8.length+-1);
	if(Larg4)if((tmp8|0)>0){
		L$pidx$pval=Larg0.a8;
		tmp1=1-Larg1;
		tmp2=0;
		while(1){
			tmp3=+L$pidx$pval[0+tmp8|0];
			tmp3=+Math.abs(tmp3);
			tmp2=tmp1*tmp2+tmp3*Larg1;
			if(!(tmp2>Larg2)){
				tmp9=tmp8-1|0;
				if((tmp8|0)>1){
					tmp8=tmp9;
					continue;
				}
				tmp8=tmp9;
			}
			break;
		}
	}
	__ZSt24__put_character_sequenceIcSt11char_traitsIcEERSt13basic_ostreamIT_T0_ES6_PKS3_j(_$pstr$p8,0,17);
	__ZNSolsEi(tmp4);
	__ZSt24__put_character_sequenceIcSt11char_traitsIcEERSt13basic_ostreamIT_T0_ES6_PKS3_j(_$pstr$p1,0,7);
	__ZNSolsEi(tmp8);
	tmp9=__ZSt4cout.a0.i3|0;
	L$pidx$pval=__ZSt4cout.a[tmp9];
	L$pidx$pval=L$pidx$pval.a7.a0;
	L$pidx$pval.i1=(L$pidx$pval.i1|0)+1|0;
	if((__ZNSt5ctypeIcE2idE.i0&255)!==0){
		tmp9=__ZNSt5ctypeIcE2idE.i1|0;
	}else{
		tmp9=(__ZNSt6locale2id9__next_idE|0)+1|0;
		__ZNSt6locale2id9__next_idE=tmp9;
		__ZNSt5ctypeIcE2idE.i1=tmp9;
		__ZNSt5ctypeIcE2idE.i0=1;
	}
	tmp10=L$pidx$pval.a2.a0;
	tmp10=tmp10[tmp9-1|0];
	tmp9=tmp10.a0.a8(tmp10,10)|0;
	tmp11=L$pidx$pval.i1|0;
	L$pidx$pval.i1=tmp11-1|0;
	if((tmp11|0)===0)L$pidx$pval.a0.a3(L$pidx$pval);
	tmp11=__ZSt4cout.a0.i3|0;
	L$pidx$pval=__ZSt4cout.a[tmp11];
	a:if((L$pidx$pval.i4|0)===0){
		tmp11=__ZSt4cout.a0.i3|0;
		L$pidx$pval=__ZSt4cout.a[tmp11];
		if(L$pidx$pval.a18!==null){
			tmp11=__ZSt4cout.a0.i3|0;
			L$pidx$pval=__ZSt4cout.a[tmp11];
			__ZNSo5flushEv(L$pidx$pval.a18);
		}
		tmp11=__ZSt4cout.a0.i3|0;
		L$pidx$pval=__ZSt4cout.a[tmp11];
		L$pidx$pval=L$pidx$pval.a6;
		if(L$pidx$pval!==null){
			tmp10o=L$pidx$pval.a6o;
			tmp10=L$pidx$pval.a6;
			tmp0=L$pidx$pval.a7;
			if(tmp10!==tmp0||tmp10o!==0){
				L$pidx$pval.a6=tmp10;
				L$pidx$pval.a6o=tmp10o+1|0;
				tmp10[tmp10o]=tmp9;
				break a;
			}
			if((L$pidx$pval.a0.a14(L$pidx$pval,tmp9&255)|0|0)!==-1)break a;
		}
		tmp9=__ZSt4cout.a0.i3|0;
		L$pidx$pval=__ZSt4cout.a[tmp9];
		L$pidx$pval.i4=L$pidx$pval.i4|1;
	}
	tmp9=__ZSt4cout.a0.i3|0;
	L$pidx$pval=__ZSt4cout.a[tmp9];
	if(L$pidx$pval.a6!==null){
		tmp9=__ZSt4cout.a0.i3|0;
		L$pidx$pval=__ZSt4cout.a[tmp9];
		if((L$pidx$pval.i4|0)===0){
			tmp9=__ZSt4cout.a0.i3|0;
			L$pidx$pval=__ZSt4cout.a[tmp9];
			if((L$pidx$pval.i1&8192|0)!==0){
				tmp9=__ZSt4cout.a0.i3|0;
				L$pidx$pval=__ZSt4cout.a[tmp9];
				L$pidx$pval=L$pidx$pval.a6;
				if((L$pidx$pval.a0.a7(L$pidx$pval)|0|0)===-1){
					tmp9=__ZSt4cout.a0.i3|0;
					L$pidx$pval=__ZSt4cout.a[tmp9];
					L$pidx$pval.i4=L$pidx$pval.i4|1;
				}
			}
		}
	}
	__ZNSo5flushEv(__ZSt4cout);
	tmp8=tmp8-tmp4|0;
	a:if((tmp8|0)>0){
		L$pidx$pval=new Float64Array(new Float64Array(1));
		Larg0.a8=L$pidx$pval;
		tmp9=0;
		while(1){
			tmp10=new Float64Array(+L$pidx$pval[0+(tmp9+tmp4|0)|0]);
			tmp9=tmp9+1|0;
			L$pidx$pval=Larg0.a8;
			if((tmp9|0)!==(tmp8|0))continue;
			break;
		}
		new Float64Array(L$pidx$pval);
		Larg0.d0=0;
		Larg0.d1=0;
		if( +Larg0.a8.length>100){
			tmp4=~~ +Larg0.a8.length;
			if((tmp4|0)===0)break a;
		}else{
			tmp4=100;
		}
		tmp1=(+(tmp4>>>0));
		tmp8=0;
		while(1){
			tmp2=(+(tmp8|0));
			tmp3=tmp2/tmp1;
			L$pidx$pval=Larg0.a8;
			L$pidx$pval[0+tmp8|0]=+Math.round(tmp3* +L$pidx$pval[0+tmp8|0]);
			tmp3=+Math.round(tmp3* +L$pidx$pval[0+~~( +L$pidx$pval.length+-1-tmp2)|0]);
			L$pidx$pval=Larg0.a8;
			L$pidx$pval[0+~~( +L$pidx$pval.length+-1-tmp2)|0]=tmp3;
			tmp8=tmp8+1|0;
			if((tmp8|0)!==(tmp4|0))continue;
			break;
		}
	}
}
function _round(Larg0){
	var tmp0=null,tmp1=-0.,tmp2=0,tmp3=0,tmp4=0,tmp5=0;
	tmp0={d:new DataView(new ArrayBuffer(8)),o:0};
	tmp0.d.setFloat64(tmp0.o,Larg0,true);
	tmp2=tmp0.d.getInt32(1*4+tmp0.o,true)|0;
	tmp3=tmp0.d.getInt32(tmp0.o,true)|0;
	tmp4=tmp2>>>20&2047;
	tmp5=tmp4-1023|0;
	if(tmp4>>>0<1043){
		if(tmp4>>>0<1023){
			tmp2&= -2147483648;
			tmp3=(tmp5|0)===-1?tmp2|1072693248|0:tmp2|0;
			tmp2=0;
		}else{
			if((1048575>>>tmp5&tmp2|tmp3|0)===0)return Larg0;
			tmp3=(524288>>>tmp5)+tmp2& -1048576>>tmp5;
			tmp2=0;
		}
	}else{
		if(tmp4>>>0>1074)return (tmp5|0)===1024?Larg0+Larg0:Larg0;
		tmp5= -1>>>(tmp4-1043|0);
		if((tmp5&tmp3|0)===0)return Larg0;
		tmp4=(1<<(1074-tmp4|0))+tmp3|0;
		tmp3=tmp2+(tmp4>>>0<tmp3>>>0?1:0)|0;
		tmp2=tmp4&(tmp5^ -1);
	}
	tmp0.d.setInt32(1*4+tmp0.o,tmp3,true);
	tmp0.d.setInt32(tmp0.o,tmp2,true);
	tmp1=+tmp0.d.getFloat64(tmp0.o,true);
	return tmp1;
}
function __ZNSo5flushEv(Larg0){
	var tmp0=0,tmp1=null;
	tmp0=Larg0.a0.i3|0;
	tmp1=Larg0.a[tmp0];
	if(tmp1.a6!==null){
		tmp0=Larg0.a0.i3|0;
		tmp1=Larg0.a[tmp0];
		if((tmp1.i4|0)===0){
			tmp0=Larg0.a0.i3|0;
			tmp1=Larg0.a[tmp0];
			if(tmp1.a18!==null){
				tmp0=Larg0.a0.i3|0;
				tmp1=Larg0.a[tmp0];
				__ZNSo5flushEv(tmp1.a18);
			}
			tmp0=Larg0.a0.i3|0;
			tmp1=Larg0.a[tmp0];
			tmp1=tmp1.a6;
			if((tmp1.a0.a7(tmp1)|0|0)===-1){
				tmp0=Larg0.a0.i3|0;
				tmp1=Larg0.a[tmp0];
				tmp1.i4=tmp1.i4|1;
			}
		}
		tmp0=Larg0.a0.i3|0;
		tmp1=Larg0.a[tmp0];
		if(tmp1.a6!==null){
			tmp0=Larg0.a0.i3|0;
			tmp1=Larg0.a[tmp0];
			if((tmp1.i4|0)===0){
				tmp0=Larg0.a0.i3|0;
				tmp1=Larg0.a[tmp0];
				if((tmp1.i1&8192|0)!==0){
					tmp0=Larg0.a0.i3|0;
					tmp1=Larg0.a[tmp0];
					tmp1=tmp1.a6;
					if((tmp1.a0.a7(tmp1)|0|0)===-1){
						tmp0=Larg0.a0.i3|0;
						tmp1=Larg0.a[tmp0];
						tmp1.i4=tmp1.i4|1;
					}
				}
			}
		}
	}
}
function __ZNKSt8messagesIwE8do_closeEl(Larg0,Larg1){
}
function __ZNKSt8messagesIwE6do_getEliiRKSbIwSt11char_traitsIwESaIwEE(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var tmp0=null,tmp1=0,tmp2=null,Lgeptoindexphi=0,tmp4=0,Lgeptoindexphi2=0;
	tmp0=Larg5.a2;
	tmp1=Larg5.i1|0;
	tmp4=tmp1+4& -4;
	tmp2=new Int32Array((tmp4<<2)/4|0);
	Larg0.a2=tmp2;
	Larg0.i0=tmp4|1;
	Larg0.i1=tmp1;
	if((tmp1|0)!==0){
		tmp4=tmp1&1073741823;
		if((tmp4|0)!==0){
			Lgeptoindexphi2=0;
			Lgeptoindexphi=0;
			while(1){
				tmp2[Lgeptoindexphi2]=tmp0[Lgeptoindexphi]|0;
				Lgeptoindexphi2=Lgeptoindexphi2+1|0;
				if(tmp2!==tmp2||(0+tmp4|0)!==(0+Lgeptoindexphi2|0)){
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					continue;
				}
				break;
			}
		}
	}
	tmp2[tmp1]=0;
}
function __ZNKSt8messagesIwE7do_openERKSsRKSt6locale(Larg0,Larg1,Larg2){
	return  -1|0;
}
function __ZNSt8messagesIwED0Ev(Larg0){
}
function __ZNSt8messagesIwED2Ev(Larg0){
}
function __ZNKSt8messagesIcE8do_closeEl(Larg0,Larg1){
}
function __ZNKSt8messagesIcE6do_getEliiRKSs(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var tmp0=null,tmp1=0,tmp2=null,Lgeptoindexphi=0,Lgeptoindexphi2=0;
	tmp0=Larg5.a2;
	tmp1=Larg5.i1|0;
	Lgeptoindexphi=tmp1+16& -16;
	tmp2=new Uint8Array(Lgeptoindexphi/1|0);
	Larg0.a2=tmp2;
	Larg0.i0=Lgeptoindexphi|1;
	Larg0.i1=tmp1;
	if((tmp1|0)!==0){
		Lgeptoindexphi2=0;
		Lgeptoindexphi=0;
		while(1){
			tmp2[Lgeptoindexphi2]=tmp0[Lgeptoindexphi]|0;
			Lgeptoindexphi2=Lgeptoindexphi2+1|0;
			if(tmp2!==tmp2||(0+tmp1|0)!==(0+Lgeptoindexphi2|0)){
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				continue;
			}
			break;
		}
	}
	tmp2[tmp1]=0;
}
function __ZNKSt8messagesIcE7do_openERKSsRKSt6locale(Larg0,Larg1,Larg2){
	return  -1|0;
}
function __ZNSt8messagesIcED0Ev(Larg0){
}
function __ZNSt8messagesIcED2Ev(Larg0){
}
function __ZNKSt8time_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_RSt8ios_basewPK2tmcc(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6,Larg7){
	var tmp0=null,tmp1=0,tmp2=null,LmergedArray=null,tmp4=null,tmp5=null,tmp5o=0,Lgeptoindexphi=0,tmp7=0;
	tmp0=new Int32Array(100);
	LmergedArray=new Uint8Array(104);
	tmp4={i0:0,i1:0};
	tmp5=[nullObj];
	LmergedArray[0]=37;
	LmergedArray[1]=Larg6;
	LmergedArray[2]=Larg7;
	LmergedArray[3]=0;
	if((Larg7&255)!==0){
		LmergedArray[1]=Larg7;
		LmergedArray[2]=Larg6;
	}
	_strftime(LmergedArray,4,100,LmergedArray,0,Larg5)|0;
	tmp4.i0=0;
	tmp4.i1=0;
	tmp5[0]={d:LmergedArray,o:4};
	tmp1=__mbsnrtowcs_r(tmp0,0,tmp5,0,-1,100,tmp4)|0;
	LmergedArray=Larg2.a0;
	if((tmp1|0)===0){
		Larg0.a0=LmergedArray;
		return;
	}
	tmp4=LmergedArray;
	Lgeptoindexphi=0;
	while(1){
		tmp7=tmp0[Lgeptoindexphi]|0;
		if(tmp4!==null){
			tmp5o=tmp4.a6o;
			tmp5=tmp4.a6;
			tmp2=tmp4.a7;
			if(tmp5===tmp2&&tmp5o===0){
				tmp7=tmp4.a0.a14(tmp4,tmp7)|0;
			}else{
				tmp4.a6=tmp5;
				tmp4.a6o=tmp5o+1|0;
				tmp5[tmp5o]=tmp7;
			}
			LmergedArray=((tmp7|0)===-1?null:LmergedArray);
			tmp4=((tmp7|0)===-1?null:tmp4);
		}else{
			tmp4=null;
		}
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if(tmp0!==tmp0||(0+Lgeptoindexphi|0)!==tmp1)continue;
		break;
	}
	Larg0.a0=LmergedArray;
}
function __mbsnrtowcs_r(Larg0,Marg0,Larg1,Marg1,Larg2,Larg3,Larg4){
	var tmp0=null,L$poptgep$poptgep11$poptgepsqueezed=null,L$ppre=null,L$ppreo=0,L$plcssa4=0,L$plcssa2=0,tmp5=0,Lgeptoindexphi=0,L$plcssa=0;
	tmp0=[nullObj];
	if(Larg4!==null){
		L$poptgep$poptgep11$poptgepsqueezed=Larg4;
	}else{
		L$poptgep$poptgep11$poptgepsqueezed=_impure_data.a22;
		if(L$poptgep$poptgep11$poptgepsqueezed===null){
			L$poptgep$poptgep11$poptgepsqueezed=new constructor_struct$p_Z11_misc_reent();
			_impure_data.a22=L$poptgep$poptgep11$poptgepsqueezed;
			L$poptgep$poptgep11$poptgepsqueezed.a0=null;
			L$poptgep$poptgep11$poptgepsqueezed=L$poptgep$poptgep11$poptgepsqueezed.a1;
			L$poptgep$poptgep11$poptgepsqueezed.i0=0;
			L$poptgep$poptgep11$poptgepsqueezed.i1=0;
			L$poptgep$poptgep11$poptgepsqueezed=_impure_data.a22.a2;
			L$poptgep$poptgep11$poptgepsqueezed.i0=0;
			L$poptgep$poptgep11$poptgepsqueezed.i1=0;
			L$poptgep$poptgep11$poptgepsqueezed=_impure_data.a22.a3;
			L$poptgep$poptgep11$poptgepsqueezed.i0=0;
			L$poptgep$poptgep11$poptgepsqueezed.i1=0;
			L$poptgep$poptgep11$poptgepsqueezed=_impure_data.a22.a6;
			L$poptgep$poptgep11$poptgepsqueezed.i0=0;
			L$poptgep$poptgep11$poptgepsqueezed.i1=0;
			L$poptgep$poptgep11$poptgepsqueezed=_impure_data.a22.a7;
			L$poptgep$poptgep11$poptgepsqueezed.i0=0;
			L$poptgep$poptgep11$poptgepsqueezed.i1=0;
			L$poptgep$poptgep11$poptgepsqueezed=_impure_data.a22.a8;
			L$poptgep$poptgep11$poptgepsqueezed.i0=0;
			L$poptgep$poptgep11$poptgepsqueezed.i1=0;
			L$poptgep$poptgep11$poptgepsqueezed=_impure_data.a22.a9;
			L$poptgep$poptgep11$poptgepsqueezed.i0=0;
			L$poptgep$poptgep11$poptgepsqueezed.i1=0;
			L$poptgep$poptgep11$poptgepsqueezed=_impure_data.a22.a10;
			L$poptgep$poptgep11$poptgepsqueezed.i0=0;
			L$poptgep$poptgep11$poptgepsqueezed.i1=0;
			_impure_data.a22.a4[0]=0;
			L$poptgep$poptgep11$poptgepsqueezed=_impure_data.a22;
			L$poptgep$poptgep11$poptgepsqueezed.i5=0;
		}
		L$poptgep$poptgep11$poptgepsqueezed=L$poptgep$poptgep11$poptgepsqueezed.a8;
	}
	if(Larg0!==nullArray||Marg0!==0){
		if((Larg3|0)===0)return 0|0;
		L$ppre=Larg1[Marg1];
		L$ppreo=L$ppre.o;
		L$ppre=L$ppre.d;
		Lgeptoindexphi=0;
		tmp5=Larg3;
		L$plcssa2=Larg2;
		L$plcssa4=0;
		while(1){
			L$plcssa=__mbrtowc_r(Larg0,Marg0+Lgeptoindexphi|0,L$ppre,L$ppreo,L$plcssa2,L$poptgep$poptgep11$poptgepsqueezed)|0;
			if((L$plcssa|0)>0){
				L$ppre=Larg1[Marg1];
				Larg1[Marg1]={d:L$ppre.d,o:L$ppre.o+L$plcssa|0};
				L$plcssa2=L$plcssa2-L$plcssa|0;
				tmp5=tmp5-1|0;
				if((tmp5|0)!==0){
					L$ppreo=L$ppre.o+L$plcssa|0;
					L$ppre=L$ppre.d;
					L$plcssa4=L$plcssa4+1|0;
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					continue;
				}
				return Larg3|0;
			}
			break;
		}
		L$ppreo=Marg1;
		L$ppre=Larg1;
	}else{
		L$ppre=Larg1[Marg1];
		tmp0[0]=L$ppre;
		tmp5=-1;
		L$plcssa2=Larg2;
		L$plcssa4=0;
		Lgeptoindexphi=0;
		while(1){
			L$plcssa=__mbrtowc_r(nullArray,0,L$ppre.d,L$ppre.o+Lgeptoindexphi|0,L$plcssa2,L$poptgep$poptgep11$poptgepsqueezed)|0;
			if((L$plcssa|0)>0){
				Lgeptoindexphi=Lgeptoindexphi+L$plcssa|0;
				L$plcssa2=L$plcssa2-L$plcssa|0;
				tmp5=tmp5-1|0;
				if((tmp5|0)!==0){
					L$plcssa4=L$plcssa4+1|0;
					continue;
				}
				tmp0[0]={d:L$ppre.d,o:L$ppre.o+Lgeptoindexphi|0};
				return  -1|0;
			}
			break;
		}
		tmp0[0]={d:L$ppre.d,o:L$ppre.o+Lgeptoindexphi|0};
		L$ppreo=0;
		L$ppre=tmp0;
	}
	switch(L$plcssa|0){
		case -2:
		L$poptgep$poptgep11$poptgepsqueezed=L$ppre[L$ppreo];
		L$ppre[L$ppreo]={d:L$poptgep$poptgep11$poptgepsqueezed.d,o:L$poptgep$poptgep11$poptgepsqueezed.o+L$plcssa2|0};
		return L$plcssa4|0;
		case 0:
		L$ppre[L$ppreo]=nullObj;
		return L$plcssa4|0;
		default:
		L$poptgep$poptgep11$poptgepsqueezed.i0=0;
		_impure_data.i0=138;
		return  -1|0;
	}
}
function __mbrtowc_r(Larg0,Marg0,Larg1,Marg1,Larg2,Larg3){
	var L$poptgep$poptgep1$poptgepsqueezed=null,tmp1=0;
	L$poptgep$poptgep1$poptgepsqueezed=_impure_data.a22;
	if(Larg3===null)if(L$poptgep$poptgep1$poptgepsqueezed===null){
		L$poptgep$poptgep1$poptgepsqueezed=new constructor_struct$p_Z11_misc_reent();
		_impure_data.a22=L$poptgep$poptgep1$poptgepsqueezed;
		L$poptgep$poptgep1$poptgepsqueezed.a0=null;
		L$poptgep$poptgep1$poptgepsqueezed=L$poptgep$poptgep1$poptgepsqueezed.a1;
		L$poptgep$poptgep1$poptgepsqueezed.i0=0;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		L$poptgep$poptgep1$poptgepsqueezed=_impure_data.a22.a2;
		L$poptgep$poptgep1$poptgepsqueezed.i0=0;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		L$poptgep$poptgep1$poptgepsqueezed=_impure_data.a22.a3;
		L$poptgep$poptgep1$poptgepsqueezed.i0=0;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		L$poptgep$poptgep1$poptgepsqueezed=_impure_data.a22.a6;
		L$poptgep$poptgep1$poptgepsqueezed.i0=0;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		L$poptgep$poptgep1$poptgepsqueezed=_impure_data.a22.a7;
		L$poptgep$poptgep1$poptgepsqueezed.i0=0;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		L$poptgep$poptgep1$poptgepsqueezed=_impure_data.a22.a8;
		L$poptgep$poptgep1$poptgepsqueezed.i0=0;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		L$poptgep$poptgep1$poptgepsqueezed=_impure_data.a22.a9;
		L$poptgep$poptgep1$poptgepsqueezed.i0=0;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		L$poptgep$poptgep1$poptgepsqueezed=_impure_data.a22.a10;
		L$poptgep$poptgep1$poptgepsqueezed.i0=0;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		_impure_data.a22.a4[0]=0;
		_impure_data.a22.i5=0;
	}
	if(Larg1!==nullArray||Marg1!==0){
		L$poptgep$poptgep1$poptgepsqueezed=[0];
		if((Larg2|0)!==0){
			(Larg0!==nullArray||Marg0!==0?Larg0:L$poptgep$poptgep1$poptgepsqueezed)[Larg0!==nullArray||Marg0!==0?Marg0:0]=Larg1[Marg1]&255;
			tmp1=Larg1[Marg1]|0;
			tmp1=(tmp1&255)!==0?1:0;
		}else{
			tmp1=-2;
		}
		return tmp1|0;
	}
	return 0|0;
}
function _strftime(Larg0,Marg0,Larg1,Larg2,Marg2,Larg3){
	var tmp0=0,LmergedArray=null,tmp2=null,tmp3=0,Lgeptoindexphi8=0,Lgeptoindex15=0,Lgeptoindexphi41=0,tmp7=0,L$plcssa=0,L$ppre=0,Lgeptoindexphi20=0,tmp11=0,tmp12=0,tmp13=null,tmp13o=0;
	tmp0=Larg1-1|0;
	LmergedArray=new Uint8Array(52);
	Lgeptoindexphi8=0;
	tmp3=0;
	a:while(1){
		Lgeptoindex15=Larg2[Marg2+Lgeptoindexphi8|0]|0;
		switch(Lgeptoindex15&255){
			case 0:
			break a;
			case 37:
			Lgeptoindex15=Lgeptoindexphi8+1|0;
			Lgeptoindexphi41=Larg2[Marg2+Lgeptoindex15|0]|0;
			switch(Lgeptoindexphi41&255){
				case 48:
				case 43:
				Lgeptoindex15=Lgeptoindexphi8+2|0;
				tmp7=Larg2[Marg2+Lgeptoindex15|0]|0;
				break;
				default:
				tmp7=Lgeptoindexphi41;
				Lgeptoindexphi41=0;
			}
			b:if((tmp7+207&255)<9){
				L$plcssa=tmp7&255;
				Lgeptoindexphi8=Lgeptoindex15+1|0;
				if((__ctype_b[128+L$plcssa|0]&8)!==0){
					while(1){
						L$ppre=Larg2[Marg2+Lgeptoindexphi8|0]|0;
						L$plcssa=L$ppre&255;
						if((__ctype_b[128+L$plcssa|0]&8)!==0){
							Lgeptoindexphi8=Lgeptoindexphi8+1|0;
							continue;
						}
						break;
					}
					Lgeptoindexphi20=Lgeptoindexphi8+1|0;
				}else{
					Lgeptoindexphi20=Lgeptoindexphi8;
					Lgeptoindexphi8=Lgeptoindex15;
					L$ppre=tmp7;
				}
				c:{
					switch(L$ppre&255){
						case 45:
						L$ppre=1;
						break;
						case 43:
						L$ppre=0;
						break;
						default:
						L$ppre=0;
						break c;
					}
					L$plcssa=Larg2[Marg2+Lgeptoindexphi20|0]|0;
					L$plcssa=L$plcssa&255;
					Lgeptoindexphi20=Lgeptoindexphi8+2|0;
				}
				Lgeptoindexphi8=0;
				tmp11=0;
				while(1){
					tmp12=__ctype_b[128+L$plcssa|0]<<24>>24;
					if((tmp12&4|0)!==0){
						tmp12=48;
					}else{
						tmp12&=3;
						if((tmp12|0)===0)break;
						tmp12=(tmp12|0)===1?55|0:87|0;
					}
					L$plcssa=L$plcssa-tmp12|0;
					if((L$plcssa|0)<10){
						c:if(tmp11>>>0>429496729){
							Lgeptoindexphi8=-1;
						}else if((Lgeptoindexphi8|0)<0){
							Lgeptoindexphi8=-1;
						}else{
							if((tmp11|0)===429496729)if((L$plcssa|0)>5){
								Lgeptoindexphi8=-1;
								tmp11=429496729;
								break c;
							}
							tmp11=L$plcssa+(tmp11*10|0)|0;
							Lgeptoindexphi8=1;
						}
						L$plcssa=Larg2[Marg2+Lgeptoindexphi20|0]|0;
						L$plcssa=L$plcssa&255;
						Lgeptoindexphi20=Lgeptoindexphi20+1|0;
						continue;
					}
					break;
				}
				if((Lgeptoindexphi8|0)<0){
					_impure_data.i0=34;
					tmp11=-1;
				}else{
					tmp11=(L$ppre|0)!==0?-tmp11|0:tmp11|0;
					if((Lgeptoindexphi8|0)===0)break b;
				}
				Lgeptoindex15=Lgeptoindexphi20-1|0;
				tmp7=Larg2[Marg2+Lgeptoindex15|0]|0;
			}else{
				tmp11=0;
			}
			switch(tmp7&255){
				case 69:
				case 79:
				Lgeptoindex15=Lgeptoindex15+1|0;
				tmp7=Larg2[Marg2+Lgeptoindex15|0]|0;
				break;
				default:
			}
			b:{
				switch(tmp7<<24>>24|0){
					case 97:
					tmp13=__C_time_locale.a0[(Larg3.i6|0)+24|0];
					if((tmp13.d[tmp13.o]&255)!==0){
						Lgeptoindexphi41=0;
						while(1){
							Lgeptoindexphi41=Lgeptoindexphi41+1|0;
							if((tmp13.d[tmp13.o+Lgeptoindexphi41|0]&255)!==0)continue;
							break;
						}
					}else{
						Lgeptoindexphi41=0;
					}
					tmp7=(tmp13.o+Lgeptoindexphi41|0)-(tmp13.o)|0;
					if((tmp7|0)===0)break b;
					Lgeptoindexphi41=0;
					while(1){
						if(tmp3>>>0<tmp0>>>0){
							Larg0[Marg0+tmp3|0]=tmp13.d[tmp13.o+Lgeptoindexphi41|0]|0;
							Lgeptoindexphi41=Lgeptoindexphi41+1|0;
							tmp3=tmp3+1|0;
							if(Lgeptoindexphi41>>>0<tmp7>>>0)continue;
							break b;
						}
						break;
					}
					return 0|0;
					case 65:
					tmp13=__C_time_locale.a0[(Larg3.i6|0)+31|0];
					if((tmp13.d[tmp13.o]&255)!==0){
						Lgeptoindexphi41=0;
						while(1){
							Lgeptoindexphi41=Lgeptoindexphi41+1|0;
							if((tmp13.d[tmp13.o+Lgeptoindexphi41|0]&255)!==0)continue;
							break;
						}
					}else{
						Lgeptoindexphi41=0;
					}
					tmp7=(tmp13.o+Lgeptoindexphi41|0)-(tmp13.o)|0;
					if((tmp7|0)===0)break b;
					Lgeptoindexphi41=0;
					while(1){
						if(tmp3>>>0<tmp0>>>0){
							Larg0[Marg0+tmp3|0]=tmp13.d[tmp13.o+Lgeptoindexphi41|0]|0;
							Lgeptoindexphi41=Lgeptoindexphi41+1|0;
							tmp3=tmp3+1|0;
							if(Lgeptoindexphi41>>>0<tmp7>>>0)continue;
							break b;
						}
						break;
					}
					return 0|0;
					case 98:
					case 104:
					tmp13=__C_time_locale.a0[Larg3.i4|0];
					if((tmp13.d[tmp13.o]&255)!==0){
						Lgeptoindexphi41=0;
						while(1){
							Lgeptoindexphi41=Lgeptoindexphi41+1|0;
							if((tmp13.d[tmp13.o+Lgeptoindexphi41|0]&255)!==0)continue;
							break;
						}
					}else{
						Lgeptoindexphi41=0;
					}
					tmp7=(tmp13.o+Lgeptoindexphi41|0)-(tmp13.o)|0;
					if((tmp7|0)===0)break b;
					Lgeptoindexphi41=0;
					while(1){
						if(tmp3>>>0<tmp0>>>0){
							Larg0[Marg0+tmp3|0]=tmp13.d[tmp13.o+Lgeptoindexphi41|0]|0;
							Lgeptoindexphi41=Lgeptoindexphi41+1|0;
							tmp3=tmp3+1|0;
							if(Lgeptoindexphi41>>>0<tmp7>>>0)continue;
							break b;
						}
						break;
					}
					return 0|0;
					case 66:
					tmp13=__C_time_locale.a0[(Larg3.i4|0)+12|0];
					if((tmp13.d[tmp13.o]&255)!==0){
						Lgeptoindexphi41=0;
						while(1){
							Lgeptoindexphi41=Lgeptoindexphi41+1|0;
							if((tmp13.d[tmp13.o+Lgeptoindexphi41|0]&255)!==0)continue;
							break;
						}
					}else{
						Lgeptoindexphi41=0;
					}
					tmp7=(tmp13.o+Lgeptoindexphi41|0)-(tmp13.o)|0;
					if((tmp7|0)===0)break b;
					Lgeptoindexphi41=0;
					while(1){
						if(tmp3>>>0<tmp0>>>0){
							Larg0[Marg0+tmp3|0]=tmp13.d[tmp13.o+Lgeptoindexphi41|0]|0;
							Lgeptoindexphi41=Lgeptoindexphi41+1|0;
							tmp3=tmp3+1|0;
							if(Lgeptoindexphi41>>>0<tmp7>>>0)continue;
							break b;
						}
						break;
					}
					return 0|0;
					case 99:
					tmp13=_$pstr$p40$p674;
					break;
					case 114:
					tmp13=_$pstr$p20$p387;
					break;
					case 120:
					tmp13=_$pstr$p14$p386;
					break;
					case 88:
					tmp13=_$pstr$p16$p385;
					break;
					case 67:
					tmp7=Larg3.i5|0;
					if((tmp7|0)>-1){
						L$plcssa=((tmp7>>>0)/100|0)+19|0;
					}else{
						L$plcssa=(((tmp7|0)>-1901?tmp7+1900|0: -1900-tmp7|0)|0)/100|0;
					}
					if((Lgeptoindexphi41&255)!==0){
						if((Lgeptoindexphi41&255)===43){
							if((L$plcssa|0)>99){
								tmp2=_$pstr$p2$p515;
								tmp13=_$pstr$p56$p667;
							}else{
								tmp2=_$pstr$p2$p515;
								tmp13=_$pstr$p1$p869;
							}
						}else{
							tmp2=_$pstr$p2$p515;
							tmp13=_$pstr$p1$p869;
						}
					}else{
						tmp2=_$pstr$p516;
						tmp13=_$pstr$p1$p869;
					}
					Lgeptoindexphi41=tmp11>>>0>2?tmp11|0:2|0;
					if((tmp7|0)<-1900){
						tmp13=_$pstr$p45$p653;
					}
					Lgeptoindexphi41=_snprintf(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,tmp2,0,{d:tmp13,o:0},Lgeptoindexphi41-((tmp7|0)<-1900?1:0)|0,L$plcssa)|0;
					if((Lgeptoindexphi41|0)<0)return 0|0;
					tmp3=Lgeptoindexphi41+tmp3|0;
					if(tmp3>>>0<Larg1>>>0)break b;
					return 0|0;
					case 100:
					case 101:
					Lgeptoindexphi41=_snprintf(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,((tmp7&255)===100?_$pstr$p5$p518:_$pstr$p6$p519),(tmp7&255)===100?0:0,Larg3.i3|0)|0;
					if((Lgeptoindexphi41|0)<0)return 0|0;
					tmp3=Lgeptoindexphi41+tmp3|0;
					if(tmp3>>>0<Larg1>>>0)break b;
					return 0|0;
					case 68:
					tmp7=Larg3.i4|0;
					L$plcssa=Larg3.i3|0;
					Lgeptoindexphi41=Larg3.i5|0;
					if((Lgeptoindexphi41|0)<=-1){
						Lgeptoindexphi41=(Lgeptoindexphi41|0)>-1901?Lgeptoindexphi41+1900|0: -1900-Lgeptoindexphi41|0;
					}
					Lgeptoindexphi41=_snprintf(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,_$pstr$p7$p520,0,tmp7+1|0,L$plcssa,(Lgeptoindexphi41|0)%100|0)|0;
					if((Lgeptoindexphi41|0)<0)return 0|0;
					tmp3=Lgeptoindexphi41+tmp3|0;
					if(tmp3>>>0<Larg1>>>0)break b;
					return 0|0;
					case 70:
					LmergedArray[20]=37;
					LmergedArray[21]=(Lgeptoindexphi41&255)!==0?Lgeptoindexphi41|0:43|0;
					Lgeptoindexphi41=(Lgeptoindexphi41&255)!==0?tmp11|0:10|0;
					Lgeptoindexphi41=(Lgeptoindexphi41>>>0>6?Lgeptoindexphi41|0:6|0)-6|0;
					if((Lgeptoindexphi41|0)!==0){
						Lgeptoindexphi41=_snprintf(LmergedArray,20+2|0,30,_$pstr$p11$p261,0,Lgeptoindexphi41)|0;
						if((Lgeptoindexphi41|0)<=0){
							Lgeptoindexphi41=0;
						}
					}else{
						Lgeptoindexphi41=0;
					}
					LmergedArray[(20+2|0)+Lgeptoindexphi41|0]=89;
					LmergedArray[((20+2|0)+Lgeptoindexphi41|0)+1|0]=45;
					LmergedArray[((20+2|0)+Lgeptoindexphi41|0)+2|0]=37;
					LmergedArray[((20+2|0)+Lgeptoindexphi41|0)+3|0]=109;
					LmergedArray[((20+2|0)+Lgeptoindexphi41|0)+4|0]=45;
					LmergedArray[((20+2|0)+Lgeptoindexphi41|0)+5|0]=37;
					LmergedArray[((20+2|0)+Lgeptoindexphi41|0)+6|0]=100;
					LmergedArray[((20+2|0)+Lgeptoindexphi41|0)+7|0]=0;
					Lgeptoindexphi41=_strftime(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,LmergedArray,20,Larg3)|0;
					if((Lgeptoindexphi41|0)>0){
						tmp3=((Lgeptoindexphi41|0)>0?Lgeptoindexphi41|0:0|0)+tmp3|0;
						break b;
					}
					return 0|0;
					case 103:
					Lgeptoindexphi41=_iso_year_adjust(Larg3)|0;
					tmp7=Larg3.i5|0;
					if((tmp7|0)>-1){
						L$plcssa=tmp7;
					}else{
						L$plcssa=(tmp7|0)>-1901?tmp7+1900|0: -1900-tmp7|0;
					}
					if((Lgeptoindexphi41|0)<0){
						Lgeptoindexphi41=(tmp7|0)<-1899?1|0:Lgeptoindexphi41|0;
					}else if((Lgeptoindexphi41|0)!==0){
						Lgeptoindexphi41=(tmp7|0)<-1900? -1|0:Lgeptoindexphi41|0;
					}else{
						Lgeptoindexphi41=0;
					}
					Lgeptoindexphi41=_snprintf(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,_$pstr$p5$p518,0,(((Lgeptoindexphi41+((L$plcssa|0)%100|0)|0)%100|0)+100|0)%100|0)|0;
					if((Lgeptoindexphi41|0)<0)return 0|0;
					tmp3=Lgeptoindexphi41+tmp3|0;
					if(tmp3>>>0<Larg1>>>0)break b;
					return 0|0;
					case 71:
					tmp7=Larg3.i5|0;
					L$plcssa=_iso_year_adjust(Larg3)|0;
					c:{
						if((tmp7|0)>-1){
							Lgeptoindexphi8=((tmp7>>>0)/100|0)+19|0;
							L$ppre=(tmp7>>>0)%100|0;
						}else{
							Lgeptoindexphi20=(tmp7|0)>-1901?tmp7+1900|0: -1900-tmp7|0;
							L$ppre=(Lgeptoindexphi20|0)%100|0;
							Lgeptoindexphi8=(Lgeptoindexphi20|0)/100|0;
							if((tmp7|0)<-1899)if((L$plcssa|0)<0){
								L$plcssa=1;
								tmp7=1;
								break c;
							}
						}
						Lgeptoindexphi20=L$plcssa;
						L$plcssa=(tmp7|0)<-1900?1:0;
						tmp7=(tmp7|0)<-1900&&(Lgeptoindexphi20|0)>0? -1|0:Lgeptoindexphi20|0;
					}
					tmp7=tmp7+L$ppre|0;
					c:if((tmp7|0)<100){
						if((tmp7|0)===-1){
							Lgeptoindexphi8=Lgeptoindexphi8-1|0;
							tmp7=99;
							break c;
						}
					}else if((tmp7|0)===100){
						Lgeptoindexphi8=Lgeptoindexphi8+1|0;
						tmp7=0;
						break c;
					}
					Lgeptoindexphi20=(Lgeptoindexphi8*100|0)+tmp7|0;
					c:{
						d:{
							if((L$plcssa|0)!==0){
								LmergedArray[10]=45;
								tmp13o=10+1|0;
								tmp13=LmergedArray;
								tmp7=1;
							}else if((Lgeptoindexphi41&255)===43){
								if(Lgeptoindexphi20>>>0>9999){
									LmergedArray[10]=43;
									LmergedArray[11]=37;
									tmp7=tmp11+(((tmp11|0)!==0?1:0)<<31>>31)|0;
									tmp13o=10+1|0;
									tmp13=LmergedArray;
									break d;
								}
								tmp13o=10;
								tmp13=LmergedArray;
								tmp7=0;
							}else{
								tmp13o=10;
								tmp13=LmergedArray;
								tmp7=0;
							}
							tmp7=tmp11+(((tmp11|0)!==0&&tmp7?1:0)<<31>>31)|0;
							tmp13[tmp13o]=37;
							if((Lgeptoindexphi41&255)===0){
								Lgeptoindexphi41=1;
								break c;
							}
						}
						tmp13[tmp13o+1|0]=48;
						Lgeptoindexphi41=2;
					}
					tmp13[tmp13o+Lgeptoindexphi41|0]=46;
					tmp13[(tmp13o+Lgeptoindexphi41|0)+1|0]=42;
					tmp13[(tmp13o+Lgeptoindexphi41|0)+2|0]=117;
					tmp13[(tmp13o+Lgeptoindexphi41|0)+3|0]=0;
					Lgeptoindexphi41=_snprintf(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,LmergedArray,10,tmp7,Lgeptoindexphi20)|0;
					if((Lgeptoindexphi41|0)<0)return 0|0;
					tmp3=Lgeptoindexphi41+tmp3|0;
					if(tmp3>>>0<Larg1>>>0)break b;
					return 0|0;
					case 72:
					case 107:
					Lgeptoindexphi41=_snprintf(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,((tmp7&255)===107?_$pstr$p6$p519:_$pstr$p5$p518),(tmp7&255)===107?0:0,Larg3.i2|0)|0;
					if((Lgeptoindexphi41|0)<0)return 0|0;
					tmp3=Lgeptoindexphi41+tmp3|0;
					if(tmp3>>>0<Larg1>>>0)break b;
					return 0|0;
					case 108:
					case 73:
					Lgeptoindexphi41=Larg3.i2|0;
					switch(Lgeptoindexphi41|0){
						case 0:
						case 12:
						Lgeptoindexphi41=12;
						break;
						default:
						Lgeptoindexphi41=(Lgeptoindexphi41|0)%12|0;
					}
					Lgeptoindexphi41=_snprintf(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,((tmp7&255)===73?_$pstr$p5$p518:_$pstr$p6$p519),(tmp7&255)===73?0:0,Lgeptoindexphi41)|0;
					if((Lgeptoindexphi41|0)<0)return 0|0;
					tmp3=Lgeptoindexphi41+tmp3|0;
					if(tmp3>>>0<Larg1>>>0)break b;
					return 0|0;
					case 106:
					Lgeptoindexphi41=_snprintf(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,_$pstr$p11$p524,0,(Larg3.i7|0)+1|0)|0;
					if((Lgeptoindexphi41|0)<0)return 0|0;
					tmp3=Lgeptoindexphi41+tmp3|0;
					if(tmp3>>>0<Larg1>>>0)break b;
					return 0|0;
					case 109:
					Lgeptoindexphi41=_snprintf(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,_$pstr$p5$p518,0,(Larg3.i4|0)+1|0)|0;
					if((Lgeptoindexphi41|0)<0)return 0|0;
					tmp3=Lgeptoindexphi41+tmp3|0;
					if(tmp3>>>0<Larg1>>>0)break b;
					return 0|0;
					case 77:
					Lgeptoindexphi41=_snprintf(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,_$pstr$p5$p518,0,Larg3.i1|0)|0;
					if((Lgeptoindexphi41|0)<0)return 0|0;
					tmp3=Lgeptoindexphi41+tmp3|0;
					if(tmp3>>>0<Larg1>>>0)break b;
					return 0|0;
					case 110:
					if(tmp3>>>0<tmp0>>>0){
						Larg0[Marg0+tmp3|0]=10;
						tmp3=tmp3+1|0;
						break b;
					}
					return 0|0;
					case 112:
					case 80:
					tmp13=__C_time_locale.a0[(Larg3.i2|0)>11?39|0:38|0];
					if((tmp13.d[tmp13.o]&255)!==0){
						Lgeptoindexphi41=0;
						while(1){
							Lgeptoindexphi41=Lgeptoindexphi41+1|0;
							if((tmp13.d[tmp13.o+Lgeptoindexphi41|0]&255)!==0)continue;
							break;
						}
					}else{
						Lgeptoindexphi41=0;
					}
					L$plcssa=(tmp13.o+Lgeptoindexphi41|0)-(tmp13.o)|0;
					if((L$plcssa|0)===0)break b;
					Lgeptoindexphi41=0;
					while(1){
						if(tmp3>>>0<tmp0>>>0){
							tmp7=tmp13.d[tmp13.o+Lgeptoindexphi41|0]|0;
							if((Larg2[Marg2+Lgeptoindex15|0]&255)===80){
								Lgeptoindexphi20=__ctype_b[128+(tmp7&255)|0]|0;
								tmp7=(Lgeptoindexphi20&3)===1?tmp7+32|0:tmp7|0;
							}
							Larg0[Marg0+tmp3|0]=tmp7;
							Lgeptoindexphi41=Lgeptoindexphi41+1|0;
							tmp3=tmp3+1|0;
							if(Lgeptoindexphi41>>>0<L$plcssa>>>0)continue;
							break b;
						}
						break;
					}
					return 0|0;
					case 82:
					Lgeptoindexphi41=_snprintf(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,_$pstr$p12$p525,0,Larg3.i2|0,Larg3.i1|0)|0;
					if((Lgeptoindexphi41|0)<0)return 0|0;
					tmp3=Lgeptoindexphi41+tmp3|0;
					if(tmp3>>>0<Larg1>>>0)break b;
					return 0|0;
					case 83:
					Lgeptoindexphi41=_snprintf(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,_$pstr$p5$p518,0,Larg3.i0|0)|0;
					if((Lgeptoindexphi41|0)<0)return 0|0;
					tmp3=Lgeptoindexphi41+tmp3|0;
					if(tmp3>>>0<Larg1>>>0)break b;
					return 0|0;
					case 116:
					if(tmp3>>>0<tmp0>>>0){
						Larg0[Marg0+tmp3|0]=9;
						tmp3=tmp3+1|0;
						break b;
					}
					return 0|0;
					case 84:
					Lgeptoindexphi41=_snprintf(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,_$pstr$p13$p526,0,Larg3.i2|0,Larg3.i1|0,Larg3.i0|0)|0;
					if((Lgeptoindexphi41|0)<0)return 0|0;
					tmp3=Lgeptoindexphi41+tmp3|0;
					if(tmp3>>>0<Larg1>>>0)break b;
					return 0|0;
					case 117:
					if(tmp3>>>0<tmp0>>>0){
						Lgeptoindexphi41=Larg3.i6|0;
						if((Lgeptoindexphi41|0)!==0){
							Larg0[Marg0+tmp3|0]=Lgeptoindexphi41+48|0;
							tmp3=tmp3+1|0;
							break b;
						}
						Larg0[Marg0+tmp3|0]=55;
						tmp3=tmp3+1|0;
						break b;
					}
					return 0|0;
					case 85:
					Lgeptoindexphi41=_snprintf(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,_$pstr$p5$p518,0,(((Larg3.i7|0)+7|0)-(Larg3.i6|0)|0)/7|0)|0;
					if((Lgeptoindexphi41|0)<0)return 0|0;
					tmp3=Lgeptoindexphi41+tmp3|0;
					if(tmp3>>>0<Larg1>>>0)break b;
					return 0|0;
					case 86:
					Lgeptoindexphi41=_iso_year_adjust(Larg3)|0;
					tmp7=Larg3.i6|0;
					tmp7=(tmp7|0)!==0?tmp7-1|0:6|0;
					L$plcssa=Larg3.i7|0;
					if((Lgeptoindexphi41|0)>0){
						Lgeptoindexphi41=1;
					}else if((Lgeptoindexphi41|0)<0){
						Lgeptoindexphi41=tmp7-L$plcssa|0;
						tmp7=Larg3.i5|0;
						tmp7=( -101-(tmp7>>31& -2000)|0)+tmp7|0;
						c:{
							if((tmp7&3|0)===0)if(((tmp7|0)%100|0)!==0){
								tmp7=1;
								break c;
							}
							tmp7=((tmp7|0)%400|0)===0?1:0;
						}
						Lgeptoindexphi41=(Lgeptoindexphi41+(tmp7<<31>>31)|0)<5?53|0:52|0;
					}else{
						Lgeptoindexphi41=((L$plcssa+10|0)-tmp7|0)/7|0;
					}
					Lgeptoindexphi41=_snprintf(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,_$pstr$p5$p518,0,Lgeptoindexphi41)|0;
					if((Lgeptoindexphi41|0)<0)return 0|0;
					tmp3=Lgeptoindexphi41+tmp3|0;
					if(tmp3>>>0<Larg1>>>0)break b;
					return 0|0;
					case 119:
					if(tmp3>>>0<tmp0>>>0){
						Larg0[Marg0+tmp3|0]=(Larg3.i6|0)+48|0;
						tmp3=tmp3+1|0;
						break b;
					}
					return 0|0;
					case 87:
					Lgeptoindexphi41=Larg3.i6|0;
					Lgeptoindexphi41=_snprintf(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,_$pstr$p5$p518,0,(((Larg3.i7|0)+7|0)+((Lgeptoindexphi41|0)!==0?1-Lgeptoindexphi41|0: -6|0)|0)/7|0)|0;
					if((Lgeptoindexphi41|0)<0)return 0|0;
					tmp3=Lgeptoindexphi41+tmp3|0;
					if(tmp3>>>0<Larg1>>>0)break b;
					return 0|0;
					case 121:
					Lgeptoindexphi41=Larg3.i5|0;
					if((Lgeptoindexphi41|0)<=-1){
						Lgeptoindexphi41=(Lgeptoindexphi41|0)>-1901?Lgeptoindexphi41+1900|0: -1900-Lgeptoindexphi41|0;
					}
					Lgeptoindexphi41=_snprintf(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,_$pstr$p5$p518,0,(Lgeptoindexphi41|0)%100|0)|0;
					if((Lgeptoindexphi41|0)<0)return 0|0;
					tmp3=Lgeptoindexphi41+tmp3|0;
					if(tmp3>>>0<Larg1>>>0)break b;
					return 0|0;
					case 89:
					tmp7=Larg3.i5|0;
					c:{
						d:{
							if((tmp7|0)<-1900){
								LmergedArray[0]=45;
								Lgeptoindexphi8= -1900-tmp7|0;
								tmp13o=0+1|0;
								tmp13=LmergedArray;
								tmp7=1;
							}else{
								Lgeptoindexphi8=tmp7+1900|0;
								if((Lgeptoindexphi41&255)===43){
									if(Lgeptoindexphi8>>>0>9999){
										LmergedArray[0]=43;
										LmergedArray[1]=37;
										tmp11=tmp11+(((tmp11|0)!==0?1:0)<<31>>31)|0;
										tmp13o=0+1|0;
										tmp13=LmergedArray;
										break d;
									}
									tmp13o=0;
									tmp13=LmergedArray;
									tmp7=0;
								}else{
									tmp13o=0;
									tmp13=LmergedArray;
									tmp7=0;
								}
							}
							tmp11=tmp11+(((tmp11|0)!==0&&tmp7?1:0)<<31>>31)|0;
							tmp13[tmp13o]=37;
							if((Lgeptoindexphi41&255)===0){
								Lgeptoindexphi41=1;
								break c;
							}
						}
						tmp13[tmp13o+1|0]=48;
						Lgeptoindexphi41=2;
					}
					tmp13[tmp13o+Lgeptoindexphi41|0]=46;
					tmp13[(tmp13o+Lgeptoindexphi41|0)+1|0]=42;
					tmp13[(tmp13o+Lgeptoindexphi41|0)+2|0]=117;
					tmp13[(tmp13o+Lgeptoindexphi41|0)+3|0]=0;
					Lgeptoindexphi41=_snprintf(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,LmergedArray,0,tmp11,Lgeptoindexphi8)|0;
					if((Lgeptoindexphi41|0)<0)return 0|0;
					tmp3=Lgeptoindexphi41+tmp3|0;
					if(tmp3>>>0<Larg1>>>0)break b;
					return 0|0;
					case 122:
					Lgeptoindexphi41=Larg3.i8|0;
					if((Lgeptoindexphi41|0)<=-1)break b;
					Lgeptoindexphi41=_tzinfo$p2[(Lgeptoindexphi41|0)!==0?1:0].i6|0;
					Lgeptoindexphi41=_snprintf(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,_$pstr$p14$p527,0,(Lgeptoindexphi41|0)/-3600|0,((Lgeptoindexphi41|0)/-60|0)%60|0)|0;
					if((Lgeptoindexphi41|0)<0)return 0|0;
					tmp3=Lgeptoindexphi41+tmp3|0;
					if(tmp3>>>0<Larg1>>>0)break b;
					return 0|0;
					case 90:
					Lgeptoindexphi41=Larg3.i8|0;
					if((Lgeptoindexphi41|0)<=-1)break b;
					tmp13=__tzname[(Lgeptoindexphi41|0)!==0?1:0];
					if((tmp13.d[tmp13.o]&255)!==0){
						Lgeptoindexphi41=0;
						while(1){
							Lgeptoindexphi41=Lgeptoindexphi41+1|0;
							if((tmp13.d[tmp13.o+Lgeptoindexphi41|0]&255)!==0)continue;
							break;
						}
					}else{
						Lgeptoindexphi41=0;
					}
					tmp7=(tmp13.o+Lgeptoindexphi41|0)-(tmp13.o)|0;
					if((tmp7|0)===0)break b;
					Lgeptoindexphi41=0;
					while(1){
						if(tmp3>>>0<tmp0>>>0){
							Larg0[Marg0+tmp3|0]=tmp13.d[tmp13.o+Lgeptoindexphi41|0]|0;
							Lgeptoindexphi41=Lgeptoindexphi41+1|0;
							tmp3=tmp3+1|0;
							if(Lgeptoindexphi41>>>0<tmp7>>>0)continue;
							break b;
						}
						break;
					}
					return 0|0;
					case 37:
					if(tmp3>>>0<tmp0>>>0){
						Larg0[Marg0+tmp3|0]=37;
						tmp3=tmp3+1|0;
						break b;
					}
					return 0|0;
					default:
					return 0|0;
				}
				if((tmp13[0]&255)!==0){
					Lgeptoindexphi41=_strftime(Larg0,Marg0+tmp3|0,Larg1-tmp3|0,tmp13,0,Larg3)|0;
					if((Lgeptoindexphi41|0)<=0)return 0|0;
					tmp3=Lgeptoindexphi41+tmp3|0;
				}
			}
			if((Larg2[Marg2+Lgeptoindex15|0]&255)===0)break a;
			Lgeptoindexphi8=Lgeptoindex15;
			break;
			default:
			if(tmp3>>>0>=tmp0>>>0)return 0|0;
			Larg0[Marg0+tmp3|0]=Lgeptoindex15;
			tmp3=tmp3+1|0;
		}
		Lgeptoindexphi8=Lgeptoindexphi8+1|0;
		continue a;
	}
	if((Larg1|0)!==0){
		Larg0[Marg0+tmp3|0]=0;
		return tmp3|0;
	}
	return tmp3|0;
}
function _iso_year_adjust(Larg0){
	var tmp0=0,tmp1=0,tmp2=0;
	tmp2=Larg0.i5|0;
	tmp2=( -100-(tmp2>>31& -2000)|0)+tmp2|0;
	a:{
		if((tmp2&3|0)===0)if(((tmp2|0)%100|0)!==0){
			tmp2=1;
			break a;
		}
		tmp2=((tmp2|0)%400|0)===0?1:0;
	}
	tmp0=Larg0.i7|0;
	tmp1=Larg0.i6|0;
	tmp2=((tmp0<<4)+tmp2|0)+(tmp1<<1)|0;
	a:{
		if((tmp2|0)>=5794){
			if((tmp2|0)<5843){
				if((tmp2|0)<5810){
					if((tmp2|0)!==5794)break a;
				}else if((tmp2|0)<5826){
					if(tmp2-5810>>>0>2)break a;
				}else if(tmp2-5826>>>0>4)break a;
			}else if((tmp2|0)<5845){
				if((tmp2|0)!==5843)break a;
			}else if((tmp2|0)<5847){
				if((tmp2|0)!==5845)break a;
			}else if((tmp2|0)!==5847)break a;
			return 1|0;
		}
		if((tmp2|0)<16){
			if((tmp2|0)<10){
				if(tmp2>>>0<=1)return  -1|0;
			}else if(tmp2-10>>>0<=3)return  -1|0;
		}else if((tmp2|0)<28){
			if(tmp2-16>>>0<=1)return  -1|0;
		}else if((tmp2|0)<32){
			if(tmp2-28>>>0<=1)return  -1|0;
		}else if(tmp2-32>>>0<=1)return  -1|0;
	}
	return 0|0;
}
function __ZNSt8time_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEED0Ev(Larg0){
}
function __ZNSt8time_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEED2Ev(Larg0){
}
function __ZNKSt8time_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_RSt8ios_basecPK2tmcc(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6,Larg7){
	var LmergedArray=null,tmp1=0,tmp2=null,tmp2o=0,tmp3=null,tmp4=null,tmp5=null,Lgeptoindexphi=0,tmp7=0;
	LmergedArray=new Uint8Array(104);
	LmergedArray[100]=37;
	LmergedArray[101]=Larg6;
	LmergedArray[102]=Larg7;
	LmergedArray[103]=0;
	if((Larg7&255)!==0){
		LmergedArray[101]=Larg7;
		LmergedArray[102]=Larg6;
	}
	tmp1=_strftime(LmergedArray,0,100,LmergedArray,100,Larg5)|0;
	tmp4=Larg2.a0;
	if((tmp1|0)===0){
		Larg0.a0=tmp4;
		return;
	}
	tmp5=tmp4;
	Lgeptoindexphi=0;
	while(1){
		tmp7=LmergedArray[0+Lgeptoindexphi|0]|0;
		if(tmp5!==null){
			tmp2o=tmp5.a6o;
			tmp2=tmp5.a6;
			tmp3=tmp5.a7;
			if(tmp2===tmp3&&tmp2o===0){
				tmp7=tmp5.a0.a14(tmp5,tmp7&255)|0;
				tmp4=((tmp7|0)===-1?null:tmp4);
				tmp5=((tmp7|0)===-1?null:tmp5);
			}else{
				tmp5.a6=tmp2;
				tmp5.a6o=tmp2o+1|0;
				tmp2[tmp2o]=tmp7;
			}
		}else{
			tmp5=null;
		}
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if(LmergedArray!==LmergedArray||(0+Lgeptoindexphi|0)!==(0+tmp1|0))continue;
		break;
	}
	Larg0.a0=tmp4;
}
function __ZNSt8time_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEED0Ev(Larg0){
}
function __ZNSt8time_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEED2Ev(Larg0){
}
function __ZNKSt20__time_get_c_storageIwE3__XEv(Larg0){
	var tmp0=null;
	if(!(__ZGVZNKSt20__time_get_c_storageIwE3__XEvE1s|0)){
		tmp0=new Int32Array(12);
		__ZZNKSt20__time_get_c_storageIwE3__XEvE1s[$_ZZNKSt20__time_get_c_storageIwE3__XEvE1s].a2=tmp0;
		__ZZNKSt20__time_get_c_storageIwE3__XEvE1s[$_ZZNKSt20__time_get_c_storageIwE3__XEvE1s].i0=13;
		__ZZNKSt20__time_get_c_storageIwE3__XEvE1s[$_ZZNKSt20__time_get_c_storageIwE3__XEvE1s].i1=8;
		tmp0[0]=37;
		tmp0[1]=72;
		tmp0[2]=58;
		tmp0[3]=37;
		tmp0[4]=77;
		tmp0[5]=58;
		tmp0[6]=37;
		tmp0[7]=83;
		tmp0[8]=0;
		__ZGVZNKSt20__time_get_c_storageIwE3__XEvE1s=1;
	}
	oSlot=$_ZZNKSt20__time_get_c_storageIwE3__XEvE1s;
	return __ZZNKSt20__time_get_c_storageIwE3__XEvE1s;
}
function __ZNKSt20__time_get_c_storageIwE3__xEv(Larg0){
	var tmp0=null;
	if(!(__ZGVZNKSt20__time_get_c_storageIwE3__xEvE1s|0)){
		tmp0=new Int32Array(12);
		__ZZNKSt20__time_get_c_storageIwE3__xEvE1s[$_ZZNKSt20__time_get_c_storageIwE3__xEvE1s].a2=tmp0;
		__ZZNKSt20__time_get_c_storageIwE3__xEvE1s[$_ZZNKSt20__time_get_c_storageIwE3__xEvE1s].i0=13;
		__ZZNKSt20__time_get_c_storageIwE3__xEvE1s[$_ZZNKSt20__time_get_c_storageIwE3__xEvE1s].i1=8;
		tmp0[0]=37;
		tmp0[1]=109;
		tmp0[2]=47;
		tmp0[3]=37;
		tmp0[4]=100;
		tmp0[5]=47;
		tmp0[6]=37;
		tmp0[7]=121;
		tmp0[8]=0;
		__ZGVZNKSt20__time_get_c_storageIwE3__xEvE1s=1;
	}
	oSlot=$_ZZNKSt20__time_get_c_storageIwE3__xEvE1s;
	return __ZZNKSt20__time_get_c_storageIwE3__xEvE1s;
}
function __ZNKSt20__time_get_c_storageIwE3__rEv(Larg0){
	var tmp0=null;
	if(!(__ZGVZNKSt20__time_get_c_storageIwE3__rEvE1s|0)){
		tmp0=new Int32Array(12);
		__ZZNKSt20__time_get_c_storageIwE3__rEvE1s[$_ZZNKSt20__time_get_c_storageIwE3__rEvE1s].a2=tmp0;
		__ZZNKSt20__time_get_c_storageIwE3__rEvE1s[$_ZZNKSt20__time_get_c_storageIwE3__rEvE1s].i0=13;
		__ZZNKSt20__time_get_c_storageIwE3__rEvE1s[$_ZZNKSt20__time_get_c_storageIwE3__rEvE1s].i1=11;
		tmp0[0]=37;
		tmp0[1]=73;
		tmp0[2]=58;
		tmp0[3]=37;
		tmp0[4]=77;
		tmp0[5]=58;
		tmp0[6]=37;
		tmp0[7]=83;
		tmp0[8]=32;
		tmp0[9]=37;
		tmp0[10]=112;
		tmp0[11]=0;
		__ZGVZNKSt20__time_get_c_storageIwE3__rEvE1s=1;
	}
	oSlot=$_ZZNKSt20__time_get_c_storageIwE3__rEvE1s;
	return __ZZNKSt20__time_get_c_storageIwE3__rEvE1s;
}
function __ZNKSt20__time_get_c_storageIwE3__cEv(Larg0){
	var tmp0=null;
	if(!(__ZGVZNKSt20__time_get_c_storageIwE3__cEvE1s|0)){
		tmp0=new Int32Array(24);
		__ZZNKSt20__time_get_c_storageIwE3__cEvE1s[$_ZZNKSt20__time_get_c_storageIwE3__cEvE1s].a2=tmp0;
		__ZZNKSt20__time_get_c_storageIwE3__cEvE1s[$_ZZNKSt20__time_get_c_storageIwE3__cEvE1s].i0=25;
		__ZZNKSt20__time_get_c_storageIwE3__cEvE1s[$_ZZNKSt20__time_get_c_storageIwE3__cEvE1s].i1=20;
		tmp0[0]=37;
		tmp0[1]=97;
		tmp0[2]=32;
		tmp0[3]=37;
		tmp0[4]=98;
		tmp0[5]=32;
		tmp0[6]=37;
		tmp0[7]=100;
		tmp0[8]=32;
		tmp0[9]=37;
		tmp0[10]=72;
		tmp0[11]=58;
		tmp0[12]=37;
		tmp0[13]=77;
		tmp0[14]=58;
		tmp0[15]=37;
		tmp0[16]=83;
		tmp0[17]=32;
		tmp0[18]=37;
		tmp0[19]=89;
		tmp0[20]=0;
		__ZGVZNKSt20__time_get_c_storageIwE3__cEvE1s=1;
	}
	oSlot=$_ZZNKSt20__time_get_c_storageIwE3__cEvE1s;
	return __ZZNKSt20__time_get_c_storageIwE3__cEvE1s;
}
function __ZNKSt20__time_get_c_storageIwE7__am_pmEv(Larg0){
	var tmp0=null;
	if(__ZGVZNKSt20__time_get_c_storageIwE7__am_pmEvE5am_pm|0){
		tmp0=__ZZNKSt20__time_get_c_storageIwE7__am_pmEvE5am_pm;
		oSlot=0;
		return tmp0;
	}
	if(!(__ZGVZStL11init_wam_pmvE5am_pm|0)){
		__ZZStL11init_wam_pmvE5am_pm[0].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[0].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[0].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[1].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[1].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[1].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[2].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[2].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[2].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[3].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[3].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[3].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[4].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[4].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[4].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[5].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[5].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[5].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[6].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[6].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[6].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[7].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[7].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[7].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[8].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[8].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[8].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[9].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[9].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[9].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[10].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[10].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[10].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[11].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[11].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[11].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[12].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[12].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[12].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[13].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[13].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[13].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[14].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[14].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[14].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[15].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[15].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[15].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[16].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[16].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[16].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[17].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[17].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[17].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[18].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[18].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[18].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[19].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[19].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[19].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[20].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[20].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[20].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[21].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[21].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[21].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[22].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[22].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[22].a2=nullArray;
		__ZZStL11init_wam_pmvE5am_pm[23].i0=0;
		__ZZStL11init_wam_pmvE5am_pm[23].i1=0;
		__ZZStL11init_wam_pmvE5am_pm[23].a2=nullArray;
		__ZGVZStL11init_wam_pmvE5am_pm=1;
	}
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL11init_wam_pmvE5am_pm[0],_$pstr$p110$p346,0,2);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL11init_wam_pmvE5am_pm[1],_$pstr$p111$p347,0,2);
	__ZZNKSt20__time_get_c_storageIwE7__am_pmEvE5am_pm=__ZZStL11init_wam_pmvE5am_pm;
	__ZGVZNKSt20__time_get_c_storageIwE7__am_pmEvE5am_pm=1;
	oSlot=0;
	return __ZZStL11init_wam_pmvE5am_pm;
}
function __ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(Larg0,Larg1,Marg1,Larg2){
	var Lgeptoindexphi6=0,tmp1=null,Lgeptoindexphi=0,Lgeptoindexphi2=0,Lgeptoindexphi17=0;
	Lgeptoindexphi6=Larg0.i0|0;
	a:{
		if(Lgeptoindexphi6>>>0<2){
			Lgeptoindexphi6=0;
		}else{
			Lgeptoindexphi6=(Lgeptoindexphi6& -2)-1|0;
			if(Lgeptoindexphi6>>>0>Larg2>>>0){
				tmp1=Larg0.a2;
				if((Larg2|0)!==0){
					Lgeptoindexphi6=Larg2&1073741823;
					if((Lgeptoindexphi6|0)!==0)if(0>Marg1){
						Lgeptoindexphi=Lgeptoindexphi6;
						while(1){
							Lgeptoindexphi=Lgeptoindexphi-1|0;
							Lgeptoindexphi6=Lgeptoindexphi6-1|0;
							tmp1[Lgeptoindexphi]=Larg1[Marg1+Lgeptoindexphi6|0]|0;
							if(tmp1!==tmp1||(0+Lgeptoindexphi|0)!==0)continue;
							break;
						}
					}else{
						Lgeptoindexphi2=0;
						Lgeptoindexphi=0;
						while(1){
							tmp1[Lgeptoindexphi2]=Larg1[Marg1+Lgeptoindexphi|0]|0;
							Lgeptoindexphi2=Lgeptoindexphi2+1|0;
							if(tmp1!==tmp1||(0+Lgeptoindexphi6|0)!==(0+Lgeptoindexphi2|0)){
								Lgeptoindexphi=Lgeptoindexphi+1|0;
								continue;
							}
							break;
						}
					}
				}
				tmp1[Larg2]=0;
				Larg0.i1=Larg2;
				break a;
			}
		}
		if(Lgeptoindexphi6>>>0<536870887){
			Lgeptoindexphi6<<=1;
			Lgeptoindexphi6=(Lgeptoindexphi6>>>0>Larg2>>>0?Lgeptoindexphi6|0:Larg2|0)+4& -4;
		}else{
			Lgeptoindexphi6=1073741807;
		}
		tmp1=new Int32Array((Lgeptoindexphi6<<2)/4|0);
		if((Larg2|0)!==0){
			Lgeptoindexphi=Larg2&1073741823;
			if((Lgeptoindexphi|0)!==0){
				Lgeptoindexphi17=0;
				Lgeptoindexphi2=0;
				while(1){
					tmp1[Lgeptoindexphi17]=Larg1[Marg1+Lgeptoindexphi2|0]|0;
					Lgeptoindexphi17=Lgeptoindexphi17+1|0;
					if(tmp1!==tmp1||(0+Lgeptoindexphi|0)!==(0+Lgeptoindexphi17|0)){
						Lgeptoindexphi2=Lgeptoindexphi2+1|0;
						continue;
					}
					break;
				}
			}
		}
		Larg0.a2=tmp1;
		Larg0.i0=Lgeptoindexphi6|1;
		Larg0.i1=Larg2;
		tmp1[Larg2]=0;
	}
}
function __ZNKSt20__time_get_c_storageIwE8__monthsEv(Larg0){
	var tmp0=null;
	if(__ZGVZNKSt20__time_get_c_storageIwE8__monthsEvE6months|0){
		tmp0=__ZZNKSt20__time_get_c_storageIwE8__monthsEvE6months;
		oSlot=0;
		return tmp0;
	}
	if(!(__ZGVZStL12init_wmonthsvE6months|0)){
		__ZZStL12init_wmonthsvE6months[0].i0=0;
		__ZZStL12init_wmonthsvE6months[0].i1=0;
		__ZZStL12init_wmonthsvE6months[0].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[1].i0=0;
		__ZZStL12init_wmonthsvE6months[1].i1=0;
		__ZZStL12init_wmonthsvE6months[1].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[2].i0=0;
		__ZZStL12init_wmonthsvE6months[2].i1=0;
		__ZZStL12init_wmonthsvE6months[2].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[3].i0=0;
		__ZZStL12init_wmonthsvE6months[3].i1=0;
		__ZZStL12init_wmonthsvE6months[3].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[4].i0=0;
		__ZZStL12init_wmonthsvE6months[4].i1=0;
		__ZZStL12init_wmonthsvE6months[4].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[5].i0=0;
		__ZZStL12init_wmonthsvE6months[5].i1=0;
		__ZZStL12init_wmonthsvE6months[5].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[6].i0=0;
		__ZZStL12init_wmonthsvE6months[6].i1=0;
		__ZZStL12init_wmonthsvE6months[6].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[7].i0=0;
		__ZZStL12init_wmonthsvE6months[7].i1=0;
		__ZZStL12init_wmonthsvE6months[7].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[8].i0=0;
		__ZZStL12init_wmonthsvE6months[8].i1=0;
		__ZZStL12init_wmonthsvE6months[8].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[9].i0=0;
		__ZZStL12init_wmonthsvE6months[9].i1=0;
		__ZZStL12init_wmonthsvE6months[9].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[10].i0=0;
		__ZZStL12init_wmonthsvE6months[10].i1=0;
		__ZZStL12init_wmonthsvE6months[10].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[11].i0=0;
		__ZZStL12init_wmonthsvE6months[11].i1=0;
		__ZZStL12init_wmonthsvE6months[11].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[12].i0=0;
		__ZZStL12init_wmonthsvE6months[12].i1=0;
		__ZZStL12init_wmonthsvE6months[12].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[13].i0=0;
		__ZZStL12init_wmonthsvE6months[13].i1=0;
		__ZZStL12init_wmonthsvE6months[13].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[14].i0=0;
		__ZZStL12init_wmonthsvE6months[14].i1=0;
		__ZZStL12init_wmonthsvE6months[14].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[15].i0=0;
		__ZZStL12init_wmonthsvE6months[15].i1=0;
		__ZZStL12init_wmonthsvE6months[15].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[16].i0=0;
		__ZZStL12init_wmonthsvE6months[16].i1=0;
		__ZZStL12init_wmonthsvE6months[16].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[17].i0=0;
		__ZZStL12init_wmonthsvE6months[17].i1=0;
		__ZZStL12init_wmonthsvE6months[17].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[18].i0=0;
		__ZZStL12init_wmonthsvE6months[18].i1=0;
		__ZZStL12init_wmonthsvE6months[18].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[19].i0=0;
		__ZZStL12init_wmonthsvE6months[19].i1=0;
		__ZZStL12init_wmonthsvE6months[19].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[20].i0=0;
		__ZZStL12init_wmonthsvE6months[20].i1=0;
		__ZZStL12init_wmonthsvE6months[20].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[21].i0=0;
		__ZZStL12init_wmonthsvE6months[21].i1=0;
		__ZZStL12init_wmonthsvE6months[21].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[22].i0=0;
		__ZZStL12init_wmonthsvE6months[22].i1=0;
		__ZZStL12init_wmonthsvE6months[22].a2=nullArray;
		__ZZStL12init_wmonthsvE6months[23].i0=0;
		__ZZStL12init_wmonthsvE6months[23].i1=0;
		__ZZStL12init_wmonthsvE6months[23].a2=nullArray;
		__ZGVZStL12init_wmonthsvE6months=1;
	}
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[0],_$pstr$p83$p348,0,7);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[1],_$pstr$p84$p349,0,8);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[2],_$pstr$p85$p350,0,5);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[3],_$pstr$p86$p351,0,5);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[4],_$pstr$p87$p352,0,3);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[5],_$pstr$p88$p353,0,4);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[6],_$pstr$p89$p354,0,4);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[7],_$pstr$p90$p355,0,6);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[8],_$pstr$p91$p356,0,9);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[9],_$pstr$p92$p357,0,7);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[10],_$pstr$p93$p358,0,8);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[11],_$pstr$p94$p359,0,8);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[12],_$pstr$p95$p360,0,3);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[13],_$pstr$p96$p361,0,3);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[14],_$pstr$p97$p362,0,3);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[15],_$pstr$p98$p363,0,3);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[16],_$pstr$p87$p352,0,3);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[17],_$pstr$p99$p364,0,3);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[18],_$pstr$p100$p365,0,3);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[19],_$pstr$p101$p366,0,3);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[20],_$pstr$p102$p367,0,3);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[21],_$pstr$p103$p368,0,3);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[22],_$pstr$p104$p369,0,3);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL12init_wmonthsvE6months[23],_$pstr$p105$p370,0,3);
	__ZZNKSt20__time_get_c_storageIwE8__monthsEvE6months=__ZZStL12init_wmonthsvE6months;
	__ZGVZNKSt20__time_get_c_storageIwE8__monthsEvE6months=1;
	oSlot=0;
	return __ZZStL12init_wmonthsvE6months;
}
function __ZNKSt20__time_get_c_storageIwE7__weeksEv(Larg0){
	var tmp0=null;
	if(__ZGVZNKSt20__time_get_c_storageIwE7__weeksEvE5weeks|0){
		tmp0=__ZZNKSt20__time_get_c_storageIwE7__weeksEvE5weeks;
		oSlot=0;
		return tmp0;
	}
	if(!(__ZGVZStL11init_wweeksvE5weeks|0)){
		__ZZStL11init_wweeksvE5weeks[0].i0=0;
		__ZZStL11init_wweeksvE5weeks[0].i1=0;
		__ZZStL11init_wweeksvE5weeks[0].a2=nullArray;
		__ZZStL11init_wweeksvE5weeks[1].i0=0;
		__ZZStL11init_wweeksvE5weeks[1].i1=0;
		__ZZStL11init_wweeksvE5weeks[1].a2=nullArray;
		__ZZStL11init_wweeksvE5weeks[2].i0=0;
		__ZZStL11init_wweeksvE5weeks[2].i1=0;
		__ZZStL11init_wweeksvE5weeks[2].a2=nullArray;
		__ZZStL11init_wweeksvE5weeks[3].i0=0;
		__ZZStL11init_wweeksvE5weeks[3].i1=0;
		__ZZStL11init_wweeksvE5weeks[3].a2=nullArray;
		__ZZStL11init_wweeksvE5weeks[4].i0=0;
		__ZZStL11init_wweeksvE5weeks[4].i1=0;
		__ZZStL11init_wweeksvE5weeks[4].a2=nullArray;
		__ZZStL11init_wweeksvE5weeks[5].i0=0;
		__ZZStL11init_wweeksvE5weeks[5].i1=0;
		__ZZStL11init_wweeksvE5weeks[5].a2=nullArray;
		__ZZStL11init_wweeksvE5weeks[6].i0=0;
		__ZZStL11init_wweeksvE5weeks[6].i1=0;
		__ZZStL11init_wweeksvE5weeks[6].a2=nullArray;
		__ZZStL11init_wweeksvE5weeks[7].i0=0;
		__ZZStL11init_wweeksvE5weeks[7].i1=0;
		__ZZStL11init_wweeksvE5weeks[7].a2=nullArray;
		__ZZStL11init_wweeksvE5weeks[8].i0=0;
		__ZZStL11init_wweeksvE5weeks[8].i1=0;
		__ZZStL11init_wweeksvE5weeks[8].a2=nullArray;
		__ZZStL11init_wweeksvE5weeks[9].i0=0;
		__ZZStL11init_wweeksvE5weeks[9].i1=0;
		__ZZStL11init_wweeksvE5weeks[9].a2=nullArray;
		__ZZStL11init_wweeksvE5weeks[10].i0=0;
		__ZZStL11init_wweeksvE5weeks[10].i1=0;
		__ZZStL11init_wweeksvE5weeks[10].a2=nullArray;
		__ZZStL11init_wweeksvE5weeks[11].i0=0;
		__ZZStL11init_wweeksvE5weeks[11].i1=0;
		__ZZStL11init_wweeksvE5weeks[11].a2=nullArray;
		__ZZStL11init_wweeksvE5weeks[12].i0=0;
		__ZZStL11init_wweeksvE5weeks[12].i1=0;
		__ZZStL11init_wweeksvE5weeks[12].a2=nullArray;
		__ZZStL11init_wweeksvE5weeks[13].i0=0;
		__ZZStL11init_wweeksvE5weeks[13].i1=0;
		__ZZStL11init_wweeksvE5weeks[13].a2=nullArray;
		__ZGVZStL11init_wweeksvE5weeks=1;
	}
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL11init_wweeksvE5weeks[0],_$pstr$p44$p371,0,6);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL11init_wweeksvE5weeks[1],_$pstr$p45$p372,0,6);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL11init_wweeksvE5weeks[2],_$pstr$p46$p373,0,7);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL11init_wweeksvE5weeks[3],_$pstr$p47$p374,0,9);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL11init_wweeksvE5weeks[4],_$pstr$p48$p375,0,8);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL11init_wweeksvE5weeks[5],_$pstr$p49$p376,0,6);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL11init_wweeksvE5weeks[6],_$pstr$p50$p377,0,8);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL11init_wweeksvE5weeks[7],_$pstr$p51$p378,0,3);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL11init_wweeksvE5weeks[8],_$pstr$p52$p379,0,3);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL11init_wweeksvE5weeks[9],_$pstr$p53$p380,0,3);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL11init_wweeksvE5weeks[10],_$pstr$p54$p381,0,3);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL11init_wweeksvE5weeks[11],_$pstr$p55$p382,0,3);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL11init_wweeksvE5weeks[12],_$pstr$p56$p383,0,3);
	__ZNSbIwSt11char_traitsIwESaIwEE6assignEPKwj(__ZZStL11init_wweeksvE5weeks[13],_$pstr$p57$p384,0,3);
	__ZZNKSt20__time_get_c_storageIwE7__weeksEvE5weeks=__ZZStL11init_wweeksvE5weeks;
	__ZGVZNKSt20__time_get_c_storageIwE7__weeksEvE5weeks=1;
	oSlot=0;
	return __ZZStL11init_wweeksvE5weeks;
}
function __ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjP2tmcc(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Larg7,Larg8){
	var L$psroa$p0$p0=null,tmp1=0,L$poptgepsqueezed147=null,L$poptgepsqueezed147o=0,L$poptgepsqueezed145=null,L$poptgepsqueezed145o=0,L$ppre$pi=null,L$ppre$pio=0,L$psroa$p09$p0$pcopyload=null,L$psroa$p06$p0$pcopyload=null,tmp7=null,tmp8=0;
	Larg5[Marg5]=0;
	L$psroa$p0$p0=Larg4.a7.a0;
	tmp1=L$psroa$p0$p0.i1|0;
	L$poptgepsqueezed147=L$psroa$p0$p0.a2.a0;
	L$poptgepsqueezed147=L$poptgepsqueezed147[(__ZNSt5ctypeIwE2idE$p1|0)-1|0];
	L$psroa$p0$p0.i1=tmp1;
	if((tmp1|0)===-1)L$psroa$p0$p0.a0.a3(L$psroa$p0$p0);
	L$psroa$p0$p0={a0:null};
	L$poptgepsqueezed145={a0:null};
	L$ppre$pi={a0:null};
	a:{
		switch(Larg7<<24>>24|0){
			case 97:
			case 65:
			L$ppre$pi=Larg3.a0;
			L$poptgepsqueezed145=Larg1.a2;
			L$poptgepsqueezed145=L$poptgepsqueezed145.a0.a1(L$poptgepsqueezed145);
			L$poptgepsqueezed145o=oSlot;
			L$psroa$p0$p0.a0=L$ppre$pi;
			L$poptgepsqueezed147=__ZSt14__scan_keywordISt19istreambuf_iteratorIwSt11char_traitsIwEEPKSbIwS2_SaIwEESt5ctypeIwEET0_RT_SB_SA_SA_RKT1_Rjb(Larg2,L$psroa$p0$p0,L$poptgepsqueezed145,L$poptgepsqueezed145o,L$poptgepsqueezed145,L$poptgepsqueezed145o+14|0,L$poptgepsqueezed147,Larg5,Marg5,0);
			L$poptgepsqueezed147o=oSlot;
			tmp1=((L$poptgepsqueezed147o)*12)-((L$poptgepsqueezed145o)*12)|0;
			if((tmp1|0)>=168)break;
			Larg6.i6=((tmp1|0)/12|0)%7|0;
			break;
			case 98:
			case 66:
			case 104:
			L$ppre$pi=Larg3.a0;
			L$poptgepsqueezed145=Larg1.a2;
			L$poptgepsqueezed145=L$poptgepsqueezed145.a0.a2(L$poptgepsqueezed145);
			L$poptgepsqueezed145o=oSlot;
			L$psroa$p0$p0.a0=L$ppre$pi;
			L$poptgepsqueezed147=__ZSt14__scan_keywordISt19istreambuf_iteratorIwSt11char_traitsIwEEPKSbIwS2_SaIwEESt5ctypeIwEET0_RT_SB_SA_SA_RKT1_Rjb(Larg2,L$psroa$p0$p0,L$poptgepsqueezed145,L$poptgepsqueezed145o,L$poptgepsqueezed145,L$poptgepsqueezed145o+24|0,L$poptgepsqueezed147,Larg5,Marg5,0);
			L$poptgepsqueezed147o=oSlot;
			tmp1=((L$poptgepsqueezed147o)*12)-((L$poptgepsqueezed145o)*12)|0;
			if((tmp1|0)>=288)break;
			Larg6.i4=((tmp1|0)/12|0)%12|0;
			break;
			case 99:
			L$poptgepsqueezed147=Larg1.a2;
			L$poptgepsqueezed147=L$poptgepsqueezed147.a0.a4(L$poptgepsqueezed147);
			L$poptgepsqueezed147o=oSlot;
			L$psroa$p09$p0$pcopyload=Larg2.a0;
			L$psroa$p06$p0$pcopyload=Larg3.a0;
			tmp7=L$poptgepsqueezed147[L$poptgepsqueezed147o].a2;
			tmp1=L$poptgepsqueezed147[L$poptgepsqueezed147o].i1|0;
			L$poptgepsqueezed145.a0=L$psroa$p09$p0$pcopyload;
			L$ppre$pi.a0=L$psroa$p06$p0$pcopyload;
			__ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE3getES3_S3_RSt8ios_baseRjP2tmPKwSB_(L$psroa$p0$p0,Larg1,L$poptgepsqueezed145,L$ppre$pi,Larg4,Larg5,Marg5,Larg6,tmp7,tmp7,0+tmp1|0);
			Larg2.a0=L$psroa$p0$p0.a0;
			break;
			case 100:
			case 101:
			L$poptgepsqueezed145=Larg3.a0;
			L$psroa$p0$p0.a0=L$poptgepsqueezed145;
			tmp1=__ZSt20__get_up_to_n_digitsIwSt19istreambuf_iteratorIwSt11char_traitsIwEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,L$psroa$p0$p0,Larg5,Marg5,L$poptgepsqueezed147,2)|0;
			tmp8=Larg5[Marg5]|0;
			if(tmp1-1>>>0<31)if((tmp8&4|0)===0){
				Larg6.i3=tmp1;
				break;
			}
			Larg5[Marg5]=tmp8|4;
			break;
			case 68:
			L$poptgepsqueezed145.a0=Larg2.a0;
			L$ppre$pi.a0=Larg3.a0;
			__ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE3getES3_S3_RSt8ios_baseRjP2tmPKwSB_(L$psroa$p0$p0,Larg1,L$poptgepsqueezed145,L$ppre$pi,Larg4,Larg5,Marg5,Larg6,__ZZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm,__ZZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm,0+8|0);
			Larg2.a0=L$psroa$p0$p0.a0;
			break;
			case 70:
			L$poptgepsqueezed145.a0=Larg2.a0;
			L$ppre$pi.a0=Larg3.a0;
			__ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE3getES3_S3_RSt8ios_baseRjP2tmPKwSB_(L$psroa$p0$p0,Larg1,L$poptgepsqueezed145,L$ppre$pi,Larg4,Larg5,Marg5,Larg6,__ZZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_0,__ZZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_0,0+8|0);
			Larg2.a0=L$psroa$p0$p0.a0;
			break;
			case 72:
			L$poptgepsqueezed145=Larg3.a0;
			L$psroa$p0$p0.a0=L$poptgepsqueezed145;
			tmp1=__ZSt20__get_up_to_n_digitsIwSt19istreambuf_iteratorIwSt11char_traitsIwEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,L$psroa$p0$p0,Larg5,Marg5,L$poptgepsqueezed147,2)|0;
			tmp8=Larg5[Marg5]|0;
			if((tmp1|0)<24)if((tmp8&4|0)===0){
				Larg6.i2=tmp1;
				break;
			}
			Larg5[Marg5]=tmp8|4;
			break;
			case 73:
			L$poptgepsqueezed145=Larg3.a0;
			L$psroa$p0$p0.a0=L$poptgepsqueezed145;
			tmp1=__ZSt20__get_up_to_n_digitsIwSt19istreambuf_iteratorIwSt11char_traitsIwEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,L$psroa$p0$p0,Larg5,Marg5,L$poptgepsqueezed147,2)|0;
			tmp8=Larg5[Marg5]|0;
			if(tmp1-1>>>0<12)if((tmp8&4|0)===0){
				Larg6.i2=tmp1;
				break;
			}
			Larg5[Marg5]=tmp8|4;
			break;
			case 106:
			L$poptgepsqueezed145=Larg3.a0;
			L$psroa$p0$p0.a0=L$poptgepsqueezed145;
			tmp1=__ZSt20__get_up_to_n_digitsIwSt19istreambuf_iteratorIwSt11char_traitsIwEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,L$psroa$p0$p0,Larg5,Marg5,L$poptgepsqueezed147,3)|0;
			tmp8=Larg5[Marg5]|0;
			if((tmp1|0)<366)if((tmp8&4|0)===0){
				Larg6.i7=tmp1;
				break;
			}
			Larg5[Marg5]=tmp8|4;
			break;
			case 109:
			L$poptgepsqueezed145=Larg3.a0;
			L$psroa$p0$p0.a0=L$poptgepsqueezed145;
			tmp1=__ZSt20__get_up_to_n_digitsIwSt19istreambuf_iteratorIwSt11char_traitsIwEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,L$psroa$p0$p0,Larg5,Marg5,L$poptgepsqueezed147,2)|0;
			tmp8=Larg5[Marg5]|0;
			if((tmp1|0)<13)if((tmp8&4|0)===0){
				Larg6.i4=tmp1-1|0;
				break;
			}
			Larg5[Marg5]=tmp8|4;
			break;
			case 77:
			L$poptgepsqueezed145=Larg3.a0;
			L$psroa$p0$p0.a0=L$poptgepsqueezed145;
			tmp1=__ZSt20__get_up_to_n_digitsIwSt19istreambuf_iteratorIwSt11char_traitsIwEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,L$psroa$p0$p0,Larg5,Marg5,L$poptgepsqueezed147,2)|0;
			tmp8=Larg5[Marg5]|0;
			if((tmp1|0)<60)if((tmp8&4|0)===0){
				Larg6.i1=tmp1;
				break;
			}
			Larg5[Marg5]=tmp8|4;
			break;
			case 110:
			case 116:
			L$psroa$p0$p0=Larg3.a0;
			while(1){
				L$poptgepsqueezed145=Larg2.a0;
				if(L$poptgepsqueezed145!==null){
					L$ppre$pio=L$poptgepsqueezed145.a3o;
					L$ppre$pi=L$poptgepsqueezed145.a3;
					L$psroa$p09$p0$pcopyload=L$poptgepsqueezed145.a4;
					if(L$ppre$pi===L$psroa$p09$p0$pcopyload&&L$ppre$pio===0){
						tmp1=L$poptgepsqueezed145.a0.a10(L$poptgepsqueezed145)|0;
					}else{
						tmp1=L$ppre$pi[L$ppre$pio]|0;
					}
					if((tmp1|0)===-1){
						Larg2.a0=null;
						tmp1=1;
					}else{
						L$poptgepsqueezed145=Larg2.a0;
						tmp1=L$poptgepsqueezed145===null?1:0;
					}
				}else{
					tmp1=1;
				}
				b:{
					if(L$psroa$p0$p0!==null){
						L$poptgepsqueezed145o=L$psroa$p0$p0.a3o;
						L$poptgepsqueezed145=L$psroa$p0$p0.a3;
						L$ppre$pi=L$psroa$p0$p0.a4;
						if(L$poptgepsqueezed145===L$ppre$pi&&L$poptgepsqueezed145o===0){
							tmp8=L$psroa$p0$p0.a0.a10(L$psroa$p0$p0)|0;
						}else{
							tmp8=L$poptgepsqueezed145[L$poptgepsqueezed145o]|0;
						}
						if((tmp8|0)!==-1){
							if(tmp1)break b;
							break;
						}
					}
					if(tmp1){
						L$psroa$p0$p0=null;
						break;
					}
					L$psroa$p0$p0=null;
				}
				L$poptgepsqueezed145=Larg2.a0;
				L$ppre$pio=L$poptgepsqueezed145.a3o;
				L$ppre$pi=L$poptgepsqueezed145.a3;
				L$psroa$p09$p0$pcopyload=L$poptgepsqueezed145.a4;
				if(L$ppre$pi===L$psroa$p09$p0$pcopyload&&L$ppre$pio===0){
					tmp1=L$poptgepsqueezed145.a0.a10(L$poptgepsqueezed145)|0;
				}else{
					tmp1=L$ppre$pi[L$ppre$pio]|0;
				}
				if(L$poptgepsqueezed147.a0.a4(L$poptgepsqueezed147,8,tmp1)|0){
					L$poptgepsqueezed145=Larg2.a0;
					L$ppre$pio=L$poptgepsqueezed145.a3o;
					L$ppre$pi=L$poptgepsqueezed145.a3;
					L$psroa$p09$p0$pcopyload=L$poptgepsqueezed145.a4;
					if(L$ppre$pi===L$psroa$p09$p0$pcopyload&&L$ppre$pio===0)L$poptgepsqueezed145.a0.a11(L$poptgepsqueezed145)|0;
					else{
						L$poptgepsqueezed145.a3=L$ppre$pi;
						L$poptgepsqueezed145.a3o=L$ppre$pio+1|0;
					}
					continue;
				}
				break;
			}
			L$poptgepsqueezed147=Larg2.a0;
			if(L$poptgepsqueezed147!==null){
				L$poptgepsqueezed145o=L$poptgepsqueezed147.a3o;
				L$poptgepsqueezed145=L$poptgepsqueezed147.a3;
				L$ppre$pi=L$poptgepsqueezed147.a4;
				if(L$poptgepsqueezed145===L$ppre$pi&&L$poptgepsqueezed145o===0){
					tmp1=L$poptgepsqueezed147.a0.a10(L$poptgepsqueezed147)|0;
				}else{
					tmp1=L$poptgepsqueezed145[L$poptgepsqueezed145o]|0;
				}
				if((tmp1|0)===-1){
					Larg2.a0=null;
					tmp1=1;
				}else{
					L$poptgepsqueezed147=Larg2.a0;
					tmp1=L$poptgepsqueezed147===null?1:0;
				}
			}else{
				tmp1=1;
			}
			b:{
				if(L$psroa$p0$p0!==null){
					L$poptgepsqueezed147o=L$psroa$p0$p0.a3o;
					L$poptgepsqueezed147=L$psroa$p0$p0.a3;
					L$poptgepsqueezed145=L$psroa$p0$p0.a4;
					if(L$poptgepsqueezed147===L$poptgepsqueezed145&&L$poptgepsqueezed147o===0){
						tmp8=L$psroa$p0$p0.a0.a10(L$psroa$p0$p0)|0;
					}else{
						tmp8=L$poptgepsqueezed147[L$poptgepsqueezed147o]|0;
					}
					if((tmp8|0)!==-1){
						if(tmp1)break;
						break b;
					}
				}
				if(!(tmp1))break;
			}
			Larg5[Marg5]=Larg5[Marg5]|2;
			break;
			case 112:
			L$ppre$pi=Larg3.a0;
			L$poptgepsqueezed145=Larg1.a2;
			L$poptgepsqueezed145=L$poptgepsqueezed145.a0.a3(L$poptgepsqueezed145);
			L$poptgepsqueezed145o=oSlot;
			if((L$poptgepsqueezed145[L$poptgepsqueezed145o].i1|0)===(-(L$poptgepsqueezed145[L$poptgepsqueezed145o+1|0].i1|0)|0)){
				Larg5[Marg5]=Larg5[Marg5]|4;
				break;
			}
			L$psroa$p0$p0.a0=L$ppre$pi;
			L$poptgepsqueezed147=__ZSt14__scan_keywordISt19istreambuf_iteratorIwSt11char_traitsIwEEPKSbIwS2_SaIwEESt5ctypeIwEET0_RT_SB_SA_SA_RKT1_Rjb(Larg2,L$psroa$p0$p0,L$poptgepsqueezed145,L$poptgepsqueezed145o,L$poptgepsqueezed145,L$poptgepsqueezed145o+2|0,L$poptgepsqueezed147,Larg5,Marg5,0);
			L$poptgepsqueezed147o=oSlot;
			tmp1=((L$poptgepsqueezed147o)*12)-((L$poptgepsqueezed145o)*12)|0;
			tmp8=Larg6.i2|0;
			b:{
				if((tmp8|0)===12)if((tmp1|0)===0){
					tmp1=0;
					break b;
				}
				if((tmp8|0)>=12)break;
				if((tmp1|0)!==12)break;
				tmp1=tmp8+12|0;
			}
			Larg6.i2=tmp1;
			break;
			case 114:
			L$poptgepsqueezed145.a0=Larg2.a0;
			L$ppre$pi.a0=Larg3.a0;
			__ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE3getES3_S3_RSt8ios_baseRjP2tmPKwSB_(L$psroa$p0$p0,Larg1,L$poptgepsqueezed145,L$ppre$pi,Larg4,Larg5,Marg5,Larg6,__ZZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_1,__ZZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_1,0+11|0);
			Larg2.a0=L$psroa$p0$p0.a0;
			break;
			case 82:
			L$poptgepsqueezed145.a0=Larg2.a0;
			L$ppre$pi.a0=Larg3.a0;
			__ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE3getES3_S3_RSt8ios_baseRjP2tmPKwSB_(L$psroa$p0$p0,Larg1,L$poptgepsqueezed145,L$ppre$pi,Larg4,Larg5,Marg5,Larg6,__ZZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_2,__ZZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_2,0+5|0);
			Larg2.a0=L$psroa$p0$p0.a0;
			break;
			case 83:
			L$poptgepsqueezed145=Larg3.a0;
			L$psroa$p0$p0.a0=L$poptgepsqueezed145;
			tmp1=__ZSt20__get_up_to_n_digitsIwSt19istreambuf_iteratorIwSt11char_traitsIwEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,L$psroa$p0$p0,Larg5,Marg5,L$poptgepsqueezed147,2)|0;
			tmp8=Larg5[Marg5]|0;
			if((tmp1|0)<61)if((tmp8&4|0)===0){
				Larg6.i0=tmp1;
				break;
			}
			Larg5[Marg5]=tmp8|4;
			break;
			case 84:
			L$poptgepsqueezed145.a0=Larg2.a0;
			L$ppre$pi.a0=Larg3.a0;
			__ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE3getES3_S3_RSt8ios_baseRjP2tmPKwSB_(L$psroa$p0$p0,Larg1,L$poptgepsqueezed145,L$ppre$pi,Larg4,Larg5,Marg5,Larg6,__ZZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_3,__ZZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_3,0+8|0);
			Larg2.a0=L$psroa$p0$p0.a0;
			break;
			case 119:
			L$poptgepsqueezed145=Larg3.a0;
			L$psroa$p0$p0.a0=L$poptgepsqueezed145;
			tmp1=__ZSt20__get_up_to_n_digitsIwSt19istreambuf_iteratorIwSt11char_traitsIwEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,L$psroa$p0$p0,Larg5,Marg5,L$poptgepsqueezed147,1)|0;
			tmp8=Larg5[Marg5]|0;
			if((tmp1|0)<7)if((tmp8&4|0)===0){
				Larg6.i6=tmp1;
				break;
			}
			Larg5[Marg5]=tmp8|4;
			break;
			case 120:
			L$poptgepsqueezed147=Larg1.a0.a6;
			L$psroa$p0$p0.a0=Larg2.a0;
			L$poptgepsqueezed145.a0=Larg3.a0;
			L$poptgepsqueezed147(Larg0,Larg1,L$psroa$p0$p0,L$poptgepsqueezed145,Larg4,Larg5,Marg5,Larg6);
			break a;
			case 88:
			L$poptgepsqueezed147=Larg1.a2;
			L$poptgepsqueezed147=L$poptgepsqueezed147.a0.a7(L$poptgepsqueezed147);
			L$poptgepsqueezed147o=oSlot;
			L$psroa$p09$p0$pcopyload=Larg2.a0;
			L$psroa$p06$p0$pcopyload=Larg3.a0;
			tmp7=L$poptgepsqueezed147[L$poptgepsqueezed147o].a2;
			tmp1=L$poptgepsqueezed147[L$poptgepsqueezed147o].i1|0;
			L$poptgepsqueezed145.a0=L$psroa$p09$p0$pcopyload;
			L$ppre$pi.a0=L$psroa$p06$p0$pcopyload;
			__ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE3getES3_S3_RSt8ios_baseRjP2tmPKwSB_(L$psroa$p0$p0,Larg1,L$poptgepsqueezed145,L$ppre$pi,Larg4,Larg5,Marg5,Larg6,tmp7,tmp7,0+tmp1|0);
			Larg2.a0=L$psroa$p0$p0.a0;
			break;
			case 121:
			L$poptgepsqueezed145=Larg3.a0;
			L$psroa$p0$p0.a0=L$poptgepsqueezed145;
			tmp1=__ZSt20__get_up_to_n_digitsIwSt19istreambuf_iteratorIwSt11char_traitsIwEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,L$psroa$p0$p0,Larg5,Marg5,L$poptgepsqueezed147,4)|0;
			if((Larg5[Marg5]&4|0)!==0)break;
			if((tmp1|0)<69){
				tmp1=tmp1+2000|0;
			}else{
				tmp1=(tmp1|0)<100?tmp1+1900|0:tmp1|0;
			}
			Larg6.i5=tmp1-1900|0;
			break;
			case 89:
			L$poptgepsqueezed145=Larg3.a0;
			L$psroa$p0$p0.a0=L$poptgepsqueezed145;
			tmp1=__ZSt20__get_up_to_n_digitsIwSt19istreambuf_iteratorIwSt11char_traitsIwEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,L$psroa$p0$p0,Larg5,Marg5,L$poptgepsqueezed147,4)|0;
			if((Larg5[Marg5]&4|0)!==0)break;
			Larg6.i5=tmp1-1900|0;
			break;
			case 37:
			L$psroa$p0$p0=Larg3.a0;
			L$poptgepsqueezed145=Larg2.a0;
			if(L$poptgepsqueezed145!==null){
				L$ppre$pio=L$poptgepsqueezed145.a3o;
				L$ppre$pi=L$poptgepsqueezed145.a3;
				L$psroa$p09$p0$pcopyload=L$poptgepsqueezed145.a4;
				if(L$ppre$pi===L$psroa$p09$p0$pcopyload&&L$ppre$pio===0){
					tmp1=L$poptgepsqueezed145.a0.a10(L$poptgepsqueezed145)|0;
				}else{
					tmp1=L$ppre$pi[L$ppre$pio]|0;
				}
				if((tmp1|0)===-1){
					Larg2.a0=null;
					tmp1=1;
				}else{
					L$poptgepsqueezed145=Larg2.a0;
					tmp1=L$poptgepsqueezed145===null?1:0;
				}
			}else{
				tmp1=1;
			}
			b:{
				c:{
					if(L$psroa$p0$p0!==null){
						L$poptgepsqueezed145o=L$psroa$p0$p0.a3o;
						L$poptgepsqueezed145=L$psroa$p0$p0.a3;
						L$ppre$pi=L$psroa$p0$p0.a4;
						if(L$poptgepsqueezed145===L$ppre$pi&&L$poptgepsqueezed145o===0){
							tmp8=L$psroa$p0$p0.a0.a10(L$psroa$p0$p0)|0;
						}else{
							tmp8=L$poptgepsqueezed145[L$poptgepsqueezed145o]|0;
						}
						if((tmp8|0)!==-1){
							if(tmp1)break c;
							tmp1=6;
							break b;
						}
					}
					if(tmp1){
						tmp1=6;
						break b;
					}
					L$psroa$p0$p0=null;
				}
				L$poptgepsqueezed145=Larg2.a0;
				L$ppre$pio=L$poptgepsqueezed145.a3o;
				L$ppre$pi=L$poptgepsqueezed145.a3;
				L$psroa$p09$p0$pcopyload=L$poptgepsqueezed145.a4;
				if(L$ppre$pi===L$psroa$p09$p0$pcopyload&&L$ppre$pio===0){
					tmp1=L$poptgepsqueezed145.a0.a10(L$poptgepsqueezed145)|0;
				}else{
					tmp1=L$ppre$pi[L$ppre$pio]|0;
				}
				if(((L$poptgepsqueezed147.a0.a14(L$poptgepsqueezed147,tmp1,0)|0)&255)===37){
					L$psroa$p09$p0$pcopyload=Larg2.a0;
					L$ppre$pio=L$psroa$p09$p0$pcopyload.a3o;
					L$ppre$pi=L$psroa$p09$p0$pcopyload.a3;
					L$poptgepsqueezed145=L$psroa$p09$p0$pcopyload.a4;
					c:{
						if(L$ppre$pi===L$poptgepsqueezed145&&L$ppre$pio===0){
							L$psroa$p09$p0$pcopyload.a0.a11(L$psroa$p09$p0$pcopyload)|0;
							L$psroa$p09$p0$pcopyload=Larg2.a0;
							if(L$psroa$p09$p0$pcopyload===null){
								tmp1=1;
								break c;
							}
							L$ppre$pio=L$psroa$p09$p0$pcopyload.a3o;
							L$ppre$pi=L$psroa$p09$p0$pcopyload.a3;
							L$poptgepsqueezed145=L$psroa$p09$p0$pcopyload.a4;
						}else{
							L$psroa$p09$p0$pcopyload.a3=L$ppre$pi;
							L$psroa$p09$p0$pcopyload.a3o=L$ppre$pio+1|0;
							L$ppre$pio=L$ppre$pio+1|0;
							L$ppre$pi=L$ppre$pi;
						}
						if(L$ppre$pi===L$poptgepsqueezed145&&L$ppre$pio===0){
							tmp1=L$psroa$p09$p0$pcopyload.a0.a10(L$psroa$p09$p0$pcopyload)|0;
						}else{
							tmp1=L$ppre$pi[L$ppre$pio]|0;
						}
						if((tmp1|0)===-1){
							Larg2.a0=null;
							tmp1=1;
						}else{
							L$poptgepsqueezed145=Larg2.a0;
							tmp1=L$poptgepsqueezed145===null?1:0;
						}
					}
					if(L$psroa$p0$p0!==null){
						L$poptgepsqueezed145o=L$psroa$p0$p0.a3o;
						L$poptgepsqueezed145=L$psroa$p0$p0.a3;
						L$ppre$pi=L$psroa$p0$p0.a4;
						if(L$poptgepsqueezed145===L$ppre$pi&&L$poptgepsqueezed145o===0){
							tmp8=L$psroa$p0$p0.a0.a10(L$psroa$p0$p0)|0;
						}else{
							tmp8=L$poptgepsqueezed145[L$poptgepsqueezed145o]|0;
						}
						if((tmp8|0)!==-1){
							if(tmp1)break;
							tmp1=2;
							break b;
						}
					}
					if(!(tmp1))break;
					tmp1=2;
				}else{
					tmp1=4;
				}
			}
			Larg5[Marg5]=Larg5[Marg5]|tmp1;
			break;
			default:
			Larg5[Marg5]=Larg5[Marg5]|4;
		}
		Larg0.a0=Larg2.a0;
	}
}
function __ZSt20__get_up_to_n_digitsIwSt19istreambuf_iteratorIwSt11char_traitsIwEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg0,Larg1,Larg2,Marg2,Larg3,Larg4){
	var tmp0=null,tmp1=null,tmp1o=0,tmp2=null,tmp2o=0,tmp3=0,tmp4=0,tmp5=null,tmp5o=0,tmp6=null,tmp7=0,tmp8=0;
	tmp0=Larg0.a0;
	if(tmp0!==null){
		tmp1o=tmp0.a3o;
		tmp1=tmp0.a3;
		tmp2=tmp0.a4;
		if(tmp1===tmp2&&tmp1o===0){
			tmp3=tmp0.a0.a10(tmp0)|0;
		}else{
			tmp3=tmp1[tmp1o]|0;
		}
		if((tmp3|0)===-1){
			Larg0.a0=null;
			tmp3=1;
		}else{
			tmp0=Larg0.a0;
			tmp3=tmp0===null?1:0;
		}
	}else{
		tmp3=1;
	}
	tmp0=Larg1.a0;
	a:{
		b:{
			if(tmp0!==null){
				tmp1o=tmp0.a3o;
				tmp1=tmp0.a3;
				tmp2=tmp0.a4;
				if(tmp1===tmp2&&tmp1o===0){
					tmp4=tmp0.a0.a10(tmp0)|0;
				}else{
					tmp4=tmp1[tmp1o]|0;
				}
				if((tmp4|0)!==-1){
					if(tmp3)break a;
					break b;
				}
				Larg1.a0=null;
			}
			if(!(tmp3)){
				tmp0=null;
				break a;
			}
		}
		Larg2[Marg2]=Larg2[Marg2]|6;
		return 0|0;
	}
	tmp1=Larg0.a0;
	tmp2o=tmp1.a3o;
	tmp2=tmp1.a3;
	tmp5=tmp1.a4;
	if(tmp2===tmp5&&tmp2o===0){
		tmp3=tmp1.a0.a10(tmp1)|0;
	}else{
		tmp3=tmp2[tmp2o]|0;
	}
	if(Larg3.a0.a4(Larg3,4,tmp3)|0){
		tmp3=Larg3.a0.a14(Larg3,tmp3,0)|0;
		tmp1=Larg0.a0;
		tmp2o=tmp1.a3o;
		tmp2=tmp1.a3;
		tmp5=tmp1.a4;
		if(tmp2===tmp5&&tmp2o===0)tmp1.a0.a11(tmp1)|0;
		else{
			tmp1.a3=tmp2;
			tmp1.a3o=tmp2o+1|0;
		}
		tmp1=tmp0;
		tmp4=tmp3<<24>>24;
		tmp3=Larg4;
		while(1){
			tmp2=Larg0.a0;
			if(tmp2!==null){
				tmp5o=tmp2.a3o;
				tmp5=tmp2.a3;
				tmp6=tmp2.a4;
				if(tmp5===tmp6&&tmp5o===0){
					tmp7=tmp2.a0.a10(tmp2)|0;
				}else{
					tmp7=tmp5[tmp5o]|0;
				}
				if((tmp7|0)===-1){
					Larg0.a0=null;
					tmp7=1;
				}else{
					tmp2=Larg0.a0;
					tmp7=tmp2===null?1:0;
				}
			}else{
				tmp7=1;
			}
			if(tmp1!==null){
				tmp2o=tmp1.a3o;
				tmp2=tmp1.a3;
				tmp5=tmp1.a4;
				if(tmp2===tmp5&&tmp2o===0){
					tmp8=tmp1.a0.a10(tmp1)|0;
				}else{
					tmp8=tmp2[tmp2o]|0;
				}
				if((tmp8|0)===-1){
					Larg1.a0=null;
					tmp8=1;
					tmp1=null;
					tmp0=null;
				}else{
					tmp8=0;
				}
			}else{
				tmp8=1;
				tmp1=null;
			}
			tmp7^=tmp8;
			tmp2=Larg0.a0;
			tmp4=tmp4-48|0;
			if((tmp3|0)>1)if(tmp7){
				tmp5o=tmp2.a3o;
				tmp5=tmp2.a3;
				tmp6=tmp2.a4;
				if(tmp5===tmp6&&tmp5o===0){
					tmp7=tmp2.a0.a10(tmp2)|0;
				}else{
					tmp7=tmp5[tmp5o]|0;
				}
				if(Larg3.a0.a4(Larg3,4,tmp7)|0){
					tmp4=(tmp4*10|0)+((Larg3.a0.a14(Larg3,tmp7,0)|0)<<24>>24)|0;
					tmp2=Larg0.a0;
					tmp5o=tmp2.a3o;
					tmp5=tmp2.a3;
					tmp6=tmp2.a4;
					if(tmp5===tmp6&&tmp5o===0)tmp2.a0.a11(tmp2)|0;
					else{
						tmp2.a3=tmp5;
						tmp2.a3o=tmp5o+1|0;
					}
					tmp3=tmp3-1|0;
					continue;
				}
				return tmp4|0;
			}
			break;
		}
		if(tmp2!==null){
			tmp1o=tmp2.a3o;
			tmp1=tmp2.a3;
			tmp5=tmp2.a4;
			if(tmp1===tmp5&&tmp1o===0){
				tmp3=tmp2.a0.a10(tmp2)|0;
			}else{
				tmp3=tmp1[tmp1o]|0;
			}
			if((tmp3|0)===-1){
				Larg0.a0=null;
				tmp3=1;
			}else{
				tmp1=Larg0.a0;
				tmp3=tmp1===null?1:0;
			}
		}else{
			tmp3=1;
		}
		a:{
			if(tmp0!==null){
				tmp1o=tmp0.a3o;
				tmp1=tmp0.a3;
				tmp2=tmp0.a4;
				if(tmp1===tmp2&&tmp1o===0){
					tmp7=tmp0.a0.a10(tmp0)|0;
				}else{
					tmp7=tmp1[tmp1o]|0;
				}
				if((tmp7|0)!==-1){
					if(!(tmp3))break a;
					return tmp4|0;
				}
				Larg1.a0=null;
			}
			if(!(tmp3))return tmp4|0;
		}
		Larg2[Marg2]=Larg2[Marg2]|2;
		return tmp4|0;
	}
	Larg2[Marg2]=Larg2[Marg2]|4;
	return 0|0;
}
function __ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE3getES3_S3_RSt8ios_baseRjP2tmPKwSB_(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Larg7,Larg8,Marg8){
	var tmp0=null,tmp1=null,tmp2=null,L$ppre4=null,L$ppre4o=0,Lgeptoindex=0,tmp5=null,tmp6=null,tmp6o=0,tmp7=null,tmp7o=0,tmp8=0,tmp9=null,tmp9o=0,tmp10=null,tmp10o=0,tmp11=null,tmp11o=0,tmp12=null;
	L$ppre4=Larg4.a7.a0;
	Lgeptoindex=L$ppre4.i1|0;
	tmp5=L$ppre4.a2.a0;
	tmp5=tmp5[(__ZNSt5ctypeIwE2idE$p1|0)-1|0];
	L$ppre4.i1=Lgeptoindex;
	if((Lgeptoindex|0)===-1)L$ppre4.a0.a3(L$ppre4);
	Larg5[Marg5]=0;
	L$ppre4=Larg2.a0;
	a:if(Larg7!==Larg8||0!==Marg8){
		tmp0={a0:null};
		tmp1={a0:null};
		tmp2={a0:null};
		tmp6=L$ppre4;
		tmp7o=0;
		tmp7=Larg7;
		b:while(1){
			if(tmp6!==null){
				tmp9o=tmp6.a3o;
				tmp9=tmp6.a3;
				tmp10=tmp6.a4;
				if(tmp9===tmp10&&tmp9o===0){
					Lgeptoindex=tmp6.a0.a10(tmp6)|0;
				}else{
					Lgeptoindex=tmp9[tmp9o]|0;
				}
				if((Lgeptoindex|0)===-1){
					Larg2.a0=null;
					Lgeptoindex=1;
					tmp6=null;
					L$ppre4=null;
				}else{
					Lgeptoindex=0;
				}
			}else{
				Lgeptoindex=1;
				tmp6=null;
			}
			tmp9=Larg3.a0;
			c:{
				if(tmp9!==null){
					tmp10o=tmp9.a3o;
					tmp10=tmp9.a3;
					tmp11=tmp9.a4;
					if(tmp10===tmp11&&tmp10o===0){
						tmp8=tmp9.a0.a10(tmp9)|0;
					}else{
						tmp8=tmp10[tmp10o]|0;
					}
					if((tmp8|0)!==-1){
						if(Lgeptoindex)break c;
						break b;
					}
					Larg3.a0=null;
				}
				if(Lgeptoindex)break b;
				tmp9=null;
			}
			c:if(((tmp5.a0.a14(tmp5,tmp7[tmp7o]|0,0)|0)&255)===37){
				if(tmp7===Larg8&&(tmp7o+1|0)===Marg8)break b;
				Lgeptoindex=tmp5.a0.a14(tmp5,tmp7[tmp7o+1|0]|0,0)|0;
				switch(Lgeptoindex&255){
					case 69:
					case 48:
					if(tmp7===Larg8&&(tmp7o+2|0)===Marg8)break b;
					tmp8=tmp5.a0.a14(tmp5,tmp7[tmp7o+2|0]|0,0)|0;
					tmp7o=tmp7o+1|0;
					tmp7=tmp7;
					break;
					default:
					tmp8=Lgeptoindex;
					Lgeptoindex=0;
				}
				L$ppre4=Larg1.a0.a10;
				tmp1.a0=Larg2.a0;
				tmp2.a0=tmp9;
				L$ppre4(tmp0,Larg1,tmp1,tmp2,Larg4,Larg5,Marg5,Larg6,tmp8,Lgeptoindex);
				L$ppre4=tmp0.a0;
				Larg2.a0=L$ppre4;
				tmp6=L$ppre4;
				tmp7o=tmp7o+2|0;
				tmp7=tmp7;
			}else if(tmp5.a0.a4(tmp5,8,tmp7[tmp7o]|0)|0){
				if(tmp7===Larg8&&(tmp7o+1|0)===Marg8){
					tmp7o=Marg8;
					tmp7=Larg8;
				}else{
					Lgeptoindex=0;
					while(1){
						if(tmp5.a0.a4(tmp5,8,tmp7[(tmp7o+1|0)+Lgeptoindex|0]|0)|0){
							Lgeptoindex=Lgeptoindex+1|0;
							if(tmp7!==Larg8||((tmp7o+1|0)+Lgeptoindex|0)!==Marg8)continue;
							tmp7o=Marg8;
							tmp7=Larg8;
						}else{
							tmp7o=(tmp7o+1|0)+Lgeptoindex|0;
							tmp7=tmp7;
						}
						break;
					}
				}
				tmp10=tmp6;
				while(1){
					if(tmp10!==null){
						tmp11o=tmp10.a3o;
						tmp11=tmp10.a3;
						tmp12=tmp10.a4;
						if(tmp11===tmp12&&tmp11o===0){
							Lgeptoindex=tmp10.a0.a10(tmp10)|0;
						}else{
							Lgeptoindex=tmp11[tmp11o]|0;
						}
						if((Lgeptoindex|0)===-1){
							Larg2.a0=null;
							Lgeptoindex=1;
							tmp10=null;
							tmp6=null;
							L$ppre4=null;
						}else{
							Lgeptoindex=0;
						}
					}else{
						Lgeptoindex=1;
						tmp10=null;
					}
					d:{
						if(tmp9!==null){
							tmp11o=tmp9.a3o;
							tmp11=tmp9.a3;
							tmp12=tmp9.a4;
							if(tmp11===tmp12&&tmp11o===0){
								tmp8=tmp9.a0.a10(tmp9)|0;
							}else{
								tmp8=tmp11[tmp11o]|0;
							}
							if((tmp8|0)!==-1){
								if(Lgeptoindex)break d;
								break c;
							}
							Larg3.a0=null;
						}
						if(Lgeptoindex)break c;
						tmp9=null;
					}
					tmp11o=tmp10.a3o;
					tmp11=tmp10.a3;
					tmp12=tmp10.a4;
					if(tmp11===tmp12&&tmp11o===0){
						Lgeptoindex=tmp10.a0.a10(tmp10)|0;
					}else{
						Lgeptoindex=tmp11[tmp11o]|0;
					}
					if(tmp5.a0.a4(tmp5,8,Lgeptoindex)|0){
						tmp11o=tmp10.a3o;
						tmp11=tmp10.a3;
						tmp12=tmp10.a4;
						if(tmp11===tmp12&&tmp11o===0)tmp10.a0.a11(tmp10)|0;
						else{
							tmp10.a3=tmp11;
							tmp10.a3o=tmp11o+1|0;
						}
						continue;
					}
					break;
				}
			}else{
				tmp9o=tmp6.a3o;
				tmp9=tmp6.a3;
				tmp10=tmp6.a4;
				if(tmp9===tmp10&&tmp9o===0){
					Lgeptoindex=tmp6.a0.a10(tmp6)|0;
				}else{
					Lgeptoindex=tmp9[tmp9o]|0;
				}
				Lgeptoindex=tmp5.a0.a8(tmp5,Lgeptoindex)|0;
				if((Lgeptoindex|0)===(tmp5.a0.a8(tmp5,tmp7[tmp7o]|0)|0|0)){
					tmp9o=tmp6.a3o;
					tmp9=tmp6.a3;
					tmp10=tmp6.a4;
					if(tmp9===tmp10&&tmp9o===0)tmp6.a0.a11(tmp6)|0;
					else{
						tmp6.a3=tmp9;
						tmp6.a3o=tmp9o+1|0;
					}
					tmp7o=tmp7o+1|0;
					tmp7=tmp7;
				}else Larg5[Marg5]=4;
			}
			Lgeptoindex=Larg5[Marg5]|0;
			if(tmp7===Larg8&&tmp7o===Marg8)break a;
			if((Lgeptoindex|0)!==0)break a;
			continue b;
		}
		Larg5[Marg5]=4;
	}
	if(L$ppre4!==null){
		tmp6o=L$ppre4.a3o;
		tmp6=L$ppre4.a3;
		tmp7=L$ppre4.a4;
		if(tmp6===tmp7&&tmp6o===0){
			Lgeptoindex=L$ppre4.a0.a10(L$ppre4)|0;
		}else{
			Lgeptoindex=tmp6[tmp6o]|0;
		}
		if((Lgeptoindex|0)===-1){
			Larg2.a0=null;
			Lgeptoindex=1;
		}else{
			Lgeptoindex=0;
		}
	}else{
		Lgeptoindex=1;
	}
	tmp5=Larg3.a0;
	a:{
		b:{
			if(tmp5!==null){
				L$ppre4o=tmp5.a3o;
				L$ppre4=tmp5.a3;
				tmp7=tmp5.a4;
				if(L$ppre4===tmp7&&L$ppre4o===0){
					tmp8=tmp5.a0.a10(tmp5)|0;
				}else{
					tmp8=L$ppre4[L$ppre4o]|0;
				}
				if((tmp8|0)!==-1){
					if(Lgeptoindex)break a;
					break b;
				}
				Larg3.a0=null;
			}
			if(!(Lgeptoindex))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=Larg2.a0;
}
function __ZSt14__scan_keywordISt19istreambuf_iteratorIwSt11char_traitsIwEEPKSbIwS2_SaIwEESt5ctypeIwEET0_RT_SB_SA_SA_RKT1_Rjb(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4,Larg5,Marg5,Larg6){
	var tmp0=null,tmp1=0,tmp2=null,L$pph65=0,tmp4=null,tmp4o=0,L$pph=0,Lgeptoindexphi=0,tmp7=0,Lgeptoindexphi11=0,tmp9=null,tmp9o=0,tmp10=null,tmp10o=0,tmp11=null,tmp11o=0,Lgeptoindexphi3=0,tmp13=0;
	tmp0=new Uint8Array(100);
	L$pph65=(((Marg3)*12)-((Marg2)*12)|0)/12|0;
	if(L$pph65>>>0>100){
		tmp4=new Uint8Array(L$pph65/1|0);
	}else{
		tmp4=tmp0;
	}
	tmp1=Larg2===Larg3&&Marg2===Marg3?1:0;
	if(tmp1){
		L$pph=0;
	}else{
		tmp9o=0;
		tmp9=tmp4;
		L$pph=0;
		Lgeptoindexphi=0;
		while(1){
			if((Larg2[Marg2+Lgeptoindexphi|0].i1|0)!==0)tmp9[tmp9o]=1;
			else{
				tmp9[tmp9o]=2;
				L$pph65=L$pph65-1|0;
				L$pph=L$pph+1|0;
			}
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			if(Larg2!==Larg3||(Marg2+Lgeptoindexphi|0)!==Marg3){
				tmp9o=tmp9o+1|0;
				tmp9=tmp9;
				continue;
			}
			break;
		}
	}
	Lgeptoindexphi=0;
	a:while(1){
		tmp7=(L$pph65|0)!==0?1:0;
		Lgeptoindexphi11=Lgeptoindexphi;
		while(1){
			tmp9=Larg0.a0;
			if(tmp9!==null){
				tmp10o=tmp9.a3o;
				tmp10=tmp9.a3;
				tmp11=tmp9.a4;
				if(tmp10===tmp11&&tmp10o===0){
					Lgeptoindexphi=tmp9.a0.a10(tmp9)|0;
				}else{
					Lgeptoindexphi=tmp10[tmp10o]|0;
				}
				if((Lgeptoindexphi|0)===-1){
					Larg0.a0=null;
					Lgeptoindexphi=1;
				}else{
					tmp9=Larg0.a0;
					Lgeptoindexphi=tmp9===null?1:0;
				}
			}else{
				Lgeptoindexphi=1;
			}
			tmp9=Larg1.a0;
			if(tmp9!==null){
				tmp10o=tmp9.a3o;
				tmp10=tmp9.a3;
				tmp11=tmp9.a4;
				if(tmp10===tmp11&&tmp10o===0){
					Lgeptoindexphi3=tmp9.a0.a10(tmp9)|0;
				}else{
					Lgeptoindexphi3=tmp10[tmp10o]|0;
				}
				if((Lgeptoindexphi3|0)===-1){
					Larg1.a0=null;
					Lgeptoindexphi3=1;
					tmp9=null;
				}else{
					Lgeptoindexphi3=0;
				}
			}else{
				Lgeptoindexphi3=1;
				tmp9=null;
			}
			Lgeptoindexphi^=Lgeptoindexphi3;
			tmp10=Larg0.a0;
			if(tmp7)if(Lgeptoindexphi){
				tmp9o=tmp10.a3o;
				tmp9=tmp10.a3;
				tmp11=tmp10.a4;
				if(tmp9===tmp11&&tmp9o===0){
					tmp13=tmp10.a0.a10(tmp10)|0;
				}else{
					tmp13=tmp9[tmp9o]|0;
				}
				if(!(Larg6)){
					tmp13=Larg4.a0.a8(Larg4,tmp13)|0;
				}
				Lgeptoindexphi=Lgeptoindexphi11+1|0;
				if(tmp1){
					Lgeptoindexphi11=Lgeptoindexphi;
					continue;
				}
				if(Larg6){
					tmp9o=0;
					tmp9=tmp4;
					tmp7=0;
					Lgeptoindexphi3=0;
					while(1){
						if((tmp9[tmp9o]&255)===1){
							tmp10=Larg2[Marg2+Lgeptoindexphi3|0];
							tmp11=tmp10.a2;
							if((tmp13|0)===(tmp11[Lgeptoindexphi11]|0)){
								if((tmp10.i1|0)===(Lgeptoindexphi|0)){
									tmp9[tmp9o]=2;
									L$pph65=L$pph65-1|0;
									L$pph=L$pph+1|0;
									tmp7=1;
								}else{
									tmp7=1;
								}
							}else{
								tmp9[tmp9o]=0;
								L$pph65=L$pph65-1|0;
							}
						}
						Lgeptoindexphi3=Lgeptoindexphi3+1|0;
						if(Larg2!==Larg3||(Marg2+Lgeptoindexphi3|0)!==Marg3){
							tmp9o=tmp9o+1|0;
							tmp9=tmp9;
							continue;
						}
						break;
					}
				}else{
					tmp9o=0;
					tmp9=tmp4;
					tmp7=0;
					Lgeptoindexphi3=0;
					while(1){
						if((tmp9[tmp9o]&255)===1){
							tmp10=Larg2[Marg2+Lgeptoindexphi3|0];
							tmp11=tmp10.a2;
							if((tmp13|0)===(Larg4.a0.a8(Larg4,tmp11[Lgeptoindexphi11]|0)|0|0)){
								if((tmp10.i1|0)===(Lgeptoindexphi|0)){
									tmp9[tmp9o]=2;
									L$pph65=L$pph65-1|0;
									L$pph=L$pph+1|0;
									tmp7=1;
								}else{
									tmp7=1;
								}
							}else{
								tmp9[tmp9o]=0;
								L$pph65=L$pph65-1|0;
							}
						}
						Lgeptoindexphi3=Lgeptoindexphi3+1|0;
						if(Larg2!==Larg3||(Marg2+Lgeptoindexphi3|0)!==Marg3){
							tmp9o=tmp9o+1|0;
							tmp9=tmp9;
							continue;
						}
						break;
					}
				}
				if((tmp7&1)!==0){
					tmp9=Larg0.a0;
					tmp10o=tmp9.a3o;
					tmp10=tmp9.a3;
					tmp11=tmp9.a4;
					if(tmp10===tmp11&&tmp10o===0)tmp9.a0.a11(tmp9)|0;
					else{
						tmp9.a3=tmp10;
						tmp9.a3o=tmp10o+1|0;
					}
					if(L$pph65+L$pph>>>0>=2){
						tmp9o=0;
						tmp9=tmp4;
						Lgeptoindexphi11=0;
						while(1){
							if((tmp9[tmp9o]&255)===2)if((Larg2[Marg2+Lgeptoindexphi11|0].i1|0)!==(Lgeptoindexphi|0)){
								tmp9[tmp9o]=0;
								L$pph=L$pph-1|0;
							}
							Lgeptoindexphi11=Lgeptoindexphi11+1|0;
							if(Larg2!==Larg3||(Marg2+Lgeptoindexphi11|0)!==Marg3){
								tmp9o=tmp9o+1|0;
								tmp9=tmp9;
								continue;
							}
							break;
						}
					}
				}
				continue a;
			}
			break;
		}
		break;
	}
	if(tmp10!==null){
		tmp11o=tmp10.a3o;
		tmp11=tmp10.a3;
		tmp2=tmp10.a4;
		if(tmp11===tmp2&&tmp11o===0){
			L$pph=tmp10.a0.a10(tmp10)|0;
		}else{
			L$pph=tmp11[tmp11o]|0;
		}
		if((L$pph|0)===-1){
			Larg0.a0=null;
			L$pph=1;
		}else{
			tmp10=Larg0.a0;
			L$pph=tmp10===null?1:0;
		}
	}else{
		L$pph=1;
	}
	a:{
		b:{
			if(tmp9!==null){
				tmp10o=tmp9.a3o;
				tmp10=tmp9.a3;
				tmp11=tmp9.a4;
				if(tmp10===tmp11&&tmp10o===0){
					L$pph65=tmp9.a0.a10(tmp9)|0;
				}else{
					L$pph65=tmp10[tmp10o]|0;
				}
				if((L$pph65|0)!==-1){
					if(L$pph)break a;
					break b;
				}
				Larg1.a0=null;
			}
			if(!(L$pph))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	if(!(tmp1)){
		tmp4o=0;
		tmp4=tmp4;
		L$pph=0;
		while(1){
			if((tmp4[tmp4o]&255)===2){
				oSlot=Marg2+L$pph|0;
				return Larg2;
			}
			L$pph=L$pph+1|0;
			if(Larg2!==Larg3||(Marg2+L$pph|0)!==Marg3){
				tmp4o=tmp4o+1|0;
				tmp4=tmp4;
				continue;
			}
			break;
		}
	}
	Larg5[Marg5]=Larg5[Marg5]|4;
	oSlot=Marg3;
	return Larg3;
}
function __ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE11do_get_yearES3_S3_RSt8ios_baseRjP2tm(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=null;
	tmp1=Larg4.a7.a0;
	tmp2=tmp1.i1|0;
	tmp3=tmp1.a2.a0;
	tmp0=tmp3[(__ZNSt5ctypeIwE2idE$p1|0)-1|0];
	tmp1.i1=tmp2;
	if((tmp2|0)===-1)tmp1.a0.a3(tmp1);
	tmp1=Larg3.a0;
	tmp3={a0:null};
	tmp3.a0=tmp1;
	tmp2=__ZSt20__get_up_to_n_digitsIwSt19istreambuf_iteratorIwSt11char_traitsIwEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,tmp3,Larg5,Marg5,tmp0,4)|0;
	if((Larg5[Marg5]&4|0)===0){
		if((tmp2|0)<69){
			tmp2=tmp2+2000|0;
		}else{
			tmp2=(tmp2|0)<100?tmp2+1900|0:tmp2|0;
		}
		Larg6.i5=tmp2-1900|0;
	}
	Larg0.a0=Larg2.a0;
}
function __ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE16do_get_monthnameES3_S3_RSt8ios_baseRjP2tm(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=null,tmp3o=0,tmp4=null,tmp4o=0;
	tmp1=Larg4.a7.a0;
	tmp2=tmp1.i1|0;
	tmp3=tmp1.a2.a0;
	tmp3=tmp3[(__ZNSt5ctypeIwE2idE$p1|0)-1|0];
	tmp1.i1=tmp2;
	if((tmp2|0)===-1)tmp1.a0.a3(tmp1);
	tmp1=Larg3.a0;
	tmp4=Larg1.a2;
	tmp4=tmp4.a0.a2(tmp4);
	tmp4o=oSlot;
	tmp0={a0:null};
	tmp0.a0=tmp1;
	tmp3=__ZSt14__scan_keywordISt19istreambuf_iteratorIwSt11char_traitsIwEEPKSbIwS2_SaIwEESt5ctypeIwEET0_RT_SB_SA_SA_RKT1_Rjb(Larg2,tmp0,tmp4,tmp4o,tmp4,tmp4o+24|0,tmp3,Larg5,Marg5,0);
	tmp3o=oSlot;
	tmp2=((tmp3o)*12)-((tmp4o)*12)|0;
	if((tmp2|0)<288)Larg6.i4=((tmp2|0)/12|0)%12|0;
	Larg0.a0=Larg2.a0;
}
function __ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE14do_get_weekdayES3_S3_RSt8ios_baseRjP2tm(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=null,tmp3o=0,tmp4=null,tmp4o=0;
	tmp1=Larg4.a7.a0;
	tmp2=tmp1.i1|0;
	tmp3=tmp1.a2.a0;
	tmp3=tmp3[(__ZNSt5ctypeIwE2idE$p1|0)-1|0];
	tmp1.i1=tmp2;
	if((tmp2|0)===-1)tmp1.a0.a3(tmp1);
	tmp1=Larg3.a0;
	tmp4=Larg1.a2;
	tmp4=tmp4.a0.a1(tmp4);
	tmp4o=oSlot;
	tmp0={a0:null};
	tmp0.a0=tmp1;
	tmp3=__ZSt14__scan_keywordISt19istreambuf_iteratorIwSt11char_traitsIwEEPKSbIwS2_SaIwEESt5ctypeIwEET0_RT_SB_SA_SA_RKT1_Rjb(Larg2,tmp0,tmp4,tmp4o,tmp4,tmp4o+14|0,tmp3,Larg5,Marg5,0);
	tmp3o=oSlot;
	tmp2=((tmp3o)*12)-((tmp4o)*12)|0;
	if((tmp2|0)<168)Larg6.i6=((tmp2|0)/12|0)%7|0;
	Larg0.a0=Larg2.a0;
}
function __ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE11do_get_dateES3_S3_RSt8ios_baseRjP2tm(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=null,tmp3o=0;
	tmp3=Larg1.a2;
	tmp3=tmp3.a0.a6(tmp3);
	tmp3o=oSlot;
	tmp0=tmp3[tmp3o].a2;
	tmp1=tmp3[tmp3o].i1|0;
	tmp3={a0:null};
	tmp3.a0=Larg2.a0;
	tmp2={a0:null};
	tmp2.a0=Larg3.a0;
	__ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE3getES3_S3_RSt8ios_baseRjP2tmPKwSB_(Larg0,Larg1,tmp3,tmp2,Larg4,Larg5,Marg5,Larg6,tmp0,tmp0,0+tmp1|0);
}
function __ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE11do_get_timeES3_S3_RSt8ios_baseRjP2tm(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6){
	var tmp0=null,tmp1=null;
	tmp0={a0:null};
	tmp0.a0=Larg2.a0;
	tmp1={a0:null};
	tmp1.a0=Larg3.a0;
	__ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE3getES3_S3_RSt8ios_baseRjP2tmPKwSB_(Larg0,Larg1,tmp0,tmp1,Larg4,Larg5,Marg5,Larg6,__ZZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE11do_get_timeES3_S3_RSt8ios_baseRjP2tmE5__fmt,__ZZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE11do_get_timeES3_S3_RSt8ios_baseRjP2tmE5__fmt,0+8|0);
}
function __ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE13do_date_orderEv(Larg0){
	return 2|0;
}
function __ZNSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEED0Ev(Larg0){
}
function __ZNSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEED2Ev(Larg0){
}
function __ZNKSt20__time_get_c_storageIcE3__XEv(Larg0){
	var tmp0=null;
	if(!(__ZGVZNKSt20__time_get_c_storageIcE3__XEvE1s|0)){
		tmp0=new Uint8Array(16);
		__ZZNKSt20__time_get_c_storageIcE3__XEvE1s[$_ZZNKSt20__time_get_c_storageIcE3__XEvE1s].a2=tmp0;
		__ZZNKSt20__time_get_c_storageIcE3__XEvE1s[$_ZZNKSt20__time_get_c_storageIcE3__XEvE1s].i0=17;
		__ZZNKSt20__time_get_c_storageIcE3__XEvE1s[$_ZZNKSt20__time_get_c_storageIcE3__XEvE1s].i1=8;
		tmp0[0]=37;
		tmp0[1]=72;
		tmp0[2]=58;
		tmp0[3]=37;
		tmp0[4]=77;
		tmp0[5]=58;
		tmp0[6]=37;
		tmp0[7]=83;
		tmp0[8]=0;
		__ZGVZNKSt20__time_get_c_storageIcE3__XEvE1s=1;
	}
	oSlot=$_ZZNKSt20__time_get_c_storageIcE3__XEvE1s;
	return __ZZNKSt20__time_get_c_storageIcE3__XEvE1s;
}
function __ZNKSt20__time_get_c_storageIcE3__xEv(Larg0){
	var tmp0=null;
	if(!(__ZGVZNKSt20__time_get_c_storageIcE3__xEvE1s|0)){
		tmp0=new Uint8Array(16);
		__ZZNKSt20__time_get_c_storageIcE3__xEvE1s[$_ZZNKSt20__time_get_c_storageIcE3__xEvE1s].a2=tmp0;
		__ZZNKSt20__time_get_c_storageIcE3__xEvE1s[$_ZZNKSt20__time_get_c_storageIcE3__xEvE1s].i0=17;
		__ZZNKSt20__time_get_c_storageIcE3__xEvE1s[$_ZZNKSt20__time_get_c_storageIcE3__xEvE1s].i1=8;
		tmp0[0]=37;
		tmp0[1]=109;
		tmp0[2]=47;
		tmp0[3]=37;
		tmp0[4]=100;
		tmp0[5]=47;
		tmp0[6]=37;
		tmp0[7]=121;
		tmp0[8]=0;
		__ZGVZNKSt20__time_get_c_storageIcE3__xEvE1s=1;
	}
	oSlot=$_ZZNKSt20__time_get_c_storageIcE3__xEvE1s;
	return __ZZNKSt20__time_get_c_storageIcE3__xEvE1s;
}
function __ZNKSt20__time_get_c_storageIcE3__rEv(Larg0){
	var tmp0=null;
	if(!(__ZGVZNKSt20__time_get_c_storageIcE3__rEvE1s|0)){
		tmp0=new Uint8Array(16);
		__ZZNKSt20__time_get_c_storageIcE3__rEvE1s[$_ZZNKSt20__time_get_c_storageIcE3__rEvE1s].a2=tmp0;
		__ZZNKSt20__time_get_c_storageIcE3__rEvE1s[$_ZZNKSt20__time_get_c_storageIcE3__rEvE1s].i0=17;
		__ZZNKSt20__time_get_c_storageIcE3__rEvE1s[$_ZZNKSt20__time_get_c_storageIcE3__rEvE1s].i1=11;
		tmp0[0]=37;
		tmp0[1]=73;
		tmp0[2]=58;
		tmp0[3]=37;
		tmp0[4]=77;
		tmp0[5]=58;
		tmp0[6]=37;
		tmp0[7]=83;
		tmp0[8]=32;
		tmp0[9]=37;
		tmp0[10]=112;
		tmp0[11]=0;
		__ZGVZNKSt20__time_get_c_storageIcE3__rEvE1s=1;
	}
	oSlot=$_ZZNKSt20__time_get_c_storageIcE3__rEvE1s;
	return __ZZNKSt20__time_get_c_storageIcE3__rEvE1s;
}
function __ZNKSt20__time_get_c_storageIcE3__cEv(Larg0){
	var tmp0=null;
	if(!(__ZGVZNKSt20__time_get_c_storageIcE3__cEvE1s|0)){
		tmp0=new Uint8Array(32);
		__ZZNKSt20__time_get_c_storageIcE3__cEvE1s[$_ZZNKSt20__time_get_c_storageIcE3__cEvE1s].a2=tmp0;
		__ZZNKSt20__time_get_c_storageIcE3__cEvE1s[$_ZZNKSt20__time_get_c_storageIcE3__cEvE1s].i0=33;
		__ZZNKSt20__time_get_c_storageIcE3__cEvE1s[$_ZZNKSt20__time_get_c_storageIcE3__cEvE1s].i1=20;
		tmp0[0]=37;
		tmp0[1]=97;
		tmp0[2]=32;
		tmp0[3]=37;
		tmp0[4]=98;
		tmp0[5]=32;
		tmp0[6]=37;
		tmp0[7]=100;
		tmp0[8]=32;
		tmp0[9]=37;
		tmp0[10]=72;
		tmp0[11]=58;
		tmp0[12]=37;
		tmp0[13]=77;
		tmp0[14]=58;
		tmp0[15]=37;
		tmp0[16]=83;
		tmp0[17]=32;
		tmp0[18]=37;
		tmp0[19]=89;
		tmp0[20]=0;
		__ZGVZNKSt20__time_get_c_storageIcE3__cEvE1s=1;
	}
	oSlot=$_ZZNKSt20__time_get_c_storageIcE3__cEvE1s;
	return __ZZNKSt20__time_get_c_storageIcE3__cEvE1s;
}
function __ZNKSt20__time_get_c_storageIcE7__am_pmEv(Larg0){
	var tmp0=null,L$ppre=0,tmp2=0;
	if(__ZGVZNKSt20__time_get_c_storageIcE7__am_pmEvE5am_pm|0){
		tmp0=__ZZNKSt20__time_get_c_storageIcE7__am_pmEvE5am_pm;
		oSlot=0;
		return tmp0;
	}
	a:{
		if(__ZGVZStL10init_am_pmvE5am_pm|0){
			L$ppre=__ZZStL10init_am_pmvE5am_pm[0].i0|0;
			if(L$ppre>>>0<2){
				L$ppre=0;
			}else{
				L$ppre=(L$ppre& -2)-1|0;
				if(L$ppre>>>0>2){
					tmp0=__ZZStL10init_am_pmvE5am_pm[0].a2;
					tmp0[0]=65;
					tmp0[1]=77;
					tmp0[2]=0;
					__ZZStL10init_am_pmvE5am_pm[0].i1=2;
					break a;
				}
			}
		}else{
			__ZZStL10init_am_pmvE5am_pm[0].i0=0;
			__ZZStL10init_am_pmvE5am_pm[0].i1=0;
			__ZZStL10init_am_pmvE5am_pm[0].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[1].i0=0;
			__ZZStL10init_am_pmvE5am_pm[1].i1=0;
			__ZZStL10init_am_pmvE5am_pm[1].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[2].i0=0;
			__ZZStL10init_am_pmvE5am_pm[2].i1=0;
			__ZZStL10init_am_pmvE5am_pm[2].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[3].i0=0;
			__ZZStL10init_am_pmvE5am_pm[3].i1=0;
			__ZZStL10init_am_pmvE5am_pm[3].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[4].i0=0;
			__ZZStL10init_am_pmvE5am_pm[4].i1=0;
			__ZZStL10init_am_pmvE5am_pm[4].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[5].i0=0;
			__ZZStL10init_am_pmvE5am_pm[5].i1=0;
			__ZZStL10init_am_pmvE5am_pm[5].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[6].i0=0;
			__ZZStL10init_am_pmvE5am_pm[6].i1=0;
			__ZZStL10init_am_pmvE5am_pm[6].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[7].i0=0;
			__ZZStL10init_am_pmvE5am_pm[7].i1=0;
			__ZZStL10init_am_pmvE5am_pm[7].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[8].i0=0;
			__ZZStL10init_am_pmvE5am_pm[8].i1=0;
			__ZZStL10init_am_pmvE5am_pm[8].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[9].i0=0;
			__ZZStL10init_am_pmvE5am_pm[9].i1=0;
			__ZZStL10init_am_pmvE5am_pm[9].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[10].i0=0;
			__ZZStL10init_am_pmvE5am_pm[10].i1=0;
			__ZZStL10init_am_pmvE5am_pm[10].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[11].i0=0;
			__ZZStL10init_am_pmvE5am_pm[11].i1=0;
			__ZZStL10init_am_pmvE5am_pm[11].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[12].i0=0;
			__ZZStL10init_am_pmvE5am_pm[12].i1=0;
			__ZZStL10init_am_pmvE5am_pm[12].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[13].i0=0;
			__ZZStL10init_am_pmvE5am_pm[13].i1=0;
			__ZZStL10init_am_pmvE5am_pm[13].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[14].i0=0;
			__ZZStL10init_am_pmvE5am_pm[14].i1=0;
			__ZZStL10init_am_pmvE5am_pm[14].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[15].i0=0;
			__ZZStL10init_am_pmvE5am_pm[15].i1=0;
			__ZZStL10init_am_pmvE5am_pm[15].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[16].i0=0;
			__ZZStL10init_am_pmvE5am_pm[16].i1=0;
			__ZZStL10init_am_pmvE5am_pm[16].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[17].i0=0;
			__ZZStL10init_am_pmvE5am_pm[17].i1=0;
			__ZZStL10init_am_pmvE5am_pm[17].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[18].i0=0;
			__ZZStL10init_am_pmvE5am_pm[18].i1=0;
			__ZZStL10init_am_pmvE5am_pm[18].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[19].i0=0;
			__ZZStL10init_am_pmvE5am_pm[19].i1=0;
			__ZZStL10init_am_pmvE5am_pm[19].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[20].i0=0;
			__ZZStL10init_am_pmvE5am_pm[20].i1=0;
			__ZZStL10init_am_pmvE5am_pm[20].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[21].i0=0;
			__ZZStL10init_am_pmvE5am_pm[21].i1=0;
			__ZZStL10init_am_pmvE5am_pm[21].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[22].i0=0;
			__ZZStL10init_am_pmvE5am_pm[22].i1=0;
			__ZZStL10init_am_pmvE5am_pm[22].a2=nullArray;
			__ZZStL10init_am_pmvE5am_pm[23].i0=0;
			__ZZStL10init_am_pmvE5am_pm[23].i1=0;
			__ZZStL10init_am_pmvE5am_pm[23].a2=nullArray;
			__ZGVZStL10init_am_pmvE5am_pm=1;
			L$ppre=0;
		}
		tmp2=__ZZStL10init_am_pmvE5am_pm[0].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL10init_am_pmvE5am_pm[0],L$ppre,2-L$ppre|0,tmp2,tmp2,2,_$pstr$p107$p389,0);
	}
	L$ppre=__ZZStL10init_am_pmvE5am_pm[1].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>2){
				tmp0=__ZZStL10init_am_pmvE5am_pm[1].a2;
				tmp0[0]=80;
				tmp0[1]=77;
				tmp0[2]=0;
				__ZZStL10init_am_pmvE5am_pm[1].i1=2;
				break a;
			}
		}
		tmp2=__ZZStL10init_am_pmvE5am_pm[1].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL10init_am_pmvE5am_pm[1],L$ppre,2-L$ppre|0,tmp2,tmp2,2,_$pstr$p108$p390,0);
	}
	__ZZNKSt20__time_get_c_storageIcE7__am_pmEvE5am_pm=__ZZStL10init_am_pmvE5am_pm;
	__ZGVZNKSt20__time_get_c_storageIcE7__am_pmEvE5am_pm=1;
	oSlot=0;
	return __ZZStL10init_am_pmvE5am_pm;
}
function __ZNSs21__grow_by_and_replaceEjjjjjjPKc(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6,Marg6){
	var tmp0=null,tmp1=null,tmp2=0,Lgeptoindexphi6=0,Lgeptoindexphi=0,Lgeptoindexphi2=0;
	tmp0=Larg0.a2;
	if(Larg1>>>0<2147483623){
		tmp2=Larg1<<1;
		Lgeptoindexphi6=Larg2+Larg1|0;
		tmp2=(Lgeptoindexphi6>>>0<tmp2>>>0?tmp2|0:Lgeptoindexphi6|0)+16& -16;
	}else{
		tmp2=-17;
	}
	tmp1=new Uint8Array(tmp2/1|0);
	if((Larg5|0)!==0){
		Lgeptoindexphi=0;
		Lgeptoindexphi6=0;
		while(1){
			tmp1[Lgeptoindexphi]=Larg6[Marg6+Lgeptoindexphi6|0]|0;
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			if(tmp1!==tmp1||(0+Larg5|0)!==(0+Lgeptoindexphi|0)){
				Lgeptoindexphi6=Lgeptoindexphi6+1|0;
				continue;
			}
			break;
		}
	}
	Lgeptoindexphi6=Larg3-Larg4|0;
	if((Lgeptoindexphi6|0)!==0){
		Lgeptoindexphi2=Larg5;
		Lgeptoindexphi=Larg4;
		while(1){
			tmp1[Lgeptoindexphi2]=tmp0[Lgeptoindexphi]|0;
			Lgeptoindexphi2=Lgeptoindexphi2+1|0;
			if(tmp1!==tmp1||((0+Larg5|0)+Lgeptoindexphi6|0)!==(0+Lgeptoindexphi2|0)){
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				continue;
			}
			break;
		}
	}
	Larg0.a2=tmp1;
	Larg0.i0=tmp2|1;
	tmp2=Lgeptoindexphi6+Larg5|0;
	Larg0.i1=tmp2;
	tmp1[tmp2]=0;
}
function __ZNKSt20__time_get_c_storageIcE8__monthsEv(Larg0){
	var tmp0=null,L$ppre=0,tmp2=0;
	if(__ZGVZNKSt20__time_get_c_storageIcE8__monthsEvE6months|0){
		tmp0=__ZZNKSt20__time_get_c_storageIcE8__monthsEvE6months;
		oSlot=0;
		return tmp0;
	}
	a:{
		if(__ZGVZStL11init_monthsvE6months|0){
			L$ppre=__ZZStL11init_monthsvE6months[0].i0|0;
			if(L$ppre>>>0<2){
				L$ppre=0;
			}else{
				L$ppre=(L$ppre& -2)-1|0;
				if(L$ppre>>>0>7){
					tmp0=__ZZStL11init_monthsvE6months[0].a2;
					tmp0[0]=74;
					tmp0[1]=97;
					tmp0[2]=110;
					tmp0[3]=117;
					tmp0[4]=97;
					tmp0[5]=114;
					tmp0[6]=121;
					tmp0[7]=0;
					__ZZStL11init_monthsvE6months[0].i1=7;
					break a;
				}
			}
		}else{
			__ZZStL11init_monthsvE6months[0].i0=0;
			__ZZStL11init_monthsvE6months[0].i1=0;
			__ZZStL11init_monthsvE6months[0].a2=nullArray;
			__ZZStL11init_monthsvE6months[1].i0=0;
			__ZZStL11init_monthsvE6months[1].i1=0;
			__ZZStL11init_monthsvE6months[1].a2=nullArray;
			__ZZStL11init_monthsvE6months[2].i0=0;
			__ZZStL11init_monthsvE6months[2].i1=0;
			__ZZStL11init_monthsvE6months[2].a2=nullArray;
			__ZZStL11init_monthsvE6months[3].i0=0;
			__ZZStL11init_monthsvE6months[3].i1=0;
			__ZZStL11init_monthsvE6months[3].a2=nullArray;
			__ZZStL11init_monthsvE6months[4].i0=0;
			__ZZStL11init_monthsvE6months[4].i1=0;
			__ZZStL11init_monthsvE6months[4].a2=nullArray;
			__ZZStL11init_monthsvE6months[5].i0=0;
			__ZZStL11init_monthsvE6months[5].i1=0;
			__ZZStL11init_monthsvE6months[5].a2=nullArray;
			__ZZStL11init_monthsvE6months[6].i0=0;
			__ZZStL11init_monthsvE6months[6].i1=0;
			__ZZStL11init_monthsvE6months[6].a2=nullArray;
			__ZZStL11init_monthsvE6months[7].i0=0;
			__ZZStL11init_monthsvE6months[7].i1=0;
			__ZZStL11init_monthsvE6months[7].a2=nullArray;
			__ZZStL11init_monthsvE6months[8].i0=0;
			__ZZStL11init_monthsvE6months[8].i1=0;
			__ZZStL11init_monthsvE6months[8].a2=nullArray;
			__ZZStL11init_monthsvE6months[9].i0=0;
			__ZZStL11init_monthsvE6months[9].i1=0;
			__ZZStL11init_monthsvE6months[9].a2=nullArray;
			__ZZStL11init_monthsvE6months[10].i0=0;
			__ZZStL11init_monthsvE6months[10].i1=0;
			__ZZStL11init_monthsvE6months[10].a2=nullArray;
			__ZZStL11init_monthsvE6months[11].i0=0;
			__ZZStL11init_monthsvE6months[11].i1=0;
			__ZZStL11init_monthsvE6months[11].a2=nullArray;
			__ZZStL11init_monthsvE6months[12].i0=0;
			__ZZStL11init_monthsvE6months[12].i1=0;
			__ZZStL11init_monthsvE6months[12].a2=nullArray;
			__ZZStL11init_monthsvE6months[13].i0=0;
			__ZZStL11init_monthsvE6months[13].i1=0;
			__ZZStL11init_monthsvE6months[13].a2=nullArray;
			__ZZStL11init_monthsvE6months[14].i0=0;
			__ZZStL11init_monthsvE6months[14].i1=0;
			__ZZStL11init_monthsvE6months[14].a2=nullArray;
			__ZZStL11init_monthsvE6months[15].i0=0;
			__ZZStL11init_monthsvE6months[15].i1=0;
			__ZZStL11init_monthsvE6months[15].a2=nullArray;
			__ZZStL11init_monthsvE6months[16].i0=0;
			__ZZStL11init_monthsvE6months[16].i1=0;
			__ZZStL11init_monthsvE6months[16].a2=nullArray;
			__ZZStL11init_monthsvE6months[17].i0=0;
			__ZZStL11init_monthsvE6months[17].i1=0;
			__ZZStL11init_monthsvE6months[17].a2=nullArray;
			__ZZStL11init_monthsvE6months[18].i0=0;
			__ZZStL11init_monthsvE6months[18].i1=0;
			__ZZStL11init_monthsvE6months[18].a2=nullArray;
			__ZZStL11init_monthsvE6months[19].i0=0;
			__ZZStL11init_monthsvE6months[19].i1=0;
			__ZZStL11init_monthsvE6months[19].a2=nullArray;
			__ZZStL11init_monthsvE6months[20].i0=0;
			__ZZStL11init_monthsvE6months[20].i1=0;
			__ZZStL11init_monthsvE6months[20].a2=nullArray;
			__ZZStL11init_monthsvE6months[21].i0=0;
			__ZZStL11init_monthsvE6months[21].i1=0;
			__ZZStL11init_monthsvE6months[21].a2=nullArray;
			__ZZStL11init_monthsvE6months[22].i0=0;
			__ZZStL11init_monthsvE6months[22].i1=0;
			__ZZStL11init_monthsvE6months[22].a2=nullArray;
			__ZZStL11init_monthsvE6months[23].i0=0;
			__ZZStL11init_monthsvE6months[23].i1=0;
			__ZZStL11init_monthsvE6months[23].a2=nullArray;
			__ZGVZStL11init_monthsvE6months=1;
			L$ppre=0;
		}
		tmp2=__ZZStL11init_monthsvE6months[0].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[0],L$ppre,7-L$ppre|0,tmp2,tmp2,7,_$pstr$p59$p391,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[1].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>8){
				tmp0=__ZZStL11init_monthsvE6months[1].a2;
				tmp0[0]=70;
				tmp0[1]=101;
				tmp0[2]=98;
				tmp0[3]=114;
				tmp0[4]=117;
				tmp0[5]=97;
				tmp0[6]=114;
				tmp0[7]=121;
				tmp0[8]=0;
				__ZZStL11init_monthsvE6months[1].i1=8;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[1].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[1],L$ppre,8-L$ppre|0,tmp2,tmp2,8,_$pstr$p60$p392,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[2].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>5){
				tmp0=__ZZStL11init_monthsvE6months[2].a2;
				tmp0[0]=77;
				tmp0[1]=97;
				tmp0[2]=114;
				tmp0[3]=99;
				tmp0[4]=104;
				tmp0[5]=0;
				__ZZStL11init_monthsvE6months[2].i1=5;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[2].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[2],L$ppre,5-L$ppre|0,tmp2,tmp2,5,_$pstr$p61$p393,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[3].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>5){
				tmp0=__ZZStL11init_monthsvE6months[3].a2;
				tmp0[0]=65;
				tmp0[1]=112;
				tmp0[2]=114;
				tmp0[3]=105;
				tmp0[4]=108;
				tmp0[5]=0;
				__ZZStL11init_monthsvE6months[3].i1=5;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[3].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[3],L$ppre,5-L$ppre|0,tmp2,tmp2,5,_$pstr$p62$p394,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[4].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>3){
				tmp0=__ZZStL11init_monthsvE6months[4].a2;
				tmp0[0]=77;
				tmp0[1]=97;
				tmp0[2]=121;
				tmp0[3]=0;
				__ZZStL11init_monthsvE6months[4].i1=3;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[4].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[4],L$ppre,3-L$ppre|0,tmp2,tmp2,3,_$pstr$p63$p395,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[5].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>4){
				tmp0=__ZZStL11init_monthsvE6months[5].a2;
				tmp0[0]=74;
				tmp0[1]=117;
				tmp0[2]=110;
				tmp0[3]=101;
				tmp0[4]=0;
				__ZZStL11init_monthsvE6months[5].i1=4;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[5].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[5],L$ppre,4-L$ppre|0,tmp2,tmp2,4,_$pstr$p64$p396,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[6].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>4){
				tmp0=__ZZStL11init_monthsvE6months[6].a2;
				tmp0[0]=74;
				tmp0[1]=117;
				tmp0[2]=108;
				tmp0[3]=121;
				tmp0[4]=0;
				__ZZStL11init_monthsvE6months[6].i1=4;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[6].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[6],L$ppre,4-L$ppre|0,tmp2,tmp2,4,_$pstr$p65$p397,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[7].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>6){
				tmp0=__ZZStL11init_monthsvE6months[7].a2;
				tmp0[0]=65;
				tmp0[1]=117;
				tmp0[2]=103;
				tmp0[3]=117;
				tmp0[4]=115;
				tmp0[5]=116;
				tmp0[6]=0;
				__ZZStL11init_monthsvE6months[7].i1=6;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[7].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[7],L$ppre,6-L$ppre|0,tmp2,tmp2,6,_$pstr$p66$p398,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[8].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>9){
				tmp0=__ZZStL11init_monthsvE6months[8].a2;
				tmp0[0]=83;
				tmp0[1]=101;
				tmp0[2]=112;
				tmp0[3]=116;
				tmp0[4]=101;
				tmp0[5]=109;
				tmp0[6]=98;
				tmp0[7]=101;
				tmp0[8]=114;
				tmp0[9]=0;
				__ZZStL11init_monthsvE6months[8].i1=9;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[8].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[8],L$ppre,9-L$ppre|0,tmp2,tmp2,9,_$pstr$p67$p399,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[9].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>7){
				tmp0=__ZZStL11init_monthsvE6months[9].a2;
				tmp0[0]=79;
				tmp0[1]=99;
				tmp0[2]=116;
				tmp0[3]=111;
				tmp0[4]=98;
				tmp0[5]=101;
				tmp0[6]=114;
				tmp0[7]=0;
				__ZZStL11init_monthsvE6months[9].i1=7;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[9].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[9],L$ppre,7-L$ppre|0,tmp2,tmp2,7,_$pstr$p68$p400,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[10].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>8){
				tmp0=__ZZStL11init_monthsvE6months[10].a2;
				tmp0[0]=78;
				tmp0[1]=111;
				tmp0[2]=118;
				tmp0[3]=101;
				tmp0[4]=109;
				tmp0[5]=98;
				tmp0[6]=101;
				tmp0[7]=114;
				tmp0[8]=0;
				__ZZStL11init_monthsvE6months[10].i1=8;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[10].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[10],L$ppre,8-L$ppre|0,tmp2,tmp2,8,_$pstr$p69$p401,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[11].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>8){
				tmp0=__ZZStL11init_monthsvE6months[11].a2;
				tmp0[0]=68;
				tmp0[1]=101;
				tmp0[2]=99;
				tmp0[3]=101;
				tmp0[4]=109;
				tmp0[5]=98;
				tmp0[6]=101;
				tmp0[7]=114;
				tmp0[8]=0;
				__ZZStL11init_monthsvE6months[11].i1=8;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[11].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[11],L$ppre,8-L$ppre|0,tmp2,tmp2,8,_$pstr$p70$p402,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[12].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>3){
				tmp0=__ZZStL11init_monthsvE6months[12].a2;
				tmp0[0]=74;
				tmp0[1]=97;
				tmp0[2]=110;
				tmp0[3]=0;
				__ZZStL11init_monthsvE6months[12].i1=3;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[12].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[12],L$ppre,3-L$ppre|0,tmp2,tmp2,3,_$pstr$p71$p403,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[13].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>3){
				tmp0=__ZZStL11init_monthsvE6months[13].a2;
				tmp0[0]=70;
				tmp0[1]=101;
				tmp0[2]=98;
				tmp0[3]=0;
				__ZZStL11init_monthsvE6months[13].i1=3;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[13].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[13],L$ppre,3-L$ppre|0,tmp2,tmp2,3,_$pstr$p72$p404,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[14].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>3){
				tmp0=__ZZStL11init_monthsvE6months[14].a2;
				tmp0[0]=77;
				tmp0[1]=97;
				tmp0[2]=114;
				tmp0[3]=0;
				__ZZStL11init_monthsvE6months[14].i1=3;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[14].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[14],L$ppre,3-L$ppre|0,tmp2,tmp2,3,_$pstr$p73$p405,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[15].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>3){
				tmp0=__ZZStL11init_monthsvE6months[15].a2;
				tmp0[0]=65;
				tmp0[1]=112;
				tmp0[2]=114;
				tmp0[3]=0;
				__ZZStL11init_monthsvE6months[15].i1=3;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[15].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[15],L$ppre,3-L$ppre|0,tmp2,tmp2,3,_$pstr$p74$p406,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[16].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>3){
				tmp0=__ZZStL11init_monthsvE6months[16].a2;
				tmp0[0]=77;
				tmp0[1]=97;
				tmp0[2]=121;
				tmp0[3]=0;
				__ZZStL11init_monthsvE6months[16].i1=3;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[16].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[16],L$ppre,3-L$ppre|0,tmp2,tmp2,3,_$pstr$p63$p395,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[17].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>3){
				tmp0=__ZZStL11init_monthsvE6months[17].a2;
				tmp0[0]=74;
				tmp0[1]=117;
				tmp0[2]=110;
				tmp0[3]=0;
				__ZZStL11init_monthsvE6months[17].i1=3;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[17].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[17],L$ppre,3-L$ppre|0,tmp2,tmp2,3,_$pstr$p75$p407,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[18].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>3){
				tmp0=__ZZStL11init_monthsvE6months[18].a2;
				tmp0[0]=74;
				tmp0[1]=117;
				tmp0[2]=108;
				tmp0[3]=0;
				__ZZStL11init_monthsvE6months[18].i1=3;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[18].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[18],L$ppre,3-L$ppre|0,tmp2,tmp2,3,_$pstr$p76$p408,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[19].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>3){
				tmp0=__ZZStL11init_monthsvE6months[19].a2;
				tmp0[0]=65;
				tmp0[1]=117;
				tmp0[2]=103;
				tmp0[3]=0;
				__ZZStL11init_monthsvE6months[19].i1=3;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[19].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[19],L$ppre,3-L$ppre|0,tmp2,tmp2,3,_$pstr$p77$p409,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[20].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>3){
				tmp0=__ZZStL11init_monthsvE6months[20].a2;
				tmp0[0]=83;
				tmp0[1]=101;
				tmp0[2]=112;
				tmp0[3]=0;
				__ZZStL11init_monthsvE6months[20].i1=3;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[20].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[20],L$ppre,3-L$ppre|0,tmp2,tmp2,3,_$pstr$p78$p410,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[21].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>3){
				tmp0=__ZZStL11init_monthsvE6months[21].a2;
				tmp0[0]=79;
				tmp0[1]=99;
				tmp0[2]=116;
				tmp0[3]=0;
				__ZZStL11init_monthsvE6months[21].i1=3;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[21].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[21],L$ppre,3-L$ppre|0,tmp2,tmp2,3,_$pstr$p79$p411,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[22].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>3){
				tmp0=__ZZStL11init_monthsvE6months[22].a2;
				tmp0[0]=78;
				tmp0[1]=111;
				tmp0[2]=118;
				tmp0[3]=0;
				__ZZStL11init_monthsvE6months[22].i1=3;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[22].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[22],L$ppre,3-L$ppre|0,tmp2,tmp2,3,_$pstr$p80$p412,0);
	}
	L$ppre=__ZZStL11init_monthsvE6months[23].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>3){
				tmp0=__ZZStL11init_monthsvE6months[23].a2;
				tmp0[0]=68;
				tmp0[1]=101;
				tmp0[2]=99;
				tmp0[3]=0;
				__ZZStL11init_monthsvE6months[23].i1=3;
				break a;
			}
		}
		tmp2=__ZZStL11init_monthsvE6months[23].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL11init_monthsvE6months[23],L$ppre,3-L$ppre|0,tmp2,tmp2,3,_$pstr$p81$p413,0);
	}
	__ZZNKSt20__time_get_c_storageIcE8__monthsEvE6months=__ZZStL11init_monthsvE6months;
	__ZGVZNKSt20__time_get_c_storageIcE8__monthsEvE6months=1;
	oSlot=0;
	return __ZZStL11init_monthsvE6months;
}
function __ZNKSt20__time_get_c_storageIcE7__weeksEv(Larg0){
	var tmp0=null,L$ppre=0,tmp2=0;
	if(__ZGVZNKSt20__time_get_c_storageIcE7__weeksEvE5weeks|0){
		tmp0=__ZZNKSt20__time_get_c_storageIcE7__weeksEvE5weeks;
		oSlot=0;
		return tmp0;
	}
	a:{
		if(__ZGVZStL10init_weeksvE5weeks|0){
			L$ppre=__ZZStL10init_weeksvE5weeks[0].i0|0;
			if(L$ppre>>>0<2){
				L$ppre=0;
			}else{
				L$ppre=(L$ppre& -2)-1|0;
				if(L$ppre>>>0>6){
					tmp0=__ZZStL10init_weeksvE5weeks[0].a2;
					tmp0[0]=83;
					tmp0[1]=117;
					tmp0[2]=110;
					tmp0[3]=100;
					tmp0[4]=97;
					tmp0[5]=121;
					tmp0[6]=0;
					__ZZStL10init_weeksvE5weeks[0].i1=6;
					break a;
				}
			}
		}else{
			__ZZStL10init_weeksvE5weeks[0].i0=0;
			__ZZStL10init_weeksvE5weeks[0].i1=0;
			__ZZStL10init_weeksvE5weeks[0].a2=nullArray;
			__ZZStL10init_weeksvE5weeks[1].i0=0;
			__ZZStL10init_weeksvE5weeks[1].i1=0;
			__ZZStL10init_weeksvE5weeks[1].a2=nullArray;
			__ZZStL10init_weeksvE5weeks[2].i0=0;
			__ZZStL10init_weeksvE5weeks[2].i1=0;
			__ZZStL10init_weeksvE5weeks[2].a2=nullArray;
			__ZZStL10init_weeksvE5weeks[3].i0=0;
			__ZZStL10init_weeksvE5weeks[3].i1=0;
			__ZZStL10init_weeksvE5weeks[3].a2=nullArray;
			__ZZStL10init_weeksvE5weeks[4].i0=0;
			__ZZStL10init_weeksvE5weeks[4].i1=0;
			__ZZStL10init_weeksvE5weeks[4].a2=nullArray;
			__ZZStL10init_weeksvE5weeks[5].i0=0;
			__ZZStL10init_weeksvE5weeks[5].i1=0;
			__ZZStL10init_weeksvE5weeks[5].a2=nullArray;
			__ZZStL10init_weeksvE5weeks[6].i0=0;
			__ZZStL10init_weeksvE5weeks[6].i1=0;
			__ZZStL10init_weeksvE5weeks[6].a2=nullArray;
			__ZZStL10init_weeksvE5weeks[7].i0=0;
			__ZZStL10init_weeksvE5weeks[7].i1=0;
			__ZZStL10init_weeksvE5weeks[7].a2=nullArray;
			__ZZStL10init_weeksvE5weeks[8].i0=0;
			__ZZStL10init_weeksvE5weeks[8].i1=0;
			__ZZStL10init_weeksvE5weeks[8].a2=nullArray;
			__ZZStL10init_weeksvE5weeks[9].i0=0;
			__ZZStL10init_weeksvE5weeks[9].i1=0;
			__ZZStL10init_weeksvE5weeks[9].a2=nullArray;
			__ZZStL10init_weeksvE5weeks[10].i0=0;
			__ZZStL10init_weeksvE5weeks[10].i1=0;
			__ZZStL10init_weeksvE5weeks[10].a2=nullArray;
			__ZZStL10init_weeksvE5weeks[11].i0=0;
			__ZZStL10init_weeksvE5weeks[11].i1=0;
			__ZZStL10init_weeksvE5weeks[11].a2=nullArray;
			__ZZStL10init_weeksvE5weeks[12].i0=0;
			__ZZStL10init_weeksvE5weeks[12].i1=0;
			__ZZStL10init_weeksvE5weeks[12].a2=nullArray;
			__ZZStL10init_weeksvE5weeks[13].i0=0;
			__ZZStL10init_weeksvE5weeks[13].i1=0;
			__ZZStL10init_weeksvE5weeks[13].a2=nullArray;
			__ZGVZStL10init_weeksvE5weeks=1;
			L$ppre=0;
		}
		tmp2=__ZZStL10init_weeksvE5weeks[0].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL10init_weeksvE5weeks[0],L$ppre,6-L$ppre|0,tmp2,tmp2,6,_$pstr$p29$p414,0);
	}
	L$ppre=__ZZStL10init_weeksvE5weeks[1].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>6){
				tmp0=__ZZStL10init_weeksvE5weeks[1].a2;
				tmp0[0]=77;
				tmp0[1]=111;
				tmp0[2]=110;
				tmp0[3]=100;
				tmp0[4]=97;
				tmp0[5]=121;
				tmp0[6]=0;
				__ZZStL10init_weeksvE5weeks[1].i1=6;
				break a;
			}
		}
		tmp2=__ZZStL10init_weeksvE5weeks[1].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL10init_weeksvE5weeks[1],L$ppre,6-L$ppre|0,tmp2,tmp2,6,_$pstr$p30$p415,0);
	}
	L$ppre=__ZZStL10init_weeksvE5weeks[2].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>7){
				tmp0=__ZZStL10init_weeksvE5weeks[2].a2;
				tmp0[0]=84;
				tmp0[1]=117;
				tmp0[2]=101;
				tmp0[3]=115;
				tmp0[4]=100;
				tmp0[5]=97;
				tmp0[6]=121;
				tmp0[7]=0;
				__ZZStL10init_weeksvE5weeks[2].i1=7;
				break a;
			}
		}
		tmp2=__ZZStL10init_weeksvE5weeks[2].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL10init_weeksvE5weeks[2],L$ppre,7-L$ppre|0,tmp2,tmp2,7,_$pstr$p31$p416,0);
	}
	L$ppre=__ZZStL10init_weeksvE5weeks[3].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>9){
				tmp0=__ZZStL10init_weeksvE5weeks[3].a2;
				tmp0[0]=87;
				tmp0[1]=101;
				tmp0[2]=100;
				tmp0[3]=110;
				tmp0[4]=101;
				tmp0[5]=115;
				tmp0[6]=100;
				tmp0[7]=97;
				tmp0[8]=121;
				tmp0[9]=0;
				__ZZStL10init_weeksvE5weeks[3].i1=9;
				break a;
			}
		}
		tmp2=__ZZStL10init_weeksvE5weeks[3].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL10init_weeksvE5weeks[3],L$ppre,9-L$ppre|0,tmp2,tmp2,9,_$pstr$p32$p417,0);
	}
	L$ppre=__ZZStL10init_weeksvE5weeks[4].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>8){
				tmp0=__ZZStL10init_weeksvE5weeks[4].a2;
				tmp0[0]=84;
				tmp0[1]=104;
				tmp0[2]=117;
				tmp0[3]=114;
				tmp0[4]=115;
				tmp0[5]=100;
				tmp0[6]=97;
				tmp0[7]=121;
				tmp0[8]=0;
				__ZZStL10init_weeksvE5weeks[4].i1=8;
				break a;
			}
		}
		tmp2=__ZZStL10init_weeksvE5weeks[4].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL10init_weeksvE5weeks[4],L$ppre,8-L$ppre|0,tmp2,tmp2,8,_$pstr$p33$p418,0);
	}
	L$ppre=__ZZStL10init_weeksvE5weeks[5].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>6){
				tmp0=__ZZStL10init_weeksvE5weeks[5].a2;
				tmp0[0]=70;
				tmp0[1]=114;
				tmp0[2]=105;
				tmp0[3]=100;
				tmp0[4]=97;
				tmp0[5]=121;
				tmp0[6]=0;
				__ZZStL10init_weeksvE5weeks[5].i1=6;
				break a;
			}
		}
		tmp2=__ZZStL10init_weeksvE5weeks[5].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL10init_weeksvE5weeks[5],L$ppre,6-L$ppre|0,tmp2,tmp2,6,_$pstr$p34$p419,0);
	}
	L$ppre=__ZZStL10init_weeksvE5weeks[6].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>8){
				tmp0=__ZZStL10init_weeksvE5weeks[6].a2;
				tmp0[0]=83;
				tmp0[1]=97;
				tmp0[2]=116;
				tmp0[3]=117;
				tmp0[4]=114;
				tmp0[5]=100;
				tmp0[6]=97;
				tmp0[7]=121;
				tmp0[8]=0;
				__ZZStL10init_weeksvE5weeks[6].i1=8;
				break a;
			}
		}
		tmp2=__ZZStL10init_weeksvE5weeks[6].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL10init_weeksvE5weeks[6],L$ppre,8-L$ppre|0,tmp2,tmp2,8,_$pstr$p35$p420,0);
	}
	L$ppre=__ZZStL10init_weeksvE5weeks[7].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>3){
				tmp0=__ZZStL10init_weeksvE5weeks[7].a2;
				tmp0[0]=83;
				tmp0[1]=117;
				tmp0[2]=110;
				tmp0[3]=0;
				__ZZStL10init_weeksvE5weeks[7].i1=3;
				break a;
			}
		}
		tmp2=__ZZStL10init_weeksvE5weeks[7].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL10init_weeksvE5weeks[7],L$ppre,3-L$ppre|0,tmp2,tmp2,3,_$pstr$p36$p421,0);
	}
	L$ppre=__ZZStL10init_weeksvE5weeks[8].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>3){
				tmp0=__ZZStL10init_weeksvE5weeks[8].a2;
				tmp0[0]=77;
				tmp0[1]=111;
				tmp0[2]=110;
				tmp0[3]=0;
				__ZZStL10init_weeksvE5weeks[8].i1=3;
				break a;
			}
		}
		tmp2=__ZZStL10init_weeksvE5weeks[8].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL10init_weeksvE5weeks[8],L$ppre,3-L$ppre|0,tmp2,tmp2,3,_$pstr$p37$p422,0);
	}
	L$ppre=__ZZStL10init_weeksvE5weeks[9].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>3){
				tmp0=__ZZStL10init_weeksvE5weeks[9].a2;
				tmp0[0]=84;
				tmp0[1]=117;
				tmp0[2]=101;
				tmp0[3]=0;
				__ZZStL10init_weeksvE5weeks[9].i1=3;
				break a;
			}
		}
		tmp2=__ZZStL10init_weeksvE5weeks[9].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL10init_weeksvE5weeks[9],L$ppre,3-L$ppre|0,tmp2,tmp2,3,_$pstr$p38$p423,0);
	}
	L$ppre=__ZZStL10init_weeksvE5weeks[10].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>3){
				tmp0=__ZZStL10init_weeksvE5weeks[10].a2;
				tmp0[0]=87;
				tmp0[1]=101;
				tmp0[2]=100;
				tmp0[3]=0;
				__ZZStL10init_weeksvE5weeks[10].i1=3;
				break a;
			}
		}
		tmp2=__ZZStL10init_weeksvE5weeks[10].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL10init_weeksvE5weeks[10],L$ppre,3-L$ppre|0,tmp2,tmp2,3,_$pstr$p39$p424,0);
	}
	L$ppre=__ZZStL10init_weeksvE5weeks[11].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>3){
				tmp0=__ZZStL10init_weeksvE5weeks[11].a2;
				tmp0[0]=84;
				tmp0[1]=104;
				tmp0[2]=117;
				tmp0[3]=0;
				__ZZStL10init_weeksvE5weeks[11].i1=3;
				break a;
			}
		}
		tmp2=__ZZStL10init_weeksvE5weeks[11].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL10init_weeksvE5weeks[11],L$ppre,3-L$ppre|0,tmp2,tmp2,3,_$pstr$p40$p425,0);
	}
	L$ppre=__ZZStL10init_weeksvE5weeks[12].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>3){
				tmp0=__ZZStL10init_weeksvE5weeks[12].a2;
				tmp0[0]=70;
				tmp0[1]=114;
				tmp0[2]=105;
				tmp0[3]=0;
				__ZZStL10init_weeksvE5weeks[12].i1=3;
				break a;
			}
		}
		tmp2=__ZZStL10init_weeksvE5weeks[12].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL10init_weeksvE5weeks[12],L$ppre,3-L$ppre|0,tmp2,tmp2,3,_$pstr$p41$p426,0);
	}
	L$ppre=__ZZStL10init_weeksvE5weeks[13].i0|0;
	a:{
		if(L$ppre>>>0<2){
			L$ppre=0;
		}else{
			L$ppre=(L$ppre& -2)-1|0;
			if(L$ppre>>>0>3){
				tmp0=__ZZStL10init_weeksvE5weeks[13].a2;
				tmp0[0]=83;
				tmp0[1]=97;
				tmp0[2]=116;
				tmp0[3]=0;
				__ZZStL10init_weeksvE5weeks[13].i1=3;
				break a;
			}
		}
		tmp2=__ZZStL10init_weeksvE5weeks[13].i1|0;
		__ZNSs21__grow_by_and_replaceEjjjjjjPKc(__ZZStL10init_weeksvE5weeks[13],L$ppre,3-L$ppre|0,tmp2,tmp2,3,_$pstr$p42$p427,0);
	}
	__ZZNKSt20__time_get_c_storageIcE7__weeksEvE5weeks=__ZZStL10init_weeksvE5weeks;
	__ZGVZNKSt20__time_get_c_storageIcE7__weeksEvE5weeks=1;
	oSlot=0;
	return __ZZStL10init_weeksvE5weeks;
}
function __ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjP2tmcc(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Larg7,Larg8){
	var L$psroa$p0$p0=null,tmp1=0,tmp2=0,tmp3=0,L$poptgepsqueezed147=null,L$poptgepsqueezed147o=0,L$poptgepsqueezed145=null,L$poptgepsqueezed145o=0,L$ppre$pi=null,L$ppre$pio=0,L$psroa$p09$p0$pcopyload=null,L$psroa$p06$p0$pcopyload=null,tmp9=null;
	Larg5[Marg5]=0;
	L$psroa$p0$p0=Larg4.a7.a0;
	tmp1=L$psroa$p0$p0.i1|0;
	tmp2=tmp1+1|0;
	L$psroa$p0$p0.i1=tmp2;
	if((__ZNSt5ctypeIcE2idE.i0&255)!==0){
		tmp3=__ZNSt5ctypeIcE2idE.i1|0;
	}else{
		tmp3=(__ZNSt6locale2id9__next_idE|0)+1|0;
		__ZNSt6locale2id9__next_idE=tmp3;
		__ZNSt5ctypeIcE2idE.i1=tmp3;
		__ZNSt5ctypeIcE2idE.i0=1;
	}
	L$poptgepsqueezed147=L$psroa$p0$p0.a2.a0;
	L$poptgepsqueezed147=L$poptgepsqueezed147[tmp3-1|0];
	L$psroa$p0$p0.i1=tmp1;
	if((tmp2|0)===0)L$psroa$p0$p0.a0.a3(L$psroa$p0$p0);
	L$psroa$p0$p0={a0:null};
	L$poptgepsqueezed145={a0:null};
	L$ppre$pi={a0:null};
	a:{
		switch(Larg7<<24>>24|0){
			case 97:
			case 65:
			L$ppre$pi=Larg3.a0;
			L$poptgepsqueezed145=Larg1.a2;
			L$poptgepsqueezed145=L$poptgepsqueezed145.a0.a1(L$poptgepsqueezed145);
			L$poptgepsqueezed145o=oSlot;
			L$psroa$p0$p0.a0=L$ppre$pi;
			L$poptgepsqueezed147=__ZSt14__scan_keywordISt19istreambuf_iteratorIcSt11char_traitsIcEEPKSsSt5ctypeIcEET0_RT_S9_S8_S8_RKT1_Rjb(Larg2,L$psroa$p0$p0,L$poptgepsqueezed145,L$poptgepsqueezed145o,L$poptgepsqueezed145,L$poptgepsqueezed145o+14|0,L$poptgepsqueezed147,Larg5,Marg5,0);
			L$poptgepsqueezed147o=oSlot;
			tmp1=((L$poptgepsqueezed147o)*12)-((L$poptgepsqueezed145o)*12)|0;
			if((tmp1|0)>=168)break;
			Larg6.i6=((tmp1|0)/12|0)%7|0;
			break;
			case 98:
			case 66:
			case 104:
			L$ppre$pi=Larg3.a0;
			L$poptgepsqueezed145=Larg1.a2;
			L$poptgepsqueezed145=L$poptgepsqueezed145.a0.a2(L$poptgepsqueezed145);
			L$poptgepsqueezed145o=oSlot;
			L$psroa$p0$p0.a0=L$ppre$pi;
			L$poptgepsqueezed147=__ZSt14__scan_keywordISt19istreambuf_iteratorIcSt11char_traitsIcEEPKSsSt5ctypeIcEET0_RT_S9_S8_S8_RKT1_Rjb(Larg2,L$psroa$p0$p0,L$poptgepsqueezed145,L$poptgepsqueezed145o,L$poptgepsqueezed145,L$poptgepsqueezed145o+24|0,L$poptgepsqueezed147,Larg5,Marg5,0);
			L$poptgepsqueezed147o=oSlot;
			tmp1=((L$poptgepsqueezed147o)*12)-((L$poptgepsqueezed145o)*12)|0;
			if((tmp1|0)>=288)break;
			Larg6.i4=((tmp1|0)/12|0)%12|0;
			break;
			case 99:
			L$poptgepsqueezed147=Larg1.a2;
			L$poptgepsqueezed147=L$poptgepsqueezed147.a0.a4(L$poptgepsqueezed147);
			L$poptgepsqueezed147o=oSlot;
			L$psroa$p09$p0$pcopyload=Larg2.a0;
			L$psroa$p06$p0$pcopyload=Larg3.a0;
			tmp9=L$poptgepsqueezed147[L$poptgepsqueezed147o].a2;
			tmp1=L$poptgepsqueezed147[L$poptgepsqueezed147o].i1|0;
			L$poptgepsqueezed145.a0=L$psroa$p09$p0$pcopyload;
			L$ppre$pi.a0=L$psroa$p06$p0$pcopyload;
			__ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE3getES3_S3_RSt8ios_baseRjP2tmPKcSB_(L$psroa$p0$p0,Larg1,L$poptgepsqueezed145,L$ppre$pi,Larg4,Larg5,Marg5,Larg6,tmp9,tmp9,0+tmp1|0);
			Larg2.a0=L$psroa$p0$p0.a0;
			break;
			case 100:
			case 101:
			L$poptgepsqueezed145=Larg3.a0;
			L$psroa$p0$p0.a0=L$poptgepsqueezed145;
			tmp1=__ZSt20__get_up_to_n_digitsIcSt19istreambuf_iteratorIcSt11char_traitsIcEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,L$psroa$p0$p0,Larg5,Marg5,L$poptgepsqueezed147,2)|0;
			tmp2=Larg5[Marg5]|0;
			if(tmp1-1>>>0<31)if((tmp2&4|0)===0){
				Larg6.i3=tmp1;
				break;
			}
			Larg5[Marg5]=tmp2|4;
			break;
			case 68:
			L$poptgepsqueezed145.a0=Larg2.a0;
			L$ppre$pi.a0=Larg3.a0;
			__ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE3getES3_S3_RSt8ios_baseRjP2tmPKcSB_(L$psroa$p0$p0,Larg1,L$poptgepsqueezed145,L$ppre$pi,Larg4,Larg5,Marg5,Larg6,__ZZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm,__ZZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm,0+8|0);
			Larg2.a0=L$psroa$p0$p0.a0;
			break;
			case 70:
			L$poptgepsqueezed145.a0=Larg2.a0;
			L$ppre$pi.a0=Larg3.a0;
			__ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE3getES3_S3_RSt8ios_baseRjP2tmPKcSB_(L$psroa$p0$p0,Larg1,L$poptgepsqueezed145,L$ppre$pi,Larg4,Larg5,Marg5,Larg6,__ZZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_0,__ZZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_0,0+8|0);
			Larg2.a0=L$psroa$p0$p0.a0;
			break;
			case 72:
			L$poptgepsqueezed145=Larg3.a0;
			L$psroa$p0$p0.a0=L$poptgepsqueezed145;
			tmp1=__ZSt20__get_up_to_n_digitsIcSt19istreambuf_iteratorIcSt11char_traitsIcEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,L$psroa$p0$p0,Larg5,Marg5,L$poptgepsqueezed147,2)|0;
			tmp2=Larg5[Marg5]|0;
			if((tmp1|0)<24)if((tmp2&4|0)===0){
				Larg6.i2=tmp1;
				break;
			}
			Larg5[Marg5]=tmp2|4;
			break;
			case 73:
			L$poptgepsqueezed145=Larg3.a0;
			L$psroa$p0$p0.a0=L$poptgepsqueezed145;
			tmp1=__ZSt20__get_up_to_n_digitsIcSt19istreambuf_iteratorIcSt11char_traitsIcEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,L$psroa$p0$p0,Larg5,Marg5,L$poptgepsqueezed147,2)|0;
			tmp2=Larg5[Marg5]|0;
			if(tmp1-1>>>0<12)if((tmp2&4|0)===0){
				Larg6.i2=tmp1;
				break;
			}
			Larg5[Marg5]=tmp2|4;
			break;
			case 106:
			L$poptgepsqueezed145=Larg3.a0;
			L$psroa$p0$p0.a0=L$poptgepsqueezed145;
			tmp1=__ZSt20__get_up_to_n_digitsIcSt19istreambuf_iteratorIcSt11char_traitsIcEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,L$psroa$p0$p0,Larg5,Marg5,L$poptgepsqueezed147,3)|0;
			tmp2=Larg5[Marg5]|0;
			if((tmp1|0)<366)if((tmp2&4|0)===0){
				Larg6.i7=tmp1;
				break;
			}
			Larg5[Marg5]=tmp2|4;
			break;
			case 109:
			L$poptgepsqueezed145=Larg3.a0;
			L$psroa$p0$p0.a0=L$poptgepsqueezed145;
			tmp1=__ZSt20__get_up_to_n_digitsIcSt19istreambuf_iteratorIcSt11char_traitsIcEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,L$psroa$p0$p0,Larg5,Marg5,L$poptgepsqueezed147,2)|0;
			tmp2=Larg5[Marg5]|0;
			if((tmp1|0)<13)if((tmp2&4|0)===0){
				Larg6.i4=tmp1-1|0;
				break;
			}
			Larg5[Marg5]=tmp2|4;
			break;
			case 77:
			L$poptgepsqueezed145=Larg3.a0;
			L$psroa$p0$p0.a0=L$poptgepsqueezed145;
			tmp1=__ZSt20__get_up_to_n_digitsIcSt19istreambuf_iteratorIcSt11char_traitsIcEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,L$psroa$p0$p0,Larg5,Marg5,L$poptgepsqueezed147,2)|0;
			tmp2=Larg5[Marg5]|0;
			if((tmp1|0)<60)if((tmp2&4|0)===0){
				Larg6.i1=tmp1;
				break;
			}
			Larg5[Marg5]=tmp2|4;
			break;
			case 110:
			case 116:
			L$psroa$p0$p0=Larg3.a0;
			while(1){
				L$poptgepsqueezed145=Larg2.a0;
				if(L$poptgepsqueezed145!==null){
					L$ppre$pio=L$poptgepsqueezed145.a3o;
					L$ppre$pi=L$poptgepsqueezed145.a3;
					L$psroa$p09$p0$pcopyload=L$poptgepsqueezed145.a4;
					if(L$ppre$pi===L$psroa$p09$p0$pcopyload&&L$ppre$pio===0)if((L$poptgepsqueezed145.a0.a10(L$poptgepsqueezed145)|0|0)===-1){
						Larg2.a0=null;
						L$poptgepsqueezed145=null;
					}else{
						L$poptgepsqueezed145=Larg2.a0;
					}
				}else{
					L$poptgepsqueezed145=null;
				}
				tmp1=L$poptgepsqueezed145===null?1:0;
				b:{
					c:if(L$psroa$p0$p0!==null){
						L$poptgepsqueezed145o=L$psroa$p0$p0.a3o;
						L$poptgepsqueezed145=L$psroa$p0$p0.a3;
						L$ppre$pi=L$psroa$p0$p0.a4;
						if(L$poptgepsqueezed145===L$ppre$pi&&L$poptgepsqueezed145o===0)if((L$psroa$p0$p0.a0.a10(L$psroa$p0$p0)|0|0)===-1)break c;
						if(tmp1)break b;
						break;
					}
					if(tmp1){
						L$psroa$p0$p0=null;
						break;
					}
					L$psroa$p0$p0=null;
				}
				L$poptgepsqueezed145=Larg2.a0;
				L$ppre$pio=L$poptgepsqueezed145.a3o;
				L$ppre$pi=L$poptgepsqueezed145.a3;
				L$psroa$p09$p0$pcopyload=L$poptgepsqueezed145.a4;
				if(L$ppre$pi===L$psroa$p09$p0$pcopyload&&L$ppre$pio===0){
					tmp1=L$poptgepsqueezed145.a0.a10(L$poptgepsqueezed145)|0;
				}else{
					tmp1=L$ppre$pi[L$ppre$pio]|0;
					tmp1=tmp1&255;
				}
				if(tmp1<<24>-16777216){
					L$poptgepsqueezed145=L$poptgepsqueezed147.a2;
					if((L$poptgepsqueezed145[1+(tmp1<<24>>24)|0]&8)!==0){
						L$poptgepsqueezed145=Larg2.a0;
						L$ppre$pio=L$poptgepsqueezed145.a3o;
						L$ppre$pi=L$poptgepsqueezed145.a3;
						L$psroa$p09$p0$pcopyload=L$poptgepsqueezed145.a4;
						if(L$ppre$pi===L$psroa$p09$p0$pcopyload&&L$ppre$pio===0)L$poptgepsqueezed145.a0.a11(L$poptgepsqueezed145)|0;
						else{
							L$poptgepsqueezed145.a3=L$ppre$pi;
							L$poptgepsqueezed145.a3o=L$ppre$pio+1|0;
						}
						continue;
					}
				}
				break;
			}
			L$poptgepsqueezed147=Larg2.a0;
			if(L$poptgepsqueezed147!==null){
				L$poptgepsqueezed145o=L$poptgepsqueezed147.a3o;
				L$poptgepsqueezed145=L$poptgepsqueezed147.a3;
				L$ppre$pi=L$poptgepsqueezed147.a4;
				if(L$poptgepsqueezed145===L$ppre$pi&&L$poptgepsqueezed145o===0)if((L$poptgepsqueezed147.a0.a10(L$poptgepsqueezed147)|0|0)===-1){
					Larg2.a0=null;
					L$poptgepsqueezed147=null;
				}else{
					L$poptgepsqueezed147=Larg2.a0;
				}
			}else{
				L$poptgepsqueezed147=null;
			}
			tmp1=L$poptgepsqueezed147===null?1:0;
			b:{
				c:if(L$psroa$p0$p0!==null){
					L$poptgepsqueezed147o=L$psroa$p0$p0.a3o;
					L$poptgepsqueezed147=L$psroa$p0$p0.a3;
					L$poptgepsqueezed145=L$psroa$p0$p0.a4;
					if(L$poptgepsqueezed147===L$poptgepsqueezed145&&L$poptgepsqueezed147o===0)if((L$psroa$p0$p0.a0.a10(L$psroa$p0$p0)|0|0)===-1)break c;
					if(tmp1)break;
					break b;
				}
				if(!(tmp1))break;
			}
			Larg5[Marg5]=Larg5[Marg5]|2;
			break;
			case 112:
			L$ppre$pi=Larg3.a0;
			L$poptgepsqueezed145=Larg1.a2;
			L$poptgepsqueezed145=L$poptgepsqueezed145.a0.a3(L$poptgepsqueezed145);
			L$poptgepsqueezed145o=oSlot;
			if((L$poptgepsqueezed145[L$poptgepsqueezed145o].i1|0)===(-(L$poptgepsqueezed145[L$poptgepsqueezed145o+1|0].i1|0)|0)){
				Larg5[Marg5]=Larg5[Marg5]|4;
				break;
			}
			L$psroa$p0$p0.a0=L$ppre$pi;
			L$poptgepsqueezed147=__ZSt14__scan_keywordISt19istreambuf_iteratorIcSt11char_traitsIcEEPKSsSt5ctypeIcEET0_RT_S9_S8_S8_RKT1_Rjb(Larg2,L$psroa$p0$p0,L$poptgepsqueezed145,L$poptgepsqueezed145o,L$poptgepsqueezed145,L$poptgepsqueezed145o+2|0,L$poptgepsqueezed147,Larg5,Marg5,0);
			L$poptgepsqueezed147o=oSlot;
			tmp1=((L$poptgepsqueezed147o)*12)-((L$poptgepsqueezed145o)*12)|0;
			tmp2=Larg6.i2|0;
			b:{
				if((tmp2|0)===12)if((tmp1|0)===0){
					tmp1=0;
					break b;
				}
				if((tmp2|0)>=12)break;
				if((tmp1|0)!==12)break;
				tmp1=tmp2+12|0;
			}
			Larg6.i2=tmp1;
			break;
			case 114:
			L$poptgepsqueezed145.a0=Larg2.a0;
			L$ppre$pi.a0=Larg3.a0;
			__ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE3getES3_S3_RSt8ios_baseRjP2tmPKcSB_(L$psroa$p0$p0,Larg1,L$poptgepsqueezed145,L$ppre$pi,Larg4,Larg5,Marg5,Larg6,__ZZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_1,__ZZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_1,0+11|0);
			Larg2.a0=L$psroa$p0$p0.a0;
			break;
			case 82:
			L$poptgepsqueezed145.a0=Larg2.a0;
			L$ppre$pi.a0=Larg3.a0;
			__ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE3getES3_S3_RSt8ios_baseRjP2tmPKcSB_(L$psroa$p0$p0,Larg1,L$poptgepsqueezed145,L$ppre$pi,Larg4,Larg5,Marg5,Larg6,__ZZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_2,__ZZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_2,0+5|0);
			Larg2.a0=L$psroa$p0$p0.a0;
			break;
			case 83:
			L$poptgepsqueezed145=Larg3.a0;
			L$psroa$p0$p0.a0=L$poptgepsqueezed145;
			tmp1=__ZSt20__get_up_to_n_digitsIcSt19istreambuf_iteratorIcSt11char_traitsIcEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,L$psroa$p0$p0,Larg5,Marg5,L$poptgepsqueezed147,2)|0;
			tmp2=Larg5[Marg5]|0;
			if((tmp1|0)<61)if((tmp2&4|0)===0){
				Larg6.i0=tmp1;
				break;
			}
			Larg5[Marg5]=tmp2|4;
			break;
			case 84:
			L$poptgepsqueezed145.a0=Larg2.a0;
			L$ppre$pi.a0=Larg3.a0;
			__ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE3getES3_S3_RSt8ios_baseRjP2tmPKcSB_(L$psroa$p0$p0,Larg1,L$poptgepsqueezed145,L$ppre$pi,Larg4,Larg5,Marg5,Larg6,__ZZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_3,__ZZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_3,0+8|0);
			Larg2.a0=L$psroa$p0$p0.a0;
			break;
			case 119:
			L$poptgepsqueezed145=Larg3.a0;
			L$psroa$p0$p0.a0=L$poptgepsqueezed145;
			tmp1=__ZSt20__get_up_to_n_digitsIcSt19istreambuf_iteratorIcSt11char_traitsIcEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,L$psroa$p0$p0,Larg5,Marg5,L$poptgepsqueezed147,1)|0;
			tmp2=Larg5[Marg5]|0;
			if((tmp1|0)<7)if((tmp2&4|0)===0){
				Larg6.i6=tmp1;
				break;
			}
			Larg5[Marg5]=tmp2|4;
			break;
			case 120:
			L$poptgepsqueezed147=Larg1.a0.a6;
			L$psroa$p0$p0.a0=Larg2.a0;
			L$poptgepsqueezed145.a0=Larg3.a0;
			L$poptgepsqueezed147(Larg0,Larg1,L$psroa$p0$p0,L$poptgepsqueezed145,Larg4,Larg5,Marg5,Larg6);
			break a;
			case 88:
			L$poptgepsqueezed147=Larg1.a2;
			L$poptgepsqueezed147=L$poptgepsqueezed147.a0.a7(L$poptgepsqueezed147);
			L$poptgepsqueezed147o=oSlot;
			L$psroa$p09$p0$pcopyload=Larg2.a0;
			L$psroa$p06$p0$pcopyload=Larg3.a0;
			tmp9=L$poptgepsqueezed147[L$poptgepsqueezed147o].a2;
			tmp1=L$poptgepsqueezed147[L$poptgepsqueezed147o].i1|0;
			L$poptgepsqueezed145.a0=L$psroa$p09$p0$pcopyload;
			L$ppre$pi.a0=L$psroa$p06$p0$pcopyload;
			__ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE3getES3_S3_RSt8ios_baseRjP2tmPKcSB_(L$psroa$p0$p0,Larg1,L$poptgepsqueezed145,L$ppre$pi,Larg4,Larg5,Marg5,Larg6,tmp9,tmp9,0+tmp1|0);
			Larg2.a0=L$psroa$p0$p0.a0;
			break;
			case 121:
			L$poptgepsqueezed145=Larg3.a0;
			L$psroa$p0$p0.a0=L$poptgepsqueezed145;
			tmp1=__ZSt20__get_up_to_n_digitsIcSt19istreambuf_iteratorIcSt11char_traitsIcEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,L$psroa$p0$p0,Larg5,Marg5,L$poptgepsqueezed147,4)|0;
			if((Larg5[Marg5]&4|0)!==0)break;
			if((tmp1|0)<69){
				tmp1=tmp1+2000|0;
			}else{
				tmp1=(tmp1|0)<100?tmp1+1900|0:tmp1|0;
			}
			Larg6.i5=tmp1-1900|0;
			break;
			case 89:
			L$poptgepsqueezed145=Larg3.a0;
			L$psroa$p0$p0.a0=L$poptgepsqueezed145;
			tmp1=__ZSt20__get_up_to_n_digitsIcSt19istreambuf_iteratorIcSt11char_traitsIcEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,L$psroa$p0$p0,Larg5,Marg5,L$poptgepsqueezed147,4)|0;
			if((Larg5[Marg5]&4|0)!==0)break;
			Larg6.i5=tmp1-1900|0;
			break;
			case 37:
			L$psroa$p0$p0=Larg3.a0;
			L$poptgepsqueezed145=Larg2.a0;
			if(L$poptgepsqueezed145!==null){
				L$ppre$pio=L$poptgepsqueezed145.a3o;
				L$ppre$pi=L$poptgepsqueezed145.a3;
				L$psroa$p09$p0$pcopyload=L$poptgepsqueezed145.a4;
				if(L$ppre$pi===L$psroa$p09$p0$pcopyload&&L$ppre$pio===0)if((L$poptgepsqueezed145.a0.a10(L$poptgepsqueezed145)|0|0)===-1){
					Larg2.a0=null;
					L$poptgepsqueezed145=null;
				}else{
					L$poptgepsqueezed145=Larg2.a0;
				}
			}else{
				L$poptgepsqueezed145=null;
			}
			tmp1=L$poptgepsqueezed145===null?1:0;
			b:{
				c:{
					d:if(L$psroa$p0$p0!==null){
						L$poptgepsqueezed145o=L$psroa$p0$p0.a3o;
						L$poptgepsqueezed145=L$psroa$p0$p0.a3;
						L$ppre$pi=L$psroa$p0$p0.a4;
						if(L$poptgepsqueezed145===L$ppre$pi&&L$poptgepsqueezed145o===0)if((L$psroa$p0$p0.a0.a10(L$psroa$p0$p0)|0|0)===-1)break d;
						if(tmp1)break c;
						tmp1=6;
						break b;
					}
					if(tmp1){
						tmp1=6;
						break b;
					}
					L$psroa$p0$p0=null;
				}
				L$poptgepsqueezed145=Larg2.a0;
				L$ppre$pio=L$poptgepsqueezed145.a3o;
				L$ppre$pi=L$poptgepsqueezed145.a3;
				L$psroa$p09$p0$pcopyload=L$poptgepsqueezed145.a4;
				if(L$ppre$pi===L$psroa$p09$p0$pcopyload&&L$ppre$pio===0){
					tmp1=L$poptgepsqueezed145.a0.a10(L$poptgepsqueezed145)|0;
				}else{
					tmp1=L$ppre$pi[L$ppre$pio]|0;
					tmp1=tmp1&255;
				}
				if(((L$poptgepsqueezed147.a0.a10(L$poptgepsqueezed147,tmp1,0)|0)&255)===37){
					L$psroa$p09$p0$pcopyload=Larg2.a0;
					L$ppre$pio=L$psroa$p09$p0$pcopyload.a3o;
					L$ppre$pi=L$psroa$p09$p0$pcopyload.a3;
					L$poptgepsqueezed145=L$psroa$p09$p0$pcopyload.a4;
					c:{
						if(L$ppre$pi===L$poptgepsqueezed145&&L$ppre$pio===0){
							L$psroa$p09$p0$pcopyload.a0.a11(L$psroa$p09$p0$pcopyload)|0;
							L$psroa$p09$p0$pcopyload=Larg2.a0;
							if(L$psroa$p09$p0$pcopyload===null){
								L$psroa$p09$p0$pcopyload=null;
								break c;
							}
							L$ppre$pio=L$psroa$p09$p0$pcopyload.a3o;
							L$ppre$pi=L$psroa$p09$p0$pcopyload.a3;
							L$poptgepsqueezed145=L$psroa$p09$p0$pcopyload.a4;
						}else{
							L$psroa$p09$p0$pcopyload.a3=L$ppre$pi;
							L$psroa$p09$p0$pcopyload.a3o=L$ppre$pio+1|0;
							L$ppre$pio=L$ppre$pio+1|0;
							L$ppre$pi=L$ppre$pi;
						}
						if(L$ppre$pi===L$poptgepsqueezed145&&L$ppre$pio===0)if((L$psroa$p09$p0$pcopyload.a0.a10(L$psroa$p09$p0$pcopyload)|0|0)===-1){
							Larg2.a0=null;
							L$psroa$p09$p0$pcopyload=null;
						}else{
							L$psroa$p09$p0$pcopyload=Larg2.a0;
						}
					}
					tmp1=L$psroa$p09$p0$pcopyload===null?1:0;
					c:if(L$psroa$p0$p0!==null){
						L$poptgepsqueezed145o=L$psroa$p0$p0.a3o;
						L$poptgepsqueezed145=L$psroa$p0$p0.a3;
						L$ppre$pi=L$psroa$p0$p0.a4;
						if(L$poptgepsqueezed145===L$ppre$pi&&L$poptgepsqueezed145o===0)if((L$psroa$p0$p0.a0.a10(L$psroa$p0$p0)|0|0)===-1)break c;
						if(tmp1)break;
						tmp1=2;
						break b;
					}
					if(!(tmp1))break;
					tmp1=2;
				}else{
					tmp1=4;
				}
			}
			Larg5[Marg5]=Larg5[Marg5]|tmp1;
			break;
			default:
			Larg5[Marg5]=Larg5[Marg5]|4;
		}
		Larg0.a0=Larg2.a0;
	}
}
function __ZSt20__get_up_to_n_digitsIcSt19istreambuf_iteratorIcSt11char_traitsIcEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg0,Larg1,Larg2,Marg2,Larg3,Larg4){
	var tmp0=null,tmp0o=0,tmp1=null,tmp1o=0,tmp2=null,tmp2o=0,tmp3=0,tmp4=null,tmp4o=0,tmp5=0,tmp6=null,tmp7=0;
	tmp0=Larg0.a0;
	if(tmp0!==null){
		tmp1o=tmp0.a3o;
		tmp1=tmp0.a3;
		tmp2=tmp0.a4;
		if(tmp1===tmp2&&tmp1o===0)if((tmp0.a0.a10(tmp0)|0|0)===-1){
			Larg0.a0=null;
			tmp0=null;
		}else{
			tmp0=Larg0.a0;
		}
	}else{
		tmp0=null;
	}
	tmp1=Larg1.a0;
	tmp3=tmp0===null?1:0;
	a:{
		b:{
			c:if(tmp1!==null){
				tmp0o=tmp1.a3o;
				tmp0=tmp1.a3;
				tmp2=tmp1.a4;
				if(tmp0===tmp2&&tmp0o===0)if((tmp1.a0.a10(tmp1)|0|0)===-1){
					Larg1.a0=null;
					break c;
				}
				if(tmp3)break a;
				break b;
			}
			if(!(tmp3)){
				tmp1=null;
				break a;
			}
		}
		Larg2[Marg2]=Larg2[Marg2]|6;
		return 0|0;
	}
	tmp0=Larg0.a0;
	tmp2o=tmp0.a3o;
	tmp2=tmp0.a3;
	tmp4=tmp0.a4;
	if(tmp2===tmp4&&tmp2o===0){
		tmp3=tmp0.a0.a10(tmp0)|0;
	}else{
		tmp3=tmp2[tmp2o]|0;
		tmp3=tmp3&255;
	}
	if(tmp3<<24>-16777216){
		tmp0=Larg3.a2;
		if((tmp0[1+(tmp3<<24>>24)|0]&4)!==0){
			tmp3=Larg3.a0.a10(Larg3,tmp3,0)|0;
			tmp0=Larg0.a0;
			tmp2o=tmp0.a3o;
			tmp2=tmp0.a3;
			tmp4=tmp0.a4;
			if(tmp2===tmp4&&tmp2o===0)tmp0.a0.a11(tmp0)|0;
			else{
				tmp0.a3=tmp2;
				tmp0.a3o=tmp2o+1|0;
			}
			tmp0=tmp1;
			tmp5=tmp3<<24>>24;
			tmp3=Larg4;
			while(1){
				tmp2=Larg0.a0;
				if(tmp2!==null){
					tmp4o=tmp2.a3o;
					tmp4=tmp2.a3;
					tmp6=tmp2.a4;
					if(tmp4===tmp6&&tmp4o===0)if((tmp2.a0.a10(tmp2)|0|0)===-1){
						Larg0.a0=null;
						tmp2=null;
					}else{
						tmp2=Larg0.a0;
					}
				}else{
					tmp2=null;
				}
				if(tmp0!==null){
					tmp4o=tmp0.a3o;
					tmp4=tmp0.a3;
					tmp6=tmp0.a4;
					if(tmp4===tmp6&&tmp4o===0)if((tmp0.a0.a10(tmp0)|0|0)===-1){
						Larg1.a0=null;
						tmp0=null;
						tmp1=null;
					}
				}else{
					tmp0=null;
				}
				tmp7=(tmp2===null?1:0)^(tmp0===null?1:0)?1:0;
				tmp2=Larg0.a0;
				tmp5=tmp5-48|0;
				if((tmp3|0)>1)if(tmp7){
					tmp4o=tmp2.a3o;
					tmp4=tmp2.a3;
					tmp6=tmp2.a4;
					if(tmp4===tmp6&&tmp4o===0){
						tmp7=tmp2.a0.a10(tmp2)|0;
					}else{
						tmp7=tmp4[tmp4o]|0;
						tmp7=tmp7&255;
					}
					if(tmp7<<24>-16777216){
						tmp2=Larg3.a2;
						if((tmp2[1+(tmp7<<24>>24)|0]&4)!==0){
							tmp5=(tmp5*10|0)+((Larg3.a0.a10(Larg3,tmp7,0)|0)<<24>>24)|0;
							tmp2=Larg0.a0;
							tmp4o=tmp2.a3o;
							tmp4=tmp2.a3;
							tmp6=tmp2.a4;
							if(tmp4===tmp6&&tmp4o===0)tmp2.a0.a11(tmp2)|0;
							else{
								tmp2.a3=tmp4;
								tmp2.a3o=tmp4o+1|0;
							}
							tmp3=tmp3-1|0;
							continue;
						}
						return tmp5|0;
					}
					return tmp5|0;
				}
				break;
			}
			if(tmp2!==null){
				tmp0o=tmp2.a3o;
				tmp0=tmp2.a3;
				tmp4=tmp2.a4;
				if(tmp0===tmp4&&tmp0o===0)if((tmp2.a0.a10(tmp2)|0|0)===-1){
					Larg0.a0=null;
					tmp2=null;
				}else{
					tmp2=Larg0.a0;
				}
			}else{
				tmp2=null;
			}
			tmp3=tmp2===null?1:0;
			a:{
				b:if(tmp1!==null){
					tmp0o=tmp1.a3o;
					tmp0=tmp1.a3;
					tmp2=tmp1.a4;
					if(tmp0===tmp2&&tmp0o===0)if((tmp1.a0.a10(tmp1)|0|0)===-1){
						Larg1.a0=null;
						break b;
					}
					if(!(tmp3))break a;
					return tmp5|0;
				}
				if(!(tmp3))return tmp5|0;
			}
			Larg2[Marg2]=Larg2[Marg2]|2;
			return tmp5|0;
		}
	}
	Larg2[Marg2]=Larg2[Marg2]|4;
	return 0|0;
}
function __ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE3getES3_S3_RSt8ios_baseRjP2tmPKcSB_(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Larg7,Larg8,Marg8){
	var tmp0=null,tmp1=null,tmp2=null,L$ppre4=null,L$ppre4o=0,Lgeptoindex=0,tmp5=0,tmp6=0,tmp7=null,tmp8=null,tmp8o=0,tmp9=null,tmp9o=0,tmp10=null,tmp10o=0,tmp11=null,tmp11o=0,tmp12=null,tmp12o=0,tmp13=null;
	L$ppre4=Larg4.a7.a0;
	Lgeptoindex=L$ppre4.i1|0;
	tmp5=Lgeptoindex+1|0;
	L$ppre4.i1=tmp5;
	if((__ZNSt5ctypeIcE2idE.i0&255)!==0){
		tmp6=__ZNSt5ctypeIcE2idE.i1|0;
	}else{
		tmp6=(__ZNSt6locale2id9__next_idE|0)+1|0;
		__ZNSt6locale2id9__next_idE=tmp6;
		__ZNSt5ctypeIcE2idE.i1=tmp6;
		__ZNSt5ctypeIcE2idE.i0=1;
	}
	tmp7=L$ppre4.a2.a0;
	tmp7=tmp7[tmp6-1|0];
	L$ppre4.i1=Lgeptoindex;
	if((tmp5|0)===0)L$ppre4.a0.a3(L$ppre4);
	Larg5[Marg5]=0;
	L$ppre4=Larg2.a0;
	a:if(Larg7!==Larg8||0!==Marg8){
		tmp0={a0:null};
		tmp1={a0:null};
		tmp2={a0:null};
		tmp8=L$ppre4;
		tmp9o=0;
		tmp9=Larg7;
		b:while(1){
			if(tmp8!==null){
				tmp10o=tmp8.a3o;
				tmp10=tmp8.a3;
				tmp11=tmp8.a4;
				if(tmp10===tmp11&&tmp10o===0)if((tmp8.a0.a10(tmp8)|0|0)===-1){
					Larg2.a0=null;
					tmp8=null;
					L$ppre4=null;
				}
			}else{
				tmp8=null;
			}
			tmp10=Larg3.a0;
			Lgeptoindex=tmp8===null?1:0;
			c:{
				d:if(tmp10!==null){
					tmp11o=tmp10.a3o;
					tmp11=tmp10.a3;
					tmp12=tmp10.a4;
					if(tmp11===tmp12&&tmp11o===0)if((tmp10.a0.a10(tmp10)|0|0)===-1){
						Larg3.a0=null;
						break d;
					}
					if(Lgeptoindex)break c;
					break b;
				}
				if(Lgeptoindex)break b;
				tmp10=null;
			}
			c:if(((tmp7.a0.a10(tmp7,tmp9[tmp9o]|0,0)|0)&255)===37){
				if(tmp9===Larg8&&(tmp9o+1|0)===Marg8)break b;
				Lgeptoindex=tmp7.a0.a10(tmp7,tmp9[tmp9o+1|0]|0,0)|0;
				switch(Lgeptoindex&255){
					case 69:
					case 48:
					if(tmp9===Larg8&&(tmp9o+2|0)===Marg8)break b;
					tmp5=tmp7.a0.a10(tmp7,tmp9[tmp9o+2|0]|0,0)|0;
					tmp9o=tmp9o+1|0;
					tmp9=tmp9;
					break;
					default:
					tmp5=Lgeptoindex;
					Lgeptoindex=0;
				}
				L$ppre4=Larg1.a0.a10;
				tmp1.a0=Larg2.a0;
				tmp2.a0=tmp10;
				L$ppre4(tmp0,Larg1,tmp1,tmp2,Larg4,Larg5,Marg5,Larg6,tmp5,Lgeptoindex);
				L$ppre4=tmp0.a0;
				Larg2.a0=L$ppre4;
				tmp8=L$ppre4;
				tmp9o=tmp9o+2|0;
				tmp9=tmp9;
			}else{
				Lgeptoindex=tmp9[tmp9o]|0;
				if(Lgeptoindex<<24>-16777216){
					tmp11=tmp7.a2;
					if((tmp11[1+(Lgeptoindex<<24>>24)|0]&8)!==0){
						if(tmp9===Larg8&&(tmp9o+1|0)===Marg8){
							tmp9o=Marg8;
							tmp9=Larg8;
						}else{
							Lgeptoindex=0;
							while(1){
								tmp5=tmp9[(tmp9o+1|0)+Lgeptoindex|0]|0;
								if(tmp5<<24>-16777216){
									if((tmp11[1+(tmp5<<24>>24)|0]&8)!==0){
										Lgeptoindex=Lgeptoindex+1|0;
										if(tmp9!==Larg8||((tmp9o+1|0)+Lgeptoindex|0)!==Marg8)continue;
										tmp9o=Marg8;
										tmp9=Larg8;
									}else{
										tmp9o=(tmp9o+1|0)+Lgeptoindex|0;
										tmp9=tmp9;
									}
								}else{
									tmp9o=(tmp9o+1|0)+Lgeptoindex|0;
									tmp9=tmp9;
								}
								break;
							}
						}
						tmp11=tmp8;
						while(1){
							if(tmp11!==null){
								tmp12o=tmp11.a3o;
								tmp12=tmp11.a3;
								tmp13=tmp11.a4;
								if(tmp12===tmp13&&tmp12o===0)if((tmp11.a0.a10(tmp11)|0|0)===-1){
									Larg2.a0=null;
									tmp11=null;
									tmp8=null;
									L$ppre4=null;
								}
							}else{
								tmp11=null;
							}
							Lgeptoindex=tmp11===null?1:0;
							d:{
								e:if(tmp10!==null){
									tmp12o=tmp10.a3o;
									tmp12=tmp10.a3;
									tmp13=tmp10.a4;
									if(tmp12===tmp13&&tmp12o===0)if((tmp10.a0.a10(tmp10)|0|0)===-1){
										Larg3.a0=null;
										break e;
									}
									if(Lgeptoindex)break d;
									break c;
								}
								if(Lgeptoindex)break c;
								tmp10=null;
							}
							tmp12o=tmp11.a3o;
							tmp12=tmp11.a3;
							tmp13=tmp11.a4;
							if(tmp12===tmp13&&tmp12o===0){
								Lgeptoindex=tmp11.a0.a10(tmp11)|0;
							}else{
								Lgeptoindex=tmp12[tmp12o]|0;
								Lgeptoindex=Lgeptoindex&255;
							}
							if(Lgeptoindex<<24<=-16777216)break c;
							tmp12=tmp7.a2;
							if((tmp12[1+(Lgeptoindex<<24>>24)|0]&8)===0)break c;
							tmp12o=tmp11.a3o;
							tmp12=tmp11.a3;
							tmp13=tmp11.a4;
							if(tmp12===tmp13&&tmp12o===0)tmp11.a0.a11(tmp11)|0;
							else{
								tmp11.a3=tmp12;
								tmp11.a3o=tmp12o+1|0;
							}
							continue;
						}
					}
				}
				tmp10o=tmp8.a3o;
				tmp10=tmp8.a3;
				tmp11=tmp8.a4;
				if(tmp10===tmp11&&tmp10o===0){
					Lgeptoindex=tmp8.a0.a10(tmp8)|0;
				}else{
					Lgeptoindex=tmp10[tmp10o]|0;
					Lgeptoindex=Lgeptoindex&255;
				}
				Lgeptoindex=tmp7.a0.a4(tmp7,Lgeptoindex)|0;
				if((Lgeptoindex&255)===((tmp7.a0.a4(tmp7,tmp9[tmp9o]|0)|0)&255)){
					tmp10o=tmp8.a3o;
					tmp10=tmp8.a3;
					tmp11=tmp8.a4;
					if(tmp10===tmp11&&tmp10o===0)tmp8.a0.a11(tmp8)|0;
					else{
						tmp8.a3=tmp10;
						tmp8.a3o=tmp10o+1|0;
					}
					tmp9o=tmp9o+1|0;
					tmp9=tmp9;
				}else Larg5[Marg5]=4;
			}
			Lgeptoindex=Larg5[Marg5]|0;
			if(tmp9===Larg8&&tmp9o===Marg8)break a;
			if((Lgeptoindex|0)!==0)break a;
			continue b;
		}
		Larg5[Marg5]=4;
	}
	if(L$ppre4!==null){
		tmp8o=L$ppre4.a3o;
		tmp8=L$ppre4.a3;
		tmp9=L$ppre4.a4;
		if(tmp8===tmp9&&tmp8o===0)if((L$ppre4.a0.a10(L$ppre4)|0|0)===-1){
			Larg2.a0=null;
			L$ppre4=null;
		}
	}else{
		L$ppre4=null;
	}
	tmp8=Larg3.a0;
	Lgeptoindex=L$ppre4===null?1:0;
	a:{
		b:{
			c:if(tmp8!==null){
				L$ppre4o=tmp8.a3o;
				L$ppre4=tmp8.a3;
				tmp9=tmp8.a4;
				if(L$ppre4===tmp9&&L$ppre4o===0)if((tmp8.a0.a10(tmp8)|0|0)===-1){
					Larg3.a0=null;
					break c;
				}
				if(Lgeptoindex)break a;
				break b;
			}
			if(!(Lgeptoindex))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=Larg2.a0;
}
function __ZSt14__scan_keywordISt19istreambuf_iteratorIcSt11char_traitsIcEEPKSsSt5ctypeIcEET0_RT_S9_S8_S8_RKT1_Rjb(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4,Larg5,Marg5,Larg6){
	var tmp0=null,tmp1=0,L$pph69=0,tmp3=null,tmp3o=0,L$pph=0,Lgeptoindexphi=0,tmp6=0,Lgeptoindexphi11=0,tmp8=null,tmp8o=0,tmp9=null,tmp9o=0,tmp10=null,tmp10o=0,tmp11=null,tmp11o=0,tmp12=0,Lgeptoindexphi3=0;
	tmp0=new Uint8Array(100);
	L$pph69=(((Marg3)*12)-((Marg2)*12)|0)/12|0;
	if(L$pph69>>>0>100){
		tmp3=new Uint8Array(L$pph69/1|0);
	}else{
		tmp3=tmp0;
	}
	tmp1=Larg2===Larg3&&Marg2===Marg3?1:0;
	if(tmp1){
		L$pph=0;
	}else{
		tmp8o=0;
		tmp8=tmp3;
		L$pph=0;
		Lgeptoindexphi=0;
		while(1){
			if((Larg2[Marg2+Lgeptoindexphi|0].i1|0)!==0)tmp8[tmp8o]=1;
			else{
				tmp8[tmp8o]=2;
				L$pph69=L$pph69-1|0;
				L$pph=L$pph+1|0;
			}
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			if(Larg2!==Larg3||(Marg2+Lgeptoindexphi|0)!==Marg3){
				tmp8o=tmp8o+1|0;
				tmp8=tmp8;
				continue;
			}
			break;
		}
	}
	Lgeptoindexphi=0;
	a:while(1){
		tmp6=(L$pph69|0)!==0?1:0;
		Lgeptoindexphi11=Lgeptoindexphi;
		while(1){
			tmp8=Larg0.a0;
			if(tmp8!==null){
				tmp9o=tmp8.a3o;
				tmp9=tmp8.a3;
				tmp10=tmp8.a4;
				if(tmp9===tmp10&&tmp9o===0)if((tmp8.a0.a10(tmp8)|0|0)===-1){
					Larg0.a0=null;
					tmp8=null;
				}else{
					tmp8=Larg0.a0;
				}
			}else{
				tmp8=null;
			}
			tmp9=Larg1.a0;
			if(tmp9!==null){
				tmp10o=tmp9.a3o;
				tmp10=tmp9.a3;
				tmp11=tmp9.a4;
				if(tmp10===tmp11&&tmp10o===0)if((tmp9.a0.a10(tmp9)|0|0)===-1){
					Larg1.a0=null;
					tmp9=null;
				}
			}else{
				tmp9=null;
			}
			tmp12=tmp9===null?1:0;
			Lgeptoindexphi3=(tmp8===null?1:0)^tmp12?1:0;
			tmp10=Larg0.a0;
			if(tmp6)if(Lgeptoindexphi3){
				tmp9o=tmp10.a3o;
				tmp9=tmp10.a3;
				tmp11=tmp10.a4;
				if(tmp9===tmp11&&tmp9o===0){
					tmp12=tmp10.a0.a10(tmp10)|0;
				}else{
					tmp12=tmp9[tmp9o]|0;
					tmp12=tmp12&255;
				}
				if(!(Larg6)){
					tmp12=Larg4.a0.a4(Larg4,tmp12)|0;
				}
				Lgeptoindexphi=Lgeptoindexphi11+1|0;
				if(tmp1){
					Lgeptoindexphi11=Lgeptoindexphi;
					continue;
				}
				if(Larg6){
					tmp8o=0;
					tmp8=tmp3;
					tmp6=0;
					Lgeptoindexphi3=0;
					while(1){
						if((tmp8[tmp8o]&255)===1){
							tmp9=Larg2[Marg2+Lgeptoindexphi3|0];
							tmp10=tmp9.a2;
							if((tmp12&255)===(tmp10[Lgeptoindexphi11]&255)){
								if((tmp9.i1|0)===(Lgeptoindexphi|0)){
									tmp8[tmp8o]=2;
									L$pph69=L$pph69-1|0;
									L$pph=L$pph+1|0;
									tmp6=1;
								}else{
									tmp6=1;
								}
							}else{
								tmp8[tmp8o]=0;
								L$pph69=L$pph69-1|0;
							}
						}
						Lgeptoindexphi3=Lgeptoindexphi3+1|0;
						if(Larg2!==Larg3||(Marg2+Lgeptoindexphi3|0)!==Marg3){
							tmp8o=tmp8o+1|0;
							tmp8=tmp8;
							continue;
						}
						break;
					}
				}else{
					tmp8o=0;
					tmp8=tmp3;
					tmp6=0;
					Lgeptoindexphi3=0;
					while(1){
						if((tmp8[tmp8o]&255)===1){
							tmp9=Larg2[Marg2+Lgeptoindexphi3|0];
							tmp10=tmp9.a2;
							if((tmp12&255)===((Larg4.a0.a4(Larg4,tmp10[Lgeptoindexphi11]|0)|0)&255)){
								if((tmp9.i1|0)===(Lgeptoindexphi|0)){
									tmp8[tmp8o]=2;
									L$pph69=L$pph69-1|0;
									L$pph=L$pph+1|0;
									tmp6=1;
								}else{
									tmp6=1;
								}
							}else{
								tmp8[tmp8o]=0;
								L$pph69=L$pph69-1|0;
							}
						}
						Lgeptoindexphi3=Lgeptoindexphi3+1|0;
						if(Larg2!==Larg3||(Marg2+Lgeptoindexphi3|0)!==Marg3){
							tmp8o=tmp8o+1|0;
							tmp8=tmp8;
							continue;
						}
						break;
					}
				}
				if((tmp6&1)!==0){
					tmp8=Larg0.a0;
					tmp9o=tmp8.a3o;
					tmp9=tmp8.a3;
					tmp10=tmp8.a4;
					if(tmp9===tmp10&&tmp9o===0)tmp8.a0.a11(tmp8)|0;
					else{
						tmp8.a3=tmp9;
						tmp8.a3o=tmp9o+1|0;
					}
					if(L$pph69+L$pph>>>0>=2){
						tmp8o=0;
						tmp8=tmp3;
						Lgeptoindexphi11=0;
						while(1){
							if((tmp8[tmp8o]&255)===2)if((Larg2[Marg2+Lgeptoindexphi11|0].i1|0)!==(Lgeptoindexphi|0)){
								tmp8[tmp8o]=0;
								L$pph=L$pph-1|0;
							}
							Lgeptoindexphi11=Lgeptoindexphi11+1|0;
							if(Larg2!==Larg3||(Marg2+Lgeptoindexphi11|0)!==Marg3){
								tmp8o=tmp8o+1|0;
								tmp8=tmp8;
								continue;
							}
							break;
						}
					}
				}
				continue a;
			}
			break;
		}
		break;
	}
	if(tmp10!==null){
		tmp11o=tmp10.a3o;
		tmp11=tmp10.a3;
		tmp8=tmp10.a4;
		if(tmp11===tmp8&&tmp11o===0)if((tmp10.a0.a10(tmp10)|0|0)===-1){
			Larg0.a0=null;
			tmp10=null;
		}else{
			tmp10=Larg0.a0;
		}
	}else{
		tmp10=null;
	}
	Lgeptoindexphi11=tmp10===null?1:0;
	a:{
		b:{
			c:if(!(tmp12)){
				tmp10o=tmp9.a3o;
				tmp10=tmp9.a3;
				tmp11=tmp9.a4;
				if(tmp10===tmp11&&tmp10o===0)if((tmp9.a0.a10(tmp9)|0|0)===-1){
					Larg1.a0=null;
					break c;
				}
				if(Lgeptoindexphi11)break a;
				break b;
			}
			if(!(Lgeptoindexphi11))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	if(!(tmp1)){
		tmp3o=0;
		tmp3=tmp3;
		L$pph=0;
		while(1){
			if((tmp3[tmp3o]&255)===2){
				oSlot=Marg2+L$pph|0;
				return Larg2;
			}
			L$pph=L$pph+1|0;
			if(Larg2!==Larg3||(Marg2+L$pph|0)!==Marg3){
				tmp3o=tmp3o+1|0;
				tmp3=tmp3;
				continue;
			}
			break;
		}
	}
	Larg5[Marg5]=Larg5[Marg5]|4;
	oSlot=Marg3;
	return Larg3;
}
function __ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE11do_get_yearES3_S3_RSt8ios_baseRjP2tm(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6){
	var tmp0=0,tmp1=null,tmp2=null,tmp3=0,tmp4=0,tmp5=null;
	tmp2=Larg4.a7.a0;
	tmp3=tmp2.i1|0;
	tmp0=tmp3+1|0;
	tmp2.i1=tmp0;
	if((__ZNSt5ctypeIcE2idE.i0&255)!==0){
		tmp4=__ZNSt5ctypeIcE2idE.i1|0;
	}else{
		tmp4=(__ZNSt6locale2id9__next_idE|0)+1|0;
		__ZNSt6locale2id9__next_idE=tmp4;
		__ZNSt5ctypeIcE2idE.i1=tmp4;
		__ZNSt5ctypeIcE2idE.i0=1;
	}
	tmp5=tmp2.a2.a0;
	tmp1=tmp5[tmp4-1|0];
	tmp2.i1=tmp3;
	if((tmp0|0)===0)tmp2.a0.a3(tmp2);
	tmp2=Larg3.a0;
	tmp5={a0:null};
	tmp5.a0=tmp2;
	tmp3=__ZSt20__get_up_to_n_digitsIcSt19istreambuf_iteratorIcSt11char_traitsIcEEEiRT0_S4_RjRKSt5ctypeIT_Ei(Larg2,tmp5,Larg5,Marg5,tmp1,4)|0;
	if((Larg5[Marg5]&4|0)===0){
		if((tmp3|0)<69){
			tmp3=tmp3+2000|0;
		}else{
			tmp3=(tmp3|0)<100?tmp3+1900|0:tmp3|0;
		}
		Larg6.i5=tmp3-1900|0;
	}
	Larg0.a0=Larg2.a0;
}
function __ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE16do_get_monthnameES3_S3_RSt8ios_baseRjP2tm(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6){
	var tmp0=0,tmp1=null,tmp2=null,tmp3=0,tmp4=0,tmp5=null,tmp5o=0,tmp6=null,tmp6o=0;
	tmp2=Larg4.a7.a0;
	tmp3=tmp2.i1|0;
	tmp0=tmp3+1|0;
	tmp2.i1=tmp0;
	if((__ZNSt5ctypeIcE2idE.i0&255)!==0){
		tmp4=__ZNSt5ctypeIcE2idE.i1|0;
	}else{
		tmp4=(__ZNSt6locale2id9__next_idE|0)+1|0;
		__ZNSt6locale2id9__next_idE=tmp4;
		__ZNSt5ctypeIcE2idE.i1=tmp4;
		__ZNSt5ctypeIcE2idE.i0=1;
	}
	tmp5=tmp2.a2.a0;
	tmp5=tmp5[tmp4-1|0];
	tmp2.i1=tmp3;
	if((tmp0|0)===0)tmp2.a0.a3(tmp2);
	tmp2=Larg3.a0;
	tmp6=Larg1.a2;
	tmp6=tmp6.a0.a2(tmp6);
	tmp6o=oSlot;
	tmp1={a0:null};
	tmp1.a0=tmp2;
	tmp5=__ZSt14__scan_keywordISt19istreambuf_iteratorIcSt11char_traitsIcEEPKSsSt5ctypeIcEET0_RT_S9_S8_S8_RKT1_Rjb(Larg2,tmp1,tmp6,tmp6o,tmp6,tmp6o+24|0,tmp5,Larg5,Marg5,0);
	tmp5o=oSlot;
	tmp3=((tmp5o)*12)-((tmp6o)*12)|0;
	if((tmp3|0)<288)Larg6.i4=((tmp3|0)/12|0)%12|0;
	Larg0.a0=Larg2.a0;
}
function __ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE14do_get_weekdayES3_S3_RSt8ios_baseRjP2tm(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6){
	var tmp0=0,tmp1=null,tmp2=null,tmp3=0,tmp4=0,tmp5=null,tmp5o=0,tmp6=null,tmp6o=0;
	tmp2=Larg4.a7.a0;
	tmp3=tmp2.i1|0;
	tmp0=tmp3+1|0;
	tmp2.i1=tmp0;
	if((__ZNSt5ctypeIcE2idE.i0&255)!==0){
		tmp4=__ZNSt5ctypeIcE2idE.i1|0;
	}else{
		tmp4=(__ZNSt6locale2id9__next_idE|0)+1|0;
		__ZNSt6locale2id9__next_idE=tmp4;
		__ZNSt5ctypeIcE2idE.i1=tmp4;
		__ZNSt5ctypeIcE2idE.i0=1;
	}
	tmp5=tmp2.a2.a0;
	tmp5=tmp5[tmp4-1|0];
	tmp2.i1=tmp3;
	if((tmp0|0)===0)tmp2.a0.a3(tmp2);
	tmp2=Larg3.a0;
	tmp6=Larg1.a2;
	tmp6=tmp6.a0.a1(tmp6);
	tmp6o=oSlot;
	tmp1={a0:null};
	tmp1.a0=tmp2;
	tmp5=__ZSt14__scan_keywordISt19istreambuf_iteratorIcSt11char_traitsIcEEPKSsSt5ctypeIcEET0_RT_S9_S8_S8_RKT1_Rjb(Larg2,tmp1,tmp6,tmp6o,tmp6,tmp6o+14|0,tmp5,Larg5,Marg5,0);
	tmp5o=oSlot;
	tmp3=((tmp5o)*12)-((tmp6o)*12)|0;
	if((tmp3|0)<168)Larg6.i6=((tmp3|0)/12|0)%7|0;
	Larg0.a0=Larg2.a0;
}
function __ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE11do_get_dateES3_S3_RSt8ios_baseRjP2tm(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=null,tmp3o=0;
	tmp3=Larg1.a2;
	tmp3=tmp3.a0.a6(tmp3);
	tmp3o=oSlot;
	tmp0=tmp3[tmp3o].a2;
	tmp1=tmp3[tmp3o].i1|0;
	tmp3={a0:null};
	tmp3.a0=Larg2.a0;
	tmp2={a0:null};
	tmp2.a0=Larg3.a0;
	__ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE3getES3_S3_RSt8ios_baseRjP2tmPKcSB_(Larg0,Larg1,tmp3,tmp2,Larg4,Larg5,Marg5,Larg6,tmp0,tmp0,0+tmp1|0);
}
function __ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE11do_get_timeES3_S3_RSt8ios_baseRjP2tm(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6){
	var tmp0=null,tmp1=null;
	tmp0={a0:null};
	tmp0.a0=Larg2.a0;
	tmp1={a0:null};
	tmp1.a0=Larg3.a0;
	__ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE3getES3_S3_RSt8ios_baseRjP2tmPKcSB_(Larg0,Larg1,tmp0,tmp1,Larg4,Larg5,Marg5,Larg6,__ZZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE11do_get_timeES3_S3_RSt8ios_baseRjP2tmE5__fmt,__ZZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE11do_get_timeES3_S3_RSt8ios_baseRjP2tmE5__fmt,0+8|0);
}
function __ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE13do_date_orderEv(Larg0){
	return 2|0;
}
function __ZNSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEED0Ev(Larg0){
}
function __ZNSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEED2Ev(Larg0){
}
function __ZNKSt9money_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_bRSt8ios_basewRKSbIwS2_SaIwEE(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6){
	var tmp0=null,tmp1=null,LmergedArray=null,tmp3=null,tmp4=null,tmp5=null,tmp6=0,tmp7=null,tmp8=null,LmergedArray29=null,tmp10=0,tmp11=0,L$psink=0,tmp13=0,tmp14=null,tmp14o=0,tmp15=null;
	tmp0=Larg4.a7.a0;
	tmp0.i1=(tmp0.i1|0)+1|0;
	tmp8=tmp0.a2.a0;
	tmp8=tmp8[(__ZNSt5ctypeIwE2idE$p1|0)-1|0];
	if((Larg6.i1|0)!==0){
		LmergedArray29=Larg6.a2;
		tmp10=LmergedArray29[0]|0;
		tmp11=tmp8.a0.a12(tmp8,45)|0;
		tmp10=(tmp10|0)===(tmp11|0)?1:0;
	}else{
		tmp10=0;
	}
	tmp1=new Uint8Array(4);
	LmergedArray=new Int32Array(103);
	tmp3={i0:0,i1:0,a2:nullArray};
	tmp3.i0=0;
	tmp3.i1=0;
	tmp3.a2=nullArray;
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp4.i0=0;
	tmp4.i1=0;
	tmp4.a2=nullArray;
	tmp5={i0:0,i1:0,a2:nullArray};
	tmp5.i0=0;
	tmp5.i1=0;
	tmp5.a2=nullArray;
	__ZNSt11__money_putIwE13__gather_infoEbbRKSt6localeRNSt10money_base7patternERwS7_RSsRSbIwSt11char_traitsIwESaIwEESD_Ri(Larg3,tmp10,tmp0,tmp1,0,LmergedArray,0,LmergedArray,1,tmp3,tmp4,tmp5,LmergedArray,2);
	tmp11=Larg6.i1|0;
	tmp6=LmergedArray[2]|0;
	if((tmp11|0)>(tmp6|0)){
		L$psink=tmp5.i1|0;
		tmp13=tmp4.i1|0;
		L$psink=(L$psink+(tmp11-tmp6<<1)|0)+tmp13|0;
		tmp13=1;
	}else{
		L$psink=tmp5.i1|0;
		tmp13=tmp4.i1|0;
		L$psink=tmp13+L$psink|0;
		tmp13=2;
	}
	L$psink=(L$psink+tmp6|0)+tmp13|0;
	if(L$psink>>>0>100){
		tmp14=new Int32Array((L$psink<<2)/4|0);
		tmp11=Larg6.i1|0;
		tmp14o=0;
		tmp14=tmp14;
	}else{
		tmp14o=3;
		tmp14=LmergedArray;
	}
	LmergedArray29=[nullObj,nullObj];
	tmp15=Larg6.a2;
	__ZNSt11__money_putIwE8__formatEPwRS1_S2_jPKwS4_RKSt5ctypeIwEbRKNSt10money_base7patternEwwRKSsRKSbIwSt11char_traitsIwESaIwEESK_i(tmp14,tmp14o,LmergedArray29,0,LmergedArray29,1,Larg4.i1|0,tmp15,0,tmp15,0+tmp11|0,tmp8,tmp10,tmp1,0,LmergedArray[0]|0,LmergedArray[1]|0,tmp3,tmp4,tmp5,tmp6);
	tmp15=LmergedArray29[0];
	tmp8=LmergedArray29[1];
	tmp7={a0:null};
	tmp7.a0=Larg2.a0;
	__ZSt16__pad_and_outputIwSt11char_traitsIwEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(Larg0,tmp7,tmp14,tmp14o,tmp15.d,tmp15.o,tmp8.d,tmp8.o,Larg4,Larg5);
	tmp10=tmp0.i1|0;
	tmp0.i1=tmp10-1|0;
	if((tmp10|0)===0)tmp0.a0.a3(tmp0);
}
function __ZSt16__pad_and_outputIwSt11char_traitsIwEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4,Larg5,Larg6){
	var tmp0=null,tmp1=0,tmp2=null,Lgeptoindexphi=0,tmp4=0,tmp5=0,tmp6=0;
	tmp0=Larg1.a0;
	a:if(tmp0!==null){
		Lgeptoindexphi=((Marg2)*4);
		tmp1=((Marg4)*4);
		tmp4=tmp1-Lgeptoindexphi>>2;
		tmp5=Larg5.i3|0;
		tmp4=(tmp5|0)>(tmp4|0)?tmp5-tmp4|0:0|0;
		tmp5=((Marg3)*4);
		Lgeptoindexphi=tmp5-Lgeptoindexphi|0;
		if((Lgeptoindexphi|0)>0){
			Lgeptoindexphi>>=2;
			if((tmp0.a0.a13(tmp0,Larg2,Marg2,Lgeptoindexphi)|0|0)!==(Lgeptoindexphi|0)){
				Larg1.a0=null;
				Larg0.a0=null;
				break a;
			}
		}
		if((tmp4|0)>0){
			tmp2=new Int32Array(((tmp4<<2)+16& -16)/4|0);
			tmp6=0;
			Lgeptoindexphi=0;
			while(1){
				tmp2[Lgeptoindexphi]=Larg6;
				tmp6=tmp6+1|0;
				if((tmp6|0)!==(tmp4|0)){
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					continue;
				}
				break;
			}
			tmp2[tmp4]=0;
			if((tmp0.a0.a13(tmp0,tmp2,0,tmp4)|0|0)!==(tmp4|0)){
				Larg1.a0=null;
				Larg0.a0=null;
				break a;
			}
		}
		tmp4=tmp1-tmp5|0;
		if((tmp4|0)>0){
			tmp4>>=2;
			if((tmp0.a0.a13(tmp0,Larg3,Marg3,tmp4)|0|0)!==(tmp4|0)){
				Larg1.a0=null;
				Larg0.a0=null;
				break a;
			}
		}
		Larg5.i3=0;
		Larg0.a0=Larg1.a0;
	}else Larg0.a0=null;
}
function __ZNSt11__money_putIwE8__formatEPwRS1_S2_jPKwS4_RKSt5ctypeIwEbRKNSt10money_base7patternEwwRKSsRKSbIwSt11char_traitsIwESaIwEESK_i(Larg0,Marg0,Larg1,Marg1,Larg2,Marg2,Larg3,Larg4,Marg4,Larg5,Marg5,Larg6,Larg7,Larg8,Marg8,Larg9,Larg10,Larg11,Larg12,Larg13,Larg14){
	var Lgeptoindexphi15=0,tmp1=0,tmp2=0,Lgeptoindexphi32=0,Lgeptoindexphi26=0,tmp5=0,tmp6=null,tmp7=null,tmp7o=0,Lgeptoindexphi7=0,Lgeptoindexphi=0,Lgeptoindexphi4=0,L$ppre=null,L$ppreo=0,tmp12=0,tmp13=null,tmp13o=0;
	Larg2[Marg2]={d:Larg0,o:Marg0};
	tmp2=(Larg14|0)>0?1:0;
	Lgeptoindexphi32=(Larg3&512|0)!==0?1:0;
	tmp5=0;
	Lgeptoindexphi26=0;
	while(1){
		a:switch(Larg8[Marg8+tmp5|0]<<24>>24|0){
			case 0:
			tmp6=Larg2[Marg2];
			Larg1[Marg1]=tmp6;
			break a;
			case 1:
			tmp6=Larg2[Marg2];
			Larg1[Marg1]=tmp6;
			Lgeptoindexphi7=Larg6.a0.a12(Larg6,32)|0;
			tmp6=Larg2[Marg2];
			Larg2[Marg2]={d:tmp6.d,o:tmp6.o+1|0};
			tmp6.d[tmp6.o]=Lgeptoindexphi7;
			break a;
			case 3:
			if((Larg13.i1|0)===0)break a;
			tmp6=Larg13.a2;
			Lgeptoindexphi7=tmp6[0]|0;
			tmp6=Larg2[Marg2];
			Larg2[Marg2]={d:tmp6.d,o:tmp6.o+1|0};
			tmp6.d[tmp6.o]=Lgeptoindexphi7;
			break a;
			case 2:
			Lgeptoindexphi7=Larg12.i1|0;
			if(!(Lgeptoindexphi32))break a;
			if((Lgeptoindexphi7|0)===0)break a;
			tmp6=Larg12.a2;
			tmp7=Larg2[Marg2];
			Lgeptoindexphi4=0;
			Lgeptoindexphi=0;
			while(1){
				tmp7.d[tmp7.o+Lgeptoindexphi4|0]=tmp6[Lgeptoindexphi]|0;
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				if(tmp6===tmp6&&(0+Lgeptoindexphi|0)===(0+Lgeptoindexphi7|0)){
					Larg2[Marg2]={d:tmp7.d,o:tmp7.o+((( -4-((0)*4)|0)+((0+Lgeptoindexphi7|0)*4)>>>2)+1|0)|0};
					break a;
				}
				Lgeptoindexphi4=Lgeptoindexphi4+1|0;
				continue;
			}
			case 4:
			tmp6=Larg2[Marg2];
			if(Larg7){
				Lgeptoindexphi26=Lgeptoindexphi26+1|0;
			}
			if((Marg4+Lgeptoindexphi26|0)<Marg5){
				tmp7o=Marg4+Lgeptoindexphi26|0;
				tmp7=Larg4;
				while(1){
					if(Larg6.a0.a4(Larg6,4,tmp7[tmp7o]|0)|0){
						if((tmp7o+1|0)<Marg5){
							tmp7o=tmp7o+1|0;
							tmp7=tmp7;
							continue;
						}
						tmp7o=tmp7o+1|0;
						tmp7=tmp7;
					}
					break;
				}
			}else{
				tmp7o=Marg4+Lgeptoindexphi26|0;
				tmp7=Larg4;
			}
			if(tmp2){
				b:{
					if(tmp7o>(Marg4+Lgeptoindexphi26|0)){
						L$ppre=Larg2[Marg2];
						Lgeptoindexphi=Larg14;
						Lgeptoindexphi7=0;
						while(1){
							Lgeptoindexphi4=Lgeptoindexphi7+1|0;
							L$ppre.d[L$ppre.o+Lgeptoindexphi7|0]=tmp7[tmp7o+ -1|0]|0;
							Lgeptoindexphi7=(tmp7o+ -1|0)>(Marg4+Lgeptoindexphi26|0)?1:0;
							tmp12=Lgeptoindexphi-1|0;
							if((Lgeptoindexphi|0)>1)if(Lgeptoindexphi7){
								tmp7o=tmp7o+ -1|0;
								tmp7=tmp7;
								Lgeptoindexphi7=Lgeptoindexphi4;
								Lgeptoindexphi=tmp12;
								continue;
							}
							break;
						}
						Larg2[Marg2]={d:L$ppre.d,o:L$ppre.o+Lgeptoindexphi4|0};
						if((Lgeptoindexphi|0)<=1){
							tmp7o=tmp7o+ -1|0;
							tmp7=tmp7;
							L$ppreo=L$ppre.o+Lgeptoindexphi4|0;
							L$ppre=L$ppre.d;
							Lgeptoindexphi7=0;
							break b;
						}
						tmp7o=tmp7o+ -1|0;
						tmp7=tmp7;
					}else{
						tmp12=Larg14;
					}
					Lgeptoindexphi7=Larg6.a0.a12(Larg6,48)|0;
					L$ppre=Larg2[Marg2];
					L$ppreo=L$ppre.o;
					L$ppre=L$ppre.d;
				}
				Larg2[Marg2]={d:L$ppre,o:L$ppreo+1|0};
				if((tmp12|0)>0){
					tmp13o=L$ppreo;
					tmp13=L$ppre;
					Lgeptoindexphi4=0;
					while(1){
						tmp13[tmp13o]=Lgeptoindexphi7;
						Lgeptoindexphi=Lgeptoindexphi4+1|0;
						if((tmp12|0)>1){
							tmp13o=(L$ppreo+1|0)+Lgeptoindexphi4|0;
							tmp13=L$ppre;
							Lgeptoindexphi4=Lgeptoindexphi;
							tmp12=tmp12-1|0;
							continue;
						}
						break;
					}
					Larg2[Marg2]={d:L$ppre,o:(L$ppreo+1|0)+Lgeptoindexphi|0};
					L$ppreo=(L$ppreo+1|0)+Lgeptoindexphi4|0;
					L$ppre=L$ppre;
				}
				L$ppre[L$ppreo]=Larg9;
			}
			if(tmp7===Larg4&&tmp7o===(Marg4+Lgeptoindexphi26|0)){
				Lgeptoindexphi7=Larg6.a0.a12(Larg6,48)|0;
				tmp7=Larg2[Marg2];
				Larg2[Marg2]={d:tmp7.d,o:tmp7.o+1|0};
				tmp7.d[tmp7.o]=Lgeptoindexphi7;
				tmp7o=tmp7.o+1|0;
				tmp7=tmp7.d;
			}else{
				Lgeptoindexphi7=Larg11.i1|0;
				if((Lgeptoindexphi7|0)!==0){
					L$ppre=Larg11.a2;
					Lgeptoindexphi=L$ppre[0]|0;
					Lgeptoindexphi=Lgeptoindexphi<<24>>24;
				}else{
					Lgeptoindexphi=-1;
				}
				tmp12=0;
				Lgeptoindexphi4=0;
				while(1){
					L$ppre=Larg2[Marg2];
					if((tmp12|0)===(Lgeptoindexphi|0)){
						Larg2[Marg2]={d:L$ppre.d,o:L$ppre.o+1|0};
						L$ppre.d[L$ppre.o]=Larg10;
						Lgeptoindexphi4=Lgeptoindexphi4+1|0;
						if(Lgeptoindexphi4>>>0<Lgeptoindexphi7>>>0){
							tmp13=Larg11.a2;
							Lgeptoindexphi=tmp13[Lgeptoindexphi4]|0;
							Lgeptoindexphi=(Lgeptoindexphi&255)===127? -1|0:Lgeptoindexphi<<24>>24|0;
							tmp12=0;
							Lgeptoindexphi15=1;
						}else{
							tmp12=0;
							Lgeptoindexphi15=1;
						}
					}else{
						Lgeptoindexphi15=0;
					}
					tmp1=tmp7[tmp7o+ -1|0]|0;
					Larg2[Marg2]={d:L$ppre.d,o:(L$ppre.o+Lgeptoindexphi15|0)+1|0};
					L$ppre.d[L$ppre.o+Lgeptoindexphi15|0]=tmp1;
					if(tmp7!==Larg4||(tmp7o+ -1|0)!==(Marg4+Lgeptoindexphi26|0)){
						tmp7o=tmp7o+ -1|0;
						tmp7=tmp7;
						tmp12=tmp12+1|0;
						continue;
					}
					break;
				}
				tmp7o=(L$ppre.o+Lgeptoindexphi15|0)+1|0;
				tmp7=L$ppre.d;
			}
			if(tmp6.d===tmp7&&tmp6.o===tmp7o)break a;
			if((tmp7o+ -1|0)<=tmp6.o)break a;
			Lgeptoindexphi=0;
			Lgeptoindexphi7=0;
			while(1){
				Lgeptoindexphi4=tmp6.d[tmp6.o+Lgeptoindexphi|0]|0;
				tmp6.d[tmp6.o+Lgeptoindexphi|0]=tmp7[(tmp7o+ -1|0)+Lgeptoindexphi7|0]|0;
				tmp7[(tmp7o+ -1|0)+Lgeptoindexphi7|0]=Lgeptoindexphi4;
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				Lgeptoindexphi7=Lgeptoindexphi7-1|0;
				if((tmp6.o+Lgeptoindexphi|0)<((tmp7o+ -1|0)+Lgeptoindexphi7|0))continue;
				break;
			}
			break a;
			default:
		}
		tmp5=tmp5+1|0;
		if((tmp5|0)!==4)continue;
		tmp2=Larg13.i1|0;
		if(tmp2>>>0>1){
			tmp6=Larg13.a2;
			tmp7=Larg2[Marg2];
			Lgeptoindexphi26=0;
			Lgeptoindexphi32=1;
			while(1){
				tmp7.d[tmp7.o+Lgeptoindexphi26|0]=tmp6[Lgeptoindexphi32]|0;
				Lgeptoindexphi32=Lgeptoindexphi32+1|0;
				if(tmp6!==tmp6||(0+Lgeptoindexphi32|0)!==(0+tmp2|0)){
					Lgeptoindexphi26=Lgeptoindexphi26+1|0;
					continue;
				}
				break;
			}
			Larg2[Marg2]={d:tmp7.d,o:tmp7.o+((( -4-((0+1|0)*4)|0)+((0+tmp2|0)*4)>>>2)+1|0)|0};
		}
		a:{
			switch(Larg3&176){
				case 32:
				tmp6=Larg2[Marg2];
				break;
				case 16:
				break a;
				default:
				tmp6={d:Larg0,o:Marg0};
			}
			Larg1[Marg1]=tmp6;
		}
		break;
	}
}
function __ZNSt11__money_putIwE13__gather_infoEbbRKSt6localeRNSt10money_base7patternERwS7_RSsRSbIwSt11char_traitsIwESaIwEESD_Ri(Larg0,Larg1,L$p0$p0$pval,Larg3,Marg3,Larg4,Marg4,Larg5,Marg5,Larg6,Larg7,Larg8,Larg9,Marg9){
	var tmp0=null,L$poptgepsqueezed150=null,tmp2=null;
	L$poptgepsqueezed150=L$p0$p0$pval.a2;
	tmp2=new Uint8Array(4);
	tmp0={i0:0,i1:0,a2:nullArray};
	if(Larg0){
		L$poptgepsqueezed150=L$poptgepsqueezed150.a0;
		L$poptgepsqueezed150=L$poptgepsqueezed150[(__ZNSt10moneypunctIwLb1EE2idE$p1|0)-1|0];
		if(Larg1){
			L$poptgepsqueezed150.a0.a12(tmp2,0,L$poptgepsqueezed150);
			Larg3[Marg3]=tmp2[0]|0;
			Larg3[Marg3+1|0]=tmp2[1]|0;
			Larg3[Marg3+2|0]=tmp2[2]|0;
			Larg3[Marg3+3|0]=tmp2[3]|0;
			L$poptgepsqueezed150.a0.a9(tmp0,L$poptgepsqueezed150);
			tmp2=Larg8.a2;
			if(tmp2!==nullArray||0!==0)tmp2[0]=0;
			Larg8.i1=0;
			__ZNSbIwSt11char_traitsIwESaIwEE7reserveEj(Larg8);
			Larg8.i0=tmp0.i0|0;
			Larg8.i1=tmp0.i1|0;
			tmp2=tmp0.a2;
			Larg8.a2=tmp2;
		}else{
			L$poptgepsqueezed150.a0.a11(tmp2,0,L$poptgepsqueezed150);
			Larg3[Marg3]=tmp2[0]|0;
			Larg3[Marg3+1|0]=tmp2[1]|0;
			Larg3[Marg3+2|0]=tmp2[2]|0;
			Larg3[Marg3+3|0]=tmp2[3]|0;
			L$poptgepsqueezed150.a0.a8(tmp0,L$poptgepsqueezed150);
			tmp2=Larg8.a2;
			if(tmp2!==nullArray||0!==0)tmp2[0]=0;
			Larg8.i1=0;
			__ZNSbIwSt11char_traitsIwESaIwEE7reserveEj(Larg8);
			Larg8.i0=tmp0.i0|0;
			Larg8.i1=tmp0.i1|0;
			tmp2=tmp0.a2;
			Larg8.a2=tmp2;
		}
		Larg4[Marg4]=L$poptgepsqueezed150.a0.a4(L$poptgepsqueezed150)|0;
		Larg5[Marg5]=L$poptgepsqueezed150.a0.a5(L$poptgepsqueezed150)|0;
		L$poptgepsqueezed150.a0.a6(tmp0,L$poptgepsqueezed150);
		tmp2=Larg6.a2;
		if(tmp2!==nullArray||0!==0)tmp2[0]=0;
		Larg6.i1=0;
		__ZNSs7reserveEj(Larg6);
		tmp2=tmp0;
		Larg6.i0=tmp2.i0|0;
		Larg6.i1=tmp2.i1|0;
		tmp2=tmp2.a2;
		Larg6.a2=tmp2;
		L$poptgepsqueezed150.a0.a7(tmp0,L$poptgepsqueezed150);
		tmp2=Larg7.a2;
		if(tmp2!==nullArray||0!==0)tmp2[0]=0;
		Larg7.i1=0;
		__ZNSbIwSt11char_traitsIwESaIwEE7reserveEj(Larg7);
		Larg7.i0=tmp0.i0|0;
		Larg7.i1=tmp0.i1|0;
		tmp2=tmp0.a2;
		Larg7.a2=tmp2;
		Larg9[Marg9]=L$poptgepsqueezed150.a0.a10(L$poptgepsqueezed150)|0;
		return;
	}
	L$poptgepsqueezed150=L$poptgepsqueezed150.a0;
	L$poptgepsqueezed150=L$poptgepsqueezed150[(__ZNSt10moneypunctIwLb0EE2idE$p1|0)-1|0];
	if(Larg1){
		L$poptgepsqueezed150.a0.a12(tmp2,0,L$poptgepsqueezed150);
		Larg3[Marg3]=tmp2[0]|0;
		Larg3[Marg3+1|0]=tmp2[1]|0;
		Larg3[Marg3+2|0]=tmp2[2]|0;
		Larg3[Marg3+3|0]=tmp2[3]|0;
		L$poptgepsqueezed150.a0.a9(tmp0,L$poptgepsqueezed150);
		tmp2=Larg8.a2;
		if(tmp2!==nullArray||0!==0)tmp2[0]=0;
		Larg8.i1=0;
		__ZNSbIwSt11char_traitsIwESaIwEE7reserveEj(Larg8);
		Larg8.i0=tmp0.i0|0;
		Larg8.i1=tmp0.i1|0;
		tmp2=tmp0.a2;
		Larg8.a2=tmp2;
	}else{
		L$poptgepsqueezed150.a0.a11(tmp2,0,L$poptgepsqueezed150);
		Larg3[Marg3]=tmp2[0]|0;
		Larg3[Marg3+1|0]=tmp2[1]|0;
		Larg3[Marg3+2|0]=tmp2[2]|0;
		Larg3[Marg3+3|0]=tmp2[3]|0;
		L$poptgepsqueezed150.a0.a8(tmp0,L$poptgepsqueezed150);
		tmp2=Larg8.a2;
		if(tmp2!==nullArray||0!==0)tmp2[0]=0;
		Larg8.i1=0;
		__ZNSbIwSt11char_traitsIwESaIwEE7reserveEj(Larg8);
		Larg8.i0=tmp0.i0|0;
		Larg8.i1=tmp0.i1|0;
		tmp2=tmp0.a2;
		Larg8.a2=tmp2;
	}
	Larg4[Marg4]=L$poptgepsqueezed150.a0.a4(L$poptgepsqueezed150)|0;
	Larg5[Marg5]=L$poptgepsqueezed150.a0.a5(L$poptgepsqueezed150)|0;
	L$poptgepsqueezed150.a0.a6(tmp0,L$poptgepsqueezed150);
	tmp2=Larg6.a2;
	if(tmp2!==nullArray||0!==0)tmp2[0]=0;
	Larg6.i1=0;
	__ZNSs7reserveEj(Larg6);
	tmp2=tmp0;
	Larg6.i0=tmp2.i0|0;
	Larg6.i1=tmp2.i1|0;
	tmp2=tmp2.a2;
	Larg6.a2=tmp2;
	L$poptgepsqueezed150.a0.a7(tmp0,L$poptgepsqueezed150);
	tmp2=Larg7.a2;
	if(tmp2!==nullArray||0!==0)tmp2[0]=0;
	Larg7.i1=0;
	__ZNSbIwSt11char_traitsIwESaIwEE7reserveEj(Larg7);
	Larg7.i0=tmp0.i0|0;
	Larg7.i1=tmp0.i1|0;
	tmp2=tmp0.a2;
	Larg7.a2=tmp2;
	Larg9[Marg9]=L$poptgepsqueezed150.a0.a10(L$poptgepsqueezed150)|0;
}
function __ZNSs7reserveEj(Larg0){
	var tmp0=0,tmp1=0,tmp2=null,tmp3=null,tmp4=0,Lgeptoindexphi=0,Lgeptoindexphi2=0;
	tmp4=Larg0.i0|0;
	if(tmp4>>>0<2){
		tmp4=0;
	}else{
		tmp4=(tmp4& -2)-1|0;
	}
	tmp0=Larg0.i1|0;
	tmp1=tmp0+16& -16;
	Lgeptoindexphi=tmp1-1|0;
	a:if((Lgeptoindexphi|0)!==(tmp4|0)){
		tmp2=new Uint8Array(tmp1/1|0);
		if(Lgeptoindexphi>>>0<=tmp4>>>0)if(tmp2===nullArray&&0===0)break a;
		tmp3=Larg0.a2;
		if(tmp3!==nullArray||0!==0){
			tmp4=(Larg0.i1|0)+1|0;
			if((tmp4|0)!==0){
				Lgeptoindexphi2=0;
				Lgeptoindexphi=0;
				while(1){
					tmp2[Lgeptoindexphi2]=tmp3[Lgeptoindexphi]|0;
					Lgeptoindexphi2=Lgeptoindexphi2+1|0;
					if(tmp2!==tmp2||(0+tmp4|0)!==(0+Lgeptoindexphi2|0)){
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						continue;
					}
					break;
				}
			}
		}
		Larg0.i0=tmp1|1;
		Larg0.i1=tmp0;
		Larg0.a2=tmp2;
	}
}
function __ZNSbIwSt11char_traitsIwESaIwEE7reserveEj(Larg0){
	var tmp0=0,tmp1=0,tmp2=null,tmp3=null,tmp4=0,Lgeptoindexphi=0,Lgeptoindexphi2=0;
	tmp4=Larg0.i0|0;
	if(tmp4>>>0<2){
		tmp4=0;
	}else{
		tmp4=(tmp4& -2)-1|0;
	}
	tmp0=Larg0.i1|0;
	tmp1=tmp0+4& -4;
	Lgeptoindexphi=tmp1-1|0;
	a:if((Lgeptoindexphi|0)!==(tmp4|0)){
		tmp2=new Int32Array((tmp1<<2)/4|0);
		if(Lgeptoindexphi>>>0<=tmp4>>>0)if(tmp2===nullArray&&0===0)break a;
		tmp3=Larg0.a2;
		if(tmp3!==nullArray||0!==0){
			tmp4=(Larg0.i1|0)+1|0;
			if((tmp4|0)!==0){
				tmp4&=1073741823;
				if((tmp4|0)!==0){
					Lgeptoindexphi2=0;
					Lgeptoindexphi=0;
					while(1){
						tmp2[Lgeptoindexphi2]=tmp3[Lgeptoindexphi]|0;
						Lgeptoindexphi2=Lgeptoindexphi2+1|0;
						if(tmp2!==tmp2||(0+tmp4|0)!==(0+Lgeptoindexphi2|0)){
							Lgeptoindexphi=Lgeptoindexphi+1|0;
							continue;
						}
						break;
					}
				}
			}
		}
		Larg0.i0=tmp1|1;
		Larg0.i1=tmp0;
		Larg0.a2=tmp2;
	}
}
function __ZNKSt9money_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_bRSt8ios_basewe(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6){
	var LmergedArray=null,tmp1=null,LmergedArray25=null,tmp3=null,tmp4=null,tmp5=null,tmp6=0,tmp7=null,tmp8=null,tmp9=0,tmp10=null,tmp10o=0,tmp11=null,tmp11o=0,tmp12=null,tmp13=0,L$psink=0,tmp15=0,tmp16=null,tmp16o=0;
	LmergedArray=new Uint8Array(104);
	tmp1=[nullObj];
	tmp1[0]={d:LmergedArray,o:0};
	LmergedArray25=new Int32Array(203);
	tmp9=_snprintf(LmergedArray,0,100,_$pstr$p7$p428,0,Larg6)|0;
	if(tmp9>>>0>99){
		tmp9=__ZSt12__asprintf_lPPcPvPKcz(tmp1,0,nullObj,_$pstr$p7$p428,0,Larg6)|0;
		tmp10=tmp1[0];
		tmp11=new Int32Array((tmp9<<2)/4|0);
		tmp10o=tmp10.o;
		tmp10=tmp10.d;
		tmp11o=0;
		tmp11=tmp11;
	}else{
		tmp10o=0;
		tmp10=LmergedArray;
		tmp11o=0;
		tmp11=LmergedArray25;
	}
	tmp3=Larg4.a7.a0;
	tmp3.i1=(tmp3.i1|0)+1|0;
	tmp12=tmp3.a2.a0;
	tmp12=tmp12[(__ZNSt5ctypeIwE2idE$p1|0)-1|0];
	tmp12.a0.a13(tmp12,tmp10,tmp10o,tmp10,tmp10o+tmp9|0,tmp11,tmp11o);
	if((tmp9|0)!==0){
		tmp13=tmp10[tmp10o]|0;
		tmp13=(tmp13&255)===45?1:0;
	}else{
		tmp13=0;
	}
	tmp10={i0:0,i1:0,a2:nullArray};
	tmp10.i0=0;
	tmp10.i1=0;
	tmp10.a2=nullArray;
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp4.i0=0;
	tmp4.i1=0;
	tmp4.a2=nullArray;
	tmp5={i0:0,i1:0,a2:nullArray};
	tmp5.i0=0;
	tmp5.i1=0;
	tmp5.a2=nullArray;
	__ZNSt11__money_putIwE13__gather_infoEbbRKSt6localeRNSt10money_base7patternERwS7_RSsRSbIwSt11char_traitsIwESaIwEESD_Ri(Larg3,tmp13,tmp3,LmergedArray,100,LmergedArray25,100,LmergedArray25,101,tmp10,tmp4,tmp5,LmergedArray25,102);
	tmp6=LmergedArray25[102]|0;
	if((tmp9|0)>(tmp6|0)){
		L$psink=tmp5.i1|0;
		tmp15=tmp4.i1|0;
		L$psink=(L$psink+(tmp9-tmp6<<1)|0)+tmp15|0;
		tmp15=1;
	}else{
		L$psink=tmp5.i1|0;
		tmp15=tmp4.i1|0;
		L$psink=tmp15+L$psink|0;
		tmp15=2;
	}
	L$psink=(L$psink+tmp6|0)+tmp15|0;
	if(L$psink>>>0>100){
		tmp16=new Int32Array((L$psink<<2)/4|0);
		tmp16o=0;
		tmp16=tmp16;
	}else{
		tmp16o=103;
		tmp16=LmergedArray25;
	}
	tmp7=[nullObj];
	__ZNSt11__money_putIwE8__formatEPwRS1_S2_jPKwS4_RKSt5ctypeIwEbRKNSt10money_base7patternEwwRKSsRKSbIwSt11char_traitsIwESaIwEESK_i(tmp16,tmp16o,tmp1,0,tmp7,0,Larg4.i1|0,tmp11,tmp11o,tmp11,tmp11o+tmp9|0,tmp12,tmp13,LmergedArray,100,LmergedArray25[100]|0,LmergedArray25[101]|0,tmp10,tmp4,tmp5,tmp6);
	tmp11=tmp1[0];
	tmp12=tmp7[0];
	tmp8={a0:null};
	tmp8.a0=Larg2.a0;
	__ZSt16__pad_and_outputIwSt11char_traitsIwEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(Larg0,tmp8,tmp16,tmp16o,tmp11.d,tmp11.o,tmp12.d,tmp12.o,Larg4,Larg5);
	tmp9=tmp3.i1|0;
	tmp3.i1=tmp9-1|0;
	if((tmp9|0)===0)tmp3.a0.a3(tmp3);
}
function __ZSt12__asprintf_lPPcPvPKcz(Larg0,Marg0,Larg1,Larg2,Marg2){
	var tmp0=null,tmp1=null,L$poptgep$poptgep2$poptgepsqueezed=null,tmp3=0,tmp4=null,tmp4o=0;
	tmp0=[nullObj];
	tmp0[0]={d:arguments,o:__ZSt12__asprintf_lPPcPvPKcz.length};
	tmp4=tmp0[0];
	tmp1=new constructor_struct$p_Z7__sFILE();
	tmp1.a0=nullArray;
	tmp1.a0o=0;
	L$poptgep$poptgep2$poptgepsqueezed=tmp1.a4;
	L$poptgep$poptgep2$poptgepsqueezed.a0=nullArray;
	L$poptgep$poptgep2$poptgepsqueezed.a0o=0;
	tmp1.i2=0;
	L$poptgep$poptgep2$poptgepsqueezed.i1=0;
	tmp1.i3=-64888;
	tmp3=__svfprintf_r(tmp1,Larg2,Marg2,tmp4.d,tmp4.o)|0;
	if((tmp3|0)>-1){
		tmp4o=tmp1.a0o;
		tmp4=tmp1.a0;
		tmp4[tmp4o]=0;
		tmp4o=L$poptgep$poptgep2$poptgepsqueezed.a0o;
		tmp4=L$poptgep$poptgep2$poptgepsqueezed.a0;
		Larg0[Marg0]={d:tmp4,o:tmp4o};
	}
	tmp0[0]=null;
	return tmp3|0;
}
function __svfprintf_r(Larg0,Larg1,Marg1,Larg2,Marg2){
	var tmp0=null,tmp1=null,tmp2=null,LmergedArray=null,tmp4=null,tmp5=null,LmergedArray276=null,L$poptgep150$poptgep167$poptgepsqueezed=null,tmp8=-0.,tmp9=0,L$poptgep$poptgep148$poptgepsqueezed=null,tmp11=null,tmp11o=0,tmp12=0,Lgeptoindexphi48=0,Lgeptoindexphi47=0,Lgeptoindexphi81=0,L$pin=0,Lgeptoindex53=0,Lgeptoindex=0,Lgeptoindexphi=0,L$pph=null,L$ppho=0,Lgeptoindex82=0,Lmaskcond3$pi=0,Lmaskcond$pi=0,Lgeptoindexphi134=0,tmp25=0,tmp26=0,Lgeptoindexphi108=0,Lgeptoindex131=0,tmp29=0,tmp30=0,L$plcssa104=null,L$plcssa104o=0,tmp32=-0.,tmp33=0,tmp34=0,tmp35=-0.,tmp36=-0.,tmp37=-0.,tmp38=null,L$ppre57$pi$pi=null,Lgeptoindexphi77=0;
	tmp0=[{d:Larg2,o:Marg2}];
	tmp1=new constructor_struct$p_Z11_prt_data_t();
	if(Larg0.i3<<24<0){
		L$poptgep$poptgep148$poptgepsqueezed=Larg0.a4;
		tmp11o=L$poptgep$poptgep148$poptgepsqueezed.a0o;
		tmp11=L$poptgep$poptgep148$poptgepsqueezed.a0;
		if(tmp11===nullArray&&tmp11o===0){
			tmp11=new Uint8Array(64);
			Larg0.a0=tmp11;
			Larg0.a0o=0;
			L$poptgep$poptgep148$poptgepsqueezed.a0=tmp11;
			L$poptgep$poptgep148$poptgepsqueezed.a0o=0;
			if(tmp11===nullArray&&0===0){
				_impure_data.i0=12;
				return  -1|0;
			}
			L$poptgep$poptgep148$poptgepsqueezed.i1=64;
		}
	}
	tmp1.i5=0;
	tmp1.a7[0]=32;
	tmp1.a8[0]=48;
	L$poptgep$poptgep148$poptgepsqueezed=new Int32Array(2);
	tmp11=new Int32Array(2);
	tmp2=new Int32Array(2);
	LmergedArray=new Int32Array(4);
	tmp4=new Uint8Array(7);
	tmp5={d:new DataView(new ArrayBuffer(8)),o:0};
	LmergedArray276={d:new DataView(new ArrayBuffer(32)),o:0};
	Lgeptoindexphi48=0;
	tmp12=0;
	a:while(1){
		Lgeptoindexphi47=Lgeptoindexphi48;
		b:while(1){
			Lgeptoindexphi81=Larg1[Marg1+Lgeptoindexphi47|0]|0;
			switch(Lgeptoindexphi81&255){
				case 0:
				case 37:
				L$pin=(Marg1+Lgeptoindexphi47|0)-(Marg1+Lgeptoindexphi48|0)|0;
				c:{
					if((L$pin|0)!==0){
						if((___ssputs_r(_impure_data,Larg0,Larg1,Marg1+Lgeptoindexphi48|0,L$pin)|0|0)===-1)break c;
						tmp12=(tmp1.i5|0)+L$pin|0;
						tmp1.i5=tmp12;
						Lgeptoindexphi81=Larg1[Marg1+Lgeptoindexphi47|0]|0;
					}
					if((Lgeptoindexphi81&255)!==0){
						tmp1.i0=0;
						tmp1.i3=0;
						tmp1.i1=-1;
						tmp1.i2=0;
						L$poptgep150$poptgep167$poptgepsqueezed=tmp1.a9;
						L$poptgep150$poptgep167$poptgepsqueezed[40]=0;
						tmp1.i11=0;
						Lgeptoindex53=Lgeptoindexphi47+1|0;
						L$pin=Larg1[Marg1+Lgeptoindex53|0]|0;
						d:{
							switch(L$pin&255){
								case 35:
								L$ppho=0;
								L$pph=_$pstr$p359;
								break;
								case 45:
								L$ppho=1;
								L$pph=_$pstr$p359;
								break;
								case 48:
								L$ppho=2;
								L$pph=_$pstr$p359;
								break;
								case 43:
								L$ppho=3;
								L$pph=_$pstr$p359;
								break;
								case 32:
								L$ppho=4;
								L$pph=_$pstr$p359;
								break;
								default:
								Lgeptoindex=0;
								Lgeptoindexphi48=0;
								break d;
							}
							Lgeptoindexphi=0;
							Lgeptoindexphi48=0;
							while(1){
								Lgeptoindexphi48|=(1<<((L$ppho)-(0)|0));
								tmp1.i0=Lgeptoindexphi48;
								Lgeptoindex=Lgeptoindexphi+1|0;
								L$pin=Larg1[(Marg1+Lgeptoindex53|0)+Lgeptoindex|0]|0;
								switch(L$pin&255){
									case 35:
									L$ppho=0;
									L$pph=_$pstr$p359;
									break;
									case 45:
									L$ppho=1;
									L$pph=_$pstr$p359;
									break;
									case 48:
									L$ppho=2;
									L$pph=_$pstr$p359;
									break;
									case 43:
									L$ppho=3;
									L$pph=_$pstr$p359;
									break;
									case 32:
									L$ppho=4;
									L$pph=_$pstr$p359;
									break;
									default:
									Lgeptoindexphi47=Lgeptoindex53+Lgeptoindexphi|0;
									break d;
								}
								Lgeptoindexphi=Lgeptoindex;
								continue;
							}
						}
						Lgeptoindexphi=Lgeptoindex53+Lgeptoindex|0;
						d:{
							if((Lgeptoindexphi48&16|0)===0)if(!(((Lgeptoindexphi48&8|0)===0?1:0)^1))break d;
							L$poptgep150$poptgep167$poptgepsqueezed[40]=(Lgeptoindexphi48&8|0)===0?32|0:43|0;
							L$pin=Larg1[Marg1+Lgeptoindexphi|0]|0;
						}
						if((L$pin&255)===42){
							L$pin=handleVAArg(tmp0[0]);
							tmp1.i3=L$pin;
							if((L$pin|0)<0){
								tmp1.i3=-L$pin|0;
								Lgeptoindexphi48|=2;
								tmp1.i0=Lgeptoindexphi48;
							}
							Lgeptoindexphi=Lgeptoindexphi47+2|0;
							L$pin=Larg1[Marg1+Lgeptoindexphi|0]|0;
						}else{
							Lgeptoindexphi81=(L$pin<<24>>24)-48|0;
							if(Lgeptoindexphi81>>>0<10){
								Lgeptoindexphi47=0;
								while(1){
									Lgeptoindexphi47=(Lgeptoindexphi47*10|0)+Lgeptoindexphi81|0;
									tmp1.i3=Lgeptoindexphi47;
									Lgeptoindex=Lgeptoindex+1|0;
									Lgeptoindexphi=Lgeptoindex53+Lgeptoindex|0;
									L$pin=Larg1[Marg1+Lgeptoindexphi|0]|0;
									Lgeptoindexphi81=(L$pin<<24>>24)-48|0;
									if(Lgeptoindexphi81>>>0<10)continue;
									break;
								}
							}
						}
						if((L$pin&255)===46){
							Lgeptoindex=Lgeptoindexphi+1|0;
							if((Larg1[Marg1+Lgeptoindex|0]&255)===42){
								L$pin=handleVAArg(tmp0[0]);
								Lgeptoindex53=(L$pin|0)>-1?L$pin|0: -1|0;
								tmp1.i1=Lgeptoindex53;
								Lgeptoindexphi=Lgeptoindexphi+2|0;
								L$pin=Larg1[Marg1+Lgeptoindexphi|0]|0;
							}else{
								tmp1.i1=0;
								L$pin=Larg1[Marg1+Lgeptoindex|0]|0;
								Lgeptoindexphi81=(L$pin<<24>>24)-48|0;
								if(Lgeptoindexphi81>>>0<10){
									Lgeptoindexphi47=0;
									Lgeptoindex53=0;
									while(1){
										Lgeptoindex53=(Lgeptoindex53*10|0)+Lgeptoindexphi81|0;
										tmp1.i1=Lgeptoindex53;
										Lgeptoindexphi47=Lgeptoindexphi47+1|0;
										Lgeptoindexphi=Lgeptoindex+Lgeptoindexphi47|0;
										L$pin=Larg1[Marg1+Lgeptoindexphi|0]|0;
										Lgeptoindexphi81=(L$pin<<24>>24)-48|0;
										if(Lgeptoindexphi81>>>0<10)continue;
										break;
									}
								}else{
									Lgeptoindexphi=Lgeptoindex;
									Lgeptoindex53=0;
								}
							}
						}else{
							Lgeptoindex53=-1;
						}
						d:{
							switch(L$pin&255){
								case 104:
								L$plcssa104o=0;
								L$plcssa104=_$pstr$p356;
								break;
								case 108:
								L$plcssa104o=1;
								L$plcssa104=_$pstr$p356;
								break;
								case 76:
								L$plcssa104o=2;
								L$plcssa104=_$pstr$p356;
								break;
								default:
								break d;
							}
							Lgeptoindexphi47=Lgeptoindexphi+1|0;
							L$pin=(L$plcssa104o)-(0)|0;
							if((L$pin|0)===1){
								if((Larg1[Marg1+Lgeptoindexphi47|0]&255)===108){
									Lgeptoindexphi47=Lgeptoindexphi+2|0;
									Lgeptoindexphi81=512;
								}else{
									Lgeptoindexphi81=128;
								}
							}else{
								Lgeptoindexphi81=64<<L$pin;
							}
							Lgeptoindexphi48|=Lgeptoindexphi81;
							tmp1.i0=Lgeptoindexphi48;
							L$pin=Larg1[Marg1+Lgeptoindexphi47|0]|0;
							Lgeptoindexphi=Lgeptoindexphi47;
						}
						tmp1.i6=L$pin;
						switch(L$pin&255){
							case 101:
							case 102:
							case 103:
							case 69:
							case 70:
							case 71:
							tmp32=handleVAArg(tmp0[0]);
							tmp1.d10=tmp32;
							tmp5.d.setFloat64(tmp5.o,tmp32,true);
							Lgeptoindex131=tmp5.d.getInt32(1*4+tmp5.o,true)|0;
							tmp33=tmp5.d.getInt32(tmp5.o,true)|0;
							d:if((tmp33|Lgeptoindex131|0)!==0){
								if((Lgeptoindex131|0)===-2147483648)if((tmp33|0)===0){
									Lgeptoindex131=2;
									break d;
								}
								if((Lgeptoindex131&2147483647)-1048576>>>0<2145386496){
									Lgeptoindex131=4;
								}else{
									if(Lgeptoindex131>>>0>=1048576){
										if((Lgeptoindex131|0)<0)if(Lgeptoindex131>>>0<2148532224){
											Lgeptoindex131=3;
											break d;
										}
										if((Lgeptoindex131|0)===2146435072)if((tmp33|0)===0){
											Lgeptoindex131=1;
											break d;
										}
										Lgeptoindex131=(Lgeptoindex131|0)===-1048576&&(tmp33|0)===0?1:0;
										break d;
									}
									Lgeptoindex131=3;
								}
							}else{
								Lgeptoindex131=2;
							}
							switch(Lgeptoindex131|0){
								case 1:
								if(tmp32<0)L$poptgep150$poptgep167$poptgepsqueezed[40]=45;
								if(L$pin<<24<1207959552){
									L$pph=_$pstr$p365;
								}else{
									L$pph=_$pstr$p1$p364;
								}
								tmp1.i4=3;
								tmp1.i0=Lgeptoindexphi48& -5;
								Lgeptoindexphi47=0;
								Lgeptoindexphi81=0;
								break;
								case 0:
								if(L$pin<<24<1207959552){
									L$pph=_$pstr$p2$p367;
								}else{
									L$pph=_$pstr$p3$p366;
								}
								tmp1.i4=3;
								tmp1.i0=Lgeptoindexphi48& -5;
								Lgeptoindexphi47=0;
								Lgeptoindexphi81=0;
								break;
								default:
								if((Lgeptoindex53|0)===-1){
									tmp1.i1=6;
									Lgeptoindex131=L$pin|32;
									Lgeptoindex53=6;
								}else{
									Lgeptoindex131=L$pin|32;
									if((Lgeptoindex131&255)===103)if((Lgeptoindex53|0)===0){
										tmp1.i1=1;
										Lgeptoindex53=1;
										Lgeptoindex131=103;
									}
								}
								tmp1.i0=Lgeptoindexphi48|1024;
								LmergedArray276.d.setFloat64(LmergedArray276.o,tmp32,true);
								tmp33=LmergedArray276.d.getInt32(1*4+LmergedArray276.o,true)|0;
								tmp32=(tmp33|0)<0?-tmp32:tmp32;
								tmp34=L$pin<<24>>24;
								switch(tmp34|0){
									case 102:
									case 70:
									Lgeptoindex82=3;
									break;
									case 101:
									case 69:
									Lgeptoindex53=Lgeptoindex53+1|0;
									Lgeptoindex82=2;
									break;
									default:
									Lgeptoindex82=2;
								}
								LmergedArray276.d.setFloat64(3*8+LmergedArray276.o,tmp32,true);
								L$pph=_impure_data.a9;
								if(L$pph!==null){
									L$plcssa104=L$pph.a0;
									if(L$plcssa104!==null){
										Lmaskcond3$pi=L$pph.i1|0;
										L$plcssa104.i1=Lmaskcond3$pi;
										L$plcssa104.i2=1<<Lmaskcond3$pi;
										L$pph.a0=null;
									}
								}else{
									L$plcssa104={a0:null,i1:0,a2:null,a3:null};
									_impure_data.a9=L$plcssa104;
									L$plcssa104.i1=0;
									L$plcssa104.a2=null;
									L$plcssa104.a0=null;
									L$plcssa104.a3=null;
								}
								Lmaskcond3$pi=LmergedArray276.d.getInt32(1*4+3*8+LmergedArray276.o,true)|0;
								if((Lmaskcond3$pi|0)<0){
									Lmaskcond3$pi&=2147483647;
									LmergedArray276.d.setInt32(1*4+3*8+LmergedArray276.o,Lmaskcond3$pi,true);
								}
								if((Lmaskcond3$pi&2146435072|0)===2146435072){
									if((LmergedArray276.d.getInt32(3*8+LmergedArray276.o,true)|Lmaskcond3$pi&1048575|0)!==0){
										L$pph=_$pstr$p3$p223;
									}else{
										L$pph=_$pstr$p22;
									}
									Lmaskcond3$pi=L$pph[3]|0;
									L$plcssa104o=0+(Lmaskcond3$pi!==0?8|0:3|0)|0;
									L$plcssa104=L$pph;
									Lgeptoindexphi47=9999;
								}else{
									tmp35=+LmergedArray276.d.getFloat64(3*8+LmergedArray276.o,true);
									if(tmp35===0){
										L$pph=_$pstr$p2$p24;
										L$plcssa104o=1;
										L$plcssa104=_$pstr$p2$p24;
										Lgeptoindexphi47=1;
									}else{
										L$plcssa104=___d2b(tmp35,LmergedArray,2,LmergedArray,3);
										Lmaskcond3$pi=LmergedArray276.d.getInt32(1*4+3*8+LmergedArray276.o,true)|0;
										Lmaskcond$pi=Lmaskcond3$pi>>>20&2047;
										if((Lmaskcond$pi|0)!==0){
											LmergedArray276.d.setFloat64(2*8+LmergedArray276.o,+LmergedArray276.d.getFloat64(3*8+LmergedArray276.o,true),true);
											LmergedArray276.d.setInt32(1*4+2*8+LmergedArray276.o,LmergedArray276.d.getInt32(1*4+2*8+LmergedArray276.o,true)&1048575|1072693248,true);
											Lmaskcond3$pi=Lmaskcond$pi-1023|0;
										}else{
											Lmaskcond$pi=(LmergedArray[2]|0)+(LmergedArray[3]|0)|0;
											if((Lmaskcond$pi|0)>-1042){
												Lgeptoindexphi134=LmergedArray276.d.getInt32(3*8+LmergedArray276.o,true)|0;
												Lmaskcond3$pi=Lgeptoindexphi134>>>(Lmaskcond$pi+1042|0)|Lmaskcond3$pi<<( -1010-Lmaskcond$pi|0);
											}else{
												Lmaskcond3$pi=LmergedArray276.d.getInt32(3*8+LmergedArray276.o,true)|0;
												Lmaskcond3$pi<<=( -1042-Lmaskcond$pi|0);
											}
											LmergedArray276.d.setFloat64(2*8+LmergedArray276.o,(+(Lmaskcond3$pi>>>0)),true);
											LmergedArray276.d.setInt32(1*4+2*8+LmergedArray276.o,(LmergedArray276.d.getInt32(1*4+2*8+LmergedArray276.o,true)|0)-32505856|0,true);
											Lmaskcond3$pi=Lmaskcond$pi-1|0;
										}
										tmp35=(+(Lmaskcond3$pi|0))*.301029995663981+(( +LmergedArray276.d.getFloat64(2*8+LmergedArray276.o,true)+-1.5)*.289529654602168+.1760912590558);
										Lmaskcond$pi=~~tmp35;
										Lmaskcond$pi=((tmp35<0&&!(tmp35===(+(Lmaskcond$pi|0)))?1:0)<<31>>31)+Lmaskcond$pi|0;
										if(Lmaskcond$pi>>>0<23){
											if( +LmergedArray276.d.getFloat64(3*8+LmergedArray276.o,true)< +___mprec_tens[Lmaskcond$pi]){
												Lmaskcond$pi=Lmaskcond$pi-1|0;
												Lgeptoindexphi134=0;
											}else{
												Lgeptoindexphi134=0;
											}
										}else{
											Lgeptoindexphi134=1;
										}
										tmp29=(LmergedArray[3]|0)-Lmaskcond3$pi|0;
										Lmaskcond3$pi=(tmp29|0)>0?tmp29-1|0:0|0;
										tmp29=(tmp29|0)>0?0|0:1-tmp29|0;
										if((Lmaskcond$pi|0)>-1){
											Lmaskcond3$pi=Lmaskcond3$pi+Lmaskcond$pi|0;
											tmp30=Lmaskcond$pi;
											tmp25=0;
										}else{
											tmp25=-Lmaskcond$pi|0;
											tmp29=tmp29-Lmaskcond$pi|0;
											tmp30=0;
										}
										if((Lgeptoindex82|0)===3){
											tmp26=Lmaskcond$pi+Lgeptoindex53|0;
											Lgeptoindexphi108=tmp26+1|0;
											Lgeptoindexphi47=(Lgeptoindexphi108|0)>1?Lgeptoindexphi108|0:1|0;
											tmp12=Lgeptoindex53;
										}else{
											tmp26=(Lgeptoindex53|0)>1?Lgeptoindex53|0:1|0;
											Lgeptoindexphi108=tmp26;
											Lgeptoindexphi47=tmp26;
											tmp12=tmp26;
										}
										L$pph=new Uint8Array((Lgeptoindexphi47+1|0)/1|0);
										d:{
											e:{
												f:{
													g:{
														if(Lgeptoindexphi108>>>0<15){
															tmp36=+LmergedArray276.d.getFloat64(3*8+LmergedArray276.o,true);
															LmergedArray276.d.setFloat64(2*8+LmergedArray276.o,tmp36,true);
															if((Lmaskcond$pi|0)>0){
																tmp37=+___mprec_tens[Lmaskcond$pi&15];
																Lgeptoindexphi47=Lmaskcond$pi>>>4;
																if((Lgeptoindexphi47&16|0)!==0){
																	tmp35=tmp36/1.0E+256;
																	LmergedArray276.d.setFloat64(3*8+LmergedArray276.o,tmp35,true);
																	Lgeptoindexphi47&=15;
																	Lgeptoindex=3;
																}else{
																	tmp35=tmp36;
																	Lgeptoindex=2;
																}
																if((Lgeptoindexphi47|0)!==0){
																	Lgeptoindexphi81=0;
																	while(1){
																		if((Lgeptoindexphi47&1|0)!==0){
																			tmp8=+___mprec_bigtens[Lgeptoindexphi81];
																			Lgeptoindex=Lgeptoindex+1|0;
																			tmp37*=tmp8;
																		}
																		Lgeptoindexphi47>>=1;
																		if((Lgeptoindexphi47|0)!==0){
																			Lgeptoindexphi81=Lgeptoindexphi81+1|0;
																			continue;
																		}
																		break;
																	}
																}
																tmp35/=tmp37;
																LmergedArray276.d.setFloat64(3*8+LmergedArray276.o,tmp35,true);
															}else if((Lmaskcond$pi|0)!==0){
																Lgeptoindexphi81=-Lmaskcond$pi|0;
																tmp35=tmp36* +___mprec_tens[Lgeptoindexphi81&15];
																LmergedArray276.d.setFloat64(3*8+LmergedArray276.o,tmp35,true);
																Lgeptoindexphi81>>=4;
																if((Lgeptoindexphi81|0)!==0){
																	Lgeptoindex=2;
																	Lgeptoindexphi47=0;
																	while(1){
																		if((Lgeptoindexphi81&1|0)!==0){
																			tmp35*= +___mprec_bigtens[Lgeptoindexphi47];
																			LmergedArray276.d.setFloat64(3*8+LmergedArray276.o,tmp35,true);
																			Lgeptoindex=Lgeptoindex+1|0;
																		}
																		Lgeptoindexphi81>>=1;
																		if((Lgeptoindexphi81|0)!==0){
																			Lgeptoindexphi47=Lgeptoindexphi47+1|0;
																			continue;
																		}
																		break;
																	}
																}else{
																	Lgeptoindex=2;
																}
															}else{
																tmp35=tmp36;
																Lgeptoindex=2;
															}
															h:{
																if((Lgeptoindexphi134|0)!==0){
																	if((Lgeptoindexphi108|0)>0){
																		if(tmp35<1){
																			if((tmp26|0)<1)break h;
																			tmp35*=10;
																			LmergedArray276.d.setFloat64(3*8+LmergedArray276.o,tmp35,true);
																			Lgeptoindexphi47=Lmaskcond$pi-1|0;
																			Lgeptoindexphi81=tmp26;
																			Lgeptoindex=Lgeptoindex+1|0;
																		}else{
																			Lgeptoindexphi47=Lmaskcond$pi;
																			Lgeptoindexphi81=Lgeptoindexphi108;
																		}
																	}else{
																		Lgeptoindexphi47=Lmaskcond$pi;
																		Lgeptoindexphi81=Lgeptoindexphi108;
																	}
																}else{
																	Lgeptoindexphi47=Lmaskcond$pi;
																	Lgeptoindexphi81=Lgeptoindexphi108;
																}
																LmergedArray276.d.setFloat64(1*8+LmergedArray276.o,tmp35*(+(Lgeptoindex|0))+7,true);
																LmergedArray276.d.setInt32(1*4+1*8+LmergedArray276.o,(LmergedArray276.d.getInt32(1*4+1*8+LmergedArray276.o,true)|0)-54525952|0,true);
																if((Lgeptoindexphi81|0)!==0){
																	tmp37= +___mprec_tens[Lgeptoindexphi81-1|0]* +LmergedArray276.d.getFloat64(1*8+LmergedArray276.o,true);
																	LmergedArray276.d.setFloat64(1*8+LmergedArray276.o,tmp37,true);
																	Lgeptoindex=~~tmp35;
																	LmergedArray276.d.setFloat64(3*8+LmergedArray276.o,tmp35-(+(Lgeptoindex|0)),true);
																	L$pph[0]=Lgeptoindex+48|0;
																	if((Lgeptoindexphi81|0)!==1){
																		Lgeptoindexphi77=0;
																		Lgeptoindex=2;
																		while(1){
																			Lgeptoindexphi77=Lgeptoindexphi77+1|0;
																			tmp35= +LmergedArray276.d.getFloat64(3*8+LmergedArray276.o,true)*10;
																			tmp9=~~tmp35;
																			LmergedArray276.d.setFloat64(3*8+LmergedArray276.o,tmp35-(+(tmp9|0)),true);
																			L$pph[Lgeptoindexphi77]=tmp9+48|0;
																			if((Lgeptoindex|0)!==(Lgeptoindexphi81|0)){
																				Lgeptoindex=Lgeptoindex+1|0;
																				continue;
																			}
																			break;
																		}
																		tmp37=+LmergedArray276.d.getFloat64(1*8+LmergedArray276.o,true);
																	}
																	tmp35=+LmergedArray276.d.getFloat64(3*8+LmergedArray276.o,true);
																	if(tmp35>tmp37+.5){
																		Lmaskcond$pi=Lgeptoindexphi47;
																		break e;
																	}
																	if(tmp35<.5-tmp37){
																		while(1){
																			Lgeptoindex82=Lgeptoindexphi81-1|0;
																			if((L$pph[Lgeptoindex82]&255)===48){
																				Lgeptoindexphi81=Lgeptoindex82;
																				continue;
																			}
																			break;
																		}
																		Lmaskcond$pi=Lgeptoindexphi47;
																		break d;
																	}else{
																		tmp36=+LmergedArray276.d.getFloat64(2*8+LmergedArray276.o,true);
																	}
																}else{
																	tmp35+=-5;
																	LmergedArray276.d.setFloat64(3*8+LmergedArray276.o,tmp35,true);
																	tmp37=+LmergedArray276.d.getFloat64(1*8+LmergedArray276.o,true);
																	if(tmp35>tmp37){
																		Lmaskcond$pi=Lgeptoindexphi47;
																		break f;
																	}
																	if(tmp35<-tmp37)break g;
																}
															}
															LmergedArray276.d.setFloat64(3*8+LmergedArray276.o,tmp36,true);
														}
														Lgeptoindexphi47=LmergedArray[2]|0;
														if((Lmaskcond$pi|0)<15)if((Lgeptoindexphi47|0)>-1){
															tmp35=+___mprec_tens[Lmaskcond$pi];
															if((Lgeptoindexphi108|0)<1)if((tmp12|0)<0){
																if((Lgeptoindexphi108|0)<0)break g;
																if( +LmergedArray276.d.getFloat64(3*8+LmergedArray276.o,true)<=tmp35*5)break g;
																break f;
															}
															tmp37=+LmergedArray276.d.getFloat64(3*8+LmergedArray276.o,true);
															Lgeptoindexphi47=~~(tmp37/tmp35);
															LmergedArray276.d.setFloat64(3*8+LmergedArray276.o,tmp37-tmp35*(+(Lgeptoindexphi47|0)),true);
															L$pph[0]=Lgeptoindexphi47+48|0;
															tmp37=+LmergedArray276.d.getFloat64(3*8+LmergedArray276.o,true);
															if((Lgeptoindexphi108|0)===1){
																Lgeptoindexphi81=1;
															}else{
																Lgeptoindex82=1;
																Lgeptoindexphi81=1;
																while(1){
																	tmp37*=10;
																	LmergedArray276.d.setFloat64(3*8+LmergedArray276.o,tmp37,true);
																	if(tmp37===0)break d;
																	Lgeptoindexphi47=~~(tmp37/tmp35);
																	LmergedArray276.d.setFloat64(3*8+LmergedArray276.o,tmp37-tmp35*(+(Lgeptoindexphi47|0)),true);
																	L$pph[Lgeptoindexphi81]=Lgeptoindexphi47+48|0;
																	Lgeptoindex82=Lgeptoindex82+1|0;
																	tmp37=+LmergedArray276.d.getFloat64(3*8+LmergedArray276.o,true);
																	if((Lgeptoindex82|0)!==(Lgeptoindexphi108|0)){
																		Lgeptoindexphi81=Lgeptoindexphi81+1|0;
																		continue;
																	}
																	break;
																}
																Lgeptoindexphi81=Lgeptoindexphi81+1|0;
															}
															tmp37+=tmp37;
															LmergedArray276.d.setFloat64(3*8+LmergedArray276.o,tmp37,true);
															if(tmp37>tmp35)break e;
															Lgeptoindex82=tmp37===tmp35?1:0;
															if((Lgeptoindexphi47&1|0)===0)break d;
															if(Lgeptoindex82)break e;
															break d;
														}
														if((Lmaskcond3$pi|0)>0)if((tmp29|0)>0){
															Lgeptoindexphi47=(tmp29|0)<(Lmaskcond3$pi|0)?tmp29|0:Lmaskcond3$pi|0;
															Lmaskcond3$pi=Lmaskcond3$pi-Lgeptoindexphi47|0;
															tmp29=tmp29-Lgeptoindexphi47|0;
														}
														if((tmp25|0)>0){
															L$plcssa104=___pow5mult(L$plcssa104,tmp25);
														}
														tmp38={a0:null,i1:0,i2:0,i3:0,i4:0,a5:nullArray};
														tmp38.i1=1;
														tmp38.i2=2;
														L$ppre57$pi$pi=new Int32Array(2);
														tmp38.a5=L$ppre57$pi$pi;
														tmp38.i3=0;
														L$ppre57$pi$pi[0]=1;
														tmp38.i4=1;
														h:{
															if((tmp30|0)>0){
																tmp38=___pow5mult(tmp38,tmp30);
																L$ppre57$pi$pi=tmp38.a5;
																tmp30=tmp38.i4|0;
															}else{
																if((tmp30|0)===0){
																	tmp30=1;
																	break h;
																}
																tmp30=1;
															}
															tmp30=___hi0bits(L$ppre57$pi$pi[tmp30-1|0]|0)|0;
															tmp30=32-tmp30|0;
														}
														tmp30=tmp30+Lmaskcond3$pi&31;
														tmp30=(tmp30|0)!==0?32-tmp30|0:0|0;
														if(tmp30>>>0>4){
															tmp30=tmp30-4|0;
															Lmaskcond3$pi=tmp30+Lmaskcond3$pi|0;
															tmp29=tmp30+tmp29|0;
														}else if((tmp30|0)!==4){
															tmp30=tmp30+28|0;
															Lmaskcond3$pi=tmp30+Lmaskcond3$pi|0;
															tmp29=tmp30+tmp29|0;
														}
														if((tmp29|0)>0){
															L$plcssa104=___lshift(L$plcssa104,tmp29);
														}
														if((Lmaskcond3$pi|0)>0){
															tmp38=___lshift(tmp38,Lmaskcond3$pi);
														}
														if((Lgeptoindexphi134|0)!==0)if((___mcmp(L$plcssa104,tmp38)|0|0)<0){
															Lmaskcond$pi=Lmaskcond$pi-1|0;
															Lgeptoindexphi108=tmp26;
															L$plcssa104=___multadd(L$plcssa104,10,0);
														}
														if((Lgeptoindex82|0)!==2)if((Lgeptoindexphi108|0)<1){
															if((Lgeptoindexphi108|0)<0)break g;
															if((___mcmp(L$plcssa104,___multadd(tmp38,5,0))|0|0)<1)break g;
															break f;
														}
														Lgeptoindexphi47=(_quorem(L$plcssa104,tmp38)|0)+48|0;
														L$pph[0]=Lgeptoindexphi47;
														if((Lgeptoindexphi108|0)>1){
															Lmaskcond3$pi=1;
															Lgeptoindex82=1;
															while(1){
																L$plcssa104=___multadd(L$plcssa104,10,0);
																Lgeptoindexphi47=(_quorem(L$plcssa104,tmp38)|0)+48|0;
																L$pph[Lgeptoindex82]=Lgeptoindexphi47;
																Lmaskcond3$pi=Lmaskcond3$pi+1|0;
																if((Lmaskcond3$pi|0)!==(Lgeptoindexphi108|0)){
																	Lgeptoindex82=Lgeptoindex82+1|0;
																	continue;
																}
																break;
															}
														}else{
															Lgeptoindexphi108=1;
														}
														Lgeptoindex82=___mcmp(___lshift(L$plcssa104,1),tmp38)|0;
														h:if((Lgeptoindex82|0)<=0){
															if((Lgeptoindexphi47&1|0)!==0)if((Lgeptoindex82|0)===0)break h;
															while(1){
																Lgeptoindex82=Lgeptoindexphi108-1|0;
																if((L$pph[Lgeptoindex82]&255)===48){
																	Lgeptoindexphi108=Lgeptoindex82;
																	continue;
																}
																break;
															}
															Lgeptoindexphi81=Lgeptoindexphi108;
															break d;
														}
														Lgeptoindex=Lgeptoindexphi108-1|0;
														Lgeptoindexphi47=L$pph[Lgeptoindex]|0;
														if((Lgeptoindexphi47&255)===57){
															while(1){
																if(L$pph===L$pph&&(0+Lgeptoindex|0)===0){
																	L$pph[0]=49;
																	Lgeptoindexphi81=Lgeptoindexphi108;
																	Lmaskcond$pi=Lmaskcond$pi+1|0;
																	break d;
																}
																Lgeptoindexphi81=Lgeptoindex-1|0;
																Lgeptoindexphi47=L$pph[Lgeptoindexphi81]|0;
																if((Lgeptoindexphi47&255)===57){
																	Lgeptoindexphi108=Lgeptoindex;
																	Lgeptoindex=Lgeptoindexphi81;
																	continue;
																}
																break;
															}
															tmp9=Lgeptoindex;
															Lgeptoindex=Lgeptoindexphi81;
															Lgeptoindexphi81=tmp9;
														}else{
															Lgeptoindexphi81=Lgeptoindexphi108;
														}
														L$pph[Lgeptoindex]=Lgeptoindexphi47+1|0;
														break d;
													}
													Lmaskcond$pi=tmp12^ -1;
													Lgeptoindexphi81=0;
													break d;
												}
												L$pph[0]=49;
												Lmaskcond$pi=Lmaskcond$pi+1|0;
												Lgeptoindexphi81=1;
												break d;
											}
											Lgeptoindex=Lgeptoindexphi81-1|0;
											Lgeptoindexphi47=L$pph[Lgeptoindex]|0;
											if((Lgeptoindexphi47&255)===57)while(1){
												if(L$pph===L$pph&&(0+Lgeptoindex|0)===0){
													L$pph[0]=48;
													Lmaskcond$pi=Lmaskcond$pi+1|0;
													Lgeptoindex=0;
													Lgeptoindexphi47=48;
												}else{
													Lgeptoindexphi81=Lgeptoindex-1|0;
													Lgeptoindexphi47=L$pph[Lgeptoindexphi81]|0;
													if((Lgeptoindexphi47&255)===57){
														tmp9=Lgeptoindex;
														Lgeptoindex=Lgeptoindexphi81;
														Lgeptoindexphi81=tmp9;
														continue;
													}
													tmp9=Lgeptoindex;
													Lgeptoindex=Lgeptoindexphi81;
													Lgeptoindexphi81=tmp9;
												}
												break;
											}
											L$pph[Lgeptoindex]=Lgeptoindexphi47+1|0;
										}
										L$pph[Lgeptoindexphi81]=0;
										L$plcssa104o=0+Lgeptoindexphi81|0;
										L$plcssa104=L$pph;
										Lgeptoindexphi47=Lmaskcond$pi+1|0;
									}
								}
								d:{
									switch(tmp34|0){
										case 103:
										case 71:
										if((Lgeptoindexphi48&1|0)!==0)break;
										break d;
										default:
									}
									switch(tmp34|0){
										case 102:
										case 70:
										Lgeptoindexphi47=!(tmp32===0)&&(L$pph[0]&255)===48?1-Lgeptoindex53|0:Lgeptoindexphi47|0;
										Lgeptoindexphi48=Lgeptoindexphi47;
										break;
										default:
										Lgeptoindexphi48=0;
									}
									if(tmp32===0){
										L$plcssa104o=(0+Lgeptoindex53|0)+Lgeptoindexphi48|0;
										L$plcssa104=L$pph;
									}else if(L$plcssa104o<((0+Lgeptoindex53|0)+Lgeptoindexphi48|0)){
										while(1){
											L$plcssa104[L$plcssa104o]=48;
											if(L$plcssa104!==L$pph||(L$plcssa104o+1|0)!==((0+Lgeptoindex53|0)+Lgeptoindexphi48|0)){
												L$plcssa104o=L$plcssa104o+1|0;
												L$plcssa104=L$plcssa104;
												continue;
											}
											break;
										}
										L$plcssa104o=(0+Lgeptoindex53|0)+Lgeptoindexphi48|0;
										L$plcssa104=L$pph;
									}
								}
								Lgeptoindexphi81=(L$plcssa104o)-(0)|0;
								d:{
									e:{
										f:{
											if((Lgeptoindex131&255)===103){
												Lgeptoindex131=(Lgeptoindexphi47|0)>(tmp1.i1|0)?1:0;
												if((Lgeptoindexphi47|0)>=-3)if(!(Lgeptoindex131)){
													L$pin=103;
													break f;
												}
												L$pin=L$pin+254|0;
											}
											if(L$pin<<24<1711276032){
												L$poptgep150$poptgep167$poptgepsqueezed[43]=L$pin;
												Lgeptoindex=Lgeptoindexphi47-1|0;
												Lgeptoindexphi48=(Lgeptoindexphi47|0)<1?1-Lgeptoindexphi47|0:Lgeptoindex|0;
												L$poptgep150$poptgep167$poptgepsqueezed[44]=(Lgeptoindexphi47|0)<1?45|0:43|0;
												if((Lgeptoindexphi48|0)>9){
													Lgeptoindex53=0;
													while(1){
														Lgeptoindex131=Lgeptoindex53-1|0;
														tmp34=((Lgeptoindexphi48|0)%10|0)+48|0;
														tmp4[7+Lgeptoindex131|0]=tmp34;
														Lgeptoindex82=(Lgeptoindexphi48|0)/10|0;
														if((Lgeptoindexphi48|0)>99){
															Lgeptoindexphi48=Lgeptoindex82;
															Lgeptoindex53=Lgeptoindex131;
															continue;
														}
														break;
													}
													Lgeptoindex82=Lgeptoindex82+48|0;
													tmp4[7+(Lgeptoindex53-2|0)|0]=Lgeptoindex82;
													if((Lgeptoindex53|0)<2){
														L$poptgep150$poptgep167$poptgepsqueezed[45]=Lgeptoindex82;
														if((Lgeptoindex53|0)===1){
															L$plcssa104o=46;
															L$plcssa104=L$poptgep150$poptgep167$poptgepsqueezed;
														}else{
															L$poptgep150$poptgep167$poptgepsqueezed[46]=tmp34;
															if((Lgeptoindex53|0)<0){
																Lgeptoindexphi48=0;
																while(1){
																	Lgeptoindex131=Lgeptoindexphi48+1|0;
																	L$poptgep150$poptgep167$poptgepsqueezed[47+Lgeptoindexphi48|0]=tmp4[7+Lgeptoindex53|0]|0;
																	if((Lgeptoindex53|0)<-1){
																		Lgeptoindexphi48=Lgeptoindex131;
																		Lgeptoindex53=Lgeptoindex53+1|0;
																		continue;
																	}
																	break;
																}
																L$plcssa104o=47+Lgeptoindex131|0;
																L$plcssa104=L$poptgep150$poptgep167$poptgepsqueezed;
															}else{
																L$plcssa104o=47;
																L$plcssa104=L$poptgep150$poptgep167$poptgepsqueezed;
															}
														}
													}else{
														L$plcssa104o=45;
														L$plcssa104=L$poptgep150$poptgep167$poptgepsqueezed;
													}
												}else{
													L$poptgep150$poptgep167$poptgepsqueezed[45]=48;
													L$poptgep150$poptgep167$poptgepsqueezed[46]=Lgeptoindexphi48+48|0;
													L$plcssa104o=47;
													L$plcssa104=L$poptgep150$poptgep167$poptgepsqueezed;
												}
												Lgeptoindexphi47=(L$plcssa104o)-(43)|0;
												Lgeptoindexphi48=Lgeptoindexphi47+Lgeptoindexphi81|0;
												tmp1.i4=Lgeptoindexphi48;
												if((Lgeptoindexphi81|0)<=1)if((tmp1.i0&1|0)===0)break d;
												tmp1.i4=Lgeptoindexphi48+1|0;
												break d;
											}
											if((L$pin&255)===102){
												if((Lgeptoindexphi47|0)>0){
													tmp1.i4=Lgeptoindexphi47;
													L$pin=tmp1.i1|0;
													if((L$pin|0)===0)if((tmp1.i0&1|0)===0){
														L$pin=102;
														break e;
													}
													tmp1.i4=(Lgeptoindexphi47+1|0)+L$pin|0;
													L$pin=102;
													break e;
												}
												L$pin=tmp1.i1|0;
												g:{
													if((L$pin|0)===0)if((tmp1.i0&1|0)===0){
														L$pin=1;
														break g;
													}
													L$pin=L$pin+2|0;
												}
												tmp1.i4=L$pin;
												L$pin=102;
												break e;
											}
										}
										if((Lgeptoindexphi47|0)<(Lgeptoindexphi81|0))tmp1.i4=Lgeptoindexphi81+((Lgeptoindexphi47|0)>0?1|0:2-Lgeptoindexphi47|0)|0;
										else{
											tmp1.i4=Lgeptoindexphi47;
											if((tmp1.i0&1|0)!==0)tmp1.i4=Lgeptoindexphi47+1|0;
										}
									}
									tmp1.i11=Lgeptoindexphi47;
									Lgeptoindex=Lgeptoindexphi47;
									Lgeptoindexphi47=0;
								}
								if((tmp33|0)<0)L$poptgep150$poptgep167$poptgepsqueezed[40]=45;
							}
							d:if((__printf_common(tmp1,LmergedArray,1,Larg0)|0|0)===-1){
								Lgeptoindexphi48=-1;
							}else{
								Lgeptoindexphi48=tmp1.i0|0;
								e:if((Lgeptoindexphi48&1024|0)!==0){
									if(L$pin<<24>1694498816){
										if( +tmp1.d10===0){
											if((___ssputs_r(_impure_data,Larg0,_$pstr$p2$p24,0,1)|0|0)===-1){
												Lgeptoindexphi48=-1;
												break d;
											}
											if((Lgeptoindexphi81|0)<=(Lgeptoindex|0))if((tmp1.i0&1|0)===0)break e;
											if((___ssputs_r(_impure_data,Larg0,_$pstr$p143$p642,0,1)|0|0)===-1){
												Lgeptoindexphi48=-1;
												break d;
											}
											if((Lgeptoindexphi81|0)>1){
												Lgeptoindexphi48=Lgeptoindexphi81-1|0;
												L$pin=0;
												while(1){
													if((___ssputs_r(_impure_data,Larg0,tmp1.a8,0,1)|0|0)===-1){
														Lgeptoindexphi48=-1;
														break d;
													}
													L$pin=L$pin+1|0;
													if((L$pin|0)<(Lgeptoindexphi48|0))continue;
													break;
												}
											}
										}else if((Lgeptoindex|0)<1){
											if((___ssputs_r(_impure_data,Larg0,_$pstr$p2$p24,0,1)|0|0)===-1){
												Lgeptoindexphi48=-1;
												break d;
											}
											if((Lgeptoindexphi81|Lgeptoindex|0)===0)if((tmp1.i0&1|0)===0)break e;
											if((___ssputs_r(_impure_data,Larg0,_$pstr$p143$p642,0,1)|0|0)===-1){
												Lgeptoindexphi48=-1;
												break d;
											}
											if((Lgeptoindex|0)<0){
												Lgeptoindexphi48=-Lgeptoindex|0;
												L$pin=0;
												while(1){
													if((___ssputs_r(_impure_data,Larg0,tmp1.a8,0,1)|0|0)===-1){
														Lgeptoindexphi48=-1;
														break d;
													}
													L$pin=L$pin+1|0;
													if((L$pin|0)<(Lgeptoindexphi48|0))continue;
													break;
												}
											}
											if((___ssputs_r(_impure_data,Larg0,L$pph,0,Lgeptoindexphi81)|0|0)===-1){
												Lgeptoindexphi48=-1;
												break d;
											}
										}else{
											Lgeptoindexphi48=tmp1.i11|0;
											L$pin=(Lgeptoindexphi81|0)>(Lgeptoindexphi48|0)?Lgeptoindexphi48|0:Lgeptoindexphi81|0;
											if((L$pin|0)>0){
												if((___ssputs_r(_impure_data,Larg0,L$pph,0,L$pin)|0|0)===-1){
													Lgeptoindexphi48=-1;
													break d;
												}
												Lgeptoindexphi48=tmp1.i11|0;
											}
											L$pin=(L$pin|0)>0?L$pin|0:0|0;
											if((Lgeptoindexphi48|0)>(L$pin|0)){
												Lgeptoindex53=0;
												while(1){
													if((___ssputs_r(_impure_data,Larg0,tmp1.a8,0,1)|0|0)===-1){
														Lgeptoindexphi48=-1;
														break d;
													}
													Lgeptoindexphi48=tmp1.i11|0;
													Lgeptoindex53=Lgeptoindex53+1|0;
													if((Lgeptoindex53|0)<(Lgeptoindexphi48-L$pin|0))continue;
													break;
												}
											}
											f:{
												if((Lgeptoindexphi81|0)<=(Lgeptoindex|0))if((tmp1.i0&1|0)===0)break f;
												if((___ssputs_r(_impure_data,Larg0,_$pstr$p143$p642,0,1)|0|0)===-1){
													Lgeptoindexphi48=-1;
													break d;
												}
											}
											L$pin=Lgeptoindexphi81-Lgeptoindexphi48|0;
											Lgeptoindex53=Lgeptoindexphi81-Lgeptoindex|0;
											L$pin=(Lgeptoindex53|0)<(L$pin|0)?Lgeptoindex53|0:L$pin|0;
											if((L$pin|0)>0)if((___ssputs_r(_impure_data,Larg0,L$pph,0+Lgeptoindexphi48|0,L$pin)|0|0)===-1){
												Lgeptoindexphi48=-1;
												break d;
											}
											Lgeptoindexphi48=((L$pin|0)>0?-L$pin|0:0|0)+Lgeptoindex53|0;
											if((Lgeptoindexphi48|0)>0){
												L$pin=0;
												while(1){
													if((___ssputs_r(_impure_data,Larg0,tmp1.a8,0,1)|0|0)===-1){
														Lgeptoindexphi48=-1;
														break d;
													}
													L$pin=L$pin+1|0;
													if((L$pin|0)<(Lgeptoindexphi48|0))continue;
													break;
												}
											}
										}
									}else{
										L$pin=___ssputs_r(_impure_data,Larg0,L$pph,0,1)|0;
										f:{
											if((Lgeptoindexphi81|0)<2)if((Lgeptoindexphi48&1|0)===0){
												if((L$pin|0)!==-1)break f;
												Lgeptoindexphi48=-1;
												break d;
											}
											if((L$pin|0)===-1){
												Lgeptoindexphi48=-1;
												break d;
											}
											if((___ssputs_r(_impure_data,Larg0,_$pstr$p143$p642,0,1)|0|0)===-1){
												Lgeptoindexphi48=-1;
												break d;
											}
											Lgeptoindexphi48=Lgeptoindexphi81-1|0;
											if( +tmp1.d10===0){
												if((Lgeptoindexphi81|0)>1){
													L$pin=0;
													while(1){
														if((___ssputs_r(_impure_data,Larg0,tmp1.a8,0,1)|0|0)===-1){
															Lgeptoindexphi48=-1;
															break d;
														}
														L$pin=L$pin+1|0;
														if((L$pin|0)<(Lgeptoindexphi48|0))continue;
														break;
													}
												}
											}else if((___ssputs_r(_impure_data,Larg0,L$pph,0+1|0,Lgeptoindexphi48)|0|0)===-1){
												Lgeptoindexphi48=-1;
												break d;
											}
										}
										if((___ssputs_r(_impure_data,Larg0,L$poptgep150$poptgep167$poptgepsqueezed,43,Lgeptoindexphi47)|0|0)===-1){
											Lgeptoindexphi48=-1;
											break d;
										}
									}
								}else if((___ssputs_r(_impure_data,Larg0,L$pph,0,tmp1.i4|0)|0|0)===-1){
									Lgeptoindexphi48=-1;
									break d;
								}
								Lgeptoindexphi48=tmp1.i3|0;
								L$pin=LmergedArray[1]|0;
								Lgeptoindex53=(Lgeptoindexphi48|0)>(L$pin|0)?1:0;
								if((tmp1.i0&2|0)!==0)if(Lgeptoindex53){
									Lgeptoindex53=0;
									while(1){
										if((___ssputs_r(_impure_data,Larg0,tmp1.a7,0,1)|0|0)===-1){
											Lgeptoindexphi48=-1;
											break d;
										}
										Lgeptoindexphi48=tmp1.i3|0;
										Lgeptoindex53=Lgeptoindex53+1|0;
										if((Lgeptoindex53|0)<(Lgeptoindexphi48-L$pin|0))continue;
										break;
									}
								}
								Lgeptoindexphi48=(Lgeptoindexphi48|0)>(L$pin|0)?Lgeptoindexphi48|0:L$pin|0;
							}
							break;
							default:
							d:{
								e:{
									f:{
										g:{
											h:{
												i:{
													switch(L$pin<<24>>24|0){
														case 99:
														tmp12=handleVAArg(tmp0[0]);
														L$poptgep150$poptgep167$poptgepsqueezed[39]=tmp12;
														tmp1.i4=1;
														L$ppho=39;
														L$pph=L$poptgep150$poptgep167$poptgepsqueezed;
														break;
														case 100:
														case 105:
														if((Lgeptoindexphi48&512|0)!==0){
															L$pph=handleVAArg(tmp0[0]);
															Lgeptoindexphi47=L$pph.d[L$pph.o+1|0]|0;
															Lgeptoindexphi81=L$pph.d[L$pph.o]|0;
														}else if(Lgeptoindexphi48<<24<0){
															Lgeptoindexphi81=handleVAArg(tmp0[0]);
															Lgeptoindexphi47=Lgeptoindexphi81>>31;
														}else{
															Lgeptoindexphi81=handleVAArg(tmp0[0]);
															if((Lgeptoindexphi48&64|0)!==0){
																Lgeptoindexphi81<<=16;
																Lgeptoindexphi47=Lgeptoindexphi81>>31;
																Lgeptoindexphi81>>=16;
															}else{
																Lgeptoindexphi47=Lgeptoindexphi81>>31;
															}
														}
														tmp2[1]=Lgeptoindexphi47;
														tmp2[0]=Lgeptoindexphi81;
														if((Lgeptoindexphi47|0)<0){
															Lgeptoindexphi47=(Lgeptoindexphi81|0)!==0?Lgeptoindexphi47^ -1|0:-Lgeptoindexphi47|0;
															tmp2[1]=Lgeptoindexphi47;
															Lgeptoindexphi81=-Lgeptoindexphi81|0;
															tmp2[0]=Lgeptoindexphi81;
															L$poptgep150$poptgep167$poptgepsqueezed[40]=45;
															L$pph=_$pstr$p374;
															Lgeptoindex=10;
															break e;
														}
														L$pph=_$pstr$p374;
														Lgeptoindex=10;
														break e;
														case 117:
														case 111:
														if((Lgeptoindexphi48&512|0)!==0){
															L$pph=handleVAArg(tmp0[0]);
															Lgeptoindexphi47=L$pph.d[L$pph.o+1|0]|0;
															Lgeptoindexphi81=L$pph.d[L$pph.o]|0;
														}else if(Lgeptoindexphi48<<24<0){
															Lgeptoindexphi81=handleVAArg(tmp0[0]);
															Lgeptoindexphi47=0;
														}else{
															Lgeptoindexphi81=handleVAArg(tmp0[0]);
															Lgeptoindexphi81=(Lgeptoindexphi48&64|0)!==0?Lgeptoindexphi81&65535|0:Lgeptoindexphi81|0;
															Lgeptoindexphi47=0;
														}
														tmp2[1]=Lgeptoindexphi47;
														tmp2[0]=Lgeptoindexphi81;
														Lgeptoindex=(L$pin&255)===111?8|0:10|0;
														L$pph=_$pstr$p374;
														break f;
														case 88:
														L$poptgep150$poptgep167$poptgepsqueezed[42]=88;
														L$pph=_$pstr$p374;
														break g;
														case 112:
														Lgeptoindexphi48|=32;
														tmp1.i0=Lgeptoindexphi48;
														break h;
														case 120:
														break h;
														case 110:
														if((Lgeptoindexphi48&512|0)!==0){
															L$plcssa104=handleVAArg(tmp0[0]);
															L$plcssa104.d[L$plcssa104.o+1|0]=tmp12>>31;
															L$plcssa104.d[L$plcssa104.o]=tmp12;
															break i;
														}
														if(Lgeptoindexphi48<<24<0){
															L$plcssa104=handleVAArg(tmp0[0]);
															L$plcssa104.d[L$plcssa104.o]=tmp12;
															break i;
														}
														if((Lgeptoindexphi48&64|0)!==0){
															L$plcssa104=handleVAArg(tmp0[0]);
															L$plcssa104.d[L$plcssa104.o]=tmp12;
															break i;
														}
														L$plcssa104=handleVAArg(tmp0[0]);
														L$plcssa104.d[L$plcssa104.o]=tmp12;
														break i;
														case 0:
														break i;
														case 115:
														L$pph=handleVAArg(tmp0[0]);
														if((Lgeptoindex53|0)!==0){
															Lgeptoindexphi48=Lgeptoindex53;
															L$pin=0;
															while(1){
																if((L$pph.d[L$pph.o+L$pin|0]&255)!==0){
																	Lgeptoindexphi48=Lgeptoindexphi48-1|0;
																	if((Lgeptoindexphi48|0)!==0){
																		L$pin=L$pin+1|0;
																		continue;
																	}
																}else if(L$pph.d!==nullArray||(L$pph.o+L$pin|0)!==0){
																	Lgeptoindex53=(L$pph.o+L$pin|0)-(L$pph.o)|0;
																	tmp1.i1=Lgeptoindex53;
																}
																break;
															}
														}else{
															Lgeptoindex53=0;
														}
														tmp1.i4=Lgeptoindex53;
														L$ppho=L$pph.o;
														L$pph=L$pph.d;
														break;
														default:
														L$poptgep150$poptgep167$poptgepsqueezed[39]=L$pin;
														tmp1.i4=1;
														L$ppho=39;
														L$pph=L$poptgep150$poptgep167$poptgepsqueezed;
													}
													L$poptgep150$poptgep167$poptgepsqueezed[40]=0;
													break d;
												}
												tmp1.i4=0;
												L$ppho=40;
												L$pph=L$poptgep150$poptgep167$poptgepsqueezed;
												break d;
											}
											L$poptgep150$poptgep167$poptgepsqueezed[42]=120;
											L$pph=_$pstr$p1$p373;
										}
										if((Lgeptoindexphi48&512|0)!==0){
											L$plcssa104=handleVAArg(tmp0[0]);
											Lgeptoindexphi47=L$plcssa104.d[L$plcssa104.o+1|0]|0;
											Lgeptoindexphi81=L$plcssa104.d[L$plcssa104.o]|0;
										}else if(Lgeptoindexphi48<<24<0){
											Lgeptoindexphi81=handleVAArg(tmp0[0]);
											Lgeptoindexphi47=0;
										}else{
											Lgeptoindexphi81=handleVAArg(tmp0[0]);
											Lgeptoindexphi81=(Lgeptoindexphi48&64|0)!==0?Lgeptoindexphi81&65535|0:Lgeptoindexphi81|0;
											Lgeptoindexphi47=0;
										}
										tmp2[1]=Lgeptoindexphi47;
										tmp2[0]=Lgeptoindexphi81;
										if((Lgeptoindexphi48&1|0)!==0){
											Lgeptoindexphi48|=32;
											tmp1.i0=Lgeptoindexphi48;
										}
										if((Lgeptoindexphi47|Lgeptoindexphi81|0)!==0){
											Lgeptoindex=16;
										}else{
											Lgeptoindexphi48&= -33;
											tmp1.i0=Lgeptoindexphi48;
											Lgeptoindex=16;
										}
									}
									L$poptgep150$poptgep167$poptgepsqueezed[40]=0;
								}
								tmp1.i2=Lgeptoindex53;
								if((Lgeptoindex53|0)>-1)tmp1.i0=Lgeptoindexphi48& -5;
								if((Lgeptoindexphi47|Lgeptoindexphi81|Lgeptoindex53|0)!==0){
									Lgeptoindex82=(((0)*4)&4|0)===0?1:0;
									Lmaskcond3$pi=(((0)*4)&4|0)===0?1:0;
									Lmaskcond$pi=(((0)*4)&7|0)===0?1:0;
									Lgeptoindexphi134=0;
									while(1){
										tmp11[1]=0;
										tmp11[0]=Lgeptoindex;
										e:{
											if(Lgeptoindex>>>0>=Lgeptoindexphi81>>>0)if((Lgeptoindexphi47|0)===0){
												tmp26=Lgeptoindex;
												tmp25=0;
												Lgeptoindexphi108=0;
												tmp12=1;
												break e;
											}
											tmp26=Lgeptoindex;
											tmp12=1;
											Lgeptoindexphi108=0;
											tmp25=0;
											while(1){
												tmp25=tmp26>>>31|tmp25<<1;
												Lgeptoindexphi108=tmp12>>>31|Lgeptoindexphi108<<1;
												tmp26<<=1;
												Lgeptoindexphi48=tmp26>>>0<Lgeptoindexphi81>>>0?1:0;
												L$pin=(tmp25|0)===(Lgeptoindexphi47|0)?1:0;
												Lgeptoindex53=tmp25>>>0<Lgeptoindexphi47>>>0?1:0;
												tmp12<<=1;
												Lgeptoindex131=(Lgeptoindexphi108|tmp12|0)!==0?1:0;
												if((tmp25|0)>-1){
													if(!(Lgeptoindex53)){
														if(!(Lgeptoindexphi48))break e;
														if(!(L$pin))break e;
													}
													if(Lgeptoindex131)continue;
												}
												break;
											}
										}
										if((Lgeptoindexphi108|tmp12|0)!==0)while(1){
											Lgeptoindexphi48=Lgeptoindexphi81>>>0>=tmp26>>>0?1:0;
											L$pin=(Lgeptoindexphi47|0)===(tmp25|0)?1:0;
											e:{
												if(Lgeptoindexphi47>>>0<=tmp25>>>0){
													if(!(L$pin))break e;
													if(!(Lgeptoindexphi48))break e;
												}
												Lgeptoindexphi47=(Lgeptoindexphi47-tmp25|0)+((Lgeptoindexphi81>>>0<tmp26>>>0?1:0)<<31>>31)|0;
												Lgeptoindexphi81=Lgeptoindexphi81-tmp26|0;
											}
											tmp12=tmp12>>>1|Lgeptoindexphi108<<31;
											tmp26=tmp26>>>1|tmp25<<31;
											Lgeptoindexphi108>>>=1;
											if((tmp12|Lgeptoindexphi108|0)!==0){
												tmp25>>>=1;
												continue;
											}
											break;
										}
										Lgeptoindexphi134=Lgeptoindexphi134-1|0;
										L$poptgep150$poptgep167$poptgepsqueezed[40+Lgeptoindexphi134|0]=L$pph[Lgeptoindexphi81]|0;
										L$poptgep$poptgep148$poptgepsqueezed[1]=0;
										L$poptgep$poptgep148$poptgepsqueezed[0]=Lgeptoindex;
										tmp29=tmp2[1]|0;
										tmp30=tmp2[0]|0;
										tmp25=Lgeptoindex>>>0<tmp30>>>0?1:0;
										e:{
											if((tmp29|0)===0)if(!(tmp25)){
												tmp26=Lgeptoindex;
												tmp25=0;
												Lgeptoindexphi108=0;
												tmp12=1;
												break e;
											}
											tmp26=Lgeptoindex;
											tmp12=1;
											Lgeptoindexphi108=0;
											tmp25=0;
											while(1){
												tmp25=tmp26>>>31|tmp25<<1;
												Lgeptoindexphi108=tmp12>>>31|Lgeptoindexphi108<<1;
												tmp26<<=1;
												Lgeptoindexphi48=tmp26>>>0<tmp30>>>0?1:0;
												L$pin=(tmp25|0)===(tmp29|0)?1:0;
												Lgeptoindex53=tmp25>>>0<tmp29>>>0?1:0;
												tmp12<<=1;
												Lgeptoindex131=(Lgeptoindexphi108|tmp12|0)!==0?1:0;
												if((tmp25|0)>-1){
													if(!(Lgeptoindex53)){
														if(!(Lgeptoindexphi48))break e;
														if(!(L$pin))break e;
													}
													if(Lgeptoindex131)continue;
												}
												break;
											}
										}
										if((Lgeptoindexphi108|tmp12|0)!==0){
											Lgeptoindexphi81=0;
											Lgeptoindexphi47=0;
											while(1){
												Lgeptoindexphi48=tmp30>>>0>=tmp26>>>0?1:0;
												L$pin=(tmp29|0)===(tmp25|0)?1:0;
												e:{
													if(tmp29>>>0<=tmp25>>>0){
														if(!(L$pin))break e;
														if(!(Lgeptoindexphi48))break e;
													}
													tmp29=(tmp29-tmp25|0)+((tmp30>>>0<tmp26>>>0?1:0)<<31>>31)|0;
													Lgeptoindexphi47|=Lgeptoindexphi108;
													Lgeptoindexphi81|=tmp12;
													tmp30=tmp30-tmp26|0;
												}
												tmp12=tmp12>>>1|Lgeptoindexphi108<<31;
												tmp26=tmp26>>>1|tmp25<<31;
												Lgeptoindexphi108>>>=1;
												if((tmp12|Lgeptoindexphi108|0)!==0){
													tmp25>>>=1;
													continue;
												}
												break;
											}
										}else{
											Lgeptoindexphi47=0;
											Lgeptoindexphi81=0;
										}
										tmp2[1]=Lgeptoindexphi47;
										tmp2[0]=Lgeptoindexphi81;
										if((Lgeptoindexphi47|Lgeptoindexphi81|0)!==0)continue;
										break;
									}
								}else{
									Lgeptoindexphi134=0;
								}
								if((Lgeptoindex|0)===8)if((tmp1.i0&1|0)!==0)if((tmp1.i1|0)<=(tmp1.i4|0)){
									Lgeptoindexphi134=Lgeptoindexphi134-1|0;
									L$poptgep150$poptgep167$poptgepsqueezed[40+Lgeptoindexphi134|0]=48;
								}
								tmp1.i4=(40)-(40+Lgeptoindexphi134|0)|0;
								L$ppho=40+Lgeptoindexphi134|0;
								L$pph=L$poptgep150$poptgep167$poptgepsqueezed;
							}
							d:if((__printf_common(tmp1,LmergedArray,0,Larg0)|0|0)===-1){
								Lgeptoindexphi48=-1;
							}else if((___ssputs_r(_impure_data,Larg0,L$pph,L$ppho,tmp1.i4|0)|0|0)===-1){
								Lgeptoindexphi48=-1;
							}else{
								Lgeptoindexphi48=tmp1.i3|0;
								L$pin=LmergedArray[0]|0;
								Lgeptoindex53=(Lgeptoindexphi48|0)>(L$pin|0)?1:0;
								if((tmp1.i0&2|0)!==0)if(Lgeptoindex53){
									Lgeptoindex53=0;
									while(1){
										if((___ssputs_r(_impure_data,Larg0,tmp1.a7,0,1)|0|0)===-1){
											Lgeptoindexphi48=-1;
											break d;
										}
										Lgeptoindexphi48=tmp1.i3|0;
										Lgeptoindex53=Lgeptoindex53+1|0;
										if((Lgeptoindex53|0)<(Lgeptoindexphi48-L$pin|0))continue;
										break;
									}
								}
								Lgeptoindexphi48=(Lgeptoindexphi48|0)>(L$pin|0)?Lgeptoindexphi48|0:L$pin|0;
							}
						}
						if((Lgeptoindexphi48|0)!==-1){
							tmp12=(tmp1.i5|0)+Lgeptoindexphi48|0;
							tmp1.i5=tmp12;
							Lgeptoindexphi48=Lgeptoindexphi+1|0;
							continue a;
						}
					}
				}
				Lgeptoindexphi48=Larg0.i3|0;
				L$pin=tmp1.i5|0;
				return ((Lgeptoindexphi48&64|0)!==0? -1|0:L$pin|0)|0;
				default:
				Lgeptoindexphi47=Lgeptoindexphi47+1|0;
				continue b;
			}
			break;
		}
		break;
	}
}
function __printf_common(Larg0,Larg1,Marg1,Larg2){
	var L$poptgep$poptgep7$poptgepsqueezed=null,tmp1=0,tmp2=0,tmp3=0;
	tmp2=Larg0.i2|0;
	tmp3=Larg0.i4|0;
	tmp2=(tmp2|0)>(tmp3|0)?tmp2|0:tmp3|0;
	Larg1[Marg1]=tmp2;
	L$poptgep$poptgep7$poptgepsqueezed=Larg0.a9;
	if((L$poptgep$poptgep7$poptgepsqueezed[40]|0)!==0){
		tmp2=tmp2+1|0;
		Larg1[Marg1]=tmp2;
	}
	tmp3=Larg0.i0|0;
	if((tmp3&32|0)!==0){
		tmp2=tmp2+2|0;
		Larg1[Marg1]=tmp2;
		tmp3=Larg0.i0|0;
	}
	if((tmp3&6|0)===0)if((Larg0.i3|0)>(tmp2|0)){
		tmp2=0;
		while(1){
			if((___ssputs_r(_impure_data,Larg2,Larg0.a7,0,1)|0|0)===-1)return  -1|0;
			tmp2=tmp2+1|0;
			if((tmp2|0)<((Larg0.i3|0)-(Larg1[Marg1]|0)|0))continue;
			break;
		}
		tmp3=Larg0.i0|0;
	}
	tmp2=L$poptgep$poptgep7$poptgepsqueezed[40]|0;
	if((tmp3&32|0)!==0){
		L$poptgep$poptgep7$poptgepsqueezed[tmp2!==0?41|0:40|0]=48;
		tmp2=tmp2!==0?2|0:1|0;
		L$poptgep$poptgep7$poptgepsqueezed[tmp2+40|0]=L$poptgep$poptgep7$poptgepsqueezed[42]|0;
		tmp2=tmp2+1|0;
	}else{
		tmp2=tmp2!==0?1:0;
	}
	if((___ssputs_r(_impure_data,Larg2,L$poptgep$poptgep7$poptgepsqueezed,40,tmp2)|0|0)===-1)return  -1|0;
	tmp2=(Larg0.i3|0)-(Larg1[Marg1]|0)|0;
	tmp2=(tmp2|0)<0||(Larg0.i0&6|0)!==4?0|0:tmp2|0;
	tmp3=Larg0.i2|0;
	tmp1=Larg0.i4|0;
	if((tmp3|0)>(tmp1|0)){
		tmp2=(tmp3-tmp1|0)+tmp2|0;
	}
	if((tmp2|0)<=0)return 0|0;
	tmp3=0;
	while(1){
		if((___ssputs_r(_impure_data,Larg2,Larg0.a8,0,1)|0|0)===-1)return  -1|0;
		tmp3=tmp3+1|0;
		if((tmp3|0)<(tmp2|0))continue;
		break;
	}
	return 0|0;
}
function _quorem(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=0,Lgeptoindexphi=0,Lgeptoindex9=0,Lgeptoindexphi16=0,tmp7=0,tmp8=0,Lgeptoindexphi3=0,Lgeptoindex=0;
	tmp3=Larg1.i4|0;
	if((Larg0.i4|0)<(tmp3|0))return 0|0;
	tmp0=Larg1.a5;
	tmp3=tmp3-1|0;
	tmp1=Larg0.a5;
	Lgeptoindexphi=tmp1[tmp3]|0;
	Lgeptoindex9=(tmp0[tmp3]|0)+1|0;
	tmp2=(Lgeptoindexphi>>>0)/(Lgeptoindex9>>>0)|0;
	if(Lgeptoindex9>>>0>Lgeptoindexphi>>>0){
		Lgeptoindexphi=tmp3;
	}else{
		tmp8=0;
		Lgeptoindexphi16=0;
		Lgeptoindexphi3=0;
		Lgeptoindexphi=0;
		while(1){
			Lgeptoindex=Lgeptoindexphi+1|0;
			Lgeptoindexphi=tmp0[Lgeptoindexphi]|0;
			Lgeptoindexphi16=((Lgeptoindexphi&65535)*tmp2|0)+Lgeptoindexphi16|0;
			Lgeptoindexphi=(Lgeptoindexphi16>>>16)+((Lgeptoindexphi>>>16)*tmp2|0)|0;
			Lgeptoindex9=tmp1[Lgeptoindexphi3]|0;
			Lgeptoindexphi16=((Lgeptoindex9&65535)-(Lgeptoindexphi16&65535)|0)+tmp8|0;
			Lgeptoindex9=((Lgeptoindex9>>>16)-(Lgeptoindexphi&65535)|0)+(Lgeptoindexphi16>>16)|0;
			tmp1[Lgeptoindexphi3]=Lgeptoindex9<<16|Lgeptoindexphi16&65535;
			if((0+Lgeptoindex|0)<=(0+tmp3|0)){
				Lgeptoindexphi16=Lgeptoindexphi>>>16;
				Lgeptoindexphi=Lgeptoindex;
				tmp8=Lgeptoindex9>>16;
				Lgeptoindexphi3=Lgeptoindexphi3+1|0;
				continue;
			}
			break;
		}
		if((tmp1[tmp3]|0)!==0){
			Lgeptoindexphi=tmp3;
		}else{
			Lgeptoindex9=tmp3-1|0;
			if((0+Lgeptoindex9|0)>0){
				Lgeptoindexphi=tmp3;
				while(1){
					if((tmp1[Lgeptoindex9]|0)===0){
						Lgeptoindex9=Lgeptoindex9-1|0;
						Lgeptoindexphi=Lgeptoindexphi-1|0;
						if((0+Lgeptoindex9|0)>0)continue;
					}
					break;
				}
			}else{
				Lgeptoindexphi=tmp3;
			}
			Larg0.i4=Lgeptoindexphi;
		}
	}
	if((___mcmp(Larg0,Larg1)|0|0)<=-1)return tmp2|0;
	tmp8=0;
	tmp7=0;
	Lgeptoindexphi16=0;
	Lgeptoindex9=0;
	while(1){
		Lgeptoindexphi3=Lgeptoindex9+1|0;
		Lgeptoindex9=tmp0[Lgeptoindex9]|0;
		tmp7=(Lgeptoindex9&65535)+tmp7|0;
		Lgeptoindex9=(tmp7>>>16)+(Lgeptoindex9>>>16)|0;
		Lgeptoindex=tmp1[Lgeptoindexphi16]|0;
		tmp7=((Lgeptoindex&65535)-(tmp7&65535)|0)+tmp8|0;
		Lgeptoindex=((Lgeptoindex>>>16)-(Lgeptoindex9&65535)|0)+(tmp7>>16)|0;
		tmp1[Lgeptoindexphi16]=Lgeptoindex<<16|tmp7&65535;
		if((0+Lgeptoindexphi3|0)>(0+tmp3|0)){
			Lgeptoindexphi16=tmp2+1|0;
			if((tmp1[Lgeptoindexphi]|0)!==0)return Lgeptoindexphi16|0;
			Lgeptoindex9=Lgeptoindexphi-1|0;
			if((0+Lgeptoindex9|0)>0)while(1){
				if((tmp1[Lgeptoindex9]|0)===0){
					Lgeptoindex9=Lgeptoindex9-1|0;
					Lgeptoindexphi=Lgeptoindexphi-1|0;
					if((0+Lgeptoindex9|0)>0)continue;
				}
				break;
			}
			Larg0.i4=Lgeptoindexphi;
			return Lgeptoindexphi16|0;
		}
		tmp7=Lgeptoindex9>>>16;
		Lgeptoindex9=Lgeptoindexphi3;
		Lgeptoindexphi16=Lgeptoindexphi16+1|0;
		tmp8=Lgeptoindex>>16;
		continue;
	}
}
function ___multadd(Larg0,Larg1,Larg2){
	var tmp0=0,Lgeptoindexphi=0,tmp2=null,tmp3=null,tmp4=0,tmp5=0,tmp6=0,tmp7=null;
	tmp0=Larg0.i4|0;
	tmp3=Larg0.a5;
	Lgeptoindexphi=0;
	tmp5=Larg2;
	tmp4=0;
	while(1){
		tmp6=tmp3[Lgeptoindexphi]|0;
		tmp5=((tmp6&65535)*Larg1|0)+tmp5|0;
		tmp6=(tmp5>>>16)+((tmp6>>>16)*Larg1|0)|0;
		tmp3[Lgeptoindexphi]=(tmp6<<16)+(tmp5&65535)|0;
		tmp4=tmp4+1|0;
		tmp5=tmp6>>>16;
		if((tmp4|0)<(tmp0|0)){
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			continue;
		}
		break;
	}
	if((tmp5|0)!==0){
		if((tmp0|0)<(Larg0.i2|0)){
			tmp7=Larg0;
		}else{
			tmp4=Larg0.i1|0;
			tmp7={a0:null,i1:0,i2:0,i3:0,i4:0,a5:nullArray};
			tmp4=tmp4+1|0;
			tmp7.i1=tmp4;
			tmp4=1<<tmp4;
			tmp7.i2=tmp4;
			tmp3=new Int32Array((tmp4<<2)/4|0);
			tmp7.a5=tmp3;
			tmp7.i4=0;
			tmp7.i3=0;
			tmp7.i3=Larg0.i3|0;
			tmp7.i4=Larg0.i4|0;
			tmp4=Larg0.i4|0;
			if((tmp4|0)>0){
				tmp2=Larg0.a5;
				tmp6=0;
				while(1){
					tmp3[tmp6]=tmp2[tmp6]|0;
					tmp6=tmp6+1|0;
					if((tmp6|0)!==(tmp4|0))continue;
					break;
				}
			}
		}
		tmp3[tmp0]=tmp5;
		tmp7.i4=tmp0+1|0;
		return tmp7;
	}
	return Larg0;
}
function ___mcmp(Larg0,Larg1){
	var tmp0=null,tmp1=null,Lgeptoindex2=0,tmp3=0,Lgeptoindex8=0,tmp5=0;
	Lgeptoindex2=Larg1.i4|0;
	tmp3=(Larg0.i4|0)-Lgeptoindex2|0;
	if((tmp3|0)!==0)return tmp3|0;
	tmp0=Larg0.a5;
	tmp1=Larg1.a5;
	Lgeptoindex8=Lgeptoindex2-1|0;
	tmp5=tmp0[Lgeptoindex8]|0;
	Lgeptoindex2=Lgeptoindex2-1|0;
	tmp3=tmp1[Lgeptoindex2]|0;
	if((tmp5|0)===(tmp3|0))while(1){
		if((0+Lgeptoindex8|0)<=0)return 0|0;
		Lgeptoindex8=Lgeptoindex8-1|0;
		tmp5=tmp0[Lgeptoindex8]|0;
		Lgeptoindex2=Lgeptoindex2-1|0;
		tmp3=tmp1[Lgeptoindex2]|0;
		if((tmp5|0)===(tmp3|0))continue;
		break;
	}
	return (tmp5>>>0<tmp3>>>0? -1|0:1|0)|0;
}
function ___lshift(Larg0,Larg1){
	var tmp0=0,tmp1=null,tmp2=null,tmp3=null,tmp4=0,tmp5=0,Lgeptoindexphi4=0,Lgeptoindexphi8=0,Lgeptoindex5=0,Lgeptoindexphi=0,Lgeptoindexphi11=0,Lgeptoindexphi2=0,Lgeptoindex12=0,tmp13=0;
	Lgeptoindexphi=Larg0.i1|0;
	Lgeptoindexphi11=Larg0.i2|0;
	Lgeptoindexphi2=Larg1>>5;
	tmp0=(Larg0.i4|0)+Lgeptoindexphi2|0;
	if((tmp0|0)>=(Lgeptoindexphi11|0))while(1){
		Lgeptoindexphi11<<=1;
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if((tmp0|0)>=(Lgeptoindexphi11|0))continue;
		break;
	}
	tmp1={a0:null,i1:0,i2:0,i3:0,i4:0,a5:nullArray};
	tmp1.i1=Lgeptoindexphi;
	Lgeptoindexphi=1<<Lgeptoindexphi;
	tmp1.i2=Lgeptoindexphi;
	tmp2=new Int32Array((Lgeptoindexphi<<2)/4|0);
	tmp1.a5=tmp2;
	tmp1.i4=0;
	tmp1.i3=0;
	if((Lgeptoindexphi2|0)>0){
		Lgeptoindexphi11=0;
		Lgeptoindexphi=0;
		while(1){
			tmp2[Lgeptoindexphi]=0;
			Lgeptoindexphi11=Lgeptoindexphi11+1|0;
			if((Lgeptoindexphi11|0)!==(Lgeptoindexphi2|0)){
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				continue;
			}
			break;
		}
	}else{
		Lgeptoindexphi2=0;
	}
	tmp3=Larg0.a5;
	Lgeptoindexphi=Larg0.i4|0;
	Lgeptoindexphi11=Larg1&31;
	tmp4=tmp0+1|0;
	if((Lgeptoindexphi11|0)!==0){
		Lgeptoindex12=(((0+Lgeptoindexphi|0)>(0+1|0)?0+Lgeptoindexphi|0:0+1|0)*4)+(((0)*4)^ -1)|0;
		tmp5=32-Lgeptoindexphi11|0;
		Lgeptoindexphi8=Lgeptoindexphi2;
		tmp13=0;
		Lgeptoindexphi4=0;
		while(1){
			tmp2[Lgeptoindexphi8]=tmp3[Lgeptoindexphi4]<<Lgeptoindexphi11|tmp13;
			Lgeptoindex5=Lgeptoindexphi4+1|0;
			tmp13=tmp3[Lgeptoindexphi4]>>>tmp5;
			if((0+Lgeptoindex5|0)<(0+Lgeptoindexphi|0)){
				Lgeptoindexphi4=Lgeptoindex5;
				Lgeptoindexphi8=Lgeptoindexphi8+1|0;
				continue;
			}
			break;
		}
		tmp2[(0+Lgeptoindexphi2|0)+((Lgeptoindex12>>>2)+1|0)|0]=tmp13;
		tmp1.i4=((tmp13|0)!==0?tmp0+2|0:tmp4|0)-1|0;
		return tmp1;
	}else{
		Lgeptoindexphi11=0;
		while(1){
			Lgeptoindex12=Lgeptoindexphi11+1|0;
			tmp2[Lgeptoindexphi2]=tmp3[Lgeptoindexphi11]|0;
			if((0+Lgeptoindex12|0)<(0+Lgeptoindexphi|0)){
				Lgeptoindexphi11=Lgeptoindex12;
				Lgeptoindexphi2=Lgeptoindexphi2+1|0;
				continue;
			}
			break;
		}
		tmp1.i4=tmp4-1|0;
		return tmp1;
	}
}
function ___hi0bits(Larg0){
	var tmp0=0,tmp1=0;
	tmp0=Larg0>>>0>65535?0|0:16|0;
	tmp1=Larg0>>>0>65535?Larg0|0:Larg0<<16|0;
	if(tmp1>>>0<=16777215){
		tmp0=tmp0+8|0;
		tmp1<<=8;
	}
	if(tmp1>>>0<=268435455){
		tmp0=tmp0+4|0;
		tmp1<<=4;
	}
	if(tmp1>>>0<=1073741823){
		tmp0=tmp0+2|0;
		tmp1<<=2;
	}
	if((tmp1|0)>=0){
		if((tmp1&1073741824|0)===0)return 32|0;
		tmp0=tmp0+1|0;
	}
	return tmp0|0;
}
function ___pow5mult(Larg0,Larg1){
	var tmp0=0,tmp1=null,L$pph=null,L$pbe=null;
	tmp0=Larg1&3;
	if((tmp0|0)!==0){
		tmp1=___multadd(Larg0,___pow5mult$pp05[tmp0-1|0]|0,0);
	}else{
		tmp1=Larg0;
	}
	tmp0=Larg1>>2;
	if((tmp0|0)===0)return tmp1;
	L$pph=_impure_data.a9;
	a:{
		if(L$pph!==null){
			L$pph=L$pph.a2;
			if(L$pph!==null)break a;
		}else{
			L$pph={a0:null,i1:0,a2:null,a3:null};
			_impure_data.a9=L$pph;
			L$pph.i1=0;
			L$pph.a2=null;
			L$pph.a0=null;
			L$pph.a3=null;
		}
		L$pph={a0:null,i1:0,i2:0,i3:0,i4:0,a5:nullArray};
		L$pph.i1=1;
		L$pph.i2=2;
		L$pbe=new Int32Array(2);
		L$pph.a5=L$pbe;
		L$pph.i3=0;
		L$pbe[0]=625;
		L$pph.i4=1;
		_impure_data.a9.a2=L$pph;
		L$pph.a0=null;
	}
	while(1){
		if((tmp0&1|0)!==0){
			tmp1=___multiply(tmp1,L$pph);
		}
		tmp0>>=1;
		if((tmp0|0)!==0){
			L$pbe=L$pph.a0;
			if(L$pbe===null){
				L$pbe=___multiply(L$pph,L$pph);
				L$pph.a0=L$pbe;
				L$pbe.a0=null;
			}
			L$pph=L$pbe;
			continue;
		}
		break;
	}
	return tmp1;
}
function ___multiply(Larg0,Larg1){
	var tmp0=null,tmp1=null,Lgeptoindexphi6=0,Lgeptoindex25=0,tmp4=0,tmp5=0,tmp6=null,tmp7=null,Lgeptoindexphi28=0,Lgeptoindexphi=0,Lgeptoindexphi9=0,Lgeptoindexphi13=0,tmp12=0,tmp13=0,Lgeptoindexphi17=0,tmp15=0,Lgeptoindexphi20=0;
	tmp4=Larg0.i4|0;
	tmp5=Larg1.i4|0;
	tmp6=(tmp4|0)<(tmp5|0)?Larg0:Larg1;
	tmp7=(tmp4|0)<(tmp5|0)?Larg1:Larg0;
	tmp4=tmp7.i4|0;
	tmp5=tmp6.i4|0;
	Lgeptoindexphi28=tmp5+tmp4|0;
	Lgeptoindexphi=(tmp7.i1|0)+((Lgeptoindexphi28|0)>(tmp7.i2|0)?1:0)|0;
	tmp0={a0:null,i1:0,i2:0,i3:0,i4:0,a5:nullArray};
	tmp0.i1=Lgeptoindexphi;
	Lgeptoindexphi=1<<Lgeptoindexphi;
	tmp0.i2=Lgeptoindexphi;
	tmp1=new Int32Array((Lgeptoindexphi<<2)/4|0);
	tmp0.a5=tmp1;
	tmp0.i4=0;
	tmp0.i3=0;
	if((Lgeptoindexphi28|0)>0){
		Lgeptoindexphi=0;
		while(1){
			tmp1[Lgeptoindexphi]=0;
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			if((0+Lgeptoindexphi|0)<(0+Lgeptoindexphi28|0))continue;
			break;
		}
	}
	tmp7=tmp7.a5;
	tmp6=tmp6.a5;
	if((tmp5|0)>0){
		Lgeptoindexphi=((((0+tmp4|0)>(0+1|0)?0+tmp4|0:0+1|0)*4)+(((0)*4)^ -1)>>>2)+1|0;
		Lgeptoindexphi9=0;
		Lgeptoindexphi6=0;
		while(1){
			Lgeptoindexphi13=tmp6[Lgeptoindexphi9]|0;
			tmp12=Lgeptoindexphi13&65535;
			if((tmp12|0)!==0){
				Lgeptoindexphi17=Lgeptoindexphi6;
				tmp13=0;
				Lgeptoindexphi13=0;
				while(1){
					tmp15=tmp7[Lgeptoindexphi13]|0;
					Lgeptoindexphi20=tmp1[Lgeptoindexphi17]|0;
					tmp13=((Lgeptoindexphi20&65535)+tmp13|0)+((tmp15&65535)*tmp12|0)|0;
					Lgeptoindexphi13=Lgeptoindexphi13+1|0;
					Lgeptoindexphi20=(((tmp15>>>16)*tmp12|0)+(Lgeptoindexphi20>>>16)|0)+(tmp13>>>16)|0;
					tmp1[Lgeptoindexphi17]=Lgeptoindexphi20<<16|tmp13&65535;
					tmp13=Lgeptoindexphi20>>>16;
					if((0+Lgeptoindexphi13|0)<(0+tmp4|0)){
						Lgeptoindexphi17=Lgeptoindexphi17+1|0;
						continue;
					}
					break;
				}
				tmp1[Lgeptoindexphi]=tmp13;
				Lgeptoindexphi13=tmp6[Lgeptoindexphi9]|0;
			}
			Lgeptoindexphi13>>>=16;
			if((Lgeptoindexphi13|0)!==0){
				tmp12=tmp1[Lgeptoindexphi6]|0;
				tmp15=tmp12;
				Lgeptoindexphi17=Lgeptoindexphi6;
				tmp13=0;
				Lgeptoindexphi20=0;
				while(1){
					tmp13=(tmp13+(tmp12>>>16)|0)+((tmp7[Lgeptoindexphi20]&65535)*Lgeptoindexphi13|0)|0;
					Lgeptoindex25=Lgeptoindexphi17+1|0;
					tmp1[Lgeptoindexphi17]=tmp13<<16|tmp15&65535;
					Lgeptoindexphi17=Lgeptoindexphi20+1|0;
					tmp12=tmp1[Lgeptoindex25]|0;
					tmp15=((tmp12&65535)+(tmp13>>>16)|0)+((tmp7[Lgeptoindexphi20]>>>16)*Lgeptoindexphi13|0)|0;
					if((0+Lgeptoindexphi17|0)<(0+tmp4|0)){
						Lgeptoindexphi20=Lgeptoindexphi17;
						tmp13=tmp15>>>16;
						Lgeptoindexphi17=Lgeptoindex25;
						continue;
					}
					break;
				}
				tmp1[Lgeptoindexphi]=tmp15;
			}
			Lgeptoindexphi9=Lgeptoindexphi9+1|0;
			if((0+Lgeptoindexphi9|0)<(0+tmp5|0)){
				Lgeptoindexphi6=Lgeptoindexphi6+1|0;
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				continue;
			}
			break;
		}
	}
	if((Lgeptoindexphi28|0)<=0){
		tmp0.i4=Lgeptoindexphi28;
		return tmp0;
	}
	tmp4=Lgeptoindexphi28;
	while(1){
		Lgeptoindexphi28=Lgeptoindexphi28-1|0;
		if((tmp1[Lgeptoindexphi28]|0)!==0){
			tmp0.i4=tmp4;
			return tmp0;
		}
		tmp5=tmp4-1|0;
		if((tmp4|0)>1){
			tmp4=tmp5;
			continue;
		}
		break;
	}
	tmp0.i4=tmp5;
	return tmp0;
}
function ___d2b(Larg0,Larg1,Marg1,Larg2,Marg2){
	var tmp0=null,LmergedArray=null,tmp2=null,tmp3=null,tmp4=0,tmp5=0,tmp6=0,tmp7=0;
	tmp0={d:new DataView(new ArrayBuffer(8)),o:0};
	LmergedArray=new Int32Array(2);
	tmp0.d.setFloat64(tmp0.o,Larg0,true);
	tmp2={a0:null,i1:0,i2:0,i3:0,i4:0,a5:nullArray};
	tmp2.i1=1;
	tmp2.i2=2;
	tmp3=new Int32Array(2);
	tmp2.a5=tmp3;
	tmp2.i4=0;
	tmp2.i3=0;
	tmp5=tmp0.d.getInt32(1*4+tmp0.o,true)|0;
	tmp6=tmp5&1048575;
	LmergedArray[1]=tmp6;
	tmp5&=2147483647;
	tmp0.d.setInt32(1*4+tmp0.o,tmp5,true);
	tmp5>>>=20;
	if((tmp5|0)!==0){
		tmp6|=1048576;
		LmergedArray[1]=tmp6;
	}
	tmp7=tmp0.d.getInt32(tmp0.o,true)|0;
	if((tmp7|0)!==0){
		LmergedArray[0]=tmp7;
		tmp7=___lo0bits(LmergedArray,0)|0;
		tmp4=LmergedArray[0]|0;
		if((tmp7|0)!==0){
			tmp3[0]=tmp6<<(32-tmp7|0)|tmp4;
			tmp6>>>=tmp7;
			LmergedArray[1]=tmp6;
		}else tmp3[0]=tmp4;
		tmp3[1]=tmp6;
		tmp6=(tmp6|0)!==0?2|0:1|0;
		tmp2.i4=tmp6;
	}else{
		tmp6=___lo0bits(LmergedArray,1)|0;
		tmp3[0]=LmergedArray[1]|0;
		tmp2.i4=1;
		tmp7=tmp6+32|0;
		tmp6=1;
	}
	if((tmp5|0)!==0){
		Larg1[Marg1]=(tmp5-1075|0)+tmp7|0;
		tmp5=53-tmp7|0;
	}else{
		Larg1[Marg1]=tmp7-1074|0;
		tmp7=___hi0bits(tmp3[tmp6-1|0]|0)|0;
		tmp5=(tmp6<<5)-tmp7|0;
	}
	Larg2[Marg2]=tmp5;
	return tmp2;
}
function ___lo0bits(Larg0,Marg0){
	var tmp0=0,tmp1=0;
	tmp0=Larg0[Marg0]|0;
	if((tmp0&7|0)!==0){
		if((tmp0&1|0)!==0)return 0|0;
		if((tmp0&2|0)!==0){
			Larg0[Marg0]=tmp0>>>1;
			return 1|0;
		}
		Larg0[Marg0]=tmp0>>>2;
		return 2|0;
	}
	tmp1=(tmp0&65535|0)!==0?tmp0|0:tmp0>>>16|0;
	tmp0=(tmp0&65535|0)!==0?0|0:16|0;
	if((tmp1&255|0)===0){
		tmp0=tmp0+8|0;
		tmp1>>>=8;
	}
	if((tmp1&15|0)===0){
		tmp0=tmp0+4|0;
		tmp1>>>=4;
	}
	if((tmp1&3|0)===0){
		tmp0=tmp0+2|0;
		tmp1>>>=2;
	}
	if((tmp1&1|0)===0){
		tmp1>>>=1;
		if((tmp1|0)===0)return 32|0;
		tmp0=tmp0+1|0;
	}
	Larg0[Marg0]=tmp1;
	return tmp0|0;
}
function ___ssputs_r(Larg0,Larg1,Larg2,Marg2,Larg3){
	var L$poptgep$poptgep23$poptgepsqueezed=null,tmp1=0,Lgeptoindexphi14=0,tmp3=null,tmp3o=0,Lgeptoindexphi=0,Lgeptoindexphi2=0,tmp6=null,tmp6o=0;
	Lgeptoindexphi14=Larg1.i2|0;
	if(Lgeptoindexphi14>>>0<=Larg3>>>0){
		Lgeptoindexphi=Larg1.i3<<16>>16;
		if((Lgeptoindexphi&1152|0)!==0){
			tmp3o=Larg1.a0o;
			tmp3=Larg1.a0;
			L$poptgep$poptgep23$poptgepsqueezed=Larg1.a4;
			tmp6o=L$poptgep$poptgep23$poptgepsqueezed.a0o;
			tmp6=L$poptgep$poptgep23$poptgepsqueezed.a0;
			tmp1=(tmp3o)-(tmp6o)|0;
			Lgeptoindexphi2=(Larg3+1|0)+tmp1|0;
			Lgeptoindexphi14=((L$poptgep$poptgep23$poptgepsqueezed.i1|0)*3|0)/2|0;
			Lgeptoindexphi2=Lgeptoindexphi14>>>0<Lgeptoindexphi2>>>0?Lgeptoindexphi2|0:Lgeptoindexphi14|0;
			a:{
				if((Lgeptoindexphi&1024|0)!==0){
					tmp3=new Uint8Array(Lgeptoindexphi2/1|0);
					if(tmp3!==nullArray||0!==0){
						if((tmp1|0)!==0){
							tmp6o=L$poptgep$poptgep23$poptgepsqueezed.a0o;
							tmp6=L$poptgep$poptgep23$poptgepsqueezed.a0;
							Lgeptoindexphi=0;
							Lgeptoindexphi14=0;
							while(1){
								tmp3[Lgeptoindexphi]=tmp6[tmp6o+Lgeptoindexphi14|0]|0;
								Lgeptoindexphi=Lgeptoindexphi+1|0;
								if(tmp3!==tmp3||(0+tmp1|0)!==(0+Lgeptoindexphi|0)){
									Lgeptoindexphi14=Lgeptoindexphi14+1|0;
									continue;
								}
								break;
							}
						}
						Larg1.i3=Larg1.i3& -1153|128;
						break a;
					}
					Larg0.i0=12;
				}else{
					if(tmp6!==nullArray||tmp6o!==0){
						tmp3=(function(){var __old__=tmp6;
							var __ret__=new Uint8Array(Lgeptoindexphi2/1|0);
							__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));
							return __ret__;})();
					}else{
						tmp3=new Uint8Array(Lgeptoindexphi2/1|0);
					}
					if(tmp3!==nullArray||0!==0)break a;
					Larg0.i0=12;
				}
				Larg1.i3=Larg1.i3|64;
				return  -1|0;
			}
			L$poptgep$poptgep23$poptgepsqueezed.a0=tmp3;
			L$poptgep$poptgep23$poptgepsqueezed.a0o=0;
			Larg1.a0=tmp3;
			Larg1.a0o=0+tmp1|0;
			L$poptgep$poptgep23$poptgepsqueezed.i1=Lgeptoindexphi2;
			Larg1.i2=Lgeptoindexphi2-tmp1|0;
			Lgeptoindexphi14=Larg3;
		}
	}
	Lgeptoindexphi14=Lgeptoindexphi14>>>0>Larg3>>>0?Larg3|0:Lgeptoindexphi14|0;
	tmp3o=Larg1.a0o;
	tmp3=Larg1.a0;
	if((Lgeptoindexphi14|0)!==0)if(tmp3o>Marg2){
		Lgeptoindexphi=Lgeptoindexphi14;
		Lgeptoindexphi2=Lgeptoindexphi14;
		while(1){
			Lgeptoindexphi2=Lgeptoindexphi2-1|0;
			Lgeptoindexphi=Lgeptoindexphi-1|0;
			tmp3[tmp3o+Lgeptoindexphi2|0]=Larg2[Marg2+Lgeptoindexphi|0]|0;
			if(tmp3!==tmp3||tmp3o!==(tmp3o+Lgeptoindexphi2|0))continue;
			break;
		}
	}else{
		Lgeptoindexphi2=0;
		Lgeptoindexphi=0;
		while(1){
			tmp3[tmp3o+Lgeptoindexphi2|0]=Larg2[Marg2+Lgeptoindexphi|0]|0;
			Lgeptoindexphi2=Lgeptoindexphi2+1|0;
			if(tmp3!==tmp3||(tmp3o+Lgeptoindexphi14|0)!==(tmp3o+Lgeptoindexphi2|0)){
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				continue;
			}
			break;
		}
	}
	Larg1.i2=(Larg1.i2|0)-Lgeptoindexphi14|0;
	tmp3o=Larg1.a0o;
	tmp3=Larg1.a0;
	Larg1.a0=tmp3;
	Larg1.a0o=tmp3o+Lgeptoindexphi14|0;
	return 0|0;
}
function __ZNSt9money_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEED0Ev(Larg0){
}
function __ZNSt9money_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEED2Ev(Larg0){
}
function __ZNKSt9money_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_bRSt8ios_basecRKSs(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6){
	var tmp0=null,LmergedArray=null,tmp2=null,tmp3=null,tmp4=null,tmp5=null,tmp6=0,tmp7=null,tmp8=0,tmp9=null,LmergedArray29=null,tmp11=0,L$psink=0,tmp13=0,tmp14=null,tmp14o=0,tmp15=null;
	tmp0=Larg4.a7.a0;
	tmp0.i1=(tmp0.i1|0)+1|0;
	if((__ZNSt5ctypeIcE2idE.i0&255)!==0){
		tmp8=__ZNSt5ctypeIcE2idE.i1|0;
	}else{
		tmp8=(__ZNSt6locale2id9__next_idE|0)+1|0;
		__ZNSt6locale2id9__next_idE=tmp8;
		__ZNSt5ctypeIcE2idE.i1=tmp8;
		__ZNSt5ctypeIcE2idE.i0=1;
	}
	tmp9=tmp0.a2.a0;
	tmp9=tmp9[tmp8-1|0];
	if((Larg6.i1|0)!==0){
		LmergedArray29=Larg6.a2;
		tmp8=LmergedArray29[0]|0;
		tmp11=tmp9.a0.a8(tmp9,45)|0;
		tmp8=(tmp8&255)===(tmp11&255)?1:0;
	}else{
		tmp8=0;
	}
	LmergedArray=new Uint8Array(106);
	tmp2={i0:0,i1:0,a2:nullArray};
	tmp2.i0=0;
	tmp2.i1=0;
	tmp2.a2=nullArray;
	tmp3={i0:0,i1:0,a2:nullArray};
	tmp3.i0=0;
	tmp3.i1=0;
	tmp3.a2=nullArray;
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp4.i0=0;
	tmp4.i1=0;
	tmp4.a2=nullArray;
	tmp5=[0];
	__ZNSt11__money_putIcE13__gather_infoEbbRKSt6localeRNSt10money_base7patternERcS7_RSsS8_S8_Ri(Larg3,tmp8,tmp0,LmergedArray,0,LmergedArray,4,LmergedArray,5,tmp2,tmp3,tmp4,tmp5,0);
	tmp11=Larg6.i1|0;
	tmp6=tmp5[0]|0;
	if((tmp11|0)>(tmp6|0)){
		L$psink=tmp4.i1|0;
		tmp13=tmp3.i1|0;
		L$psink=(L$psink+(tmp11-tmp6<<1)|0)+tmp13|0;
		tmp13=1;
	}else{
		L$psink=tmp4.i1|0;
		tmp13=tmp3.i1|0;
		L$psink=tmp13+L$psink|0;
		tmp13=2;
	}
	L$psink=(L$psink+tmp6|0)+tmp13|0;
	if(L$psink>>>0>100){
		tmp14=new Uint8Array(L$psink/1|0);
		tmp11=Larg6.i1|0;
		tmp14o=0;
		tmp14=tmp14;
	}else{
		tmp14o=6;
		tmp14=LmergedArray;
	}
	LmergedArray29=[nullObj,nullObj];
	tmp15=Larg6.a2;
	__ZNSt11__money_putIcE8__formatEPcRS1_S2_jPKcS4_RKSt5ctypeIcEbRKNSt10money_base7patternEccRKSsSE_SE_i(tmp14,tmp14o,LmergedArray29,0,LmergedArray29,1,Larg4.i1|0,tmp15,0,tmp15,0+tmp11|0,tmp9,tmp8,LmergedArray,0,LmergedArray[4]|0,LmergedArray[5]|0,tmp2,tmp3,tmp4,tmp6);
	tmp15=LmergedArray29[0];
	tmp9=LmergedArray29[1];
	tmp7={a0:null};
	tmp7.a0=Larg2.a0;
	__ZSt16__pad_and_outputIcSt11char_traitsIcEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(Larg0,tmp7,tmp14,tmp14o,tmp15.d,tmp15.o,tmp9.d,tmp9.o,Larg4,Larg5);
	tmp8=tmp0.i1|0;
	tmp0.i1=tmp8-1|0;
	if((tmp8|0)===0)tmp0.a0.a3(tmp0);
}
function __ZSt16__pad_and_outputIcSt11char_traitsIcEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4,Larg5,Larg6){
	var tmp0=null,tmp1=0,tmp2=null,Lgeptoindexphi=0,tmp4=0,tmp5=0;
	tmp0=Larg1.a0;
	a:if(tmp0!==null){
		Lgeptoindexphi=(Marg2);
		tmp1=(Marg4);
		tmp4=tmp1-Lgeptoindexphi|0;
		tmp5=Larg5.i3|0;
		tmp4=(tmp5|0)>(tmp4|0)?tmp5-tmp4|0:0|0;
		tmp5=(Marg3);
		Lgeptoindexphi=tmp5-Lgeptoindexphi|0;
		if((Lgeptoindexphi|0)>0)if((tmp0.a0.a13(tmp0,Larg2,Marg2,Lgeptoindexphi)|0|0)!==(Lgeptoindexphi|0)){
			Larg1.a0=null;
			Larg0.a0=null;
			break a;
		}
		if((tmp4|0)>0){
			tmp2=new Uint8Array((tmp4+16& -16)/1|0);
			Lgeptoindexphi=0;
			while(1){
				tmp2[Lgeptoindexphi]=Larg6;
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				if(tmp2!==tmp2||(0+tmp4|0)!==(0+Lgeptoindexphi|0))continue;
				break;
			}
			tmp2[tmp4]=0;
			if((tmp0.a0.a13(tmp0,tmp2,0,tmp4)|0|0)!==(tmp4|0)){
				Larg1.a0=null;
				Larg0.a0=null;
				break a;
			}
		}
		tmp4=tmp1-tmp5|0;
		if((tmp4|0)>0)if((tmp0.a0.a13(tmp0,Larg3,Marg3,tmp4)|0|0)!==(tmp4|0)){
			Larg1.a0=null;
			Larg0.a0=null;
			break a;
		}
		Larg5.i3=0;
		Larg0.a0=Larg1.a0;
	}else Larg0.a0=null;
}
function __ZNSt11__money_putIcE8__formatEPcRS1_S2_jPKcS4_RKSt5ctypeIcEbRKNSt10money_base7patternEccRKSsSE_SE_i(Larg0,Marg0,Larg1,Marg1,Larg2,Marg2,Larg3,Larg4,Marg4,Larg5,Marg5,Larg6,Larg7,Larg8,Marg8,Larg9,Larg10,Larg11,Larg12,Larg13,Larg14){
	var tmp0=0,tmp1=0,tmp2=0,Lgeptoindexphi21=0,tmp4=0,tmp5=null,tmp6=null,tmp6o=0,L$pph=0,Lgeptoindexphi=0,Lgeptoindexphi5=0,tmp10=null,tmp10o=0,tmp11=0;
	Larg2[Marg2]={d:Larg0,o:Marg0};
	Lgeptoindexphi21=Larg14^ -1;
	tmp0=( -2-Larg14|0)-((Lgeptoindexphi21|0)>-2?Lgeptoindexphi21|0: -2|0)|0;
	tmp1=(Larg14|0)>0?1:0;
	tmp2=(Larg3&512|0)!==0?1:0;
	tmp4=0;
	Lgeptoindexphi21=0;
	while(1){
		a:switch(Larg8[Marg8+tmp4|0]<<24>>24|0){
			case 0:
			tmp5=Larg2[Marg2];
			Larg1[Marg1]=tmp5;
			break a;
			case 1:
			tmp5=Larg2[Marg2];
			Larg1[Marg1]=tmp5;
			L$pph=Larg6.a0.a8(Larg6,32)|0;
			tmp5=Larg2[Marg2];
			Larg2[Marg2]={d:tmp5.d,o:tmp5.o+1|0};
			tmp5.d[tmp5.o]=L$pph;
			break a;
			case 3:
			if((Larg13.i1|0)===0)break a;
			tmp5=Larg13.a2;
			L$pph=tmp5[0]|0;
			tmp5=Larg2[Marg2];
			Larg2[Marg2]={d:tmp5.d,o:tmp5.o+1|0};
			tmp5.d[tmp5.o]=L$pph;
			break a;
			case 2:
			L$pph=Larg12.i1|0;
			if(!(tmp2))break a;
			if((L$pph|0)===0)break a;
			tmp5=Larg12.a2;
			tmp6=Larg2[Marg2];
			Lgeptoindexphi5=0;
			Lgeptoindexphi=0;
			while(1){
				tmp6.d[tmp6.o+Lgeptoindexphi5|0]=tmp5[Lgeptoindexphi]|0;
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				if(tmp5===tmp5&&(0+Lgeptoindexphi|0)===(0+L$pph|0)){
					Larg2[Marg2]={d:tmp6.d,o:tmp6.o+L$pph|0};
					break a;
				}
				Lgeptoindexphi5=Lgeptoindexphi5+1|0;
				continue;
			}
			case 4:
			tmp5=Larg2[Marg2];
			if(Larg7){
				Lgeptoindexphi21=Lgeptoindexphi21+1|0;
			}
			L$pph=(Marg4+Lgeptoindexphi21|0);
			if((Marg4+Lgeptoindexphi21|0)<Marg5){
				tmp6o=Marg4+Lgeptoindexphi21|0;
				tmp6=Larg4;
				while(1){
					Lgeptoindexphi=tmp6[tmp6o]|0;
					if(Lgeptoindexphi<<24>-16777216){
						tmp10=Larg6.a2;
						if((tmp10[1+(Lgeptoindexphi<<24>>24)|0]&4)!==0){
							if((tmp6o+1|0)<Marg5){
								tmp6o=tmp6o+1|0;
								tmp6=tmp6;
								continue;
							}
							tmp6o=tmp6o+1|0;
							tmp6=tmp6;
						}
					}
					break;
				}
				Lgeptoindexphi=(tmp6o);
			}else{
				tmp6o=Marg4+Lgeptoindexphi21|0;
				tmp6=Larg4;
				Lgeptoindexphi=L$pph;
			}
			if(tmp1){
				b:{
					if(tmp6o>(Marg4+Lgeptoindexphi21|0)){
						L$pph=L$pph-Lgeptoindexphi|0;
						Lgeptoindexphi5=tmp0>>>0>L$pph>>>0?tmp0|0:L$pph|0;
						Lgeptoindexphi=tmp6[tmp6o+ -1|0]|0;
						Larg2[Marg2]={d:tmp5.d,o:tmp5.o+1|0};
						tmp5.d[tmp5.o]=Lgeptoindexphi;
						Lgeptoindexphi=(tmp6o+ -1|0)>(Marg4+Lgeptoindexphi21|0)?1:0;
						if((Larg14|0)>1){
							if(Lgeptoindexphi){
								L$pph=Larg14;
								Lgeptoindexphi=0;
								while(1){
									tmp10=Larg2[Marg2];
									Lgeptoindexphi=Lgeptoindexphi-1|0;
									tmp11=tmp6[(tmp6o+ -1|0)+Lgeptoindexphi|0]|0;
									Larg2[Marg2]={d:tmp10.d,o:tmp10.o+1|0};
									tmp10.d[tmp10.o]=tmp11;
									tmp11=((tmp6o+ -1|0)+Lgeptoindexphi|0)>(Marg4+Lgeptoindexphi21|0)?1:0;
									if((L$pph|0)>2){
										if(tmp11){
											L$pph=L$pph-1|0;
											continue;
										}
										Lgeptoindexphi=(L$pph|0)>2?1:0;
									}else{
										Lgeptoindexphi=(L$pph|0)>2?1:0;
									}
									break;
								}
							}else{
								Lgeptoindexphi=(Larg14|0)>1?1:0;
							}
						}else{
							Lgeptoindexphi=(Larg14|0)>1?1:0;
						}
						L$pph=Lgeptoindexphi5+Larg14|0;
						if(!(Lgeptoindexphi)){
							tmp6o=tmp6o+Lgeptoindexphi5|0;
							tmp6=tmp6;
							Lgeptoindexphi=0;
							break b;
						}
						tmp6o=tmp6o+Lgeptoindexphi5|0;
						tmp6=tmp6;
					}else{
						L$pph=Larg14;
					}
					Lgeptoindexphi=Larg6.a0.a8(Larg6,48)|0;
				}
				tmp10=Larg2[Marg2];
				Larg2[Marg2]={d:tmp10.d,o:tmp10.o+1|0};
				if((L$pph|0)>0)while(1){
					tmp10o=tmp10.o;
					tmp10=tmp10.d;
					tmp10[tmp10o]=Lgeptoindexphi;
					tmp10=Larg2[Marg2];
					Larg2[Marg2]={d:tmp10.d,o:tmp10.o+1|0};
					if((L$pph|0)>1){
						L$pph=L$pph-1|0;
						continue;
					}
					break;
				}
				tmp10o=tmp10.o;
				tmp10=tmp10.d;
				tmp10[tmp10o]=Larg9;
			}
			if(tmp6===Larg4&&tmp6o===(Marg4+Lgeptoindexphi21|0)){
				L$pph=Larg6.a0.a8(Larg6,48)|0;
				tmp6=Larg2[Marg2];
				Larg2[Marg2]={d:tmp6.d,o:tmp6.o+1|0};
				tmp6.d[tmp6.o]=L$pph;
			}else{
				if((Larg11.i1|0)!==0){
					tmp10=Larg11.a2;
					L$pph=tmp10[0]|0;
					L$pph=L$pph<<24>>24;
				}else{
					L$pph=-1;
				}
				Lgeptoindexphi5=0;
				Lgeptoindexphi=0;
				while(1){
					if((Lgeptoindexphi5|0)===(L$pph|0)){
						tmp10=Larg2[Marg2];
						Larg2[Marg2]={d:tmp10.d,o:tmp10.o+1|0};
						tmp10.d[tmp10.o]=Larg10;
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						if(Lgeptoindexphi>>>0<Larg11.i1>>>0){
							tmp10=Larg11.a2;
							L$pph=tmp10[Lgeptoindexphi]|0;
							L$pph=(L$pph&255)===127? -1|0:L$pph<<24>>24|0;
							Lgeptoindexphi5=0;
						}else{
							Lgeptoindexphi5=0;
						}
					}
					tmp11=tmp6[tmp6o+ -1|0]|0;
					tmp10=Larg2[Marg2];
					Larg2[Marg2]={d:tmp10.d,o:tmp10.o+1|0};
					tmp10.d[tmp10.o]=tmp11;
					if(tmp6!==Larg4||(tmp6o+ -1|0)!==(Marg4+Lgeptoindexphi21|0)){
						tmp6o=tmp6o+ -1|0;
						tmp6=tmp6;
						Lgeptoindexphi5=Lgeptoindexphi5+1|0;
						continue;
					}
					break;
				}
			}
			tmp6=Larg2[Marg2];
			if(tmp5.d===tmp6.d&&tmp5.o===tmp6.o)break a;
			if((tmp6.o+ -1|0)<=tmp5.o)break a;
			Lgeptoindexphi=0;
			L$pph=-1;
			while(1){
				Lgeptoindexphi5=tmp5.d[tmp5.o+Lgeptoindexphi|0]|0;
				tmp5.d[tmp5.o+Lgeptoindexphi|0]=tmp6.d[tmp6.o+L$pph|0]|0;
				tmp6.d[tmp6.o+L$pph|0]=Lgeptoindexphi5;
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				L$pph=L$pph-1|0;
				if((tmp5.o+Lgeptoindexphi|0)<(tmp6.o+L$pph|0))continue;
				break;
			}
			break a;
			default:
		}
		tmp4=tmp4+1|0;
		if((tmp4|0)!==4)continue;
		Lgeptoindexphi21=Larg13.i1|0;
		if(Lgeptoindexphi21>>>0>1){
			tmp5=Larg13.a2;
			tmp6=Larg2[Marg2];
			Lgeptoindexphi=0;
			L$pph=1;
			while(1){
				tmp6.d[tmp6.o+Lgeptoindexphi|0]=tmp5[L$pph]|0;
				L$pph=L$pph+1|0;
				if(tmp5!==tmp5||(0+L$pph|0)!==(0+Lgeptoindexphi21|0)){
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					continue;
				}
				break;
			}
			Larg2[Marg2]={d:tmp6.d,o:tmp6.o+(Lgeptoindexphi21-1|0)|0};
		}
		a:{
			switch(Larg3&176){
				case 32:
				tmp5=Larg2[Marg2];
				break;
				case 16:
				break a;
				default:
				tmp5={d:Larg0,o:Marg0};
			}
			Larg1[Marg1]=tmp5;
		}
		break;
	}
}
function __ZNSt11__money_putIcE13__gather_infoEbbRKSt6localeRNSt10money_base7patternERcS7_RSsS8_S8_Ri(Larg0,Larg1,L$p0$p0$pval,Larg3,Marg3,Larg4,Marg4,Larg5,Marg5,Larg6,Larg7,Larg8,Larg9,Marg9){
	var tmp0=null,L$poptgepsqueezed150=null,tmp2=null;
	L$poptgepsqueezed150=L$p0$p0$pval.a2;
	tmp2=new Uint8Array(4);
	tmp0={i0:0,i1:0,a2:nullArray};
	if(Larg0){
		L$poptgepsqueezed150=L$poptgepsqueezed150.a0;
		L$poptgepsqueezed150=L$poptgepsqueezed150[(__ZNSt10moneypunctIcLb1EE2idE$p1|0)-1|0];
		if(Larg1){
			L$poptgepsqueezed150.a0.a12(tmp2,0,L$poptgepsqueezed150);
			Larg3[Marg3]=tmp2[0]|0;
			Larg3[Marg3+1|0]=tmp2[1]|0;
			Larg3[Marg3+2|0]=tmp2[2]|0;
			Larg3[Marg3+3|0]=tmp2[3]|0;
			L$poptgepsqueezed150.a0.a9(tmp0,L$poptgepsqueezed150);
			tmp2=Larg8.a2;
			if(tmp2!==nullArray||0!==0)tmp2[0]=0;
			Larg8.i1=0;
			__ZNSs7reserveEj(Larg8);
			Larg8.i0=tmp0.i0|0;
			Larg8.i1=tmp0.i1|0;
			tmp2=tmp0.a2;
			Larg8.a2=tmp2;
		}else{
			L$poptgepsqueezed150.a0.a11(tmp2,0,L$poptgepsqueezed150);
			Larg3[Marg3]=tmp2[0]|0;
			Larg3[Marg3+1|0]=tmp2[1]|0;
			Larg3[Marg3+2|0]=tmp2[2]|0;
			Larg3[Marg3+3|0]=tmp2[3]|0;
			L$poptgepsqueezed150.a0.a8(tmp0,L$poptgepsqueezed150);
			tmp2=Larg8.a2;
			if(tmp2!==nullArray||0!==0)tmp2[0]=0;
			Larg8.i1=0;
			__ZNSs7reserveEj(Larg8);
			Larg8.i0=tmp0.i0|0;
			Larg8.i1=tmp0.i1|0;
			tmp2=tmp0.a2;
			Larg8.a2=tmp2;
		}
		Larg4[Marg4]=L$poptgepsqueezed150.a0.a4(L$poptgepsqueezed150)|0;
		Larg5[Marg5]=L$poptgepsqueezed150.a0.a5(L$poptgepsqueezed150)|0;
		L$poptgepsqueezed150.a0.a6(tmp0,L$poptgepsqueezed150);
		tmp2=Larg6.a2;
		if(tmp2!==nullArray||0!==0)tmp2[0]=0;
		Larg6.i1=0;
		__ZNSs7reserveEj(Larg6);
		Larg6.i0=tmp0.i0|0;
		Larg6.i1=tmp0.i1|0;
		tmp2=tmp0.a2;
		Larg6.a2=tmp2;
		L$poptgepsqueezed150.a0.a7(tmp0,L$poptgepsqueezed150);
		tmp2=Larg7.a2;
		if(tmp2!==nullArray||0!==0)tmp2[0]=0;
		Larg7.i1=0;
		__ZNSs7reserveEj(Larg7);
		Larg7.i0=tmp0.i0|0;
		Larg7.i1=tmp0.i1|0;
		tmp2=tmp0.a2;
		Larg7.a2=tmp2;
		Larg9[Marg9]=L$poptgepsqueezed150.a0.a10(L$poptgepsqueezed150)|0;
		return;
	}
	L$poptgepsqueezed150=L$poptgepsqueezed150.a0;
	L$poptgepsqueezed150=L$poptgepsqueezed150[(__ZNSt10moneypunctIcLb0EE2idE$p1|0)-1|0];
	if(Larg1){
		L$poptgepsqueezed150.a0.a12(tmp2,0,L$poptgepsqueezed150);
		Larg3[Marg3]=tmp2[0]|0;
		Larg3[Marg3+1|0]=tmp2[1]|0;
		Larg3[Marg3+2|0]=tmp2[2]|0;
		Larg3[Marg3+3|0]=tmp2[3]|0;
		L$poptgepsqueezed150.a0.a9(tmp0,L$poptgepsqueezed150);
		tmp2=Larg8.a2;
		if(tmp2!==nullArray||0!==0)tmp2[0]=0;
		Larg8.i1=0;
		__ZNSs7reserveEj(Larg8);
		Larg8.i0=tmp0.i0|0;
		Larg8.i1=tmp0.i1|0;
		tmp2=tmp0.a2;
		Larg8.a2=tmp2;
	}else{
		L$poptgepsqueezed150.a0.a11(tmp2,0,L$poptgepsqueezed150);
		Larg3[Marg3]=tmp2[0]|0;
		Larg3[Marg3+1|0]=tmp2[1]|0;
		Larg3[Marg3+2|0]=tmp2[2]|0;
		Larg3[Marg3+3|0]=tmp2[3]|0;
		L$poptgepsqueezed150.a0.a8(tmp0,L$poptgepsqueezed150);
		tmp2=Larg8.a2;
		if(tmp2!==nullArray||0!==0)tmp2[0]=0;
		Larg8.i1=0;
		__ZNSs7reserveEj(Larg8);
		Larg8.i0=tmp0.i0|0;
		Larg8.i1=tmp0.i1|0;
		tmp2=tmp0.a2;
		Larg8.a2=tmp2;
	}
	Larg4[Marg4]=L$poptgepsqueezed150.a0.a4(L$poptgepsqueezed150)|0;
	Larg5[Marg5]=L$poptgepsqueezed150.a0.a5(L$poptgepsqueezed150)|0;
	L$poptgepsqueezed150.a0.a6(tmp0,L$poptgepsqueezed150);
	tmp2=Larg6.a2;
	if(tmp2!==nullArray||0!==0)tmp2[0]=0;
	Larg6.i1=0;
	__ZNSs7reserveEj(Larg6);
	Larg6.i0=tmp0.i0|0;
	Larg6.i1=tmp0.i1|0;
	tmp2=tmp0.a2;
	Larg6.a2=tmp2;
	L$poptgepsqueezed150.a0.a7(tmp0,L$poptgepsqueezed150);
	tmp2=Larg7.a2;
	if(tmp2!==nullArray||0!==0)tmp2[0]=0;
	Larg7.i1=0;
	__ZNSs7reserveEj(Larg7);
	Larg7.i0=tmp0.i0|0;
	Larg7.i1=tmp0.i1|0;
	tmp2=tmp0.a2;
	Larg7.a2=tmp2;
	Larg9[Marg9]=L$poptgepsqueezed150.a0.a10(L$poptgepsqueezed150)|0;
}
function __ZNKSt9money_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_bRSt8ios_basece(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6){
	var LmergedArray=null,LmergedArray25=null,tmp2=null,tmp3=null,tmp4=null,tmp5=null,tmp6=0,tmp7=null,tmp8=0,tmp9=null,tmp9o=0,tmp10=null,tmp10o=0,tmp11=0,tmp12=null,L$psink=0,tmp14=0,tmp15=null,tmp15o=0;
	LmergedArray=new Uint8Array(306);
	LmergedArray25=[nullObj,nullObj];
	LmergedArray25[0]={d:LmergedArray,o:0};
	tmp8=_snprintf(LmergedArray,0,100,_$pstr$p7$p428,0,Larg6)|0;
	if(tmp8>>>0>99){
		tmp8=__ZSt12__asprintf_lPPcPvPKcz(LmergedArray25,0,nullObj,_$pstr$p7$p428,0,Larg6)|0;
		tmp9=LmergedArray25[0];
		tmp10=new Uint8Array(tmp8/1|0);
		tmp9o=tmp9.o;
		tmp9=tmp9.d;
		tmp10o=0;
		tmp10=tmp10;
	}else{
		tmp9o=0;
		tmp9=LmergedArray;
		tmp10o=100;
		tmp10=LmergedArray;
	}
	tmp2=Larg4.a7.a0;
	tmp2.i1=(tmp2.i1|0)+1|0;
	if((__ZNSt5ctypeIcE2idE.i0&255)!==0){
		tmp11=__ZNSt5ctypeIcE2idE.i1|0;
	}else{
		tmp11=(__ZNSt6locale2id9__next_idE|0)+1|0;
		__ZNSt6locale2id9__next_idE=tmp11;
		__ZNSt5ctypeIcE2idE.i1=tmp11;
		__ZNSt5ctypeIcE2idE.i0=1;
	}
	tmp12=tmp2.a2.a0;
	tmp12=tmp12[tmp11-1|0];
	tmp12.a0.a9(tmp12,tmp9,tmp9o,tmp9,tmp9o+tmp8|0,tmp10,tmp10o);
	if((tmp8|0)!==0){
		tmp11=tmp9[tmp9o]|0;
		tmp11=(tmp11&255)===45?1:0;
	}else{
		tmp11=0;
	}
	tmp9={i0:0,i1:0,a2:nullArray};
	tmp9.i0=0;
	tmp9.i1=0;
	tmp9.a2=nullArray;
	tmp3={i0:0,i1:0,a2:nullArray};
	tmp3.i0=0;
	tmp3.i1=0;
	tmp3.a2=nullArray;
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp4.i0=0;
	tmp4.i1=0;
	tmp4.a2=nullArray;
	tmp5=[0];
	__ZNSt11__money_putIcE13__gather_infoEbbRKSt6localeRNSt10money_base7patternERcS7_RSsS8_S8_Ri(Larg3,tmp11,tmp2,LmergedArray,200,LmergedArray,204,LmergedArray,205,tmp9,tmp3,tmp4,tmp5,0);
	tmp6=tmp5[0]|0;
	if((tmp8|0)>(tmp6|0)){
		L$psink=tmp4.i1|0;
		tmp14=tmp3.i1|0;
		L$psink=(L$psink+(tmp8-tmp6<<1)|0)+tmp14|0;
		tmp14=1;
	}else{
		L$psink=tmp4.i1|0;
		tmp14=tmp3.i1|0;
		L$psink=tmp14+L$psink|0;
		tmp14=2;
	}
	L$psink=(L$psink+tmp6|0)+tmp14|0;
	if(L$psink>>>0>100){
		tmp15=new Uint8Array(L$psink/1|0);
		tmp15o=0;
		tmp15=tmp15;
	}else{
		tmp15o=206;
		tmp15=LmergedArray;
	}
	__ZNSt11__money_putIcE8__formatEPcRS1_S2_jPKcS4_RKSt5ctypeIcEbRKNSt10money_base7patternEccRKSsSE_SE_i(tmp15,tmp15o,LmergedArray25,0,LmergedArray25,1,Larg4.i1|0,tmp10,tmp10o,tmp10,tmp10o+tmp8|0,tmp12,tmp11,LmergedArray,200,LmergedArray[204]|0,LmergedArray[205]|0,tmp9,tmp3,tmp4,tmp6);
	tmp10=LmergedArray25[0];
	tmp12=LmergedArray25[1];
	tmp7={a0:null};
	tmp7.a0=Larg2.a0;
	__ZSt16__pad_and_outputIcSt11char_traitsIcEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(Larg0,tmp7,tmp15,tmp15o,tmp10.d,tmp10.o,tmp12.d,tmp12.o,Larg4,Larg5);
	tmp8=tmp2.i1|0;
	tmp2.i1=tmp8-1|0;
	if((tmp8|0)===0)tmp2.a0.a3(tmp2);
}
function __ZNSt9money_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEED0Ev(Larg0){
}
function __ZNSt9money_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEED2Ev(Larg0){
}
function __ZNKSt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_bRSt8ios_baseRjRSbIwS2_SaIwEE(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6,Marg6,Larg7){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,tmp5=0,tmp6=null,tmp6o=0,tmp7=null,tmp7o=0,Lgeptoindexphi=0,tmp9=null,tmp9o=0,tmp10=0,tmp11=0,Lgeptoindexphi5=0,tmp13=null;
	tmp0=new Int32Array(100);
	tmp1={a0:nullArray,a0o:0,a1:null};
	tmp1.a0=tmp0;
	tmp1.a0o=0;
	tmp1.a1=__ZSt12__do_nothingPv;
	tmp6=[nullObj];
	tmp2=Larg5.a7.a0;
	tmp2.i1=(tmp2.i1|0)+1|0;
	tmp7=tmp2.a2.a0;
	tmp7=tmp7[(__ZNSt5ctypeIwE2idE$p1|0)-1|0];
	tmp3=[0];
	tmp3[0]=0;
	Lgeptoindexphi=Larg5.i1|0;
	tmp9={a0:null};
	tmp4=Larg3.a0;
	tmp9.a0=tmp4;
	Lgeptoindexphi=__ZNSt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE8__do_getERS3_S3_bRKSt6localejRjRbRKSt5ctypeIwERSt10unique_ptrIwPFvPvEERPwSL_(Larg2,tmp9,Larg4,tmp2,Lgeptoindexphi,Larg6,Marg6,tmp3,0,tmp7,tmp1,tmp6,0,tmp0,100)|0;
	if(Lgeptoindexphi){
		tmp9=Larg7.a2;
		if(tmp9!==nullArray||0!==0)tmp9[0]=0;
		Larg7.i1=0;
		if((tmp3[0]&255)!==0){
			Lgeptoindexphi=tmp7.a0.a12(tmp7,45)|0;
			tmp10=Larg7.i0|0;
			if(tmp10>>>0<2){
				tmp10=0;
			}else{
				tmp10=(tmp10& -2)-1|0;
			}
			tmp11=Larg7.i1|0;
			if((tmp11|0)===(tmp10|0))__ZNSbIwSt11char_traitsIwESaIwEE9__grow_byEjjjjjj(Larg7,tmp10,1,tmp10,tmp10);
			tmp9=Larg7.a2;
			Larg7.i1=tmp11+1|0;
			tmp9[tmp11]=Lgeptoindexphi;
			tmp9[(0+tmp11|0)+1|0]=0;
		}
		tmp10=tmp7.a0.a12(tmp7,48)|0;
		tmp7o=tmp1.a0o;
		tmp7=tmp1.a0;
		tmp9=tmp6[0];
		if(tmp7o<(tmp9.o+ -1|0)){
			Lgeptoindexphi=0;
			while(1){
				if((tmp7[tmp7o+Lgeptoindexphi|0]|0)===(tmp10|0)){
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					if((tmp7o+Lgeptoindexphi|0)<(tmp9.o+ -1|0))continue;
				}
				break;
			}
		}else{
			Lgeptoindexphi=0;
		}
		tmp10=((tmp7o+Lgeptoindexphi|0)*4);
		tmp11=Larg7.i1|0;
		Lgeptoindexphi5=Larg7.i0|0;
		if(Lgeptoindexphi5>>>0<2){
			Lgeptoindexphi5=0;
		}else{
			Lgeptoindexphi5=(Lgeptoindexphi5& -2)-1|0;
		}
		tmp10=((tmp9.o)*4)-tmp10|0;
		tmp5=tmp10>>2;
		if((tmp5|0)!==0){
			if(Lgeptoindexphi5-tmp11>>>0<tmp5>>>0)__ZNSbIwSt11char_traitsIwESaIwEE9__grow_byEjjjjjj(Larg7,Lgeptoindexphi5,(tmp5+tmp11|0)-Lgeptoindexphi5|0,tmp11,tmp11);
			tmp13=Larg7.a2;
			if(tmp7===tmp9.d&&(tmp7o+Lgeptoindexphi|0)===tmp9.o){
				Lgeptoindexphi5=tmp11;
			}else{
				Lgeptoindexphi5=tmp11;
				while(1){
					tmp13[Lgeptoindexphi5]=tmp7[tmp7o+Lgeptoindexphi|0]|0;
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					if(tmp7!==tmp9.d||(tmp7o+Lgeptoindexphi|0)!==tmp9.o){
						Lgeptoindexphi5=Lgeptoindexphi5+1|0;
						continue;
					}
					break;
				}
				Lgeptoindexphi5=(tmp11+1|0)+(tmp10-4>>>2)|0;
			}
			tmp13[Lgeptoindexphi5]=0;
			Larg7.i1=tmp5+tmp11|0;
		}
	}
	tmp7=Larg2.a0;
	if(tmp7!==null){
		tmp9o=tmp7.a3o;
		tmp9=tmp7.a3;
		tmp13=tmp7.a4;
		if(tmp9===tmp13&&tmp9o===0){
			Lgeptoindexphi=tmp7.a0.a10(tmp7)|0;
		}else{
			Lgeptoindexphi=tmp9[tmp9o]|0;
		}
		if((Lgeptoindexphi|0)===-1){
			Larg2.a0=null;
			Lgeptoindexphi=1;
		}else{
			tmp7=Larg2.a0;
			Lgeptoindexphi=tmp7===null?1:0;
		}
	}else{
		Lgeptoindexphi=1;
	}
	a:{
		b:{
			if(tmp4!==null){
				tmp7o=tmp4.a3o;
				tmp7=tmp4.a3;
				tmp9=tmp4.a4;
				if(tmp7===tmp9&&tmp7o===0){
					tmp10=tmp4.a0.a10(tmp4)|0;
				}else{
					tmp10=tmp7[tmp7o]|0;
				}
				if((tmp10|0)!==-1){
					if(Lgeptoindexphi)break a;
					break b;
				}
				Larg3.a0=null;
			}
			if(!(Lgeptoindexphi))break a;
		}
		Larg6[Marg6]=Larg6[Marg6]|2;
	}
	Larg0.a0=Larg2.a0;
	Lgeptoindexphi=tmp2.i1|0;
	tmp2.i1=Lgeptoindexphi-1|0;
	if((Lgeptoindexphi|0)===0)tmp2.a0.a3(tmp2);
	tmp6o=tmp1.a0o;
	tmp6=tmp1.a0;
	tmp1.a0=nullArray;
	tmp1.a0o=0;
	if(tmp6!==nullArray||tmp6o!==0)tmp1.a1(tmp6,tmp6o);
}
function __ZNSbIwSt11char_traitsIwESaIwEE9__grow_byEjjjjjj(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=0,Lgeptoindexphi=0,Lgeptoindexphi2=0;
	tmp0=Larg0.a2;
	if(Larg1>>>0<536870887){
		tmp2=Larg1<<1;
		tmp3=Larg2+Larg1|0;
		tmp2=(tmp3>>>0<tmp2>>>0?tmp2|0:tmp3|0)+4& -4;
	}else{
		tmp2=1073741807;
	}
	tmp1=new Int32Array((tmp2<<2)/4|0);
	if((Larg4|0)!==0){
		tmp3=Larg4&1073741823;
		if((tmp3|0)!==0){
			Lgeptoindexphi2=0;
			Lgeptoindexphi=0;
			while(1){
				tmp1[Lgeptoindexphi2]=tmp0[Lgeptoindexphi]|0;
				Lgeptoindexphi2=Lgeptoindexphi2+1|0;
				if(tmp1!==tmp1||(0+tmp3|0)!==(0+Lgeptoindexphi2|0)){
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					continue;
				}
				break;
			}
		}
	}
	tmp3=Larg3-Larg4|0;
	if((tmp3|0)!==0){
		tmp3&=1073741823;
		if((tmp3|0)!==0){
			Lgeptoindexphi2=Larg4;
			Lgeptoindexphi=Larg4;
			while(1){
				tmp1[Lgeptoindexphi2]=tmp0[Lgeptoindexphi]|0;
				Lgeptoindexphi2=Lgeptoindexphi2+1|0;
				if(tmp1!==tmp1||((0+Larg4|0)+tmp3|0)!==(0+Lgeptoindexphi2|0)){
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					continue;
				}
				break;
			}
		}
	}
	Larg0.a2=tmp1;
	Larg0.i0=tmp2|1;
}
function __ZNSt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE8__do_getERS3_S3_bRKSt6localejRjRbRKSt5ctypeIwERSt10unique_ptrIwPFvPvEERPwSL_(Larg0,Larg1,Larg2,L$p0$p0$pval,Larg4,Larg5,Marg5,Larg6,Marg6,Larg7,Larg8,Larg9,Marg9,Larg10,Marg10){
	var LmergedArray=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,tmp5=null,tmp6=null,tmp7=null,tmp8=null,tmp9=0,tmp10=0,tmp11=0,L$pnot=0,tmp13=null,tmp14=null,tmp14o=0,L$ppre42=null,L$ppre42o=0,tmp16=null,tmp16o=0,tmp17=null,L$ppre40=null,L$ppre40o=0,L$ppre38=null,L$ppre38o=0,L$ppre=null,L$ppreo=0,tmp21=null,tmp21o=0,tmp22=null,L$poptgepsqueezed372=null,L$poptgepsqueezed372o=0,tmp24=null,L$p07=0,L$p06=0,tmp27=0,Lgeptoindexphi10=0,tmp29=null,tmp29o=0,L$p0=0,tmp31=0,L$ppre$mphi=0,tmp33=0,tmp34=0;
	LmergedArray=[{d:Larg10,o:Marg10},nullObj,nullObj];
	tmp1=new Int32Array(100);
	tmp2={a0:nullArray,a1:null};
	tmp2.a0=tmp1;
	tmp2.a1=__ZSt12__do_nothingPv;
	LmergedArray[1]={d:tmp1,o:0};
	LmergedArray[2]={d:tmp1,o:100};
	tmp3=new Uint8Array(4);
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp4.i0=0;
	tmp4.i1=0;
	tmp4.a2=nullArray;
	tmp5={i0:0,i1:0,a2:nullArray};
	tmp5.i0=0;
	tmp5.i1=0;
	tmp5.a2=nullArray;
	tmp6={i0:0,i1:0,a2:nullArray};
	tmp6.i0=0;
	tmp6.i1=0;
	tmp6.a2=nullArray;
	tmp13={i0:0,i1:0,a2:nullArray};
	tmp13.i0=0;
	tmp13.i1=0;
	tmp13.a2=nullArray;
	tmp7={i0:0,i1:0,a2:nullArray};
	tmp7.i0=0;
	tmp7.i1=0;
	tmp7.a2=nullArray;
	tmp14=new Uint8Array(4);
	L$ppre42={i0:0,i1:0,a2:nullArray};
	tmp16={i0:0,i1:0,a2:nullArray};
	tmp17={i0:0,i1:0,a2:nullArray};
	L$ppre40={i0:0,i1:0,a2:nullArray};
	L$ppre38=new Uint8Array(4);
	L$ppre={i0:0,i1:0,a2:nullArray};
	tmp21={i0:0,i1:0,a2:nullArray};
	tmp22={i0:0,i1:0,a2:nullArray};
	tmp8={i0:0,i1:0,a2:nullArray};
	L$poptgepsqueezed372=L$p0$p0$pval.a2;
	if(Larg2){
		L$poptgepsqueezed372=L$poptgepsqueezed372.a0;
		tmp24=L$poptgepsqueezed372[(__ZNSt10moneypunctIwLb1EE2idE$p1|0)-1|0];
		tmp24.a0.a12(tmp14,0,tmp24);
		tmp3[0]=tmp14[0]|0;
		tmp3[1]=tmp14[1]|0;
		tmp3[2]=tmp14[2]|0;
		tmp3[3]=tmp14[3]|0;
		tmp24.a0.a9(L$ppre42,tmp24);
		L$poptgepsqueezed372=tmp13.a2;
		if(L$poptgepsqueezed372!==nullArray||0!==0)L$poptgepsqueezed372[0]=0;
		tmp13.i1=0;
		__ZNSbIwSt11char_traitsIwESaIwEE7reserveEj(tmp13);
		tmp13.i0=L$ppre42.i0|0;
		tmp13.i1=L$ppre42.i1|0;
		L$poptgepsqueezed372=L$ppre42.a2;
		tmp13.a2=L$poptgepsqueezed372;
		tmp24.a0.a8(tmp16,tmp24);
		L$poptgepsqueezed372=tmp6.a2;
		if(L$poptgepsqueezed372!==nullArray||0!==0)L$poptgepsqueezed372[0]=0;
		tmp6.i1=0;
		__ZNSbIwSt11char_traitsIwESaIwEE7reserveEj(tmp6);
		tmp6.i0=tmp16.i0|0;
		tmp6.i1=tmp16.i1|0;
		L$poptgepsqueezed372=tmp16.a2;
		tmp6.a2=L$poptgepsqueezed372;
		L$p07=tmp24.a0.a4(tmp24)|0;
		L$p06=tmp24.a0.a5(tmp24)|0;
		tmp24.a0.a6(tmp17,tmp24);
		tmp4.i1=0;
		__ZNSs7reserveEj(tmp4);
		tmp4.i0=tmp17.i0|0;
		tmp27=tmp17.i1|0;
		tmp4.i1=tmp27;
		L$poptgepsqueezed372=tmp17.a2;
		tmp4.a2=L$poptgepsqueezed372;
		tmp24.a0.a7(L$ppre40,tmp24);
		tmp5.i1=0;
		__ZNSbIwSt11char_traitsIwESaIwEE7reserveEj(tmp5);
		tmp5.i0=L$ppre40.i0|0;
		Lgeptoindexphi10=L$ppre40.i1|0;
		tmp5.i1=Lgeptoindexphi10;
		tmp29=L$ppre40.a2;
		tmp5.a2=tmp29;
		L$p0=tmp24.a0.a10(tmp24)|0;
	}else{
		L$poptgepsqueezed372=L$poptgepsqueezed372.a0;
		tmp24=L$poptgepsqueezed372[(__ZNSt10moneypunctIwLb0EE2idE$p1|0)-1|0];
		tmp24.a0.a12(L$ppre38,0,tmp24);
		tmp3[0]=L$ppre38[0]|0;
		tmp3[1]=L$ppre38[1]|0;
		tmp3[2]=L$ppre38[2]|0;
		tmp3[3]=L$ppre38[3]|0;
		tmp24.a0.a9(L$ppre,tmp24);
		L$poptgepsqueezed372=tmp13.a2;
		if(L$poptgepsqueezed372!==nullArray||0!==0)L$poptgepsqueezed372[0]=0;
		tmp13.i1=0;
		__ZNSbIwSt11char_traitsIwESaIwEE7reserveEj(tmp13);
		tmp13.i0=L$ppre.i0|0;
		tmp13.i1=L$ppre.i1|0;
		L$poptgepsqueezed372=L$ppre.a2;
		tmp13.a2=L$poptgepsqueezed372;
		tmp24.a0.a8(tmp21,tmp24);
		L$poptgepsqueezed372=tmp6.a2;
		if(L$poptgepsqueezed372!==nullArray||0!==0)L$poptgepsqueezed372[0]=0;
		tmp6.i1=0;
		__ZNSbIwSt11char_traitsIwESaIwEE7reserveEj(tmp6);
		tmp6.i0=tmp21.i0|0;
		tmp6.i1=tmp21.i1|0;
		L$poptgepsqueezed372=tmp21.a2;
		tmp6.a2=L$poptgepsqueezed372;
		L$p07=tmp24.a0.a4(tmp24)|0;
		L$p06=tmp24.a0.a5(tmp24)|0;
		tmp24.a0.a6(tmp22,tmp24);
		tmp4.i1=0;
		__ZNSs7reserveEj(tmp4);
		tmp4.i0=tmp22.i0|0;
		tmp27=tmp22.i1|0;
		tmp4.i1=tmp27;
		L$poptgepsqueezed372=tmp22.a2;
		tmp4.a2=L$poptgepsqueezed372;
		tmp24.a0.a7(tmp8,tmp24);
		tmp5.i1=0;
		__ZNSbIwSt11char_traitsIwESaIwEE7reserveEj(tmp5);
		tmp5.i0=tmp8.i0|0;
		Lgeptoindexphi10=tmp8.i1|0;
		tmp5.i1=Lgeptoindexphi10;
		tmp29=tmp8.a2;
		tmp5.a2=tmp29;
		L$p0=tmp24.a0.a10(tmp24)|0;
	}
	tmp14o=Larg8.a0o;
	tmp14=Larg8.a0;
	Larg9[Marg9]={d:tmp14,o:tmp14o};
	tmp9=(tmp27|0)!==0?1:0;
	tmp10=((0)*4);
	tmp11=(Lgeptoindexphi10|0)!==0?1:0;
	L$pnot=((Larg4&512|0)!==0?1:0)^1?1:0;
	tmp16o=0;
	tmp16=tmp1;
	tmp17=null;
	tmp31=0;
	L$ppre42=nullArray;
	a:{
		b:while(1){
			tmp14=Larg0.a0;
			if(tmp14!==null){
				L$ppre40o=tmp14.a3o;
				L$ppre40=tmp14.a3;
				L$ppre38=tmp14.a4;
				if(L$ppre40===L$ppre38&&L$ppre40o===0){
					L$ppre$mphi=tmp14.a0.a10(tmp14)|0;
				}else{
					L$ppre$mphi=L$ppre40[L$ppre40o]|0;
				}
				if((L$ppre$mphi|0)===-1){
					Larg0.a0=null;
					tmp33=1;
				}else{
					tmp14=Larg0.a0;
					tmp33=tmp14===null?1:0;
				}
			}else{
				tmp33=1;
			}
			tmp14=Larg1.a0;
			c:{
				if(tmp14!==null){
					L$ppre40o=tmp14.a3o;
					L$ppre40=tmp14.a3;
					L$ppre38=tmp14.a4;
					if(L$ppre40===L$ppre38&&L$ppre40o===0){
						L$ppre$mphi=tmp14.a0.a10(tmp14)|0;
					}else{
						L$ppre$mphi=L$ppre40[L$ppre40o]|0;
					}
					if((L$ppre$mphi|0)!==-1){
						if(tmp33)break c;
						break b;
					}
					Larg1.a0=null;
				}
				if(tmp33){
					tmp14=null;
					break b;
				}
				tmp14=null;
			}
			c:{
				switch(tmp3[tmp31]<<24>>24|0){
					case 1:
					if((tmp31|0)===3)break b;
					L$ppre40=Larg0.a0;
					L$ppre38o=L$ppre40.a3o;
					L$ppre38=L$ppre40.a3;
					L$ppre=L$ppre40.a4;
					if(L$ppre38===L$ppre&&L$ppre38o===0){
						L$ppre$mphi=L$ppre40.a0.a10(L$ppre40)|0;
					}else{
						L$ppre$mphi=L$ppre38[L$ppre38o]|0;
					}
					if(Larg7.a0.a4(Larg7,8,L$ppre$mphi)|0){
						L$ppre40=Larg0.a0;
						L$ppre38o=L$ppre40.a3o;
						L$ppre38=L$ppre40.a3;
						L$ppre=L$ppre40.a4;
						if(L$ppre38===L$ppre&&L$ppre38o===0){
							L$ppre$mphi=L$ppre40.a0.a11(L$ppre40)|0;
						}else{
							L$ppre40.a3=L$ppre38;
							L$ppre40.a3o=L$ppre38o+1|0;
							L$ppre$mphi=L$ppre38[L$ppre38o]|0;
						}
						tmp33=tmp7.i0|0;
						if(tmp33>>>0<2){
							tmp33=0;
						}else{
							tmp33=(tmp33& -2)-1|0;
						}
						tmp34=tmp7.i1|0;
						if((tmp34|0)===(tmp33|0)){
							__ZNSbIwSt11char_traitsIwESaIwEE9__grow_byEjjjjjj(tmp7,tmp33,1,tmp33,tmp33);
							L$ppre42=tmp7.a2;
						}
						tmp7.i1=tmp34+1|0;
						L$ppre42[tmp34]=L$ppre$mphi;
						L$ppre42[(0+tmp34|0)+1|0]=0;
						break;
					}
					Larg5[Marg5]=Larg5[Marg5]|4;
					L$p06=0;
					break a;
					case 0:
					if((tmp31|0)===3)break b;
					break;
					case 3:
					L$ppre$mphi=tmp6.i1|0;
					tmp33=tmp13.i1|0;
					if((L$ppre$mphi|0)===(-tmp33|0))break c;
					L$ppre=Larg0.a0;
					L$ppre38o=L$ppre.a3o;
					L$ppre38=L$ppre.a3;
					L$ppre40=L$ppre.a4;
					tmp34=L$ppre38===L$ppre40&&L$ppre38o===0?1:0;
					if((L$ppre$mphi|0)!==0)if((tmp33|0)!==0){
						if(tmp34){
							L$ppre$mphi=L$ppre.a0.a10(L$ppre)|0;
							L$ppre=Larg0.a0;
							L$ppre38o=L$ppre.a3o;
							L$ppre38=L$ppre.a3;
							L$ppre40=L$ppre.a4;
						}else{
							L$ppre$mphi=L$ppre38[L$ppre38o]|0;
						}
						tmp21=tmp6.a2;
						tmp33=L$ppre38===L$ppre40&&L$ppre38o===0?1:0;
						if((L$ppre$mphi|0)===(tmp21[0]|0)){
							if(tmp33)L$ppre.a0.a11(L$ppre)|0;
							else{
								L$ppre.a3=L$ppre38;
								L$ppre.a3o=L$ppre38o+1|0;
							}
							L$ppre$mphi=tmp6.i1|0;
							tmp17=(L$ppre$mphi>>>0>1?tmp6:tmp17);
							break c;
						}
						if(tmp33){
							L$ppre$mphi=L$ppre.a0.a10(L$ppre)|0;
						}else{
							L$ppre$mphi=L$ppre38[L$ppre38o]|0;
						}
						L$ppre40=tmp13.a2;
						if((L$ppre$mphi|0)===(L$ppre40[0]|0)){
							L$ppre40=Larg0.a0;
							L$ppre38o=L$ppre40.a3o;
							L$ppre38=L$ppre40.a3;
							L$ppre=L$ppre40.a4;
							if(L$ppre38===L$ppre&&L$ppre38o===0)L$ppre40.a0.a11(L$ppre40)|0;
							else{
								L$ppre40.a3=L$ppre38;
								L$ppre40.a3o=L$ppre38o+1|0;
							}
							Larg6[Marg6]=1;
							L$ppre$mphi=tmp13.i1|0;
							tmp17=(L$ppre$mphi>>>0>1?tmp13:tmp17);
							break c;
						}
						Larg5[Marg5]=Larg5[Marg5]|4;
						L$p06=0;
						break a;
					}
					if(tmp34){
						tmp33=L$ppre.a0.a10(L$ppre)|0;
					}else{
						tmp33=L$ppre38[L$ppre38o]|0;
					}
					if((L$ppre$mphi|0)===0){
						L$ppre40=tmp13.a2;
						if((tmp33|0)!==(L$ppre40[0]|0))break c;
						L$ppre40=Larg0.a0;
						L$ppre38o=L$ppre40.a3o;
						L$ppre38=L$ppre40.a3;
						L$ppre=L$ppre40.a4;
						if(L$ppre38===L$ppre&&L$ppre38o===0)L$ppre40.a0.a11(L$ppre40)|0;
						else{
							L$ppre40.a3=L$ppre38;
							L$ppre40.a3o=L$ppre38o+1|0;
						}
						Larg6[Marg6]=1;
						L$ppre$mphi=tmp13.i1|0;
						tmp17=(L$ppre$mphi>>>0>1?tmp13:tmp17);
						break c;
					}
					L$ppre40=tmp6.a2;
					if((tmp33|0)===(L$ppre40[0]|0)){
						L$ppre40=Larg0.a0;
						L$ppre38o=L$ppre40.a3o;
						L$ppre38=L$ppre40.a3;
						L$ppre=L$ppre40.a4;
						if(L$ppre38===L$ppre&&L$ppre38o===0)L$ppre40.a0.a11(L$ppre40)|0;
						else{
							L$ppre40.a3=L$ppre38;
							L$ppre40.a3o=L$ppre38o+1|0;
						}
						L$ppre$mphi=tmp6.i1|0;
						tmp17=(L$ppre$mphi>>>0>1?tmp6:tmp17);
						break c;
					}
					Larg6[Marg6]=1;
					break c;
					case 2:
					d:{
						e:{
							if(tmp31>>>0>=2)if(tmp17===null){
								if((tmp31|0)===2){
									L$ppre$mphi=tmp3[3]|0;
									L$ppre$mphi=L$ppre$mphi!==0?1:0;
								}else{
									L$ppre$mphi=0;
								}
								if((Larg4&512|0)!==0)break e;
								if(L$ppre$mphi)break e;
								tmp17=null;
								break c;
							}
							if((tmp31|0)===0){
								L$ppre40o=0;
								L$ppre40=tmp29;
								break d;
							}
						}
						if((tmp3[tmp31-1|0]|0)<2){
							if(tmp11){
								L$ppre40o=0;
								L$ppre40=tmp29;
								while(1){
									if(Larg7.a0.a4(Larg7,8,L$ppre40[L$ppre40o]|0)|0){
										if(L$ppre40!==tmp29||(L$ppre40o+1|0)!==(0+Lgeptoindexphi10|0)){
											L$ppre40o=L$ppre40o+1|0;
											L$ppre40=L$ppre40;
											continue;
										}
										L$ppre40o=L$ppre40o+1|0;
										L$ppre40=L$ppre40;
									}
									break;
								}
								L$ppre$mphi=((L$ppre40o)*4);
							}else{
								L$ppre40o=0;
								L$ppre40=tmp29;
								L$ppre$mphi=tmp10;
							}
							L$ppre$mphi=L$ppre$mphi-tmp10>>2;
							tmp33=tmp7.i1|0;
							if(L$ppre$mphi>>>0>tmp33>>>0){
								L$ppre40o=0;
								L$ppre40=tmp29;
							}else if((L$ppre$mphi|0)!==0){
								L$ppre38o=0;
								L$ppre38=tmp29;
								L$ppre$mphi=-L$ppre$mphi|0;
								while(1){
									if((L$ppre42[(0+tmp33|0)+L$ppre$mphi|0]|0)===(L$ppre38[L$ppre38o]|0)){
										L$ppre$mphi=L$ppre$mphi+1|0;
										if(L$ppre42!==L$ppre42||((0+tmp33|0)+L$ppre$mphi|0)!==(0+tmp33|0)){
											L$ppre38o=L$ppre38o+1|0;
											L$ppre38=L$ppre38;
											continue;
										}
									}else{
										L$ppre40o=0;
										L$ppre40=tmp29;
									}
									break;
								}
							}
						}else{
							L$ppre40o=0;
							L$ppre40=tmp29;
						}
					}
					d:if(L$ppre40===tmp29&&L$ppre40o===(0+Lgeptoindexphi10|0)){
						L$ppre40o=0+Lgeptoindexphi10|0;
						L$ppre40=tmp29;
					}else{
						L$ppre38=tmp14;
						while(1){
							L$ppre=Larg0.a0;
							if(L$ppre!==null){
								tmp21o=L$ppre.a3o;
								tmp21=L$ppre.a3;
								tmp22=L$ppre.a4;
								if(tmp21===tmp22&&tmp21o===0){
									L$ppre$mphi=L$ppre.a0.a10(L$ppre)|0;
								}else{
									L$ppre$mphi=tmp21[tmp21o]|0;
								}
								if((L$ppre$mphi|0)===-1){
									Larg0.a0=null;
									L$ppre$mphi=1;
								}else{
									tmp21=Larg0.a0;
									L$ppre$mphi=tmp21===null?1:0;
								}
							}else{
								L$ppre$mphi=1;
							}
							e:{
								if(L$ppre38!==null){
									L$ppreo=L$ppre38.a3o;
									L$ppre=L$ppre38.a3;
									tmp21=L$ppre38.a4;
									if(L$ppre===tmp21&&L$ppreo===0){
										tmp33=L$ppre38.a0.a10(L$ppre38)|0;
									}else{
										tmp33=L$ppre[L$ppreo]|0;
									}
									if((tmp33|0)!==-1){
										if(L$ppre$mphi)break e;
										break d;
									}
									Larg1.a0=null;
									tmp14=null;
								}
								if(L$ppre$mphi)break d;
								L$ppre38=null;
							}
							L$ppre=Larg0.a0;
							tmp21o=L$ppre.a3o;
							tmp21=L$ppre.a3;
							tmp22=L$ppre.a4;
							if(tmp21===tmp22&&tmp21o===0){
								L$ppre$mphi=L$ppre.a0.a10(L$ppre)|0;
							}else{
								L$ppre$mphi=tmp21[tmp21o]|0;
							}
							if((L$ppre$mphi|0)===(L$ppre40[L$ppre40o]|0)){
								L$ppre=Larg0.a0;
								tmp21o=L$ppre.a3o;
								tmp21=L$ppre.a3;
								tmp22=L$ppre.a4;
								if(tmp21===tmp22&&tmp21o===0)L$ppre.a0.a11(L$ppre)|0;
								else{
									L$ppre.a3=tmp21;
									L$ppre.a3o=tmp21o+1|0;
								}
								if(L$ppre40!==tmp29||(L$ppre40o+1|0)!==(0+Lgeptoindexphi10|0)){
									L$ppre40o=L$ppre40o+1|0;
									L$ppre40=L$ppre40;
									continue;
								}
								L$ppre40o=0+Lgeptoindexphi10|0;
								L$ppre40=tmp29;
							}
							break;
						}
					}
					if(L$ppre40===tmp29&&L$ppre40o===(0+Lgeptoindexphi10|0))break c;
					if(L$pnot)break c;
					Larg5[Marg5]=Larg5[Marg5]|4;
					L$p06=0;
					break a;
					case 4:
					L$ppre38=tmp14;
					L$ppre$mphi=0;
					while(1){
						L$ppre40=Larg0.a0;
						if(L$ppre40!==null){
							L$ppreo=L$ppre40.a3o;
							L$ppre=L$ppre40.a3;
							tmp21=L$ppre40.a4;
							if(L$ppre===tmp21&&L$ppreo===0){
								tmp33=L$ppre40.a0.a10(L$ppre40)|0;
							}else{
								tmp33=L$ppre[L$ppreo]|0;
							}
							if((tmp33|0)===-1){
								Larg0.a0=null;
								tmp33=1;
							}else{
								L$ppre40=Larg0.a0;
								tmp33=L$ppre40===null?1:0;
							}
						}else{
							tmp33=1;
						}
						d:{
							if(L$ppre38!==null){
								L$ppre40o=L$ppre38.a3o;
								L$ppre40=L$ppre38.a3;
								L$ppre=L$ppre38.a4;
								if(L$ppre40===L$ppre&&L$ppre40o===0){
									tmp34=L$ppre38.a0.a10(L$ppre38)|0;
								}else{
									tmp34=L$ppre40[L$ppre40o]|0;
								}
								if((tmp34|0)!==-1){
									if(tmp33)break d;
									break;
								}
								Larg1.a0=null;
								tmp14=null;
							}
							if(tmp33)break;
							L$ppre38=null;
						}
						L$ppre40=Larg0.a0;
						L$ppreo=L$ppre40.a3o;
						L$ppre=L$ppre40.a3;
						tmp21=L$ppre40.a4;
						if(L$ppre===tmp21&&L$ppreo===0){
							tmp33=L$ppre40.a0.a10(L$ppre40)|0;
						}else{
							tmp33=L$ppre[L$ppreo]|0;
						}
						if(Larg7.a0.a4(Larg7,4,tmp33)|0){
							L$ppre40=Larg9[Marg9];
							L$ppre=LmergedArray[0];
							if(L$ppre40.d===L$ppre.d&&L$ppre40.o===L$ppre.o){
								__ZSt19__double_or_nothingIwEvRSt10unique_ptrIT_PFvPvEERPS1_S8_(Larg8,Larg9,Marg9,LmergedArray,0);
								L$ppre40=Larg9[Marg9];
							}
							L$ppre40o=L$ppre40.o;
							L$ppre40=L$ppre40.d;
							Larg9[Marg9]={d:L$ppre40,o:L$ppre40o+1|0};
							L$ppre40[L$ppre40o]=tmp33;
							L$ppre$mphi=L$ppre$mphi+1|0;
						}else{
							if((tmp33|0)!==(L$p06|0))break;
							if((L$ppre$mphi|0)===0)break;
							if(!(tmp9))break;
							L$ppre40=LmergedArray[2];
							if(tmp16===L$ppre40.d&&tmp16o===L$ppre40.o){
								__ZSt19__double_or_nothingIjEvRSt10unique_ptrIT_PFvPvEERPS1_S8_(tmp2,LmergedArray,1,LmergedArray,2);
								tmp16=LmergedArray[1];
								tmp16o=tmp16.o;
								tmp16=tmp16.d;
							}
							LmergedArray[1]={d:tmp16,o:tmp16o+1|0};
							tmp16[tmp16o]=L$ppre$mphi;
							tmp16o=tmp16o+1|0;
							tmp16=tmp16;
							L$ppre$mphi=0;
						}
						L$ppre40=Larg0.a0;
						L$ppreo=L$ppre40.a3o;
						L$ppre=L$ppre40.a3;
						tmp21=L$ppre40.a4;
						if(L$ppre===tmp21&&L$ppreo===0)L$ppre40.a0.a11(L$ppre40)|0;
						else{
							L$ppre40.a3=L$ppre;
							L$ppre40.a3o=L$ppreo+1|0;
						}
						continue;
					}
					L$ppre40=tmp2.a0;
					tmp33=L$ppre40!==tmp16||0!==tmp16o?1:0;
					if((L$ppre$mphi|0)!==0)if(tmp33){
						L$ppre40=LmergedArray[2];
						if(tmp16===L$ppre40.d&&tmp16o===L$ppre40.o){
							__ZSt19__double_or_nothingIjEvRSt10unique_ptrIT_PFvPvEERPS1_S8_(tmp2,LmergedArray,1,LmergedArray,2);
							tmp16=LmergedArray[1];
							tmp16o=tmp16.o;
							tmp16=tmp16.d;
						}
						LmergedArray[1]={d:tmp16,o:tmp16o+1|0};
						tmp16[tmp16o]=L$ppre$mphi;
						tmp16o=tmp16o+1|0;
						tmp16=tmp16;
					}
					d:{
						if((L$p0|0)>0){
							L$ppre40=Larg0.a0;
							if(L$ppre40!==null){
								L$ppre38o=L$ppre40.a3o;
								L$ppre38=L$ppre40.a3;
								L$ppre=L$ppre40.a4;
								if(L$ppre38===L$ppre&&L$ppre38o===0){
									L$ppre$mphi=L$ppre40.a0.a10(L$ppre40)|0;
								}else{
									L$ppre$mphi=L$ppre38[L$ppre38o]|0;
								}
								if((L$ppre$mphi|0)===-1){
									Larg0.a0=null;
									L$ppre$mphi=1;
								}else{
									L$ppre=Larg0.a0;
									L$ppre$mphi=L$ppre===null?1:0;
								}
							}else{
								L$ppre$mphi=1;
							}
							e:{
								if(tmp14!==null){
									L$ppre40o=tmp14.a3o;
									L$ppre40=tmp14.a3;
									L$ppre38=tmp14.a4;
									if(L$ppre40===L$ppre38&&L$ppre40o===0){
										tmp33=tmp14.a0.a10(tmp14)|0;
									}else{
										tmp33=L$ppre40[L$ppre40o]|0;
									}
									if((tmp33|0)!==-1){
										if(L$ppre$mphi)break e;
										break d;
									}
									Larg1.a0=null;
								}
								if(L$ppre$mphi)break d;
								tmp14=null;
							}
							L$ppre40=Larg0.a0;
							L$ppre38o=L$ppre40.a3o;
							L$ppre38=L$ppre40.a3;
							L$ppre=L$ppre40.a4;
							if(L$ppre38===L$ppre&&L$ppre38o===0){
								L$ppre$mphi=L$ppre40.a0.a10(L$ppre40)|0;
							}else{
								L$ppre$mphi=L$ppre38[L$ppre38o]|0;
							}
							if((L$ppre$mphi|0)!==(L$p07|0))break d;
							L$ppre40=Larg0.a0;
							L$ppre38o=L$ppre40.a3o;
							L$ppre38=L$ppre40.a3;
							L$ppre=L$ppre40.a4;
							if(L$ppre38===L$ppre&&L$ppre38o===0)L$ppre40.a0.a11(L$ppre40)|0;
							else{
								L$ppre40.a3=L$ppre38;
								L$ppre40.a3o=L$ppre38o+1|0;
							}
							L$ppre38=tmp14;
							while(1){
								L$ppre40=Larg0.a0;
								if(L$ppre40!==null){
									L$ppreo=L$ppre40.a3o;
									L$ppre=L$ppre40.a3;
									tmp21=L$ppre40.a4;
									if(L$ppre===tmp21&&L$ppreo===0){
										L$ppre$mphi=L$ppre40.a0.a10(L$ppre40)|0;
									}else{
										L$ppre$mphi=L$ppre[L$ppreo]|0;
									}
									if((L$ppre$mphi|0)===-1){
										Larg0.a0=null;
										L$ppre$mphi=1;
									}else{
										L$ppre40=Larg0.a0;
										L$ppre$mphi=L$ppre40===null?1:0;
									}
								}else{
									L$ppre$mphi=1;
								}
								e:{
									if(L$ppre38!==null){
										L$ppre40o=L$ppre38.a3o;
										L$ppre40=L$ppre38.a3;
										L$ppre=L$ppre38.a4;
										if(L$ppre40===L$ppre&&L$ppre40o===0){
											tmp33=L$ppre38.a0.a10(L$ppre38)|0;
										}else{
											tmp33=L$ppre40[L$ppre40o]|0;
										}
										if((tmp33|0)!==-1){
											if(L$ppre$mphi)break e;
											break d;
										}
										Larg1.a0=null;
										tmp14=null;
									}
									if(L$ppre$mphi)break d;
									L$ppre38=null;
								}
								L$ppre40=Larg0.a0;
								L$ppreo=L$ppre40.a3o;
								L$ppre=L$ppre40.a3;
								tmp21=L$ppre40.a4;
								if(L$ppre===tmp21&&L$ppreo===0){
									L$ppre$mphi=L$ppre40.a0.a10(L$ppre40)|0;
								}else{
									L$ppre$mphi=L$ppre[L$ppreo]|0;
								}
								if(!(Larg7.a0.a4(Larg7,4,L$ppre$mphi)|0))break d;
								L$ppre40=Larg9[Marg9];
								L$ppre=LmergedArray[0];
								if(L$ppre40.d===L$ppre.d&&L$ppre40.o===L$ppre.o)__ZSt19__double_or_nothingIwEvRSt10unique_ptrIT_PFvPvEERPS1_S8_(Larg8,Larg9,Marg9,LmergedArray,0);
								L$ppre40=Larg0.a0;
								L$ppreo=L$ppre40.a3o;
								L$ppre=L$ppre40.a3;
								tmp21=L$ppre40.a4;
								if(L$ppre===tmp21&&L$ppreo===0){
									L$ppre$mphi=L$ppre40.a0.a10(L$ppre40)|0;
								}else{
									L$ppre$mphi=L$ppre[L$ppreo]|0;
								}
								tmp21=Larg9[Marg9];
								Larg9[Marg9]={d:tmp21.d,o:tmp21.o+1|0};
								tmp21.d[tmp21.o]=L$ppre$mphi;
								L$ppre40=Larg0.a0;
								L$ppreo=L$ppre40.a3o;
								L$ppre=L$ppre40.a3;
								tmp21=L$ppre40.a4;
								if(L$ppre===tmp21&&L$ppreo===0)L$ppre40.a0.a11(L$ppre40)|0;
								else{
									L$ppre40.a3=L$ppre;
									L$ppre40.a3o=L$ppreo+1|0;
								}
								if((L$p0|0)>1){
									L$p0=L$p0-1|0;
									continue;
								}
								break;
							}
							L$p0=0;
						}
						L$ppre40=Larg9[Marg9];
						L$ppre38o=Larg8.a0o;
						L$ppre38=Larg8.a0;
						if(L$ppre40.d!==L$ppre38||L$ppre40.o!==L$ppre38o)break c;
					}
					Larg5[Marg5]=Larg5[Marg5]|4;
					L$p06=0;
					break a;
					default:
					break c;
				}
				L$ppre38=tmp14;
				while(1){
					L$ppre40=Larg0.a0;
					if(L$ppre40!==null){
						L$ppreo=L$ppre40.a3o;
						L$ppre=L$ppre40.a3;
						tmp21=L$ppre40.a4;
						if(L$ppre===tmp21&&L$ppreo===0){
							L$ppre$mphi=L$ppre40.a0.a10(L$ppre40)|0;
						}else{
							L$ppre$mphi=L$ppre[L$ppreo]|0;
						}
						if((L$ppre$mphi|0)===-1){
							Larg0.a0=null;
							L$ppre$mphi=1;
						}else{
							tmp21=Larg0.a0;
							L$ppre$mphi=tmp21===null?1:0;
						}
					}else{
						L$ppre$mphi=1;
					}
					d:{
						if(L$ppre38!==null){
							L$ppre40o=L$ppre38.a3o;
							L$ppre40=L$ppre38.a3;
							L$ppre=L$ppre38.a4;
							if(L$ppre40===L$ppre&&L$ppre40o===0){
								tmp33=L$ppre38.a0.a10(L$ppre38)|0;
							}else{
								tmp33=L$ppre40[L$ppre40o]|0;
							}
							if((tmp33|0)!==-1){
								if(L$ppre$mphi)break d;
								break c;
							}
							Larg1.a0=null;
							tmp14=null;
						}
						if(L$ppre$mphi)break c;
						L$ppre38=null;
					}
					L$ppre40=Larg0.a0;
					L$ppreo=L$ppre40.a3o;
					L$ppre=L$ppre40.a3;
					tmp21=L$ppre40.a4;
					if(L$ppre===tmp21&&L$ppreo===0){
						L$ppre$mphi=L$ppre40.a0.a10(L$ppre40)|0;
					}else{
						L$ppre$mphi=L$ppre[L$ppreo]|0;
					}
					if(Larg7.a0.a4(Larg7,8,L$ppre$mphi)|0){
						L$ppre40=Larg0.a0;
						L$ppreo=L$ppre40.a3o;
						L$ppre=L$ppre40.a3;
						tmp21=L$ppre40.a4;
						if(L$ppre===tmp21&&L$ppreo===0){
							L$ppre$mphi=L$ppre40.a0.a11(L$ppre40)|0;
						}else{
							L$ppre40.a3=L$ppre;
							L$ppre40.a3o=L$ppreo+1|0;
							L$ppre$mphi=L$ppre[L$ppreo]|0;
						}
						tmp33=tmp7.i0|0;
						if(tmp33>>>0<2){
							tmp33=0;
						}else{
							tmp33=(tmp33& -2)-1|0;
						}
						tmp34=tmp7.i1|0;
						if((tmp34|0)===(tmp33|0)){
							__ZNSbIwSt11char_traitsIwESaIwEE9__grow_byEjjjjjj(tmp7,tmp33,1,tmp33,tmp33);
							L$ppre42=tmp7.a2;
						}
						tmp7.i1=tmp34+1|0;
						L$ppre42[tmp34]=L$ppre$mphi;
						L$ppre42[(0+tmp34|0)+1|0]=0;
						continue;
					}
					break;
				}
			}
			tmp31=tmp31+1|0;
			if(tmp31>>>0<4)continue b;
			break;
		}
		b:if(tmp17!==null)if(tmp17.i1>>>0>1){
			Lgeptoindexphi10=1;
			while(1){
				tmp29=Larg0.a0;
				if(tmp29!==null){
					L$ppre42o=tmp29.a3o;
					L$ppre42=tmp29.a3;
					L$ppre40=tmp29.a4;
					if(L$ppre42===L$ppre40&&L$ppre42o===0){
						L$p07=tmp29.a0.a10(tmp29)|0;
					}else{
						L$p07=L$ppre42[L$ppre42o]|0;
					}
					if((L$p07|0)===-1){
						Larg0.a0=null;
						L$p07=1;
					}else{
						tmp29=Larg0.a0;
						L$p07=tmp29===null?1:0;
					}
				}else{
					L$p07=1;
				}
				c:{
					if(tmp14!==null){
						tmp29o=tmp14.a3o;
						tmp29=tmp14.a3;
						L$ppre42=tmp14.a4;
						if(tmp29===L$ppre42&&tmp29o===0){
							L$p06=tmp14.a0.a10(tmp14)|0;
						}else{
							L$p06=tmp29[tmp29o]|0;
						}
						if((L$p06|0)!==-1){
							if(L$p07)break c;
							break;
						}
						Larg1.a0=null;
					}
					if(L$p07)break;
					tmp14=null;
				}
				tmp29=Larg0.a0;
				L$ppre42o=tmp29.a3o;
				L$ppre42=tmp29.a3;
				L$ppre40=tmp29.a4;
				if(L$ppre42===L$ppre40&&L$ppre42o===0){
					L$p07=tmp29.a0.a10(tmp29)|0;
				}else{
					L$p07=L$ppre42[L$ppre42o]|0;
				}
				tmp29=tmp17.a2;
				if((L$p07|0)===(tmp29[Lgeptoindexphi10]|0)){
					tmp29=Larg0.a0;
					L$ppre42o=tmp29.a3o;
					L$ppre42=tmp29.a3;
					L$ppre40=tmp29.a4;
					if(L$ppre42===L$ppre40&&L$ppre42o===0)tmp29.a0.a11(tmp29)|0;
					else{
						tmp29.a3=L$ppre42;
						tmp29.a3o=L$ppre42o+1|0;
					}
					Lgeptoindexphi10=Lgeptoindexphi10+1|0;
					if(Lgeptoindexphi10>>>0<tmp17.i1>>>0)continue;
					break b;
				}
				break;
			}
			Larg5[Marg5]=Larg5[Marg5]|4;
			L$p06=0;
			break a;
		}
		tmp29=tmp2.a0;
		if(tmp29===tmp16&&0===tmp16o){
			L$p06=1;
		}else if((tmp27|0)!==0){
			tmp27=(tmp16o+ -1|0)>0?1:0;
			b:{
				if(tmp27){
					L$p07=0;
					Lgeptoindexphi10=0;
					while(1){
						L$p06=tmp29[L$p07]|0;
						tmp29[L$p07]=tmp16[(tmp16o+ -1|0)+Lgeptoindexphi10|0]|0;
						tmp16[(tmp16o+ -1|0)+Lgeptoindexphi10|0]=L$p06;
						L$p07=L$p07+1|0;
						Lgeptoindexphi10=Lgeptoindexphi10-1|0;
						if((0+L$p07|0)<((tmp16o+ -1|0)+Lgeptoindexphi10|0))continue;
						break;
					}
					Lgeptoindexphi10=L$poptgepsqueezed372[0]|0;
					L$p07=Lgeptoindexphi10<<24>0&&(Lgeptoindexphi10&255)!==127?1:0;
					if(tmp27){
						tmp27=(0+(tmp4.i1|0)|0);
						L$poptgepsqueezed372o=0;
						L$poptgepsqueezed372=L$poptgepsqueezed372;
						L$p06=0;
						while(1){
							if(L$p07)if((tmp29[L$p06]|0)!==(Lgeptoindexphi10<<24>>24|0))break b;
							if((tmp27-(L$poptgepsqueezed372o)|0)>1){
								Lgeptoindexphi10=L$poptgepsqueezed372[L$poptgepsqueezed372o+1|0]|0;
								L$poptgepsqueezed372o=L$poptgepsqueezed372o+1|0;
								L$poptgepsqueezed372=L$poptgepsqueezed372;
							}
							L$p06=L$p06+1|0;
							L$p07=Lgeptoindexphi10<<24>0&&(Lgeptoindexphi10&255)!==127?1:0;
							if((0+L$p06|0)<(tmp16o+ -1|0))continue;
							break;
						}
					}
					if(!(L$p07)){
						L$p06=1;
						break a;
					}
				}else{
					Lgeptoindexphi10=L$poptgepsqueezed372[0]|0;
					if(Lgeptoindexphi10<<24<=0){
						L$p06=1;
						break a;
					}
					if((Lgeptoindexphi10&255)===127){
						L$p06=1;
						break a;
					}
				}
				if((tmp16[tmp16o+ -1|0]|0)-1>>>0<Lgeptoindexphi10<<24>>24>>>0){
					L$p06=1;
					break a;
				}
			}
			Larg5[Marg5]=Larg5[Marg5]|4;
			L$p06=0;
		}else{
			L$p06=1;
		}
	}
	tmp13=tmp2.a0;
	tmp2.a0=nullArray;
	if(tmp13!==nullArray||0!==0)tmp2.a1(tmp13,0);
	return L$p06|0;
}
function __ZSt19__double_or_nothingIjEvRSt10unique_ptrIT_PFvPvEERPS1_S8_(Larg0,Larg1,Marg1,Larg2,Marg2){
	var tmp0=null,tmp1=0,L$ppre3=null,L$ppre=null,tmp4=0,tmp5=0;
	L$ppre3=Larg0.a1;
	L$ppre=Larg2[Marg2];
	tmp0=Larg0.a0;
	tmp4=((0)*4);
	tmp5=((L$ppre.o)*4)-tmp4|0;
	if(tmp5>>>0<2147483647){
		tmp5<<=1;
		tmp1=(tmp5|0)!==0?tmp5|0:4|0;
	}else{
		tmp1=-1;
	}
	L$ppre=Larg1[Marg1];
	tmp4=((L$ppre.o)*4)-tmp4>>2;
	tmp5=L$ppre3!==__ZSt12__do_nothingPv?1:0;
	a:{
		b:{
			if(tmp0!==nullArray||0!==0)if(!(tmp5^1)){
				L$ppre3=(function(){var __old__=tmp0;
					var __ret__=new Int32Array(tmp1/4|0);
					__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));
					return __ret__;})();
				break b;
			}
			L$ppre3=new Int32Array(tmp1/4|0);
			if(!(tmp5)){
				L$ppre=Larg0.a0;
				Larg0.a0=L$ppre3;
				if(L$ppre===nullArray&&0===0)break a;
				Larg0.a1(L$ppre,0);
				L$ppre3=Larg0.a0;
				break a;
			}
		}
		Larg0.a0=L$ppre3;
	}
	Larg0.a1=___genericjs__free;
	Larg1[Marg1]={d:L$ppre3,o:0+tmp4|0};
	L$ppre3=Larg0.a0;
	Larg2[Marg2]={d:L$ppre3,o:0+(tmp1>>>2)|0};
}
function ___genericjs__free(Larg0,Marg0){
}
function __ZSt19__double_or_nothingIwEvRSt10unique_ptrIT_PFvPvEERPS1_S8_(Larg0,Larg1,Marg1,Larg2,Marg2){
	var tmp0=null,tmp0o=0,tmp1=0,L$ppre3=null,L$ppre3o=0,L$ppre=null,L$ppreo=0,tmp4=0,tmp5=0;
	L$ppre3=Larg0.a1;
	L$ppre=Larg2[Marg2];
	tmp0o=Larg0.a0o;
	tmp0=Larg0.a0;
	tmp4=((tmp0o)*4);
	tmp5=((L$ppre.o)*4)-tmp4|0;
	if(tmp5>>>0<2147483647){
		tmp5<<=1;
		tmp1=(tmp5|0)!==0?tmp5|0:4|0;
	}else{
		tmp1=-1;
	}
	L$ppre=Larg1[Marg1];
	tmp4=((L$ppre.o)*4)-tmp4>>2;
	tmp5=L$ppre3!==__ZSt12__do_nothingPv?1:0;
	a:{
		b:{
			if(tmp0!==nullArray||tmp0o!==0)if(!(tmp5^1)){
				L$ppre3=(function(){var __old__=tmp0;
					var __ret__=new Int32Array(tmp1/4|0);
					__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));
					return __ret__;})();
				break b;
			}
			L$ppre3=new Int32Array(tmp1/4|0);
			if(!(tmp5)){
				L$ppreo=Larg0.a0o;
				L$ppre=Larg0.a0;
				Larg0.a0=L$ppre3;
				Larg0.a0o=0;
				if(L$ppre!==nullArray||L$ppreo!==0){
					Larg0.a1(L$ppre,L$ppreo);
					L$ppre3o=Larg0.a0o;
					L$ppre3=Larg0.a0;
					break a;
				}
				L$ppre3o=0;
				L$ppre3=L$ppre3;
				break a;
			}
		}
		Larg0.a0=L$ppre3;
		Larg0.a0o=0;
		L$ppre3o=0;
		L$ppre3=L$ppre3;
	}
	Larg0.a1=___genericjs__free;
	Larg1[Marg1]={d:L$ppre3,o:L$ppre3o+tmp4|0};
	L$ppre3o=Larg0.a0o;
	L$ppre3=Larg0.a0;
	Larg2[Marg2]={d:L$ppre3,o:L$ppre3o+(tmp1>>>2)|0};
}
function __ZSt12__do_nothingPv(Larg0,Marg0){
}
function __ZNKSt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_bRSt8ios_baseRjRe(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6,Marg6,Larg7,Marg7){
	var LmergedArray=null,tmp1=null,tmp2=null,LmergedArray49=null,tmp4=0,tmp5=0,tmp6=null,tmp6o=0,tmp7=null,tmp7o=0,tmp8=0,tmp9=null,tmp9o=0,tmp10=null,tmp10o=0,Lgeptoindexphi=0;
	LmergedArray=new Int32Array(110);
	tmp1={a0:nullArray,a0o:0,a1:null};
	tmp1.a0=LmergedArray;
	tmp1.a0o=0;
	tmp1.a1=__ZSt12__do_nothingPv;
	tmp6=[nullObj];
	tmp2=Larg5.a7.a0;
	tmp2.i1=(tmp2.i1|0)+1|0;
	tmp7=tmp2.a2.a0;
	tmp7=tmp7[(__ZNSt5ctypeIwE2idE$p1|0)-1|0];
	LmergedArray49=new Uint8Array(101);
	LmergedArray49[0]=0;
	tmp8=Larg5.i1|0;
	tmp9={a0:null};
	tmp9.a0=Larg3.a0;
	tmp8=__ZNSt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE8__do_getERS3_S3_bRKSt6localejRjRbRKSt5ctypeIwERSt10unique_ptrIwPFvPvEERPwSL_(Larg2,tmp9,Larg4,tmp2,tmp8,Larg6,Marg6,LmergedArray49,0,tmp7,tmp1,tmp6,0,LmergedArray,0+100|0)|0;
	if(tmp8){
		tmp7.a0.a13(tmp7,__ZZNKSt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_bRSt8ios_baseRjReE5__src,0,__ZZNKSt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_bRSt8ios_baseRjReE5__src,10,LmergedArray,100);
		tmp9=tmp6[0];
		tmp10o=tmp1.a0o;
		tmp10=tmp1.a0;
		tmp8=((tmp9.o)*4)-((tmp10o)*4)|0;
		if((tmp8|0)>392){
			tmp7=new Uint8Array(((tmp8>>>2)+2|0)/1|0);
			tmp7o=0;
			tmp7=tmp7;
		}else{
			tmp7o=1;
			tmp7=LmergedArray49;
		}
		if((LmergedArray49[0]&255)!==0){
			tmp7[tmp7o]=45;
			tmp7o=tmp7o+1|0;
			tmp7=tmp7;
		}
		if(tmp10o<tmp9.o){
			tmp8=((100)*4);
			Lgeptoindexphi=0;
			while(1){
				tmp4=tmp10[tmp10o+Lgeptoindexphi|0]|0;
				if((LmergedArray[100]|0)===(tmp4|0)){
					tmp9o=100;
					tmp9=LmergedArray;
				}else if((LmergedArray[101]|0)===(tmp4|0)){
					tmp9o=100+1|0;
					tmp9=LmergedArray;
				}else if((LmergedArray[102]|0)===(tmp4|0)){
					tmp9o=100+2|0;
					tmp9=LmergedArray;
				}else if((LmergedArray[103]|0)===(tmp4|0)){
					tmp9o=100+3|0;
					tmp9=LmergedArray;
				}else if((LmergedArray[104]|0)===(tmp4|0)){
					tmp9o=100+4|0;
					tmp9=LmergedArray;
				}else if((LmergedArray[105]|0)===(tmp4|0)){
					tmp9o=100+5|0;
					tmp9=LmergedArray;
				}else if((LmergedArray[106]|0)===(tmp4|0)){
					tmp9o=100+6|0;
					tmp9=LmergedArray;
				}else if((LmergedArray[107]|0)===(tmp4|0)){
					tmp9o=100+7|0;
					tmp9=LmergedArray;
				}else if((LmergedArray[108]|0)===(tmp4|0)){
					tmp9o=100+8|0;
					tmp9=LmergedArray;
				}else{
					tmp5=LmergedArray[109]|0;
					tmp9o=(tmp5|0)===(tmp4|0)?100+9|0:100+10|0;
					tmp9=((tmp5|0)===(tmp4|0)?LmergedArray:LmergedArray);
				}
				tmp7[tmp7o]=__ZZNKSt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_bRSt8ios_baseRjReE5__src[((tmp9o)*4)-tmp8>>2]|0;
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				tmp9=tmp6[0];
				if((tmp10o+Lgeptoindexphi|0)<tmp9.o){
					tmp7o=tmp7o+1|0;
					tmp7=tmp7;
					continue;
				}
				break;
			}
			tmp7o=tmp7o+1|0;
			tmp7=tmp7;
		}
		tmp7[tmp7o]=0;
		_sscanf(LmergedArray49,1,nullObj,{d:Larg7,o:Marg7});
	}
	tmp7=Larg2.a0;
	if(tmp7!==null){
		tmp9o=tmp7.a3o;
		tmp9=tmp7.a3;
		tmp10=tmp7.a4;
		if(tmp9===tmp10&&tmp9o===0){
			tmp8=tmp7.a0.a10(tmp7)|0;
		}else{
			tmp8=tmp9[tmp9o]|0;
		}
		if((tmp8|0)===-1){
			Larg2.a0=null;
			tmp8=1;
		}else{
			tmp7=Larg2.a0;
			tmp8=tmp7===null?1:0;
		}
	}else{
		tmp8=1;
	}
	tmp7=Larg3.a0;
	a:{
		b:{
			if(tmp7!==null){
				tmp9o=tmp7.a3o;
				tmp9=tmp7.a3;
				tmp10=tmp7.a4;
				if(tmp9===tmp10&&tmp9o===0){
					Lgeptoindexphi=tmp7.a0.a10(tmp7)|0;
				}else{
					Lgeptoindexphi=tmp9[tmp9o]|0;
				}
				if((Lgeptoindexphi|0)!==-1){
					if(tmp8)break a;
					break b;
				}
				Larg3.a0=null;
			}
			if(!(tmp8))break a;
		}
		Larg6[Marg6]=Larg6[Marg6]|2;
	}
	Larg0.a0=Larg2.a0;
	tmp8=tmp2.i1|0;
	tmp2.i1=tmp8-1|0;
	if((tmp8|0)===0)tmp2.a0.a3(tmp2);
	tmp6o=tmp1.a0o;
	tmp6=tmp1.a0;
	tmp1.a0=nullArray;
	tmp1.a0o=0;
	if(tmp6!==nullArray||tmp6o!==0)tmp1.a1(tmp6,tmp6o);
}
function _sscanf(Larg0,Marg0,Larg1){
	var tmp0=null,tmp1=null,L$poptgep$poptgep6$poptgepsqueezed=null,Lgeptoindexphi=0;
	tmp0=[nullObj];
	tmp1=new constructor_struct$p_Z7__sFILE();
	tmp1.i3=516;
	tmp1.a0=Larg0;
	tmp1.a0o=Marg0;
	L$poptgep$poptgep6$poptgepsqueezed=tmp1.a4;
	L$poptgep$poptgep6$poptgepsqueezed.a0=Larg0;
	L$poptgep$poptgep6$poptgepsqueezed.a0o=Marg0;
	if((Larg0[Marg0]&255)!==0){
		Lgeptoindexphi=0;
		while(1){
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			if((Larg0[Marg0+Lgeptoindexphi|0]&255)!==0)continue;
			break;
		}
	}else{
		Lgeptoindexphi=0;
	}
	Lgeptoindexphi=(Marg0+Lgeptoindexphi|0)-(Marg0)|0;
	tmp1.i1=Lgeptoindexphi;
	L$poptgep$poptgep6$poptgepsqueezed.i1=Lgeptoindexphi;
	tmp1.a8=___seofread;
	tmp1.a12.a0=nullArray;
	tmp1.a12.a0o=0;
	tmp1.a16.a0=nullArray;
	tmp1.a16.a0o=0;
	tmp1.i3=-65020;
	tmp0[0]={d:arguments,o:_sscanf.length};
	L$poptgep$poptgep6$poptgepsqueezed=tmp0[0];
	___ssvfscanf_r(tmp1,_$pstr$p15$p265,L$poptgep$poptgep6$poptgepsqueezed.d,L$poptgep$poptgep6$poptgepsqueezed.o)|0;
	tmp0[0]=null;
}
function ___ssvfscanf_r(Larg0,Larg1,Larg2,Marg2){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,tmp5=null,tmp5o=0,tmp6=-0.,L$plcssa$pi=0,tmp8=null,tmp8o=0,tmp9=0,L$plcssa29=null,L$plcssa29o=0,Lgeptoindexphi18=0,Lgeptoindexphi=0,L$ppre=null,L$ppreo=0,tmp14=null,tmp14o=0,tmp15=0,Lgeptoindex23=0,tmp17=0,Lgeptoindexphi14=0,tmp19=0,tmp20=0;
	tmp0=[{d:Larg2,o:Marg2}];
	tmp1=new Uint8Array(256);
	tmp2=new constructor_struct$p_Z12_scan_data_t();
	tmp2.i3=0;
	tmp2.i4=0;
	tmp2.a5=tmp1;
	tmp2.a8=__sungetc_r;
	tmp2.a9=___ssrefill_r;
	L$plcssa$pi=Larg1[0]|0;
	if((L$plcssa$pi&255)!==0){
		tmp3={d:new DataView(new ArrayBuffer(8)),o:0};
		tmp4=new Int32Array(2);
		tmp8o=0;
		tmp8=Larg1;
		a:while(1){
			tmp9=L$plcssa$pi&255;
			b:{
				if((__ctype_b[128+tmp9|0]&8)===0){
					c:{
						d:{
							if((L$plcssa$pi&255)===37){
								tmp2.i2=0;
								tmp2.i0=0;
								tmp9=tmp8[tmp8o+1|0]|0;
								if(tmp9===42){
									tmp2.i0=16;
									tmp9=tmp8[tmp8o+2|0]|0;
									tmp8o=tmp8o+2|0;
									tmp8=tmp8;
									L$plcssa$pi=16;
								}else{
									tmp8o=tmp8o+1|0;
									tmp8=tmp8;
									L$plcssa$pi=0;
								}
								Lgeptoindexphi18=tmp9-48|0;
								if(Lgeptoindexphi18>>>0<10){
									Lgeptoindexphi=0;
									while(1){
										Lgeptoindexphi=(Lgeptoindexphi*10|0)+Lgeptoindexphi18|0;
										tmp2.i2=Lgeptoindexphi;
										tmp9=tmp8[tmp8o+1|0]|0;
										Lgeptoindexphi18=tmp9-48|0;
										if(Lgeptoindexphi18>>>0<10){
											tmp8o=tmp8o+1|0;
											tmp8=tmp8;
											continue;
										}
										break;
									}
									tmp8o=tmp8o+1|0;
									tmp8=tmp8;
								}
								e:{
									switch(tmp9){
										case 104:
										L$plcssa29o=0;
										L$plcssa29=_$pstr$p356;
										break;
										case 108:
										L$plcssa29o=1;
										L$plcssa29=_$pstr$p356;
										break;
										case 76:
										L$plcssa29o=2;
										L$plcssa29=_$pstr$p356;
										break;
										default:
										break e;
									}
									tmp9=(L$plcssa29o)-(0)|0;
									if((tmp9|0)===1){
										if((tmp8[tmp8o+1|0]|0)===108){
											tmp8o=tmp8o+2|0;
											tmp8=tmp8;
											Lgeptoindexphi=4;
										}else{
											tmp8o=tmp8o+1|0;
											tmp8=tmp8;
											Lgeptoindexphi=2;
										}
									}else{
										tmp8o=tmp8o+1|0;
										tmp8=tmp8;
										Lgeptoindexphi=1<<tmp9;
									}
									L$plcssa$pi|=Lgeptoindexphi;
									tmp2.i0=L$plcssa$pi;
									tmp9=tmp8[tmp8o]|0;
								}
								e:{
									switch(tmp9&255){
										case 37:
										tmp8o=tmp8o+1|0;
										tmp8=tmp8;
										tmp9=37;
										break d;
										case 120:
										L$plcssa$pi|=512;
										tmp2.i0=L$plcssa$pi;
										tmp2.i1=16;
										break;
										case 100:
										case 117:
										tmp2.i1=10;
										break;
										case 105:
										tmp2.i1=0;
										break;
										case 111:
										tmp2.i1=8;
										break;
										case 91:
										tmp8=___sccl(tmp1,0,tmp8,tmp8o+1|0);
										tmp8o=oSlot;
										L$plcssa$pi=tmp2.i0|64;
										tmp2.i0=L$plcssa$pi;
										tmp2.i6=1;
										break e;
										case 99:
										L$plcssa$pi|=64;
										tmp2.i0=L$plcssa$pi;
										tmp2.i6=0;
										tmp8o=tmp8o+1|0;
										tmp8=tmp8;
										break e;
										case 115:
										tmp2.i6=2;
										tmp8o=tmp8o+1|0;
										tmp8=tmp8;
										break e;
										case 110:
										if((L$plcssa$pi&16|0)!==0){
											tmp8o=tmp8o+1|0;
											tmp8=tmp8;
											break b;
										}
										if((L$plcssa$pi&1|0)!==0){
											L$plcssa$pi=tmp2.i4|0;
											L$plcssa29=handleVAArg(tmp0[0]);
											L$plcssa29.d[L$plcssa29.o]=L$plcssa$pi;
											tmp8o=tmp8o+1|0;
											tmp8=tmp8;
											break b;
										}
										if((L$plcssa$pi&2|0)!==0){
											L$plcssa$pi=tmp2.i4|0;
											L$plcssa29=handleVAArg(tmp0[0]);
											L$plcssa29.d[L$plcssa29.o]=L$plcssa$pi;
											tmp8o=tmp8o+1|0;
											tmp8=tmp8;
											break b;
										}
										tmp9=tmp2.i4|0;
										if((L$plcssa$pi&4|0)!==0){
											L$plcssa29=handleVAArg(tmp0[0]);
											L$plcssa29.d[L$plcssa29.o+1|0]=tmp9>>31;
											L$plcssa29.d[L$plcssa29.o]=tmp9;
											tmp8o=tmp8o+1|0;
											tmp8=tmp8;
											break b;
										}
										L$plcssa29=handleVAArg(tmp0[0]);
										L$plcssa29.d[L$plcssa29.o]=tmp9;
										tmp8o=tmp8o+1|0;
										tmp8=tmp8;
										break b;
										case 0:
										return  -1|0;
										case 101:
										case 102:
										case 103:
										tmp2.i6=5;
										tmp8o=tmp8o+1|0;
										tmp8=tmp8;
										break e;
										default:
										tmp2.i6=3;
										tmp2.i1=10;
										tmp8o=tmp8o+1|0;
										tmp8=tmp8;
										break e;
									}
									tmp2.i6=(tmp9&255)<111?3|0:4|0;
									tmp8o=tmp8o+1|0;
									tmp8=tmp8;
								}
								if((Larg0.i1|0)<1){
									if((tmp2.a9(_impure_data,Larg0)|0|0)!==0)break c;
									L$plcssa$pi=tmp2.i0|0;
								}
								if((L$plcssa$pi&64|0)===0){
									L$plcssa29o=Larg0.a0o;
									L$plcssa29=Larg0.a0;
									if((__ctype_b[128+(L$plcssa29[L$plcssa29o]&255)|0]&8)!==0)while(1){
										tmp2.i4=(tmp2.i4|0)+1|0;
										L$plcssa$pi=Larg0.i1|0;
										Larg0.i1=L$plcssa$pi-1|0;
										if((L$plcssa$pi|0)>1){
											Larg0.a0=L$plcssa29;
											Larg0.a0o=L$plcssa29o+1|0;
											L$plcssa29o=L$plcssa29o+1|0;
											L$plcssa29=L$plcssa29;
										}else{
											if((tmp2.a9(_impure_data,Larg0)|0|0)!==0)break c;
											L$plcssa29o=Larg0.a0o;
											L$plcssa29=Larg0.a0;
										}
										if((__ctype_b[128+(L$plcssa29[L$plcssa29o]&255)|0]&8)!==0)continue;
										break;
									}
								}
								L$plcssa$pi=tmp2.i6|0;
								if((L$plcssa$pi|0)<3){
									if((tmp2.i2|0)===0)tmp2.i2=(L$plcssa$pi|0)!==0? -1|0:1|0;
									if((tmp2.i0&16|0)!==0){
									}else{
										L$plcssa29=handleVAArg(tmp0[0]);
										L$plcssa29o=L$plcssa29.o;
										L$plcssa29=L$plcssa29.d;
									}
									tmp9=0;
									while(1){
										e:{
											switch(L$plcssa$pi|0){
												case 0:
												break e;
												case 1:
												L$ppre=tmp2.a5;
												tmp14o=Larg0.a0o;
												tmp14=Larg0.a0;
												if((L$ppre[tmp14[tmp14o]&255]&255)!==0)break e;
												L$plcssa$pi=1;
												break;
												case 2:
												L$ppreo=Larg0.a0o;
												L$ppre=Larg0.a0;
												if((__ctype_b[128+(L$ppre[L$ppreo]&255)|0]&8)===0)break e;
												L$plcssa$pi=2;
												break;
												default:
											}
											if((tmp9|0)!==0)break;
											if((L$plcssa$pi|0)===1)break a;
											tmp9=0;
											break;
										}
										if((tmp2.i0&16|0)===0){
											L$ppreo=Larg0.a0o;
											L$ppre=Larg0.a0;
											L$plcssa29[L$plcssa29o]=L$ppre[L$ppreo]|0;
											L$plcssa29o=L$plcssa29o+1|0;
											L$plcssa29=L$plcssa29;
										}
										L$plcssa$pi=Larg0.i1|0;
										Larg0.i1=L$plcssa$pi-1|0;
										L$ppreo=Larg0.a0o;
										L$ppre=Larg0.a0;
										Larg0.a0=L$ppre;
										Larg0.a0o=L$ppreo+1|0;
										Lgeptoindexphi18=(tmp2.i2|0)-1|0;
										tmp2.i2=Lgeptoindexphi18;
										tmp9=tmp9+1|0;
										if((Lgeptoindexphi18|0)!==0){
											if((L$plcssa$pi|0)<2)if((tmp2.a9(_impure_data,Larg0)|0|0)!==0)break;
											L$plcssa$pi=tmp2.i6|0;
											continue;
										}
										break;
									}
									if((tmp2.i0&16|0)===0){
										tmp2.i3=(tmp2.i3|0)+1|0;
										if((tmp2.i6|0)!==0)L$plcssa29[L$plcssa29o]=0;
									}
									tmp2.i4=(tmp2.i4|0)+tmp9|0;
									break b;
								}
								L$plcssa29=tmp2.a7;
								if((L$plcssa$pi|0)<5){
									tmp15=tmp2.i2|0;
									if(tmp15-1>>>0>348){
										tmp2.i2=349;
										Lgeptoindexphi18=tmp15-349|0;
										tmp15=349;
									}else{
										Lgeptoindexphi18=0;
									}
									tmp2.i0=tmp2.i0|3328;
									L$ppreo=Larg0.a0o;
									L$ppre=Larg0.a0;
									e:{
										switch(L$ppre[L$ppreo]&255){
											case 43:
											case 45:
											tmp2.i2=tmp15-1|0;
											Larg0.a0=L$ppre;
											Larg0.a0o=L$ppreo+1|0;
											L$plcssa29[0]=L$ppre[L$ppreo]|0;
											tmp15=Larg0.i1|0;
											Larg0.i1=tmp15-1|0;
											if((tmp15|0)<2){
												if((tmp2.a9(_impure_data,Larg0)|0|0)!==0){
													tmp9=0;
													tmp15=1;
													break e;
												}
												L$ppreo=Larg0.a0o;
												L$ppre=Larg0.a0;
												tmp15=1;
												break;
											}
											L$ppreo=L$ppreo+1|0;
											L$ppre=L$ppre;
											tmp15=1;
											break;
											default:
											tmp15=0;
										}
										if((L$ppre[L$ppreo]&255)===48){
											if((tmp2.i1|0)!==0){
												tmp9=tmp2.i0|0;
											}else{
												tmp2.i1=8;
												tmp9=tmp2.i0|512;
												tmp2.i0=tmp9;
											}
											tmp2.i0=tmp9& -1281;
											tmp9=tmp2.i2|0;
											tmp2.i2=tmp9-1|0;
											if((tmp9|0)!==0){
												Larg0.a0=L$ppre;
												Larg0.a0o=L$ppreo+1|0;
												L$plcssa29[tmp15]=L$ppre[L$ppreo]|0;
												tmp9=Larg0.i1|0;
												Larg0.i1=tmp9-1|0;
												tmp15=tmp15+1|0;
												if((tmp9|0)<2){
													if((tmp2.a9(_impure_data,Larg0)|0|0)!==0){
														tmp9=0;
														break e;
													}
													L$ppreo=Larg0.a0o;
													L$ppre=Larg0.a0;
												}else{
													L$ppreo=L$ppreo+1|0;
													L$ppre=L$ppre;
												}
											}
										}
										switch(L$ppre[L$ppreo]&255){
											case 120:
											case 88:
											tmp9=tmp2.i0|0;
											if((tmp9&1536|0)!==512)break;
											tmp2.i1=16;
											tmp2.i0=tmp9|256;
											tmp9=tmp2.i2|0;
											tmp2.i2=tmp9-1|0;
											if((tmp9|0)===0)break;
											Larg0.a0=L$ppre;
											Larg0.a0o=L$ppreo+1|0;
											L$plcssa29[tmp15]=L$ppre[L$ppreo]|0;
											tmp9=Larg0.i1|0;
											Larg0.i1=tmp9-1|0;
											tmp15=tmp15+1|0;
											if((tmp9|0)>=2)break;
											if((tmp2.a9(_impure_data,Larg0)|0|0)===0)break;
											tmp9=0;
											break e;
											default:
										}
										tmp9=tmp2.i1|0;
										if((tmp9|0)===0){
											tmp2.i1=10;
											tmp9=10;
										}
										L$ppre=tmp2.a5;
										___sccl(L$ppre,0,_$pstr$p385,16+(-tmp9|0)|0);
										Lgeptoindexphi=tmp2.i2|0;
										if((Lgeptoindexphi|0)!==0){
											tmp9=0;
											while(1){
												L$ppreo=Larg0.a0o;
												L$ppre=Larg0.a0;
												tmp17=L$ppre[L$ppreo]|0;
												tmp14=tmp2.a5;
												if((tmp14[tmp17&255]&255)!==0){
													Lgeptoindex23=tmp2.i0|0;
													f:{
														if((tmp17&255)===48)if((Lgeptoindex23&2048|0)!==0){
															tmp9=tmp9+1|0;
															if((Lgeptoindexphi18|0)!==0){
																Lgeptoindexphi=Lgeptoindexphi+1|0;
																tmp2.i2=Lgeptoindexphi;
																Lgeptoindexphi18=Lgeptoindexphi18-1|0;
																break f;
															}
															Lgeptoindexphi18=0;
															break f;
														}
														tmp2.i0=Lgeptoindex23& -2305;
														L$plcssa29[tmp15]=L$ppre[L$ppreo]|0;
														tmp15=tmp15+1|0;
													}
													tmp17=Larg0.i1|0;
													Larg0.i1=tmp17-1|0;
													if((tmp17|0)>1){
														Larg0.a0=L$ppre;
														Larg0.a0o=L$ppreo+1|0;
													}else{
														if((tmp2.a9(_impure_data,Larg0)|0|0)!==0)break e;
														Lgeptoindexphi=tmp2.i2|0;
													}
													Lgeptoindexphi=Lgeptoindexphi-1|0;
													tmp2.i2=Lgeptoindexphi;
													if((Lgeptoindexphi|0)!==0)continue;
												}
												break;
											}
										}else{
											tmp9=0;
										}
									}
									Lgeptoindexphi18=tmp2.i0|0;
									e:{
										if((Lgeptoindexphi18&256|0)!==0){
											if((tmp15|0)>0){
												tmp2.a8(_impure_data,L$plcssa29[tmp15+ -1|0]<<24>>24,Larg0)|0;
												Lgeptoindexphi=-1;
											}else{
												Lgeptoindexphi=0;
											}
											if(L$plcssa29===L$plcssa29&&(tmp15+Lgeptoindexphi|0)===0){
												L$plcssa$pi=1;
												break e;
											}
											Lgeptoindexphi18=tmp2.i0|0;
										}else{
											Lgeptoindexphi=0;
										}
										if((Lgeptoindexphi18&16|0)===0){
											L$plcssa29[tmp15+Lgeptoindexphi|0]=0;
											((L$plcssa$pi|0)===3?__strtoll_r:__strtoull_r)(tmp4,0,_impure_data,L$plcssa29,0,nullArray,0,tmp2.i1|0);
											Lgeptoindexphi18=tmp4[1]|0;
											Lgeptoindex23=tmp4[0]|0;
											tmp17=tmp2.i0|0;
											if((tmp17&1|0)!==0){
												L$ppre=handleVAArg(tmp0[0]);
												L$ppre.d[L$ppre.o]=Lgeptoindex23;
											}else if((tmp17&2|0)!==0){
												L$ppre=handleVAArg(tmp0[0]);
												L$ppre.d[L$ppre.o]=Lgeptoindex23;
											}else{
												L$ppre=handleVAArg(tmp0[0]);
												if((tmp17&4|0)!==0){
													L$ppre.d[L$ppre.o+1|0]=Lgeptoindexphi18;
													L$ppre.d[L$ppre.o]=Lgeptoindex23;
												}else L$ppre.d[L$ppre.o]=Lgeptoindex23;
											}
											tmp2.i3=(tmp2.i3|0)+1|0;
										}
										tmp2.i4=((tmp9-(0)|0)+(tmp15+Lgeptoindexphi|0)|0)+(tmp2.i4|0)|0;
										L$plcssa$pi=0;
									}
								}else{
									L$plcssa$pi=tmp2.i2|0;
									if(L$plcssa$pi-1>>>0>348){
										tmp2.i2=349;
										tmp17=L$plcssa$pi-349|0;
										L$plcssa$pi=349;
									}else{
										tmp17=0;
									}
									tmp2.i0=tmp2.i0|1920;
									tmp5o=0;
									tmp5=L$plcssa29;
									Lgeptoindexphi14=0;
									tmp15=0;
									Lgeptoindex23=0;
									L$ppreo=0;
									L$ppre=nullArray;
									Lgeptoindexphi=0;
									Lgeptoindexphi18=0;
									tmp9=0;
									e:while(1){
										tmp14o=Larg0.a0o;
										tmp14=Larg0.a0;
										tmp19=tmp14[tmp14o]|0;
										f:{
											g:{
												switch(tmp19&255){
													case 48:
													tmp20=tmp2.i0|0;
													if((tmp20&256|0)===0)break;
													tmp2.i0=tmp20& -129;
													tmp15=tmp15+1|0;
													if((tmp17|0)!==0){
														L$plcssa$pi=L$plcssa$pi+1|0;
														tmp2.i2=L$plcssa$pi;
														tmp17=tmp17-1|0;
														break f;
													}
													tmp17=0;
													break f;
													case 49:
													case 50:
													case 51:
													case 52:
													case 53:
													case 54:
													case 55:
													case 56:
													case 57:
													break;
													case 43:
													case 45:
													tmp20=tmp2.i0|0;
													if(tmp20<<24>=0)break e;
													tmp2.i0=tmp20& -129;
													break g;
													case 110:
													case 78:
													h:{
														if(Lgeptoindexphi18===0)if((tmp15|0)===0){
															tmp20=tmp2.i0|0;
															if((tmp20&1792|0)!==1792)break h;
															tmp2.i0=tmp20& -1921;
															Lgeptoindexphi18=1;
															tmp15=0;
															break g;
														}
														if(Lgeptoindexphi18===2){
															Lgeptoindexphi18=3;
															break g;
														}
													}
													switch(tmp9&255){
														case 4:
														case 1:
														tmp9=tmp9+1|0;
														break g;
														default:
														break e;
													}
													case 97:
													case 65:
													if(Lgeptoindexphi18!==1)break e;
													Lgeptoindexphi18=2;
													break g;
													case 105:
													case 73:
													if((tmp9&255)===0)if((tmp15|0)===0){
														tmp9=tmp2.i0|0;
														if((tmp9&1792|0)===1792){
															tmp2.i0=tmp9& -1921;
															tmp9=1;
															tmp15=0;
															break g;
														}
														tmp9=0;
														tmp15=0;
														break e;
													}
													switch(tmp9&255){
														case 5:
														case 3:
														tmp9=tmp9+1|0;
														break g;
														default:
														break e;
													}
													case 102:
													case 70:
													if((tmp9&255)!==2)break e;
													tmp9=3;
													break g;
													case 116:
													case 84:
													if((tmp9&255)!==6)break e;
													tmp9=7;
													break g;
													case 121:
													case 89:
													if((tmp9&255)!==7)break e;
													tmp9=8;
													break g;
													case 46:
													tmp20=tmp2.i0|0;
													if((tmp20&512|0)===0)break e;
													tmp2.i0=tmp20& -641;
													Lgeptoindex23=tmp15;
													break g;
													case 101:
													case 69:
													tmp20=tmp2.i0|0;
													if((tmp20&1280|0)!==1024){
														if((tmp15|0)===0)break e;
														if((tmp20&1024|0)===0)break e;
													}
													tmp2.i0=tmp20& -1921|384;
													Lgeptoindexphi14=(tmp20&512|0)!==0?Lgeptoindexphi14|0:tmp15-Lgeptoindex23|0;
													L$ppreo=(tmp20&512|0)!==0?L$ppreo:tmp5o;
													L$ppre=((tmp20&512|0)!==0?L$ppre:tmp5);
													tmp15=0;
													break g;
													default:
													break e;
												}
												if((Lgeptoindexphi18<<24>>24|0)!==(-(tmp9<<24>>24)|0))break e;
												tmp2.i0=tmp2.i0& -385;
											}
											tmp5[tmp5o]=tmp19;
											Lgeptoindexphi=Lgeptoindexphi+1|0;
										}
										L$plcssa$pi=L$plcssa$pi-1|0;
										tmp2.i2=L$plcssa$pi;
										tmp2.i4=(tmp2.i4|0)+1|0;
										tmp19=Larg0.i1|0;
										Larg0.i1=tmp19-1|0;
										if((tmp19|0)>1){
											Larg0.a0=tmp14;
											Larg0.a0o=tmp14o+1|0;
										}else{
											if((tmp2.a9(_impure_data,Larg0)|0|0)!==0)break e;
											L$plcssa$pi=tmp2.i2|0;
										}
										if((L$plcssa$pi|0)!==0){
											tmp5o=Lgeptoindexphi;
											tmp5=L$plcssa29;
											continue e;
										}
										break;
									}
									if((tmp15|0)!==0)tmp2.i0=tmp2.i0& -257;
									e:if((Lgeptoindexphi18<<24>>24)-1>>>0<2){
										if((Lgeptoindexphi|0)>0){
											Lgeptoindexphi14=0;
											while(1){
												Lgeptoindexphi14=Lgeptoindexphi14-1|0;
												tmp2.a8(_impure_data,L$plcssa29[Lgeptoindexphi+Lgeptoindexphi14|0]<<24>>24,Larg0)|0;
												tmp2.i4=(tmp2.i4|0)-1|0;
												if((Lgeptoindexphi+Lgeptoindexphi14|0)>0)continue;
												break;
											}
											L$plcssa$pi=1;
										}else{
											L$plcssa$pi=1;
										}
									}else{
										if((tmp9<<24>>24)-1>>>0<7)if(tmp9<<24>33554432){
											if((tmp9&255)!==3)while(1){
												Lgeptoindexphi=Lgeptoindexphi-1|0;
												tmp2.a8(_impure_data,L$plcssa29[Lgeptoindexphi]<<24>>24,Larg0)|0;
												tmp2.i4=(tmp2.i4|0)-1|0;
												if(tmp9<<24>67108864){
													tmp9=tmp9+255|0;
													continue;
												}
												break;
											}
										}else{
											if((Lgeptoindexphi|0)<=0){
												L$plcssa$pi=1;
												break e;
											}
											while(1){
												Lgeptoindexphi14=Lgeptoindexphi-1|0;
												tmp2.a8(_impure_data,L$plcssa29[Lgeptoindexphi14]<<24>>24,Larg0)|0;
												tmp2.i4=(tmp2.i4|0)-1|0;
												if((Lgeptoindexphi|0)>1){
													Lgeptoindexphi=Lgeptoindexphi14;
													continue;
												}
												break;
											}
											L$plcssa$pi=1;
											break e;
										}
										tmp9=tmp2.i0|0;
										if((tmp9&256|0)!==0){
											if((tmp9&1024|0)!==0){
												if((Lgeptoindexphi|0)<=0){
													L$plcssa$pi=1;
													break e;
												}
												while(1){
													tmp9=Lgeptoindexphi-1|0;
													tmp2.a8(_impure_data,L$plcssa29[tmp9]<<24>>24,Larg0)|0;
													tmp2.i4=(tmp2.i4|0)-1|0;
													if((Lgeptoindexphi|0)>1){
														Lgeptoindexphi=tmp9;
														continue;
													}
													break;
												}
												L$plcssa$pi=1;
												break e;
											}else{
												tmp9=L$plcssa29[Lgeptoindexphi+ -1|0]<<24>>24;
												tmp2.i4=(tmp2.i4|0)-1|0;
												switch(tmp9|0){
													case 101:
													case 69:
													Lgeptoindexphi18=-1;
													break;
													default:
													tmp2.a8(_impure_data,tmp9,Larg0)|0;
													tmp9=L$plcssa29[Lgeptoindexphi+ -2|0]|0;
													tmp2.i4=(tmp2.i4|0)-1|0;
													tmp9=tmp9<<24>>24;
													Lgeptoindexphi18=-2;
												}
												tmp2.a8(_impure_data,tmp9,Larg0)|0;
												tmp9=tmp2.i0|0;
											}
										}else{
											Lgeptoindexphi18=0;
										}
										if((tmp9&16|0)!==0){
											L$plcssa$pi=0;
										}else{
											L$plcssa29[Lgeptoindexphi+Lgeptoindexphi18|0]=0;
											f:{
												if((tmp2.i0&1536|0)===1024){
													Lgeptoindex23=tmp15-Lgeptoindex23|0;
													if((Lgeptoindex23|0)===0)break f;
													L$plcssa$pi=-Lgeptoindex23|0;
													L$ppreo=Lgeptoindexphi+Lgeptoindexphi18|0;
													L$ppre=L$plcssa29;
												}else{
													if((Lgeptoindexphi14|0)===0)break f;
													Lgeptoindexphi18=0;
													while(1){
														Lgeptoindex23=Lgeptoindexphi18+1|0;
														Lgeptoindexphi=L$ppre[(L$ppreo+1|0)+Lgeptoindexphi18|0]|0;
														tmp15=Lgeptoindexphi&255;
														if((__ctype_b[128+tmp15|0]&8)!==0){
															Lgeptoindexphi18=Lgeptoindex23;
															continue;
														}
														g:{
															switch(Lgeptoindexphi&255){
																case 45:
																Lgeptoindexphi=1;
																break;
																case 43:
																Lgeptoindexphi=0;
																break;
																default:
																Lgeptoindexphi=0;
																break g;
															}
															Lgeptoindex23=L$ppre[(L$ppreo+1|0)+Lgeptoindex23|0]|0;
															tmp15=Lgeptoindex23&255;
															Lgeptoindex23=Lgeptoindexphi18+2|0;
														}
														break;
													}
													Lgeptoindexphi18=(Lgeptoindexphi|0)!==0? -2147483648|0:2147483647|0;
													tmp9=(Lgeptoindexphi18>>>0)%10|0;
													L$plcssa$pi=0;
													tmp17=0;
													while(1){
														tmp19=__ctype_b[128+tmp15|0]<<24>>24;
														if((tmp19&4|0)!==0){
															tmp19=48;
														}else{
															tmp19&=3;
															if((tmp19|0)===0)break;
															tmp19=(tmp19|0)===1?55|0:87|0;
														}
														tmp15=tmp15-tmp19|0;
														if((tmp15|0)<10){
															g:if(tmp17>>>0>214748364){
																L$plcssa$pi=-1;
															}else if((L$plcssa$pi|0)<0){
																L$plcssa$pi=-1;
															}else{
																L$plcssa$pi=(tmp15|0)>(tmp9|0)?1:0;
																if((tmp17|0)===214748364)if(L$plcssa$pi){
																	L$plcssa$pi=-1;
																	tmp17=214748364;
																	break g;
																}
																tmp17=tmp15+(tmp17*10|0)|0;
																L$plcssa$pi=1;
															}
															tmp15=L$ppre[(L$ppreo+1|0)+Lgeptoindex23|0]|0;
															tmp15=tmp15&255;
															Lgeptoindex23=Lgeptoindex23+1|0;
															continue;
														}
														break;
													}
													if((L$plcssa$pi|0)<0)_impure_data.i0=34;
													else{
														Lgeptoindexphi18=(Lgeptoindexphi|0)!==0?-tmp17|0:tmp17|0;
													}
													L$plcssa$pi=Lgeptoindexphi18-Lgeptoindexphi14|0;
												}
												if(L$ppreo>=339){
													L$ppreo=338;
													L$ppre=L$plcssa29;
												}
												_siprintf(L$ppre,L$ppreo,_$pstr$p380,0,L$plcssa$pi)|0;
											}
											tmp6=+__strtod_r(L$plcssa29,0,nullArray,0);
											L$plcssa$pi=tmp2.i0|0;
											f:if((L$plcssa$pi&2|0)!==0){
												L$plcssa29=handleVAArg(tmp0[0]);
												L$plcssa29.d[L$plcssa29.o]=tmp6;
											}else if((L$plcssa$pi&4|0)!==0){
												L$plcssa29=handleVAArg(tmp0[0]);
												L$plcssa29.d[L$plcssa29.o]=tmp6;
											}else{
												L$plcssa29=handleVAArg(tmp0[0]);
												tmp3.d.setFloat64(tmp3.o,tmp6,true);
												L$plcssa$pi=tmp3.d.getInt32(1*4+tmp3.o,true)|0;
												tmp9=tmp3.d.getInt32(tmp3.o,true)|0;
												g:if((tmp9|L$plcssa$pi|0)!==0){
													if((L$plcssa$pi|0)===-2147483648)if((tmp9|0)===0)break g;
													if(L$plcssa$pi>>>0>=1048576)if((L$plcssa$pi&2147483647)-1048576>>>0>=2145386496){
														if((L$plcssa$pi|0)<0)if(L$plcssa$pi>>>0<2148532224)break g;
														if((L$plcssa$pi|0)===2146435072)if((tmp9|0)===0)break g;
														if((L$plcssa$pi|0)===-1048576)if((tmp9|0)===0)break g;
														L$plcssa29.d[L$plcssa29.o]=NaN;
														break f;
													}
												}
												L$plcssa29.d[L$plcssa29.o]=tmp6;
											}
											tmp2.i3=(tmp2.i3|0)+1|0;
											L$plcssa$pi=0;
										}
									}
								}
								if((L$plcssa$pi|0)===1)break a;
								break b;
							}
							tmp8o=tmp8o+1|0;
							tmp8=tmp8;
						}
						if((Larg0.i1|0)<1)if((tmp2.a9(_impure_data,Larg0)|0|0)!==0)break c;
						L$plcssa29o=Larg0.a0o;
						L$plcssa29=Larg0.a0;
						if((tmp9|0)!==(L$plcssa29[L$plcssa29o]&255|0))break a;
						Larg0.i1=(Larg0.i1|0)-1|0;
						Larg0.a0=L$plcssa29;
						Larg0.a0o=L$plcssa29o+1|0;
						tmp2.i4=(tmp2.i4|0)+1|0;
						break b;
					}
					L$plcssa$pi=tmp2.i3|0;
					if((L$plcssa$pi|0)!==0){
						tmp9=Larg0.i3|0;
						return ((tmp9&64|0)!==0? -1|0:L$plcssa$pi|0)|0;
					}
					return  -1|0;
				}
				L$plcssa$pi=Larg0.i1|0;
				while(1){
					if((L$plcssa$pi|0)<=0)if((tmp2.a9(_impure_data,Larg0)|0|0)!==0)break;
					L$plcssa29o=Larg0.a0o;
					L$plcssa29=Larg0.a0;
					if((__ctype_b[128+(L$plcssa29[L$plcssa29o]&255)|0]&8)!==0){
						tmp2.i4=(tmp2.i4|0)+1|0;
						L$plcssa$pi=(Larg0.i1|0)-1|0;
						Larg0.i1=L$plcssa$pi;
						Larg0.a0=L$plcssa29;
						Larg0.a0o=L$plcssa29o+1|0;
						continue;
					}
					break;
				}
				tmp8o=tmp8o+1|0;
				tmp8=tmp8;
			}
			L$plcssa$pi=tmp8[tmp8o]|0;
			if((L$plcssa$pi&255)!==0)continue a;
			break;
		}
		L$plcssa$pi=tmp2.i3|0;
		return L$plcssa$pi|0;
	}
	return 0|0;
}
function __strtod_r(Larg0,Marg0,Larg1,Marg1){
	var LmergedArray=null,LmergedArray394=null,tmp2=0,tmp3=0,LmergedArray395=null,Lgeptoindexphi=0,Lgeptoindex68=0,tmp7=0,Lgeptoindex130=0,tmp9=0,Lgeptoindex34=0,Lgeptoindexphi51=0,tmp12=0,L$pdispatch=0,Lgeptoindex38=0,L$pidx3$pval$pi=null,L$pidx3$pval$pio=0,L$plcssa261=null,L$plcssa261o=0,L$pidx$pval$pi=0,L$pdispatch24=0,L$p7=null,L$p7o=0,tmp20=-0.,L$plcssa47$pi=0,Lgeptoindexphi166=0,tmp23=null,L$p035=null,L$p035o=0,tmp25=null,Lgeptoindexphi82=0,L$pdispatch20=0,L$pdispatch18=null,L$pdispatch18o=0,L$pdispatch22=0,L$pdispatch25=0,tmp31=-0.,tmp32=-0.;
	LmergedArray=new Int32Array(8);
	LmergedArray394={d:new DataView(new ArrayBuffer(24)),o:0};
	LmergedArray394.d.setFloat64(1*8+LmergedArray394.o,0,true);
	Lgeptoindexphi=0;
	a:{
		b:{
			c:while(1){
				Lgeptoindex68=Larg0[Marg0+Lgeptoindexphi|0]|0;
				switch(Lgeptoindex68<<24>>24|0){
					case 45:
					tmp7=1;
					break c;
					case 43:
					tmp7=0;
					break c;
					case 0:
					tmp7=0;
					L$p7={d:Larg0,o:Marg0};
					break a;
					case 9:
					case 10:
					case 11:
					case 12:
					case 13:
					case 32:
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					continue c;
					default:
					tmp7=0;
					break b;
				}
				break;
			}
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			Lgeptoindex68=Larg0[Marg0+Lgeptoindexphi|0]|0;
			if((Lgeptoindex68&255)===0){
				tmp7=0;
				L$p7={d:Larg0,o:Marg0};
				break a;
			}
		}
		if((Lgeptoindex68&255)===48){
			Lgeptoindex130=Lgeptoindexphi+1|0;
			switch(Larg0[Marg0+Lgeptoindex130|0]<<24>>24|0){
				case 120:
				case 88:
				Lgeptoindex34=Lgeptoindexphi+2|0;
				L$pdispatch25=0;
				while(1){
					Lgeptoindexphi=Lgeptoindex34+L$pdispatch25|0;
					Lgeptoindex68=Larg0[Marg0+Lgeptoindexphi|0]|0;
					if((Lgeptoindex68&255)===48){
						L$pdispatch25=L$pdispatch25+1|0;
						continue;
					}
					Lgeptoindex34=Lgeptoindex68+208|0;
					b:{
						c:{
							d:{
								e:{
									if((Lgeptoindex34&255)<10){
										Lgeptoindex38=224;
									}else{
										if((Lgeptoindex68+159&255)>=6){
											if((Lgeptoindex68+191&255)>=6)break d;
											Lgeptoindex38=Lgeptoindex68+217|0;
											break e;
										}
										Lgeptoindex38=185;
									}
									Lgeptoindex38=Lgeptoindex38+Lgeptoindex68|0;
								}
								if((Lgeptoindex38&255)!==0){
									L$pidx3$pval$pio=0;
									L$pidx3$pval$pi=nullArray;
									L$pdispatch24=0;
									break c;
								}
							}
							if((_strncmp(Larg0,Marg0+Lgeptoindexphi|0,_$pstr$p143$p642,0,1)|0|0)!==0){
								Lgeptoindex38=Lgeptoindexphi;
								L$pidx$pval$pi=0;
								L$pdispatch24=1;
								break b;
							}
							Lgeptoindex38=Lgeptoindexphi+1|0;
							Lgeptoindex68=Larg0[Marg0+Lgeptoindex38|0]|0;
							Lgeptoindex34=Lgeptoindex68+208|0;
							d:{
								if((Lgeptoindex34&255)<10){
									Lgeptoindexphi51=224;
								}else{
									if((Lgeptoindex68+159&255)>=6){
										if((Lgeptoindex68+191&255)<6){
											Lgeptoindexphi51=Lgeptoindex68+217|0;
											break d;
										}
										L$pidx$pval$pi=0;
										L$pdispatch24=1;
										break b;
									}
									Lgeptoindexphi51=185;
								}
								Lgeptoindexphi51=Lgeptoindexphi51+Lgeptoindex68|0;
							}
							if((Lgeptoindexphi51&255)===0){
								L$pidx$pval$pi=0;
								L$pdispatch24=1;
								break b;
							}
							if((Lgeptoindex68&255)===48){
								Lgeptoindexphi=Lgeptoindex38;
								while(1){
									Lgeptoindexphi=Lgeptoindexphi+1|0;
									Lgeptoindex68=Larg0[Marg0+Lgeptoindexphi|0]|0;
									if((Lgeptoindex68&255)===48)continue;
									break;
								}
								Lgeptoindex34=Lgeptoindex68+208|0;
							}else{
								Lgeptoindexphi=Lgeptoindex38;
							}
							d:{
								if((Lgeptoindex34&255)<10){
									Lgeptoindexphi51=224;
								}else{
									if((Lgeptoindex68+159&255)>=6){
										Lgeptoindexphi51=(Lgeptoindex68+191&255)<6?Lgeptoindex68+217|0:0|0;
										break d;
									}
									Lgeptoindexphi51=185;
								}
								Lgeptoindexphi51=Lgeptoindexphi51+Lgeptoindex68|0;
							}
							L$pidx3$pval$pio=Marg0+Lgeptoindex38|0;
							L$pidx3$pval$pi=Larg0;
							L$pdispatch24=(Lgeptoindexphi51&255)===0?1:0;
							L$pdispatch25=1;
						}
						c:{
							d:{
								if((Lgeptoindex34&255)<10){
									Lgeptoindex34=224;
								}else{
									if((Lgeptoindex68+159&255)>=6){
										if((Lgeptoindex68+191&255)<6){
											Lgeptoindex34=Lgeptoindex68+217|0;
											break d;
										}
										Lgeptoindex38=Lgeptoindexphi;
										break c;
									}
									Lgeptoindex34=185;
								}
								Lgeptoindex34=Lgeptoindex34+Lgeptoindex68|0;
							}
							if((Lgeptoindex34&255)!==0){
								Lgeptoindex38=Lgeptoindexphi;
								while(1){
									Lgeptoindex38=Lgeptoindex38+1|0;
									Lgeptoindex68=Larg0[Marg0+Lgeptoindex38|0]|0;
									d:{
										if((Lgeptoindex68+208&255)<10){
											Lgeptoindex34=224;
										}else{
											if((Lgeptoindex68+159&255)>=6){
												if((Lgeptoindex68+191&255)>=6)break c;
												Lgeptoindex34=Lgeptoindex68+217|0;
												break d;
											}
											Lgeptoindex34=185;
										}
										Lgeptoindex34=Lgeptoindex34+Lgeptoindex68|0;
									}
									if((Lgeptoindex34&255)!==0)continue;
									break;
								}
							}else{
								Lgeptoindex38=Lgeptoindexphi;
							}
						}
						Lgeptoindex34=_strncmp(Larg0,Marg0+Lgeptoindex38|0,_$pstr$p143$p642,0,1)|0;
						c:{
							if(L$pidx3$pval$pi===nullArray&&L$pidx3$pval$pio===0)if((Lgeptoindex34|0)===0){
								Lgeptoindex38=Lgeptoindex38+1|0;
								Lgeptoindex68=Larg0[Marg0+Lgeptoindex38|0]|0;
								d:{
									if((Lgeptoindex68+208&255)<10){
										Lgeptoindex34=224;
									}else{
										if((Lgeptoindex68+159&255)>=6){
											if((Lgeptoindex68+191&255)<6){
												Lgeptoindex34=Lgeptoindex68+217|0;
												break d;
											}
											L$pidx3$pval$pio=Marg0+Lgeptoindex38|0;
											L$pidx3$pval$pi=Larg0;
											break c;
										}
										Lgeptoindex34=185;
									}
									Lgeptoindex34=Lgeptoindex34+Lgeptoindex68|0;
								}
								if((Lgeptoindex34&255)===0){
									L$pidx3$pval$pio=Marg0+Lgeptoindex38|0;
									L$pidx3$pval$pi=Larg0;
									break c;
								}
								Lgeptoindexphi51=Lgeptoindex38;
								while(1){
									Lgeptoindexphi51=Lgeptoindexphi51+1|0;
									Lgeptoindex68=Larg0[Marg0+Lgeptoindexphi51|0]|0;
									d:{
										if((Lgeptoindex68+208&255)<10){
											Lgeptoindex34=224;
										}else{
											if((Lgeptoindex68+159&255)>=6){
												if((Lgeptoindex68+191&255)<6){
													Lgeptoindex34=Lgeptoindex68+217|0;
													break d;
												}
												L$pidx3$pval$pio=Marg0+Lgeptoindex38|0;
												L$pidx3$pval$pi=Larg0;
												Lgeptoindex38=Lgeptoindexphi51;
												break c;
											}
											Lgeptoindex34=185;
										}
										Lgeptoindex34=Lgeptoindex34+Lgeptoindex68|0;
									}
									if((Lgeptoindex34&255)!==0)continue;
									break;
								}
								L$pidx3$pval$pio=Marg0+Lgeptoindex38|0;
								L$pidx3$pval$pi=Larg0;
								Lgeptoindex38=Lgeptoindexphi51;
								break c;
							}
							if(L$pidx3$pval$pi===nullArray&&L$pidx3$pval$pio===0){
								L$pidx$pval$pi=0;
								break b;
							}
						}
						L$pidx$pval$pi=-((Marg0+Lgeptoindex38|0)-(L$pidx3$pval$pio)<<2)|0;
					}
					switch(Lgeptoindex68&255){
						case 112:
						case 80:
						Lgeptoindexphi51=Larg0[(Marg0+Lgeptoindex38|0)+1|0]|0;
						b:{
							switch(Lgeptoindexphi51){
								case 45:
								Lgeptoindexphi166=1;
								break;
								case 43:
								Lgeptoindexphi166=0;
								break;
								default:
								Lgeptoindex68=1;
								Lgeptoindexphi166=0;
								break b;
							}
							Lgeptoindexphi51=Larg0[(Marg0+Lgeptoindex38|0)+2|0]|0;
							Lgeptoindex68=2;
						}
						b:{
							if((Lgeptoindexphi51+208&255)<10){
								Lgeptoindex34=224;
							}else{
								if((Lgeptoindexphi51+159&255)>=6){
									Lgeptoindex34=(Lgeptoindexphi51+191&255)<6?Lgeptoindexphi51+217|0:0|0;
									break b;
								}
								Lgeptoindex34=185;
							}
							Lgeptoindex34=Lgeptoindex34+Lgeptoindexphi51|0;
						}
						if((Lgeptoindex34+255&255)>24){
							Lgeptoindex68=Lgeptoindex38;
							break;
						}
						Lgeptoindex68=(Lgeptoindex38+Lgeptoindex68|0)+1|0;
						L$plcssa47$pi=Larg0[Marg0+Lgeptoindex68|0]|0;
						b:{
							if((L$plcssa47$pi+208&255)<10){
								Lgeptoindexphi51=224;
							}else{
								if((L$plcssa47$pi+159&255)>=6){
									Lgeptoindexphi51=(L$plcssa47$pi+191&255)<6?L$plcssa47$pi+217|0:0|0;
									break b;
								}
								Lgeptoindexphi51=185;
							}
							Lgeptoindexphi51=Lgeptoindexphi51+L$plcssa47$pi|0;
						}
						L$plcssa47$pi=Lgeptoindex34&255;
						Lgeptoindex34=L$plcssa47$pi-16|0;
						if((Lgeptoindexphi51+255&255)<25)while(1){
							L$plcssa47$pi=(Lgeptoindex34*10|0)+(Lgeptoindexphi51&255)|0;
							Lgeptoindex68=Lgeptoindex68+1|0;
							Lgeptoindexphi51=Larg0[Marg0+Lgeptoindex68|0]|0;
							b:{
								if((Lgeptoindexphi51+208&255)<10){
									Lgeptoindex34=224;
								}else{
									if((Lgeptoindexphi51+159&255)>=6){
										Lgeptoindexphi51=(Lgeptoindexphi51+191&255)<6?Lgeptoindexphi51+217|0:0|0;
										break b;
									}
									Lgeptoindex34=185;
								}
								Lgeptoindexphi51=Lgeptoindex34+Lgeptoindexphi51|0;
							}
							Lgeptoindex34=L$plcssa47$pi-16|0;
							if((Lgeptoindexphi51+255&255)<25)continue;
							break;
						}
						L$pidx$pval$pi=((Lgeptoindexphi166|0)!==0?16-L$plcssa47$pi|0:Lgeptoindex34|0)+L$pidx$pval$pi|0;
						break;
						default:
						Lgeptoindex68=Lgeptoindex38;
					}
					b:if((L$pdispatch24|0)!==0){
						Lgeptoindex34=(L$pdispatch25|0)!==0?0|0:6|0;
						L$p035=null;
					}else{
						Lgeptoindexphi51=((Marg0+Lgeptoindex38|0)-1|0)-(Marg0+Lgeptoindexphi|0)|0;
						if((Lgeptoindexphi51|0)>7){
							Lgeptoindex34=0;
							while(1){
								Lgeptoindex34=Lgeptoindex34+1|0;
								if(Lgeptoindexphi51>>>0>15){
									Lgeptoindexphi51>>>=1;
									continue;
								}
								break;
							}
						}else{
							Lgeptoindex34=0;
						}
						L$p035={a0:null,i1:0,i2:0,i3:0,i4:0,a5:nullArray};
						L$p035.i1=Lgeptoindex34;
						Lgeptoindexphi51=1<<Lgeptoindex34;
						L$p035.i2=Lgeptoindexphi51;
						L$pidx3$pval$pi=new Int32Array((Lgeptoindexphi51<<2)/4|0);
						L$p035.a5=L$pidx3$pval$pi;
						L$p035.i4=0;
						L$p035.i3=0;
						c:if((Marg0+Lgeptoindex38|0)>(Marg0+Lgeptoindexphi|0)){
							Lgeptoindexphi166=0;
							Lgeptoindex34=0;
							Lgeptoindexphi82=0;
							while(1){
								Lgeptoindex38=Lgeptoindex38-1|0;
								L$plcssa47$pi=Larg0[Marg0+Lgeptoindex38|0]|0;
								if((L$plcssa47$pi&255)===46)if((Marg0+Lgeptoindex38|0)<(Marg0+Lgeptoindexphi|0)){
									L$plcssa47$pi=46;
								}else{
									if((_strncmp(Larg0,Marg0+Lgeptoindex38|0,_$pstr$p143$p642,0,1)|0|0)===0){
										if((Marg0+Lgeptoindex38|0)>(Marg0+Lgeptoindexphi|0))continue;
										break c;
									}
									L$plcssa47$pi=46;
								}
								if((Lgeptoindexphi166|0)===32){
									L$pidx3$pval$pi[Lgeptoindexphi82]=Lgeptoindex34;
									L$plcssa47$pi=Larg0[Marg0+Lgeptoindex38|0]|0;
									Lgeptoindexphi82=Lgeptoindexphi82+1|0;
									Lgeptoindex34=0;
									Lgeptoindexphi166=0;
								}
								d:{
									if((L$plcssa47$pi+208&255)<10){
										Lgeptoindexphi51=224;
									}else{
										if((L$plcssa47$pi+159&255)>=6){
											L$plcssa47$pi=(L$plcssa47$pi+191&255)<6?L$plcssa47$pi+217|0:0|0;
											break d;
										}
										Lgeptoindexphi51=185;
									}
									L$plcssa47$pi=Lgeptoindexphi51+L$plcssa47$pi|0;
								}
								Lgeptoindex34|=((L$plcssa47$pi&15)<<Lgeptoindexphi166);
								if((Marg0+Lgeptoindex38|0)>(Marg0+Lgeptoindexphi|0)){
									Lgeptoindexphi166=Lgeptoindexphi166+4|0;
									continue;
								}
								break;
							}
						}else{
							Lgeptoindexphi82=0;
							Lgeptoindex34=0;
						}
						L$pidx3$pval$pi[Lgeptoindexphi82]=Lgeptoindex34;
						L$pdispatch20=((0)*4);
						L$pdispatch22=(((0+Lgeptoindexphi82|0)+1|0)*4)-L$pdispatch20|0;
						Lgeptoindex38=L$pdispatch22>>2;
						L$p035.i4=Lgeptoindex38;
						Lgeptoindex34=(L$pdispatch22<<3)-(___hi0bits(Lgeptoindex34)|0)|0;
						if((Lgeptoindex34|0)>53){
							L$pdispatch24=Lgeptoindex34-53|0;
							if((___any_on(Lgeptoindex38,L$pidx3$pval$pi,0,L$pdispatch24)|0|0)!==0){
								Lgeptoindexphi=Lgeptoindex34-54|0;
								if((L$pidx3$pval$pi[Lgeptoindexphi>>5]&1<<(Lgeptoindexphi&31)|0)!==0){
									if((Lgeptoindex34|0)>55){
										Lgeptoindex34=___any_on(Lgeptoindex38,L$pidx3$pval$pi,0,Lgeptoindex34-55|0)|0;
										Lgeptoindexphi=(Lgeptoindex34|0)!==0?3|0:2|0;
									}else{
										Lgeptoindexphi=2;
									}
								}else{
									Lgeptoindexphi=1;
								}
							}else{
								Lgeptoindexphi=0;
							}
							L$pdispatch25=L$pdispatch24>>>5;
							if((L$pdispatch25|0)<(Lgeptoindex38|0)){
								Lgeptoindexphi166=L$pdispatch24&31;
								if((Lgeptoindexphi166|0)!==0){
									L$plcssa47$pi=L$pidx3$pval$pi[L$pdispatch25]>>>Lgeptoindexphi166;
									if((0+L$pdispatch25|0)<(0+Lgeptoindexphi82|0)){
										Lgeptoindexphi51=32-Lgeptoindexphi166|0;
										Lgeptoindex34=L$pdispatch25;
										Lgeptoindex38=0;
										while(1){
											Lgeptoindex34=Lgeptoindex34+1|0;
											L$pidx3$pval$pi[Lgeptoindex38]=L$pidx3$pval$pi[Lgeptoindex34]<<Lgeptoindexphi51|L$plcssa47$pi;
											L$plcssa47$pi=L$pidx3$pval$pi[Lgeptoindex34]>>>Lgeptoindexphi166;
											if((0+Lgeptoindex34|0)<(0+Lgeptoindexphi82|0)){
												Lgeptoindex38=Lgeptoindex38+1|0;
												continue;
											}
											break;
										}
										Lgeptoindex38=((L$pdispatch22-5|0)-(L$pdispatch25<<2)>>>2)+1|0;
									}else{
										Lgeptoindex38=0;
									}
									L$pidx3$pval$pi[Lgeptoindex38]=L$plcssa47$pi;
									if((L$plcssa47$pi|0)!==0){
										Lgeptoindex38=Lgeptoindex38+1|0;
									}
								}else{
									Lgeptoindexphi51=(0+(L$pdispatch25+1|0)|0)>((0+Lgeptoindexphi82|0)+1|0)?1:0;
									Lgeptoindex34=L$pdispatch25;
									Lgeptoindex38=0;
									while(1){
										L$pidx3$pval$pi[Lgeptoindex38]=L$pidx3$pval$pi[Lgeptoindex34]|0;
										if((0+Lgeptoindex34|0)<(0+Lgeptoindexphi82|0)){
											Lgeptoindex34=Lgeptoindex34+1|0;
											Lgeptoindex38=Lgeptoindex38+1|0;
											continue;
										}
										break;
									}
									Lgeptoindex38=(((L$pdispatch25<<2^ -1)-L$pdispatch20|0)+((Lgeptoindexphi51?0+(L$pdispatch25+1|0)|0:(0+Lgeptoindexphi82|0)+1|0)*4)>>>2)+1|0;
								}
							}else{
								Lgeptoindex38=0;
							}
							Lgeptoindexphi82=((0+Lgeptoindex38|0)*4)-L$pdispatch20>>2;
							L$p035.i4=Lgeptoindexphi82;
							if((Lgeptoindexphi82|0)===0)L$pidx3$pval$pi[0]=0;
							L$pidx$pval$pi=L$pdispatch24+L$pidx$pval$pi|0;
						}else if((Lgeptoindex34|0)===53){
							Lgeptoindexphi=0;
						}else{
							Lgeptoindex38=53-Lgeptoindex34|0;
							L$p035=___lshift(L$p035,Lgeptoindex38);
							L$pidx3$pval$pi=L$p035.a5;
							L$pidx$pval$pi=L$pidx$pval$pi-Lgeptoindex38|0;
							Lgeptoindexphi=0;
						}
						if((L$pidx$pval$pi|0)>971){
							Lgeptoindex34=163;
							L$p035=null;
						}else{
							c:{
								if((L$pidx$pval$pi|0)<-1074){
									Lgeptoindexphi82= -1074-L$pidx$pval$pi|0;
									if((Lgeptoindexphi82|0)>=53){
										if((Lgeptoindexphi82|0)===53){
											L$pidx$pval$pi=L$p035.i4|0;
											if((L$pidx$pval$pi|0)<1){
												Lgeptoindex34=80;
												L$p035=null;
												break b;
											}
											d:{
												if((L$pidx$pval$pi|0)!==1){
													L$pidx$pval$pi=L$pidx3$pval$pi[1]|0;
													if((L$pidx$pval$pi& -1048576|0)!==(L$pidx$pval$pi|0))break d;
												}
												L$pidx$pval$pi=0;
												while(1){
													L$pidx$pval$pi=L$pidx$pval$pi-1|0;
													if((L$pidx3$pval$pi[(0+1|0)+L$pidx$pval$pi|0]|0)===0){
														if(((0+1|0)+L$pidx$pval$pi|0)>0)continue;
														Lgeptoindex34=80;
														L$p035=null;
														break b;
													}
													break;
												}
											}
											L$p035.i4=1;
											L$pidx3$pval$pi[0]=1;
											Lgeptoindex34=98;
											L$pidx$pval$pi=-1074;
											break b;
										}
										Lgeptoindex34=80;
										L$p035=null;
										break b;
									}
									Lgeptoindex38=Lgeptoindexphi82-1|0;
									if((Lgeptoindexphi|0)!==0){
										Lgeptoindexphi=1;
									}else if((Lgeptoindexphi82|0)>1){
										Lgeptoindexphi=___any_on(L$p035.i4|0,L$pidx3$pval$pi,0,Lgeptoindex38)|0;
									}else{
										Lgeptoindexphi=0;
									}
									L$pdispatch20=(L$pidx3$pval$pi[Lgeptoindex38>>5]&1<<(Lgeptoindex38&31)|0)!==0?1:0;
									L$pdispatch22=L$p035.i4|0;
									L$pdispatch24=Lgeptoindexphi82>>5;
									L$pdispatch25=((0)*4);
									if((L$pdispatch24|0)<(L$pdispatch22|0)){
										Lgeptoindexphi166=Lgeptoindexphi82&31;
										if((Lgeptoindexphi166|0)!==0){
											L$plcssa47$pi=L$pidx3$pval$pi[L$pdispatch24]>>>Lgeptoindexphi166;
											if(((0+L$pdispatch24|0)+1|0)<(0+L$pdispatch22|0)){
												Lgeptoindexphi51=32-Lgeptoindexphi166|0;
												L$plcssa261o=0;
												L$plcssa261=L$pidx3$pval$pi;
												Lgeptoindex34=1;
												while(1){
													L$plcssa261[L$plcssa261o]=L$pidx3$pval$pi[(0+L$pdispatch24|0)+Lgeptoindex34|0]<<Lgeptoindexphi51|L$plcssa47$pi;
													Lgeptoindex38=Lgeptoindex34+1|0;
													L$plcssa47$pi=L$pidx3$pval$pi[(0+L$pdispatch24|0)+Lgeptoindex34|0]>>>Lgeptoindexphi166;
													if(((0+L$pdispatch24|0)+Lgeptoindex38|0)<(0+L$pdispatch22|0)){
														Lgeptoindex34=Lgeptoindex38;
														L$plcssa261o=L$plcssa261o+1|0;
														L$plcssa261=L$plcssa261;
														continue;
													}
													break;
												}
												L$plcssa261o=0+((( -5-(L$pdispatch24<<2)|0)+(L$pdispatch22<<2)>>>2)+1|0)|0;
												L$plcssa261=L$pidx3$pval$pi;
											}else{
												L$plcssa261o=0;
												L$plcssa261=L$pidx3$pval$pi;
											}
											L$plcssa261[L$plcssa261o]=L$plcssa47$pi;
											if((L$plcssa47$pi|0)!==0){
												L$plcssa261o=L$plcssa261o+1|0;
												L$plcssa261=L$plcssa261;
											}
										}else{
											Lgeptoindexphi51=(0+(L$pdispatch24+1|0)|0)>(0+L$pdispatch22|0)?1:0;
											L$plcssa261o=0;
											L$plcssa261=L$pidx3$pval$pi;
											Lgeptoindex34=0;
											while(1){
												Lgeptoindex38=Lgeptoindex34+1|0;
												L$plcssa261[L$plcssa261o]=L$pidx3$pval$pi[(0+L$pdispatch24|0)+Lgeptoindex34|0]|0;
												if(((0+L$pdispatch24|0)+Lgeptoindex38|0)<(0+L$pdispatch22|0)){
													Lgeptoindex34=Lgeptoindex38;
													L$plcssa261o=L$plcssa261o+1|0;
													L$plcssa261=L$plcssa261;
													continue;
												}
												break;
											}
											L$plcssa261o=0+((((L$pdispatch24<<2^ -1)-L$pdispatch25|0)+((Lgeptoindexphi51?0+(L$pdispatch24+1|0)|0:0+L$pdispatch22|0)*4)>>>2)+1|0)|0;
											L$plcssa261=L$pidx3$pval$pi;
										}
									}else{
										L$plcssa261o=0;
										L$plcssa261=L$pidx3$pval$pi;
									}
									L$pdispatch22=((L$plcssa261o)*4)-L$pdispatch25>>2;
									L$p035.i4=L$pdispatch22;
									if((L$pdispatch22|0)===0)L$pidx3$pval$pi[0]=0;
									Lgeptoindex38=53-Lgeptoindexphi82|0;
									if(L$pdispatch20){
										Lgeptoindexphi|=2;
										Lgeptoindex34=2;
										L$pidx$pval$pi=-1074;
										break c;
									}
									L$pidx$pval$pi=-1074;
									Lgeptoindex34=2;
								}else{
									Lgeptoindex34=1;
									Lgeptoindex38=53;
								}
								if((Lgeptoindexphi|0)===0)break b;
							}
							if((Lgeptoindexphi&2|0)!==0){
								Lgeptoindexphi51=L$pidx3$pval$pi[0]|0;
								if(((Lgeptoindexphi51|Lgeptoindexphi)&1|0)!==0){
									Lgeptoindexphi166=L$p035.i4|0;
									c:{
										if((Lgeptoindexphi51|0)===-1){
											L$plcssa261o=0;
											L$plcssa261=L$pidx3$pval$pi;
											while(1){
												L$plcssa261[L$plcssa261o]=0;
												if((L$plcssa261o+1|0)>=(0+Lgeptoindexphi166|0)){
													if((Lgeptoindexphi166|0)<(L$p035.i2|0)){
														L$plcssa261=L$p035;
														L$plcssa47$pi=Lgeptoindexphi166;
													}else{
														Lgeptoindexphi51=L$p035.i1|0;
														L$plcssa261={a0:null,i1:0,i2:0,i3:0,i4:0,a5:nullArray};
														Lgeptoindexphi51=Lgeptoindexphi51+1|0;
														L$plcssa261.i1=Lgeptoindexphi51;
														Lgeptoindexphi51=1<<Lgeptoindexphi51;
														L$plcssa261.i2=Lgeptoindexphi51;
														L$pidx3$pval$pi=new Int32Array((Lgeptoindexphi51<<2)/4|0);
														L$plcssa261.a5=L$pidx3$pval$pi;
														L$plcssa261.i4=0;
														L$plcssa261.i3=0;
														L$plcssa261.i3=L$p035.i3|0;
														L$plcssa47$pi=L$p035.i4|0;
														L$plcssa261.i4=L$plcssa47$pi;
														Lgeptoindexphi51=L$p035.i4|0;
														if((Lgeptoindexphi51|0)>0){
															L$p035=L$p035.a5;
															Lgeptoindexphi=0;
															while(1){
																L$pidx3$pval$pi[Lgeptoindexphi]=L$p035[Lgeptoindexphi]|0;
																Lgeptoindexphi=Lgeptoindexphi+1|0;
																if((Lgeptoindexphi|0)!==(Lgeptoindexphi51|0))continue;
																break;
															}
														}
													}
													Lgeptoindexphi=L$plcssa47$pi+1|0;
													L$plcssa261.i4=Lgeptoindexphi;
													L$pidx3$pval$pi[L$plcssa47$pi]=1;
													L$p035=L$plcssa261;
													break c;
												}
												Lgeptoindexphi51=L$plcssa261[L$plcssa261o+1|0]|0;
												if((Lgeptoindexphi51|0)===-1){
													L$plcssa261o=L$plcssa261o+1|0;
													L$plcssa261=L$plcssa261;
													continue;
												}
												break;
											}
											L$plcssa261o=L$plcssa261o+1|0;
											L$plcssa261=L$plcssa261;
										}else{
											L$plcssa261o=0;
											L$plcssa261=L$pidx3$pval$pi;
										}
										L$plcssa261[L$plcssa261o]=Lgeptoindexphi51+1|0;
										Lgeptoindexphi=Lgeptoindexphi166;
									}
									c:if((Lgeptoindex34|0)===2){
										if((Lgeptoindex38|0)===52){
											Lgeptoindex34=L$pidx3$pval$pi[1]|0;
											Lgeptoindex34=2-(Lgeptoindex34>>>20&1)|0;
										}else{
											Lgeptoindex34=2;
										}
									}else{
										if((Lgeptoindexphi|0)<=(Lgeptoindexphi166|0)){
											Lgeptoindex38&=31;
											if((Lgeptoindex38|0)===0)break c;
											if((___hi0bits(L$pidx3$pval$pi[Lgeptoindexphi166-1|0]|0)|0|0)>=(32-Lgeptoindex38|0))break c;
											L$pidx3$pval$pi=L$p035.a5;
										}
										if((Lgeptoindexphi|0)>0){
											L$plcssa47$pi=L$pidx3$pval$pi[0]>>>1;
											if((Lgeptoindexphi|0)===1){
												L$plcssa261o=0;
												L$plcssa261=L$pidx3$pval$pi;
											}else{
												L$plcssa261o=0;
												L$plcssa261=L$pidx3$pval$pi;
												Lgeptoindexphi51=0;
												while(1){
													Lgeptoindex38=L$pidx3$pval$pi[(0+1|0)+Lgeptoindexphi51|0]|0;
													L$plcssa261[L$plcssa261o]=Lgeptoindex38<<31|L$plcssa47$pi;
													Lgeptoindexphi51=Lgeptoindexphi51+1|0;
													L$plcssa47$pi=Lgeptoindex38>>>1;
													if(((0+1|0)+Lgeptoindexphi51|0)<(0+Lgeptoindexphi|0)){
														L$plcssa261o=L$plcssa261o+1|0;
														L$plcssa261=L$plcssa261;
														continue;
													}
													break;
												}
												L$plcssa261o=0+(((Lgeptoindexphi<<2)-5>>>2)+1|0)|0;
												L$plcssa261=L$pidx3$pval$pi;
											}
											L$plcssa261[L$plcssa261o]=L$plcssa47$pi;
											if((L$plcssa47$pi|0)!==0){
												L$plcssa261o=L$plcssa261o+1|0;
												L$plcssa261=L$plcssa261;
											}
										}else{
											L$plcssa261o=0;
											L$plcssa261=L$pidx3$pval$pi;
										}
										Lgeptoindexphi=((L$plcssa261o)*4)-((0)*4)>>2;
										L$p035.i4=Lgeptoindexphi;
										if((Lgeptoindexphi|0)===0)L$pidx3$pval$pi[0]=0;
										if((L$pidx$pval$pi|0)>=971){
											Lgeptoindex34=163;
											L$p035=null;
											break b;
										}
										L$pidx$pval$pi=L$pidx$pval$pi+1|0;
									}
									Lgeptoindex34|=32;
									break b;
								}
							}
							Lgeptoindex34|=16;
						}
					}
					switch(Lgeptoindex34&7){
						case 6:
						Lgeptoindex68=Lgeptoindex130;
						tmp7=0;
						break;
						case 0:
						break;
						default:
						b:if(L$p035!==null){
							L$plcssa47$pi=L$p035.i4|0;
							L$pidx3$pval$pi=L$p035.a5;
							if((L$plcssa47$pi|0)>0){
								L$plcssa261o=(0+L$plcssa47$pi|0)>(0+1|0)?0+L$plcssa47$pi|0:0+1|0;
								L$plcssa261=(0+L$plcssa47$pi|0)>(0+1|0)?L$pidx3$pval$pi:L$pidx3$pval$pi;
								Lgeptoindex38=0;
								Lgeptoindexphi51=0;
								while(1){
									Lgeptoindexphi=Lgeptoindex38+1|0;
									LmergedArray[2+Lgeptoindexphi51|0]=L$pidx3$pval$pi[Lgeptoindex38]|0;
									if((0+Lgeptoindexphi|0)<(0+L$plcssa47$pi|0)){
										Lgeptoindexphi51=Lgeptoindexphi51+1|0;
										Lgeptoindex38=Lgeptoindexphi;
										continue;
									}
									break;
								}
								if((2+((((L$plcssa261o)*4)+(((0)*4)^ -1)>>>2)+1|0)|0)>=(2+2|0))break b;
								L$pidx3$pval$pio=2+((((L$plcssa261o)*4)+(((0)*4)^ -1)>>>2)+1|0)|0;
								L$pidx3$pval$pi=LmergedArray;
							}else{
								L$pidx3$pval$pio=2;
								L$pidx3$pval$pi=LmergedArray;
							}
							while(1){
								L$pidx3$pval$pi[L$pidx3$pval$pio]=0;
								if(L$pidx3$pval$pio<(2+1|0)){
									L$pidx3$pval$pio=L$pidx3$pval$pio+1|0;
									L$pidx3$pval$pi=L$pidx3$pval$pi;
									continue;
								}
								break;
							}
						}
						switch(Lgeptoindex34&7){
							case 6:
							LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,0,true);
							LmergedArray394.d.setInt32(1*8+LmergedArray394.o,0,true);
							break;
							case 4:
							LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,2147483647,true);
							LmergedArray394.d.setInt32(1*8+LmergedArray394.o,-1,true);
							break;
							case 2:
							LmergedArray394.d.setInt32(1*8+LmergedArray394.o,LmergedArray[2]|0,true);
							LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,LmergedArray[3]|0,true);
							break;
							case 1:
							case 5:
							LmergedArray394.d.setInt32(1*8+LmergedArray394.o,LmergedArray[2]|0,true);
							LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,LmergedArray[3]& -1048577|(L$pidx$pval$pi<<20)+1127219200,true);
							break;
							case 3:
							LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,2146435072,true);
							LmergedArray394.d.setInt32(1*8+LmergedArray394.o,0,true);
							break;
							default:
						}
						if((Lgeptoindex34&8|0)!==0)LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,LmergedArray394.d.getInt32(1*4+1*8+LmergedArray394.o,true)| -2147483648,true);
					}
					break;
				}
				L$p7={d:Larg0,o:Marg0+Lgeptoindex68|0};
				break a;
				default:
				b:while(1){
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					Lgeptoindex68=Larg0[Marg0+Lgeptoindexphi|0]|0;
					switch(Lgeptoindex68&255){
						case 48:
						continue b;
						case 0:
						L$p7={d:Larg0,o:Marg0+Lgeptoindexphi|0};
						break a;
						default:
						tmp9=1;
					}
					break;
				}
			}
		}else{
			tmp9=0;
		}
		Lgeptoindex34=Lgeptoindex68<<24>>24;
		if((Lgeptoindex68+208&255)<10){
			Lgeptoindexphi51=Lgeptoindexphi;
			L$pdispatch=0;
			Lgeptoindex68=0;
			tmp12=0;
			while(1){
				if(tmp12>>>0<9){
					Lgeptoindex68=(Lgeptoindex34-48|0)+(Lgeptoindex68*10|0)|0;
				}else{
					L$pdispatch=(Lgeptoindex34-48|0)+(L$pdispatch*10|0)|0;
				}
				Lgeptoindexphi51=Lgeptoindexphi51+1|0;
				Lgeptoindex38=Larg0[Marg0+Lgeptoindexphi51|0]|0;
				Lgeptoindex34=Lgeptoindex38<<24>>24;
				tmp12=tmp12+1|0;
				if((Lgeptoindex38+208&255)<10)continue;
				break;
			}
		}else{
			Lgeptoindexphi51=Lgeptoindexphi;
			tmp12=0;
			Lgeptoindex68=0;
			L$pdispatch=0;
		}
		b:if((_strncmp(Larg0,Marg0+Lgeptoindexphi51|0,_$pstr$p143$p642,0,1)|0|0)!==0){
			L$plcssa261o=Marg0+Lgeptoindexphi|0;
			L$plcssa261=Larg0;
			Lgeptoindexphi=tmp12;
			L$pidx3$pval$pio=Marg0+Lgeptoindexphi51|0;
			L$pidx3$pval$pi=Larg0;
			L$pdispatch24=0;
			L$pidx$pval$pi=0;
			Lgeptoindex130=0;
		}else{
			Lgeptoindex38=Lgeptoindexphi51+1|0;
			Lgeptoindexphi51=Larg0[Marg0+Lgeptoindex38|0]|0;
			Lgeptoindex34=Lgeptoindexphi51<<24>>24;
			if((tmp12|0)!==0){
				L$plcssa261o=Marg0+Lgeptoindexphi|0;
				L$plcssa261=Larg0;
				Lgeptoindexphi=tmp12;
				L$pidx3$pval$pio=Marg0+Lgeptoindex38|0;
				L$pidx3$pval$pi=Larg0;
				L$pidx$pval$pi=0;
				L$plcssa47$pi=0;
				Lgeptoindex38=-1;
			}else{
				if((Lgeptoindexphi51&255)===48){
					Lgeptoindex130=0;
					while(1){
						Lgeptoindex38=Lgeptoindex38+1|0;
						Lgeptoindex34=Larg0[Marg0+Lgeptoindex38|0]|0;
						Lgeptoindex130=Lgeptoindex130+1|0;
						if((Lgeptoindex34&255)===48)continue;
						break;
					}
					Lgeptoindex34=Lgeptoindex34<<24>>24;
				}else{
					Lgeptoindex130=0;
				}
				if(Lgeptoindex34-49>>>0>=9){
					L$pidx3$pval$pio=Marg0+Lgeptoindex38|0;
					L$pidx3$pval$pi=Larg0;
					L$plcssa261o=Marg0+Lgeptoindexphi|0;
					L$plcssa261=Larg0;
					L$pdispatch24=1;
					Lgeptoindexphi=0;
					L$pidx$pval$pi=0;
					break b;
				}
				L$p035o=Marg0+Lgeptoindex38|0;
				L$p035=Larg0;
				Lgeptoindexphi82=L$pdispatch;
				L$pdispatch20=Lgeptoindex68;
				L$pdispatch18o=Marg0+Lgeptoindex38|0;
				L$pdispatch18=Larg0;
				L$pdispatch25=Lgeptoindex34;
				L$pdispatch24=0;
				L$pdispatch22=0;
				Lgeptoindex38=0;
			}
			c:while(1){
				switch(Lgeptoindex38|0){
					case 0:
					Lgeptoindexphi166=L$pdispatch25-48|0;
					L$plcssa47$pi=L$pdispatch22+1|0;
					d:if((Lgeptoindexphi166|0)!==0){
						L$pidx$pval$pi=Lgeptoindex130+L$plcssa47$pi|0;
						Lgeptoindexphi51=L$pdispatch24+1|0;
						e:{
							if((L$pdispatch22|0)<1){
								if((L$pdispatch24|0)>=9){
									Lgeptoindexphi=Lgeptoindexphi51;
									Lgeptoindex68=L$pdispatch20;
									L$pdispatch=Lgeptoindexphi82;
									Lgeptoindex38=L$pdispatch24;
									break e;
								}
								Lgeptoindexphi=Lgeptoindexphi51;
								Lgeptoindex68=L$pdispatch20;
								L$pdispatch=Lgeptoindexphi82;
							}else{
								Lgeptoindexphi=L$pdispatch24;
								Lgeptoindex68=L$pdispatch20;
								Lgeptoindex34=(L$pdispatch24|0)<9?1:0;
								L$pdispatch=Lgeptoindexphi82;
								Lgeptoindex38=1;
								while(1){
									if(Lgeptoindex34){
										Lgeptoindex68=Lgeptoindex68*10|0;
									}else{
										L$pdispatch=(Lgeptoindexphi|0)<16?L$pdispatch*10|0:L$pdispatch|0;
									}
									Lgeptoindex38=Lgeptoindex38+1|0;
									if((Lgeptoindex38|0)!==(L$plcssa47$pi|0)){
										Lgeptoindex34=(Lgeptoindexphi51|0)<9?1:0;
										Lgeptoindexphi=Lgeptoindexphi51;
										Lgeptoindexphi51=Lgeptoindexphi51+1|0;
										continue;
									}
									break;
								}
								Lgeptoindex38=L$pdispatch24+L$pdispatch22|0;
								Lgeptoindexphi=Lgeptoindex38+1|0;
								if((Lgeptoindexphi51|0)>=9)break e;
							}
							Lgeptoindex68=(Lgeptoindex68*10|0)+Lgeptoindexphi166|0;
							L$plcssa47$pi=0;
							break d;
						}
						if((Lgeptoindex38|0)<16){
							L$pdispatch=(L$pdispatch*10|0)+Lgeptoindexphi166|0;
							L$plcssa47$pi=0;
						}else{
							L$plcssa47$pi=0;
						}
					}else{
						Lgeptoindexphi=L$pdispatch24;
						Lgeptoindex68=L$pdispatch20;
						L$pdispatch=Lgeptoindexphi82;
						L$pidx$pval$pi=Lgeptoindex130;
					}
					Lgeptoindex38=L$pdispatch18[L$pdispatch18o+1|0]|0;
					L$plcssa261o=L$p035o;
					L$plcssa261=L$p035;
					L$pidx3$pval$pio=L$pdispatch18o+1|0;
					L$pidx3$pval$pi=L$pdispatch18;
					Lgeptoindex34=Lgeptoindex38<<24>>24;
					Lgeptoindex38=-1;
					continue c;
					default:
					if(Lgeptoindex34-48>>>0<10){
						L$pdispatch25=Lgeptoindex34;
						L$pdispatch22=L$plcssa47$pi;
						L$pdispatch18o=L$pidx3$pval$pio;
						L$pdispatch18=L$pidx3$pval$pi;
						L$pdispatch20=Lgeptoindex68;
						Lgeptoindexphi82=L$pdispatch;
						L$p035o=L$plcssa261o;
						L$p035=L$plcssa261;
						L$pdispatch24=Lgeptoindexphi;
						Lgeptoindex130=L$pidx$pval$pi;
						Lgeptoindex38=0;
						continue c;
					}
					Lgeptoindex130=L$plcssa47$pi;
					L$pdispatch24=1;
				}
				break;
			}
		}
		switch(Lgeptoindex34|0){
			case 101:
			case 69:
			if((Lgeptoindex130|tmp9|Lgeptoindexphi|0)!==0){
				Lgeptoindex34=L$pidx3$pval$pi[L$pidx3$pval$pio+1|0]<<24>>24;
				b:{
					switch(Lgeptoindex34|0){
						case 45:
						L$pdispatch25=1;
						break;
						case 43:
						L$pdispatch25=0;
						break;
						default:
						L$p7o=L$pidx3$pval$pio+1|0;
						L$p7=L$pidx3$pval$pi;
						L$pdispatch25=0;
						break b;
					}
					Lgeptoindex38=L$pidx3$pval$pi[L$pidx3$pval$pio+2|0]|0;
					Lgeptoindex34=Lgeptoindex38<<24>>24;
					L$p7o=L$pidx3$pval$pio+2|0;
					L$p7=L$pidx3$pval$pi;
				}
				if(Lgeptoindex34-48>>>0<10){
					if((Lgeptoindex34|0)===48){
						while(1){
							Lgeptoindex34=L$p7[L$p7o+1|0]|0;
							if(Lgeptoindex34===48){
								L$p7o=L$p7o+1|0;
								L$p7=L$p7;
								continue;
							}
							break;
						}
						Lgeptoindex34=Lgeptoindex34<<24>>24;
						L$p7o=L$p7o+1|0;
						L$p7=L$p7;
					}
					if(Lgeptoindex34-49>>>0<9){
						Lgeptoindex38=L$p7[L$p7o+1|0]|0;
						Lgeptoindexphi166=Lgeptoindex38<<24>>24;
						L$plcssa47$pi=Lgeptoindex34-48|0;
						if((Lgeptoindex38+208&255)<10){
							Lgeptoindexphi51=0;
							while(1){
								Lgeptoindex34=(L$plcssa47$pi*10|0)+Lgeptoindexphi166|0;
								Lgeptoindexphi51=Lgeptoindexphi51+1|0;
								Lgeptoindex38=L$p7[(L$p7o+1|0)+Lgeptoindexphi51|0]|0;
								Lgeptoindexphi166=Lgeptoindex38<<24>>24;
								L$plcssa47$pi=Lgeptoindex34-48|0;
								if((Lgeptoindex38+208&255)<10)continue;
								break;
							}
						}else{
							Lgeptoindexphi51=0;
						}
						L$plcssa47$pi=(Lgeptoindex34|0)>20047||(((L$p7o+1|0)+Lgeptoindexphi51|0)-(L$p7o)|0)>8?19999|0:L$plcssa47$pi|0;
						Lgeptoindex34=Lgeptoindexphi166;
						Lgeptoindex38=(L$pdispatch25|0)!==0?-L$plcssa47$pi|0:L$plcssa47$pi|0;
						L$pidx3$pval$pi={d:L$pidx3$pval$pi,o:L$pidx3$pval$pio};
						L$p7o=(L$p7o+1|0)+Lgeptoindexphi51|0;
						L$p7=L$p7;
						break;
					}
					L$pidx3$pval$pi={d:L$pidx3$pval$pi,o:L$pidx3$pval$pio};
					Lgeptoindex38=0;
					break;
				}
				L$p7o=L$pidx3$pval$pio;
				L$p7=L$pidx3$pval$pi;
				L$pidx3$pval$pi={d:L$pidx3$pval$pi,o:L$pidx3$pval$pio};
				Lgeptoindex38=0;
				break;
			}
			tmp7=0;
			L$p7={d:Larg0,o:Marg0};
			break a;
			default:
			L$p7o=L$pidx3$pval$pio;
			L$p7=L$pidx3$pval$pi;
			L$pidx3$pval$pi={d:Larg0,o:Marg0};
			Lgeptoindex38=0;
		}
		if((Lgeptoindexphi|0)!==0){
			Lgeptoindex38=Lgeptoindex38-L$pidx$pval$pi|0;
			Lgeptoindex34=(tmp12|0)!==0?tmp12|0:Lgeptoindexphi|0;
			Lgeptoindexphi51=(Lgeptoindexphi|0)<16?Lgeptoindexphi|0:16|0;
			tmp20=(+(Lgeptoindex68>>>0));
			LmergedArray394.d.setFloat64(1*8+LmergedArray394.o,tmp20,true);
			if((Lgeptoindexphi51|0)>9){
				tmp20= +___mprec_tens[Lgeptoindexphi51-9|0]*tmp20+(+(L$pdispatch>>>0));
				LmergedArray394.d.setFloat64(1*8+LmergedArray394.o,tmp20,true);
			}
			if((Lgeptoindexphi|0)<16){
				L$pdispatch=1;
				if((L$pdispatch|0)===1){
					if((Lgeptoindex38|0)===0){
						L$p7={d:L$p7,o:L$p7o};
						break a;
					}
					if((Lgeptoindex38|0)>0){
						if((Lgeptoindex38|0)<23){
							LmergedArray394.d.setFloat64(1*8+LmergedArray394.o,tmp20* +___mprec_tens[Lgeptoindex38],true);
							L$p7={d:L$p7,o:L$p7o};
							break a;
						}
						L$pdispatch=15-Lgeptoindexphi|0;
						if((Lgeptoindex38|0)<=(L$pdispatch+22|0)){
							LmergedArray394.d.setFloat64(1*8+LmergedArray394.o,tmp20* +___mprec_tens[L$pdispatch]* +___mprec_tens[Lgeptoindex38-L$pdispatch|0],true);
							L$p7={d:L$p7,o:L$p7o};
							break a;
						}
					}else if((Lgeptoindex38|0)>-23){
						LmergedArray394.d.setFloat64(1*8+LmergedArray394.o,tmp20/ +___mprec_tens[-Lgeptoindex38|0],true);
						L$p7={d:L$p7,o:L$p7o};
						break a;
					}
				}
			}
			L$plcssa47$pi=Lgeptoindex38+(Lgeptoindexphi-Lgeptoindexphi51|0)|0;
			b:{
				c:if((L$plcssa47$pi|0)>0){
					Lgeptoindexphi51=L$plcssa47$pi&15;
					if((Lgeptoindexphi51|0)!==0){
						tmp20*= +___mprec_tens[Lgeptoindexphi51];
						LmergedArray394.d.setFloat64(1*8+LmergedArray394.o,tmp20,true);
					}
					Lgeptoindexphi51=L$plcssa47$pi& -16;
					if((Lgeptoindexphi51|0)!==0){
						if((Lgeptoindexphi51|0)>308)break b;
						if(L$plcssa47$pi>>>0>31){
							L$plcssa47$pi>>>=4;
							Lgeptoindexphi51=0;
							while(1){
								if((L$plcssa47$pi&1|0)!==0){
									tmp20*= +___mprec_bigtens[Lgeptoindexphi51];
									LmergedArray394.d.setFloat64(1*8+LmergedArray394.o,tmp20,true);
								}
								Lgeptoindexphi51=Lgeptoindexphi51+1|0;
								if(L$plcssa47$pi>>>0>3){
									L$plcssa47$pi>>>=1;
									continue;
								}
								break;
							}
						}else{
							Lgeptoindexphi51=0;
						}
						LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,(LmergedArray394.d.getInt32(1*4+1*8+LmergedArray394.o,true)|0)-55574528|0,true);
						LmergedArray394.d.setFloat64(1*8+LmergedArray394.o, +___mprec_bigtens[Lgeptoindexphi51]* +LmergedArray394.d.getFloat64(1*8+LmergedArray394.o,true),true);
						L$plcssa47$pi=LmergedArray394.d.getInt32(1*4+1*8+LmergedArray394.o,true)|0;
						Lgeptoindexphi51=L$plcssa47$pi&2146435072;
						if(Lgeptoindexphi51>>>0>2090860544)break b;
						if(Lgeptoindexphi51>>>0>2089811968){
							LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,2146435071,true);
							LmergedArray394.d.setInt32(1*8+LmergedArray394.o,-1,true);
							tmp2=0;
						}else{
							LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,L$plcssa47$pi+55574528|0,true);
							tmp2=0;
						}
					}else{
						tmp2=0;
					}
				}else if((L$plcssa47$pi|0)<0){
					Lgeptoindexphi166=-L$plcssa47$pi|0;
					Lgeptoindexphi51=Lgeptoindexphi166&15;
					if((Lgeptoindexphi51|0)!==0){
						tmp20/= +___mprec_tens[Lgeptoindexphi51];
						LmergedArray394.d.setFloat64(1*8+LmergedArray394.o,tmp20,true);
					}
					Lgeptoindexphi166>>=4;
					if((Lgeptoindexphi166|0)!==0){
						if((Lgeptoindexphi166|0)<=31){
							if((Lgeptoindexphi166|0)>0){
								L$plcssa47$pi=Lgeptoindexphi166;
								Lgeptoindexphi51=0;
								while(1){
									if((L$plcssa47$pi&1|0)!==0){
										tmp20*= +_tinytens[Lgeptoindexphi51];
										LmergedArray394.d.setFloat64(1*8+LmergedArray394.o,tmp20,true);
									}
									L$plcssa47$pi>>>=1;
									if((L$plcssa47$pi|0)!==0){
										Lgeptoindexphi51=Lgeptoindexphi51+1|0;
										continue;
									}
									break;
								}
							}
							if((Lgeptoindexphi166&16|0)!==0){
								L$plcssa47$pi=LmergedArray394.d.getInt32(1*4+1*8+LmergedArray394.o,true)|0;
								Lgeptoindexphi51=107-(L$plcssa47$pi>>>20&2047)|0;
								if((Lgeptoindexphi51|0)>0)if((Lgeptoindexphi51|0)>31){
									LmergedArray394.d.setInt32(1*8+LmergedArray394.o,0,true);
									if((Lgeptoindexphi51|0)>52)LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,57671680,true);
									else LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o, -1<<(Lgeptoindexphi51-32|0)&L$plcssa47$pi,true);
								}else LmergedArray394.d.setInt32(1*8+LmergedArray394.o,LmergedArray394.d.getInt32(1*8+LmergedArray394.o,true)& -1<<Lgeptoindexphi51,true);
							}
							if(!( +LmergedArray394.d.getFloat64(1*8+LmergedArray394.o,true)===0)){
								tmp2=(Lgeptoindexphi166&16|0)!==0?106|0:0|0;
								break c;
							}
						}
						LmergedArray394.d.setFloat64(1*8+LmergedArray394.o,0,true);
						_impure_data.i0=34;
						L$p7={d:L$p7,o:L$p7o};
						break a;
					}
					tmp2=0;
				}else{
					tmp2=0;
				}
				if((Lgeptoindexphi|0)>9){
					Lgeptoindexphi166=(Lgeptoindexphi+8|0)/9|0;
					Lgeptoindexphi51=0;
					L$plcssa47$pi=1;
					while(1){
						L$plcssa47$pi<<=1;
						Lgeptoindexphi51=Lgeptoindexphi51+1|0;
						if((Lgeptoindexphi166|0)>(L$plcssa47$pi|0))continue;
						break;
					}
				}else{
					Lgeptoindexphi51=0;
				}
				tmp23={a0:null,i1:0,i2:0,i3:0,i4:0,a5:nullArray};
				tmp23.i1=Lgeptoindexphi51;
				Lgeptoindexphi51=1<<Lgeptoindexphi51;
				tmp23.i2=Lgeptoindexphi51;
				L$pidx3$pval$pi=new Int32Array((Lgeptoindexphi51<<2)/4|0);
				tmp23.a5=L$pidx3$pval$pi;
				tmp23.i3=0;
				L$pidx3$pval$pi[0]=Lgeptoindex68;
				tmp23.i4=1;
				if((Lgeptoindex34|0)>9){
					Lgeptoindex68=0;
					Lgeptoindexphi51=9;
					while(1){
						tmp23=___multadd(tmp23,10,(L$plcssa261[(L$plcssa261o+9|0)+Lgeptoindex68|0]<<24>>24)-48|0);
						Lgeptoindexphi51=Lgeptoindexphi51+1|0;
						if((Lgeptoindexphi51|0)!==(Lgeptoindex34|0)){
							Lgeptoindex68=Lgeptoindex68+1|0;
							continue;
						}
						break;
					}
					L$plcssa261o=(L$plcssa261o+(Lgeptoindex34-1|0)|0)+2|0;
					L$plcssa261=L$plcssa261;
				}else{
					L$plcssa261o=L$plcssa261o+10|0;
					L$plcssa261=L$plcssa261;
					Lgeptoindex34=9;
				}
				if((Lgeptoindex34|0)<(Lgeptoindexphi|0))while(1){
					tmp23=___multadd(tmp23,10,(L$plcssa261[L$plcssa261o]<<24>>24)-48|0);
					Lgeptoindex34=Lgeptoindex34+1|0;
					if((Lgeptoindex34|0)!==(Lgeptoindexphi|0)){
						L$plcssa261o=L$plcssa261o+1|0;
						L$plcssa261=L$plcssa261;
						continue;
					}
					break;
				}
				if(tmp23!==null){
					Lgeptoindexphi51=tmp23.i1|0;
					L$pidx3$pval$pi={a0:null,i1:0,i2:0,i3:0,i4:0,a5:nullArray};
					L$pidx3$pval$pi.i1=Lgeptoindexphi51;
					Lgeptoindexphi51=1<<Lgeptoindexphi51;
					L$pidx3$pval$pi.i2=Lgeptoindexphi51;
					L$p035=new Int32Array((Lgeptoindexphi51<<2)/4|0);
					L$pidx3$pval$pi.a5=L$p035;
					L$pidx3$pval$pi.i4=0;
					L$pidx3$pval$pi.i3=0;
					c:if(L$pidx3$pval$pi!==null){
						tmp3=(Lgeptoindex38|0)>-1?Lgeptoindex38|0:0|0;
						tmp9=(Lgeptoindex38|0)>-1?0|0:-Lgeptoindex38|0;
						tmp12=(tmp2|0)!==0?1:0;
						L$pdispatch=(tmp3|0)>0?1:0;
						Lgeptoindex130=(tmp9|0)>0?1:0;
						LmergedArray395={d:new DataView(new ArrayBuffer(16)),o:0};
						while(1){
							L$pidx3$pval$pi.i3=tmp23.i3|0;
							L$pidx3$pval$pi.i4=tmp23.i4|0;
							Lgeptoindexphi=tmp23.i4|0;
							if((Lgeptoindexphi|0)>0){
								L$plcssa261=tmp23.a5;
								Lgeptoindex68=0;
								while(1){
									L$p035[Lgeptoindex68]=L$plcssa261[Lgeptoindex68]|0;
									Lgeptoindex68=Lgeptoindex68+1|0;
									if((Lgeptoindex68|0)!==(Lgeptoindexphi|0))continue;
									break;
								}
							}
							L$plcssa261=___d2b(+LmergedArray394.d.getFloat64(1*8+LmergedArray394.o,true),LmergedArray,0,LmergedArray,1);
							if(L$plcssa261!==null){
								tmp25={a0:null,i1:0,i2:0,i3:0,i4:0,a5:nullArray};
								tmp25.i1=1;
								tmp25.i2=2;
								L$p035=new Int32Array(2);
								tmp25.a5=L$p035;
								tmp25.i3=0;
								L$p035[0]=1;
								tmp25.i4=1;
								if(tmp25!==null){
									Lgeptoindex38=LmergedArray[0]|0;
									if((Lgeptoindex38|0)>-1){
										Lgeptoindexphi=tmp3;
										Lgeptoindex34=Lgeptoindex38+tmp9|0;
									}else{
										Lgeptoindexphi=tmp3-Lgeptoindex38|0;
										Lgeptoindex34=tmp9;
									}
									Lgeptoindex68=LmergedArray[1]|0;
									Lgeptoindex38=Lgeptoindex68+(Lgeptoindex38-tmp2|0)|0;
									Lgeptoindex68=54-Lgeptoindex68|0;
									if((Lgeptoindex38|0)<-1021){
										Lgeptoindex38= -1021-Lgeptoindex38|0;
										Lgeptoindex68=Lgeptoindex68-Lgeptoindex38|0;
										if((Lgeptoindex38|0)<32){
											L$pidx$pval$pi=1<<Lgeptoindex38;
											Lgeptoindexphi82=0;
										}else{
											Lgeptoindexphi82=1<<(Lgeptoindex38-32|0);
											L$pidx$pval$pi=1;
										}
									}else{
										Lgeptoindexphi82=0;
										L$pidx$pval$pi=1;
									}
									Lgeptoindex38=Lgeptoindex68+Lgeptoindex34|0;
									Lgeptoindexphi=(Lgeptoindexphi+tmp2|0)+Lgeptoindex68|0;
									Lgeptoindex68=(Lgeptoindex38|0)<(Lgeptoindexphi|0)?Lgeptoindex38|0:Lgeptoindexphi|0;
									Lgeptoindex68=(Lgeptoindex68|0)>(Lgeptoindex34|0)?Lgeptoindex34|0:Lgeptoindex68|0;
									if((Lgeptoindex68|0)>0){
										Lgeptoindexphi=Lgeptoindexphi-Lgeptoindex68|0;
										Lgeptoindex34=Lgeptoindex34-Lgeptoindex68|0;
										Lgeptoindex38=Lgeptoindex38-Lgeptoindex68|0;
									}
									if(Lgeptoindex130){
										tmp25=___pow5mult(tmp25,tmp9);
										if(tmp25===null)break;
										L$plcssa261=___multiply(tmp25,L$plcssa261);
										if(L$plcssa261===null)break;
									}
									if((Lgeptoindex38|0)>0){
										L$plcssa261=___lshift(L$plcssa261,Lgeptoindex38);
										if(L$plcssa261===null)break;
									}
									if(L$pdispatch){
										L$pidx3$pval$pi=___pow5mult(L$pidx3$pval$pi,tmp3);
										if(L$pidx3$pval$pi===null)break;
									}
									if((Lgeptoindexphi|0)>0){
										L$pidx3$pval$pi=___lshift(L$pidx3$pval$pi,Lgeptoindexphi);
										if(L$pidx3$pval$pi===null)break;
									}
									if((Lgeptoindex34|0)>0){
										tmp25=___lshift(tmp25,Lgeptoindex34);
										if(tmp25===null)break;
									}
									L$pdispatch20=___mcmp(L$plcssa261,L$pidx3$pval$pi)|0;
									if((L$pdispatch20|0)!==0){
										L$pdispatch18=(L$pdispatch20|0)<0?L$plcssa261:L$pidx3$pval$pi;
										L$p035=(L$pdispatch20|0)<0?L$pidx3$pval$pi:L$plcssa261;
										Lgeptoindex68=L$p035.i1|0;
										L$pidx3$pval$pi={a0:null,i1:0,i2:0,i3:0,i4:0,a5:nullArray};
										L$pidx3$pval$pi.i1=Lgeptoindex68;
										Lgeptoindex68=1<<Lgeptoindex68;
										L$pidx3$pval$pi.i2=Lgeptoindex68;
										L$plcssa261=new Int32Array((Lgeptoindex68<<2)/4|0);
										L$pidx3$pval$pi.a5=L$plcssa261;
										L$pidx3$pval$pi.i4=0;
										L$pdispatch20>>>=31;
										L$pidx3$pval$pi.i3=L$pdispatch20;
										L$pdispatch22=L$p035.i4|0;
										L$p035=L$p035.a5;
										L$pdispatch24=L$pdispatch18.i4|0;
										L$pdispatch18=L$pdispatch18.a5;
										L$pdispatch25=(((0+L$pdispatch24|0)>(0+1|0)?0+L$pdispatch24|0:0+1|0)*4)+(((0)*4)^ -1)|0;
										Lgeptoindex68=0;
										Lgeptoindexphi51=0;
										L$plcssa47$pi=0;
										Lgeptoindexphi166=0;
										while(1){
											Lgeptoindex34=L$p035[Lgeptoindexphi51]|0;
											Lgeptoindex38=L$pdispatch18[Lgeptoindexphi166]|0;
											Lgeptoindexphi=((Lgeptoindex34&65535)-(Lgeptoindex38&65535)|0)+Lgeptoindex68|0;
											Lgeptoindexphi166=Lgeptoindexphi166+1|0;
											Lgeptoindex68=(Lgeptoindexphi>>16)+((Lgeptoindex34>>>16)-(Lgeptoindex38>>>16)|0)|0;
											L$plcssa261[L$plcssa47$pi]=Lgeptoindex68<<16|Lgeptoindexphi&65535;
											Lgeptoindex68>>=16;
											if((0+Lgeptoindexphi166|0)<(0+L$pdispatch24|0)){
												Lgeptoindexphi51=Lgeptoindexphi51+1|0;
												L$plcssa47$pi=L$plcssa47$pi+1|0;
												continue;
											}
											break;
										}
										L$pdispatch25>>>=2;
										Lgeptoindexphi=L$pdispatch25+1|0;
										if((0+Lgeptoindexphi|0)<(0+L$pdispatch22|0)){
											L$plcssa47$pi=(L$pdispatch25^1073741823)+L$pdispatch22<<2;
											Lgeptoindex34=Lgeptoindexphi;
											Lgeptoindexphi51=Lgeptoindexphi;
											while(1){
												Lgeptoindex38=L$p035[Lgeptoindexphi51]|0;
												Lgeptoindex68=(Lgeptoindex38&65535)+Lgeptoindex68|0;
												Lgeptoindexphi51=Lgeptoindexphi51+1|0;
												Lgeptoindex38=(Lgeptoindex68>>16)+(Lgeptoindex38>>>16)|0;
												L$plcssa261[Lgeptoindex34]=Lgeptoindex38<<16|Lgeptoindex68&65535;
												if((0+Lgeptoindexphi51|0)<(0+L$pdispatch22|0)){
													Lgeptoindex68=Lgeptoindex38>>16;
													Lgeptoindex34=Lgeptoindex34+1|0;
													continue;
												}
												break;
											}
											Lgeptoindexphi=Lgeptoindexphi+((L$plcssa47$pi-1>>>2)+1|0)|0;
										}
										while(1){
											Lgeptoindexphi=Lgeptoindexphi-1|0;
											if((L$plcssa261[Lgeptoindexphi]|0)===0){
												L$pdispatch22=L$pdispatch22-1|0;
												continue;
											}
											break;
										}
										L$pidx3$pval$pi.i4=L$pdispatch22;
									}else{
										L$pidx3$pval$pi={a0:null,i1:0,i2:0,i3:0,i4:0,a5:nullArray};
										L$pidx3$pval$pi.i1=0;
										L$pidx3$pval$pi.i2=1;
										L$plcssa261=new Int32Array(1);
										L$pidx3$pval$pi.a5=L$plcssa261;
										L$pidx3$pval$pi.i3=0;
										L$pidx3$pval$pi.i4=1;
										L$plcssa261[0]=0;
										if(L$pidx3$pval$pi===null)break;
										L$pdispatch20=0;
										L$pdispatch22=1;
									}
									L$pidx3$pval$pi.i3=0;
									Lgeptoindex68=___mcmp(L$pidx3$pval$pi,tmp25)|0;
									d:{
										e:{
											f:{
												if((Lgeptoindex68|0)>=0){
													g:{
														if((Lgeptoindex68|0)!==0){
															tmp31=+___b2d(L$pdispatch22,L$plcssa261,0,LmergedArray,7);
															LmergedArray395.d.setFloat64(1*8+LmergedArray395.o,tmp31,true);
															L$plcssa261=tmp25.a5;
															tmp20=+___b2d(tmp25.i4|0,L$plcssa261,0,LmergedArray,6);
															LmergedArray395.d.setFloat64(LmergedArray395.o,tmp20,true);
															L$pdispatch22=((L$pidx3$pval$pi.i4|0)-(tmp25.i4|0)<<5)+((LmergedArray[7]|0)-(LmergedArray[6]|0)|0)|0;
															if((L$pdispatch22|0)>0){
																LmergedArray395.d.setInt32(1*4+1*8+LmergedArray395.o,(LmergedArray395.d.getInt32(1*4+1*8+LmergedArray395.o,true)|0)+(L$pdispatch22<<20)|0,true);
																tmp31=+LmergedArray395.d.getFloat64(1*8+LmergedArray395.o,true);
															}else{
																LmergedArray395.d.setInt32(1*4+LmergedArray395.o,(LmergedArray395.d.getInt32(1*4+LmergedArray395.o,true)|0)+(L$pdispatch22* -1048576|0)|0,true);
																tmp20=+LmergedArray395.d.getFloat64(LmergedArray395.o,true);
															}
															tmp31/=tmp20;
															h:{
																i:if(tmp31<=2){
																	if((L$pdispatch20|0)!==0){
																		tmp31=1;
																		tmp20=1;
																	}else{
																		switch(LmergedArray394.d.getInt32(1*8+LmergedArray394.o,true)|0){
																			case 0:
																			if((LmergedArray394.d.getInt32(1*4+1*8+LmergedArray394.o,true)&1048575|0)!==0){
																				tmp31=1;
																				tmp20=-1;
																				break i;
																			}
																			if(tmp31<1){
																				tmp31=.5;
																			}else{
																				tmp31*=.5;
																			}
																			tmp20=-tmp31;
																			break i;
																			case 1:
																			if((LmergedArray394.d.getInt32(1*4+1*8+LmergedArray394.o,true)|0)===0)break g;
																			tmp31=1;
																			tmp20=-1;
																			break i;
																			default:
																			tmp31=1;
																			tmp20=-1;
																		}
																	}
																}else{
																	tmp31*=.5;
																	tmp20=(L$pdispatch20|0)!==0?tmp31:-tmp31;
																	LmergedArray394.d.setFloat64(LmergedArray394.o,tmp20,true);
																	L$pdispatch22=1;
																	if((L$pdispatch22|0)!==0)break h;
																	tmp20+=.5;
																}
																LmergedArray394.d.setFloat64(LmergedArray394.o,tmp20,true);
															}
															Lgeptoindexphi=LmergedArray394.d.getInt32(1*4+1*8+LmergedArray394.o,true)|0;
															Lgeptoindex68=Lgeptoindexphi&2146435072;
															h:{
																if((Lgeptoindex68|0)===2145386496){
																	LmergedArray394.d.setFloat64(2*8+LmergedArray394.o,+LmergedArray394.d.getFloat64(1*8+LmergedArray394.o,true),true);
																	LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,Lgeptoindexphi-55574528|0,true);
																	tmp32=+LmergedArray394.d.getFloat64(1*8+LmergedArray394.o,true);
																	LmergedArray394.d.setFloat64(1*8+LmergedArray394.o,tmp32+tmp20* +___ulp(tmp32),true);
																	Lgeptoindexphi=LmergedArray394.d.getInt32(1*4+1*8+LmergedArray394.o,true)|0;
																	if((Lgeptoindexphi&2145386496)>>>0>2090860543){
																		Lgeptoindexphi=LmergedArray394.d.getInt32(2*8+LmergedArray394.o,true)|0;
																		if((LmergedArray394.d.getInt32(1*4+2*8+LmergedArray394.o,true)|0)===2146435071)if((Lgeptoindexphi|0)===-1)break;
																		LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,2146435071,true);
																		LmergedArray394.d.setInt32(1*8+LmergedArray394.o,-1,true);
																		break h;
																	}
																	Lgeptoindexphi=Lgeptoindexphi+55574528|0;
																	LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,Lgeptoindexphi,true);
																}else{
																	if(tmp12)if(Lgeptoindex68>>>0<111149057){
																		if(tmp31<=2147483647){
																			Lgeptoindexphi=~~tmp31;
																			tmp31=(Lgeptoindexphi|0)!==0?(+(Lgeptoindexphi>>>0)):1;
																			LmergedArray394.d.setFloat64(LmergedArray394.o,(L$pdispatch20|0)!==0?tmp31:-tmp31,true);
																		}
																		LmergedArray394.d.setInt32(1*4+LmergedArray394.o,(112197632-Lgeptoindex68|0)+(LmergedArray394.d.getInt32(1*4+LmergedArray394.o,true)|0)|0,true);
																		tmp20=+LmergedArray394.d.getFloat64(LmergedArray394.o,true);
																	}
																	tmp32=+LmergedArray394.d.getFloat64(1*8+LmergedArray394.o,true);
																	LmergedArray394.d.setFloat64(1*8+LmergedArray394.o,tmp32+tmp20* +___ulp(tmp32),true);
																	Lgeptoindexphi=LmergedArray394.d.getInt32(1*4+1*8+LmergedArray394.o,true)|0;
																}
																Lgeptoindex68=(Lgeptoindex68|0)===(Lgeptoindexphi&2146435072|0)?1:0;
																if((tmp2|0)===0)if(Lgeptoindex68){
																	tmp31-=(+(~~tmp31|0));
																	if((L$pdispatch20|0)===0)if((LmergedArray394.d.getInt32(1*8+LmergedArray394.o,true)|Lgeptoindexphi&1048575|0)===0){
																		if(!(tmp31<.24999995))break h;
																		L$p7={d:L$p7,o:L$p7o};
																		break a;
																	}
																	if(tmp31<.4999999){
																		L$p7={d:L$p7,o:L$p7o};
																		break a;
																	}
																	if(tmp31>.5000001){
																		L$p7={d:L$p7,o:L$p7o};
																		break a;
																	}
																}
															}
															Lgeptoindexphi=tmp23.i1|0;
															L$pidx3$pval$pi={a0:null,i1:0,i2:0,i3:0,i4:0,a5:nullArray};
															L$pidx3$pval$pi.i1=Lgeptoindexphi;
															Lgeptoindexphi=1<<Lgeptoindexphi;
															L$pidx3$pval$pi.i2=Lgeptoindexphi;
															L$p035=new Int32Array((Lgeptoindexphi<<2)/4|0);
															L$pidx3$pval$pi.a5=L$p035;
															L$pidx3$pval$pi.i4=0;
															L$pidx3$pval$pi.i3=0;
															if(L$pidx3$pval$pi!==null)continue;
															break c;
														}
														Lgeptoindex68=LmergedArray394.d.getInt32(1*4+1*8+LmergedArray394.o,true)|0;
														Lgeptoindex38=Lgeptoindex68&1048575;
														if((L$pdispatch20|0)!==0){
															if((Lgeptoindex38|0)===1048575){
																Lgeptoindex38=LmergedArray394.d.getInt32(1*8+LmergedArray394.o,true)|0;
																if((tmp2|0)===0){
																	Lgeptoindexphi=-1;
																}else{
																	Lgeptoindexphi=Lgeptoindex68&2146435072;
																	if(Lgeptoindexphi>>>0<111149057){
																		Lgeptoindexphi= -1<<(107-(Lgeptoindexphi>>>20)|0);
																	}else{
																		Lgeptoindexphi=-1;
																	}
																}
																if((Lgeptoindex38|0)===(Lgeptoindexphi|0)){
																	if((Lgeptoindex68|0)===2146435071)if((Lgeptoindex38|0)===-1)break;
																	LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,(Lgeptoindex68&2146435072)+1048576|0,true);
																	LmergedArray394.d.setInt32(1*8+LmergedArray394.o,0,true);
																	break e;
																}
															}
														}else if((LmergedArray394.d.getInt32(1*8+LmergedArray394.o,true)|Lgeptoindex38|0)===0){
															Lgeptoindex68&=2146435072;
															if(Lgeptoindex68>>>0>=112197633)break f;
															if(!(((tmp2|0)===0?1:0)^1))break f;
															if(Lgeptoindex68>>>0>57671680)break d;
															break g;
														}
														if((Lgeptoindexphi82|0)!==0){
															if((Lgeptoindex68&Lgeptoindexphi82|0)===0)break e;
														}else if((LmergedArray394.d.getInt32(1*8+LmergedArray394.o,true)&L$pidx$pval$pi|0)===0)break e;
														tmp20=+LmergedArray394.d.getFloat64(0+1*8+LmergedArray394.o,true);
														if((L$pdispatch20|0)!==0){
															LmergedArray394.d.setFloat64(0+LmergedArray394.o,tmp20,true);
															tmp31=+___ulp(tmp20);
															if((tmp2|0)!==0){
																Lgeptoindexphi51=107-(LmergedArray394.d.getInt32(1*4+LmergedArray394.o,true)>>>20&2047)|0;
																if((Lgeptoindexphi51|0)>=1){
																	LmergedArray394.d.setInt32(1*4+LmergedArray394.o,(Lgeptoindexphi51<<20)+1072693248|0,true);
																	LmergedArray394.d.setInt32(LmergedArray394.o,0,true);
																	tmp32=+LmergedArray394.d.getFloat64(LmergedArray394.o,true);
																	tmp31*=tmp32;
																}
															}
															LmergedArray394.d.setFloat64(1*8+LmergedArray394.o,tmp31+tmp20,true);
															break e;
														}
														LmergedArray394.d.setFloat64(0+LmergedArray394.o,tmp20,true);
														tmp31=+___ulp(tmp20);
														if((tmp2|0)!==0){
															Lgeptoindexphi51=107-(LmergedArray394.d.getInt32(1*4+LmergedArray394.o,true)>>>20&2047)|0;
															if((Lgeptoindexphi51|0)>=1){
																LmergedArray394.d.setInt32(1*4+LmergedArray394.o,(Lgeptoindexphi51<<20)+1072693248|0,true);
																LmergedArray394.d.setInt32(LmergedArray394.o,0,true);
																tmp32=+LmergedArray394.d.getFloat64(LmergedArray394.o,true);
																tmp31*=tmp32;
															}
														}
														tmp20-=tmp31;
														LmergedArray394.d.setFloat64(1*8+LmergedArray394.o,tmp20,true);
														if(!(tmp20===0))break e;
													}
													LmergedArray394.d.setFloat64(1*8+LmergedArray394.o,0,true);
													_impure_data.i0=34;
													L$p7={d:L$p7,o:L$p7o};
													break a;
												}
												if((LmergedArray394.d.getInt32(1*8+LmergedArray394.o,true)|L$pdispatch20|0)!==0)break e;
												Lgeptoindex68=LmergedArray394.d.getInt32(1*4+1*8+LmergedArray394.o,true)|0;
												if((Lgeptoindex68&1048575|0)!==0)break e;
												Lgeptoindex68&=2146435072;
												if(Lgeptoindex68>>>0<112197633)break e;
												if((L$plcssa261[0]|0)===0)if((L$pdispatch22|0)<2)break e;
												if((___mcmp(___lshift(L$pidx3$pval$pi,1),tmp25)|0|0)<=0)break e;
											}
											LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,Lgeptoindex68-1048576|1048575,true);
											LmergedArray394.d.setInt32(1*8+LmergedArray394.o,-1,true);
										}
										if((tmp2|0)===0){
											L$p7={d:L$p7,o:L$p7o};
											break a;
										}
									}
									LmergedArray394.d.setInt32(1*4+2*8+LmergedArray394.o,961544192,true);
									LmergedArray394.d.setInt32(2*8+LmergedArray394.o,0,true);
									LmergedArray394.d.setFloat64(1*8+LmergedArray394.o, +LmergedArray394.d.getFloat64(2*8+LmergedArray394.o,true)* +LmergedArray394.d.getFloat64(1*8+LmergedArray394.o,true),true);
									if((LmergedArray394.d.getInt32(1*8+LmergedArray394.o,true)|LmergedArray394.d.getInt32(1*4+1*8+LmergedArray394.o,true)|0)!==0){
										L$p7={d:L$p7,o:L$p7o};
										break a;
									}
									_impure_data.i0=34;
									L$p7={d:L$p7,o:L$p7o};
									break a;
								}
							}
							break;
						}
						_impure_data.i0=34;
						LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,2146435072,true);
						LmergedArray394.d.setInt32(1*8+LmergedArray394.o,0,true);
						L$p7={d:L$p7,o:L$p7o};
						break a;
					}
					_impure_data.i0=34;
					LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,2146435072,true);
					LmergedArray394.d.setInt32(1*8+LmergedArray394.o,0,true);
					L$p7={d:L$p7,o:L$p7o};
					break a;
				}
			}
			_impure_data.i0=34;
			LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,2146435072,true);
			LmergedArray394.d.setInt32(1*8+LmergedArray394.o,0,true);
			L$p7={d:L$p7,o:L$p7o};
		}else if((Lgeptoindex130|tmp9|0)!==0){
			L$p7={d:L$p7,o:L$p7o};
		}else if((L$pdispatch24|0)!==0){
			L$p7=L$pidx3$pval$pi;
			tmp7=0;
		}else{
			switch(Lgeptoindex34|0){
				case 105:
				case 73:
				Lgeptoindexphi=L$p7[L$p7o+1|0]|0;
				Lgeptoindex68=Lgeptoindexphi<<24>>24;
				if((((Lgeptoindexphi+191&255)<26?Lgeptoindex68+32|0:Lgeptoindex68|0)|0)===110){
					Lgeptoindexphi=L$p7[L$p7o+2|0]|0;
					Lgeptoindex68=Lgeptoindexphi<<24>>24;
					if((((Lgeptoindexphi+191&255)<26?Lgeptoindex68+32|0:Lgeptoindex68|0)|0)===102){
						Lgeptoindexphi=L$p7[L$p7o+3|0]|0;
						Lgeptoindex68=Lgeptoindexphi<<24>>24;
						b:{
							if((((Lgeptoindexphi+191&255)<26?Lgeptoindex68+32|0:Lgeptoindex68|0)|0)===105){
								Lgeptoindexphi=L$p7[L$p7o+4|0]|0;
								Lgeptoindex68=Lgeptoindexphi<<24>>24;
								if((((Lgeptoindexphi+191&255)<26?Lgeptoindex68+32|0:Lgeptoindex68|0)|0)===110){
									Lgeptoindexphi=L$p7[L$p7o+5|0]|0;
									Lgeptoindex68=Lgeptoindexphi<<24>>24;
									if((((Lgeptoindexphi+191&255)<26?Lgeptoindex68+32|0:Lgeptoindex68|0)|0)===105){
										Lgeptoindexphi=L$p7[L$p7o+6|0]|0;
										Lgeptoindex68=Lgeptoindexphi<<24>>24;
										if((((Lgeptoindexphi+191&255)<26?Lgeptoindex68+32|0:Lgeptoindex68|0)|0)===116){
											Lgeptoindexphi=L$p7[L$p7o+7|0]|0;
											Lgeptoindex68=Lgeptoindexphi<<24>>24;
											if((((Lgeptoindexphi+191&255)<26?Lgeptoindex68+32|0:Lgeptoindex68|0)|0)===121){
												Lgeptoindexphi=8;
												break b;
											}
										}
									}
								}
							}
							Lgeptoindexphi=3;
						}
						LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,2146435072,true);
						LmergedArray394.d.setInt32(1*8+LmergedArray394.o,0,true);
						L$p7={d:L$p7,o:L$p7o+Lgeptoindexphi|0};
						break a;
					}
					L$p7=L$pidx3$pval$pi;
					tmp7=0;
					break a;
				}
				L$p7=L$pidx3$pval$pi;
				tmp7=0;
				break a;
				case 110:
				case 78:
				Lgeptoindexphi=L$p7[L$p7o+1|0]|0;
				Lgeptoindex68=Lgeptoindexphi<<24>>24;
				if((((Lgeptoindexphi+191&255)<26?Lgeptoindex68+32|0:Lgeptoindex68|0)|0)===97){
					Lgeptoindexphi=L$p7[L$p7o+2|0]|0;
					Lgeptoindex68=Lgeptoindexphi<<24>>24;
					if((((Lgeptoindexphi+191&255)<26?Lgeptoindex68+32|0:Lgeptoindex68|0)|0)===110){
						b:if((L$p7[L$p7o+3|0]|0)===40){
							LmergedArray[5]=0;
							Lgeptoindex38=L$p7[L$p7o+4|0]|0;
							if(Lgeptoindex38!==0){
								L$pidx3$pval$pio=4+1|0;
								L$pidx3$pval$pi=LmergedArray;
								L$plcssa261o=L$p7o+4|0;
								L$plcssa261=L$p7;
								L$p035o=L$p7o+3|0;
								L$p035=L$p7;
								L$pdispatch18o=4+1|0;
								L$pdispatch18=LmergedArray;
								Lgeptoindexphi166=-1;
								L$pdispatch25=0;
								L$pdispatch24=0;
								Lgeptoindexphi=0;
								while(1){
									L$plcssa47$pi=L$pdispatch18o<L$pidx3$pval$pio?1:0;
									Lgeptoindexphi51=L$pdispatch18o>4?1:0;
									c:{
										d:{
											e:{
												while(1){
													f:{
														if((L$pdispatch24|0)<(L$pdispatch25|0)){
															g:{
																if(L$plcssa47$pi){
																	while(1){
																		if((Lgeptoindex38+208&255)<10){
																			Lgeptoindex68=224;
																		}else{
																			if((Lgeptoindex38+159&255)>=6){
																				if((Lgeptoindex38+191&255)<6){
																					Lgeptoindex38=Lgeptoindex38+217|0;
																					break f;
																				}
																				if(Lgeptoindex38>=33)break d;
																				if((Lgeptoindexphi|0)<8){
																					Lgeptoindex34=8-Lgeptoindexphi<<2;
																					Lgeptoindex38=32-Lgeptoindex34|0;
																					Lgeptoindexphi=L$pdispatch18[L$pdispatch18o]|0;
																					L$p035o=L$pdispatch18o;
																					L$p035=L$pdispatch18;
																					while(1){
																						Lgeptoindex68=L$p035[L$p035o+1|0]|0;
																						L$p035[L$p035o]=Lgeptoindex68<<Lgeptoindex38|Lgeptoindexphi;
																						Lgeptoindexphi=Lgeptoindex68>>>Lgeptoindex34;
																						L$p035[L$p035o+1|0]=Lgeptoindexphi;
																						if((L$p035o+1|0)<L$pidx3$pval$pio){
																							L$p035o=L$p035o+1|0;
																							L$p035=L$p035;
																							continue;
																						}
																						break;
																					}
																				}
																				if(Lgeptoindexphi51)break g;
																				Lgeptoindex38=L$plcssa261[L$plcssa261o+1|0]|0;
																				if(Lgeptoindex38!==0){
																					L$p035o=L$plcssa261o;
																					L$p035=L$plcssa261;
																					L$plcssa261o=L$plcssa261o+1|0;
																					L$plcssa261=L$plcssa261;
																					Lgeptoindexphi=8;
																					continue;
																				}
																				L$p7={d:L$p7,o:L$p7o+3|0};
																				Lgeptoindex68=8;
																				break c;
																			}
																			Lgeptoindex68=185;
																		}
																		break;
																	}
																	Lgeptoindex38=Lgeptoindex68+Lgeptoindex38|0;
																	if((Lgeptoindex38&255)!==0)break f;
																	L$p7={d:L$p7,o:L$p7o+3|0};
																	break b;
																}
																while(1){
																	if((Lgeptoindex38+208&255)<10){
																		Lgeptoindex68=224;
																	}else{
																		if((Lgeptoindex38+159&255)>=6){
																			if((Lgeptoindex38+191&255)<6){
																				Lgeptoindex38=Lgeptoindex38+217|0;
																				break f;
																			}
																			if(Lgeptoindex38>=33)break d;
																			if(Lgeptoindexphi51)break g;
																			Lgeptoindex38=L$plcssa261[L$plcssa261o+1|0]|0;
																			if(Lgeptoindex38!==0){
																				L$p035o=L$plcssa261o;
																				L$p035=L$plcssa261;
																				L$plcssa261o=L$plcssa261o+1|0;
																				L$plcssa261=L$plcssa261;
																				Lgeptoindexphi=8;
																				continue;
																			}
																			L$p7={d:L$p7,o:L$p7o+3|0};
																			Lgeptoindex68=8;
																			break c;
																		}
																		Lgeptoindex68=185;
																	}
																	break;
																}
																Lgeptoindex38=Lgeptoindex68+Lgeptoindex38|0;
																if((Lgeptoindex38&255)!==0)break f;
																L$p7={d:L$p7,o:L$p7o+3|0};
																break b;
															}
															Lgeptoindexphi166=Lgeptoindexphi166-1|0;
															LmergedArray[(4+2|0)+Lgeptoindexphi166|0]=0;
															L$pidx3$pval$pio=(4+2|0)+Lgeptoindexphi166|0;
															L$pidx3$pval$pi=LmergedArray;
															L$pdispatch24=L$pdispatch25;
															Lgeptoindexphi=0;
															break e;
														}
														g:{
															if((Lgeptoindex38+208&255)<10){
																Lgeptoindex68=224;
															}else{
																if((Lgeptoindex38+159&255)>=6){
																	if((Lgeptoindex38+191&255)<6){
																		Lgeptoindex38=Lgeptoindex38+217|0;
																		break g;
																	}
																	if(Lgeptoindex38<33)break e;
																	break d;
																}
																Lgeptoindex68=185;
															}
															Lgeptoindex38=Lgeptoindex68+Lgeptoindex38|0;
														}
														if((Lgeptoindex38&255)===0){
															L$p7={d:L$p7,o:L$p7o+3|0};
															break b;
														}
													}
													Lgeptoindex68=Lgeptoindexphi+1|0;
													L$pdispatch25=L$pdispatch25+1|0;
													if((Lgeptoindexphi|0)>7){
														if(!(Lgeptoindexphi51)){
															Lgeptoindex38=L$plcssa261[L$plcssa261o+1|0]|0;
															if(Lgeptoindex38!==0){
																L$p035o=L$plcssa261o;
																L$p035=L$plcssa261;
																Lgeptoindexphi=Lgeptoindex68;
																L$plcssa261o=L$plcssa261o+1|0;
																L$plcssa261=L$plcssa261;
																continue;
															}
															L$p7={d:L$p7,o:L$p7o+3|0};
															break c;
														}
														Lgeptoindexphi166=Lgeptoindexphi166-1|0;
														LmergedArray[(4+2|0)+Lgeptoindexphi166|0]=0;
														Lgeptoindex68=1;
														Lgeptoindexphi=0;
													}else{
														Lgeptoindexphi=LmergedArray[(4+2|0)+Lgeptoindexphi166|0]|0;
													}
													break;
												}
												LmergedArray[(4+2|0)+Lgeptoindexphi166|0]=Lgeptoindexphi<<4|Lgeptoindex38&15;
												Lgeptoindex38=L$plcssa261[L$plcssa261o+1|0]|0;
												if(Lgeptoindex38!==0){
													L$pdispatch18o=(4+2|0)+Lgeptoindexphi166|0;
													L$pdispatch18=LmergedArray;
													L$p035o=L$plcssa261o;
													L$p035=L$plcssa261;
													Lgeptoindexphi=Lgeptoindex68;
													L$plcssa261o=L$plcssa261o+1|0;
													L$plcssa261=L$plcssa261;
													continue;
												}
												L$pdispatch18o=(4+2|0)+Lgeptoindexphi166|0;
												L$pdispatch18=LmergedArray;
												L$p7={d:L$p7,o:L$p7o+3|0};
												break c;
											}
											Lgeptoindex38=L$plcssa261[L$plcssa261o+1|0]|0;
											if(Lgeptoindex38!==0){
												L$pdispatch18o=(4+2|0)+Lgeptoindexphi166|0;
												L$pdispatch18=LmergedArray;
												L$p035o=L$plcssa261o;
												L$p035=L$plcssa261;
												L$plcssa261o=L$plcssa261o+1|0;
												L$plcssa261=L$plcssa261;
												continue;
											}
											L$pdispatch18o=(4+2|0)+Lgeptoindexphi166|0;
											L$pdispatch18=LmergedArray;
											Lgeptoindex68=Lgeptoindexphi;
											L$p7={d:L$p7,o:L$p7o+3|0};
											break c;
										}
										if(Lgeptoindex38!==41){
											L$p7={d:L$p7,o:L$p7o+3|0};
											break b;
										}
										Lgeptoindex68=Lgeptoindexphi;
										L$p7={d:L$p035,o:L$p035o+2|0};
									}
									break;
								}
								if((L$pdispatch25|0)!==0){
									L$pdispatch25=L$pdispatch18o<L$pidx3$pval$pio?1:0;
									if((Lgeptoindex68|0)<8)if(L$pdispatch25){
										Lgeptoindex34=8-Lgeptoindex68<<2;
										Lgeptoindex38=32-Lgeptoindex34|0;
										Lgeptoindexphi=L$pdispatch18[L$pdispatch18o]|0;
										L$plcssa261o=L$pdispatch18o;
										L$plcssa261=L$pdispatch18;
										while(1){
											Lgeptoindex68=L$plcssa261[L$plcssa261o+1|0]|0;
											L$plcssa261[L$plcssa261o]=Lgeptoindex68<<Lgeptoindex38|Lgeptoindexphi;
											Lgeptoindexphi=Lgeptoindex68>>>Lgeptoindex34;
											L$plcssa261[L$plcssa261o+1|0]=Lgeptoindexphi;
											if((L$plcssa261o+1|0)<L$pidx3$pval$pio){
												L$plcssa261o=L$plcssa261o+1|0;
												L$plcssa261=L$plcssa261;
												continue;
											}
											break;
										}
									}
									if(L$pdispatch18o>4){
										Lgeptoindex68=0;
										while(1){
											LmergedArray[4+Lgeptoindex68|0]=LmergedArray[(4+2|0)+Lgeptoindexphi166|0]|0;
											Lgeptoindex68=Lgeptoindex68+1|0;
											if((Lgeptoindexphi166|0)<-1){
												Lgeptoindexphi166=Lgeptoindexphi166+1|0;
												continue;
											}
											break;
										}
										LmergedArray[4+Lgeptoindex68|0]=0;
										Lgeptoindexphi=LmergedArray[5]|0;
									}else{
										Lgeptoindexphi=LmergedArray[5]&1048575;
										LmergedArray[5]=Lgeptoindexphi;
									}
									if((Lgeptoindexphi|0)===0){
										Lgeptoindex68=0;
										while(1){
											if(LmergedArray===LmergedArray&&((4+1|0)+Lgeptoindex68|0)===4)LmergedArray[4]=1;
											else{
												Lgeptoindex68=Lgeptoindex68-1|0;
												if((LmergedArray[(4+1|0)+Lgeptoindex68|0]|0)===0)continue;
											}
											break;
										}
									}
									LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,Lgeptoindexphi|2146435072,true);
									LmergedArray394.d.setInt32(1*8+LmergedArray394.o,LmergedArray[4]|0,true);
									break a;
								}
							}else{
								L$p7={d:L$p7,o:L$p7o+3|0};
							}
						}else{
							L$p7={d:L$p7,o:L$p7o+3|0};
						}
						LmergedArray394.d.setInt32(1*4+1*8+LmergedArray394.o,-524288,true);
						LmergedArray394.d.setInt32(1*8+LmergedArray394.o,0,true);
						break a;
					}
					L$p7=L$pidx3$pval$pi;
					tmp7=0;
					break a;
				}
				L$p7=L$pidx3$pval$pi;
				tmp7=0;
				break a;
				default:
				L$p7=L$pidx3$pval$pi;
				tmp7=0;
			}
		}
	}
	if(Larg1!==nullArray||Marg1!==0)Larg1[Marg1]=L$p7;
	tmp20=+LmergedArray394.d.getFloat64(1*8+LmergedArray394.o,true);
	return (tmp7|0)!==0?-tmp20:tmp20;
}
function ___b2d(L$p0$p4$pval,L$p0$p5$pval,M$p0$p5$pval,Larg2,Marg2){
	var tmp0=null,tmp1=0,tmp2=-0.,tmp3=0,Lgeptoindex=0,tmp5=0,tmp6=0;
	tmp0={d:new DataView(new ArrayBuffer(8)),o:0};
	Lgeptoindex=L$p0$p4$pval-1|0;
	tmp1=L$p0$p5$pval[M$p0$p5$pval+Lgeptoindex|0]|0;
	tmp5=___hi0bits(tmp1)|0;
	Larg2[Marg2]=32-tmp5|0;
	if((tmp5|0)<11){
		tmp6=11-tmp5|0;
		tmp0.d.setInt32(1*4+tmp0.o,tmp1>>>tmp6|1072693248,true);
		if((M$p0$p5$pval+Lgeptoindex|0)>M$p0$p5$pval){
			Lgeptoindex=L$p0$p5$pval[(M$p0$p5$pval+Lgeptoindex|0)+ -1|0]|0;
		}else{
			Lgeptoindex=0;
		}
		tmp0.d.setInt32(tmp0.o,Lgeptoindex>>>tmp6|tmp1<<(tmp5+21|0),true);
	}else{
		if((M$p0$p5$pval+Lgeptoindex|0)>M$p0$p5$pval){
			Lgeptoindex=Lgeptoindex-1|0;
			tmp6=L$p0$p5$pval[M$p0$p5$pval+Lgeptoindex|0]|0;
		}else{
			tmp6=0;
		}
		tmp3=tmp5-11|0;
		if((tmp3|0)!==0){
			tmp5=43-tmp5|0;
			tmp0.d.setInt32(1*4+tmp0.o,tmp1<<tmp3|tmp6>>>tmp5|1072693248,true);
			if((M$p0$p5$pval+Lgeptoindex|0)>M$p0$p5$pval){
				Lgeptoindex=L$p0$p5$pval[(M$p0$p5$pval+Lgeptoindex|0)+ -1|0]|0;
			}else{
				Lgeptoindex=0;
			}
			tmp0.d.setInt32(tmp0.o,Lgeptoindex>>>tmp5|tmp6<<tmp3,true);
		}else{
			tmp0.d.setInt32(1*4+tmp0.o,tmp1|1072693248,true);
			tmp0.d.setInt32(tmp0.o,tmp6,true);
		}
	}
	tmp2=+tmp0.d.getFloat64(tmp0.o,true);
	return tmp2;
}
function ___ulp(Larg0){
	var tmp0=null,tmp1=-0.,tmp2=0,tmp3=0;
	tmp0={d:new DataView(new ArrayBuffer(8)),o:0};
	tmp0.d.setFloat64(tmp0.o,Larg0,true);
	tmp3=tmp0.d.getInt32(1*4+tmp0.o,true)&2146435072;
	if(tmp3>>>0>54525952){
		tmp0.d.setInt32(1*4+tmp0.o,tmp3-54525952|0,true);
		tmp0.d.setInt32(tmp0.o,0,true);
	}else{
		tmp3=54525952-tmp3|0;
		tmp2=tmp3>>20;
		if((tmp3|0)<20971520){
			tmp0.d.setInt32(1*4+tmp0.o,524288>>>tmp2,true);
			tmp0.d.setInt32(tmp0.o,0,true);
		}else{
			tmp0.d.setInt32(1*4+tmp0.o,0,true);
			if((tmp3|0)>52428800){
				tmp3=1;
			}else{
				tmp3=1<<(51-tmp2|0);
			}
			tmp0.d.setInt32(tmp0.o,tmp3,true);
		}
	}
	tmp1=+tmp0.d.getFloat64(tmp0.o,true);
	return tmp1;
}
function ___any_on(L$p0$p4$pval,L$p0$p5$pval,M$p0$p5$pval,Larg2){
	var tmp0=0,tmp1=0,Lgeptoindexphi=0;
	Lgeptoindexphi=Larg2>>5;
	if((Lgeptoindexphi|0)>(L$p0$p4$pval|0)){
		Lgeptoindexphi=L$p0$p4$pval;
	}else if((Lgeptoindexphi|0)<(L$p0$p4$pval|0)){
		tmp0=Larg2&31;
		if((tmp0|0)!==0){
			tmp1=L$p0$p5$pval[M$p0$p5$pval+Lgeptoindexphi|0]|0;
			if((tmp1>>>tmp0<<tmp0|0)!==(tmp1|0))return 1|0;
		}
	}
	if((Lgeptoindexphi|0)<=0)return 0|0;
	while(1){
		Lgeptoindexphi=Lgeptoindexphi-1|0;
		if((L$p0$p5$pval[M$p0$p5$pval+Lgeptoindexphi|0]|0)!==0)return 1|0;
		if((M$p0$p5$pval+Lgeptoindexphi|0)>M$p0$p5$pval)continue;
		break;
	}
	return 0|0;
}
function _strncmp(Larg0,Marg0,Larg1,Marg1,Larg2){
	var tmp0=0,tmp1=0,tmp2=0,Lgeptoindexphi=0,tmp4=0,Lgeptoindexphi6=0;
	if((Larg2|0)!==0){
		tmp1=Larg0[Marg0]|0;
		tmp2=Larg1[Marg1]|0;
		Lgeptoindexphi=(tmp1&255)!==(tmp2&255)?1:0;
		if((tmp1&255)!==0){
			tmp4=Larg2-1|0;
			if((tmp4|0)!==0)if(!(Lgeptoindexphi)){
				Lgeptoindexphi6=0;
				Lgeptoindexphi=0;
				while(1){
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					tmp1=Larg0[Marg0+Lgeptoindexphi|0]|0;
					Lgeptoindexphi6=Lgeptoindexphi6+1|0;
					tmp2=Larg1[Marg1+Lgeptoindexphi6|0]|0;
					tmp0=(tmp1&255)!==(tmp2&255)?1:0;
					if((tmp1&255)!==0){
						tmp4=tmp4-1|0;
						if((tmp4|0)!==0)if(!(tmp0))continue;
					}
					break;
				}
			}
		}
		return (tmp1&255)-(tmp2&255)|0;
	}
	return 0|0;
}
function __strtoull_r(Larg0,Marg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4){
	var tmp0=0,LmergedArray=null,tmp2=0,tmp3=0,tmp4=0,Lgeptoindexphi=0,tmp6=0,tmp7=0,Lgeptoindex=0,tmp9=0,tmp10=0,tmp11=0,Lgeptoindexphi21=0,tmp13=0,tmp14=0,tmp15=0,tmp16=0,tmp17=0;
	Lgeptoindexphi=0;
	while(1){
		tmp6=Larg2[Marg2+Lgeptoindexphi|0]|0;
		tmp7=tmp6&255;
		Lgeptoindex=Lgeptoindexphi+1|0;
		if((__ctype_b[128+tmp7|0]&8)!==0){
			Lgeptoindexphi=Lgeptoindex;
			continue;
		}
		a:{
			switch(tmp6&255){
				case 45:
				tmp7=1;
				break;
				case 43:
				tmp7=0;
				break;
				default:
				Lgeptoindexphi=tmp7;
				tmp7=0;
				break a;
			}
			Lgeptoindex=Larg2[Marg2+Lgeptoindex|0]|0;
			tmp0=Lgeptoindex;
			Lgeptoindex=Lgeptoindexphi+2|0;
			Lgeptoindexphi=tmp0&255;
		}
		a:{
			if((Larg4|16|0)===16)if((Lgeptoindexphi|0)===48){
				switch(Larg2[Marg2+Lgeptoindex|0]&255){
					case 120:
					case 88:
					Lgeptoindexphi=Larg2[(Marg2+Lgeptoindex|0)+1|0]|0;
					Lgeptoindexphi=Lgeptoindexphi;
					Lgeptoindex=Lgeptoindex+2|0;
					tmp0=16;
					break a;
					default:
					Lgeptoindexphi=48;
				}
			}
			if((Larg4|0)!==0){
				tmp0=Larg4;
			}else{
				tmp0=(Lgeptoindexphi|0)===48?8|0:10|0;
			}
		}
		break;
	}
	LmergedArray=new Int32Array(8);
	LmergedArray[1]=-1;
	LmergedArray[0]=-1;
	tmp2=tmp0>>31;
	LmergedArray[3]=tmp2;
	LmergedArray[2]=tmp0;
	if((tmp2|0)>-1){
		tmp6=tmp0;
		tmp9=tmp2;
		tmp11=1;
		tmp10=0;
		while(1){
			tmp9=tmp6>>>31|tmp9<<1;
			tmp10=tmp11>>>31|tmp10<<1;
			tmp11<<=1;
			Lgeptoindexphi21=(tmp10|tmp11|0)!==0?1:0;
			tmp6<<=1;
			if((tmp9|0)>-1)if(Lgeptoindexphi21)continue;
			break;
		}
	}else{
		tmp6=tmp0;
		tmp9=tmp2;
		tmp10=0;
		tmp11=1;
	}
	if((tmp10|tmp11|0)!==0){
		tmp15=0;
		tmp14=0;
		tmp13=-1;
		Lgeptoindexphi21=-1;
		while(1){
			tmp16=tmp13>>>0>=tmp6>>>0?1:0;
			tmp17=(Lgeptoindexphi21|0)===(tmp9|0)?1:0;
			a:{
				if(Lgeptoindexphi21>>>0<=tmp9>>>0){
					if(!(tmp17))break a;
					if(!(tmp16))break a;
				}
				Lgeptoindexphi21=(Lgeptoindexphi21-tmp9|0)+((tmp13>>>0<tmp6>>>0?1:0)<<31>>31)|0;
				tmp13=tmp13-tmp6|0;
				tmp14|=tmp10;
				tmp15|=tmp11;
			}
			tmp11=tmp11>>>1|tmp10<<31;
			tmp6=tmp6>>>1|tmp9<<31;
			tmp10>>>=1;
			if((tmp11|tmp10|0)!==0){
				tmp9>>>=1;
				continue;
			}
			break;
		}
	}else{
		tmp14=0;
		tmp15=0;
	}
	LmergedArray[5]=-1;
	LmergedArray[4]=-1;
	LmergedArray[7]=tmp2;
	LmergedArray[6]=tmp0;
	if((tmp2|0)>-1){
		tmp6=tmp0;
		tmp9=tmp2;
		tmp11=1;
		tmp10=0;
		while(1){
			tmp9=tmp6>>>31|tmp9<<1;
			tmp10=tmp11>>>31|tmp10<<1;
			tmp11<<=1;
			Lgeptoindexphi21=(tmp10|tmp11|0)!==0?1:0;
			tmp6<<=1;
			if((tmp9|0)>-1)if(Lgeptoindexphi21)continue;
			break;
		}
	}else{
		tmp6=tmp0;
		tmp9=tmp2;
		tmp10=0;
		tmp11=1;
	}
	if((tmp10|tmp11|0)!==0){
		Lgeptoindexphi21=-1;
		tmp13=-1;
		while(1){
			tmp16=Lgeptoindexphi21>>>0>=tmp6>>>0?1:0;
			tmp17=(tmp13|0)===(tmp9|0)?1:0;
			a:{
				if(tmp13>>>0<=tmp9>>>0){
					if(!(tmp17))break a;
					if(!(tmp16))break a;
				}
				tmp13=(tmp13-tmp9|0)+((Lgeptoindexphi21>>>0<tmp6>>>0?1:0)<<31>>31)|0;
				Lgeptoindexphi21=Lgeptoindexphi21-tmp6|0;
			}
			tmp11=tmp11>>>1|tmp10<<31;
			tmp6=tmp6>>>1|tmp9<<31;
			tmp10>>>=1;
			if((tmp11|tmp10|0)!==0){
				tmp9>>>=1;
				continue;
			}
			break;
		}
	}else{
		Lgeptoindexphi21=-1;
	}
	tmp13=tmp0&65535;
	tmp9=tmp0>>>16;
	tmp11=0;
	tmp10=0;
	tmp6=0;
	while(1){
		tmp16=__ctype_b[128+Lgeptoindexphi|0]<<24>>24;
		if((tmp16&4|0)!==0){
			tmp16=48;
		}else{
			tmp16&=3;
			if((tmp16|0)===0)break;
			tmp16=(tmp16|0)===1?55|0:87|0;
		}
		Lgeptoindexphi=Lgeptoindexphi-tmp16|0;
		if((Lgeptoindexphi|0)<(tmp0|0)){
			a:if((tmp11|0)<0){
				tmp11=-1;
			}else{
				tmp11=tmp6>>>0>tmp15>>>0?1:0;
				if(tmp10>>>0>tmp14>>>0){
					tmp11=-1;
				}else{
					if(tmp11)if((tmp10|0)===(tmp14|0)){
						tmp11=-1;
						break a;
					}
					tmp11=(Lgeptoindexphi|0)>(Lgeptoindexphi21|0)?1:0;
					if((tmp6|0)===(tmp15|0))if((tmp10|0)===(tmp14|0))if(tmp11){
						tmp6=tmp15;
						tmp10=tmp14;
						tmp11=-1;
						break a;
					}
					tmp11=tmp6>>>16;
					tmp10=((tmp10*tmp0|0)+(tmp6*tmp2|0)|0)+(tmp11*tmp9|0)|0;
					tmp11=tmp11*tmp13|0;
					tmp6&=65535;
					tmp16=tmp6*tmp9|0;
					tmp17=tmp11+tmp16|0;
					tmp6=tmp6*tmp13|0;
					tmp3=tmp17<<16;
					tmp4=tmp3+tmp6|0;
					tmp10=((((tmp17>>>16)+(tmp3>>>0>(tmp6^ -1)>>>0?1:0)|0)+(tmp11>>>0>(tmp16^ -1)>>>0?tmp10+65536|0:tmp10|0)|0)+(Lgeptoindexphi>>31)|0)+(tmp4>>>0>(Lgeptoindexphi^ -1)>>>0?1:0)|0;
					tmp6=Lgeptoindexphi+tmp4|0;
					tmp11=1;
				}
			}
			Lgeptoindexphi=Larg2[Marg2+Lgeptoindex|0]|0;
			Lgeptoindexphi=Lgeptoindexphi&255;
			Lgeptoindex=Lgeptoindex+1|0;
			continue;
		}
		break;
	}
	if((tmp11|0)<0){
		Larg1.i0=34;
		tmp10=-1;
		tmp6=-1;
	}else if((tmp7|0)!==0){
		tmp10=(tmp6|0)!==0?tmp10^ -1|0:-tmp10|0;
		tmp6=-tmp6|0;
	}
	if(Larg3!==nullArray||Marg3!==0){
		if((tmp11|0)!==0){
			Lgeptoindexphi21=Lgeptoindex-1|0;
		}else{
			Lgeptoindexphi21=0;
		}
		Larg3[Marg3]={d:Larg2,o:Marg2+Lgeptoindexphi21|0};
	}
	Larg0[Marg0+1|0]=tmp10;
	Larg0[Marg0]=tmp6;
}
function __strtoll_r(Larg0,Marg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4){
	var LmergedArray=null,tmp1=0,tmp2=0,tmp3=0,Lgeptoindexphi=0,tmp5=0,tmp6=0,Lgeptoindex=0,tmp8=null,tmp8o=0,tmp9=0,tmp10=0,tmp11=0,tmp12=0,tmp13=0,Lgeptoindexphi33=0,tmp15=0,tmp16=0,tmp17=0,tmp18=0;
	LmergedArray=new Int32Array(14);
	Lgeptoindexphi=0;
	while(1){
		tmp5=Larg2[Marg2+Lgeptoindexphi|0]|0;
		tmp6=tmp5&255;
		Lgeptoindex=Lgeptoindexphi+1|0;
		if((__ctype_b[128+tmp6|0]&8)!==0){
			Lgeptoindexphi=Lgeptoindex;
			continue;
		}
		a:{
			switch(tmp5&255){
				case 45:
				tmp6=1;
				break;
				case 43:
				tmp6=0;
				break;
				default:
				Lgeptoindexphi=tmp6;
				tmp6=0;
				break a;
			}
			Lgeptoindex=Larg2[Marg2+Lgeptoindex|0]|0;
			tmp1=Lgeptoindex;
			Lgeptoindex=Lgeptoindexphi+2|0;
			Lgeptoindexphi=tmp1&255;
		}
		a:{
			if((Larg4|16|0)===16)if((Lgeptoindexphi|0)===48){
				switch(Larg2[Marg2+Lgeptoindex|0]&255){
					case 120:
					case 88:
					Lgeptoindexphi=Larg2[(Marg2+Lgeptoindex|0)+1|0]|0;
					Lgeptoindexphi=Lgeptoindexphi;
					Lgeptoindex=Lgeptoindex+2|0;
					tmp1=16;
					break a;
					default:
					Lgeptoindexphi=48;
				}
			}
			if((Larg4|0)!==0){
				tmp1=Larg4;
			}else{
				tmp1=(Lgeptoindexphi|0)===48?8|0:10|0;
			}
		}
		break;
	}
	LmergedArray[3]=-2147483648;
	LmergedArray[2]=0;
	LmergedArray[5]=2147483647;
	LmergedArray[4]=-1;
	tmp8o=(tmp6|0)!==0?2:4;
	tmp8=(tmp6|0)!==0?LmergedArray:LmergedArray;
	tmp9=tmp8[tmp8o+1|0]|0;
	tmp10=tmp8[tmp8o]|0;
	LmergedArray[1]=tmp9;
	LmergedArray[0]=tmp10;
	tmp2=tmp1>>31;
	LmergedArray[7]=tmp2;
	LmergedArray[6]=tmp1;
	a:if((tmp2|0)>-1){
		if(tmp2>>>0>=tmp9>>>0){
			if((tmp2|0)!==(tmp9|0)){
				tmp5=tmp2;
				tmp11=tmp1;
				tmp12=0;
				tmp13=1;
				break a;
			}
			if(tmp1>>>0>=tmp10>>>0){
				tmp5=tmp2;
				tmp11=tmp1;
				tmp12=0;
				tmp13=1;
				break a;
			}
		}
		tmp5=tmp2;
		tmp11=tmp1;
		tmp13=1;
		tmp12=0;
		while(1){
			tmp5=tmp11>>>31|tmp5<<1;
			tmp12=tmp13>>>31|tmp12<<1;
			tmp11<<=1;
			Lgeptoindexphi33=tmp11>>>0<tmp10>>>0?1:0;
			tmp15=(tmp5|0)===(tmp9|0)?1:0;
			tmp16=tmp5>>>0<tmp9>>>0?1:0;
			tmp13<<=1;
			tmp17=(tmp12|tmp13|0)!==0?1:0;
			if((tmp5|0)>-1){
				if(!(tmp16)){
					if(!(Lgeptoindexphi33))break a;
					if(!(tmp15))break a;
				}
				if(tmp17)continue;
			}
			break;
		}
	}else{
		tmp5=tmp2;
		tmp11=tmp1;
		tmp12=0;
		tmp13=1;
	}
	if((tmp12|tmp13|0)!==0){
		Lgeptoindexphi33=tmp9;
		tmp16=tmp10;
		while(1){
			tmp15=tmp16>>>0>=tmp11>>>0?1:0;
			tmp17=(Lgeptoindexphi33|0)===(tmp5|0)?1:0;
			a:{
				if(Lgeptoindexphi33>>>0<=tmp5>>>0){
					if(!(tmp17))break a;
					if(!(tmp15))break a;
				}
				Lgeptoindexphi33=(Lgeptoindexphi33-tmp5|0)+((tmp16>>>0<tmp11>>>0?1:0)<<31>>31)|0;
				tmp16=tmp16-tmp11|0;
			}
			tmp13=tmp13>>>1|tmp12<<31;
			tmp11=tmp11>>>1|tmp5<<31;
			tmp12>>>=1;
			if((tmp13|tmp12|0)!==0){
				tmp5>>>=1;
				continue;
			}
			break;
		}
	}else{
		tmp16=tmp10;
	}
	LmergedArray[9]=tmp2;
	LmergedArray[8]=tmp1;
	a:if((tmp2|0)>-1){
		if(tmp2>>>0>=tmp9>>>0){
			if((tmp2|0)!==(tmp9|0)){
				tmp5=tmp2;
				tmp11=tmp1;
				tmp12=0;
				tmp13=1;
				break a;
			}
			if(tmp1>>>0>=tmp10>>>0){
				tmp5=tmp2;
				tmp11=tmp1;
				tmp12=0;
				tmp13=1;
				break a;
			}
		}
		tmp5=tmp2;
		tmp11=tmp1;
		tmp13=1;
		tmp12=0;
		while(1){
			tmp5=tmp11>>>31|tmp5<<1;
			tmp12=tmp13>>>31|tmp12<<1;
			tmp11<<=1;
			Lgeptoindexphi33=tmp11>>>0<tmp10>>>0?1:0;
			tmp15=(tmp5|0)===(tmp9|0)?1:0;
			tmp17=tmp5>>>0<tmp9>>>0?1:0;
			tmp13<<=1;
			tmp18=(tmp12|tmp13|0)!==0?1:0;
			if((tmp5|0)>-1){
				if(!(tmp17)){
					if(!(Lgeptoindexphi33))break a;
					if(!(tmp15))break a;
				}
				if(tmp18)continue;
			}
			break;
		}
	}else{
		tmp5=tmp2;
		tmp11=tmp1;
		tmp12=0;
		tmp13=1;
	}
	if((tmp12|tmp13|0)!==0){
		Lgeptoindexphi33=0;
		tmp15=0;
		while(1){
			tmp17=tmp10>>>0>=tmp11>>>0?1:0;
			tmp18=(tmp9|0)===(tmp5|0)?1:0;
			a:{
				if(tmp9>>>0<=tmp5>>>0){
					if(!(tmp18))break a;
					if(!(tmp17))break a;
				}
				tmp9=(tmp9-tmp5|0)+((tmp10>>>0<tmp11>>>0?1:0)<<31>>31)|0;
				tmp10=tmp10-tmp11|0;
				Lgeptoindexphi33|=tmp13;
				tmp15|=tmp12;
			}
			tmp13=tmp13>>>1|tmp12<<31;
			tmp11=tmp11>>>1|tmp5<<31;
			tmp12>>>=1;
			if((tmp13|tmp12|0)!==0){
				tmp5>>>=1;
				continue;
			}
			break;
		}
	}else{
		tmp15=0;
		Lgeptoindexphi33=0;
	}
	LmergedArray[1]=tmp15;
	LmergedArray[0]=Lgeptoindexphi33;
	tmp10=tmp1&65535;
	tmp5=tmp1>>>16;
	tmp13=0;
	tmp12=0;
	tmp11=0;
	while(1){
		tmp9=__ctype_b[128+Lgeptoindexphi|0]<<24>>24;
		if((tmp9&4|0)!==0){
			tmp9=48;
		}else{
			tmp9&=3;
			if((tmp9|0)===0)break;
			tmp9=(tmp9|0)===1?55|0:87|0;
		}
		Lgeptoindexphi=Lgeptoindexphi-tmp9|0;
		if((Lgeptoindexphi|0)<(tmp1|0)){
			a:if((tmp13|0)<0){
				tmp13=-1;
			}else{
				tmp9=tmp11>>>0>Lgeptoindexphi33>>>0?1:0;
				if(tmp12>>>0>tmp15>>>0){
					tmp13=-1;
				}else{
					if(tmp9)if((tmp12|0)===(tmp15|0)){
						tmp13=-1;
						break a;
					}
					tmp9=(Lgeptoindexphi|0)>(tmp16|0)?1:0;
					if((tmp11|0)===(Lgeptoindexphi33|0))if((tmp12|0)===(tmp15|0))if(tmp9){
						tmp11=Lgeptoindexphi33;
						tmp12=tmp15;
						tmp13=-1;
						break a;
					}
					tmp13=tmp11>>>16;
					tmp9=((tmp12*tmp1|0)+(tmp11*tmp2|0)|0)+(tmp13*tmp5|0)|0;
					tmp12=tmp13*tmp10|0;
					tmp11&=65535;
					tmp13=tmp11*tmp5|0;
					tmp17=tmp12+tmp13|0;
					tmp11=tmp11*tmp10|0;
					tmp18=tmp17<<16;
					tmp3=tmp18+tmp11|0;
					tmp12=((((tmp17>>>16)+(tmp18>>>0>(tmp11^ -1)>>>0?1:0)|0)+(tmp12>>>0>(tmp13^ -1)>>>0?tmp9+65536|0:tmp9|0)|0)+(Lgeptoindexphi>>31)|0)+(tmp3>>>0>(Lgeptoindexphi^ -1)>>>0?1:0)|0;
					tmp11=Lgeptoindexphi+tmp3|0;
					tmp13=1;
				}
			}
			Lgeptoindexphi=Larg2[Marg2+Lgeptoindex|0]|0;
			Lgeptoindexphi=Lgeptoindexphi&255;
			Lgeptoindex=Lgeptoindex+1|0;
			continue;
		}
		break;
	}
	if((tmp13|0)<0){
		LmergedArray[11]=-2147483648;
		LmergedArray[10]=0;
		LmergedArray[13]=2147483647;
		LmergedArray[12]=-1;
		tmp8o=(tmp6|0)!==0?10:12;
		tmp8=(tmp6|0)!==0?LmergedArray:LmergedArray;
		tmp12=tmp8[tmp8o+1|0]|0;
		tmp11=tmp8[tmp8o]|0;
		Larg1.i0=34;
	}else if((tmp6|0)!==0){
		tmp12=(tmp11|0)!==0?tmp12^ -1|0:-tmp12|0;
		tmp11=-tmp11|0;
	}
	if(Larg3!==nullArray||Marg3!==0){
		if((tmp13|0)!==0){
			Lgeptoindexphi33=Lgeptoindex-1|0;
		}else{
			Lgeptoindexphi33=0;
		}
		Larg3[Marg3]={d:Larg2,o:Marg2+Lgeptoindexphi33|0};
	}
	Larg0[Marg0+1|0]=tmp12;
	Larg0[Marg0]=tmp11;
}
function ___sccl(Larg0,Marg0,Larg1,Marg1){
	var Lgeptoindexphi1=0,tmp1=0,tmp2=0,L$pph=0,tmp4=0,Lgeptoindexphi=0,tmp6=0;
	L$pph=Larg1[Marg1]|0;
	if((L$pph&255)===94){
		L$pph=Larg1[Marg1+1|0]|0;
		Lgeptoindexphi=2;
		tmp4=1;
	}else{
		Lgeptoindexphi=1;
		tmp4=0;
	}
	tmp6=0;
	while(1){
		Larg0[Marg0+tmp6|0]=tmp4;
		tmp6=tmp6+1|0;
		if((tmp6|0)!==256)continue;
		a:if((L$pph&255)!==0){
			tmp4^=1;
			while(1){
				tmp6=L$pph&255;
				Larg0[Marg0+tmp6|0]=tmp4;
				Lgeptoindexphi1=Lgeptoindexphi;
				b:while(1){
					L$pph=Larg1[Marg1+Lgeptoindexphi1|0]|0;
					Lgeptoindexphi=Lgeptoindexphi1+1|0;
					switch(L$pph&255){
						case 0:
						break a;
						case 45:
						tmp1=Larg1[Marg1+Lgeptoindexphi|0]|0;
						L$pph=tmp1&255;
						tmp2=(tmp6|0)>(L$pph|0)?1:0;
						if((tmp1&255)===93){
							L$pph=45;
							break b;
						}
						if(tmp2){
							L$pph=45;
							break b;
						}
						while(1){
							tmp6=tmp6+1|0;
							Larg0[Marg0+tmp6|0]=tmp4;
							if((tmp6|0)<(L$pph|0))continue;
							break;
						}
						Lgeptoindexphi1=Lgeptoindexphi1+2|0;
						continue b;
						case 93:
						oSlot=Marg1+Lgeptoindexphi|0;
						return Larg1;
						default:
					}
					break;
				}
				continue;
			}
		}
		break;
	}
	oSlot=Marg1+(Lgeptoindexphi-1|0)|0;
	return Larg1;
}
function ___ssrefill_r(Larg0,Larg1){
	var tmp0=0,tmp1=null,tmp1o=0;
	tmp1o=Larg1.a12.a0o;
	tmp1=Larg1.a12.a0;
	if(tmp1!==nullArray||tmp1o!==0){
		Larg1.a12.a0=nullArray;
		Larg1.a12.a0o=0;
		tmp0=Larg1.i14|0;
		Larg1.i1=tmp0;
		if((tmp0|0)!==0){
			tmp1o=Larg1.a13o;
			tmp1=Larg1.a13;
			Larg1.a0=tmp1;
			Larg1.a0o=tmp1o;
			return 0|0;
		}
	}
	tmp1o=Larg1.a4.a0o;
	tmp1=Larg1.a4.a0;
	Larg1.a0=tmp1;
	Larg1.a0o=tmp1o;
	Larg1.i1=0;
	Larg1.i3=Larg1.i3|32;
	return  -1|0;
}
function __sungetc_r(Larg0,Larg1,Larg2){
	var tmp0=0,tmp1=null,tmp2=0,Lgeptoindexphi=0,L$poptgep$poptgep16$poptgepsqueezed=null,L$poptgep$poptgep16$poptgepsqueezedo=0,L$poptgep$poptgep23$poptgepsqueezed=null,L$poptgep$poptgep23$poptgepsqueezedo=0,tmp6=0,L$poptgep$poptgep20$poptgepsqueezed=null,L$poptgep$poptgep20$poptgepsqueezedo=0,Lgeptoindexphi2=0;
	if((Larg1|0)===-1)return  -1|0;
	Larg2.i3=Larg2.i3& -33;
	L$poptgep$poptgep16$poptgepsqueezed=Larg2.a12;
	L$poptgep$poptgep23$poptgepsqueezedo=L$poptgep$poptgep16$poptgepsqueezed.a0o;
	L$poptgep$poptgep23$poptgepsqueezed=L$poptgep$poptgep16$poptgepsqueezed.a0;
	tmp0=Larg1&255;
	if(L$poptgep$poptgep23$poptgepsqueezed!==nullArray||L$poptgep$poptgep23$poptgepsqueezedo!==0){
		tmp6=L$poptgep$poptgep16$poptgepsqueezed.i1|0;
		if((Larg2.i1|0)<(tmp6|0)){
			L$poptgep$poptgep16$poptgepsqueezedo=Larg2.a0o;
			L$poptgep$poptgep16$poptgepsqueezed=Larg2.a0;
		}else{
			L$poptgep$poptgep20$poptgepsqueezed=Larg2.a15;
			if(L$poptgep$poptgep23$poptgepsqueezed===L$poptgep$poptgep20$poptgepsqueezed&&L$poptgep$poptgep23$poptgepsqueezedo===0){
				tmp1=new Uint8Array(1024);
				if(tmp1===nullArray&&0===0)return  -1|0;
				L$poptgep$poptgep16$poptgepsqueezed.a0=tmp1;
				L$poptgep$poptgep16$poptgepsqueezed.a0o=0;
				L$poptgep$poptgep16$poptgepsqueezed.i1=1024;
				tmp1[1023]=L$poptgep$poptgep20$poptgepsqueezed[2]|0;
				tmp1[1022]=L$poptgep$poptgep20$poptgepsqueezed[1]|0;
				tmp1[1021]=L$poptgep$poptgep23$poptgepsqueezed[L$poptgep$poptgep23$poptgepsqueezedo]|0;
				Larg2.a0=tmp1;
				Larg2.a0o=0+1021|0;
				L$poptgep$poptgep16$poptgepsqueezedo=0+1021|0;
				L$poptgep$poptgep16$poptgepsqueezed=tmp1;
			}else{
				tmp2=tmp6<<1;
				L$poptgep$poptgep23$poptgepsqueezed=(function(){var __old__=L$poptgep$poptgep23$poptgepsqueezed;
					var __ret__=new Uint8Array(tmp2/1|0);
					__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));
					return __ret__;})();
				if(L$poptgep$poptgep23$poptgepsqueezed===nullArray&&0===0)return  -1|0;
				if((tmp6|0)!==0){
					Lgeptoindexphi2=tmp6;
					Lgeptoindexphi=0;
					while(1){
						L$poptgep$poptgep23$poptgepsqueezed[Lgeptoindexphi2]=L$poptgep$poptgep23$poptgepsqueezed[Lgeptoindexphi]|0;
						Lgeptoindexphi2=Lgeptoindexphi2+1|0;
						if(L$poptgep$poptgep23$poptgepsqueezed!==L$poptgep$poptgep23$poptgepsqueezed||((0+tmp6|0)+tmp6|0)!==(0+Lgeptoindexphi2|0)){
							Lgeptoindexphi=Lgeptoindexphi+1|0;
							continue;
						}
						break;
					}
				}
				Larg2.a0=L$poptgep$poptgep23$poptgepsqueezed;
				Larg2.a0o=0+tmp6|0;
				L$poptgep$poptgep16$poptgepsqueezed.a0=L$poptgep$poptgep23$poptgepsqueezed;
				L$poptgep$poptgep16$poptgepsqueezed.a0o=0;
				L$poptgep$poptgep16$poptgepsqueezed.i1=tmp2;
				L$poptgep$poptgep16$poptgepsqueezedo=0+tmp6|0;
				L$poptgep$poptgep16$poptgepsqueezed=L$poptgep$poptgep23$poptgepsqueezed;
			}
		}
		Larg2.a0=L$poptgep$poptgep16$poptgepsqueezed;
		Larg2.a0o=L$poptgep$poptgep16$poptgepsqueezedo+ -1|0;
		L$poptgep$poptgep16$poptgepsqueezed[L$poptgep$poptgep16$poptgepsqueezedo+ -1|0]=Larg1;
		Larg2.i1=(Larg2.i1|0)+1|0;
		return tmp0|0;
	}
	L$poptgep$poptgep23$poptgepsqueezedo=Larg2.a4.a0o;
	L$poptgep$poptgep23$poptgepsqueezed=Larg2.a4.a0;
	L$poptgep$poptgep20$poptgepsqueezedo=Larg2.a0o;
	L$poptgep$poptgep20$poptgepsqueezed=Larg2.a0;
	tmp6=L$poptgep$poptgep20$poptgepsqueezedo>L$poptgep$poptgep23$poptgepsqueezedo?1:0;
	if(L$poptgep$poptgep23$poptgepsqueezed!==nullArray||L$poptgep$poptgep23$poptgepsqueezedo!==0)if(tmp6)if((L$poptgep$poptgep20$poptgepsqueezed[L$poptgep$poptgep20$poptgepsqueezedo+ -1|0]&255)===(Larg1&255)){
		Larg2.a0=L$poptgep$poptgep20$poptgepsqueezed;
		Larg2.a0o=L$poptgep$poptgep20$poptgepsqueezedo+ -1|0;
		Larg2.i1=(Larg2.i1|0)+1|0;
		return tmp0|0;
	}
	Larg2.i14=Larg2.i1|0;
	Larg2.a13=L$poptgep$poptgep20$poptgepsqueezed;
	Larg2.a13o=L$poptgep$poptgep20$poptgepsqueezedo;
	L$poptgep$poptgep23$poptgepsqueezed=Larg2.a15;
	L$poptgep$poptgep16$poptgepsqueezed.a0=L$poptgep$poptgep23$poptgepsqueezed;
	L$poptgep$poptgep16$poptgepsqueezed.a0o=0;
	L$poptgep$poptgep16$poptgepsqueezed.i1=3;
	L$poptgep$poptgep23$poptgepsqueezed[2]=Larg1;
	Larg2.a0=L$poptgep$poptgep23$poptgepsqueezed;
	Larg2.a0o=2;
	Larg2.i1=1;
	return tmp0|0;
}
function ___seofread(Larg0,Larg1,Marg1,Larg2,Marg2,Larg3){
	return 0|0;
}
function __ZNSt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEED0Ev(Larg0){
}
function __ZNSt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEED2Ev(Larg0){
}
function __ZNKSt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_bRSt8ios_baseRjRSs(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6,Marg6,Larg7){
	var LmergedArray=null,tmp1=null,tmp2=null,tmp3=0,tmp4=0,tmp5=null,tmp6=null,tmp6o=0,Lgeptoindexphi=0,tmp8=null,tmp8o=0,tmp9=null,tmp9o=0,Lgeptoindexphi12=0,Lgeptoindexphi5=0,L$ppre2$pi=null,Lgeptoindexphi15=0;
	LmergedArray=new Uint8Array(101);
	tmp1={a0:nullArray,a0o:0,a1:null};
	tmp1.a0=LmergedArray;
	tmp1.a0o=0;
	tmp1.a1=__ZSt12__do_nothingPv;
	tmp6=[nullObj];
	tmp2=Larg5.a7.a0;
	tmp2.i1=(tmp2.i1|0)+1|0;
	if((__ZNSt5ctypeIcE2idE.i0&255)!==0){
		Lgeptoindexphi=__ZNSt5ctypeIcE2idE.i1|0;
	}else{
		Lgeptoindexphi=(__ZNSt6locale2id9__next_idE|0)+1|0;
		__ZNSt6locale2id9__next_idE=Lgeptoindexphi;
		__ZNSt5ctypeIcE2idE.i1=Lgeptoindexphi;
		__ZNSt5ctypeIcE2idE.i0=1;
	}
	tmp8=tmp2.a2.a0;
	tmp8=tmp8[Lgeptoindexphi-1|0];
	LmergedArray[100]=0;
	Lgeptoindexphi=Larg5.i1|0;
	tmp9={a0:null};
	tmp9.a0=Larg3.a0;
	Lgeptoindexphi=__ZNSt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE8__do_getERS3_S3_bRKSt6localejRjRbRKSt5ctypeIcERSt10unique_ptrIcPFvPvEERPcSL_(Larg2,tmp9,Larg4,tmp2,Lgeptoindexphi,Larg6,Marg6,LmergedArray,100,tmp8,tmp1,tmp6,0,LmergedArray,0+100|0)|0;
	if(Lgeptoindexphi){
		tmp9=Larg7.a2;
		if(tmp9!==nullArray||0!==0)tmp9[0]=0;
		Larg7.i1=0;
		if((LmergedArray[100]&255)!==0)__ZNSs9push_backEc(Larg7,tmp8.a0.a8(tmp8,45)|0);
		Lgeptoindexphi12=tmp8.a0.a8(tmp8,48)|0;
		tmp8o=tmp1.a0o;
		tmp8=tmp1.a0;
		tmp9=tmp6[0];
		if(tmp8o<(tmp9.o+ -1|0)){
			Lgeptoindexphi=0;
			while(1){
				if((tmp8[tmp8o+Lgeptoindexphi|0]&255)===(Lgeptoindexphi12&255)){
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					if((tmp8o+Lgeptoindexphi|0)<(tmp9.o+ -1|0))continue;
				}
				break;
			}
		}else{
			Lgeptoindexphi=0;
		}
		Lgeptoindexphi12=(tmp8o+Lgeptoindexphi|0);
		tmp3=Larg7.i1|0;
		Lgeptoindexphi5=Larg7.i0|0;
		if(Lgeptoindexphi5>>>0<2){
			Lgeptoindexphi5=0;
		}else{
			Lgeptoindexphi5=(Lgeptoindexphi5& -2)-1|0;
		}
		tmp4=(tmp9.o)-Lgeptoindexphi12|0;
		if((tmp4|0)!==0){
			if(Lgeptoindexphi5-tmp3>>>0<tmp4>>>0){
				Lgeptoindexphi12=tmp4+tmp3|0;
				tmp5=Larg7.a2;
				if(Lgeptoindexphi5>>>0<2147483623){
					Lgeptoindexphi5<<=1;
					Lgeptoindexphi5=(Lgeptoindexphi12>>>0<Lgeptoindexphi5>>>0?Lgeptoindexphi5|0:Lgeptoindexphi12|0)+16& -16;
				}else{
					Lgeptoindexphi5=-17;
				}
				L$ppre2$pi=new Uint8Array(Lgeptoindexphi5/1|0);
				if((tmp3|0)!==0){
					Lgeptoindexphi15=0;
					Lgeptoindexphi12=0;
					while(1){
						L$ppre2$pi[Lgeptoindexphi15]=tmp5[Lgeptoindexphi12]|0;
						Lgeptoindexphi15=Lgeptoindexphi15+1|0;
						if(L$ppre2$pi!==L$ppre2$pi||(0+tmp3|0)!==(0+Lgeptoindexphi15|0)){
							Lgeptoindexphi12=Lgeptoindexphi12+1|0;
							continue;
						}
						break;
					}
				}
				Larg7.a2=L$ppre2$pi;
				Larg7.i0=Lgeptoindexphi5|1;
			}else{
				L$ppre2$pi=Larg7.a2;
			}
			if(tmp8===tmp9.d&&(tmp8o+Lgeptoindexphi|0)===tmp9.o){
				Lgeptoindexphi=tmp4+tmp3|0;
				tmp8o=0+tmp3|0;
				tmp8=L$ppre2$pi;
			}else{
				Lgeptoindexphi5=0;
				while(1){
					L$ppre2$pi[(0+tmp3|0)+Lgeptoindexphi5|0]=tmp8[tmp8o+Lgeptoindexphi|0]|0;
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					if(tmp8!==tmp9.d||(tmp8o+Lgeptoindexphi|0)!==tmp9.o){
						Lgeptoindexphi5=Lgeptoindexphi5+1|0;
						continue;
					}
					break;
				}
				Lgeptoindexphi=tmp4+tmp3|0;
				tmp8o=0+Lgeptoindexphi|0;
				tmp8=L$ppre2$pi;
			}
			tmp8[tmp8o]=0;
			Larg7.i1=Lgeptoindexphi;
		}
	}
	tmp8=Larg2.a0;
	if(tmp8!==null){
		tmp9o=tmp8.a3o;
		tmp9=tmp8.a3;
		L$ppre2$pi=tmp8.a4;
		if(tmp9===L$ppre2$pi&&tmp9o===0)if((tmp8.a0.a10(tmp8)|0|0)===-1){
			Larg2.a0=null;
			tmp8=null;
		}else{
			tmp8=Larg2.a0;
		}
	}else{
		tmp8=null;
	}
	tmp9=Larg3.a0;
	Lgeptoindexphi=tmp8===null?1:0;
	a:{
		b:{
			c:if(tmp9!==null){
				tmp8o=tmp9.a3o;
				tmp8=tmp9.a3;
				L$ppre2$pi=tmp9.a4;
				if(tmp8===L$ppre2$pi&&tmp8o===0)if((tmp9.a0.a10(tmp9)|0|0)===-1){
					Larg3.a0=null;
					break c;
				}
				if(Lgeptoindexphi)break a;
				break b;
			}
			if(!(Lgeptoindexphi))break a;
		}
		Larg6[Marg6]=Larg6[Marg6]|2;
	}
	Larg0.a0=Larg2.a0;
	Lgeptoindexphi=tmp2.i1|0;
	tmp2.i1=Lgeptoindexphi-1|0;
	if((Lgeptoindexphi|0)===0)tmp2.a0.a3(tmp2);
	tmp6o=tmp1.a0o;
	tmp6=tmp1.a0;
	tmp1.a0=nullArray;
	tmp1.a0o=0;
	if(tmp6!==nullArray||tmp6o!==0)tmp1.a1(tmp6,tmp6o);
}
function __ZNSs9push_backEc(Larg0,Larg1){
	var tmp0=0,tmp1=null,tmp2=0,tmp3=null,tmp4=0,Lgeptoindexphi=0,Lgeptoindexphi2=0;
	tmp2=Larg0.i0|0;
	if(tmp2>>>0<2){
		tmp2=0;
	}else{
		tmp2=(tmp2& -2)-1|0;
	}
	tmp0=Larg0.i1|0;
	tmp3=Larg0.a2;
	if((tmp0|0)===(tmp2|0)){
		if(tmp2>>>0<2147483623){
			tmp4=tmp2<<1;
			Lgeptoindexphi=tmp2+1|0;
			tmp4=(Lgeptoindexphi>>>0<tmp4>>>0?tmp4|0:Lgeptoindexphi|0)+16& -16;
		}else{
			tmp4=-17;
		}
		tmp1=new Uint8Array(tmp4/1|0);
		if((tmp2|0)!==0){
			Lgeptoindexphi2=0;
			Lgeptoindexphi=0;
			while(1){
				tmp1[Lgeptoindexphi2]=tmp3[Lgeptoindexphi]|0;
				Lgeptoindexphi2=Lgeptoindexphi2+1|0;
				if(tmp1!==tmp1||(0+tmp2|0)!==(0+Lgeptoindexphi2|0)){
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					continue;
				}
				break;
			}
		}
		Larg0.a2=tmp1;
		Larg0.i0=tmp4|1;
		tmp3=tmp1;
	}
	Larg0.i1=tmp0+1|0;
	tmp3[tmp0]=Larg1;
	tmp3[(0+tmp0|0)+1|0]=0;
}
function __ZNSt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE8__do_getERS3_S3_bRKSt6localejRjRbRKSt5ctypeIcERSt10unique_ptrIcPFvPvEERPcSL_(Larg0,Larg1,Larg2,L$p0$p0$pval,Larg4,Larg5,Marg5,Larg6,Marg6,Larg7,Larg8,Larg9,Marg9,Larg10,Marg10){
	var tmp0=null,tmp1=null,LmergedArray=null,tmp3=null,tmp4=null,tmp5=null,tmp6=null,tmp7=null,tmp8=null,tmp9=null,tmp10=0,tmp11=0,L$pnot=0,tmp13=0,tmp14=null,tmp14o=0,tmp15=null,tmp15o=0,tmp16=null,tmp16o=0,tmp17=null,tmp18=null,tmp18o=0,tmp19=null,L$ppre=null,L$ppre38=null,L$ppre38o=0,L$ppre40=null,tmp23=null,L$poptgepsqueezed371=null,tmp25=null,tmp25o=0,L$p07=0,L$p06=0,tmp28=0,tmp29=null,L$p0=0,tmp31=0,Lgeptoindexphi=0,tmp33=0;
	tmp14=[{d:Larg10,o:Marg10}];
	tmp0=new Int32Array(100);
	tmp1={a0:nullArray,a1:null};
	tmp1.a0=tmp0;
	tmp1.a1=__ZSt12__do_nothingPv;
	LmergedArray=[nullObj,nullObj];
	LmergedArray[0]={d:tmp0,o:0};
	LmergedArray[1]={d:tmp0,o:100};
	tmp3=new Uint8Array(4);
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp4.i0=0;
	tmp4.i1=0;
	tmp4.a2=nullArray;
	tmp5={i0:0,i1:0,a2:nullArray};
	tmp5.i0=0;
	tmp5.i1=0;
	tmp5.a2=nullArray;
	tmp6={i0:0,i1:0,a2:nullArray};
	tmp6.i0=0;
	tmp6.i1=0;
	tmp6.a2=nullArray;
	tmp7={i0:0,i1:0,a2:nullArray};
	tmp7.i0=0;
	tmp7.i1=0;
	tmp7.a2=nullArray;
	tmp8={i0:0,i1:0,a2:nullArray};
	tmp8.i0=0;
	tmp8.i1=0;
	tmp8.a2=nullArray;
	tmp15=new Uint8Array(4);
	tmp16={i0:0,i1:0,a2:nullArray};
	tmp17={i0:0,i1:0,a2:nullArray};
	tmp9={i0:0,i1:0,a2:nullArray};
	tmp18={i0:0,i1:0,a2:nullArray};
	tmp19=new Uint8Array(4);
	L$ppre={i0:0,i1:0,a2:nullArray};
	L$ppre38={i0:0,i1:0,a2:nullArray};
	L$ppre40={i0:0,i1:0,a2:nullArray};
	tmp23={i0:0,i1:0,a2:nullArray};
	L$poptgepsqueezed371=L$p0$p0$pval.a2;
	if(Larg2){
		L$poptgepsqueezed371=L$poptgepsqueezed371.a0;
		L$poptgepsqueezed371=L$poptgepsqueezed371[(__ZNSt10moneypunctIcLb1EE2idE$p1|0)-1|0];
		L$poptgepsqueezed371.a0.a12(tmp15,0,L$poptgepsqueezed371);
		tmp3[0]=tmp15[0]|0;
		tmp3[1]=tmp15[1]|0;
		tmp3[2]=tmp15[2]|0;
		tmp3[3]=tmp15[3]|0;
		L$poptgepsqueezed371.a0.a9(tmp16,L$poptgepsqueezed371);
		tmp25=tmp7.a2;
		if(tmp25!==nullArray||0!==0)tmp25[0]=0;
		tmp7.i1=0;
		__ZNSs7reserveEj(tmp7);
		tmp7.i0=tmp16.i0|0;
		tmp7.i1=tmp16.i1|0;
		tmp25=tmp16.a2;
		tmp7.a2=tmp25;
		L$poptgepsqueezed371.a0.a8(tmp17,L$poptgepsqueezed371);
		tmp25=tmp6.a2;
		if(tmp25!==nullArray||0!==0)tmp25[0]=0;
		tmp6.i1=0;
		__ZNSs7reserveEj(tmp6);
		tmp6.i0=tmp17.i0|0;
		tmp6.i1=tmp17.i1|0;
		tmp25=tmp17.a2;
		tmp6.a2=tmp25;
		L$p07=L$poptgepsqueezed371.a0.a4(L$poptgepsqueezed371)|0;
		L$p06=L$poptgepsqueezed371.a0.a5(L$poptgepsqueezed371)|0;
		L$poptgepsqueezed371.a0.a6(tmp9,L$poptgepsqueezed371);
		tmp4.i1=0;
		__ZNSs7reserveEj(tmp4);
		tmp4.i0=tmp9.i0|0;
		tmp28=tmp9.i1|0;
		tmp4.i1=tmp28;
		tmp25=tmp9.a2;
		tmp4.a2=tmp25;
		L$poptgepsqueezed371.a0.a7(tmp18,L$poptgepsqueezed371);
		tmp5.i1=0;
		__ZNSs7reserveEj(tmp5);
		tmp5.i0=tmp18.i0|0;
		tmp5.i1=tmp18.i1|0;
		tmp29=tmp18.a2;
		tmp5.a2=tmp29;
		L$p0=L$poptgepsqueezed371.a0.a10(L$poptgepsqueezed371)|0;
	}else{
		L$poptgepsqueezed371=L$poptgepsqueezed371.a0;
		L$poptgepsqueezed371=L$poptgepsqueezed371[(__ZNSt10moneypunctIcLb0EE2idE$p1|0)-1|0];
		L$poptgepsqueezed371.a0.a12(tmp19,0,L$poptgepsqueezed371);
		tmp3[0]=tmp19[0]|0;
		tmp3[1]=tmp19[1]|0;
		tmp3[2]=tmp19[2]|0;
		tmp3[3]=tmp19[3]|0;
		L$poptgepsqueezed371.a0.a9(L$ppre,L$poptgepsqueezed371);
		tmp25=tmp7.a2;
		if(tmp25!==nullArray||0!==0)tmp25[0]=0;
		tmp7.i1=0;
		__ZNSs7reserveEj(tmp7);
		tmp7.i0=L$ppre.i0|0;
		tmp7.i1=L$ppre.i1|0;
		tmp25=L$ppre.a2;
		tmp7.a2=tmp25;
		L$poptgepsqueezed371.a0.a8(L$ppre38,L$poptgepsqueezed371);
		tmp25=tmp6.a2;
		if(tmp25!==nullArray||0!==0)tmp25[0]=0;
		tmp6.i1=0;
		__ZNSs7reserveEj(tmp6);
		tmp6.i0=L$ppre38.i0|0;
		tmp6.i1=L$ppre38.i1|0;
		tmp25=L$ppre38.a2;
		tmp6.a2=tmp25;
		L$p07=L$poptgepsqueezed371.a0.a4(L$poptgepsqueezed371)|0;
		L$p06=L$poptgepsqueezed371.a0.a5(L$poptgepsqueezed371)|0;
		L$poptgepsqueezed371.a0.a6(L$ppre40,L$poptgepsqueezed371);
		tmp4.i1=0;
		__ZNSs7reserveEj(tmp4);
		tmp4.i0=L$ppre40.i0|0;
		tmp28=L$ppre40.i1|0;
		tmp4.i1=tmp28;
		tmp25=L$ppre40.a2;
		tmp4.a2=tmp25;
		L$poptgepsqueezed371.a0.a7(tmp23,L$poptgepsqueezed371);
		tmp5.i1=0;
		__ZNSs7reserveEj(tmp5);
		tmp5.i0=tmp23.i0|0;
		tmp5.i1=tmp23.i1|0;
		tmp29=tmp23.a2;
		tmp5.a2=tmp29;
		L$p0=L$poptgepsqueezed371.a0.a10(L$poptgepsqueezed371)|0;
	}
	tmp15o=Larg8.a0o;
	tmp15=Larg8.a0;
	Larg9[Marg9]={d:tmp15,o:tmp15o};
	tmp10=(0);
	tmp11=(tmp28|0)!==0?1:0;
	L$pnot=((Larg4&512|0)!==0?1:0)^1?1:0;
	tmp18o=0;
	tmp18=tmp0;
	tmp19=null;
	tmp31=0;
	a:{
		b:while(1){
			tmp15=Larg0.a0;
			if(tmp15!==null){
				tmp16o=tmp15.a3o;
				tmp16=tmp15.a3;
				tmp17=tmp15.a4;
				if(tmp16===tmp17&&tmp16o===0)if((tmp15.a0.a10(tmp15)|0|0)===-1){
					Larg0.a0=null;
					tmp15=null;
				}else{
					tmp15=Larg0.a0;
				}
			}else{
				tmp15=null;
			}
			tmp23=Larg1.a0;
			Lgeptoindexphi=tmp15===null?1:0;
			c:{
				d:if(tmp23!==null){
					tmp15o=tmp23.a3o;
					tmp15=tmp23.a3;
					tmp16=tmp23.a4;
					if(tmp15===tmp16&&tmp15o===0)if((tmp23.a0.a10(tmp23)|0|0)===-1){
						Larg1.a0=null;
						break d;
					}
					if(Lgeptoindexphi)break c;
					break b;
				}
				if(Lgeptoindexphi){
					tmp23=null;
					break b;
				}
				tmp23=null;
			}
			c:{
				switch(tmp3[tmp31]<<24>>24|0){
					case 1:
					if((tmp31|0)===3)break b;
					tmp15=Larg0.a0;
					tmp16o=tmp15.a3o;
					tmp16=tmp15.a3;
					tmp17=tmp15.a4;
					if(tmp16===tmp17&&tmp16o===0){
						Lgeptoindexphi=tmp15.a0.a10(tmp15)|0;
					}else{
						Lgeptoindexphi=tmp16[tmp16o]|0;
						Lgeptoindexphi=Lgeptoindexphi&255;
					}
					if(Lgeptoindexphi<<24>-16777216){
						tmp15=Larg7.a2;
						if((tmp15[1+(Lgeptoindexphi<<24>>24)|0]&8)!==0){
							tmp15=Larg0.a0;
							tmp16o=tmp15.a3o;
							tmp16=tmp15.a3;
							tmp17=tmp15.a4;
							if(tmp16===tmp17&&tmp16o===0){
								Lgeptoindexphi=tmp15.a0.a11(tmp15)|0;
							}else{
								tmp15.a3=tmp16;
								tmp15.a3o=tmp16o+1|0;
								Lgeptoindexphi=tmp16[tmp16o]|0;
								Lgeptoindexphi=Lgeptoindexphi&255;
							}
							__ZNSs9push_backEc(tmp8,Lgeptoindexphi);
							break;
						}
					}
					Larg5[Marg5]=Larg5[Marg5]|4;
					L$p07=0;
					break a;
					case 0:
					if((tmp31|0)===3)break b;
					break;
					case 3:
					tmp33=tmp6.i1|0;
					Lgeptoindexphi=tmp7.i1|0;
					if((tmp33|0)===(-Lgeptoindexphi|0))break c;
					L$ppre=Larg0.a0;
					L$ppre38o=L$ppre.a3o;
					L$ppre38=L$ppre.a3;
					L$ppre40=L$ppre.a4;
					tmp13=L$ppre38===L$ppre40&&L$ppre38o===0?1:0;
					if((tmp33|0)!==0)if((Lgeptoindexphi|0)!==0){
						if(tmp13){
							Lgeptoindexphi=L$ppre.a0.a10(L$ppre)|0;
							L$ppre=Larg0.a0;
							L$ppre38o=L$ppre.a3o;
							L$ppre38=L$ppre.a3;
							L$ppre40=L$ppre.a4;
						}else{
							Lgeptoindexphi=L$ppre38[L$ppre38o]|0;
							Lgeptoindexphi=Lgeptoindexphi&255;
						}
						tmp15=tmp6.a2;
						tmp33=L$ppre38===L$ppre40&&L$ppre38o===0?1:0;
						if((tmp15[0]&255)===(Lgeptoindexphi&255)){
							if(tmp33)L$ppre.a0.a11(L$ppre)|0;
							else{
								L$ppre.a3=L$ppre38;
								L$ppre.a3o=L$ppre38o+1|0;
							}
							Lgeptoindexphi=tmp6.i1|0;
							tmp19=(Lgeptoindexphi>>>0>1?tmp6:tmp19);
							break c;
						}
						if(tmp33){
							Lgeptoindexphi=L$ppre.a0.a10(L$ppre)|0;
						}else{
							Lgeptoindexphi=L$ppre38[L$ppre38o]|0;
							Lgeptoindexphi=Lgeptoindexphi&255;
						}
						tmp15=tmp7.a2;
						if((tmp15[0]&255)===(Lgeptoindexphi&255)){
							tmp15=Larg0.a0;
							tmp16o=tmp15.a3o;
							tmp16=tmp15.a3;
							tmp17=tmp15.a4;
							if(tmp16===tmp17&&tmp16o===0)tmp15.a0.a11(tmp15)|0;
							else{
								tmp15.a3=tmp16;
								tmp15.a3o=tmp16o+1|0;
							}
							Larg6[Marg6]=1;
							Lgeptoindexphi=tmp7.i1|0;
							tmp19=(Lgeptoindexphi>>>0>1?tmp7:tmp19);
							break c;
						}
						Larg5[Marg5]=Larg5[Marg5]|4;
						L$p07=0;
						break a;
					}
					if(tmp13){
						Lgeptoindexphi=L$ppre.a0.a10(L$ppre)|0;
					}else{
						Lgeptoindexphi=L$ppre38[L$ppre38o]|0;
						Lgeptoindexphi=Lgeptoindexphi&255;
					}
					if((tmp33|0)===0){
						tmp15=tmp7.a2;
						if((tmp15[0]&255)!==(Lgeptoindexphi&255))break c;
						tmp15=Larg0.a0;
						tmp16o=tmp15.a3o;
						tmp16=tmp15.a3;
						tmp17=tmp15.a4;
						if(tmp16===tmp17&&tmp16o===0)tmp15.a0.a11(tmp15)|0;
						else{
							tmp15.a3=tmp16;
							tmp15.a3o=tmp16o+1|0;
						}
						Larg6[Marg6]=1;
						Lgeptoindexphi=tmp7.i1|0;
						tmp19=(Lgeptoindexphi>>>0>1?tmp7:tmp19);
						break c;
					}
					tmp15=tmp6.a2;
					if((tmp15[0]&255)===(Lgeptoindexphi&255)){
						tmp15=Larg0.a0;
						tmp16o=tmp15.a3o;
						tmp16=tmp15.a3;
						tmp17=tmp15.a4;
						if(tmp16===tmp17&&tmp16o===0)tmp15.a0.a11(tmp15)|0;
						else{
							tmp15.a3=tmp16;
							tmp15.a3o=tmp16o+1|0;
						}
						Lgeptoindexphi=tmp6.i1|0;
						tmp19=(Lgeptoindexphi>>>0>1?tmp6:tmp19);
						break c;
					}
					Larg6[Marg6]=1;
					break c;
					case 2:
					d:{
						e:{
							if(tmp31>>>0>=2)if(tmp19===null){
								if((tmp31|0)===2){
									Lgeptoindexphi=tmp3[3]|0;
									Lgeptoindexphi=Lgeptoindexphi!==0?1:0;
								}else{
									Lgeptoindexphi=0;
								}
								if((Larg4&512|0)!==0)break e;
								if(Lgeptoindexphi)break e;
								tmp19=null;
								break c;
							}
							if((tmp31|0)===0){
								L$ppre38o=0;
								L$ppre38=tmp29;
								break d;
							}
						}
						if((tmp3[tmp31-1|0]|0)<2){
							Lgeptoindexphi=tmp5.i1|0;
							if((Lgeptoindexphi|0)!==0){
								L$ppre38o=0;
								L$ppre38=tmp29;
								while(1){
									tmp33=L$ppre38[L$ppre38o]|0;
									if(tmp33<<24>-16777216){
										tmp15=Larg7.a2;
										if((tmp15[1+(tmp33<<24>>24)|0]&8)!==0){
											if(L$ppre38!==tmp29||(L$ppre38o+1|0)!==(0+Lgeptoindexphi|0)){
												L$ppre38o=L$ppre38o+1|0;
												L$ppre38=L$ppre38;
												continue;
											}
											L$ppre38o=0+Lgeptoindexphi|0;
											L$ppre38=tmp29;
										}
									}
									break;
								}
							}else{
								L$ppre38o=0;
								L$ppre38=tmp29;
							}
							Lgeptoindexphi=(L$ppre38o)-tmp10|0;
							tmp33=tmp8.i1|0;
							if(Lgeptoindexphi>>>0>tmp33>>>0){
								L$ppre38o=0;
								L$ppre38=tmp29;
							}else{
								tmp15=tmp8.a2;
								if((Lgeptoindexphi|0)!==0){
									tmp16o=0;
									tmp16=tmp29;
									Lgeptoindexphi=tmp33+(-Lgeptoindexphi|0)|0;
									while(1){
										if((tmp15[Lgeptoindexphi]&255)===(tmp16[tmp16o]&255)){
											Lgeptoindexphi=Lgeptoindexphi+1|0;
											if(tmp15!==tmp15||(0+Lgeptoindexphi|0)!==(0+tmp33|0)){
												tmp16o=tmp16o+1|0;
												tmp16=tmp16;
												continue;
											}
										}else{
											L$ppre38o=0;
											L$ppre38=tmp29;
										}
										break;
									}
								}
							}
						}else{
							L$ppre38o=0;
							L$ppre38=tmp29;
						}
					}
					Lgeptoindexphi=tmp5.i1|0;
					d:if(L$ppre38!==tmp29||L$ppre38o!==(0+Lgeptoindexphi|0)){
						L$ppre40=tmp23;
						while(1){
							tmp15=Larg0.a0;
							if(tmp15!==null){
								tmp16o=tmp15.a3o;
								tmp16=tmp15.a3;
								tmp17=tmp15.a4;
								if(tmp16===tmp17&&tmp16o===0)if((tmp15.a0.a10(tmp15)|0|0)===-1){
									Larg0.a0=null;
									tmp15=null;
								}else{
									tmp15=Larg0.a0;
								}
							}else{
								tmp15=null;
							}
							tmp33=tmp15===null?1:0;
							e:{
								f:if(L$ppre40!==null){
									tmp15o=L$ppre40.a3o;
									tmp15=L$ppre40.a3;
									tmp16=L$ppre40.a4;
									if(tmp15===tmp16&&tmp15o===0)if((L$ppre40.a0.a10(L$ppre40)|0|0)===-1){
										Larg1.a0=null;
										tmp23=null;
										break f;
									}
									if(tmp33)break e;
									break d;
								}
								if(tmp33)break d;
								L$ppre40=null;
							}
							tmp15=Larg0.a0;
							tmp16o=tmp15.a3o;
							tmp16=tmp15.a3;
							tmp17=tmp15.a4;
							if(tmp16===tmp17&&tmp16o===0){
								tmp33=tmp15.a0.a10(tmp15)|0;
							}else{
								tmp33=tmp16[tmp16o]|0;
								tmp33=tmp33&255;
							}
							if((L$ppre38[L$ppre38o]&255)===(tmp33&255)){
								tmp15=Larg0.a0;
								tmp16o=tmp15.a3o;
								tmp16=tmp15.a3;
								tmp17=tmp15.a4;
								if(tmp16===tmp17&&tmp16o===0)tmp15.a0.a11(tmp15)|0;
								else{
									tmp15.a3=tmp16;
									tmp15.a3o=tmp16o+1|0;
								}
								if(L$ppre38!==tmp29||(L$ppre38o+1|0)!==(0+Lgeptoindexphi|0)){
									L$ppre38o=L$ppre38o+1|0;
									L$ppre38=L$ppre38;
									continue;
								}
								L$ppre38o=0+Lgeptoindexphi|0;
								L$ppre38=tmp29;
							}
							break;
						}
					}
					if(L$ppre38===tmp29&&L$ppre38o===(0+Lgeptoindexphi|0))break c;
					if(L$pnot)break c;
					Larg5[Marg5]=Larg5[Marg5]|4;
					L$p07=0;
					break a;
					case 4:
					L$ppre40=tmp23;
					Lgeptoindexphi=0;
					while(1){
						tmp15=Larg0.a0;
						if(tmp15!==null){
							tmp16o=tmp15.a3o;
							tmp16=tmp15.a3;
							tmp17=tmp15.a4;
							if(tmp16===tmp17&&tmp16o===0)if((tmp15.a0.a10(tmp15)|0|0)===-1){
								Larg0.a0=null;
								tmp15=null;
							}else{
								tmp15=Larg0.a0;
							}
						}else{
							tmp15=null;
						}
						tmp33=tmp15===null?1:0;
						d:{
							e:if(L$ppre40!==null){
								tmp15o=L$ppre40.a3o;
								tmp15=L$ppre40.a3;
								tmp16=L$ppre40.a4;
								if(tmp15===tmp16&&tmp15o===0)if((L$ppre40.a0.a10(L$ppre40)|0|0)===-1){
									Larg1.a0=null;
									tmp23=null;
									break e;
								}
								if(tmp33)break d;
								break;
							}
							if(tmp33)break;
							L$ppre40=null;
						}
						tmp15=Larg0.a0;
						tmp16o=tmp15.a3o;
						tmp16=tmp15.a3;
						tmp17=tmp15.a4;
						if(tmp16===tmp17&&tmp16o===0){
							tmp33=tmp15.a0.a10(tmp15)|0;
						}else{
							tmp33=tmp16[tmp16o]|0;
							tmp33=tmp33&255;
						}
						d:{
							if(tmp33<<24>-16777216){
								tmp15=Larg7.a2;
								if((tmp15[1+(tmp33<<24>>24)|0]&4)!==0){
									tmp15=Larg9[Marg9];
									tmp16=tmp14[0];
									if(tmp15.d===tmp16.d&&tmp15.o===tmp16.o){
										__ZSt19__double_or_nothingIcEvRSt10unique_ptrIT_PFvPvEERPS1_S8_(Larg8,Larg9,Marg9,tmp14,0);
										tmp15=Larg9[Marg9];
									}
									tmp15o=tmp15.o;
									tmp15=tmp15.d;
									Larg9[Marg9]={d:tmp15,o:tmp15o+1|0};
									tmp15[tmp15o]=tmp33;
									Lgeptoindexphi=Lgeptoindexphi+1|0;
									break d;
								}
							}
							if((L$p06&255)!==(tmp33&255))break;
							if((Lgeptoindexphi|0)===0)break;
							if(!(tmp11))break;
							tmp15=LmergedArray[1];
							if(tmp18===tmp15.d&&tmp18o===tmp15.o){
								__ZSt19__double_or_nothingIjEvRSt10unique_ptrIT_PFvPvEERPS1_S8_(tmp1,LmergedArray,0,LmergedArray,1);
								tmp18=LmergedArray[0];
								tmp18o=tmp18.o;
								tmp18=tmp18.d;
							}
							LmergedArray[0]={d:tmp18,o:tmp18o+1|0};
							tmp18[tmp18o]=Lgeptoindexphi;
							tmp18o=tmp18o+1|0;
							tmp18=tmp18;
							Lgeptoindexphi=0;
						}
						tmp15=Larg0.a0;
						tmp16o=tmp15.a3o;
						tmp16=tmp15.a3;
						tmp17=tmp15.a4;
						if(tmp16===tmp17&&tmp16o===0)tmp15.a0.a11(tmp15)|0;
						else{
							tmp15.a3=tmp16;
							tmp15.a3o=tmp16o+1|0;
						}
						continue;
					}
					tmp15=tmp1.a0;
					tmp33=tmp15!==tmp18||0!==tmp18o?1:0;
					if((Lgeptoindexphi|0)!==0)if(tmp33){
						tmp15=LmergedArray[1];
						if(tmp18===tmp15.d&&tmp18o===tmp15.o){
							__ZSt19__double_or_nothingIjEvRSt10unique_ptrIT_PFvPvEERPS1_S8_(tmp1,LmergedArray,0,LmergedArray,1);
							tmp18=LmergedArray[0];
							tmp18o=tmp18.o;
							tmp18=tmp18.d;
						}
						LmergedArray[0]={d:tmp18,o:tmp18o+1|0};
						tmp18[tmp18o]=Lgeptoindexphi;
						tmp18o=tmp18o+1|0;
						tmp18=tmp18;
					}
					d:{
						if((L$p0|0)>0){
							tmp15=Larg0.a0;
							if(tmp15!==null){
								tmp16o=tmp15.a3o;
								tmp16=tmp15.a3;
								tmp17=tmp15.a4;
								if(tmp16===tmp17&&tmp16o===0)if((tmp15.a0.a10(tmp15)|0|0)===-1){
									Larg0.a0=null;
									tmp15=null;
								}else{
									tmp15=Larg0.a0;
								}
							}else{
								tmp15=null;
							}
							Lgeptoindexphi=tmp15===null?1:0;
							e:{
								f:if(tmp23!==null){
									tmp15o=tmp23.a3o;
									tmp15=tmp23.a3;
									tmp16=tmp23.a4;
									if(tmp15===tmp16&&tmp15o===0)if((tmp23.a0.a10(tmp23)|0|0)===-1){
										Larg1.a0=null;
										break f;
									}
									if(Lgeptoindexphi)break e;
									break d;
								}
								if(Lgeptoindexphi)break d;
								tmp23=null;
							}
							tmp15=Larg0.a0;
							tmp16o=tmp15.a3o;
							tmp16=tmp15.a3;
							tmp17=tmp15.a4;
							if(tmp16===tmp17&&tmp16o===0){
								Lgeptoindexphi=tmp15.a0.a10(tmp15)|0;
							}else{
								Lgeptoindexphi=tmp16[tmp16o]|0;
								Lgeptoindexphi=Lgeptoindexphi&255;
							}
							if((L$p07&255)!==(Lgeptoindexphi&255))break d;
							tmp15=Larg0.a0;
							tmp16o=tmp15.a3o;
							tmp16=tmp15.a3;
							tmp17=tmp15.a4;
							if(tmp16===tmp17&&tmp16o===0)tmp15.a0.a11(tmp15)|0;
							else{
								tmp15.a3=tmp16;
								tmp15.a3o=tmp16o+1|0;
							}
							L$ppre40=tmp23;
							while(1){
								tmp15=Larg0.a0;
								if(tmp15!==null){
									tmp16o=tmp15.a3o;
									tmp16=tmp15.a3;
									tmp17=tmp15.a4;
									if(tmp16===tmp17&&tmp16o===0)if((tmp15.a0.a10(tmp15)|0|0)===-1){
										Larg0.a0=null;
										tmp15=null;
									}else{
										tmp15=Larg0.a0;
									}
								}else{
									tmp15=null;
								}
								Lgeptoindexphi=tmp15===null?1:0;
								e:{
									f:if(L$ppre40!==null){
										tmp15o=L$ppre40.a3o;
										tmp15=L$ppre40.a3;
										tmp16=L$ppre40.a4;
										if(tmp15===tmp16&&tmp15o===0)if((L$ppre40.a0.a10(L$ppre40)|0|0)===-1){
											Larg1.a0=null;
											tmp23=null;
											break f;
										}
										if(Lgeptoindexphi)break e;
										break d;
									}
									if(Lgeptoindexphi)break d;
									L$ppre40=null;
								}
								tmp15=Larg0.a0;
								tmp16o=tmp15.a3o;
								tmp16=tmp15.a3;
								tmp17=tmp15.a4;
								if(tmp16===tmp17&&tmp16o===0){
									Lgeptoindexphi=tmp15.a0.a10(tmp15)|0;
								}else{
									Lgeptoindexphi=tmp16[tmp16o]|0;
									Lgeptoindexphi=Lgeptoindexphi&255;
								}
								if(Lgeptoindexphi<<24<=-16777216)break d;
								tmp15=Larg7.a2;
								if((tmp15[1+(Lgeptoindexphi<<24>>24)|0]&4)===0)break d;
								tmp15=Larg9[Marg9];
								tmp16=tmp14[0];
								if(tmp15.d===tmp16.d&&tmp15.o===tmp16.o)__ZSt19__double_or_nothingIcEvRSt10unique_ptrIT_PFvPvEERPS1_S8_(Larg8,Larg9,Marg9,tmp14,0);
								tmp15=Larg0.a0;
								tmp16o=tmp15.a3o;
								tmp16=tmp15.a3;
								tmp17=tmp15.a4;
								if(tmp16===tmp17&&tmp16o===0){
									Lgeptoindexphi=tmp15.a0.a10(tmp15)|0;
								}else{
									Lgeptoindexphi=tmp16[tmp16o]|0;
									Lgeptoindexphi=Lgeptoindexphi&255;
								}
								tmp15=Larg9[Marg9];
								Larg9[Marg9]={d:tmp15.d,o:tmp15.o+1|0};
								tmp15.d[tmp15.o]=Lgeptoindexphi;
								tmp15=Larg0.a0;
								tmp16o=tmp15.a3o;
								tmp16=tmp15.a3;
								tmp17=tmp15.a4;
								if(tmp16===tmp17&&tmp16o===0)tmp15.a0.a11(tmp15)|0;
								else{
									tmp15.a3=tmp16;
									tmp15.a3o=tmp16o+1|0;
								}
								if((L$p0|0)>1){
									L$p0=L$p0-1|0;
									continue;
								}
								break;
							}
							L$p0=0;
						}
						tmp15=Larg9[Marg9];
						tmp16o=Larg8.a0o;
						tmp16=Larg8.a0;
						if(tmp15.d!==tmp16||tmp15.o!==tmp16o)break c;
					}
					Larg5[Marg5]=Larg5[Marg5]|4;
					L$p07=0;
					break a;
					default:
					break c;
				}
				L$ppre40=tmp23;
				while(1){
					tmp15=Larg0.a0;
					if(tmp15!==null){
						tmp16o=tmp15.a3o;
						tmp16=tmp15.a3;
						tmp17=tmp15.a4;
						if(tmp16===tmp17&&tmp16o===0)if((tmp15.a0.a10(tmp15)|0|0)===-1){
							Larg0.a0=null;
							tmp15=null;
						}else{
							tmp15=Larg0.a0;
						}
					}else{
						tmp15=null;
					}
					Lgeptoindexphi=tmp15===null?1:0;
					d:{
						e:if(L$ppre40!==null){
							tmp15o=L$ppre40.a3o;
							tmp15=L$ppre40.a3;
							tmp16=L$ppre40.a4;
							if(tmp15===tmp16&&tmp15o===0)if((L$ppre40.a0.a10(L$ppre40)|0|0)===-1){
								Larg1.a0=null;
								tmp23=null;
								break e;
							}
							if(Lgeptoindexphi)break d;
							break c;
						}
						if(Lgeptoindexphi)break c;
						L$ppre40=null;
					}
					tmp15=Larg0.a0;
					tmp16o=tmp15.a3o;
					tmp16=tmp15.a3;
					tmp17=tmp15.a4;
					if(tmp16===tmp17&&tmp16o===0){
						Lgeptoindexphi=tmp15.a0.a10(tmp15)|0;
					}else{
						Lgeptoindexphi=tmp16[tmp16o]|0;
						Lgeptoindexphi=Lgeptoindexphi&255;
					}
					if(Lgeptoindexphi<<24>-16777216){
						tmp17=Larg7.a2;
						if((tmp17[1+(Lgeptoindexphi<<24>>24)|0]&8)!==0){
							tmp15=Larg0.a0;
							tmp16o=tmp15.a3o;
							tmp16=tmp15.a3;
							tmp17=tmp15.a4;
							if(tmp16===tmp17&&tmp16o===0){
								Lgeptoindexphi=tmp15.a0.a11(tmp15)|0;
							}else{
								tmp15.a3=tmp16;
								tmp15.a3o=tmp16o+1|0;
								Lgeptoindexphi=tmp16[tmp16o]|0;
								Lgeptoindexphi=Lgeptoindexphi&255;
							}
							__ZNSs9push_backEc(tmp8,Lgeptoindexphi);
							continue;
						}
					}
					break;
				}
			}
			tmp31=tmp31+1|0;
			if(tmp31>>>0<4)continue b;
			break;
		}
		b:if(tmp19!==null)if(tmp19.i1>>>0>1){
			L$p07=1;
			while(1){
				tmp14=Larg0.a0;
				if(tmp14!==null){
					tmp15o=tmp14.a3o;
					tmp15=tmp14.a3;
					tmp16=tmp14.a4;
					if(tmp15===tmp16&&tmp15o===0)if((tmp14.a0.a10(tmp14)|0|0)===-1){
						Larg0.a0=null;
						tmp14=null;
					}else{
						tmp14=Larg0.a0;
					}
				}else{
					tmp14=null;
				}
				L$p06=tmp14===null?1:0;
				c:{
					d:if(tmp23!==null){
						tmp14o=tmp23.a3o;
						tmp14=tmp23.a3;
						tmp15=tmp23.a4;
						if(tmp14===tmp15&&tmp14o===0)if((tmp23.a0.a10(tmp23)|0|0)===-1){
							Larg1.a0=null;
							break d;
						}
						if(L$p06)break c;
						break;
					}
					if(L$p06)break;
					tmp23=null;
				}
				tmp14=Larg0.a0;
				tmp15o=tmp14.a3o;
				tmp15=tmp14.a3;
				tmp16=tmp14.a4;
				if(tmp15===tmp16&&tmp15o===0){
					L$p06=tmp14.a0.a10(tmp14)|0;
				}else{
					L$p06=tmp15[tmp15o]|0;
					L$p06=L$p06&255;
				}
				tmp15=tmp19.a2;
				if((tmp15[L$p07]&255)===(L$p06&255)){
					tmp14=Larg0.a0;
					tmp15o=tmp14.a3o;
					tmp15=tmp14.a3;
					tmp16=tmp14.a4;
					if(tmp15===tmp16&&tmp15o===0)tmp14.a0.a11(tmp14)|0;
					else{
						tmp14.a3=tmp15;
						tmp14.a3o=tmp15o+1|0;
					}
					L$p07=L$p07+1|0;
					if(L$p07>>>0<tmp19.i1>>>0)continue;
					break b;
				}
				break;
			}
			Larg5[Marg5]=Larg5[Marg5]|4;
			L$p07=0;
			break a;
		}
		tmp14=tmp1.a0;
		if(tmp14===tmp18&&0===tmp18o){
			L$p07=1;
		}else if((tmp28|0)!==0){
			tmp28=(tmp18o+ -1|0)>0?1:0;
			b:{
				if(tmp28){
					L$p06=0;
					L$p07=0;
					while(1){
						L$p0=tmp14[L$p06]|0;
						tmp14[L$p06]=tmp18[(tmp18o+ -1|0)+L$p07|0]|0;
						tmp18[(tmp18o+ -1|0)+L$p07|0]=L$p0;
						L$p06=L$p06+1|0;
						L$p07=L$p07-1|0;
						if((0+L$p06|0)<((tmp18o+ -1|0)+L$p07|0))continue;
						break;
					}
					L$p07=tmp25[0]|0;
					L$p06=L$p07<<24>0&&(L$p07&255)!==127?1:0;
					if(tmp28){
						tmp28=(0+(tmp4.i1|0)|0);
						tmp25o=0;
						tmp25=tmp25;
						L$p0=0;
						while(1){
							if(L$p06)if((tmp14[L$p0]|0)!==(L$p07<<24>>24|0))break b;
							if((tmp28-(tmp25o)|0)>1){
								L$p07=tmp25[tmp25o+1|0]|0;
								tmp25o=tmp25o+1|0;
								tmp25=tmp25;
							}
							L$p0=L$p0+1|0;
							L$p06=L$p07<<24>0&&(L$p07&255)!==127?1:0;
							if((0+L$p0|0)<(tmp18o+ -1|0))continue;
							break;
						}
					}
					if(!(L$p06)){
						L$p07=1;
						break a;
					}
				}else{
					L$p07=tmp25[0]|0;
					if(L$p07<<24<=0){
						L$p07=1;
						break a;
					}
					if((L$p07&255)===127){
						L$p07=1;
						break a;
					}
				}
				if((tmp18[tmp18o+ -1|0]|0)-1>>>0<L$p07<<24>>24>>>0){
					L$p07=1;
					break a;
				}
			}
			Larg5[Marg5]=Larg5[Marg5]|4;
			L$p07=0;
		}else{
			L$p07=1;
		}
	}
	L$poptgepsqueezed371=tmp1.a0;
	tmp1.a0=nullArray;
	if(L$poptgepsqueezed371!==nullArray||0!==0)tmp1.a1(L$poptgepsqueezed371,0);
	return L$p07|0;
}
function __ZSt19__double_or_nothingIcEvRSt10unique_ptrIT_PFvPvEERPS1_S8_(Larg0,Larg1,Marg1,Larg2,Marg2){
	var tmp0=null,tmp0o=0,tmp1=0,L$ppre3=null,L$ppre3o=0,L$ppre=null,L$ppreo=0,tmp4=0,tmp5=0;
	L$ppre3=Larg0.a1;
	L$ppre=Larg2[Marg2];
	tmp0o=Larg0.a0o;
	tmp0=Larg0.a0;
	tmp4=(tmp0o);
	tmp5=(L$ppre.o)-tmp4|0;
	if(tmp5>>>0<2147483647){
		tmp5<<=1;
		tmp1=(tmp5|0)!==0?tmp5|0:1|0;
	}else{
		tmp1=-1;
	}
	L$ppre=Larg1[Marg1];
	tmp4=(L$ppre.o)-tmp4|0;
	tmp5=L$ppre3!==__ZSt12__do_nothingPv?1:0;
	a:{
		b:{
			if(tmp0!==nullArray||tmp0o!==0)if(!(tmp5^1)){
				L$ppre3=(function(){var __old__=tmp0;
					var __ret__=new Uint8Array(tmp1/1|0);
					__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));
					return __ret__;})();
				break b;
			}
			L$ppre3=new Uint8Array(tmp1/1|0);
			if(!(tmp5)){
				L$ppreo=Larg0.a0o;
				L$ppre=Larg0.a0;
				Larg0.a0=L$ppre3;
				Larg0.a0o=0;
				if(L$ppre!==nullArray||L$ppreo!==0){
					Larg0.a1(L$ppre,L$ppreo);
					L$ppre3o=Larg0.a0o;
					L$ppre3=Larg0.a0;
					break a;
				}
				L$ppre3o=0;
				L$ppre3=L$ppre3;
				break a;
			}
		}
		Larg0.a0=L$ppre3;
		Larg0.a0o=0;
		L$ppre3o=0;
		L$ppre3=L$ppre3;
	}
	Larg0.a1=___genericjs__free;
	Larg1[Marg1]={d:L$ppre3,o:L$ppre3o+tmp4|0};
	L$ppre3o=Larg0.a0o;
	L$ppre3=Larg0.a0;
	Larg2[Marg2]={d:L$ppre3,o:L$ppre3o+tmp1|0};
}
function __ZNKSt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_bRSt8ios_baseRjRe(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6,Marg6,Larg7,Marg7){
	var LmergedArray=null,tmp1=null,tmp2=null,tmp3=0,tmp4=0,tmp5=null,tmp5o=0,tmp6=0,tmp7=null,tmp7o=0,tmp8=null,tmp8o=0,tmp9=null,tmp9o=0,Lgeptoindexphi=0;
	LmergedArray=new Uint8Array(211);
	tmp1={a0:nullArray,a0o:0,a1:null};
	tmp1.a0=LmergedArray;
	tmp1.a0o=0;
	tmp1.a1=__ZSt12__do_nothingPv;
	tmp5=[nullObj];
	tmp2=Larg5.a7.a0;
	tmp2.i1=(tmp2.i1|0)+1|0;
	if((__ZNSt5ctypeIcE2idE.i0&255)!==0){
		tmp6=__ZNSt5ctypeIcE2idE.i1|0;
	}else{
		tmp6=(__ZNSt6locale2id9__next_idE|0)+1|0;
		__ZNSt6locale2id9__next_idE=tmp6;
		__ZNSt5ctypeIcE2idE.i1=tmp6;
		__ZNSt5ctypeIcE2idE.i0=1;
	}
	tmp7=tmp2.a2.a0;
	tmp7=tmp7[tmp6-1|0];
	LmergedArray[100]=0;
	tmp6=Larg5.i1|0;
	tmp8={a0:null};
	tmp8.a0=Larg3.a0;
	tmp6=__ZNSt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE8__do_getERS3_S3_bRKSt6localejRjRbRKSt5ctypeIcERSt10unique_ptrIcPFvPvEERPcSL_(Larg2,tmp8,Larg4,tmp2,tmp6,Larg6,Marg6,LmergedArray,100,tmp7,tmp1,tmp5,0,LmergedArray,0+100|0)|0;
	if(tmp6){
		tmp7.a0.a9(tmp7,__ZZNKSt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_bRSt8ios_baseRjReE5__src,0,__ZZNKSt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_bRSt8ios_baseRjReE5__src,10,LmergedArray,101);
		tmp8=tmp5[0];
		tmp9o=tmp1.a0o;
		tmp9=tmp1.a0;
		tmp6=(tmp9o);
		Lgeptoindexphi=(tmp8.o);
		if((Lgeptoindexphi-tmp6|0)>98){
			tmp7=new Uint8Array(((Lgeptoindexphi+2|0)-tmp6|0)/1|0);
			tmp7o=0;
			tmp7=tmp7;
		}else{
			tmp7o=111;
			tmp7=LmergedArray;
		}
		if((LmergedArray[100]&255)!==0){
			tmp7[tmp7o]=45;
			tmp7o=tmp7o+1|0;
			tmp7=tmp7;
		}
		if(tmp9o<tmp8.o){
			tmp6=(101);
			Lgeptoindexphi=0;
			while(1){
				tmp3=tmp9[tmp9o+Lgeptoindexphi|0]|0;
				if((LmergedArray[101]&255)===(tmp3&255)){
					tmp8o=101;
					tmp8=LmergedArray;
				}else if((LmergedArray[102]|0)===(tmp3&255)){
					tmp8o=101+1|0;
					tmp8=LmergedArray;
				}else if((LmergedArray[103]|0)===(tmp3&255)){
					tmp8o=101+2|0;
					tmp8=LmergedArray;
				}else if((LmergedArray[104]|0)===(tmp3&255)){
					tmp8o=101+3|0;
					tmp8=LmergedArray;
				}else if((LmergedArray[105]|0)===(tmp3&255)){
					tmp8o=101+4|0;
					tmp8=LmergedArray;
				}else if((LmergedArray[106]|0)===(tmp3&255)){
					tmp8o=101+5|0;
					tmp8=LmergedArray;
				}else if((LmergedArray[107]|0)===(tmp3&255)){
					tmp8o=101+6|0;
					tmp8=LmergedArray;
				}else if((LmergedArray[108]|0)===(tmp3&255)){
					tmp8o=101+7|0;
					tmp8=LmergedArray;
				}else if((LmergedArray[109]|0)===(tmp3&255)){
					tmp8o=101+8|0;
					tmp8=LmergedArray;
				}else{
					tmp4=LmergedArray[110]|0;
					tmp8o=tmp4===(tmp3&255)?101+9|0:101+10|0;
					tmp8=(tmp4===(tmp3&255)?LmergedArray:LmergedArray);
				}
				tmp7[tmp7o]=__ZZNKSt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_bRSt8ios_baseRjReE5__src[(tmp8o)-tmp6|0]|0;
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				tmp8=tmp5[0];
				if((tmp9o+Lgeptoindexphi|0)<tmp8.o){
					tmp7o=tmp7o+1|0;
					tmp7=tmp7;
					continue;
				}
				break;
			}
			tmp7o=tmp7o+1|0;
			tmp7=tmp7;
		}
		tmp7[tmp7o]=0;
		_sscanf(LmergedArray,111,nullObj,{d:Larg7,o:Marg7});
	}
	tmp7=Larg2.a0;
	if(tmp7!==null){
		tmp8o=tmp7.a3o;
		tmp8=tmp7.a3;
		tmp9=tmp7.a4;
		if(tmp8===tmp9&&tmp8o===0)if((tmp7.a0.a10(tmp7)|0|0)===-1){
			Larg2.a0=null;
			tmp7=null;
		}else{
			tmp7=Larg2.a0;
		}
	}else{
		tmp7=null;
	}
	tmp8=Larg3.a0;
	tmp6=tmp7===null?1:0;
	a:{
		b:{
			c:if(tmp8!==null){
				tmp7o=tmp8.a3o;
				tmp7=tmp8.a3;
				tmp9=tmp8.a4;
				if(tmp7===tmp9&&tmp7o===0)if((tmp8.a0.a10(tmp8)|0|0)===-1){
					Larg3.a0=null;
					break c;
				}
				if(tmp6)break a;
				break b;
			}
			if(!(tmp6))break a;
		}
		Larg6[Marg6]=Larg6[Marg6]|2;
	}
	Larg0.a0=Larg2.a0;
	tmp6=tmp2.i1|0;
	tmp2.i1=tmp6-1|0;
	if((tmp6|0)===0)tmp2.a0.a3(tmp2);
	tmp5o=tmp1.a0o;
	tmp5=tmp1.a0;
	tmp1.a0=nullArray;
	tmp1.a0o=0;
	if(tmp5!==nullArray||tmp5o!==0)tmp1.a1(tmp5,tmp5o);
}
function __ZNSt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEED0Ev(Larg0){
}
function __ZNSt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEED2Ev(Larg0){
}
function __ZNKSt10moneypunctIwLb1EE13do_neg_formatEv(Larg0,Marg0,Larg1){
	Larg0[Marg0]=2;
	Larg0[Marg0+1|0]=3;
	Larg0[Marg0+2|0]=0;
	Larg0[Marg0+3|0]=4;
}
function __ZNKSt10moneypunctIwLb1EE13do_pos_formatEv(Larg0,Marg0,Larg1){
	Larg0[Marg0]=2;
	Larg0[Marg0+1|0]=3;
	Larg0[Marg0+2|0]=0;
	Larg0[Marg0+3|0]=4;
}
function __ZNKSt10moneypunctIwLb1EE14do_frac_digitsEv(Larg0){
	return 0|0;
}
function __ZNKSt10moneypunctIwLb1EE16do_negative_signEv(Larg0,Larg1){
	var tmp0=null;
	tmp0=new Int32Array(4);
	Larg0.a2=tmp0;
	Larg0.i0=5;
	Larg0.i1=1;
	tmp0[0]=45;
	tmp0[1]=0;
}
function __ZNKSt10moneypunctIwLb1EE16do_positive_signEv(Larg0,Larg1){
	Larg0.i0=0;
	Larg0.i1=0;
	Larg0.a2=nullArray;
}
function __ZNKSt10moneypunctIwLb1EE14do_curr_symbolEv(Larg0,Larg1){
	Larg0.i0=0;
	Larg0.i1=0;
	Larg0.a2=nullArray;
}
function __ZNKSt10moneypunctIwLb1EE11do_groupingEv(Larg0,Larg1){
	Larg0.i0=0;
	Larg0.i1=0;
	Larg0.a2=nullArray;
}
function __ZNKSt10moneypunctIwLb1EE16do_thousands_sepEv(Larg0){
	return 2147483647|0;
}
function __ZNKSt10moneypunctIwLb1EE16do_decimal_pointEv(Larg0){
	return 2147483647|0;
}
function __ZNSt10moneypunctIwLb1EED0Ev(Larg0){
}
function __ZNSt10moneypunctIwLb1EED2Ev(Larg0){
}
function __ZNKSt10moneypunctIwLb0EE13do_neg_formatEv(Larg0,Marg0,Larg1){
	Larg0[Marg0]=2;
	Larg0[Marg0+1|0]=3;
	Larg0[Marg0+2|0]=0;
	Larg0[Marg0+3|0]=4;
}
function __ZNKSt10moneypunctIwLb0EE13do_pos_formatEv(Larg0,Marg0,Larg1){
	Larg0[Marg0]=2;
	Larg0[Marg0+1|0]=3;
	Larg0[Marg0+2|0]=0;
	Larg0[Marg0+3|0]=4;
}
function __ZNKSt10moneypunctIwLb0EE14do_frac_digitsEv(Larg0){
	return 0|0;
}
function __ZNKSt10moneypunctIwLb0EE16do_negative_signEv(Larg0,Larg1){
	var tmp0=null;
	tmp0=new Int32Array(4);
	Larg0.a2=tmp0;
	Larg0.i0=5;
	Larg0.i1=1;
	tmp0[0]=45;
	tmp0[1]=0;
}
function __ZNKSt10moneypunctIwLb0EE16do_positive_signEv(Larg0,Larg1){
	Larg0.i0=0;
	Larg0.i1=0;
	Larg0.a2=nullArray;
}
function __ZNKSt10moneypunctIwLb0EE14do_curr_symbolEv(Larg0,Larg1){
	Larg0.i0=0;
	Larg0.i1=0;
	Larg0.a2=nullArray;
}
function __ZNKSt10moneypunctIwLb0EE11do_groupingEv(Larg0,Larg1){
	Larg0.i0=0;
	Larg0.i1=0;
	Larg0.a2=nullArray;
}
function __ZNKSt10moneypunctIwLb0EE16do_thousands_sepEv(Larg0){
	return 2147483647|0;
}
function __ZNKSt10moneypunctIwLb0EE16do_decimal_pointEv(Larg0){
	return 2147483647|0;
}
function __ZNSt10moneypunctIwLb0EED0Ev(Larg0){
}
function __ZNSt10moneypunctIwLb0EED2Ev(Larg0){
}
function __ZNKSt10moneypunctIcLb1EE13do_neg_formatEv(Larg0,Marg0,Larg1){
	Larg0[Marg0]=2;
	Larg0[Marg0+1|0]=3;
	Larg0[Marg0+2|0]=0;
	Larg0[Marg0+3|0]=4;
}
function __ZNKSt10moneypunctIcLb1EE13do_pos_formatEv(Larg0,Marg0,Larg1){
	Larg0[Marg0]=2;
	Larg0[Marg0+1|0]=3;
	Larg0[Marg0+2|0]=0;
	Larg0[Marg0+3|0]=4;
}
function __ZNKSt10moneypunctIcLb1EE14do_frac_digitsEv(Larg0){
	return 0|0;
}
function __ZNKSt10moneypunctIcLb1EE16do_negative_signEv(Larg0,Larg1){
	var tmp0=null;
	tmp0=new Uint8Array(16);
	Larg0.a2=tmp0;
	Larg0.i0=17;
	Larg0.i1=1;
	tmp0[0]=45;
	tmp0[1]=0;
}
function __ZNKSt10moneypunctIcLb1EE16do_positive_signEv(Larg0,Larg1){
	Larg0.i0=0;
	Larg0.i1=0;
	Larg0.a2=nullArray;
}
function __ZNKSt10moneypunctIcLb1EE14do_curr_symbolEv(Larg0,Larg1){
	Larg0.i0=0;
	Larg0.i1=0;
	Larg0.a2=nullArray;
}
function __ZNKSt10moneypunctIcLb1EE11do_groupingEv(Larg0,Larg1){
	Larg0.i0=0;
	Larg0.i1=0;
	Larg0.a2=nullArray;
}
function __ZNKSt10moneypunctIcLb1EE16do_thousands_sepEv(Larg0){
	return 127|0;
}
function __ZNKSt10moneypunctIcLb1EE16do_decimal_pointEv(Larg0){
	return 127|0;
}
function __ZNSt10moneypunctIcLb1EED0Ev(Larg0){
}
function __ZNSt10moneypunctIcLb1EED2Ev(Larg0){
}
function __ZNKSt10moneypunctIcLb0EE13do_neg_formatEv(Larg0,Marg0,Larg1){
	Larg0[Marg0]=2;
	Larg0[Marg0+1|0]=3;
	Larg0[Marg0+2|0]=0;
	Larg0[Marg0+3|0]=4;
}
function __ZNKSt10moneypunctIcLb0EE13do_pos_formatEv(Larg0,Marg0,Larg1){
	Larg0[Marg0]=2;
	Larg0[Marg0+1|0]=3;
	Larg0[Marg0+2|0]=0;
	Larg0[Marg0+3|0]=4;
}
function __ZNKSt10moneypunctIcLb0EE14do_frac_digitsEv(Larg0){
	return 0|0;
}
function __ZNKSt10moneypunctIcLb0EE16do_negative_signEv(Larg0,Larg1){
	var tmp0=null;
	tmp0=new Uint8Array(16);
	Larg0.a2=tmp0;
	Larg0.i0=17;
	Larg0.i1=1;
	tmp0[0]=45;
	tmp0[1]=0;
}
function __ZNKSt10moneypunctIcLb0EE16do_positive_signEv(Larg0,Larg1){
	Larg0.i0=0;
	Larg0.i1=0;
	Larg0.a2=nullArray;
}
function __ZNKSt10moneypunctIcLb0EE14do_curr_symbolEv(Larg0,Larg1){
	Larg0.i0=0;
	Larg0.i1=0;
	Larg0.a2=nullArray;
}
function __ZNKSt10moneypunctIcLb0EE11do_groupingEv(Larg0,Larg1){
	Larg0.i0=0;
	Larg0.i1=0;
	Larg0.a2=nullArray;
}
function __ZNKSt10moneypunctIcLb0EE16do_thousands_sepEv(Larg0){
	return 127|0;
}
function __ZNKSt10moneypunctIcLb0EE16do_decimal_pointEv(Larg0){
	return 127|0;
}
function __ZNSt10moneypunctIcLb0EED0Ev(Larg0){
}
function __ZNSt10moneypunctIcLb0EED2Ev(Larg0){
}
function __ZNKSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_RSt8ios_basewPKv(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5){
	var LmergedArray=null,tmp1=0,tmp2=null,tmp3=null,tmp3o=0,tmp4=null,tmp5=0,tmp6=null;
	LmergedArray=new Uint8Array(26);
	LmergedArray[0]=37;
	LmergedArray[1]=112;
	LmergedArray[2]=0;
	LmergedArray[3]=0;
	LmergedArray[4]=0;
	LmergedArray[5]=0;
	tmp1=__ZSt12__snprintf_lPcjPvPKcz(LmergedArray,6,20,nullObj,LmergedArray,0,{d:Larg5,o:Marg5})|0;
	tmp2=new Int32Array(37);
	a:{
		b:switch(Larg3.i1&176){
			case 16:
			tmp5=LmergedArray[6]|0;
			switch(tmp5&255){
				case 45:
				case 43:
				tmp3o=6+1|0;
				tmp3=LmergedArray;
				break a;
				default:
				if((tmp1|0)<=1)break b;
				if((tmp5&255)!==48)break b;
				switch(LmergedArray[7]|0){
					case 120:
					case 88:
					tmp3o=6+2|0;
					tmp3=LmergedArray;
					break a;
					default:
					break b;
				}
			}
			case 32:
			tmp3o=6+tmp1|0;
			tmp3=LmergedArray;
			break a;
			default:
		}
		tmp3o=6;
		tmp3=LmergedArray;
	}
	tmp4=Larg3.a7.a0;
	tmp5=tmp4.i1|0;
	tmp6=tmp4.a2.a0;
	tmp6=tmp6[(__ZNSt5ctypeIwE2idE$p1|0)-1|0];
	tmp4.i1=tmp5;
	if((tmp5|0)===-1)tmp4.a0.a3(tmp4);
	tmp6.a0.a13(tmp6,LmergedArray,6,LmergedArray,6+tmp1|0,tmp2,0);
	if(tmp3===LmergedArray&&tmp3o===(6+tmp1|0)){
		tmp3o=tmp1;
		tmp3=tmp2;
	}else{
		tmp5=((tmp3o)-(6)|0);
		tmp3=tmp2;
		tmp3o=tmp5;
	}
	tmp4={a0:null};
	tmp4.a0=Larg2.a0;
	__ZSt16__pad_and_outputIwSt11char_traitsIwEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(Larg0,tmp4,tmp2,0,tmp3,tmp3o,tmp2,tmp1,Larg3,Larg4);
}
function __ZSt12__snprintf_lPcjPvPKcz(Larg0,Marg0,Larg1,Larg2,Larg3,Marg3){
	var tmp0=null,tmp1=null,L$poptgep$poptgep2$poptgepsqueezed=null,tmp3=null,tmp3o=0,tmp4=0;
	tmp0=[nullObj];
	tmp0[0]={d:arguments,o:__ZSt12__snprintf_lPcjPvPKcz.length};
	tmp3=tmp0[0];
	tmp1=new constructor_struct$p_Z7__sFILE();
	if((Larg1|0)<0){
		_impure_data.i0=139;
		tmp4=-1;
	}else{
		tmp1.a0=Larg0;
		tmp1.a0o=Marg0;
		L$poptgep$poptgep2$poptgepsqueezed=tmp1.a4;
		L$poptgep$poptgep2$poptgepsqueezed.a0=Larg0;
		L$poptgep$poptgep2$poptgepsqueezed.a0o=Marg0;
		tmp4=(Larg1|0)!==0?Larg1-1|0:0|0;
		tmp1.i2=tmp4;
		L$poptgep$poptgep2$poptgepsqueezed.i1=tmp4;
		tmp1.i3=-65016;
		tmp4=__svfprintf_r(tmp1,Larg3,Marg3,tmp3.d,tmp3.o)|0;
		if((tmp4|0)<-1)_impure_data.i0=139;
		if((Larg1|0)!==0){
			tmp3o=tmp1.a0o;
			tmp3=tmp1.a0;
			tmp3[tmp3o]=0;
		}
	}
	tmp0[0]=null;
	return tmp4|0;
}
function __ZNKSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_RSt8ios_basewe(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var LmergedArray=null,tmp1=0,tmp2=null,tmp3=null,tmp4=null,tmp5=0,tmp6=null,tmp6o=0,tmp7=0,tmp8=null,tmp8o=0,tmp9=null,tmp9o=0,tmp10=null,tmp11=null;
	LmergedArray=new Uint8Array(38);
	LmergedArray[0]=37;
	LmergedArray[1]=0;
	LmergedArray[2]=0;
	LmergedArray[3]=0;
	LmergedArray[4]=0;
	LmergedArray[5]=0;
	LmergedArray[6]=0;
	LmergedArray[7]=0;
	tmp5=Larg3.i1|0;
	if((tmp5&2048|0)!==0){
		LmergedArray[1]=43;
		tmp6o=0+2|0;
		tmp6=LmergedArray;
	}else{
		tmp6o=0+1|0;
		tmp6=LmergedArray;
	}
	if((tmp5&1024|0)!==0){
		tmp6[tmp6o]=35;
		tmp6o=tmp6o+1|0;
		tmp6=tmp6;
	}
	tmp7=tmp5&260;
	if((tmp7|0)===260){
		tmp1=0;
	}else{
		tmp6[tmp6o]=46;
		tmp6[tmp6o+1|0]=42;
		tmp6o=tmp6o+2|0;
		tmp6=tmp6;
		tmp1=1;
	}
	tmp6[tmp6o]=76;
	a:{
		if(tmp7<<23<33554432){
			if((tmp7&511)===256){
				tmp5=(tmp5&16384|0)!==0?69|0:101|0;
				break a;
			}
		}else if((tmp7&511)===4){
			tmp5=(tmp5&16384|0)!==0?70|0:102|0;
			break a;
		}
		if((tmp7|0)===260){
			tmp5=(tmp5&16384|0)!==0?65|0:97|0;
		}else{
			tmp5=(tmp5&16384|0)!==0?71|0:103|0;
		}
	}
	tmp6[tmp6o+1|0]=tmp5;
	tmp6=[nullObj];
	tmp6[0]={d:LmergedArray,o:8};
	if(tmp1){
		tmp5=__ZSt12__snprintf_lPcjPvPKcz(LmergedArray,8,30,nullObj,LmergedArray,0,Larg3.i2|0,Larg5)|0;
	}else{
		tmp5=__ZSt12__snprintf_lPcjPvPKcz(LmergedArray,8,30,nullObj,LmergedArray,0,Larg5)|0;
	}
	if((tmp5|0)>29){
		if(tmp1){
			tmp5=__ZSt12__asprintf_lPPcPvPKcz(tmp6,0,nullObj,LmergedArray,0,Larg3.i2|0,Larg5)|0;
		}else{
			tmp5=__ZSt12__asprintf_lPPcPvPKcz(tmp6,0,nullObj,LmergedArray,0,Larg5)|0;
		}
		tmp8=tmp6[0];
		tmp8o=tmp8.o;
		tmp8=tmp8.d;
	}else{
		tmp8o=8;
		tmp8=LmergedArray;
	}
	a:{
		b:switch(Larg3.i1&176){
			case 16:
			tmp7=tmp8[tmp8o]|0;
			switch(tmp7&255){
				case 45:
				case 43:
				tmp9o=tmp8o+1|0;
				tmp9=tmp8;
				break a;
				default:
				if((tmp5|0)<=1)break b;
				if((tmp7&255)!==48)break b;
				switch(tmp8[tmp8o+1|0]|0){
					case 120:
					case 88:
					tmp9o=tmp8o+2|0;
					tmp9=tmp8;
					break a;
					default:
					break b;
				}
			}
			case 32:
			tmp9o=tmp8o+tmp5|0;
			tmp9=tmp8;
			break a;
			default:
		}
		tmp9o=tmp8o;
		tmp9=tmp8;
	}
	tmp2=new Int32Array(57);
	if(tmp8===LmergedArray&&tmp8o===8){
		tmp10=tmp2;
	}else{
		tmp10=new Int32Array((tmp5<<3)/4|0);
	}
	tmp3=[nullObj];
	tmp11=Larg3.a7.a0;
	tmp11.i1=(tmp11.i1|0)+1|0;
	__ZNSt9__num_putIwE23__widen_and_group_floatEPcS1_S1_PwRS2_S3_RKSt6locale(tmp8,tmp8o,tmp9,tmp9o,tmp8,tmp8o+tmp5|0,tmp10,tmp6,0,tmp3,0,tmp11);
	tmp5=tmp11.i1|0;
	tmp11.i1=tmp5-1|0;
	if((tmp5|0)===0)tmp11.a0.a3(tmp11);
	tmp8={a0:null};
	tmp9=tmp6[0];
	tmp11=tmp3[0];
	tmp4={a0:null};
	tmp4.a0=Larg2.a0;
	__ZSt16__pad_and_outputIwSt11char_traitsIwEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(tmp8,tmp4,tmp10,0,tmp9.d,tmp9.o,tmp11.d,tmp11.o,Larg3,Larg4);
	tmp9=tmp8.a0;
	Larg2.a0=tmp9;
	Larg0.a0=tmp9;
}
function __ZNSt9__num_putIwE23__widen_and_group_floatEPcS1_S1_PwRS2_S3_RKSt6locale(Larg0,Marg0,Larg1,Marg1,Larg2,Marg2,Larg3,Larg4,Marg4,Larg5,Marg5,L$p0$p0$pval){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=0,tmp4=null,Lgeptoindexphi=0,tmp6=null,tmp6o=0,Lgeptoindexphi1=0,Lgeptoindex18=0,Lgeptoindexphi21=0,tmp10=0,tmp11=0,tmp12=0;
	tmp4=L$p0$p0$pval.a2.a0;
	tmp0=tmp4[(__ZNSt5ctypeIwE2idE$p1|0)-1|0];
	tmp4=tmp4[(__ZNSt8numpunctIwE2idE$p1|0)-1|0];
	tmp1={i0:0,i1:0,a2:nullArray};
	tmp4.a0.a6(tmp1,tmp4);
	Larg5[Marg5]={d:Larg3,o:0};
	Lgeptoindexphi=Larg0[Marg0]|0;
	switch(Lgeptoindexphi&255){
		case 45:
		case 43:
		Lgeptoindexphi=tmp0.a0.a12(tmp0,Lgeptoindexphi)|0;
		tmp6=Larg5[Marg5];
		Larg5[Marg5]={d:tmp6.d,o:tmp6.o+1|0};
		tmp6.d[tmp6.o]=Lgeptoindexphi;
		tmp6o=tmp6.o+1|0;
		tmp6=tmp6.d;
		Lgeptoindexphi=1;
		break;
		default:
		Lgeptoindexphi=0;
		tmp6o=0;
		tmp6=Larg3;
	}
	tmp2=(Marg2);
	a:{
		if((tmp2-(Marg0+Lgeptoindexphi|0)|0)>1)if((Larg0[Marg0+Lgeptoindexphi|0]&255)===48){
			switch(Larg0[(Marg0+Lgeptoindexphi|0)+1|0]|0){
				case 120:
				case 88:
				Lgeptoindexphi1=tmp0.a0.a12(tmp0,48)|0;
				tmp6=Larg5[Marg5];
				Larg5[Marg5]={d:tmp6.d,o:tmp6.o+1|0};
				tmp6.d[tmp6.o]=Lgeptoindexphi1;
				Lgeptoindexphi1=tmp0.a0.a12(tmp0,Larg0[(Marg0+Lgeptoindexphi|0)+1|0]|0)|0;
				tmp6=Larg5[Marg5];
				Larg5[Marg5]={d:tmp6.d,o:tmp6.o+1|0};
				tmp6.d[tmp6.o]=Lgeptoindexphi1;
				Lgeptoindexphi=Lgeptoindexphi+2|0;
				if((Marg0+Lgeptoindexphi|0)>=Marg2){
					Lgeptoindexphi1=Lgeptoindexphi;
					tmp6o=tmp6.o+1|0;
					tmp6=tmp6.d;
					break a;
				}
				Lgeptoindexphi1=Lgeptoindexphi;
				while(1){
					if((__ctype_b[127+((Larg0[Marg0+Lgeptoindexphi1|0]<<24>>24)+1|0)|0]&68)!==0){
						Lgeptoindexphi1=Lgeptoindexphi1+1|0;
						if((Marg0+Lgeptoindexphi1|0)<Marg2)continue;
						tmp6o=tmp6.o+1|0;
						tmp6=tmp6.d;
						break a;
					}
					break;
				}
				tmp6o=tmp6.o+1|0;
				tmp6=tmp6.d;
				break a;
				default:
			}
		}
		if((Marg0+Lgeptoindexphi|0)<Marg2){
			Lgeptoindexphi1=Lgeptoindexphi;
			while(1){
				if((Larg0[Marg0+Lgeptoindexphi1|0]<<24>>24)-48>>>0<=9){
					Lgeptoindexphi1=Lgeptoindexphi1+1|0;
					if((Marg0+Lgeptoindexphi1|0)<Marg2)continue;
				}
				break;
			}
		}else{
			Lgeptoindexphi1=Lgeptoindexphi;
		}
	}
	if((tmp1.i1|0)!==0){
		if(Larg0!==Larg0||(Marg0+Lgeptoindexphi|0)!==(Marg0+Lgeptoindexphi1|0)){
			Lgeptoindex18=Lgeptoindexphi1-1|0;
			if((Marg0+Lgeptoindex18|0)>(Marg0+Lgeptoindexphi|0)){
				Lgeptoindexphi21=Lgeptoindexphi;
				while(1){
					tmp10=Larg0[Marg0+Lgeptoindexphi21|0]|0;
					Larg0[Marg0+Lgeptoindexphi21|0]=Larg0[Marg0+Lgeptoindex18|0]|0;
					Larg0[Marg0+Lgeptoindex18|0]=tmp10;
					Lgeptoindex18=Lgeptoindex18-1|0;
					Lgeptoindexphi21=Lgeptoindexphi21+1|0;
					if((Marg0+Lgeptoindexphi21|0)<(Marg0+Lgeptoindex18|0))continue;
					break;
				}
			}
		}
		Lgeptoindex18=tmp4.a0.a5(tmp4)|0;
		if((Marg0+Lgeptoindexphi|0)<(Marg0+Lgeptoindexphi1|0)){
			Lgeptoindexphi21=Lgeptoindexphi;
			tmp11=0;
			tmp10=0;
			while(1){
				tmp6=tmp1.a2;
				tmp12=tmp6[tmp10]|0;
				tmp3=(tmp11|0)===(tmp12<<24>>24|0)?1:0;
				if(tmp12<<24>0)if(tmp3){
					tmp6=Larg5[Marg5];
					Larg5[Marg5]={d:tmp6.d,o:tmp6.o+1|0};
					tmp6.d[tmp6.o]=Lgeptoindex18;
					tmp11=tmp1.i1|0;
					tmp10=tmp10+(tmp10>>>0<tmp11-1>>>0?1:0)|0;
					tmp11=0;
				}
				tmp12=tmp0.a0.a12(tmp0,Larg0[Marg0+Lgeptoindexphi21|0]|0)|0;
				tmp6=Larg5[Marg5];
				Larg5[Marg5]={d:tmp6.d,o:tmp6.o+1|0};
				tmp6.d[tmp6.o]=tmp12;
				Lgeptoindexphi21=Lgeptoindexphi21+1|0;
				if(Larg0!==Larg0||(Marg0+Lgeptoindexphi21|0)!==(Marg0+Lgeptoindexphi1|0)){
					tmp11=tmp11+1|0;
					continue;
				}
				break;
			}
			tmp6o=tmp6.o+1|0;
			tmp6=tmp6.d;
		}else{
			tmp6=Larg5[Marg5];
			tmp6o=tmp6.o;
			tmp6=tmp6.d;
		}
		Lgeptoindex18=(Marg0+Lgeptoindexphi|0)-(Marg0)|0;
		if(Larg3!==tmp6||(0+Lgeptoindex18|0)!==tmp6o)if((tmp6o+ -1|0)>(0+Lgeptoindex18|0)){
			Lgeptoindexphi=0;
			while(1){
				Lgeptoindexphi21=Larg3[Lgeptoindex18]|0;
				Larg3[Lgeptoindex18]=tmp6[(tmp6o+ -1|0)+Lgeptoindexphi|0]|0;
				tmp6[(tmp6o+ -1|0)+Lgeptoindexphi|0]=Lgeptoindexphi21;
				Lgeptoindexphi=Lgeptoindexphi-1|0;
				Lgeptoindex18=Lgeptoindex18+1|0;
				if((0+Lgeptoindex18|0)<((tmp6o+ -1|0)+Lgeptoindexphi|0))continue;
				break;
			}
		}
	}else{
		tmp0.a0.a13(tmp0,Larg0,Marg0+Lgeptoindexphi|0,Larg0,Marg0+Lgeptoindexphi1|0,tmp6,tmp6o);
		tmp6=Larg5[Marg5];
		Larg5[Marg5]={d:tmp6.d,o:tmp6.o+((Marg0+Lgeptoindexphi1|0)-(Marg0+Lgeptoindexphi|0)|0)|0};
		tmp6o=tmp6.o+((Marg0+Lgeptoindexphi1|0)-(Marg0+Lgeptoindexphi|0)|0)|0;
		tmp6=tmp6.d;
	}
	if((Marg0+Lgeptoindexphi1|0)<Marg2)while(1){
		Lgeptoindexphi=Larg0[Marg0+Lgeptoindexphi1|0]|0;
		if((Lgeptoindexphi&255)===46){
			Lgeptoindexphi=tmp4.a0.a4(tmp4)|0;
			tmp4=Larg5[Marg5];
			Larg5[Marg5]={d:tmp4.d,o:tmp4.o+1|0};
			tmp4.d[tmp4.o]=Lgeptoindexphi;
			tmp6o=tmp4.o+1|0;
			tmp6=tmp4.d;
			Lgeptoindexphi1=Lgeptoindexphi1+1|0;
		}else{
			Lgeptoindexphi=tmp0.a0.a12(tmp0,Lgeptoindexphi)|0;
			tmp6=Larg5[Marg5];
			Larg5[Marg5]={d:tmp6.d,o:tmp6.o+1|0};
			tmp6.d[tmp6.o]=Lgeptoindexphi;
			Lgeptoindexphi1=Lgeptoindexphi1+1|0;
			if((Marg0+Lgeptoindexphi1|0)<Marg2)continue;
			tmp6o=tmp6.o+1|0;
			tmp6=tmp6.d;
		}
		break;
	}
	tmp0.a0.a13(tmp0,Larg0,Marg0+Lgeptoindexphi1|0,Larg2,Marg2,tmp6,tmp6o);
	tmp4=Larg5[Marg5];
	Larg5[Marg5]={d:tmp4.d,o:tmp4.o+(tmp2-(Marg0+Lgeptoindexphi1|0)|0)|0};
	if(Larg1===Larg2&&Marg1===Marg2){
		Larg4[Marg4]={d:tmp4.d,o:tmp4.o+(tmp2-(Marg0+Lgeptoindexphi1|0)|0)|0};
		return;
	}
	Larg4[Marg4]={d:Larg3,o:0+((Marg1)-(Marg0)|0)|0};
}
function __ZNKSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_RSt8ios_basewd(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var LmergedArray=null,tmp1=0,tmp2=null,tmp3=null,tmp4=null,tmp5=0,tmp6=null,tmp6o=0,tmp7=0,tmp8=null,tmp8o=0,tmp9=null,tmp9o=0,tmp10=null,tmp11=null;
	LmergedArray=new Uint8Array(38);
	LmergedArray[0]=37;
	LmergedArray[1]=0;
	LmergedArray[2]=0;
	LmergedArray[3]=0;
	LmergedArray[4]=0;
	LmergedArray[5]=0;
	LmergedArray[6]=0;
	LmergedArray[7]=0;
	tmp5=Larg3.i1|0;
	if((tmp5&2048|0)!==0){
		LmergedArray[1]=43;
		tmp6o=0+2|0;
		tmp6=LmergedArray;
	}else{
		tmp6o=0+1|0;
		tmp6=LmergedArray;
	}
	if((tmp5&1024|0)!==0){
		tmp6[tmp6o]=35;
		tmp6o=tmp6o+1|0;
		tmp6=tmp6;
	}
	tmp7=tmp5&260;
	if((tmp7|0)===260){
		tmp1=0;
	}else{
		tmp6[tmp6o]=46;
		tmp6[tmp6o+1|0]=42;
		tmp6o=tmp6o+2|0;
		tmp6=tmp6;
		tmp1=1;
	}
	a:{
		if(tmp7<<23<33554432){
			if((tmp7&511)===256){
				tmp5=(tmp5&16384|0)!==0?69|0:101|0;
				break a;
			}
		}else if((tmp7&511)===4){
			tmp5=(tmp5&16384|0)!==0?70|0:102|0;
			break a;
		}
		if((tmp7|0)===260){
			tmp5=(tmp5&16384|0)!==0?65|0:97|0;
		}else{
			tmp5=(tmp5&16384|0)!==0?71|0:103|0;
		}
	}
	tmp6[tmp6o]=tmp5;
	tmp6=[nullObj];
	tmp6[0]={d:LmergedArray,o:8};
	if(tmp1){
		tmp5=__ZSt12__snprintf_lPcjPvPKcz(LmergedArray,8,30,nullObj,LmergedArray,0,Larg3.i2|0,Larg5)|0;
	}else{
		tmp5=__ZSt12__snprintf_lPcjPvPKcz(LmergedArray,8,30,nullObj,LmergedArray,0,Larg5)|0;
	}
	if((tmp5|0)>29){
		tmp5=__ZSt12__asprintf_lPPcPvPKcz(tmp6,0,nullObj,LmergedArray,0,Larg3.i2|0,Larg5)|0;
		tmp8=tmp6[0];
		tmp8o=tmp8.o;
		tmp8=tmp8.d;
	}else{
		tmp8o=8;
		tmp8=LmergedArray;
	}
	a:{
		b:switch(Larg3.i1&176){
			case 16:
			tmp7=tmp8[tmp8o]|0;
			switch(tmp7&255){
				case 45:
				case 43:
				tmp9o=tmp8o+1|0;
				tmp9=tmp8;
				break a;
				default:
				if((tmp5|0)<=1)break b;
				if((tmp7&255)!==48)break b;
				switch(tmp8[tmp8o+1|0]|0){
					case 120:
					case 88:
					tmp9o=tmp8o+2|0;
					tmp9=tmp8;
					break a;
					default:
					break b;
				}
			}
			case 32:
			tmp9o=tmp8o+tmp5|0;
			tmp9=tmp8;
			break a;
			default:
		}
		tmp9o=tmp8o;
		tmp9=tmp8;
	}
	tmp2=new Int32Array(57);
	if(tmp8===LmergedArray&&tmp8o===8){
		tmp10=tmp2;
	}else{
		tmp10=new Int32Array((tmp5<<3)/4|0);
	}
	tmp3=[nullObj];
	tmp11=Larg3.a7.a0;
	tmp11.i1=(tmp11.i1|0)+1|0;
	__ZNSt9__num_putIwE23__widen_and_group_floatEPcS1_S1_PwRS2_S3_RKSt6locale(tmp8,tmp8o,tmp9,tmp9o,tmp8,tmp8o+tmp5|0,tmp10,tmp6,0,tmp3,0,tmp11);
	tmp5=tmp11.i1|0;
	tmp11.i1=tmp5-1|0;
	if((tmp5|0)===0)tmp11.a0.a3(tmp11);
	tmp8={a0:null};
	tmp9=tmp6[0];
	tmp11=tmp3[0];
	tmp4={a0:null};
	tmp4.a0=Larg2.a0;
	__ZSt16__pad_and_outputIwSt11char_traitsIwEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(tmp8,tmp4,tmp10,0,tmp9.d,tmp9.o,tmp11.d,tmp11.o,Larg3,Larg4);
	tmp9=tmp8.a0;
	Larg2.a0=tmp9;
	Larg0.a0=tmp9;
}
function __ZNKSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_RSt8ios_basewy(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5){
	var LmergedArray=null,LmergedArray34=null,tmp2=null,tmp3=0,tmp4=0,tmp5=0,LmergedArray33=null,LmergedArray33o=0,tmp7=null,tmp7o=0,tmp8=null;
	tmp3=Larg5[Marg5+1|0]|0;
	tmp4=Larg5[Marg5]|0;
	LmergedArray=new Uint8Array(31);
	LmergedArray[0]=37;
	LmergedArray[1]=0;
	LmergedArray[2]=0;
	LmergedArray[3]=0;
	LmergedArray[4]=0;
	LmergedArray[5]=0;
	LmergedArray[6]=0;
	LmergedArray[7]=0;
	tmp5=Larg3.i1|0;
	if((tmp5&2048|0)!==0){
		LmergedArray[1]=43;
		LmergedArray33o=0+2|0;
		LmergedArray33=LmergedArray;
	}else{
		LmergedArray33o=0+1|0;
		LmergedArray33=LmergedArray;
	}
	if((tmp5&512|0)!==0){
		LmergedArray33[LmergedArray33o]=35;
		LmergedArray33o=LmergedArray33o+1|0;
		LmergedArray33=LmergedArray33;
	}
	LmergedArray33[LmergedArray33o]=108;
	LmergedArray33[LmergedArray33o+1|0]=108;
	switch(tmp5&74&127){
		case 64:
		tmp5=111;
		break;
		case 8:
		tmp5=(tmp5&16384|0)!==0?88|0:120|0;
		break;
		default:
		tmp5=117;
	}
	LmergedArray33[LmergedArray33o+2|0]=tmp5;
	LmergedArray33=new Int32Array(45);
	LmergedArray33[0]=tmp4;
	LmergedArray33[1]=tmp3;
	tmp3=__ZSt12__snprintf_lPcjPvPKcz(LmergedArray,8,23,nullObj,LmergedArray,0,{d:LmergedArray33,o:0})|0;
	a:{
		b:switch(Larg3.i1&176){
			case 16:
			tmp4=LmergedArray[8]|0;
			switch(tmp4&255){
				case 45:
				case 43:
				tmp7o=8+1|0;
				tmp7=LmergedArray;
				break a;
				default:
				if((tmp3|0)<=1)break b;
				if((tmp4&255)!==48)break b;
				switch(LmergedArray[9]|0){
					case 120:
					case 88:
					tmp7o=8+2|0;
					tmp7=LmergedArray;
					break a;
					default:
					break b;
				}
			}
			case 32:
			tmp7o=8+tmp3|0;
			tmp7=LmergedArray;
			break a;
			default:
		}
		tmp7o=8;
		tmp7=LmergedArray;
	}
	LmergedArray34=[nullObj,nullObj];
	tmp8=Larg3.a7.a0;
	tmp8.i1=(tmp8.i1|0)+1|0;
	__ZNSt9__num_putIwE21__widen_and_group_intEPcS1_S1_PwRS2_S3_RKSt6locale(LmergedArray,8,tmp7,tmp7o,LmergedArray,8+tmp3|0,LmergedArray33,2,LmergedArray34,0,LmergedArray34,1,tmp8);
	tmp3=tmp8.i1|0;
	tmp8.i1=tmp3-1|0;
	if((tmp3|0)===0)tmp8.a0.a3(tmp8);
	tmp7=LmergedArray34[0];
	tmp8=LmergedArray34[1];
	tmp2={a0:null};
	tmp2.a0=Larg2.a0;
	__ZSt16__pad_and_outputIwSt11char_traitsIwEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(Larg0,tmp2,LmergedArray33,2,tmp7.d,tmp7.o,tmp8.d,tmp8.o,Larg3,Larg4);
}
function __ZNSt9__num_putIwE21__widen_and_group_intEPcS1_S1_PwRS2_S3_RKSt6locale(Larg0,Marg0,Larg1,Marg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4,Larg5,Marg5,L$p0$p0$pval){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=null,tmp3o=0,Lgeptoindexphi=0,Lgeptoindexphi4=0,Lgeptoindexphi8=0,tmp7=0,tmp8=0,tmp9=0,tmp10=null;
	tmp3=L$p0$p0$pval.a2.a0;
	tmp0=tmp3[(__ZNSt5ctypeIwE2idE$p1|0)-1|0];
	tmp3=tmp3[(__ZNSt8numpunctIwE2idE$p1|0)-1|0];
	tmp1={i0:0,i1:0,a2:nullArray};
	tmp3.a0.a6(tmp1,tmp3);
	if((tmp1.i1|0)!==0){
		Larg5[Marg5]={d:Larg3,o:Marg3};
		Lgeptoindexphi=Larg0[Marg0]|0;
		switch(Lgeptoindexphi&255){
			case 45:
			case 43:
			Lgeptoindexphi=tmp0.a0.a12(tmp0,Lgeptoindexphi)|0;
			tmp10=Larg5[Marg5];
			Larg5[Marg5]={d:tmp10.d,o:tmp10.o+1|0};
			tmp10.d[tmp10.o]=Lgeptoindexphi;
			Lgeptoindexphi=1;
			break;
			default:
			Lgeptoindexphi=0;
		}
		a:if(((Marg2)-(Marg0+Lgeptoindexphi|0)|0)>1)if((Larg0[Marg0+Lgeptoindexphi|0]&255)===48){
			switch(Larg0[(Marg0+Lgeptoindexphi|0)+1|0]|0){
				case 120:
				case 88:
				Lgeptoindexphi4=tmp0.a0.a12(tmp0,48)|0;
				tmp10=Larg5[Marg5];
				Larg5[Marg5]={d:tmp10.d,o:tmp10.o+1|0};
				tmp10.d[tmp10.o]=Lgeptoindexphi4;
				Lgeptoindexphi4=tmp0.a0.a12(tmp0,Larg0[(Marg0+Lgeptoindexphi|0)+1|0]|0)|0;
				tmp10=Larg5[Marg5];
				Larg5[Marg5]={d:tmp10.d,o:tmp10.o+1|0};
				tmp10.d[tmp10.o]=Lgeptoindexphi4;
				Lgeptoindexphi=Lgeptoindexphi+2|0;
				break a;
				default:
			}
		}
		if(Larg0!==Larg2||(Marg0+Lgeptoindexphi|0)!==Marg2)if((Marg2+ -1|0)>(Marg0+Lgeptoindexphi|0)){
			Lgeptoindexphi8=Lgeptoindexphi;
			Lgeptoindexphi4=-1;
			while(1){
				tmp7=Larg0[Marg0+Lgeptoindexphi8|0]|0;
				Larg0[Marg0+Lgeptoindexphi8|0]=Larg2[Marg2+Lgeptoindexphi4|0]|0;
				Larg2[Marg2+Lgeptoindexphi4|0]=tmp7;
				Lgeptoindexphi4=Lgeptoindexphi4-1|0;
				Lgeptoindexphi8=Lgeptoindexphi8+1|0;
				if((Marg0+Lgeptoindexphi8|0)<(Marg2+Lgeptoindexphi4|0))continue;
				break;
			}
		}
		Lgeptoindexphi4=tmp3.a0.a5(tmp3)|0;
		if((Marg0+Lgeptoindexphi|0)<Marg2){
			Lgeptoindexphi8=Lgeptoindexphi;
			tmp8=0;
			tmp7=0;
			while(1){
				tmp3=tmp1.a2;
				tmp9=tmp3[tmp7]|0;
				tmp2=(tmp8|0)===(tmp9<<24>>24|0)?1:0;
				if((tmp9&255)!==0)if(tmp2){
					tmp3=Larg5[Marg5];
					Larg5[Marg5]={d:tmp3.d,o:tmp3.o+1|0};
					tmp3.d[tmp3.o]=Lgeptoindexphi4;
					tmp8=tmp1.i1|0;
					tmp7=tmp7+(tmp7>>>0<tmp8-1>>>0?1:0)|0;
					tmp8=0;
				}
				tmp9=tmp0.a0.a12(tmp0,Larg0[Marg0+Lgeptoindexphi8|0]|0)|0;
				tmp3=Larg5[Marg5];
				Larg5[Marg5]={d:tmp3.d,o:tmp3.o+1|0};
				tmp3.d[tmp3.o]=tmp9;
				Lgeptoindexphi8=Lgeptoindexphi8+1|0;
				if(Larg0!==Larg2||(Marg0+Lgeptoindexphi8|0)!==Marg2){
					tmp8=tmp8+1|0;
					continue;
				}
				break;
			}
			tmp3o=tmp3.o+1|0;
			tmp3=tmp3.d;
		}else{
			tmp3=Larg5[Marg5];
			tmp3o=tmp3.o;
			tmp3=tmp3.d;
		}
		Lgeptoindexphi4=(Marg0+Lgeptoindexphi|0)-(Marg0)|0;
		if(Larg3===tmp3&&(Marg3+Lgeptoindexphi4|0)===tmp3o){
			tmp3={d:tmp3,o:tmp3o};
		}else if((tmp3o+ -1|0)>(Marg3+Lgeptoindexphi4|0)){
			Lgeptoindexphi=0;
			while(1){
				Lgeptoindexphi8=Larg3[Marg3+Lgeptoindexphi4|0]|0;
				Larg3[Marg3+Lgeptoindexphi4|0]=tmp3[(tmp3o+ -1|0)+Lgeptoindexphi|0]|0;
				tmp3[(tmp3o+ -1|0)+Lgeptoindexphi|0]=Lgeptoindexphi8;
				Lgeptoindexphi=Lgeptoindexphi-1|0;
				Lgeptoindexphi4=Lgeptoindexphi4+1|0;
				if((Marg3+Lgeptoindexphi4|0)<((tmp3o+ -1|0)+Lgeptoindexphi|0))continue;
				break;
			}
			tmp3={d:tmp3,o:tmp3o};
		}else{
			tmp3={d:tmp3,o:tmp3o};
		}
	}else{
		tmp0.a0.a13(tmp0,Larg0,Marg0,Larg2,Marg2,Larg3,Marg3);
		Larg5[Marg5]={d:Larg3,o:Marg3+((Marg2)-(Marg0)|0)|0};
		tmp3={d:Larg3,o:Marg3+((Marg2)-(Marg0)|0)|0};
	}
	if(Larg1===Larg2&&Marg1===Marg2){
		Larg4[Marg4]=tmp3;
		return;
	}
	Larg4[Marg4]={d:Larg3,o:Marg3+((Marg1)-(Marg0)|0)|0};
}
function __ZNKSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_RSt8ios_basewm(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var LmergedArray=null,tmp1=null,LmergedArray27=null,tmp3=null,tmp4=0,tmp5=0,tmp6=null,tmp6o=0,tmp7=null;
	LmergedArray=new Uint8Array(18);
	LmergedArray[0]=37;
	LmergedArray[1]=0;
	LmergedArray[2]=0;
	LmergedArray[3]=0;
	LmergedArray[4]=0;
	LmergedArray[5]=0;
	tmp5=Larg3.i1|0;
	if((tmp5&2048|0)!==0){
		LmergedArray[1]=43;
		tmp6o=0+2|0;
		tmp6=LmergedArray;
	}else{
		tmp6o=0+1|0;
		tmp6=LmergedArray;
	}
	if((tmp5&512|0)!==0){
		tmp6[tmp6o]=35;
		tmp6o=tmp6o+1|0;
		tmp6=tmp6;
	}
	tmp6[tmp6o]=108;
	switch(tmp5&74&127){
		case 64:
		tmp5=111;
		break;
		case 8:
		tmp5=(tmp5&16384|0)!==0?88|0:120|0;
		break;
		default:
		tmp5=117;
	}
	tmp6[tmp6o+1|0]=tmp5;
	tmp5=__ZSt12__snprintf_lPcjPvPKcz(LmergedArray,6,12,nullObj,LmergedArray,0,Larg5)|0;
	a:{
		b:switch(Larg3.i1&176){
			case 16:
			tmp4=LmergedArray[6]|0;
			switch(tmp4&255){
				case 45:
				case 43:
				tmp6o=6+1|0;
				tmp6=LmergedArray;
				break a;
				default:
				if((tmp5|0)<=1)break b;
				if((tmp4&255)!==48)break b;
				switch(LmergedArray[7]|0){
					case 120:
					case 88:
					tmp6o=6+2|0;
					tmp6=LmergedArray;
					break a;
					default:
					break b;
				}
			}
			case 32:
			tmp6o=6+tmp5|0;
			tmp6=LmergedArray;
			break a;
			default:
		}
		tmp6o=6;
		tmp6=LmergedArray;
	}
	tmp1=new Int32Array(21);
	LmergedArray27=[nullObj,nullObj];
	tmp7=Larg3.a7.a0;
	tmp7.i1=(tmp7.i1|0)+1|0;
	__ZNSt9__num_putIwE21__widen_and_group_intEPcS1_S1_PwRS2_S3_RKSt6locale(LmergedArray,6,tmp6,tmp6o,LmergedArray,6+tmp5|0,tmp1,0,LmergedArray27,0,LmergedArray27,1,tmp7);
	tmp5=tmp7.i1|0;
	tmp7.i1=tmp5-1|0;
	if((tmp5|0)===0)tmp7.a0.a3(tmp7);
	tmp6=LmergedArray27[0];
	tmp7=LmergedArray27[1];
	tmp3={a0:null};
	tmp3.a0=Larg2.a0;
	__ZSt16__pad_and_outputIwSt11char_traitsIwEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(Larg0,tmp3,tmp1,0,tmp6.d,tmp6.o,tmp7.d,tmp7.o,Larg3,Larg4);
}
function __ZNKSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_RSt8ios_basewx(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5){
	var LmergedArray=null,LmergedArray34=null,tmp2=null,tmp3=0,tmp4=0,tmp5=0,LmergedArray33=null,LmergedArray33o=0,tmp7=null,tmp7o=0,tmp8=null;
	tmp3=Larg5[Marg5+1|0]|0;
	tmp4=Larg5[Marg5]|0;
	LmergedArray=new Uint8Array(31);
	LmergedArray[0]=37;
	LmergedArray[1]=0;
	LmergedArray[2]=0;
	LmergedArray[3]=0;
	LmergedArray[4]=0;
	LmergedArray[5]=0;
	LmergedArray[6]=0;
	LmergedArray[7]=0;
	tmp5=Larg3.i1|0;
	if((tmp5&2048|0)!==0){
		LmergedArray[1]=43;
		LmergedArray33o=0+2|0;
		LmergedArray33=LmergedArray;
	}else{
		LmergedArray33o=0+1|0;
		LmergedArray33=LmergedArray;
	}
	if((tmp5&512|0)!==0){
		LmergedArray33[LmergedArray33o]=35;
		LmergedArray33o=LmergedArray33o+1|0;
		LmergedArray33=LmergedArray33;
	}
	LmergedArray33[LmergedArray33o]=108;
	LmergedArray33[LmergedArray33o+1|0]=108;
	switch(tmp5&74&127){
		case 64:
		tmp5=111;
		break;
		case 8:
		tmp5=(tmp5&16384|0)!==0?88|0:120|0;
		break;
		default:
		tmp5=100;
	}
	LmergedArray33[LmergedArray33o+2|0]=tmp5;
	LmergedArray33=new Int32Array(45);
	LmergedArray33[0]=tmp4;
	LmergedArray33[1]=tmp3;
	tmp3=__ZSt12__snprintf_lPcjPvPKcz(LmergedArray,8,23,nullObj,LmergedArray,0,{d:LmergedArray33,o:0})|0;
	a:{
		b:switch(Larg3.i1&176){
			case 16:
			tmp4=LmergedArray[8]|0;
			switch(tmp4&255){
				case 45:
				case 43:
				tmp7o=8+1|0;
				tmp7=LmergedArray;
				break a;
				default:
				if((tmp3|0)<=1)break b;
				if((tmp4&255)!==48)break b;
				switch(LmergedArray[9]|0){
					case 120:
					case 88:
					tmp7o=8+2|0;
					tmp7=LmergedArray;
					break a;
					default:
					break b;
				}
			}
			case 32:
			tmp7o=8+tmp3|0;
			tmp7=LmergedArray;
			break a;
			default:
		}
		tmp7o=8;
		tmp7=LmergedArray;
	}
	LmergedArray34=[nullObj,nullObj];
	tmp8=Larg3.a7.a0;
	tmp8.i1=(tmp8.i1|0)+1|0;
	__ZNSt9__num_putIwE21__widen_and_group_intEPcS1_S1_PwRS2_S3_RKSt6locale(LmergedArray,8,tmp7,tmp7o,LmergedArray,8+tmp3|0,LmergedArray33,2,LmergedArray34,0,LmergedArray34,1,tmp8);
	tmp3=tmp8.i1|0;
	tmp8.i1=tmp3-1|0;
	if((tmp3|0)===0)tmp8.a0.a3(tmp8);
	tmp7=LmergedArray34[0];
	tmp8=LmergedArray34[1];
	tmp2={a0:null};
	tmp2.a0=Larg2.a0;
	__ZSt16__pad_and_outputIwSt11char_traitsIwEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(Larg0,tmp2,LmergedArray33,2,tmp7.d,tmp7.o,tmp8.d,tmp8.o,Larg3,Larg4);
}
function __ZNKSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_RSt8ios_basewl(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var LmergedArray=null,tmp1=null,LmergedArray27=null,tmp3=null,tmp4=0,tmp5=0,tmp6=null,tmp6o=0,tmp7=null;
	LmergedArray=new Uint8Array(18);
	LmergedArray[0]=37;
	LmergedArray[1]=0;
	LmergedArray[2]=0;
	LmergedArray[3]=0;
	LmergedArray[4]=0;
	LmergedArray[5]=0;
	tmp5=Larg3.i1|0;
	if((tmp5&2048|0)!==0){
		LmergedArray[1]=43;
		tmp6o=0+2|0;
		tmp6=LmergedArray;
	}else{
		tmp6o=0+1|0;
		tmp6=LmergedArray;
	}
	if((tmp5&512|0)!==0){
		tmp6[tmp6o]=35;
		tmp6o=tmp6o+1|0;
		tmp6=tmp6;
	}
	tmp6[tmp6o]=108;
	switch(tmp5&74&127){
		case 64:
		tmp5=111;
		break;
		case 8:
		tmp5=(tmp5&16384|0)!==0?88|0:120|0;
		break;
		default:
		tmp5=100;
	}
	tmp6[tmp6o+1|0]=tmp5;
	tmp5=__ZSt12__snprintf_lPcjPvPKcz(LmergedArray,6,12,nullObj,LmergedArray,0,Larg5)|0;
	a:{
		b:switch(Larg3.i1&176){
			case 16:
			tmp4=LmergedArray[6]|0;
			switch(tmp4&255){
				case 45:
				case 43:
				tmp6o=6+1|0;
				tmp6=LmergedArray;
				break a;
				default:
				if((tmp5|0)<=1)break b;
				if((tmp4&255)!==48)break b;
				switch(LmergedArray[7]|0){
					case 120:
					case 88:
					tmp6o=6+2|0;
					tmp6=LmergedArray;
					break a;
					default:
					break b;
				}
			}
			case 32:
			tmp6o=6+tmp5|0;
			tmp6=LmergedArray;
			break a;
			default:
		}
		tmp6o=6;
		tmp6=LmergedArray;
	}
	tmp1=new Int32Array(21);
	LmergedArray27=[nullObj,nullObj];
	tmp7=Larg3.a7.a0;
	tmp7.i1=(tmp7.i1|0)+1|0;
	__ZNSt9__num_putIwE21__widen_and_group_intEPcS1_S1_PwRS2_S3_RKSt6locale(LmergedArray,6,tmp6,tmp6o,LmergedArray,6+tmp5|0,tmp1,0,LmergedArray27,0,LmergedArray27,1,tmp7);
	tmp5=tmp7.i1|0;
	tmp7.i1=tmp5-1|0;
	if((tmp5|0)===0)tmp7.a0.a3(tmp7);
	tmp6=LmergedArray27[0];
	tmp7=LmergedArray27[1];
	tmp3={a0:null};
	tmp3.a0=Larg2.a0;
	__ZSt16__pad_and_outputIwSt11char_traitsIwEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(Larg0,tmp3,tmp1,0,tmp6.d,tmp6.o,tmp7.d,tmp7.o,Larg3,Larg4);
}
function __ZNKSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_RSt8ios_basewb(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var tmp0=null,tmp1=null,Lgeptoindexphi=0,tmp3=null,tmp4=null,tmp5=0,tmp6=null,tmp6o=0;
	if((Larg3.i1&1|0)!==0){
		tmp1=Larg3.a7.a0;
		Lgeptoindexphi=tmp1.i1|0;
		tmp3=tmp1.a2.a0;
		tmp3=tmp3[(__ZNSt8numpunctIwE2idE$p1|0)-1|0];
		tmp1.i1=Lgeptoindexphi;
		if((Lgeptoindexphi|0)===-1)tmp1.a0.a3(tmp1);
		tmp1={i0:0,i1:0,a2:nullArray};
		tmp4=tmp3.a0;
		if(Larg5)tmp4.a7(tmp1,tmp3);
		else tmp4.a8(tmp1,tmp3);
		if((tmp1.i1|0)!==0){
			tmp3=tmp1.a2;
			tmp4=Larg2.a0;
			Lgeptoindexphi=0;
			while(1){
				tmp5=tmp3[Lgeptoindexphi]|0;
				if(tmp4!==null){
					tmp6o=tmp4.a6o;
					tmp6=tmp4.a6;
					tmp0=tmp4.a7;
					if(tmp6===tmp0&&tmp6o===0){
						tmp5=tmp4.a0.a14(tmp4,tmp5)|0;
					}else{
						tmp4.a6=tmp6;
						tmp4.a6o=tmp6o+1|0;
						tmp6[tmp6o]=tmp5;
					}
					if((tmp5|0)===-1){
						Larg2.a0=null;
						tmp4=null;
					}
				}else{
					tmp4=null;
				}
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				tmp6=tmp1.a2;
				if(tmp3!==tmp6||(0+Lgeptoindexphi|0)!==(0+(tmp1.i1|0)|0))continue;
				break;
			}
		}
		Larg0.a0=Larg2.a0;
	}else{
		tmp3=Larg1.a0.a7;
		tmp1={a0:null};
		tmp1.a0=Larg2.a0;
		tmp3(Larg0,Larg1,tmp1,Larg3,Larg4,Larg5?1:0);
	}
}
function __ZNSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEED0Ev(Larg0){
}
function __ZNSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEED2Ev(Larg0){
}
function __ZNKSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_RSt8ios_basecPKv(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5){
	var LmergedArray=null,tmp1=0,tmp2=0,tmp3=null,tmp3o=0,tmp4=null,tmp5=0,tmp6=0,tmp7=null;
	LmergedArray=new Uint8Array(63);
	LmergedArray[0]=37;
	LmergedArray[1]=112;
	LmergedArray[2]=0;
	LmergedArray[3]=0;
	LmergedArray[4]=0;
	LmergedArray[5]=0;
	tmp1=__ZSt12__snprintf_lPcjPvPKcz(LmergedArray,6,20,nullObj,LmergedArray,0,{d:Larg5,o:Marg5})|0;
	a:{
		b:switch(Larg3.i1&176){
			case 16:
			tmp5=LmergedArray[6]|0;
			switch(tmp5&255){
				case 45:
				case 43:
				tmp3o=6+1|0;
				tmp3=LmergedArray;
				break a;
				default:
				if((tmp1|0)<=1)break b;
				if((tmp5&255)!==48)break b;
				switch(LmergedArray[7]|0){
					case 120:
					case 88:
					tmp3o=6+2|0;
					tmp3=LmergedArray;
					break a;
					default:
					break b;
				}
			}
			case 32:
			tmp3o=6+tmp1|0;
			tmp3=LmergedArray;
			break a;
			default:
		}
		tmp3o=6;
		tmp3=LmergedArray;
	}
	tmp4=Larg3.a7.a0;
	tmp5=tmp4.i1|0;
	tmp2=tmp5+1|0;
	tmp4.i1=tmp2;
	if((__ZNSt5ctypeIcE2idE.i0&255)!==0){
		tmp6=__ZNSt5ctypeIcE2idE.i1|0;
	}else{
		tmp6=(__ZNSt6locale2id9__next_idE|0)+1|0;
		__ZNSt6locale2id9__next_idE=tmp6;
		__ZNSt5ctypeIcE2idE.i1=tmp6;
		__ZNSt5ctypeIcE2idE.i0=1;
	}
	tmp7=tmp4.a2.a0;
	tmp7=tmp7[tmp6-1|0];
	tmp4.i1=tmp5;
	if((tmp2|0)===0)tmp4.a0.a3(tmp4);
	tmp7.a0.a9(tmp7,LmergedArray,6,LmergedArray,6+tmp1|0,LmergedArray,26);
	if(tmp3===LmergedArray&&tmp3o===(6+tmp1|0)){
		tmp3o=26+tmp1|0;
		tmp3=LmergedArray;
	}else{
		tmp3o=26+((tmp3o)-(6)|0)|0;
		tmp3=LmergedArray;
	}
	tmp4={a0:null};
	tmp4.a0=Larg2.a0;
	__ZSt16__pad_and_outputIcSt11char_traitsIcEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(Larg0,tmp4,LmergedArray,26,tmp3,tmp3o,LmergedArray,26+tmp1|0,Larg3,Larg4);
}
function __ZNKSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_RSt8ios_basece(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var LmergedArray=null,tmp1=0,tmp2=null,tmp3=0,LmergedArray30=null,LmergedArray30o=0,tmp5=0,tmp6=null,tmp6o=0,tmp7=null,tmp7o=0,tmp8=null,tmp8o=0,tmp9=null;
	LmergedArray=new Uint8Array(95);
	LmergedArray[0]=37;
	LmergedArray[1]=0;
	LmergedArray[2]=0;
	LmergedArray[3]=0;
	LmergedArray[4]=0;
	LmergedArray[5]=0;
	LmergedArray[6]=0;
	LmergedArray[7]=0;
	tmp3=Larg3.i1|0;
	if((tmp3&2048|0)!==0){
		LmergedArray[1]=43;
		LmergedArray30o=0+2|0;
		LmergedArray30=LmergedArray;
	}else{
		LmergedArray30o=0+1|0;
		LmergedArray30=LmergedArray;
	}
	if((tmp3&1024|0)!==0){
		LmergedArray30[LmergedArray30o]=35;
		LmergedArray30o=LmergedArray30o+1|0;
		LmergedArray30=LmergedArray30;
	}
	tmp5=tmp3&260;
	if((tmp5|0)===260){
		tmp1=0;
	}else{
		LmergedArray30[LmergedArray30o]=46;
		LmergedArray30[LmergedArray30o+1|0]=42;
		LmergedArray30o=LmergedArray30o+2|0;
		LmergedArray30=LmergedArray30;
		tmp1=1;
	}
	LmergedArray30[LmergedArray30o]=76;
	a:{
		if(tmp5<<23<33554432){
			if((tmp5&511)===256){
				tmp3=(tmp3&16384|0)!==0?69|0:101|0;
				break a;
			}
		}else if((tmp5&511)===4){
			tmp3=(tmp3&16384|0)!==0?70|0:102|0;
			break a;
		}
		if((tmp5|0)===260){
			tmp3=(tmp3&16384|0)!==0?65|0:97|0;
		}else{
			tmp3=(tmp3&16384|0)!==0?71|0:103|0;
		}
	}
	LmergedArray30[LmergedArray30o+1|0]=tmp3;
	LmergedArray30=[nullObj,nullObj];
	LmergedArray30[0]={d:LmergedArray,o:8};
	if(tmp1){
		tmp3=__ZSt12__snprintf_lPcjPvPKcz(LmergedArray,8,30,nullObj,LmergedArray,0,Larg3.i2|0,Larg5)|0;
	}else{
		tmp3=__ZSt12__snprintf_lPcjPvPKcz(LmergedArray,8,30,nullObj,LmergedArray,0,Larg5)|0;
	}
	if((tmp3|0)>29){
		if(tmp1){
			tmp3=__ZSt12__asprintf_lPPcPvPKcz(LmergedArray30,0,nullObj,LmergedArray,0,Larg3.i2|0,Larg5)|0;
		}else{
			tmp3=__ZSt12__asprintf_lPPcPvPKcz(LmergedArray30,0,nullObj,LmergedArray,0,Larg5)|0;
		}
		tmp6=LmergedArray30[0];
		tmp6o=tmp6.o;
		tmp6=tmp6.d;
	}else{
		tmp6o=8;
		tmp6=LmergedArray;
	}
	a:{
		b:switch(Larg3.i1&176){
			case 16:
			tmp5=tmp6[tmp6o]|0;
			switch(tmp5&255){
				case 45:
				case 43:
				tmp7o=tmp6o+1|0;
				tmp7=tmp6;
				break a;
				default:
				if((tmp3|0)<=1)break b;
				if((tmp5&255)!==48)break b;
				switch(tmp6[tmp6o+1|0]|0){
					case 120:
					case 88:
					tmp7o=tmp6o+2|0;
					tmp7=tmp6;
					break a;
					default:
					break b;
				}
			}
			case 32:
			tmp7o=tmp6o+tmp3|0;
			tmp7=tmp6;
			break a;
			default:
		}
		tmp7o=tmp6o;
		tmp7=tmp6;
	}
	if(tmp6===LmergedArray&&tmp6o===8){
		tmp8o=38;
		tmp8=LmergedArray;
	}else{
		tmp8=new Uint8Array((tmp3<<1)/1|0);
		tmp8o=0;
		tmp8=tmp8;
	}
	tmp9=Larg3.a7.a0;
	tmp9.i1=(tmp9.i1|0)+1|0;
	__ZNSt9__num_putIcE23__widen_and_group_floatEPcS1_S1_S1_RS1_S2_RKSt6locale(tmp6,tmp6o,tmp7,tmp7o,tmp6,tmp6o+tmp3|0,tmp8,tmp8o,LmergedArray30,0,LmergedArray30,1,tmp9);
	tmp3=tmp9.i1|0;
	tmp9.i1=tmp3-1|0;
	if((tmp3|0)===0)tmp9.a0.a3(tmp9);
	tmp6={a0:null};
	tmp7=LmergedArray30[0];
	tmp9=LmergedArray30[1];
	tmp2={a0:null};
	tmp2.a0=Larg2.a0;
	__ZSt16__pad_and_outputIcSt11char_traitsIcEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(tmp6,tmp2,tmp8,tmp8o,tmp7.d,tmp7.o,tmp9.d,tmp9.o,Larg3,Larg4);
	tmp7=tmp6.a0;
	Larg2.a0=tmp7;
	Larg0.a0=tmp7;
}
function __ZNSt9__num_putIcE23__widen_and_group_floatEPcS1_S1_S1_RS1_S2_RKSt6locale(Larg0,Marg0,Larg1,Marg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4,Larg5,Marg5,L$p0$p0$pval){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=0,Lgeptoindexphi=0,tmp5=null,Lgeptoindexphi1=0,Lgeptoindex18=0,Lgeptoindexphi21=0,tmp9=0,tmp10=0,tmp11=null,tmp12=0;
	if((__ZNSt5ctypeIcE2idE.i0&255)!==0){
		Lgeptoindexphi=__ZNSt5ctypeIcE2idE.i1|0;
	}else{
		Lgeptoindexphi=(__ZNSt6locale2id9__next_idE|0)+1|0;
		__ZNSt6locale2id9__next_idE=Lgeptoindexphi;
		__ZNSt5ctypeIcE2idE.i1=Lgeptoindexphi;
		__ZNSt5ctypeIcE2idE.i0=1;
	}
	tmp5=L$p0$p0$pval.a2.a0;
	tmp0=tmp5[Lgeptoindexphi-1|0];
	tmp5=tmp5[(__ZNSt8numpunctIcE2idE$p1|0)-1|0];
	tmp1={i0:0,i1:0,a2:nullArray};
	tmp5.a0.a6(tmp1,tmp5);
	Larg5[Marg5]={d:Larg3,o:Marg3};
	Lgeptoindexphi=Larg0[Marg0]|0;
	switch(Lgeptoindexphi&255){
		case 45:
		case 43:
		Lgeptoindexphi=tmp0.a0.a8(tmp0,Lgeptoindexphi)|0;
		tmp11=Larg5[Marg5];
		Larg5[Marg5]={d:tmp11.d,o:tmp11.o+1|0};
		tmp11.d[tmp11.o]=Lgeptoindexphi;
		Lgeptoindexphi=1;
		break;
		default:
		Lgeptoindexphi=0;
	}
	tmp2=(Marg2);
	a:{
		if((tmp2-(Marg0+Lgeptoindexphi|0)|0)>1)if((Larg0[Marg0+Lgeptoindexphi|0]&255)===48){
			switch(Larg0[(Marg0+Lgeptoindexphi|0)+1|0]|0){
				case 120:
				case 88:
				Lgeptoindexphi1=tmp0.a0.a8(tmp0,48)|0;
				tmp11=Larg5[Marg5];
				Larg5[Marg5]={d:tmp11.d,o:tmp11.o+1|0};
				tmp11.d[tmp11.o]=Lgeptoindexphi1;
				Lgeptoindexphi1=tmp0.a0.a8(tmp0,Larg0[(Marg0+Lgeptoindexphi|0)+1|0]|0)|0;
				tmp11=Larg5[Marg5];
				Larg5[Marg5]={d:tmp11.d,o:tmp11.o+1|0};
				tmp11.d[tmp11.o]=Lgeptoindexphi1;
				Lgeptoindexphi=Lgeptoindexphi+2|0;
				if((Marg0+Lgeptoindexphi|0)>=Marg2){
					Lgeptoindexphi1=Lgeptoindexphi;
					break a;
				}
				Lgeptoindexphi1=Lgeptoindexphi;
				while(1){
					if((__ctype_b[127+((Larg0[Marg0+Lgeptoindexphi1|0]<<24>>24)+1|0)|0]&68)===0)break a;
					Lgeptoindexphi1=Lgeptoindexphi1+1|0;
					if((Marg0+Lgeptoindexphi1|0)<Marg2)continue;
					break;
				}
				break a;
				default:
			}
		}
		if((Marg0+Lgeptoindexphi|0)<Marg2){
			Lgeptoindexphi1=Lgeptoindexphi;
			while(1){
				if((Larg0[Marg0+Lgeptoindexphi1|0]<<24>>24)-48>>>0<=9){
					Lgeptoindexphi1=Lgeptoindexphi1+1|0;
					if((Marg0+Lgeptoindexphi1|0)<Marg2)continue;
				}
				break;
			}
		}else{
			Lgeptoindexphi1=Lgeptoindexphi;
		}
	}
	if((tmp1.i1|0)!==0){
		if(Larg0!==Larg0||(Marg0+Lgeptoindexphi|0)!==(Marg0+Lgeptoindexphi1|0)){
			Lgeptoindex18=Lgeptoindexphi1-1|0;
			if((Marg0+Lgeptoindex18|0)>(Marg0+Lgeptoindexphi|0)){
				Lgeptoindexphi21=Lgeptoindexphi;
				while(1){
					tmp9=Larg0[Marg0+Lgeptoindexphi21|0]|0;
					Larg0[Marg0+Lgeptoindexphi21|0]=Larg0[Marg0+Lgeptoindex18|0]|0;
					Larg0[Marg0+Lgeptoindex18|0]=tmp9;
					Lgeptoindex18=Lgeptoindex18-1|0;
					Lgeptoindexphi21=Lgeptoindexphi21+1|0;
					if((Marg0+Lgeptoindexphi21|0)<(Marg0+Lgeptoindex18|0))continue;
					break;
				}
			}
		}
		Lgeptoindex18=tmp5.a0.a5(tmp5)|0;
		if((Marg0+Lgeptoindexphi|0)<(Marg0+Lgeptoindexphi1|0)){
			Lgeptoindexphi21=Lgeptoindexphi;
			tmp10=0;
			tmp9=0;
			while(1){
				tmp11=tmp1.a2;
				tmp12=tmp11[tmp9]|0;
				tmp3=(tmp10|0)===(tmp12<<24>>24|0)?1:0;
				if(tmp12<<24>0)if(tmp3){
					tmp11=Larg5[Marg5];
					Larg5[Marg5]={d:tmp11.d,o:tmp11.o+1|0};
					tmp11.d[tmp11.o]=Lgeptoindex18;
					tmp10=tmp1.i1|0;
					tmp9=tmp9+(tmp9>>>0<tmp10-1>>>0?1:0)|0;
					tmp10=0;
				}
				tmp12=tmp0.a0.a8(tmp0,Larg0[Marg0+Lgeptoindexphi21|0]|0)|0;
				tmp11=Larg5[Marg5];
				Larg5[Marg5]={d:tmp11.d,o:tmp11.o+1|0};
				tmp11.d[tmp11.o]=tmp12;
				Lgeptoindexphi21=Lgeptoindexphi21+1|0;
				if(Larg0!==Larg0||(Marg0+Lgeptoindexphi21|0)!==(Marg0+Lgeptoindexphi1|0)){
					tmp10=tmp10+1|0;
					continue;
				}
				break;
			}
		}
		tmp11=Larg5[Marg5];
		Lgeptoindex18=(Marg0+Lgeptoindexphi|0)-(Marg0)|0;
		if(Larg3!==tmp11.d||(Marg3+Lgeptoindex18|0)!==tmp11.o)if((tmp11.o+ -1|0)>(Marg3+Lgeptoindex18|0)){
			Lgeptoindexphi=-1;
			while(1){
				Lgeptoindexphi21=Larg3[Marg3+Lgeptoindex18|0]|0;
				Larg3[Marg3+Lgeptoindex18|0]=tmp11.d[tmp11.o+Lgeptoindexphi|0]|0;
				tmp11.d[tmp11.o+Lgeptoindexphi|0]=Lgeptoindexphi21;
				Lgeptoindexphi=Lgeptoindexphi-1|0;
				Lgeptoindex18=Lgeptoindex18+1|0;
				if((Marg3+Lgeptoindex18|0)<(tmp11.o+Lgeptoindexphi|0))continue;
				break;
			}
		}
	}else{
		tmp11=Larg5[Marg5];
		tmp0.a0.a9(tmp0,Larg0,Marg0+Lgeptoindexphi|0,Larg0,Marg0+Lgeptoindexphi1|0,tmp11.d,tmp11.o);
		tmp11=Larg5[Marg5];
		Larg5[Marg5]={d:tmp11.d,o:tmp11.o+((Marg0+Lgeptoindexphi1|0)-(Marg0+Lgeptoindexphi|0)|0)|0};
	}
	if((Marg0+Lgeptoindexphi1|0)<Marg2)while(1){
		Lgeptoindexphi=Larg0[Marg0+Lgeptoindexphi1|0]|0;
		if((Lgeptoindexphi&255)===46){
			Lgeptoindexphi=tmp5.a0.a4(tmp5)|0;
			tmp5=Larg5[Marg5];
			Larg5[Marg5]={d:tmp5.d,o:tmp5.o+1|0};
			tmp5.d[tmp5.o]=Lgeptoindexphi;
			Lgeptoindexphi1=Lgeptoindexphi1+1|0;
		}else{
			Lgeptoindexphi=tmp0.a0.a8(tmp0,Lgeptoindexphi)|0;
			tmp11=Larg5[Marg5];
			Larg5[Marg5]={d:tmp11.d,o:tmp11.o+1|0};
			tmp11.d[tmp11.o]=Lgeptoindexphi;
			Lgeptoindexphi1=Lgeptoindexphi1+1|0;
			if((Marg0+Lgeptoindexphi1|0)<Marg2)continue;
		}
		break;
	}
	tmp5=Larg5[Marg5];
	tmp0.a0.a9(tmp0,Larg0,Marg0+Lgeptoindexphi1|0,Larg2,Marg2,tmp5.d,tmp5.o);
	tmp5=Larg5[Marg5];
	Larg5[Marg5]={d:tmp5.d,o:tmp5.o+(tmp2-(Marg0+Lgeptoindexphi1|0)|0)|0};
	if(Larg1===Larg2&&Marg1===Marg2){
		Larg4[Marg4]={d:tmp5.d,o:tmp5.o+(tmp2-(Marg0+Lgeptoindexphi1|0)|0)|0};
		return;
	}
	Larg4[Marg4]={d:Larg3,o:Marg3+((Marg1)-(Marg0)|0)|0};
}
function __ZNKSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_RSt8ios_basecd(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var LmergedArray=null,tmp1=0,tmp2=null,tmp3=0,LmergedArray30=null,LmergedArray30o=0,tmp5=0,tmp6=null,tmp6o=0,tmp7=null,tmp7o=0,tmp8=null,tmp8o=0,tmp9=null;
	LmergedArray=new Uint8Array(95);
	LmergedArray[0]=37;
	LmergedArray[1]=0;
	LmergedArray[2]=0;
	LmergedArray[3]=0;
	LmergedArray[4]=0;
	LmergedArray[5]=0;
	LmergedArray[6]=0;
	LmergedArray[7]=0;
	tmp3=Larg3.i1|0;
	if((tmp3&2048|0)!==0){
		LmergedArray[1]=43;
		LmergedArray30o=0+2|0;
		LmergedArray30=LmergedArray;
	}else{
		LmergedArray30o=0+1|0;
		LmergedArray30=LmergedArray;
	}
	if((tmp3&1024|0)!==0){
		LmergedArray30[LmergedArray30o]=35;
		LmergedArray30o=LmergedArray30o+1|0;
		LmergedArray30=LmergedArray30;
	}
	tmp5=tmp3&260;
	if((tmp5|0)===260){
		tmp1=0;
	}else{
		LmergedArray30[LmergedArray30o]=46;
		LmergedArray30[LmergedArray30o+1|0]=42;
		LmergedArray30o=LmergedArray30o+2|0;
		LmergedArray30=LmergedArray30;
		tmp1=1;
	}
	a:{
		if(tmp5<<23<33554432){
			if((tmp5&511)===256){
				tmp3=(tmp3&16384|0)!==0?69|0:101|0;
				break a;
			}
		}else if((tmp5&511)===4){
			tmp3=(tmp3&16384|0)!==0?70|0:102|0;
			break a;
		}
		if((tmp5|0)===260){
			tmp3=(tmp3&16384|0)!==0?65|0:97|0;
		}else{
			tmp3=(tmp3&16384|0)!==0?71|0:103|0;
		}
	}
	LmergedArray30[LmergedArray30o]=tmp3;
	LmergedArray30=[nullObj,nullObj];
	LmergedArray30[0]={d:LmergedArray,o:8};
	if(tmp1){
		tmp3=__ZSt12__snprintf_lPcjPvPKcz(LmergedArray,8,30,nullObj,LmergedArray,0,Larg3.i2|0,Larg5)|0;
	}else{
		tmp3=__ZSt12__snprintf_lPcjPvPKcz(LmergedArray,8,30,nullObj,LmergedArray,0,Larg5)|0;
	}
	if((tmp3|0)>29){
		tmp3=__ZSt12__asprintf_lPPcPvPKcz(LmergedArray30,0,nullObj,LmergedArray,0,Larg3.i2|0,Larg5)|0;
		tmp6=LmergedArray30[0];
		tmp6o=tmp6.o;
		tmp6=tmp6.d;
	}else{
		tmp6o=8;
		tmp6=LmergedArray;
	}
	a:{
		b:switch(Larg3.i1&176){
			case 16:
			tmp5=tmp6[tmp6o]|0;
			switch(tmp5&255){
				case 45:
				case 43:
				tmp7o=tmp6o+1|0;
				tmp7=tmp6;
				break a;
				default:
				if((tmp3|0)<=1)break b;
				if((tmp5&255)!==48)break b;
				switch(tmp6[tmp6o+1|0]|0){
					case 120:
					case 88:
					tmp7o=tmp6o+2|0;
					tmp7=tmp6;
					break a;
					default:
					break b;
				}
			}
			case 32:
			tmp7o=tmp6o+tmp3|0;
			tmp7=tmp6;
			break a;
			default:
		}
		tmp7o=tmp6o;
		tmp7=tmp6;
	}
	if(tmp6===LmergedArray&&tmp6o===8){
		tmp8o=38;
		tmp8=LmergedArray;
	}else{
		tmp8=new Uint8Array((tmp3<<1)/1|0);
		tmp8o=0;
		tmp8=tmp8;
	}
	tmp9=Larg3.a7.a0;
	tmp9.i1=(tmp9.i1|0)+1|0;
	__ZNSt9__num_putIcE23__widen_and_group_floatEPcS1_S1_S1_RS1_S2_RKSt6locale(tmp6,tmp6o,tmp7,tmp7o,tmp6,tmp6o+tmp3|0,tmp8,tmp8o,LmergedArray30,0,LmergedArray30,1,tmp9);
	tmp3=tmp9.i1|0;
	tmp9.i1=tmp3-1|0;
	if((tmp3|0)===0)tmp9.a0.a3(tmp9);
	tmp6={a0:null};
	tmp7=LmergedArray30[0];
	tmp9=LmergedArray30[1];
	tmp2={a0:null};
	tmp2.a0=Larg2.a0;
	__ZSt16__pad_and_outputIcSt11char_traitsIcEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(tmp6,tmp2,tmp8,tmp8o,tmp7.d,tmp7.o,tmp9.d,tmp9.o,Larg3,Larg4);
	tmp7=tmp6.a0;
	Larg2.a0=tmp7;
	Larg0.a0=tmp7;
}
function __ZNKSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_RSt8ios_basecy(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5){
	var LmergedArray=null,LmergedArray33=null,tmp2=null,tmp3=0,tmp4=0,tmp5=0,tmp6=null,tmp6o=0,tmp7=null;
	tmp3=Larg5[Marg5+1|0]|0;
	tmp4=Larg5[Marg5]|0;
	LmergedArray=new Uint8Array(74);
	LmergedArray[0]=37;
	LmergedArray[1]=0;
	LmergedArray[2]=0;
	LmergedArray[3]=0;
	LmergedArray[4]=0;
	LmergedArray[5]=0;
	LmergedArray[6]=0;
	LmergedArray[7]=0;
	tmp5=Larg3.i1|0;
	if((tmp5&2048|0)!==0){
		LmergedArray[1]=43;
		tmp6o=0+2|0;
		tmp6=LmergedArray;
	}else{
		tmp6o=0+1|0;
		tmp6=LmergedArray;
	}
	if((tmp5&512|0)!==0){
		tmp6[tmp6o]=35;
		tmp6o=tmp6o+1|0;
		tmp6=tmp6;
	}
	tmp6[tmp6o]=108;
	tmp6[tmp6o+1|0]=108;
	switch(tmp5&74&127){
		case 64:
		tmp5=111;
		break;
		case 8:
		tmp5=(tmp5&16384|0)!==0?88|0:120|0;
		break;
		default:
		tmp5=117;
	}
	tmp6[tmp6o+2|0]=tmp5;
	tmp6=new Int32Array(2);
	tmp6[0]=tmp4;
	tmp6[1]=tmp3;
	tmp3=__ZSt12__snprintf_lPcjPvPKcz(LmergedArray,8,23,nullObj,LmergedArray,0,{d:tmp6,o:0})|0;
	a:{
		b:switch(Larg3.i1&176){
			case 16:
			tmp4=LmergedArray[8]|0;
			switch(tmp4&255){
				case 45:
				case 43:
				tmp6o=8+1|0;
				tmp6=LmergedArray;
				break a;
				default:
				if((tmp3|0)<=1)break b;
				if((tmp4&255)!==48)break b;
				switch(LmergedArray[9]|0){
					case 120:
					case 88:
					tmp6o=8+2|0;
					tmp6=LmergedArray;
					break a;
					default:
					break b;
				}
			}
			case 32:
			tmp6o=8+tmp3|0;
			tmp6=LmergedArray;
			break a;
			default:
		}
		tmp6o=8;
		tmp6=LmergedArray;
	}
	LmergedArray33=[nullObj,nullObj];
	tmp7=Larg3.a7.a0;
	tmp7.i1=(tmp7.i1|0)+1|0;
	__ZNSt9__num_putIcE21__widen_and_group_intEPcS1_S1_S1_RS1_S2_RKSt6locale(LmergedArray,8,tmp6,tmp6o,LmergedArray,8+tmp3|0,LmergedArray,31,LmergedArray33,0,LmergedArray33,1,tmp7);
	tmp3=tmp7.i1|0;
	tmp7.i1=tmp3-1|0;
	if((tmp3|0)===0)tmp7.a0.a3(tmp7);
	tmp6=LmergedArray33[0];
	tmp7=LmergedArray33[1];
	tmp2={a0:null};
	tmp2.a0=Larg2.a0;
	__ZSt16__pad_and_outputIcSt11char_traitsIcEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(Larg0,tmp2,LmergedArray,31,tmp6.d,tmp6.o,tmp7.d,tmp7.o,Larg3,Larg4);
}
function __ZNSt9__num_putIcE21__widen_and_group_intEPcS1_S1_S1_RS1_S2_RKSt6locale(Larg0,Marg0,Larg1,Marg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4,Larg5,Marg5,L$p0$p0$pval){
	var tmp0=null,tmp1=null,tmp2=0,Lgeptoindexphi=0,tmp4=null,Lgeptoindexphi4=0,Lgeptoindexphi8=0,tmp7=0,tmp8=0,tmp9=0,tmp10=null;
	if((__ZNSt5ctypeIcE2idE.i0&255)!==0){
		Lgeptoindexphi=__ZNSt5ctypeIcE2idE.i1|0;
	}else{
		Lgeptoindexphi=(__ZNSt6locale2id9__next_idE|0)+1|0;
		__ZNSt6locale2id9__next_idE=Lgeptoindexphi;
		__ZNSt5ctypeIcE2idE.i1=Lgeptoindexphi;
		__ZNSt5ctypeIcE2idE.i0=1;
	}
	tmp4=L$p0$p0$pval.a2.a0;
	tmp0=tmp4[Lgeptoindexphi-1|0];
	tmp4=tmp4[(__ZNSt8numpunctIcE2idE$p1|0)-1|0];
	tmp1={i0:0,i1:0,a2:nullArray};
	tmp4.a0.a6(tmp1,tmp4);
	if((tmp1.i1|0)!==0){
		Larg5[Marg5]={d:Larg3,o:Marg3};
		Lgeptoindexphi=Larg0[Marg0]|0;
		switch(Lgeptoindexphi&255){
			case 45:
			case 43:
			Lgeptoindexphi=tmp0.a0.a8(tmp0,Lgeptoindexphi)|0;
			tmp10=Larg5[Marg5];
			Larg5[Marg5]={d:tmp10.d,o:tmp10.o+1|0};
			tmp10.d[tmp10.o]=Lgeptoindexphi;
			Lgeptoindexphi=1;
			break;
			default:
			Lgeptoindexphi=0;
		}
		a:if(((Marg2)-(Marg0+Lgeptoindexphi|0)|0)>1)if((Larg0[Marg0+Lgeptoindexphi|0]&255)===48){
			switch(Larg0[(Marg0+Lgeptoindexphi|0)+1|0]|0){
				case 120:
				case 88:
				Lgeptoindexphi4=tmp0.a0.a8(tmp0,48)|0;
				tmp10=Larg5[Marg5];
				Larg5[Marg5]={d:tmp10.d,o:tmp10.o+1|0};
				tmp10.d[tmp10.o]=Lgeptoindexphi4;
				Lgeptoindexphi4=tmp0.a0.a8(tmp0,Larg0[(Marg0+Lgeptoindexphi|0)+1|0]|0)|0;
				tmp10=Larg5[Marg5];
				Larg5[Marg5]={d:tmp10.d,o:tmp10.o+1|0};
				tmp10.d[tmp10.o]=Lgeptoindexphi4;
				Lgeptoindexphi=Lgeptoindexphi+2|0;
				break a;
				default:
			}
		}
		if(Larg0!==Larg2||(Marg0+Lgeptoindexphi|0)!==Marg2)if((Marg2+ -1|0)>(Marg0+Lgeptoindexphi|0)){
			Lgeptoindexphi8=Lgeptoindexphi;
			Lgeptoindexphi4=-1;
			while(1){
				tmp7=Larg0[Marg0+Lgeptoindexphi8|0]|0;
				Larg0[Marg0+Lgeptoindexphi8|0]=Larg2[Marg2+Lgeptoindexphi4|0]|0;
				Larg2[Marg2+Lgeptoindexphi4|0]=tmp7;
				Lgeptoindexphi4=Lgeptoindexphi4-1|0;
				Lgeptoindexphi8=Lgeptoindexphi8+1|0;
				if((Marg0+Lgeptoindexphi8|0)<(Marg2+Lgeptoindexphi4|0))continue;
				break;
			}
		}
		Lgeptoindexphi4=tmp4.a0.a5(tmp4)|0;
		if((Marg0+Lgeptoindexphi|0)<Marg2){
			Lgeptoindexphi8=Lgeptoindexphi;
			tmp8=0;
			tmp7=0;
			while(1){
				tmp4=tmp1.a2;
				tmp9=tmp4[tmp7]|0;
				tmp2=(tmp8|0)===(tmp9<<24>>24|0)?1:0;
				if((tmp9&255)!==0)if(tmp2){
					tmp4=Larg5[Marg5];
					Larg5[Marg5]={d:tmp4.d,o:tmp4.o+1|0};
					tmp4.d[tmp4.o]=Lgeptoindexphi4;
					tmp8=tmp1.i1|0;
					tmp7=tmp7+(tmp7>>>0<tmp8-1>>>0?1:0)|0;
					tmp8=0;
				}
				tmp9=tmp0.a0.a8(tmp0,Larg0[Marg0+Lgeptoindexphi8|0]|0)|0;
				tmp4=Larg5[Marg5];
				Larg5[Marg5]={d:tmp4.d,o:tmp4.o+1|0};
				tmp4.d[tmp4.o]=tmp9;
				Lgeptoindexphi8=Lgeptoindexphi8+1|0;
				if(Larg0!==Larg2||(Marg0+Lgeptoindexphi8|0)!==Marg2){
					tmp8=tmp8+1|0;
					continue;
				}
				break;
			}
		}
		tmp4=Larg5[Marg5];
		Lgeptoindexphi4=(Marg0+Lgeptoindexphi|0)-(Marg0)|0;
		if(Larg3!==tmp4.d||(Marg3+Lgeptoindexphi4|0)!==tmp4.o)if((tmp4.o+ -1|0)>(Marg3+Lgeptoindexphi4|0)){
			Lgeptoindexphi=-1;
			while(1){
				Lgeptoindexphi8=Larg3[Marg3+Lgeptoindexphi4|0]|0;
				Larg3[Marg3+Lgeptoindexphi4|0]=tmp4.d[tmp4.o+Lgeptoindexphi|0]|0;
				tmp4.d[tmp4.o+Lgeptoindexphi|0]=Lgeptoindexphi8;
				Lgeptoindexphi=Lgeptoindexphi-1|0;
				Lgeptoindexphi4=Lgeptoindexphi4+1|0;
				if((Marg3+Lgeptoindexphi4|0)<(tmp4.o+Lgeptoindexphi|0))continue;
				break;
			}
		}
	}else{
		tmp0.a0.a9(tmp0,Larg0,Marg0,Larg2,Marg2,Larg3,Marg3);
		Larg5[Marg5]={d:Larg3,o:Marg3+((Marg2)-(Marg0)|0)|0};
	}
	if(Larg1===Larg2&&Marg1===Marg2){
		tmp4=Larg5[Marg5];
		Larg4[Marg4]=tmp4;
		return;
	}
	Larg4[Marg4]={d:Larg3,o:Marg3+((Marg1)-(Marg0)|0)|0};
}
function __ZNKSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_RSt8ios_basecm(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var LmergedArray=null,LmergedArray27=null,tmp2=null,tmp3=0,tmp4=0,tmp5=null,tmp5o=0,tmp6=null;
	LmergedArray=new Uint8Array(39);
	LmergedArray[0]=37;
	LmergedArray[1]=0;
	LmergedArray[2]=0;
	LmergedArray[3]=0;
	LmergedArray[4]=0;
	LmergedArray[5]=0;
	tmp4=Larg3.i1|0;
	if((tmp4&2048|0)!==0){
		LmergedArray[1]=43;
		tmp5o=0+2|0;
		tmp5=LmergedArray;
	}else{
		tmp5o=0+1|0;
		tmp5=LmergedArray;
	}
	if((tmp4&512|0)!==0){
		tmp5[tmp5o]=35;
		tmp5o=tmp5o+1|0;
		tmp5=tmp5;
	}
	tmp5[tmp5o]=108;
	switch(tmp4&74&127){
		case 64:
		tmp4=111;
		break;
		case 8:
		tmp4=(tmp4&16384|0)!==0?88|0:120|0;
		break;
		default:
		tmp4=117;
	}
	tmp5[tmp5o+1|0]=tmp4;
	tmp4=__ZSt12__snprintf_lPcjPvPKcz(LmergedArray,6,12,nullObj,LmergedArray,0,Larg5)|0;
	a:{
		b:switch(Larg3.i1&176){
			case 16:
			tmp3=LmergedArray[6]|0;
			switch(tmp3&255){
				case 45:
				case 43:
				tmp5o=6+1|0;
				tmp5=LmergedArray;
				break a;
				default:
				if((tmp4|0)<=1)break b;
				if((tmp3&255)!==48)break b;
				switch(LmergedArray[7]|0){
					case 120:
					case 88:
					tmp5o=6+2|0;
					tmp5=LmergedArray;
					break a;
					default:
					break b;
				}
			}
			case 32:
			tmp5o=6+tmp4|0;
			tmp5=LmergedArray;
			break a;
			default:
		}
		tmp5o=6;
		tmp5=LmergedArray;
	}
	LmergedArray27=[nullObj,nullObj];
	tmp6=Larg3.a7.a0;
	tmp6.i1=(tmp6.i1|0)+1|0;
	__ZNSt9__num_putIcE21__widen_and_group_intEPcS1_S1_S1_RS1_S2_RKSt6locale(LmergedArray,6,tmp5,tmp5o,LmergedArray,6+tmp4|0,LmergedArray,18,LmergedArray27,0,LmergedArray27,1,tmp6);
	tmp4=tmp6.i1|0;
	tmp6.i1=tmp4-1|0;
	if((tmp4|0)===0)tmp6.a0.a3(tmp6);
	tmp5=LmergedArray27[0];
	tmp6=LmergedArray27[1];
	tmp2={a0:null};
	tmp2.a0=Larg2.a0;
	__ZSt16__pad_and_outputIcSt11char_traitsIcEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(Larg0,tmp2,LmergedArray,18,tmp5.d,tmp5.o,tmp6.d,tmp6.o,Larg3,Larg4);
}
function __ZNKSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_RSt8ios_basecx(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5){
	var LmergedArray=null,LmergedArray33=null,tmp2=null,tmp3=0,tmp4=0,tmp5=0,tmp6=null,tmp6o=0,tmp7=null;
	tmp3=Larg5[Marg5+1|0]|0;
	tmp4=Larg5[Marg5]|0;
	LmergedArray=new Uint8Array(74);
	LmergedArray[0]=37;
	LmergedArray[1]=0;
	LmergedArray[2]=0;
	LmergedArray[3]=0;
	LmergedArray[4]=0;
	LmergedArray[5]=0;
	LmergedArray[6]=0;
	LmergedArray[7]=0;
	tmp5=Larg3.i1|0;
	if((tmp5&2048|0)!==0){
		LmergedArray[1]=43;
		tmp6o=0+2|0;
		tmp6=LmergedArray;
	}else{
		tmp6o=0+1|0;
		tmp6=LmergedArray;
	}
	if((tmp5&512|0)!==0){
		tmp6[tmp6o]=35;
		tmp6o=tmp6o+1|0;
		tmp6=tmp6;
	}
	tmp6[tmp6o]=108;
	tmp6[tmp6o+1|0]=108;
	switch(tmp5&74&127){
		case 64:
		tmp5=111;
		break;
		case 8:
		tmp5=(tmp5&16384|0)!==0?88|0:120|0;
		break;
		default:
		tmp5=100;
	}
	tmp6[tmp6o+2|0]=tmp5;
	tmp6=new Int32Array(2);
	tmp6[0]=tmp4;
	tmp6[1]=tmp3;
	tmp3=__ZSt12__snprintf_lPcjPvPKcz(LmergedArray,8,23,nullObj,LmergedArray,0,{d:tmp6,o:0})|0;
	a:{
		b:switch(Larg3.i1&176){
			case 16:
			tmp4=LmergedArray[8]|0;
			switch(tmp4&255){
				case 45:
				case 43:
				tmp6o=8+1|0;
				tmp6=LmergedArray;
				break a;
				default:
				if((tmp3|0)<=1)break b;
				if((tmp4&255)!==48)break b;
				switch(LmergedArray[9]|0){
					case 120:
					case 88:
					tmp6o=8+2|0;
					tmp6=LmergedArray;
					break a;
					default:
					break b;
				}
			}
			case 32:
			tmp6o=8+tmp3|0;
			tmp6=LmergedArray;
			break a;
			default:
		}
		tmp6o=8;
		tmp6=LmergedArray;
	}
	LmergedArray33=[nullObj,nullObj];
	tmp7=Larg3.a7.a0;
	tmp7.i1=(tmp7.i1|0)+1|0;
	__ZNSt9__num_putIcE21__widen_and_group_intEPcS1_S1_S1_RS1_S2_RKSt6locale(LmergedArray,8,tmp6,tmp6o,LmergedArray,8+tmp3|0,LmergedArray,31,LmergedArray33,0,LmergedArray33,1,tmp7);
	tmp3=tmp7.i1|0;
	tmp7.i1=tmp3-1|0;
	if((tmp3|0)===0)tmp7.a0.a3(tmp7);
	tmp6=LmergedArray33[0];
	tmp7=LmergedArray33[1];
	tmp2={a0:null};
	tmp2.a0=Larg2.a0;
	__ZSt16__pad_and_outputIcSt11char_traitsIcEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(Larg0,tmp2,LmergedArray,31,tmp6.d,tmp6.o,tmp7.d,tmp7.o,Larg3,Larg4);
}
function __ZNKSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_RSt8ios_basecl(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var LmergedArray=null,LmergedArray27=null,tmp2=null,tmp3=0,tmp4=0,tmp5=null,tmp5o=0,tmp6=null;
	LmergedArray=new Uint8Array(39);
	LmergedArray[0]=37;
	LmergedArray[1]=0;
	LmergedArray[2]=0;
	LmergedArray[3]=0;
	LmergedArray[4]=0;
	LmergedArray[5]=0;
	tmp4=Larg3.i1|0;
	if((tmp4&2048|0)!==0){
		LmergedArray[1]=43;
		tmp5o=0+2|0;
		tmp5=LmergedArray;
	}else{
		tmp5o=0+1|0;
		tmp5=LmergedArray;
	}
	if((tmp4&512|0)!==0){
		tmp5[tmp5o]=35;
		tmp5o=tmp5o+1|0;
		tmp5=tmp5;
	}
	tmp5[tmp5o]=108;
	switch(tmp4&74&127){
		case 64:
		tmp4=111;
		break;
		case 8:
		tmp4=(tmp4&16384|0)!==0?88|0:120|0;
		break;
		default:
		tmp4=100;
	}
	tmp5[tmp5o+1|0]=tmp4;
	tmp4=__ZSt12__snprintf_lPcjPvPKcz(LmergedArray,6,12,nullObj,LmergedArray,0,Larg5)|0;
	a:{
		b:switch(Larg3.i1&176){
			case 16:
			tmp3=LmergedArray[6]|0;
			switch(tmp3&255){
				case 45:
				case 43:
				tmp5o=6+1|0;
				tmp5=LmergedArray;
				break a;
				default:
				if((tmp4|0)<=1)break b;
				if((tmp3&255)!==48)break b;
				switch(LmergedArray[7]|0){
					case 120:
					case 88:
					tmp5o=6+2|0;
					tmp5=LmergedArray;
					break a;
					default:
					break b;
				}
			}
			case 32:
			tmp5o=6+tmp4|0;
			tmp5=LmergedArray;
			break a;
			default:
		}
		tmp5o=6;
		tmp5=LmergedArray;
	}
	LmergedArray27=[nullObj,nullObj];
	tmp6=Larg3.a7.a0;
	tmp6.i1=(tmp6.i1|0)+1|0;
	__ZNSt9__num_putIcE21__widen_and_group_intEPcS1_S1_S1_RS1_S2_RKSt6locale(LmergedArray,6,tmp5,tmp5o,LmergedArray,6+tmp4|0,LmergedArray,18,LmergedArray27,0,LmergedArray27,1,tmp6);
	tmp4=tmp6.i1|0;
	tmp6.i1=tmp4-1|0;
	if((tmp4|0)===0)tmp6.a0.a3(tmp6);
	tmp5=LmergedArray27[0];
	tmp6=LmergedArray27[1];
	tmp2={a0:null};
	tmp2.a0=Larg2.a0;
	__ZSt16__pad_and_outputIcSt11char_traitsIcEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(Larg0,tmp2,LmergedArray,18,tmp5.d,tmp5.o,tmp6.d,tmp6.o,Larg3,Larg4);
}
function __ZNKSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_RSt8ios_basecb(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var tmp0=0,tmp1=null,tmp2=null,Lgeptoindexphi=0,tmp4=null,tmp5=null,tmp6=null,tmp6o=0;
	if((Larg3.i1&1|0)!==0){
		tmp2=Larg3.a7.a0;
		Lgeptoindexphi=tmp2.i1|0;
		tmp4=tmp2.a2.a0;
		tmp4=tmp4[(__ZNSt8numpunctIcE2idE$p1|0)-1|0];
		tmp2.i1=Lgeptoindexphi;
		if((Lgeptoindexphi|0)===-1)tmp2.a0.a3(tmp2);
		tmp2={i0:0,i1:0,a2:nullArray};
		tmp5=tmp4.a0;
		if(Larg5)tmp5.a7(tmp2,tmp4);
		else tmp5.a8(tmp2,tmp4);
		if((tmp2.i1|0)!==0){
			tmp4=tmp2.a2;
			tmp5=Larg2.a0;
			Lgeptoindexphi=0;
			while(1){
				tmp0=tmp4[Lgeptoindexphi]|0;
				if(tmp5!==null){
					tmp6o=tmp5.a6o;
					tmp6=tmp5.a6;
					tmp1=tmp5.a7;
					if(tmp6===tmp1&&tmp6o===0){
						if((tmp5.a0.a14(tmp5,tmp0&255)|0|0)===-1){
							Larg2.a0=null;
							tmp5=null;
						}
					}else{
						tmp5.a6=tmp6;
						tmp5.a6o=tmp6o+1|0;
						tmp6[tmp6o]=tmp0;
					}
				}else{
					tmp5=null;
				}
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				tmp6=tmp2.a2;
				if(tmp4!==tmp6||(0+Lgeptoindexphi|0)!==(0+(tmp2.i1|0)|0))continue;
				break;
			}
		}
		Larg0.a0=Larg2.a0;
	}else{
		tmp4=Larg1.a0.a7;
		tmp2={a0:null};
		tmp2.a0=Larg2.a0;
		tmp4(Larg0,Larg1,tmp2,Larg3,Larg4,Larg5?1:0);
	}
}
function __ZNSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEED0Ev(Larg0){
}
function __ZNSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEED2Ev(Larg0){
}
function __ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjRPv(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6){
	var LmergedArray=null,tmp1=null,tmp2=null,tmp3=null,tmp4=0,tmp5=null,tmp6=null,tmp7=0,L$ppre=null,L$ppreo=0,tmp9=null,tmp9o=0,tmp10=null,tmp10o=0,tmp11=null,tmp12=0;
	LmergedArray=new Int32Array(67);
	tmp1={i0:0,i1:0,a2:nullArray};
	tmp1.i0=0;
	tmp1.i1=0;
	tmp1.a2=nullArray;
	tmp5=Larg4.a7.a0;
	tmp5.i1=(tmp5.i1|0)+1|0;
	tmp6=tmp5.a2.a0;
	tmp6=tmp6[(__ZNSt5ctypeIwE2idE$p1|0)-1|0];
	tmp6.a0.a13(tmp6,__ZNSt14__num_get_base5__srcE,0,__ZNSt14__num_get_base5__srcE,26,LmergedArray,0);
	tmp7=tmp5.i1|0;
	tmp5.i1=tmp7-1|0;
	if((tmp7|0)===0)tmp5.a0.a3(tmp5);
	tmp5={i0:0,i1:0,a2:nullArray};
	tmp5.i0=0;
	tmp5.i1=0;
	tmp5.a2=nullArray;
	__ZNSs6appendEjc(tmp5,1);
	L$ppre=tmp5.a2;
	tmp2=[nullObj];
	tmp2[0]={d:L$ppre,o:0};
	tmp3=[nullObj];
	tmp3[0]={d:LmergedArray,o:26};
	LmergedArray[66]=0;
	tmp6=Larg2.a0;
	while(1){
		if(tmp6!==null){
			tmp9o=tmp6.a3o;
			tmp9=tmp6.a3;
			tmp10=tmp6.a4;
			if(tmp9===tmp10&&tmp9o===0){
				tmp7=tmp6.a0.a10(tmp6)|0;
			}else{
				tmp7=tmp9[tmp9o]|0;
			}
			if((tmp7|0)===-1){
				Larg2.a0=null;
				tmp7=1;
				tmp6=null;
			}else{
				tmp7=0;
			}
		}else{
			tmp7=1;
			tmp6=null;
		}
		tmp9=Larg3.a0;
		a:{
			if(tmp9!==null){
				tmp10o=tmp9.a3o;
				tmp10=tmp9.a3;
				tmp11=tmp9.a4;
				if(tmp10===tmp11&&tmp10o===0){
					tmp12=tmp9.a0.a10(tmp9)|0;
				}else{
					tmp12=tmp10[tmp10o]|0;
				}
				if((tmp12|0)!==-1){
					if(tmp7)break a;
					break;
				}
				Larg3.a0=null;
			}
			if(tmp7){
				tmp9=null;
				break;
			}
			tmp9=null;
		}
		tmp10=tmp2[0];
		tmp7=tmp5.i1|0;
		if(tmp10.d===L$ppre&&tmp10.o===(0+tmp7|0)){
			tmp12=tmp7<<1;
			if(tmp12>>>0<tmp7>>>0){
				L$ppre[tmp12]=0;
				tmp5.i1=tmp12;
			}else __ZNSs6appendEjc(tmp5,tmp7);
			tmp12=tmp5.i0|0;
			if(tmp12>>>0<2){
				tmp12=0;
			}else{
				tmp12=(tmp12& -2)-1|0;
			}
			tmp4=tmp5.i1|0;
			if(tmp12>>>0<tmp4>>>0){
				L$ppre=tmp5.a2;
				L$ppre[tmp12]=0;
				tmp5.i1=tmp12;
			}else{
				__ZNSs6appendEjc(tmp5,tmp12-tmp4|0);
				L$ppre=tmp5.a2;
			}
			tmp2[0]={d:L$ppre,o:0+tmp7|0};
		}
		tmp10o=tmp6.a3o;
		tmp10=tmp6.a3;
		tmp11=tmp6.a4;
		if(tmp10===tmp11&&tmp10o===0){
			tmp7=tmp6.a0.a10(tmp6)|0;
		}else{
			tmp7=tmp10[tmp10o]|0;
		}
		if((__ZNSt9__num_getIwE17__stage2_int_loopEwiPcRS1_RjwRKSsPjRS6_Pw(tmp7,16,L$ppre,0,tmp2,0,LmergedArray,66,0,tmp1,LmergedArray,26,tmp3,0,LmergedArray,0)|0|0)===0){
			tmp9o=tmp6.a3o;
			tmp9=tmp6.a3;
			tmp10=tmp6.a4;
			if(tmp9===tmp10&&tmp9o===0)tmp6.a0.a11(tmp6)|0;
			else{
				tmp6.a3=tmp9;
				tmp6.a3o=tmp9o+1|0;
			}
			continue;
		}
		break;
	}
	tmp10=tmp2[0];
	tmp7=(tmp10.o)-(0)|0;
	tmp12=tmp5.i1|0;
	if(tmp7>>>0<tmp12>>>0){
		L$ppre[tmp7]=0;
		tmp5.i1=tmp7;
	}else __ZNSs6appendEjc(tmp5,tmp7-tmp12|0);
	L$ppre=tmp5.a2;
	if((__ZSt10__sscanf_lPKcPvS0_z(L$ppre,nullObj,nullObj,Larg6)|0|0)!==1)Larg5[Marg5]=4;
	if(tmp6!==null){
		L$ppreo=tmp6.a3o;
		L$ppre=tmp6.a3;
		tmp10=tmp6.a4;
		if(L$ppre===tmp10&&L$ppreo===0){
			tmp7=tmp6.a0.a10(tmp6)|0;
		}else{
			tmp7=L$ppre[L$ppreo]|0;
		}
		if((tmp7|0)===-1){
			Larg2.a0=null;
			tmp7=1;
		}else{
			tmp7=0;
		}
	}else{
		tmp7=1;
	}
	a:{
		b:{
			if(tmp9!==null){
				L$ppreo=tmp9.a3o;
				L$ppre=tmp9.a3;
				tmp10=tmp9.a4;
				if(L$ppre===tmp10&&L$ppreo===0){
					tmp12=tmp9.a0.a10(tmp9)|0;
				}else{
					tmp12=L$ppre[L$ppreo]|0;
				}
				if((tmp12|0)!==-1){
					if(tmp7)break a;
					break b;
				}
				Larg3.a0=null;
			}
			if(!(tmp7))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=Larg2.a0;
}
function __ZSt10__sscanf_lPKcPvS0_z(Larg0,Larg1,Larg2){
	var tmp0=null,tmp1=null,tmp2=null,L$poptgep$poptgep6$poptgepsqueezed=null,Lgeptoindexphi=0;
	tmp0=[nullObj];
	tmp0[0]={d:arguments,o:__ZSt10__sscanf_lPKcPvS0_z.length};
	tmp1=tmp0[0];
	tmp2=new constructor_struct$p_Z7__sFILE();
	tmp2.i3=516;
	tmp2.a0=Larg0;
	tmp2.a0o=0;
	L$poptgep$poptgep6$poptgepsqueezed=tmp2.a4;
	L$poptgep$poptgep6$poptgepsqueezed.a0=Larg0;
	L$poptgep$poptgep6$poptgepsqueezed.a0o=0;
	if((Larg0[0]&255)!==0){
		Lgeptoindexphi=0;
		while(1){
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			if((Larg0[Lgeptoindexphi]&255)!==0)continue;
			break;
		}
	}else{
		Lgeptoindexphi=0;
	}
	Lgeptoindexphi=(0+Lgeptoindexphi|0)-(0)|0;
	tmp2.i1=Lgeptoindexphi;
	L$poptgep$poptgep6$poptgepsqueezed.i1=Lgeptoindexphi;
	tmp2.a8=___seofread;
	tmp2.a12.a0=nullArray;
	tmp2.a12.a0o=0;
	tmp2.a16.a0=nullArray;
	tmp2.a16.a0o=0;
	tmp2.i3=-65020;
	Lgeptoindexphi=___ssvfscanf_r(tmp2,_$pstr$p8$p429,tmp1.d,tmp1.o)|0;
	tmp0[0]=null;
	return Lgeptoindexphi|0;
}
function __ZNSt9__num_getIwE17__stage2_int_loopEwiPcRS1_RjwRKSsPjRS6_Pw(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4,Larg5,Larg6,Larg7,Marg7,Larg8,Marg8,Larg9,Marg9){
	var tmp0=null,tmp0o=0,tmp1=0,tmp2=null,tmp3=0,tmp4=0;
	tmp2=Larg3[Marg3];
	tmp3=tmp2.d===Larg2&&tmp2.o===Marg2?1:0;
	a:if(tmp3){
		tmp4=Larg9[Marg9+24|0]|0;
		if((tmp4|0)!==(Larg0|0))if((Larg9[Marg9+25|0]|0)!==(Larg0|0))break a;
		Larg3[Marg3]={d:Larg2,o:Marg2+1|0};
		Larg2[Marg2]=(tmp4|0)===(Larg0|0)?43|0:45|0;
		Larg4[Marg4]=0;
		return 0|0;
	}
	tmp4=Larg6.i1|0;
	if((Larg0|0)===(Larg5|0))if((tmp4|0)!==0){
		tmp2=Larg8[Marg8];
		if((((tmp2.o)*4)-((Marg7)*4)|0)<160){
			tmp3=Larg4[Marg4]|0;
			Larg8[Marg8]={d:tmp2.d,o:tmp2.o+1|0};
			tmp2.d[tmp2.o]=tmp3;
			Larg4[Marg4]=0;
			return 0|0;
		}
		return 0|0;
	}
	if((Larg9[Marg9]|0)===(Larg0|0)){
		tmp0o=Marg9;
		tmp0=Larg9;
	}else if((Larg9[Marg9+1|0]|0)===(Larg0|0)){
		tmp0o=Marg9+1|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+2|0]|0)===(Larg0|0)){
		tmp0o=Marg9+2|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+3|0]|0)===(Larg0|0)){
		tmp0o=Marg9+3|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+4|0]|0)===(Larg0|0)){
		tmp0o=Marg9+4|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+5|0]|0)===(Larg0|0)){
		tmp0o=Marg9+5|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+6|0]|0)===(Larg0|0)){
		tmp0o=Marg9+6|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+7|0]|0)===(Larg0|0)){
		tmp0o=Marg9+7|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+8|0]|0)===(Larg0|0)){
		tmp0o=Marg9+8|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+9|0]|0)===(Larg0|0)){
		tmp0o=Marg9+9|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+10|0]|0)===(Larg0|0)){
		tmp0o=Marg9+10|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+11|0]|0)===(Larg0|0)){
		tmp0o=Marg9+11|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+12|0]|0)===(Larg0|0)){
		tmp0o=Marg9+12|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+13|0]|0)===(Larg0|0)){
		tmp0o=Marg9+13|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+14|0]|0)===(Larg0|0)){
		tmp0o=Marg9+14|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+15|0]|0)===(Larg0|0)){
		tmp0o=Marg9+15|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+16|0]|0)===(Larg0|0)){
		tmp0o=Marg9+16|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+17|0]|0)===(Larg0|0)){
		tmp0o=Marg9+17|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+18|0]|0)===(Larg0|0)){
		tmp0o=Marg9+18|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+19|0]|0)===(Larg0|0)){
		tmp0o=Marg9+19|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+20|0]|0)===(Larg0|0)){
		tmp0o=Marg9+20|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+21|0]|0)===(Larg0|0)){
		tmp0o=Marg9+21|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+22|0]|0)===(Larg0|0)){
		tmp0o=Marg9+22|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+23|0]|0)===(Larg0|0)){
		tmp0o=Marg9+23|0;
		tmp0=Larg9;
	}else if((Larg9[Marg9+24|0]|0)===(Larg0|0)){
		tmp0o=Marg9+24|0;
		tmp0=Larg9;
	}else{
		tmp4=Larg9[Marg9+25|0]|0;
		tmp0o=(tmp4|0)===(Larg0|0)?Marg9+25|0:Marg9+26|0;
		tmp0=((tmp4|0)===(Larg0|0)?Larg9:Larg9);
	}
	tmp4=((tmp0o)*4)-((Marg9)*4)|0;
	if((tmp4|0)>92)return  -1|0;
	tmp1=tmp4>>2;
	switch(Larg1|0){
		case 8:
		case 10:
		if((tmp1|0)<(Larg1|0))break;
		return  -1|0;
		case 16:
		if((tmp4|0)<88)break;
		if(tmp3)return  -1|0;
		if(((tmp2.o)-(Marg2)|0)<3){
			if((tmp2.d[tmp2.o+ -1|0]&255)===48){
				Larg4[Marg4]=0;
				tmp3=__ZNSt14__num_get_base5__srcE[tmp1]|0;
				Larg3[Marg3]={d:tmp2.d,o:tmp2.o+1|0};
				tmp2.d[tmp2.o]=tmp3;
				return 0|0;
			}
			return  -1|0;
		}
		return  -1|0;
		default:
	}
	tmp3=__ZNSt14__num_get_base5__srcE[tmp1]|0;
	Larg3[Marg3]={d:tmp2.d,o:tmp2.o+1|0};
	tmp2.d[tmp2.o]=tmp3;
	Larg4[Marg4]=(Larg4[Marg4]|0)+1|0;
	return 0|0;
}
function __ZNSs6appendEjc(Larg0,Larg1){
	var tmp0=0,tmp1=0,tmp2=null,Lgeptoindexphi3=0,Lgeptoindexphi=0,tmp5=null,Lgeptoindexphi6=0;
	if((Larg1|0)!==0){
		Lgeptoindexphi=Larg0.i0|0;
		if(Lgeptoindexphi>>>0<2){
			Lgeptoindexphi=0;
		}else{
			Lgeptoindexphi=(Lgeptoindexphi& -2)-1|0;
		}
		tmp0=Larg0.i1|0;
		tmp5=Larg0.a2;
		tmp1=tmp0+Larg1|0;
		if(Lgeptoindexphi-tmp0>>>0<Larg1>>>0){
			if(Lgeptoindexphi>>>0<2147483623){
				Lgeptoindexphi<<=1;
				Lgeptoindexphi=(tmp1>>>0<Lgeptoindexphi>>>0?Lgeptoindexphi|0:tmp1|0)+16& -16;
			}else{
				Lgeptoindexphi=-17;
			}
			tmp2=new Uint8Array(Lgeptoindexphi/1|0);
			if((tmp0|0)!==0){
				Lgeptoindexphi6=0;
				Lgeptoindexphi3=0;
				while(1){
					tmp2[Lgeptoindexphi6]=tmp5[Lgeptoindexphi3]|0;
					Lgeptoindexphi6=Lgeptoindexphi6+1|0;
					if(tmp2!==tmp2||(0+tmp0|0)!==(0+Lgeptoindexphi6|0)){
						Lgeptoindexphi3=Lgeptoindexphi3+1|0;
						continue;
					}
					break;
				}
			}
			Larg0.a2=tmp2;
			Larg0.i0=Lgeptoindexphi|1;
			tmp5=tmp2;
		}
		Lgeptoindexphi=0;
		while(1){
			tmp5[(0+tmp0|0)+Lgeptoindexphi|0]=0;
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			if(tmp5!==tmp5||((0+tmp0|0)+Larg1|0)!==((0+tmp0|0)+Lgeptoindexphi|0))continue;
			break;
		}
		Larg0.i1=tmp1;
		tmp5[tmp1]=0;
	}
}
function __ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjRe(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Marg6){
	var tmp0=null,tmp1=null,LmergedArray=null,tmp3=null,tmp4=null,tmp5=null,tmp6=null,LmergedArray57=null,L$psroa$p0$p0$pcopyload=null,L$psroa$p0$p0$pcopyloado=0,L$psroa$p02$p0$pcopyload=null,L$pidx$pval=null,L$ppre$pi=null,L$ppre$pio=0,Lgeptoindexphi=0,Lgeptoindexphi3=0,tmp14=null,tmp14o=0,tmp15=null,Lgeptoindexphi7=0,Lgeptoindexphi12=0,tmp18=-0.,tmp19=0;
	L$psroa$p0$p0$pcopyload=Larg2.a0;
	L$psroa$p02$p0$pcopyload=Larg3.a0;
	L$pidx$pval=Larg4.a7.a0;
	tmp0=[nullObj];
	tmp1=new Int32Array(32);
	LmergedArray=new Int32Array(3);
	tmp3={i0:0,i1:0,a2:nullArray};
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp5=new Int32Array(40);
	tmp6=[nullObj];
	__ZNSt9__num_getIwE19__stage2_float_prepERSt8ios_basePwRwS4_(tmp3,L$pidx$pval,tmp1,0,LmergedArray,0,LmergedArray,1);
	tmp4.i0=0;
	tmp4.i1=0;
	tmp4.a2=nullArray;
	__ZNSs6appendEjc(tmp4,1);
	L$ppre$pi=tmp4.a2;
	tmp0[0]={d:L$ppre$pi,o:0};
	tmp6[0]={d:tmp5,o:0};
	LmergedArray[2]=0;
	LmergedArray57=new Uint8Array(2);
	LmergedArray57[0]=1;
	LmergedArray57[1]=69;
	Lgeptoindexphi=LmergedArray[0]|0;
	Lgeptoindexphi3=LmergedArray[1]|0;
	L$pidx$pval=L$psroa$p0$p0$pcopyload;
	while(1){
		if(L$psroa$p0$p0$pcopyload!==null){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0){
				Lgeptoindexphi7=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
			}else{
				Lgeptoindexphi7=tmp14[tmp14o]|0;
			}
			L$pidx$pval=((Lgeptoindexphi7|0)===-1?null:L$pidx$pval);
			L$psroa$p0$p0$pcopyload=((Lgeptoindexphi7|0)===-1?null:L$psroa$p0$p0$pcopyload);
			Lgeptoindexphi7=(Lgeptoindexphi7|0)===-1?1:0;
		}else{
			Lgeptoindexphi7=1;
			L$psroa$p0$p0$pcopyload=null;
		}
		a:{
			if(L$psroa$p02$p0$pcopyload!==null){
				tmp14o=L$psroa$p02$p0$pcopyload.a3o;
				tmp14=L$psroa$p02$p0$pcopyload.a3;
				tmp15=L$psroa$p02$p0$pcopyload.a4;
				if(tmp14===tmp15&&tmp14o===0){
					Lgeptoindexphi12=L$psroa$p02$p0$pcopyload.a0.a10(L$psroa$p02$p0$pcopyload)|0;
				}else{
					Lgeptoindexphi12=tmp14[tmp14o]|0;
				}
				if((Lgeptoindexphi12|0)!==-1){
					if(Lgeptoindexphi7)break a;
					break;
				}
			}
			if(Lgeptoindexphi7){
				L$psroa$p02$p0$pcopyload=null;
				break;
			}
			L$psroa$p02$p0$pcopyload=null;
		}
		tmp14=tmp0[0];
		Lgeptoindexphi7=tmp4.i1|0;
		if(tmp14.d===L$ppre$pi&&tmp14.o===(0+Lgeptoindexphi7|0)){
			Lgeptoindexphi12=Lgeptoindexphi7<<1;
			if(Lgeptoindexphi12>>>0<Lgeptoindexphi7>>>0){
				L$ppre$pi[Lgeptoindexphi12]=0;
				tmp4.i1=Lgeptoindexphi12;
			}else __ZNSs6appendEjc(tmp4,Lgeptoindexphi7);
			Lgeptoindexphi12=tmp4.i0|0;
			if(Lgeptoindexphi12>>>0<2){
				Lgeptoindexphi12=0;
			}else{
				Lgeptoindexphi12=(Lgeptoindexphi12& -2)-1|0;
			}
			tmp19=tmp4.i1|0;
			if(Lgeptoindexphi12>>>0<tmp19>>>0){
				L$ppre$pi=tmp4.a2;
				L$ppre$pi[Lgeptoindexphi12]=0;
				tmp4.i1=Lgeptoindexphi12;
			}else{
				__ZNSs6appendEjc(tmp4,Lgeptoindexphi12-tmp19|0);
				L$ppre$pi=tmp4.a2;
			}
			tmp0[0]={d:L$ppre$pi,o:0+Lgeptoindexphi7|0};
		}
		tmp14o=L$psroa$p0$p0$pcopyload.a3o;
		tmp14=L$psroa$p0$p0$pcopyload.a3;
		tmp15=L$psroa$p0$p0$pcopyload.a4;
		if(tmp14===tmp15&&tmp14o===0){
			Lgeptoindexphi7=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			Lgeptoindexphi7=tmp14[tmp14o]|0;
		}
		if((__ZNSt9__num_getIwE19__stage2_float_loopEwRbRcPcRS3_wwRKSsPjRS7_RjPw(Lgeptoindexphi7,LmergedArray57,0,LmergedArray57,1,L$ppre$pi,0,tmp0,0,Lgeptoindexphi,Lgeptoindexphi3,tmp3,tmp5,0,tmp6,0,LmergedArray,2,tmp1)|0|0)===0){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0)L$psroa$p0$p0$pcopyload.a0.a11(L$psroa$p0$p0$pcopyload)|0;
			else{
				L$psroa$p0$p0$pcopyload.a3=tmp14;
				L$psroa$p0$p0$pcopyload.a3o=tmp14o+1|0;
			}
			continue;
		}
		break;
	}
	Lgeptoindexphi=LmergedArray57[0]|0;
	if((tmp3.i1|0)!==0)if((Lgeptoindexphi&255)!==0){
		tmp14=tmp6[0];
		if((((tmp14.o)*4)-((0)*4)|0)<160){
			Lgeptoindexphi=LmergedArray[2]|0;
			tmp6[0]={d:tmp14.d,o:tmp14.o+1|0};
			tmp14.d[tmp14.o]=Lgeptoindexphi;
		}
	}
	tmp14=tmp0[0];
	if(L$ppre$pi===tmp14.d&&0===tmp14.o){
		Larg5[Marg5]=4;
		tmp18=0;
	}else{
		Lgeptoindexphi=_impure_data.i0|0;
		_impure_data.i0=0;
		tmp18=+__strtod_r(L$ppre$pi,0,tmp0,0);
		Lgeptoindexphi3=_impure_data.i0|0;
		if((Lgeptoindexphi3|0)===0)_impure_data.i0=Lgeptoindexphi;
		L$ppre$pi=tmp0[0];
		a:{
			if(L$ppre$pi.d===tmp14.d&&L$ppre$pi.o===tmp14.o){
				if((Lgeptoindexphi3|0)!==34)break a;
			}else{
				tmp18=0;
			}
			Larg5[Marg5]=4;
		}
	}
	Larg6[Marg6]=tmp18;
	L$ppre$pi=tmp6[0];
	a:if((tmp3.i1|0)!==0){
		if(tmp5!==L$ppre$pi.d||0!==L$ppre$pi.o)if((L$ppre$pi.o+ -1|0)>0){
			Lgeptoindexphi3=0;
			Lgeptoindexphi=-1;
			while(1){
				Lgeptoindexphi7=tmp5[Lgeptoindexphi3]|0;
				tmp5[Lgeptoindexphi3]=L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]|0;
				L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]=Lgeptoindexphi7;
				Lgeptoindexphi3=Lgeptoindexphi3+1|0;
				Lgeptoindexphi=Lgeptoindexphi-1|0;
				if((0+Lgeptoindexphi3|0)<(L$ppre$pi.o+Lgeptoindexphi|0))continue;
				break;
			}
		}
		tmp14=tmp3.a2;
		Lgeptoindexphi=tmp14[0]|0;
		Lgeptoindexphi3=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
		if((L$ppre$pi.o+ -1|0)>0){
			tmp19=(0+(tmp3.i1|0)|0);
			Lgeptoindexphi12=0;
			Lgeptoindexphi7=0;
			while(1){
				if(Lgeptoindexphi3)if((tmp5[Lgeptoindexphi7]|0)!==(Lgeptoindexphi<<24>>24|0)){
					Larg5[Marg5]=4;
					break a;
				}
				if((tmp19-(0+Lgeptoindexphi12|0)|0)>1){
					Lgeptoindexphi12=Lgeptoindexphi12+1|0;
					Lgeptoindexphi=tmp14[Lgeptoindexphi12]|0;
				}
				Lgeptoindexphi7=Lgeptoindexphi7+1|0;
				Lgeptoindexphi3=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
				if((0+Lgeptoindexphi7|0)<(L$ppre$pi.o+ -1|0))continue;
				break;
			}
		}
		if(Lgeptoindexphi3)if((L$ppre$pi.d[L$ppre$pi.o+ -1|0]|0)-1>>>0>=Lgeptoindexphi<<24>>24>>>0)Larg5[Marg5]=4;
	}
	if(L$psroa$p0$p0$pcopyload!==null){
		L$ppre$pio=L$psroa$p0$p0$pcopyload.a3o;
		L$ppre$pi=L$psroa$p0$p0$pcopyload.a3;
		tmp14=L$psroa$p0$p0$pcopyload.a4;
		if(L$ppre$pi===tmp14&&L$ppre$pio===0){
			Lgeptoindexphi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			Lgeptoindexphi=L$ppre$pi[L$ppre$pio]|0;
		}
		L$pidx$pval=((Lgeptoindexphi|0)===-1?null:L$pidx$pval);
		Lgeptoindexphi=(Lgeptoindexphi|0)===-1?1:0;
	}else{
		Lgeptoindexphi=1;
	}
	a:{
		b:{
			if(L$psroa$p02$p0$pcopyload!==null){
				L$psroa$p0$p0$pcopyloado=L$psroa$p02$p0$pcopyload.a3o;
				L$psroa$p0$p0$pcopyload=L$psroa$p02$p0$pcopyload.a3;
				L$ppre$pi=L$psroa$p02$p0$pcopyload.a4;
				if(L$psroa$p0$p0$pcopyload===L$ppre$pi&&L$psroa$p0$p0$pcopyloado===0){
					Lgeptoindexphi3=L$psroa$p02$p0$pcopyload.a0.a10(L$psroa$p02$p0$pcopyload)|0;
				}else{
					Lgeptoindexphi3=L$psroa$p0$p0$pcopyload[L$psroa$p0$p0$pcopyloado]|0;
				}
				if((Lgeptoindexphi3|0)!==-1){
					if(Lgeptoindexphi)break a;
					break b;
				}
			}
			if(!(Lgeptoindexphi))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=L$pidx$pval;
}
function __ZNSt9__num_getIwE19__stage2_float_loopEwRbRcPcRS3_wwRKSsPjRS7_RjPw(Larg0,Larg1,Marg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4,Larg5,Larg6,Larg7,Larg8,Marg8,Larg9,Marg9,Larg10,Marg10,Larg11){
	var tmp0=0,tmp1=null,tmp1o=0,tmp2=0,tmp3=0;
	if((Larg0|0)===(Larg5|0)){
		if((Larg1[Marg1]&255)!==0){
			Larg1[Marg1]=0;
			tmp1=Larg4[Marg4];
			Larg4[Marg4]={d:tmp1.d,o:tmp1.o+1|0};
			tmp1.d[tmp1.o]=46;
			if((Larg7.i1|0)!==0){
				tmp1=Larg9[Marg9];
				if((((tmp1.o)*4)-((Marg8)*4)|0)<160){
					tmp2=Larg10[Marg10]|0;
					Larg9[Marg9]={d:tmp1.d,o:tmp1.o+1|0};
					tmp1.d[tmp1.o]=tmp2;
					return 0|0;
				}
				return 0|0;
			}
			return 0|0;
		}
		return  -1|0;
	}
	if((Larg0|0)===(Larg6|0))if((Larg7.i1|0)!==0){
		if((Larg1[Marg1]&255)!==0){
			tmp1=Larg9[Marg9];
			if((((tmp1.o)*4)-((Marg8)*4)|0)<160){
				tmp2=Larg10[Marg10]|0;
				Larg9[Marg9]={d:tmp1.d,o:tmp1.o+1|0};
				tmp1.d[tmp1.o]=tmp2;
				Larg10[Marg10]=0;
				return 0|0;
			}
			return 0|0;
		}
		return  -1|0;
	}
	if((Larg11[0]|0)===(Larg0|0)){
		tmp1o=0;
		tmp1=Larg11;
	}else if((Larg11[1]|0)===(Larg0|0)){
		tmp1o=0+1|0;
		tmp1=Larg11;
	}else if((Larg11[2]|0)===(Larg0|0)){
		tmp1o=0+2|0;
		tmp1=Larg11;
	}else if((Larg11[3]|0)===(Larg0|0)){
		tmp1o=0+3|0;
		tmp1=Larg11;
	}else if((Larg11[4]|0)===(Larg0|0)){
		tmp1o=0+4|0;
		tmp1=Larg11;
	}else if((Larg11[5]|0)===(Larg0|0)){
		tmp1o=0+5|0;
		tmp1=Larg11;
	}else if((Larg11[6]|0)===(Larg0|0)){
		tmp1o=0+6|0;
		tmp1=Larg11;
	}else if((Larg11[7]|0)===(Larg0|0)){
		tmp1o=0+7|0;
		tmp1=Larg11;
	}else if((Larg11[8]|0)===(Larg0|0)){
		tmp1o=0+8|0;
		tmp1=Larg11;
	}else if((Larg11[9]|0)===(Larg0|0)){
		tmp1o=0+9|0;
		tmp1=Larg11;
	}else if((Larg11[10]|0)===(Larg0|0)){
		tmp1o=0+10|0;
		tmp1=Larg11;
	}else if((Larg11[11]|0)===(Larg0|0)){
		tmp1o=0+11|0;
		tmp1=Larg11;
	}else if((Larg11[12]|0)===(Larg0|0)){
		tmp1o=0+12|0;
		tmp1=Larg11;
	}else if((Larg11[13]|0)===(Larg0|0)){
		tmp1o=0+13|0;
		tmp1=Larg11;
	}else if((Larg11[14]|0)===(Larg0|0)){
		tmp1o=0+14|0;
		tmp1=Larg11;
	}else if((Larg11[15]|0)===(Larg0|0)){
		tmp1o=0+15|0;
		tmp1=Larg11;
	}else if((Larg11[16]|0)===(Larg0|0)){
		tmp1o=0+16|0;
		tmp1=Larg11;
	}else if((Larg11[17]|0)===(Larg0|0)){
		tmp1o=0+17|0;
		tmp1=Larg11;
	}else if((Larg11[18]|0)===(Larg0|0)){
		tmp1o=0+18|0;
		tmp1=Larg11;
	}else if((Larg11[19]|0)===(Larg0|0)){
		tmp1o=0+19|0;
		tmp1=Larg11;
	}else if((Larg11[20]|0)===(Larg0|0)){
		tmp1o=0+20|0;
		tmp1=Larg11;
	}else if((Larg11[21]|0)===(Larg0|0)){
		tmp1o=0+21|0;
		tmp1=Larg11;
	}else if((Larg11[22]|0)===(Larg0|0)){
		tmp1o=0+22|0;
		tmp1=Larg11;
	}else if((Larg11[23]|0)===(Larg0|0)){
		tmp1o=0+23|0;
		tmp1=Larg11;
	}else if((Larg11[24]|0)===(Larg0|0)){
		tmp1o=0+24|0;
		tmp1=Larg11;
	}else if((Larg11[25]|0)===(Larg0|0)){
		tmp1o=0+25|0;
		tmp1=Larg11;
	}else if((Larg11[26]|0)===(Larg0|0)){
		tmp1o=0+26|0;
		tmp1=Larg11;
	}else if((Larg11[27]|0)===(Larg0|0)){
		tmp1o=0+27|0;
		tmp1=Larg11;
	}else if((Larg11[28]|0)===(Larg0|0)){
		tmp1o=0+28|0;
		tmp1=Larg11;
	}else if((Larg11[29]|0)===(Larg0|0)){
		tmp1o=0+29|0;
		tmp1=Larg11;
	}else if((Larg11[30]|0)===(Larg0|0)){
		tmp1o=0+30|0;
		tmp1=Larg11;
	}else{
		tmp2=Larg11[31]|0;
		tmp1o=(tmp2|0)===(Larg0|0)?0+31|0:0+32|0;
		tmp1=((tmp2|0)===(Larg0|0)?Larg11:Larg11);
	}
	tmp2=((tmp1o)*4)-((0)*4)|0;
	if((tmp2|0)>124)return  -1|0;
	tmp3=tmp2>>2;
	tmp0=__ZNSt14__num_get_base5__srcE[tmp3]|0;
	switch(tmp3|1|0){
		case 25:
		tmp1=Larg4[Marg4];
		if(tmp1.d!==Larg3||tmp1.o!==Marg3)if((tmp1.d[tmp1.o+ -1|0]&95)!==(Larg2[Marg2]&127))return  -1|0;
		Larg4[Marg4]={d:tmp1.d,o:tmp1.o+1|0};
		tmp1.d[tmp1.o]=tmp0;
		return 0|0;
		case 23:
		Larg2[Marg2]=80;
		break;
		default:
		tmp3=Larg2[Marg2]|0;
		if((tmp0&95|0)===(tmp3<<24>>24|0)){
			Larg2[Marg2]=tmp3|128;
			if((Larg1[Marg1]&255)!==0){
				Larg1[Marg1]=0;
				if((Larg7.i1|0)!==0){
					tmp1=Larg9[Marg9];
					if((((tmp1.o)*4)-((Marg8)*4)|0)<160){
						tmp3=Larg10[Marg10]|0;
						Larg9[Marg9]={d:tmp1.d,o:tmp1.o+1|0};
						tmp1.d[tmp1.o]=tmp3;
					}
				}
			}
		}
	}
	tmp1=Larg4[Marg4];
	Larg4[Marg4]={d:tmp1.d,o:tmp1.o+1|0};
	tmp1.d[tmp1.o]=tmp0;
	if((tmp2|0)>84)return 0|0;
	Larg10[Marg10]=(Larg10[Marg10]|0)+1|0;
	return 0|0;
}
function __ZNSt9__num_getIwE19__stage2_float_prepERSt8ios_basePwRwS4_(Larg0,L$p0$p7$p0$pval,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4){
	var tmp0=0,tmp1=null;
	L$p0$p7$p0$pval.i1=(L$p0$p7$p0$pval.i1|0)+1|0;
	tmp1=L$p0$p7$p0$pval.a2.a0;
	tmp1=tmp1[(__ZNSt5ctypeIwE2idE$p1|0)-1|0];
	tmp1.a0.a13(tmp1,__ZNSt14__num_get_base5__srcE,0,__ZNSt14__num_get_base5__srcE,32,Larg2,Marg2);
	tmp1=L$p0$p7$p0$pval.a2.a0;
	tmp1=tmp1[(__ZNSt8numpunctIwE2idE$p1|0)-1|0];
	Larg3[Marg3]=tmp1.a0.a4(tmp1)|0;
	Larg4[Marg4]=tmp1.a0.a5(tmp1)|0;
	tmp1.a0.a6(Larg0,tmp1);
	tmp0=L$p0$p7$p0$pval.i1|0;
	L$p0$p7$p0$pval.i1=tmp0-1|0;
	if((tmp0|0)===0)L$p0$p7$p0$pval.a0.a3(L$p0$p7$p0$pval);
}
function __ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjRd(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Marg6){
	var tmp0=null,tmp1=null,LmergedArray=null,tmp3=null,tmp4=null,tmp5=null,tmp6=null,LmergedArray57=null,L$psroa$p0$p0$pcopyload=null,L$psroa$p0$p0$pcopyloado=0,L$psroa$p02$p0$pcopyload=null,L$pidx$pval=null,L$ppre$pi=null,L$ppre$pio=0,Lgeptoindexphi=0,Lgeptoindexphi3=0,tmp14=null,tmp14o=0,tmp15=null,Lgeptoindexphi7=0,Lgeptoindexphi12=0,tmp18=-0.,tmp19=0;
	L$psroa$p0$p0$pcopyload=Larg2.a0;
	L$psroa$p02$p0$pcopyload=Larg3.a0;
	L$pidx$pval=Larg4.a7.a0;
	tmp0=[nullObj];
	tmp1=new Int32Array(32);
	LmergedArray=new Int32Array(3);
	tmp3={i0:0,i1:0,a2:nullArray};
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp5=new Int32Array(40);
	tmp6=[nullObj];
	__ZNSt9__num_getIwE19__stage2_float_prepERSt8ios_basePwRwS4_(tmp3,L$pidx$pval,tmp1,0,LmergedArray,0,LmergedArray,1);
	tmp4.i0=0;
	tmp4.i1=0;
	tmp4.a2=nullArray;
	__ZNSs6appendEjc(tmp4,1);
	L$ppre$pi=tmp4.a2;
	tmp0[0]={d:L$ppre$pi,o:0};
	tmp6[0]={d:tmp5,o:0};
	LmergedArray[2]=0;
	LmergedArray57=new Uint8Array(2);
	LmergedArray57[0]=1;
	LmergedArray57[1]=69;
	Lgeptoindexphi=LmergedArray[0]|0;
	Lgeptoindexphi3=LmergedArray[1]|0;
	L$pidx$pval=L$psroa$p0$p0$pcopyload;
	while(1){
		if(L$psroa$p0$p0$pcopyload!==null){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0){
				Lgeptoindexphi7=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
			}else{
				Lgeptoindexphi7=tmp14[tmp14o]|0;
			}
			L$pidx$pval=((Lgeptoindexphi7|0)===-1?null:L$pidx$pval);
			L$psroa$p0$p0$pcopyload=((Lgeptoindexphi7|0)===-1?null:L$psroa$p0$p0$pcopyload);
			Lgeptoindexphi7=(Lgeptoindexphi7|0)===-1?1:0;
		}else{
			Lgeptoindexphi7=1;
			L$psroa$p0$p0$pcopyload=null;
		}
		a:{
			if(L$psroa$p02$p0$pcopyload!==null){
				tmp14o=L$psroa$p02$p0$pcopyload.a3o;
				tmp14=L$psroa$p02$p0$pcopyload.a3;
				tmp15=L$psroa$p02$p0$pcopyload.a4;
				if(tmp14===tmp15&&tmp14o===0){
					Lgeptoindexphi12=L$psroa$p02$p0$pcopyload.a0.a10(L$psroa$p02$p0$pcopyload)|0;
				}else{
					Lgeptoindexphi12=tmp14[tmp14o]|0;
				}
				if((Lgeptoindexphi12|0)!==-1){
					if(Lgeptoindexphi7)break a;
					break;
				}
			}
			if(Lgeptoindexphi7){
				L$psroa$p02$p0$pcopyload=null;
				break;
			}
			L$psroa$p02$p0$pcopyload=null;
		}
		tmp14=tmp0[0];
		Lgeptoindexphi7=tmp4.i1|0;
		if(tmp14.d===L$ppre$pi&&tmp14.o===(0+Lgeptoindexphi7|0)){
			Lgeptoindexphi12=Lgeptoindexphi7<<1;
			if(Lgeptoindexphi12>>>0<Lgeptoindexphi7>>>0){
				L$ppre$pi[Lgeptoindexphi12]=0;
				tmp4.i1=Lgeptoindexphi12;
			}else __ZNSs6appendEjc(tmp4,Lgeptoindexphi7);
			Lgeptoindexphi12=tmp4.i0|0;
			if(Lgeptoindexphi12>>>0<2){
				Lgeptoindexphi12=0;
			}else{
				Lgeptoindexphi12=(Lgeptoindexphi12& -2)-1|0;
			}
			tmp19=tmp4.i1|0;
			if(Lgeptoindexphi12>>>0<tmp19>>>0){
				L$ppre$pi=tmp4.a2;
				L$ppre$pi[Lgeptoindexphi12]=0;
				tmp4.i1=Lgeptoindexphi12;
			}else{
				__ZNSs6appendEjc(tmp4,Lgeptoindexphi12-tmp19|0);
				L$ppre$pi=tmp4.a2;
			}
			tmp0[0]={d:L$ppre$pi,o:0+Lgeptoindexphi7|0};
		}
		tmp14o=L$psroa$p0$p0$pcopyload.a3o;
		tmp14=L$psroa$p0$p0$pcopyload.a3;
		tmp15=L$psroa$p0$p0$pcopyload.a4;
		if(tmp14===tmp15&&tmp14o===0){
			Lgeptoindexphi7=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			Lgeptoindexphi7=tmp14[tmp14o]|0;
		}
		if((__ZNSt9__num_getIwE19__stage2_float_loopEwRbRcPcRS3_wwRKSsPjRS7_RjPw(Lgeptoindexphi7,LmergedArray57,0,LmergedArray57,1,L$ppre$pi,0,tmp0,0,Lgeptoindexphi,Lgeptoindexphi3,tmp3,tmp5,0,tmp6,0,LmergedArray,2,tmp1)|0|0)===0){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0)L$psroa$p0$p0$pcopyload.a0.a11(L$psroa$p0$p0$pcopyload)|0;
			else{
				L$psroa$p0$p0$pcopyload.a3=tmp14;
				L$psroa$p0$p0$pcopyload.a3o=tmp14o+1|0;
			}
			continue;
		}
		break;
	}
	Lgeptoindexphi=LmergedArray57[0]|0;
	if((tmp3.i1|0)!==0)if((Lgeptoindexphi&255)!==0){
		tmp14=tmp6[0];
		if((((tmp14.o)*4)-((0)*4)|0)<160){
			Lgeptoindexphi=LmergedArray[2]|0;
			tmp6[0]={d:tmp14.d,o:tmp14.o+1|0};
			tmp14.d[tmp14.o]=Lgeptoindexphi;
		}
	}
	tmp14=tmp0[0];
	if(L$ppre$pi===tmp14.d&&0===tmp14.o){
		Larg5[Marg5]=4;
		tmp18=0;
	}else{
		Lgeptoindexphi=_impure_data.i0|0;
		_impure_data.i0=0;
		tmp18=+__strtod_r(L$ppre$pi,0,tmp0,0);
		Lgeptoindexphi3=_impure_data.i0|0;
		if((Lgeptoindexphi3|0)===0)_impure_data.i0=Lgeptoindexphi;
		L$ppre$pi=tmp0[0];
		a:{
			if(L$ppre$pi.d===tmp14.d&&L$ppre$pi.o===tmp14.o){
				if((Lgeptoindexphi3|0)!==34)break a;
			}else{
				tmp18=0;
			}
			Larg5[Marg5]=4;
		}
	}
	Larg6[Marg6]=tmp18;
	L$ppre$pi=tmp6[0];
	a:if((tmp3.i1|0)!==0){
		if(tmp5!==L$ppre$pi.d||0!==L$ppre$pi.o)if((L$ppre$pi.o+ -1|0)>0){
			Lgeptoindexphi3=0;
			Lgeptoindexphi=-1;
			while(1){
				Lgeptoindexphi7=tmp5[Lgeptoindexphi3]|0;
				tmp5[Lgeptoindexphi3]=L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]|0;
				L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]=Lgeptoindexphi7;
				Lgeptoindexphi3=Lgeptoindexphi3+1|0;
				Lgeptoindexphi=Lgeptoindexphi-1|0;
				if((0+Lgeptoindexphi3|0)<(L$ppre$pi.o+Lgeptoindexphi|0))continue;
				break;
			}
		}
		tmp14=tmp3.a2;
		Lgeptoindexphi=tmp14[0]|0;
		Lgeptoindexphi3=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
		if((L$ppre$pi.o+ -1|0)>0){
			tmp19=(0+(tmp3.i1|0)|0);
			Lgeptoindexphi12=0;
			Lgeptoindexphi7=0;
			while(1){
				if(Lgeptoindexphi3)if((tmp5[Lgeptoindexphi7]|0)!==(Lgeptoindexphi<<24>>24|0)){
					Larg5[Marg5]=4;
					break a;
				}
				if((tmp19-(0+Lgeptoindexphi12|0)|0)>1){
					Lgeptoindexphi12=Lgeptoindexphi12+1|0;
					Lgeptoindexphi=tmp14[Lgeptoindexphi12]|0;
				}
				Lgeptoindexphi7=Lgeptoindexphi7+1|0;
				Lgeptoindexphi3=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
				if((0+Lgeptoindexphi7|0)<(L$ppre$pi.o+ -1|0))continue;
				break;
			}
		}
		if(Lgeptoindexphi3)if((L$ppre$pi.d[L$ppre$pi.o+ -1|0]|0)-1>>>0>=Lgeptoindexphi<<24>>24>>>0)Larg5[Marg5]=4;
	}
	if(L$psroa$p0$p0$pcopyload!==null){
		L$ppre$pio=L$psroa$p0$p0$pcopyload.a3o;
		L$ppre$pi=L$psroa$p0$p0$pcopyload.a3;
		tmp14=L$psroa$p0$p0$pcopyload.a4;
		if(L$ppre$pi===tmp14&&L$ppre$pio===0){
			Lgeptoindexphi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			Lgeptoindexphi=L$ppre$pi[L$ppre$pio]|0;
		}
		L$pidx$pval=((Lgeptoindexphi|0)===-1?null:L$pidx$pval);
		Lgeptoindexphi=(Lgeptoindexphi|0)===-1?1:0;
	}else{
		Lgeptoindexphi=1;
	}
	a:{
		b:{
			if(L$psroa$p02$p0$pcopyload!==null){
				L$psroa$p0$p0$pcopyloado=L$psroa$p02$p0$pcopyload.a3o;
				L$psroa$p0$p0$pcopyload=L$psroa$p02$p0$pcopyload.a3;
				L$ppre$pi=L$psroa$p02$p0$pcopyload.a4;
				if(L$psroa$p0$p0$pcopyload===L$ppre$pi&&L$psroa$p0$p0$pcopyloado===0){
					Lgeptoindexphi3=L$psroa$p02$p0$pcopyload.a0.a10(L$psroa$p02$p0$pcopyload)|0;
				}else{
					Lgeptoindexphi3=L$psroa$p0$p0$pcopyload[L$psroa$p0$p0$pcopyloado]|0;
				}
				if((Lgeptoindexphi3|0)!==-1){
					if(Lgeptoindexphi)break a;
					break b;
				}
			}
			if(!(Lgeptoindexphi))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=L$pidx$pval;
}
function __ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjRf(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Marg6){
	var tmp0=null,tmp1=null,LmergedArray=null,tmp3=null,tmp4=null,tmp5=null,tmp6=null,LmergedArray57=null,L$psroa$p0$p0$pcopyload=null,L$psroa$p0$p0$pcopyloado=0,L$psroa$p02$p0$pcopyload=null,L$pidx$pval=null,L$ppre$pi=null,L$ppre$pio=0,Lgeptoindexphi=0,Lgeptoindexphi3=0,tmp14=null,tmp14o=0,tmp15=null,Lgeptoindexphi7=0,Lgeptoindexphi12=0,tmp18=-0.,tmp19=0;
	L$psroa$p0$p0$pcopyload=Larg2.a0;
	L$psroa$p02$p0$pcopyload=Larg3.a0;
	L$pidx$pval=Larg4.a7.a0;
	tmp0=[nullObj];
	tmp1=new Int32Array(32);
	LmergedArray=new Int32Array(3);
	tmp3={i0:0,i1:0,a2:nullArray};
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp5=new Int32Array(40);
	tmp6=[nullObj];
	__ZNSt9__num_getIwE19__stage2_float_prepERSt8ios_basePwRwS4_(tmp3,L$pidx$pval,tmp1,0,LmergedArray,0,LmergedArray,1);
	tmp4.i0=0;
	tmp4.i1=0;
	tmp4.a2=nullArray;
	__ZNSs6appendEjc(tmp4,1);
	L$ppre$pi=tmp4.a2;
	tmp0[0]={d:L$ppre$pi,o:0};
	tmp6[0]={d:tmp5,o:0};
	LmergedArray[2]=0;
	LmergedArray57=new Uint8Array(2);
	LmergedArray57[0]=1;
	LmergedArray57[1]=69;
	Lgeptoindexphi=LmergedArray[0]|0;
	Lgeptoindexphi3=LmergedArray[1]|0;
	L$pidx$pval=L$psroa$p0$p0$pcopyload;
	while(1){
		if(L$psroa$p0$p0$pcopyload!==null){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0){
				Lgeptoindexphi7=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
			}else{
				Lgeptoindexphi7=tmp14[tmp14o]|0;
			}
			L$pidx$pval=((Lgeptoindexphi7|0)===-1?null:L$pidx$pval);
			L$psroa$p0$p0$pcopyload=((Lgeptoindexphi7|0)===-1?null:L$psroa$p0$p0$pcopyload);
			Lgeptoindexphi7=(Lgeptoindexphi7|0)===-1?1:0;
		}else{
			Lgeptoindexphi7=1;
			L$psroa$p0$p0$pcopyload=null;
		}
		a:{
			if(L$psroa$p02$p0$pcopyload!==null){
				tmp14o=L$psroa$p02$p0$pcopyload.a3o;
				tmp14=L$psroa$p02$p0$pcopyload.a3;
				tmp15=L$psroa$p02$p0$pcopyload.a4;
				if(tmp14===tmp15&&tmp14o===0){
					Lgeptoindexphi12=L$psroa$p02$p0$pcopyload.a0.a10(L$psroa$p02$p0$pcopyload)|0;
				}else{
					Lgeptoindexphi12=tmp14[tmp14o]|0;
				}
				if((Lgeptoindexphi12|0)!==-1){
					if(Lgeptoindexphi7)break a;
					break;
				}
			}
			if(Lgeptoindexphi7){
				L$psroa$p02$p0$pcopyload=null;
				break;
			}
			L$psroa$p02$p0$pcopyload=null;
		}
		tmp14=tmp0[0];
		Lgeptoindexphi7=tmp4.i1|0;
		if(tmp14.d===L$ppre$pi&&tmp14.o===(0+Lgeptoindexphi7|0)){
			Lgeptoindexphi12=Lgeptoindexphi7<<1;
			if(Lgeptoindexphi12>>>0<Lgeptoindexphi7>>>0){
				L$ppre$pi[Lgeptoindexphi12]=0;
				tmp4.i1=Lgeptoindexphi12;
			}else __ZNSs6appendEjc(tmp4,Lgeptoindexphi7);
			Lgeptoindexphi12=tmp4.i0|0;
			if(Lgeptoindexphi12>>>0<2){
				Lgeptoindexphi12=0;
			}else{
				Lgeptoindexphi12=(Lgeptoindexphi12& -2)-1|0;
			}
			tmp19=tmp4.i1|0;
			if(Lgeptoindexphi12>>>0<tmp19>>>0){
				L$ppre$pi=tmp4.a2;
				L$ppre$pi[Lgeptoindexphi12]=0;
				tmp4.i1=Lgeptoindexphi12;
			}else{
				__ZNSs6appendEjc(tmp4,Lgeptoindexphi12-tmp19|0);
				L$ppre$pi=tmp4.a2;
			}
			tmp0[0]={d:L$ppre$pi,o:0+Lgeptoindexphi7|0};
		}
		tmp14o=L$psroa$p0$p0$pcopyload.a3o;
		tmp14=L$psroa$p0$p0$pcopyload.a3;
		tmp15=L$psroa$p0$p0$pcopyload.a4;
		if(tmp14===tmp15&&tmp14o===0){
			Lgeptoindexphi7=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			Lgeptoindexphi7=tmp14[tmp14o]|0;
		}
		if((__ZNSt9__num_getIwE19__stage2_float_loopEwRbRcPcRS3_wwRKSsPjRS7_RjPw(Lgeptoindexphi7,LmergedArray57,0,LmergedArray57,1,L$ppre$pi,0,tmp0,0,Lgeptoindexphi,Lgeptoindexphi3,tmp3,tmp5,0,tmp6,0,LmergedArray,2,tmp1)|0|0)===0){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0)L$psroa$p0$p0$pcopyload.a0.a11(L$psroa$p0$p0$pcopyload)|0;
			else{
				L$psroa$p0$p0$pcopyload.a3=tmp14;
				L$psroa$p0$p0$pcopyload.a3o=tmp14o+1|0;
			}
			continue;
		}
		break;
	}
	Lgeptoindexphi=LmergedArray57[0]|0;
	if((tmp3.i1|0)!==0)if((Lgeptoindexphi&255)!==0){
		tmp14=tmp6[0];
		if((((tmp14.o)*4)-((0)*4)|0)<160){
			Lgeptoindexphi=LmergedArray[2]|0;
			tmp6[0]={d:tmp14.d,o:tmp14.o+1|0};
			tmp14.d[tmp14.o]=Lgeptoindexphi;
		}
	}
	tmp14=tmp0[0];
	if(L$ppre$pi===tmp14.d&&0===tmp14.o){
		Larg5[Marg5]=4;
		tmp18=0;
	}else{
		Lgeptoindexphi=_impure_data.i0|0;
		_impure_data.i0=0;
		tmp18=+__strtod_r(L$ppre$pi,0,tmp0,0);
		Lgeptoindexphi3=_impure_data.i0|0;
		if((Lgeptoindexphi3|0)===0)_impure_data.i0=Lgeptoindexphi;
		L$ppre$pi=tmp0[0];
		if(L$ppre$pi.d===tmp14.d&&L$ppre$pi.o===tmp14.o){
			if((Lgeptoindexphi3|0)===34)Larg5[Marg5]=4;
			tmp18=tmp18;
		}else{
			Larg5[Marg5]=4;
			tmp18=0;
		}
	}
	Larg6[Marg6]=tmp18;
	L$ppre$pi=tmp6[0];
	a:if((tmp3.i1|0)!==0){
		if(tmp5!==L$ppre$pi.d||0!==L$ppre$pi.o)if((L$ppre$pi.o+ -1|0)>0){
			Lgeptoindexphi3=0;
			Lgeptoindexphi=-1;
			while(1){
				Lgeptoindexphi7=tmp5[Lgeptoindexphi3]|0;
				tmp5[Lgeptoindexphi3]=L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]|0;
				L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]=Lgeptoindexphi7;
				Lgeptoindexphi3=Lgeptoindexphi3+1|0;
				Lgeptoindexphi=Lgeptoindexphi-1|0;
				if((0+Lgeptoindexphi3|0)<(L$ppre$pi.o+Lgeptoindexphi|0))continue;
				break;
			}
		}
		tmp14=tmp3.a2;
		Lgeptoindexphi=tmp14[0]|0;
		Lgeptoindexphi3=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
		if((L$ppre$pi.o+ -1|0)>0){
			tmp19=(0+(tmp3.i1|0)|0);
			Lgeptoindexphi12=0;
			Lgeptoindexphi7=0;
			while(1){
				if(Lgeptoindexphi3)if((tmp5[Lgeptoindexphi7]|0)!==(Lgeptoindexphi<<24>>24|0)){
					Larg5[Marg5]=4;
					break a;
				}
				if((tmp19-(0+Lgeptoindexphi12|0)|0)>1){
					Lgeptoindexphi12=Lgeptoindexphi12+1|0;
					Lgeptoindexphi=tmp14[Lgeptoindexphi12]|0;
				}
				Lgeptoindexphi7=Lgeptoindexphi7+1|0;
				Lgeptoindexphi3=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
				if((0+Lgeptoindexphi7|0)<(L$ppre$pi.o+ -1|0))continue;
				break;
			}
		}
		if(Lgeptoindexphi3)if((L$ppre$pi.d[L$ppre$pi.o+ -1|0]|0)-1>>>0>=Lgeptoindexphi<<24>>24>>>0)Larg5[Marg5]=4;
	}
	if(L$psroa$p0$p0$pcopyload!==null){
		L$ppre$pio=L$psroa$p0$p0$pcopyload.a3o;
		L$ppre$pi=L$psroa$p0$p0$pcopyload.a3;
		tmp14=L$psroa$p0$p0$pcopyload.a4;
		if(L$ppre$pi===tmp14&&L$ppre$pio===0){
			Lgeptoindexphi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			Lgeptoindexphi=L$ppre$pi[L$ppre$pio]|0;
		}
		L$pidx$pval=((Lgeptoindexphi|0)===-1?null:L$pidx$pval);
		Lgeptoindexphi=(Lgeptoindexphi|0)===-1?1:0;
	}else{
		Lgeptoindexphi=1;
	}
	a:{
		b:{
			if(L$psroa$p02$p0$pcopyload!==null){
				L$psroa$p0$p0$pcopyloado=L$psroa$p02$p0$pcopyload.a3o;
				L$psroa$p0$p0$pcopyload=L$psroa$p02$p0$pcopyload.a3;
				L$ppre$pi=L$psroa$p02$p0$pcopyload.a4;
				if(L$psroa$p0$p0$pcopyload===L$ppre$pi&&L$psroa$p0$p0$pcopyloado===0){
					Lgeptoindexphi3=L$psroa$p02$p0$pcopyload.a0.a10(L$psroa$p02$p0$pcopyload)|0;
				}else{
					Lgeptoindexphi3=L$psroa$p0$p0$pcopyload[L$psroa$p0$p0$pcopyloado]|0;
				}
				if((Lgeptoindexphi3|0)!==-1){
					if(Lgeptoindexphi)break a;
					break b;
				}
			}
			if(!(Lgeptoindexphi))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=L$pidx$pval;
}
function __ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjRy(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Marg6){
	var tmp0=null,tmp1=null,tmp2=null,LmergedArray=null,tmp4=null,tmp5=null,tmp6=null,tmp7=null,L$psroa$p0$p0$pcopyload=null,L$psroa$p0$p0$pcopyloado=0,L$psroa$p03$p0$pcopyload=null,L$pidx$pval=0,L$pidx1$pval=null,L$ppre$pi=null,L$ppre$pio=0,Lgeptoindexphi3=0,tmp14=null,tmp14o=0,tmp15=null,L$psroa$p6$p0$pph$pi=0,Lgeptoindexphi7=0,Lgeptoindexphi12=0;
	L$psroa$p0$p0$pcopyload=Larg2.a0;
	L$psroa$p03$p0$pcopyload=Larg3.a0;
	L$pidx$pval=Larg4.i1|0;
	L$pidx1$pval=Larg4.a7.a0;
	tmp0=new Int32Array(2);
	tmp1=[nullObj];
	tmp2=new Int32Array(26);
	LmergedArray=new Int32Array(2);
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp5={i0:0,i1:0,a2:nullArray};
	tmp6=new Int32Array(40);
	tmp7=[nullObj];
	switch(L$pidx$pval&74&127){
		case 64:
		L$pidx$pval=8;
		break;
		case 8:
		L$pidx$pval=16;
		break;
		case 0:
		L$pidx$pval=0;
		break;
		default:
		L$pidx$pval=10;
	}
	__ZNSt9__num_getIwE17__stage2_int_prepERSt8ios_basePwRw(tmp4,L$pidx1$pval,tmp2,0,LmergedArray,0);
	tmp5.i0=0;
	tmp5.i1=0;
	tmp5.a2=nullArray;
	__ZNSs6appendEjc(tmp5,1);
	L$ppre$pi=tmp5.a2;
	tmp1[0]={d:L$ppre$pi,o:0};
	tmp7[0]={d:tmp6,o:0};
	LmergedArray[1]=0;
	Lgeptoindexphi3=LmergedArray[0]|0;
	L$pidx1$pval=L$psroa$p0$p0$pcopyload;
	while(1){
		if(L$psroa$p0$p0$pcopyload!==null){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0){
				L$psroa$p6$p0$pph$pi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
			}else{
				L$psroa$p6$p0$pph$pi=tmp14[tmp14o]|0;
			}
			L$pidx1$pval=((L$psroa$p6$p0$pph$pi|0)===-1?null:L$pidx1$pval);
			L$psroa$p0$p0$pcopyload=((L$psroa$p6$p0$pph$pi|0)===-1?null:L$psroa$p0$p0$pcopyload);
			L$psroa$p6$p0$pph$pi=(L$psroa$p6$p0$pph$pi|0)===-1?1:0;
		}else{
			L$psroa$p6$p0$pph$pi=1;
			L$psroa$p0$p0$pcopyload=null;
		}
		a:{
			if(L$psroa$p03$p0$pcopyload!==null){
				tmp14o=L$psroa$p03$p0$pcopyload.a3o;
				tmp14=L$psroa$p03$p0$pcopyload.a3;
				tmp15=L$psroa$p03$p0$pcopyload.a4;
				if(tmp14===tmp15&&tmp14o===0){
					Lgeptoindexphi7=L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0;
				}else{
					Lgeptoindexphi7=tmp14[tmp14o]|0;
				}
				if((Lgeptoindexphi7|0)!==-1){
					if(L$psroa$p6$p0$pph$pi)break a;
					break;
				}
			}
			if(L$psroa$p6$p0$pph$pi){
				L$psroa$p03$p0$pcopyload=null;
				break;
			}
			L$psroa$p03$p0$pcopyload=null;
		}
		tmp14=tmp1[0];
		L$psroa$p6$p0$pph$pi=tmp5.i1|0;
		if(tmp14.d===L$ppre$pi&&tmp14.o===(0+L$psroa$p6$p0$pph$pi|0)){
			Lgeptoindexphi7=L$psroa$p6$p0$pph$pi<<1;
			if(Lgeptoindexphi7>>>0<L$psroa$p6$p0$pph$pi>>>0){
				L$ppre$pi[Lgeptoindexphi7]=0;
				tmp5.i1=Lgeptoindexphi7;
			}else __ZNSs6appendEjc(tmp5,L$psroa$p6$p0$pph$pi);
			Lgeptoindexphi7=tmp5.i0|0;
			if(Lgeptoindexphi7>>>0<2){
				Lgeptoindexphi7=0;
			}else{
				Lgeptoindexphi7=(Lgeptoindexphi7& -2)-1|0;
			}
			Lgeptoindexphi12=tmp5.i1|0;
			if(Lgeptoindexphi7>>>0<Lgeptoindexphi12>>>0){
				L$ppre$pi=tmp5.a2;
				L$ppre$pi[Lgeptoindexphi7]=0;
				tmp5.i1=Lgeptoindexphi7;
			}else{
				__ZNSs6appendEjc(tmp5,Lgeptoindexphi7-Lgeptoindexphi12|0);
				L$ppre$pi=tmp5.a2;
			}
			tmp1[0]={d:L$ppre$pi,o:0+L$psroa$p6$p0$pph$pi|0};
		}
		tmp14o=L$psroa$p0$p0$pcopyload.a3o;
		tmp14=L$psroa$p0$p0$pcopyload.a3;
		tmp15=L$psroa$p0$p0$pcopyload.a4;
		if(tmp14===tmp15&&tmp14o===0){
			L$psroa$p6$p0$pph$pi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			L$psroa$p6$p0$pph$pi=tmp14[tmp14o]|0;
		}
		if((__ZNSt9__num_getIwE17__stage2_int_loopEwiPcRS1_RjwRKSsPjRS6_Pw(L$psroa$p6$p0$pph$pi,L$pidx$pval,L$ppre$pi,0,tmp1,0,LmergedArray,1,Lgeptoindexphi3,tmp4,tmp6,0,tmp7,0,tmp2,0)|0|0)===0){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0)L$psroa$p0$p0$pcopyload.a0.a11(L$psroa$p0$p0$pcopyload)|0;
			else{
				L$psroa$p0$p0$pcopyload.a3=tmp14;
				L$psroa$p0$p0$pcopyload.a3o=tmp14o+1|0;
			}
			continue;
		}
		break;
	}
	if((tmp4.i1|0)!==0){
		tmp14=tmp7[0];
		if((((tmp14.o)*4)-((0)*4)|0)<160){
			Lgeptoindexphi3=LmergedArray[1]|0;
			tmp7[0]={d:tmp14.d,o:tmp14.o+1|0};
			tmp14.d[tmp14.o]=Lgeptoindexphi3;
		}
	}
	tmp14=tmp1[0];
	if(L$ppre$pi===tmp14.d&&0===tmp14.o){
		Larg5[Marg5]=4;
		L$pidx$pval=0;
		L$psroa$p6$p0$pph$pi=0;
	}else if((L$ppre$pi[0]&255)===45){
		Larg5[Marg5]=4;
		L$pidx$pval=0;
		L$psroa$p6$p0$pph$pi=0;
	}else{
		Lgeptoindexphi3=_impure_data.i0|0;
		_impure_data.i0=0;
		__strtoull_r(tmp0,0,_impure_data,L$ppre$pi,0,tmp1,0,L$pidx$pval);
		L$psroa$p6$p0$pph$pi=tmp0[1]|0;
		L$pidx$pval=tmp0[0]|0;
		Lgeptoindexphi7=_impure_data.i0|0;
		if((Lgeptoindexphi7|0)===0)_impure_data.i0=Lgeptoindexphi3;
		L$ppre$pi=tmp1[0];
		a:{
			if(L$ppre$pi.d===tmp14.d&&L$ppre$pi.o===tmp14.o){
				if((Lgeptoindexphi7|0)!==34)break a;
				L$psroa$p6$p0$pph$pi=-1;
			}else{
				L$psroa$p6$p0$pph$pi=0;
			}
			Larg5[Marg5]=4;
			L$pidx$pval=L$psroa$p6$p0$pph$pi;
		}
	}
	Larg6[Marg6+1|0]=L$psroa$p6$p0$pph$pi;
	Larg6[Marg6]=L$pidx$pval;
	L$ppre$pi=tmp7[0];
	a:if((tmp4.i1|0)!==0){
		if(tmp6!==L$ppre$pi.d||0!==L$ppre$pi.o)if((L$ppre$pi.o+ -1|0)>0){
			Lgeptoindexphi3=0;
			L$pidx$pval=-1;
			while(1){
				L$psroa$p6$p0$pph$pi=tmp6[Lgeptoindexphi3]|0;
				tmp6[Lgeptoindexphi3]=L$ppre$pi.d[L$ppre$pi.o+L$pidx$pval|0]|0;
				L$ppre$pi.d[L$ppre$pi.o+L$pidx$pval|0]=L$psroa$p6$p0$pph$pi;
				Lgeptoindexphi3=Lgeptoindexphi3+1|0;
				L$pidx$pval=L$pidx$pval-1|0;
				if((0+Lgeptoindexphi3|0)<(L$ppre$pi.o+L$pidx$pval|0))continue;
				break;
			}
		}
		tmp14=tmp4.a2;
		L$pidx$pval=tmp14[0]|0;
		Lgeptoindexphi3=L$pidx$pval<<24>0&&(L$pidx$pval&255)!==127?1:0;
		if((L$ppre$pi.o+ -1|0)>0){
			L$psroa$p6$p0$pph$pi=(0+(tmp4.i1|0)|0);
			Lgeptoindexphi12=0;
			Lgeptoindexphi7=0;
			while(1){
				if(Lgeptoindexphi3)if((tmp6[Lgeptoindexphi7]|0)!==(L$pidx$pval<<24>>24|0)){
					Larg5[Marg5]=4;
					break a;
				}
				if((L$psroa$p6$p0$pph$pi-(0+Lgeptoindexphi12|0)|0)>1){
					Lgeptoindexphi12=Lgeptoindexphi12+1|0;
					L$pidx$pval=tmp14[Lgeptoindexphi12]|0;
				}
				Lgeptoindexphi7=Lgeptoindexphi7+1|0;
				Lgeptoindexphi3=L$pidx$pval<<24>0&&(L$pidx$pval&255)!==127?1:0;
				if((0+Lgeptoindexphi7|0)<(L$ppre$pi.o+ -1|0))continue;
				break;
			}
		}
		if(Lgeptoindexphi3)if((L$ppre$pi.d[L$ppre$pi.o+ -1|0]|0)-1>>>0>=L$pidx$pval<<24>>24>>>0)Larg5[Marg5]=4;
	}
	if(L$psroa$p0$p0$pcopyload!==null){
		L$ppre$pio=L$psroa$p0$p0$pcopyload.a3o;
		L$ppre$pi=L$psroa$p0$p0$pcopyload.a3;
		tmp14=L$psroa$p0$p0$pcopyload.a4;
		if(L$ppre$pi===tmp14&&L$ppre$pio===0){
			L$pidx$pval=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			L$pidx$pval=L$ppre$pi[L$ppre$pio]|0;
		}
		L$pidx1$pval=((L$pidx$pval|0)===-1?null:L$pidx1$pval);
		L$pidx$pval=(L$pidx$pval|0)===-1?1:0;
	}else{
		L$pidx$pval=1;
	}
	a:{
		b:{
			if(L$psroa$p03$p0$pcopyload!==null){
				L$psroa$p0$p0$pcopyloado=L$psroa$p03$p0$pcopyload.a3o;
				L$psroa$p0$p0$pcopyload=L$psroa$p03$p0$pcopyload.a3;
				L$ppre$pi=L$psroa$p03$p0$pcopyload.a4;
				if(L$psroa$p0$p0$pcopyload===L$ppre$pi&&L$psroa$p0$p0$pcopyloado===0){
					Lgeptoindexphi3=L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0;
				}else{
					Lgeptoindexphi3=L$psroa$p0$p0$pcopyload[L$psroa$p0$p0$pcopyloado]|0;
				}
				if((Lgeptoindexphi3|0)!==-1){
					if(L$pidx$pval)break a;
					break b;
				}
			}
			if(!(L$pidx$pval))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=L$pidx1$pval;
}
function __ZNSt9__num_getIwE17__stage2_int_prepERSt8ios_basePwRw(Larg0,L$p0$p7$p0$pval,Larg2,Marg2,Larg3,Marg3){
	var tmp0=0,tmp1=null;
	L$p0$p7$p0$pval.i1=(L$p0$p7$p0$pval.i1|0)+1|0;
	tmp1=L$p0$p7$p0$pval.a2.a0;
	tmp1=tmp1[(__ZNSt5ctypeIwE2idE$p1|0)-1|0];
	tmp1.a0.a13(tmp1,__ZNSt14__num_get_base5__srcE,0,__ZNSt14__num_get_base5__srcE,26,Larg2,Marg2);
	tmp1=L$p0$p7$p0$pval.a2.a0;
	tmp1=tmp1[(__ZNSt8numpunctIwE2idE$p1|0)-1|0];
	Larg3[Marg3]=tmp1.a0.a5(tmp1)|0;
	tmp1.a0.a6(Larg0,tmp1);
	tmp0=L$p0$p7$p0$pval.i1|0;
	L$p0$p7$p0$pval.i1=tmp0-1|0;
	if((tmp0|0)===0)L$p0$p7$p0$pval.a0.a3(L$p0$p7$p0$pval);
}
function __ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjRm(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Marg6){
	var tmp0=null,tmp1=null,tmp2=null,LmergedArray=null,tmp4=null,tmp5=null,tmp6=null,tmp7=null,L$psroa$p0$p0$pcopyload=null,L$psroa$p0$p0$pcopyloado=0,L$psroa$p03$p0$pcopyload=null,L$pidx$pval=0,L$pidx1$pval=null,L$ppre$pi=null,L$ppre$pio=0,Lgeptoindexphi3=0,tmp14=null,tmp14o=0,tmp15=null,tmp16=0,Lgeptoindexphi7=0,Lgeptoindexphi12=0;
	L$psroa$p0$p0$pcopyload=Larg2.a0;
	L$psroa$p03$p0$pcopyload=Larg3.a0;
	L$pidx$pval=Larg4.i1|0;
	L$pidx1$pval=Larg4.a7.a0;
	tmp0=new Int32Array(2);
	tmp1=[nullObj];
	tmp2=new Int32Array(26);
	LmergedArray=new Int32Array(2);
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp5={i0:0,i1:0,a2:nullArray};
	tmp6=new Int32Array(40);
	tmp7=[nullObj];
	switch(L$pidx$pval&74&127){
		case 64:
		L$pidx$pval=8;
		break;
		case 8:
		L$pidx$pval=16;
		break;
		case 0:
		L$pidx$pval=0;
		break;
		default:
		L$pidx$pval=10;
	}
	__ZNSt9__num_getIwE17__stage2_int_prepERSt8ios_basePwRw(tmp4,L$pidx1$pval,tmp2,0,LmergedArray,0);
	tmp5.i0=0;
	tmp5.i1=0;
	tmp5.a2=nullArray;
	__ZNSs6appendEjc(tmp5,1);
	L$ppre$pi=tmp5.a2;
	tmp1[0]={d:L$ppre$pi,o:0};
	tmp7[0]={d:tmp6,o:0};
	LmergedArray[1]=0;
	Lgeptoindexphi3=LmergedArray[0]|0;
	L$pidx1$pval=L$psroa$p0$p0$pcopyload;
	while(1){
		if(L$psroa$p0$p0$pcopyload!==null){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0){
				tmp16=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
			}else{
				tmp16=tmp14[tmp14o]|0;
			}
			L$pidx1$pval=((tmp16|0)===-1?null:L$pidx1$pval);
			L$psroa$p0$p0$pcopyload=((tmp16|0)===-1?null:L$psroa$p0$p0$pcopyload);
			tmp16=(tmp16|0)===-1?1:0;
		}else{
			tmp16=1;
			L$psroa$p0$p0$pcopyload=null;
		}
		a:{
			if(L$psroa$p03$p0$pcopyload!==null){
				tmp14o=L$psroa$p03$p0$pcopyload.a3o;
				tmp14=L$psroa$p03$p0$pcopyload.a3;
				tmp15=L$psroa$p03$p0$pcopyload.a4;
				if(tmp14===tmp15&&tmp14o===0){
					Lgeptoindexphi7=L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0;
				}else{
					Lgeptoindexphi7=tmp14[tmp14o]|0;
				}
				if((Lgeptoindexphi7|0)!==-1){
					if(tmp16)break a;
					break;
				}
			}
			if(tmp16){
				L$psroa$p03$p0$pcopyload=null;
				break;
			}
			L$psroa$p03$p0$pcopyload=null;
		}
		tmp14=tmp1[0];
		tmp16=tmp5.i1|0;
		if(tmp14.d===L$ppre$pi&&tmp14.o===(0+tmp16|0)){
			Lgeptoindexphi7=tmp16<<1;
			if(Lgeptoindexphi7>>>0<tmp16>>>0){
				L$ppre$pi[Lgeptoindexphi7]=0;
				tmp5.i1=Lgeptoindexphi7;
			}else __ZNSs6appendEjc(tmp5,tmp16);
			Lgeptoindexphi7=tmp5.i0|0;
			if(Lgeptoindexphi7>>>0<2){
				Lgeptoindexphi7=0;
			}else{
				Lgeptoindexphi7=(Lgeptoindexphi7& -2)-1|0;
			}
			Lgeptoindexphi12=tmp5.i1|0;
			if(Lgeptoindexphi7>>>0<Lgeptoindexphi12>>>0){
				L$ppre$pi=tmp5.a2;
				L$ppre$pi[Lgeptoindexphi7]=0;
				tmp5.i1=Lgeptoindexphi7;
			}else{
				__ZNSs6appendEjc(tmp5,Lgeptoindexphi7-Lgeptoindexphi12|0);
				L$ppre$pi=tmp5.a2;
			}
			tmp1[0]={d:L$ppre$pi,o:0+tmp16|0};
		}
		tmp14o=L$psroa$p0$p0$pcopyload.a3o;
		tmp14=L$psroa$p0$p0$pcopyload.a3;
		tmp15=L$psroa$p0$p0$pcopyload.a4;
		if(tmp14===tmp15&&tmp14o===0){
			tmp16=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			tmp16=tmp14[tmp14o]|0;
		}
		if((__ZNSt9__num_getIwE17__stage2_int_loopEwiPcRS1_RjwRKSsPjRS6_Pw(tmp16,L$pidx$pval,L$ppre$pi,0,tmp1,0,LmergedArray,1,Lgeptoindexphi3,tmp4,tmp6,0,tmp7,0,tmp2,0)|0|0)===0){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0)L$psroa$p0$p0$pcopyload.a0.a11(L$psroa$p0$p0$pcopyload)|0;
			else{
				L$psroa$p0$p0$pcopyload.a3=tmp14;
				L$psroa$p0$p0$pcopyload.a3o=tmp14o+1|0;
			}
			continue;
		}
		break;
	}
	if((tmp4.i1|0)!==0){
		tmp14=tmp7[0];
		if((((tmp14.o)*4)-((0)*4)|0)<160){
			Lgeptoindexphi3=LmergedArray[1]|0;
			tmp7[0]={d:tmp14.d,o:tmp14.o+1|0};
			tmp14.d[tmp14.o]=Lgeptoindexphi3;
		}
	}
	tmp14=tmp1[0];
	if(L$ppre$pi===tmp14.d&&0===tmp14.o){
		Larg5[Marg5]=4;
		L$pidx$pval=0;
	}else if((L$ppre$pi[0]&255)===45){
		Larg5[Marg5]=4;
		L$pidx$pval=0;
	}else{
		Lgeptoindexphi3=_impure_data.i0|0;
		_impure_data.i0=0;
		__strtoull_r(tmp0,0,_impure_data,L$ppre$pi,0,tmp1,0,L$pidx$pval);
		tmp16=tmp0[1]|0;
		L$pidx$pval=tmp0[0]|0;
		Lgeptoindexphi7=_impure_data.i0|0;
		if((Lgeptoindexphi7|0)===0)_impure_data.i0=Lgeptoindexphi3;
		L$ppre$pi=tmp1[0];
		a:{
			if(L$ppre$pi.d===tmp14.d&&L$ppre$pi.o===tmp14.o){
				if((tmp16|0)!==0){
					L$pidx$pval=-1;
				}else{
					if((Lgeptoindexphi7|0)!==34)break a;
					L$pidx$pval=-1;
				}
			}else{
				L$pidx$pval=0;
			}
			Larg5[Marg5]=4;
		}
	}
	Larg6[Marg6]=L$pidx$pval;
	L$ppre$pi=tmp7[0];
	a:if((tmp4.i1|0)!==0){
		if(tmp6!==L$ppre$pi.d||0!==L$ppre$pi.o)if((L$ppre$pi.o+ -1|0)>0){
			Lgeptoindexphi3=0;
			L$pidx$pval=-1;
			while(1){
				tmp16=tmp6[Lgeptoindexphi3]|0;
				tmp6[Lgeptoindexphi3]=L$ppre$pi.d[L$ppre$pi.o+L$pidx$pval|0]|0;
				L$ppre$pi.d[L$ppre$pi.o+L$pidx$pval|0]=tmp16;
				Lgeptoindexphi3=Lgeptoindexphi3+1|0;
				L$pidx$pval=L$pidx$pval-1|0;
				if((0+Lgeptoindexphi3|0)<(L$ppre$pi.o+L$pidx$pval|0))continue;
				break;
			}
		}
		tmp14=tmp4.a2;
		L$pidx$pval=tmp14[0]|0;
		Lgeptoindexphi3=L$pidx$pval<<24>0&&(L$pidx$pval&255)!==127?1:0;
		if((L$ppre$pi.o+ -1|0)>0){
			tmp16=(0+(tmp4.i1|0)|0);
			Lgeptoindexphi12=0;
			Lgeptoindexphi7=0;
			while(1){
				if(Lgeptoindexphi3)if((tmp6[Lgeptoindexphi7]|0)!==(L$pidx$pval<<24>>24|0)){
					Larg5[Marg5]=4;
					break a;
				}
				if((tmp16-(0+Lgeptoindexphi12|0)|0)>1){
					Lgeptoindexphi12=Lgeptoindexphi12+1|0;
					L$pidx$pval=tmp14[Lgeptoindexphi12]|0;
				}
				Lgeptoindexphi7=Lgeptoindexphi7+1|0;
				Lgeptoindexphi3=L$pidx$pval<<24>0&&(L$pidx$pval&255)!==127?1:0;
				if((0+Lgeptoindexphi7|0)<(L$ppre$pi.o+ -1|0))continue;
				break;
			}
		}
		if(Lgeptoindexphi3)if((L$ppre$pi.d[L$ppre$pi.o+ -1|0]|0)-1>>>0>=L$pidx$pval<<24>>24>>>0)Larg5[Marg5]=4;
	}
	if(L$psroa$p0$p0$pcopyload!==null){
		L$ppre$pio=L$psroa$p0$p0$pcopyload.a3o;
		L$ppre$pi=L$psroa$p0$p0$pcopyload.a3;
		tmp14=L$psroa$p0$p0$pcopyload.a4;
		if(L$ppre$pi===tmp14&&L$ppre$pio===0){
			L$pidx$pval=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			L$pidx$pval=L$ppre$pi[L$ppre$pio]|0;
		}
		L$pidx1$pval=((L$pidx$pval|0)===-1?null:L$pidx1$pval);
		L$pidx$pval=(L$pidx$pval|0)===-1?1:0;
	}else{
		L$pidx$pval=1;
	}
	a:{
		b:{
			if(L$psroa$p03$p0$pcopyload!==null){
				L$psroa$p0$p0$pcopyloado=L$psroa$p03$p0$pcopyload.a3o;
				L$psroa$p0$p0$pcopyload=L$psroa$p03$p0$pcopyload.a3;
				L$ppre$pi=L$psroa$p03$p0$pcopyload.a4;
				if(L$psroa$p0$p0$pcopyload===L$ppre$pi&&L$psroa$p0$p0$pcopyloado===0){
					Lgeptoindexphi3=L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0;
				}else{
					Lgeptoindexphi3=L$psroa$p0$p0$pcopyload[L$psroa$p0$p0$pcopyloado]|0;
				}
				if((Lgeptoindexphi3|0)!==-1){
					if(L$pidx$pval)break a;
					break b;
				}
			}
			if(!(L$pidx$pval))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=L$pidx1$pval;
}
function __ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjS7_(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Marg6){
	var tmp0=null,tmp1=null,tmp2=null,LmergedArray=null,tmp4=null,tmp5=null,tmp6=null,tmp7=null,L$psroa$p0$p0$pcopyload=null,L$psroa$p0$p0$pcopyloado=0,L$psroa$p03$p0$pcopyload=null,L$pidx$pval=0,L$pidx1$pval=null,L$ppre$pi=null,L$ppre$pio=0,Lgeptoindexphi3=0,tmp14=null,tmp14o=0,tmp15=null,tmp16=0,Lgeptoindexphi7=0,Lgeptoindexphi12=0;
	L$psroa$p0$p0$pcopyload=Larg2.a0;
	L$psroa$p03$p0$pcopyload=Larg3.a0;
	L$pidx$pval=Larg4.i1|0;
	L$pidx1$pval=Larg4.a7.a0;
	tmp0=new Int32Array(2);
	tmp1=[nullObj];
	tmp2=new Int32Array(26);
	LmergedArray=new Int32Array(2);
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp5={i0:0,i1:0,a2:nullArray};
	tmp6=new Int32Array(40);
	tmp7=[nullObj];
	switch(L$pidx$pval&74&127){
		case 64:
		L$pidx$pval=8;
		break;
		case 8:
		L$pidx$pval=16;
		break;
		case 0:
		L$pidx$pval=0;
		break;
		default:
		L$pidx$pval=10;
	}
	__ZNSt9__num_getIwE17__stage2_int_prepERSt8ios_basePwRw(tmp4,L$pidx1$pval,tmp2,0,LmergedArray,0);
	tmp5.i0=0;
	tmp5.i1=0;
	tmp5.a2=nullArray;
	__ZNSs6appendEjc(tmp5,1);
	L$ppre$pi=tmp5.a2;
	tmp1[0]={d:L$ppre$pi,o:0};
	tmp7[0]={d:tmp6,o:0};
	LmergedArray[1]=0;
	Lgeptoindexphi3=LmergedArray[0]|0;
	L$pidx1$pval=L$psroa$p0$p0$pcopyload;
	while(1){
		if(L$psroa$p0$p0$pcopyload!==null){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0){
				tmp16=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
			}else{
				tmp16=tmp14[tmp14o]|0;
			}
			L$pidx1$pval=((tmp16|0)===-1?null:L$pidx1$pval);
			L$psroa$p0$p0$pcopyload=((tmp16|0)===-1?null:L$psroa$p0$p0$pcopyload);
			tmp16=(tmp16|0)===-1?1:0;
		}else{
			tmp16=1;
			L$psroa$p0$p0$pcopyload=null;
		}
		a:{
			if(L$psroa$p03$p0$pcopyload!==null){
				tmp14o=L$psroa$p03$p0$pcopyload.a3o;
				tmp14=L$psroa$p03$p0$pcopyload.a3;
				tmp15=L$psroa$p03$p0$pcopyload.a4;
				if(tmp14===tmp15&&tmp14o===0){
					Lgeptoindexphi7=L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0;
				}else{
					Lgeptoindexphi7=tmp14[tmp14o]|0;
				}
				if((Lgeptoindexphi7|0)!==-1){
					if(tmp16)break a;
					break;
				}
			}
			if(tmp16){
				L$psroa$p03$p0$pcopyload=null;
				break;
			}
			L$psroa$p03$p0$pcopyload=null;
		}
		tmp14=tmp1[0];
		tmp16=tmp5.i1|0;
		if(tmp14.d===L$ppre$pi&&tmp14.o===(0+tmp16|0)){
			Lgeptoindexphi7=tmp16<<1;
			if(Lgeptoindexphi7>>>0<tmp16>>>0){
				L$ppre$pi[Lgeptoindexphi7]=0;
				tmp5.i1=Lgeptoindexphi7;
			}else __ZNSs6appendEjc(tmp5,tmp16);
			Lgeptoindexphi7=tmp5.i0|0;
			if(Lgeptoindexphi7>>>0<2){
				Lgeptoindexphi7=0;
			}else{
				Lgeptoindexphi7=(Lgeptoindexphi7& -2)-1|0;
			}
			Lgeptoindexphi12=tmp5.i1|0;
			if(Lgeptoindexphi7>>>0<Lgeptoindexphi12>>>0){
				L$ppre$pi=tmp5.a2;
				L$ppre$pi[Lgeptoindexphi7]=0;
				tmp5.i1=Lgeptoindexphi7;
			}else{
				__ZNSs6appendEjc(tmp5,Lgeptoindexphi7-Lgeptoindexphi12|0);
				L$ppre$pi=tmp5.a2;
			}
			tmp1[0]={d:L$ppre$pi,o:0+tmp16|0};
		}
		tmp14o=L$psroa$p0$p0$pcopyload.a3o;
		tmp14=L$psroa$p0$p0$pcopyload.a3;
		tmp15=L$psroa$p0$p0$pcopyload.a4;
		if(tmp14===tmp15&&tmp14o===0){
			tmp16=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			tmp16=tmp14[tmp14o]|0;
		}
		if((__ZNSt9__num_getIwE17__stage2_int_loopEwiPcRS1_RjwRKSsPjRS6_Pw(tmp16,L$pidx$pval,L$ppre$pi,0,tmp1,0,LmergedArray,1,Lgeptoindexphi3,tmp4,tmp6,0,tmp7,0,tmp2,0)|0|0)===0){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0)L$psroa$p0$p0$pcopyload.a0.a11(L$psroa$p0$p0$pcopyload)|0;
			else{
				L$psroa$p0$p0$pcopyload.a3=tmp14;
				L$psroa$p0$p0$pcopyload.a3o=tmp14o+1|0;
			}
			continue;
		}
		break;
	}
	if((tmp4.i1|0)!==0){
		tmp14=tmp7[0];
		if((((tmp14.o)*4)-((0)*4)|0)<160){
			Lgeptoindexphi3=LmergedArray[1]|0;
			tmp7[0]={d:tmp14.d,o:tmp14.o+1|0};
			tmp14.d[tmp14.o]=Lgeptoindexphi3;
		}
	}
	tmp14=tmp1[0];
	if(L$ppre$pi===tmp14.d&&0===tmp14.o){
		Larg5[Marg5]=4;
		L$pidx$pval=0;
	}else if((L$ppre$pi[0]&255)===45){
		Larg5[Marg5]=4;
		L$pidx$pval=0;
	}else{
		Lgeptoindexphi3=_impure_data.i0|0;
		_impure_data.i0=0;
		__strtoull_r(tmp0,0,_impure_data,L$ppre$pi,0,tmp1,0,L$pidx$pval);
		tmp16=tmp0[1]|0;
		L$pidx$pval=tmp0[0]|0;
		Lgeptoindexphi7=_impure_data.i0|0;
		if((Lgeptoindexphi7|0)===0)_impure_data.i0=Lgeptoindexphi3;
		L$ppre$pi=tmp1[0];
		a:{
			if(L$ppre$pi.d===tmp14.d&&L$ppre$pi.o===tmp14.o){
				if((tmp16|0)!==0){
					L$pidx$pval=-1;
				}else{
					if((Lgeptoindexphi7|0)!==34)break a;
					L$pidx$pval=-1;
				}
			}else{
				L$pidx$pval=0;
			}
			Larg5[Marg5]=4;
		}
	}
	Larg6[Marg6]=L$pidx$pval;
	L$ppre$pi=tmp7[0];
	a:if((tmp4.i1|0)!==0){
		if(tmp6!==L$ppre$pi.d||0!==L$ppre$pi.o)if((L$ppre$pi.o+ -1|0)>0){
			Lgeptoindexphi3=0;
			L$pidx$pval=-1;
			while(1){
				tmp16=tmp6[Lgeptoindexphi3]|0;
				tmp6[Lgeptoindexphi3]=L$ppre$pi.d[L$ppre$pi.o+L$pidx$pval|0]|0;
				L$ppre$pi.d[L$ppre$pi.o+L$pidx$pval|0]=tmp16;
				Lgeptoindexphi3=Lgeptoindexphi3+1|0;
				L$pidx$pval=L$pidx$pval-1|0;
				if((0+Lgeptoindexphi3|0)<(L$ppre$pi.o+L$pidx$pval|0))continue;
				break;
			}
		}
		tmp14=tmp4.a2;
		L$pidx$pval=tmp14[0]|0;
		Lgeptoindexphi3=L$pidx$pval<<24>0&&(L$pidx$pval&255)!==127?1:0;
		if((L$ppre$pi.o+ -1|0)>0){
			tmp16=(0+(tmp4.i1|0)|0);
			Lgeptoindexphi12=0;
			Lgeptoindexphi7=0;
			while(1){
				if(Lgeptoindexphi3)if((tmp6[Lgeptoindexphi7]|0)!==(L$pidx$pval<<24>>24|0)){
					Larg5[Marg5]=4;
					break a;
				}
				if((tmp16-(0+Lgeptoindexphi12|0)|0)>1){
					Lgeptoindexphi12=Lgeptoindexphi12+1|0;
					L$pidx$pval=tmp14[Lgeptoindexphi12]|0;
				}
				Lgeptoindexphi7=Lgeptoindexphi7+1|0;
				Lgeptoindexphi3=L$pidx$pval<<24>0&&(L$pidx$pval&255)!==127?1:0;
				if((0+Lgeptoindexphi7|0)<(L$ppre$pi.o+ -1|0))continue;
				break;
			}
		}
		if(Lgeptoindexphi3)if((L$ppre$pi.d[L$ppre$pi.o+ -1|0]|0)-1>>>0>=L$pidx$pval<<24>>24>>>0)Larg5[Marg5]=4;
	}
	if(L$psroa$p0$p0$pcopyload!==null){
		L$ppre$pio=L$psroa$p0$p0$pcopyload.a3o;
		L$ppre$pi=L$psroa$p0$p0$pcopyload.a3;
		tmp14=L$psroa$p0$p0$pcopyload.a4;
		if(L$ppre$pi===tmp14&&L$ppre$pio===0){
			L$pidx$pval=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			L$pidx$pval=L$ppre$pi[L$ppre$pio]|0;
		}
		L$pidx1$pval=((L$pidx$pval|0)===-1?null:L$pidx1$pval);
		L$pidx$pval=(L$pidx$pval|0)===-1?1:0;
	}else{
		L$pidx$pval=1;
	}
	a:{
		b:{
			if(L$psroa$p03$p0$pcopyload!==null){
				L$psroa$p0$p0$pcopyloado=L$psroa$p03$p0$pcopyload.a3o;
				L$psroa$p0$p0$pcopyload=L$psroa$p03$p0$pcopyload.a3;
				L$ppre$pi=L$psroa$p03$p0$pcopyload.a4;
				if(L$psroa$p0$p0$pcopyload===L$ppre$pi&&L$psroa$p0$p0$pcopyloado===0){
					Lgeptoindexphi3=L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0;
				}else{
					Lgeptoindexphi3=L$psroa$p0$p0$pcopyload[L$psroa$p0$p0$pcopyloado]|0;
				}
				if((Lgeptoindexphi3|0)!==-1){
					if(L$pidx$pval)break a;
					break b;
				}
			}
			if(!(L$pidx$pval))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=L$pidx1$pval;
}
function __ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjRt(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Marg6){
	var tmp0=null,tmp1=null,tmp2=null,LmergedArray=null,tmp4=null,tmp5=null,tmp6=null,tmp7=null,L$psroa$p0$p0$pcopyload=null,L$psroa$p0$p0$pcopyloado=0,L$psroa$p03$p0$pcopyload=null,L$pidx$pval=0,L$pidx1$pval=null,L$ppre$pi=null,L$ppre$pio=0,Lgeptoindexphi3=0,tmp14=null,tmp14o=0,tmp15=null,tmp16=0,Lgeptoindexphi7=0,Lgeptoindexphi12=0;
	L$psroa$p0$p0$pcopyload=Larg2.a0;
	L$psroa$p03$p0$pcopyload=Larg3.a0;
	L$pidx$pval=Larg4.i1|0;
	L$pidx1$pval=Larg4.a7.a0;
	tmp0=new Int32Array(2);
	tmp1=[nullObj];
	tmp2=new Int32Array(26);
	LmergedArray=new Int32Array(2);
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp5={i0:0,i1:0,a2:nullArray};
	tmp6=new Int32Array(40);
	tmp7=[nullObj];
	switch(L$pidx$pval&74&127){
		case 64:
		L$pidx$pval=8;
		break;
		case 8:
		L$pidx$pval=16;
		break;
		case 0:
		L$pidx$pval=0;
		break;
		default:
		L$pidx$pval=10;
	}
	__ZNSt9__num_getIwE17__stage2_int_prepERSt8ios_basePwRw(tmp4,L$pidx1$pval,tmp2,0,LmergedArray,0);
	tmp5.i0=0;
	tmp5.i1=0;
	tmp5.a2=nullArray;
	__ZNSs6appendEjc(tmp5,1);
	L$ppre$pi=tmp5.a2;
	tmp1[0]={d:L$ppre$pi,o:0};
	tmp7[0]={d:tmp6,o:0};
	LmergedArray[1]=0;
	Lgeptoindexphi3=LmergedArray[0]|0;
	L$pidx1$pval=L$psroa$p0$p0$pcopyload;
	while(1){
		if(L$psroa$p0$p0$pcopyload!==null){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0){
				tmp16=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
			}else{
				tmp16=tmp14[tmp14o]|0;
			}
			L$pidx1$pval=((tmp16|0)===-1?null:L$pidx1$pval);
			L$psroa$p0$p0$pcopyload=((tmp16|0)===-1?null:L$psroa$p0$p0$pcopyload);
			tmp16=(tmp16|0)===-1?1:0;
		}else{
			tmp16=1;
			L$psroa$p0$p0$pcopyload=null;
		}
		a:{
			if(L$psroa$p03$p0$pcopyload!==null){
				tmp14o=L$psroa$p03$p0$pcopyload.a3o;
				tmp14=L$psroa$p03$p0$pcopyload.a3;
				tmp15=L$psroa$p03$p0$pcopyload.a4;
				if(tmp14===tmp15&&tmp14o===0){
					Lgeptoindexphi7=L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0;
				}else{
					Lgeptoindexphi7=tmp14[tmp14o]|0;
				}
				if((Lgeptoindexphi7|0)!==-1){
					if(tmp16)break a;
					break;
				}
			}
			if(tmp16){
				L$psroa$p03$p0$pcopyload=null;
				break;
			}
			L$psroa$p03$p0$pcopyload=null;
		}
		tmp14=tmp1[0];
		tmp16=tmp5.i1|0;
		if(tmp14.d===L$ppre$pi&&tmp14.o===(0+tmp16|0)){
			Lgeptoindexphi7=tmp16<<1;
			if(Lgeptoindexphi7>>>0<tmp16>>>0){
				L$ppre$pi[Lgeptoindexphi7]=0;
				tmp5.i1=Lgeptoindexphi7;
			}else __ZNSs6appendEjc(tmp5,tmp16);
			Lgeptoindexphi7=tmp5.i0|0;
			if(Lgeptoindexphi7>>>0<2){
				Lgeptoindexphi7=0;
			}else{
				Lgeptoindexphi7=(Lgeptoindexphi7& -2)-1|0;
			}
			Lgeptoindexphi12=tmp5.i1|0;
			if(Lgeptoindexphi7>>>0<Lgeptoindexphi12>>>0){
				L$ppre$pi=tmp5.a2;
				L$ppre$pi[Lgeptoindexphi7]=0;
				tmp5.i1=Lgeptoindexphi7;
			}else{
				__ZNSs6appendEjc(tmp5,Lgeptoindexphi7-Lgeptoindexphi12|0);
				L$ppre$pi=tmp5.a2;
			}
			tmp1[0]={d:L$ppre$pi,o:0+tmp16|0};
		}
		tmp14o=L$psroa$p0$p0$pcopyload.a3o;
		tmp14=L$psroa$p0$p0$pcopyload.a3;
		tmp15=L$psroa$p0$p0$pcopyload.a4;
		if(tmp14===tmp15&&tmp14o===0){
			tmp16=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			tmp16=tmp14[tmp14o]|0;
		}
		if((__ZNSt9__num_getIwE17__stage2_int_loopEwiPcRS1_RjwRKSsPjRS6_Pw(tmp16,L$pidx$pval,L$ppre$pi,0,tmp1,0,LmergedArray,1,Lgeptoindexphi3,tmp4,tmp6,0,tmp7,0,tmp2,0)|0|0)===0){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0)L$psroa$p0$p0$pcopyload.a0.a11(L$psroa$p0$p0$pcopyload)|0;
			else{
				L$psroa$p0$p0$pcopyload.a3=tmp14;
				L$psroa$p0$p0$pcopyload.a3o=tmp14o+1|0;
			}
			continue;
		}
		break;
	}
	if((tmp4.i1|0)!==0){
		tmp14=tmp7[0];
		if((((tmp14.o)*4)-((0)*4)|0)<160){
			Lgeptoindexphi3=LmergedArray[1]|0;
			tmp7[0]={d:tmp14.d,o:tmp14.o+1|0};
			tmp14.d[tmp14.o]=Lgeptoindexphi3;
		}
	}
	tmp14=tmp1[0];
	if(L$ppre$pi===tmp14.d&&0===tmp14.o){
		Larg5[Marg5]=4;
		L$pidx$pval=0;
	}else if((L$ppre$pi[0]&255)===45){
		Larg5[Marg5]=4;
		L$pidx$pval=0;
	}else{
		Lgeptoindexphi3=_impure_data.i0|0;
		_impure_data.i0=0;
		__strtoull_r(tmp0,0,_impure_data,L$ppre$pi,0,tmp1,0,L$pidx$pval);
		tmp16=tmp0[1]|0;
		L$pidx$pval=tmp0[0]|0;
		Lgeptoindexphi7=_impure_data.i0|0;
		if((Lgeptoindexphi7|0)===0)_impure_data.i0=Lgeptoindexphi3;
		L$ppre$pi=tmp1[0];
		a:if(L$ppre$pi.d===tmp14.d&&L$ppre$pi.o===tmp14.o){
			if((Lgeptoindexphi7|0)!==34)if((tmp16|0)===0)if(L$pidx$pval>>>0<=65535)break a;
			Larg5[Marg5]=4;
			L$pidx$pval=65535;
		}else{
			Larg5[Marg5]=4;
			L$pidx$pval=0;
		}
	}
	Larg6[Marg6]=L$pidx$pval;
	L$ppre$pi=tmp7[0];
	a:if((tmp4.i1|0)!==0){
		if(tmp6!==L$ppre$pi.d||0!==L$ppre$pi.o)if((L$ppre$pi.o+ -1|0)>0){
			Lgeptoindexphi3=0;
			L$pidx$pval=-1;
			while(1){
				tmp16=tmp6[Lgeptoindexphi3]|0;
				tmp6[Lgeptoindexphi3]=L$ppre$pi.d[L$ppre$pi.o+L$pidx$pval|0]|0;
				L$ppre$pi.d[L$ppre$pi.o+L$pidx$pval|0]=tmp16;
				Lgeptoindexphi3=Lgeptoindexphi3+1|0;
				L$pidx$pval=L$pidx$pval-1|0;
				if((0+Lgeptoindexphi3|0)<(L$ppre$pi.o+L$pidx$pval|0))continue;
				break;
			}
		}
		tmp14=tmp4.a2;
		L$pidx$pval=tmp14[0]|0;
		Lgeptoindexphi3=L$pidx$pval<<24>0&&(L$pidx$pval&255)!==127?1:0;
		if((L$ppre$pi.o+ -1|0)>0){
			tmp16=(0+(tmp4.i1|0)|0);
			Lgeptoindexphi12=0;
			Lgeptoindexphi7=0;
			while(1){
				if(Lgeptoindexphi3)if((tmp6[Lgeptoindexphi7]|0)!==(L$pidx$pval<<24>>24|0)){
					Larg5[Marg5]=4;
					break a;
				}
				if((tmp16-(0+Lgeptoindexphi12|0)|0)>1){
					Lgeptoindexphi12=Lgeptoindexphi12+1|0;
					L$pidx$pval=tmp14[Lgeptoindexphi12]|0;
				}
				Lgeptoindexphi7=Lgeptoindexphi7+1|0;
				Lgeptoindexphi3=L$pidx$pval<<24>0&&(L$pidx$pval&255)!==127?1:0;
				if((0+Lgeptoindexphi7|0)<(L$ppre$pi.o+ -1|0))continue;
				break;
			}
		}
		if(Lgeptoindexphi3)if((L$ppre$pi.d[L$ppre$pi.o+ -1|0]|0)-1>>>0>=L$pidx$pval<<24>>24>>>0)Larg5[Marg5]=4;
	}
	if(L$psroa$p0$p0$pcopyload!==null){
		L$ppre$pio=L$psroa$p0$p0$pcopyload.a3o;
		L$ppre$pi=L$psroa$p0$p0$pcopyload.a3;
		tmp14=L$psroa$p0$p0$pcopyload.a4;
		if(L$ppre$pi===tmp14&&L$ppre$pio===0){
			L$pidx$pval=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			L$pidx$pval=L$ppre$pi[L$ppre$pio]|0;
		}
		L$pidx1$pval=((L$pidx$pval|0)===-1?null:L$pidx1$pval);
		L$pidx$pval=(L$pidx$pval|0)===-1?1:0;
	}else{
		L$pidx$pval=1;
	}
	a:{
		b:{
			if(L$psroa$p03$p0$pcopyload!==null){
				L$psroa$p0$p0$pcopyloado=L$psroa$p03$p0$pcopyload.a3o;
				L$psroa$p0$p0$pcopyload=L$psroa$p03$p0$pcopyload.a3;
				L$ppre$pi=L$psroa$p03$p0$pcopyload.a4;
				if(L$psroa$p0$p0$pcopyload===L$ppre$pi&&L$psroa$p0$p0$pcopyloado===0){
					Lgeptoindexphi3=L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0;
				}else{
					Lgeptoindexphi3=L$psroa$p0$p0$pcopyload[L$psroa$p0$p0$pcopyloado]|0;
				}
				if((Lgeptoindexphi3|0)!==-1){
					if(L$pidx$pval)break a;
					break b;
				}
			}
			if(!(L$pidx$pval))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=L$pidx1$pval;
}
function __ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjRx(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Marg6){
	var tmp0=null,tmp1=null,tmp2=null,LmergedArray=null,tmp4=null,tmp5=null,tmp6=null,tmp7=null,L$psroa$p0$p0$pcopyload=null,L$psroa$p0$p0$pcopyloado=0,L$psroa$p03$p0$pcopyload=null,L$pidx$pval=0,L$pidx1$pval=null,L$ppre$pi=null,L$ppre$pio=0,Lgeptoindexphi3=0,tmp14=null,tmp14o=0,tmp15=null,L$psroa$p6$p0$pi=0,Lgeptoindexphi7=0,Lgeptoindexphi12=0;
	L$psroa$p0$p0$pcopyload=Larg2.a0;
	L$psroa$p03$p0$pcopyload=Larg3.a0;
	L$pidx$pval=Larg4.i1|0;
	L$pidx1$pval=Larg4.a7.a0;
	tmp0=new Int32Array(2);
	tmp1=[nullObj];
	tmp2=new Int32Array(26);
	LmergedArray=new Int32Array(2);
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp5={i0:0,i1:0,a2:nullArray};
	tmp6=new Int32Array(40);
	tmp7=[nullObj];
	switch(L$pidx$pval&74&127){
		case 64:
		L$pidx$pval=8;
		break;
		case 8:
		L$pidx$pval=16;
		break;
		case 0:
		L$pidx$pval=0;
		break;
		default:
		L$pidx$pval=10;
	}
	__ZNSt9__num_getIwE17__stage2_int_prepERSt8ios_basePwRw(tmp4,L$pidx1$pval,tmp2,0,LmergedArray,0);
	tmp5.i0=0;
	tmp5.i1=0;
	tmp5.a2=nullArray;
	__ZNSs6appendEjc(tmp5,1);
	L$ppre$pi=tmp5.a2;
	tmp1[0]={d:L$ppre$pi,o:0};
	tmp7[0]={d:tmp6,o:0};
	LmergedArray[1]=0;
	Lgeptoindexphi3=LmergedArray[0]|0;
	L$pidx1$pval=L$psroa$p0$p0$pcopyload;
	while(1){
		if(L$psroa$p0$p0$pcopyload!==null){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0){
				L$psroa$p6$p0$pi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
			}else{
				L$psroa$p6$p0$pi=tmp14[tmp14o]|0;
			}
			L$pidx1$pval=((L$psroa$p6$p0$pi|0)===-1?null:L$pidx1$pval);
			L$psroa$p0$p0$pcopyload=((L$psroa$p6$p0$pi|0)===-1?null:L$psroa$p0$p0$pcopyload);
			L$psroa$p6$p0$pi=(L$psroa$p6$p0$pi|0)===-1?1:0;
		}else{
			L$psroa$p6$p0$pi=1;
			L$psroa$p0$p0$pcopyload=null;
		}
		a:{
			if(L$psroa$p03$p0$pcopyload!==null){
				tmp14o=L$psroa$p03$p0$pcopyload.a3o;
				tmp14=L$psroa$p03$p0$pcopyload.a3;
				tmp15=L$psroa$p03$p0$pcopyload.a4;
				if(tmp14===tmp15&&tmp14o===0){
					Lgeptoindexphi7=L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0;
				}else{
					Lgeptoindexphi7=tmp14[tmp14o]|0;
				}
				if((Lgeptoindexphi7|0)!==-1){
					if(L$psroa$p6$p0$pi)break a;
					break;
				}
			}
			if(L$psroa$p6$p0$pi){
				L$psroa$p03$p0$pcopyload=null;
				break;
			}
			L$psroa$p03$p0$pcopyload=null;
		}
		tmp14=tmp1[0];
		L$psroa$p6$p0$pi=tmp5.i1|0;
		if(tmp14.d===L$ppre$pi&&tmp14.o===(0+L$psroa$p6$p0$pi|0)){
			Lgeptoindexphi7=L$psroa$p6$p0$pi<<1;
			if(Lgeptoindexphi7>>>0<L$psroa$p6$p0$pi>>>0){
				L$ppre$pi[Lgeptoindexphi7]=0;
				tmp5.i1=Lgeptoindexphi7;
			}else __ZNSs6appendEjc(tmp5,L$psroa$p6$p0$pi);
			Lgeptoindexphi7=tmp5.i0|0;
			if(Lgeptoindexphi7>>>0<2){
				Lgeptoindexphi7=0;
			}else{
				Lgeptoindexphi7=(Lgeptoindexphi7& -2)-1|0;
			}
			Lgeptoindexphi12=tmp5.i1|0;
			if(Lgeptoindexphi7>>>0<Lgeptoindexphi12>>>0){
				L$ppre$pi=tmp5.a2;
				L$ppre$pi[Lgeptoindexphi7]=0;
				tmp5.i1=Lgeptoindexphi7;
			}else{
				__ZNSs6appendEjc(tmp5,Lgeptoindexphi7-Lgeptoindexphi12|0);
				L$ppre$pi=tmp5.a2;
			}
			tmp1[0]={d:L$ppre$pi,o:0+L$psroa$p6$p0$pi|0};
		}
		tmp14o=L$psroa$p0$p0$pcopyload.a3o;
		tmp14=L$psroa$p0$p0$pcopyload.a3;
		tmp15=L$psroa$p0$p0$pcopyload.a4;
		if(tmp14===tmp15&&tmp14o===0){
			L$psroa$p6$p0$pi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			L$psroa$p6$p0$pi=tmp14[tmp14o]|0;
		}
		if((__ZNSt9__num_getIwE17__stage2_int_loopEwiPcRS1_RjwRKSsPjRS6_Pw(L$psroa$p6$p0$pi,L$pidx$pval,L$ppre$pi,0,tmp1,0,LmergedArray,1,Lgeptoindexphi3,tmp4,tmp6,0,tmp7,0,tmp2,0)|0|0)===0){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0)L$psroa$p0$p0$pcopyload.a0.a11(L$psroa$p0$p0$pcopyload)|0;
			else{
				L$psroa$p0$p0$pcopyload.a3=tmp14;
				L$psroa$p0$p0$pcopyload.a3o=tmp14o+1|0;
			}
			continue;
		}
		break;
	}
	if((tmp4.i1|0)!==0){
		tmp14=tmp7[0];
		if((((tmp14.o)*4)-((0)*4)|0)<160){
			Lgeptoindexphi3=LmergedArray[1]|0;
			tmp7[0]={d:tmp14.d,o:tmp14.o+1|0};
			tmp14.d[tmp14.o]=Lgeptoindexphi3;
		}
	}
	tmp14=tmp1[0];
	if(L$ppre$pi===tmp14.d&&0===tmp14.o){
		Larg5[Marg5]=4;
		L$pidx$pval=0;
		L$psroa$p6$p0$pi=0;
	}else{
		Lgeptoindexphi3=_impure_data.i0|0;
		_impure_data.i0=0;
		__strtoll_r(tmp0,0,_impure_data,L$ppre$pi,0,tmp1,0,L$pidx$pval);
		L$psroa$p6$p0$pi=tmp0[1]|0;
		L$pidx$pval=tmp0[0]|0;
		Lgeptoindexphi7=_impure_data.i0|0;
		if((Lgeptoindexphi7|0)===0)_impure_data.i0=Lgeptoindexphi3;
		L$ppre$pi=tmp1[0];
		if(L$ppre$pi.d===tmp14.d&&L$ppre$pi.o===tmp14.o){
			if((Lgeptoindexphi7|0)===34){
				Larg5[Marg5]=4;
				L$pidx$pval=(L$psroa$p6$p0$pi|0)>0||(L$psroa$p6$p0$pi|0)===0&&(L$pidx$pval|0)!==0?1:0;
				L$psroa$p6$p0$pi=L$pidx$pval?2147483647|0: -2147483648|0;
				L$pidx$pval=L$pidx$pval<<31>>31;
			}
		}else{
			Larg5[Marg5]=4;
			L$pidx$pval=0;
			L$psroa$p6$p0$pi=0;
		}
	}
	Larg6[Marg6+1|0]=L$psroa$p6$p0$pi;
	Larg6[Marg6]=L$pidx$pval;
	L$ppre$pi=tmp7[0];
	a:if((tmp4.i1|0)!==0){
		if(tmp6!==L$ppre$pi.d||0!==L$ppre$pi.o)if((L$ppre$pi.o+ -1|0)>0){
			Lgeptoindexphi3=0;
			L$pidx$pval=-1;
			while(1){
				L$psroa$p6$p0$pi=tmp6[Lgeptoindexphi3]|0;
				tmp6[Lgeptoindexphi3]=L$ppre$pi.d[L$ppre$pi.o+L$pidx$pval|0]|0;
				L$ppre$pi.d[L$ppre$pi.o+L$pidx$pval|0]=L$psroa$p6$p0$pi;
				Lgeptoindexphi3=Lgeptoindexphi3+1|0;
				L$pidx$pval=L$pidx$pval-1|0;
				if((0+Lgeptoindexphi3|0)<(L$ppre$pi.o+L$pidx$pval|0))continue;
				break;
			}
		}
		tmp14=tmp4.a2;
		L$pidx$pval=tmp14[0]|0;
		Lgeptoindexphi3=L$pidx$pval<<24>0&&(L$pidx$pval&255)!==127?1:0;
		if((L$ppre$pi.o+ -1|0)>0){
			L$psroa$p6$p0$pi=(0+(tmp4.i1|0)|0);
			Lgeptoindexphi12=0;
			Lgeptoindexphi7=0;
			while(1){
				if(Lgeptoindexphi3)if((tmp6[Lgeptoindexphi7]|0)!==(L$pidx$pval<<24>>24|0)){
					Larg5[Marg5]=4;
					break a;
				}
				if((L$psroa$p6$p0$pi-(0+Lgeptoindexphi12|0)|0)>1){
					Lgeptoindexphi12=Lgeptoindexphi12+1|0;
					L$pidx$pval=tmp14[Lgeptoindexphi12]|0;
				}
				Lgeptoindexphi7=Lgeptoindexphi7+1|0;
				Lgeptoindexphi3=L$pidx$pval<<24>0&&(L$pidx$pval&255)!==127?1:0;
				if((0+Lgeptoindexphi7|0)<(L$ppre$pi.o+ -1|0))continue;
				break;
			}
		}
		if(Lgeptoindexphi3)if((L$ppre$pi.d[L$ppre$pi.o+ -1|0]|0)-1>>>0>=L$pidx$pval<<24>>24>>>0)Larg5[Marg5]=4;
	}
	if(L$psroa$p0$p0$pcopyload!==null){
		L$ppre$pio=L$psroa$p0$p0$pcopyload.a3o;
		L$ppre$pi=L$psroa$p0$p0$pcopyload.a3;
		tmp14=L$psroa$p0$p0$pcopyload.a4;
		if(L$ppre$pi===tmp14&&L$ppre$pio===0){
			L$pidx$pval=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			L$pidx$pval=L$ppre$pi[L$ppre$pio]|0;
		}
		L$pidx1$pval=((L$pidx$pval|0)===-1?null:L$pidx1$pval);
		L$pidx$pval=(L$pidx$pval|0)===-1?1:0;
	}else{
		L$pidx$pval=1;
	}
	a:{
		b:{
			if(L$psroa$p03$p0$pcopyload!==null){
				L$psroa$p0$p0$pcopyloado=L$psroa$p03$p0$pcopyload.a3o;
				L$psroa$p0$p0$pcopyload=L$psroa$p03$p0$pcopyload.a3;
				L$ppre$pi=L$psroa$p03$p0$pcopyload.a4;
				if(L$psroa$p0$p0$pcopyload===L$ppre$pi&&L$psroa$p0$p0$pcopyloado===0){
					Lgeptoindexphi3=L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0;
				}else{
					Lgeptoindexphi3=L$psroa$p0$p0$pcopyload[L$psroa$p0$p0$pcopyloado]|0;
				}
				if((Lgeptoindexphi3|0)!==-1){
					if(L$pidx$pval)break a;
					break b;
				}
			}
			if(!(L$pidx$pval))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=L$pidx1$pval;
}
function __ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjRl(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Marg6){
	var tmp0=null,tmp1=null,tmp2=null,LmergedArray=null,tmp4=null,tmp5=null,tmp6=null,tmp7=null,L$psroa$p0$p0$pcopyload=null,L$psroa$p0$p0$pcopyloado=0,L$psroa$p03$p0$pcopyload=null,L$pidx$pval=0,L$pidx1$pval=null,L$ppre$pi=null,L$ppre$pio=0,Lgeptoindexphi5=0,tmp14=null,tmp14o=0,tmp15=null,tmp16=0,Lgeptoindexphi9=0,Lgeptoindexphi14=0;
	L$psroa$p0$p0$pcopyload=Larg2.a0;
	L$psroa$p03$p0$pcopyload=Larg3.a0;
	L$pidx$pval=Larg4.i1|0;
	L$pidx1$pval=Larg4.a7.a0;
	tmp0=new Int32Array(2);
	tmp1=[nullObj];
	tmp2=new Int32Array(26);
	LmergedArray=new Int32Array(2);
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp5={i0:0,i1:0,a2:nullArray};
	tmp6=new Int32Array(40);
	tmp7=[nullObj];
	switch(L$pidx$pval&74&127){
		case 64:
		L$pidx$pval=8;
		break;
		case 8:
		L$pidx$pval=16;
		break;
		case 0:
		L$pidx$pval=0;
		break;
		default:
		L$pidx$pval=10;
	}
	__ZNSt9__num_getIwE17__stage2_int_prepERSt8ios_basePwRw(tmp4,L$pidx1$pval,tmp2,0,LmergedArray,0);
	tmp5.i0=0;
	tmp5.i1=0;
	tmp5.a2=nullArray;
	__ZNSs6appendEjc(tmp5,1);
	L$ppre$pi=tmp5.a2;
	tmp1[0]={d:L$ppre$pi,o:0};
	tmp7[0]={d:tmp6,o:0};
	LmergedArray[1]=0;
	Lgeptoindexphi5=LmergedArray[0]|0;
	L$pidx1$pval=L$psroa$p0$p0$pcopyload;
	while(1){
		if(L$psroa$p0$p0$pcopyload!==null){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0){
				tmp16=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
			}else{
				tmp16=tmp14[tmp14o]|0;
			}
			L$pidx1$pval=((tmp16|0)===-1?null:L$pidx1$pval);
			L$psroa$p0$p0$pcopyload=((tmp16|0)===-1?null:L$psroa$p0$p0$pcopyload);
			tmp16=(tmp16|0)===-1?1:0;
		}else{
			tmp16=1;
			L$psroa$p0$p0$pcopyload=null;
		}
		a:{
			if(L$psroa$p03$p0$pcopyload!==null){
				tmp14o=L$psroa$p03$p0$pcopyload.a3o;
				tmp14=L$psroa$p03$p0$pcopyload.a3;
				tmp15=L$psroa$p03$p0$pcopyload.a4;
				if(tmp14===tmp15&&tmp14o===0){
					Lgeptoindexphi9=L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0;
				}else{
					Lgeptoindexphi9=tmp14[tmp14o]|0;
				}
				if((Lgeptoindexphi9|0)!==-1){
					if(tmp16)break a;
					break;
				}
			}
			if(tmp16){
				L$psroa$p03$p0$pcopyload=null;
				break;
			}
			L$psroa$p03$p0$pcopyload=null;
		}
		tmp14=tmp1[0];
		tmp16=tmp5.i1|0;
		if(tmp14.d===L$ppre$pi&&tmp14.o===(0+tmp16|0)){
			Lgeptoindexphi9=tmp16<<1;
			if(Lgeptoindexphi9>>>0<tmp16>>>0){
				L$ppre$pi[Lgeptoindexphi9]=0;
				tmp5.i1=Lgeptoindexphi9;
			}else __ZNSs6appendEjc(tmp5,tmp16);
			Lgeptoindexphi9=tmp5.i0|0;
			if(Lgeptoindexphi9>>>0<2){
				Lgeptoindexphi9=0;
			}else{
				Lgeptoindexphi9=(Lgeptoindexphi9& -2)-1|0;
			}
			Lgeptoindexphi14=tmp5.i1|0;
			if(Lgeptoindexphi9>>>0<Lgeptoindexphi14>>>0){
				L$ppre$pi=tmp5.a2;
				L$ppre$pi[Lgeptoindexphi9]=0;
				tmp5.i1=Lgeptoindexphi9;
			}else{
				__ZNSs6appendEjc(tmp5,Lgeptoindexphi9-Lgeptoindexphi14|0);
				L$ppre$pi=tmp5.a2;
			}
			tmp1[0]={d:L$ppre$pi,o:0+tmp16|0};
		}
		tmp14o=L$psroa$p0$p0$pcopyload.a3o;
		tmp14=L$psroa$p0$p0$pcopyload.a3;
		tmp15=L$psroa$p0$p0$pcopyload.a4;
		if(tmp14===tmp15&&tmp14o===0){
			tmp16=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			tmp16=tmp14[tmp14o]|0;
		}
		if((__ZNSt9__num_getIwE17__stage2_int_loopEwiPcRS1_RjwRKSsPjRS6_Pw(tmp16,L$pidx$pval,L$ppre$pi,0,tmp1,0,LmergedArray,1,Lgeptoindexphi5,tmp4,tmp6,0,tmp7,0,tmp2,0)|0|0)===0){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0)L$psroa$p0$p0$pcopyload.a0.a11(L$psroa$p0$p0$pcopyload)|0;
			else{
				L$psroa$p0$p0$pcopyload.a3=tmp14;
				L$psroa$p0$p0$pcopyload.a3o=tmp14o+1|0;
			}
			continue;
		}
		break;
	}
	if((tmp4.i1|0)!==0){
		tmp14=tmp7[0];
		if((((tmp14.o)*4)-((0)*4)|0)<160){
			Lgeptoindexphi5=LmergedArray[1]|0;
			tmp7[0]={d:tmp14.d,o:tmp14.o+1|0};
			tmp14.d[tmp14.o]=Lgeptoindexphi5;
		}
	}
	tmp14=tmp1[0];
	if(L$ppre$pi===tmp14.d&&0===tmp14.o){
		Larg5[Marg5]=4;
		L$pidx$pval=0;
	}else{
		Lgeptoindexphi5=_impure_data.i0|0;
		_impure_data.i0=0;
		__strtoll_r(tmp0,0,_impure_data,L$ppre$pi,0,tmp1,0,L$pidx$pval);
		tmp16=tmp0[1]|0;
		L$pidx$pval=tmp0[0]|0;
		Lgeptoindexphi9=_impure_data.i0|0;
		if((Lgeptoindexphi9|0)===0)_impure_data.i0=Lgeptoindexphi5;
		L$ppre$pi=tmp1[0];
		a:if(L$ppre$pi.d===tmp14.d&&L$ppre$pi.o===tmp14.o){
			b:if((Lgeptoindexphi9|0)!==34)if((tmp16|0)>=-1){
				if((tmp16|0)===-1)if((L$pidx$pval|0)>-1)break b;
				if((tmp16|0)<=0){
					if((tmp16|0)!==0)break a;
					if((L$pidx$pval|0)>=0)break a;
				}
			}
			Larg5[Marg5]=4;
			L$pidx$pval=(tmp16|0)>0||(tmp16|0)===0&&(L$pidx$pval|0)!==0?2147483647|0: -2147483648|0;
		}else{
			Larg5[Marg5]=4;
			L$pidx$pval=0;
		}
	}
	Larg6[Marg6]=L$pidx$pval;
	L$ppre$pi=tmp7[0];
	a:if((tmp4.i1|0)!==0){
		if(tmp6!==L$ppre$pi.d||0!==L$ppre$pi.o)if((L$ppre$pi.o+ -1|0)>0){
			Lgeptoindexphi5=0;
			L$pidx$pval=-1;
			while(1){
				tmp16=tmp6[Lgeptoindexphi5]|0;
				tmp6[Lgeptoindexphi5]=L$ppre$pi.d[L$ppre$pi.o+L$pidx$pval|0]|0;
				L$ppre$pi.d[L$ppre$pi.o+L$pidx$pval|0]=tmp16;
				Lgeptoindexphi5=Lgeptoindexphi5+1|0;
				L$pidx$pval=L$pidx$pval-1|0;
				if((0+Lgeptoindexphi5|0)<(L$ppre$pi.o+L$pidx$pval|0))continue;
				break;
			}
		}
		tmp14=tmp4.a2;
		L$pidx$pval=tmp14[0]|0;
		Lgeptoindexphi5=L$pidx$pval<<24>0&&(L$pidx$pval&255)!==127?1:0;
		if((L$ppre$pi.o+ -1|0)>0){
			tmp16=(0+(tmp4.i1|0)|0);
			Lgeptoindexphi14=0;
			Lgeptoindexphi9=0;
			while(1){
				if(Lgeptoindexphi5)if((tmp6[Lgeptoindexphi9]|0)!==(L$pidx$pval<<24>>24|0)){
					Larg5[Marg5]=4;
					break a;
				}
				if((tmp16-(0+Lgeptoindexphi14|0)|0)>1){
					Lgeptoindexphi14=Lgeptoindexphi14+1|0;
					L$pidx$pval=tmp14[Lgeptoindexphi14]|0;
				}
				Lgeptoindexphi9=Lgeptoindexphi9+1|0;
				Lgeptoindexphi5=L$pidx$pval<<24>0&&(L$pidx$pval&255)!==127?1:0;
				if((0+Lgeptoindexphi9|0)<(L$ppre$pi.o+ -1|0))continue;
				break;
			}
		}
		if(Lgeptoindexphi5)if((L$ppre$pi.d[L$ppre$pi.o+ -1|0]|0)-1>>>0>=L$pidx$pval<<24>>24>>>0)Larg5[Marg5]=4;
	}
	if(L$psroa$p0$p0$pcopyload!==null){
		L$ppre$pio=L$psroa$p0$p0$pcopyload.a3o;
		L$ppre$pi=L$psroa$p0$p0$pcopyload.a3;
		tmp14=L$psroa$p0$p0$pcopyload.a4;
		if(L$ppre$pi===tmp14&&L$ppre$pio===0){
			L$pidx$pval=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			L$pidx$pval=L$ppre$pi[L$ppre$pio]|0;
		}
		L$pidx1$pval=((L$pidx$pval|0)===-1?null:L$pidx1$pval);
		L$pidx$pval=(L$pidx$pval|0)===-1?1:0;
	}else{
		L$pidx$pval=1;
	}
	a:{
		b:{
			if(L$psroa$p03$p0$pcopyload!==null){
				L$psroa$p0$p0$pcopyloado=L$psroa$p03$p0$pcopyload.a3o;
				L$psroa$p0$p0$pcopyload=L$psroa$p03$p0$pcopyload.a3;
				L$ppre$pi=L$psroa$p03$p0$pcopyload.a4;
				if(L$psroa$p0$p0$pcopyload===L$ppre$pi&&L$psroa$p0$p0$pcopyloado===0){
					Lgeptoindexphi5=L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0;
				}else{
					Lgeptoindexphi5=L$psroa$p0$p0$pcopyload[L$psroa$p0$p0$pcopyloado]|0;
				}
				if((Lgeptoindexphi5|0)!==-1){
					if(L$pidx$pval)break a;
					break b;
				}
			}
			if(!(L$pidx$pval))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=L$pidx1$pval;
}
function __ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjRb(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Marg6){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0,tmp4=null,tmp5=null,tmp5o=0;
	tmp0={a0:null};
	if((Larg4.i1&1|0)!==0){
		tmp2=Larg4.a7.a0;
		tmp3=tmp2.i1|0;
		tmp4=tmp2.a2.a0;
		tmp4=tmp4[(__ZNSt5ctypeIwE2idE$p1|0)-1|0];
		tmp2.i1=tmp3;
		if((tmp3|0)===-1)tmp2.a0.a3(tmp2);
		tmp2=Larg4.a7.a0;
		tmp3=tmp2.i1|0;
		tmp5=tmp2.a2.a0;
		tmp5=tmp5[(__ZNSt8numpunctIwE2idE$p1|0)-1|0];
		tmp2.i1=tmp3;
		if((tmp3|0)===-1)tmp2.a0.a3(tmp2);
		tmp2=[{i0:0,i1:0,a2:nullArray},{i0:0,i1:0,a2:nullArray}];
		tmp5.a0.a7(tmp2[0],tmp5);
		tmp5.a0.a8(tmp2[1],tmp5);
		tmp0.a0=Larg3.a0;
		tmp5=__ZSt14__scan_keywordISt19istreambuf_iteratorIwSt11char_traitsIwEEPKSbIwS2_SaIwEESt5ctypeIwEET0_RT_SB_SA_SA_RKT1_Rjb(Larg2,tmp0,tmp2,0,tmp2,2,tmp4,Larg5,Marg5,1);
		tmp5o=oSlot;
		Larg6[Marg6]=tmp5===tmp2&&tmp5o===0?1:0;
		Larg0.a0=Larg2.a0;
	}else{
		tmp4=[0];
		tmp4[0]=-1;
		tmp2=Larg1.a0.a5;
		tmp5={a0:null};
		tmp5.a0=Larg2.a0;
		tmp1={a0:null};
		tmp1.a0=Larg3.a0;
		tmp2(tmp0,Larg1,tmp5,tmp1,Larg4,Larg5,Marg5,tmp4,0);
		tmp2=tmp0.a0;
		Larg2.a0=tmp2;
		switch(tmp4[0]|0){
			case 0:
			Larg6[Marg6]=0;
			break;
			case 1:
			Larg6[Marg6]=1;
			break;
			default:
			Larg6[Marg6]=1;
			Larg5[Marg5]=4;
		}
		Larg0.a0=tmp2;
	}
}
function __ZNSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEED0Ev(Larg0){
}
function __ZNSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEED2Ev(Larg0){
}
function __ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjRPv(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6){
	var tmp0=null,tmp1=null,tmp2=null,LmergedArray=null,tmp4=null,tmp5=0,tmp6=null,L$plcssa7=0,L$plcssa8=null,L$plcssa8o=0,L$ppre=null,L$ppreo=0,tmp10=null,tmp10o=0,tmp11=null,tmp11o=0,tmp12=null,tmp13=0,tmp14=0;
	tmp0=new Uint8Array(26);
	tmp1={i0:0,i1:0,a2:nullArray};
	tmp1.i0=0;
	tmp1.i1=0;
	tmp1.a2=nullArray;
	tmp6=Larg4.a7.a0;
	tmp6.i1=(tmp6.i1|0)+1|0;
	if((__ZNSt5ctypeIcE2idE.i0&255)!==0){
		L$plcssa7=__ZNSt5ctypeIcE2idE.i1|0;
	}else{
		L$plcssa7=(__ZNSt6locale2id9__next_idE|0)+1|0;
		__ZNSt6locale2id9__next_idE=L$plcssa7;
		__ZNSt5ctypeIcE2idE.i1=L$plcssa7;
		__ZNSt5ctypeIcE2idE.i0=1;
	}
	L$plcssa8=tmp6.a2.a0;
	L$plcssa8=L$plcssa8[L$plcssa7-1|0];
	L$plcssa8.a0.a9(L$plcssa8,__ZNSt14__num_get_base5__srcE,0,__ZNSt14__num_get_base5__srcE,26,tmp0,0);
	L$plcssa7=tmp6.i1|0;
	tmp6.i1=L$plcssa7-1|0;
	if((L$plcssa7|0)===0)tmp6.a0.a3(tmp6);
	tmp6={i0:0,i1:0,a2:nullArray};
	tmp6.i0=0;
	tmp6.i1=0;
	tmp6.a2=nullArray;
	__ZNSs6appendEjc(tmp6,1);
	L$ppre=tmp6.a2;
	tmp2=[nullObj];
	tmp2[0]={d:L$ppre,o:0};
	LmergedArray=new Int32Array(41);
	tmp4=[nullObj];
	tmp4[0]={d:LmergedArray,o:0};
	LmergedArray[40]=0;
	L$plcssa8=Larg2.a0;
	while(1){
		if(L$plcssa8!==null){
			tmp10o=L$plcssa8.a3o;
			tmp10=L$plcssa8.a3;
			tmp11=L$plcssa8.a4;
			if(tmp10===tmp11&&tmp10o===0)if((L$plcssa8.a0.a10(L$plcssa8)|0|0)===-1){
				Larg2.a0=null;
				L$plcssa8=null;
			}
		}else{
			L$plcssa8=null;
		}
		tmp10=Larg3.a0;
		L$plcssa7=L$plcssa8===null?1:0;
		a:{
			b:if(tmp10!==null){
				tmp11o=tmp10.a3o;
				tmp11=tmp10.a3;
				tmp12=tmp10.a4;
				if(tmp11===tmp12&&tmp11o===0)if((tmp10.a0.a10(tmp10)|0|0)===-1){
					Larg3.a0=null;
					break b;
				}
				if(L$plcssa7)break a;
				L$plcssa7=0;
				break;
			}
			if(L$plcssa7){
				tmp10=null;
				L$plcssa7=1;
				L$plcssa8=null;
				break;
			}
			tmp10=null;
		}
		tmp11=tmp2[0];
		tmp13=tmp6.i1|0;
		if(tmp11.d===L$ppre&&tmp11.o===(0+tmp13|0)){
			tmp14=tmp13<<1;
			if(tmp14>>>0<tmp13>>>0){
				L$ppre[tmp14]=0;
				tmp6.i1=tmp14;
			}else __ZNSs6appendEjc(tmp6,tmp13);
			tmp14=tmp6.i0|0;
			if(tmp14>>>0<2){
				tmp14=0;
			}else{
				tmp14=(tmp14& -2)-1|0;
			}
			tmp5=tmp6.i1|0;
			if(tmp14>>>0<tmp5>>>0){
				L$ppre=tmp6.a2;
				L$ppre[tmp14]=0;
				tmp6.i1=tmp14;
			}else{
				__ZNSs6appendEjc(tmp6,tmp14-tmp5|0);
				L$ppre=tmp6.a2;
			}
			tmp2[0]={d:L$ppre,o:0+tmp13|0};
		}
		tmp11o=L$plcssa8.a3o;
		tmp11=L$plcssa8.a3;
		tmp12=L$plcssa8.a4;
		if(tmp11===tmp12&&tmp11o===0){
			tmp13=L$plcssa8.a0.a10(L$plcssa8)|0;
		}else{
			tmp13=tmp11[tmp11o]|0;
			tmp13=tmp13&255;
		}
		if((__ZNSt9__num_getIcE17__stage2_int_loopEciPcRS1_RjcRKSsPjRS6_S1_(tmp13,16,L$ppre,0,tmp2,0,LmergedArray,40,0,tmp1,LmergedArray,0,tmp4,0,tmp0)|0|0)===0){
			tmp10o=L$plcssa8.a3o;
			tmp10=L$plcssa8.a3;
			tmp11=L$plcssa8.a4;
			if(tmp10===tmp11&&tmp10o===0)L$plcssa8.a0.a11(L$plcssa8)|0;
			else{
				L$plcssa8.a3=tmp10;
				L$plcssa8.a3o=tmp10o+1|0;
			}
			continue;
		}
		break;
	}
	tmp11=tmp2[0];
	tmp13=(tmp11.o)-(0)|0;
	tmp14=tmp6.i1|0;
	if(tmp13>>>0<tmp14>>>0){
		L$ppre[tmp13]=0;
		tmp6.i1=tmp13;
	}else __ZNSs6appendEjc(tmp6,tmp13-tmp14|0);
	L$ppre=tmp6.a2;
	if((__ZSt10__sscanf_lPKcPvS0_z(L$ppre,nullObj,nullObj,Larg6)|0|0)!==1)Larg5[Marg5]=4;
	if(L$plcssa7){
		L$plcssa8=null;
	}else{
		L$ppreo=L$plcssa8.a3o;
		L$ppre=L$plcssa8.a3;
		tmp11=L$plcssa8.a4;
		if(L$ppre===tmp11&&L$ppreo===0)if((L$plcssa8.a0.a10(L$plcssa8)|0|0)===-1){
			Larg2.a0=null;
			L$plcssa8=null;
		}
	}
	L$plcssa7=L$plcssa8===null?1:0;
	a:{
		b:{
			c:if(tmp10!==null){
				L$plcssa8o=tmp10.a3o;
				L$plcssa8=tmp10.a3;
				L$ppre=tmp10.a4;
				if(L$plcssa8===L$ppre&&L$plcssa8o===0)if((tmp10.a0.a10(tmp10)|0|0)===-1){
					Larg3.a0=null;
					break c;
				}
				if(L$plcssa7)break a;
				break b;
			}
			if(!(L$plcssa7))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=Larg2.a0;
}
function __ZNSt9__num_getIcE17__stage2_int_loopEciPcRS1_RjcRKSsPjRS6_S1_(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4,Larg5,Larg6,Larg7,Marg7,Larg8,Marg8,Larg9){
	var tmp0=null,tmp0o=0,tmp1=null,tmp2=0,tmp3=0;
	tmp1=Larg3[Marg3];
	tmp2=tmp1.d===Larg2&&tmp1.o===Marg2?1:0;
	a:if(tmp2){
		tmp3=Larg9[24]|0;
		if(tmp3!==(Larg0&255))if((Larg9[25]|0)!==(Larg0&255))break a;
		Larg3[Marg3]={d:Larg2,o:Marg2+1|0};
		Larg2[Marg2]=tmp3===(Larg0&255)?43|0:45|0;
		Larg4[Marg4]=0;
		return 0|0;
	}
	tmp3=Larg6.i1|0;
	if((Larg0&255)===(Larg5&255))if((tmp3|0)!==0){
		tmp1=Larg8[Marg8];
		if((((tmp1.o)*4)-((Marg7)*4)|0)<160){
			tmp2=Larg4[Marg4]|0;
			Larg8[Marg8]={d:tmp1.d,o:tmp1.o+1|0};
			tmp1.d[tmp1.o]=tmp2;
			Larg4[Marg4]=0;
			return 0|0;
		}
		return 0|0;
	}
	if((Larg9[0]&255)===(Larg0&255)){
		tmp0o=0;
		tmp0=Larg9;
	}else if((Larg9[1]|0)===(Larg0&255)){
		tmp0o=0+1|0;
		tmp0=Larg9;
	}else if((Larg9[2]|0)===(Larg0&255)){
		tmp0o=0+2|0;
		tmp0=Larg9;
	}else if((Larg9[3]|0)===(Larg0&255)){
		tmp0o=0+3|0;
		tmp0=Larg9;
	}else if((Larg9[4]|0)===(Larg0&255)){
		tmp0o=0+4|0;
		tmp0=Larg9;
	}else if((Larg9[5]|0)===(Larg0&255)){
		tmp0o=0+5|0;
		tmp0=Larg9;
	}else if((Larg9[6]|0)===(Larg0&255)){
		tmp0o=0+6|0;
		tmp0=Larg9;
	}else if((Larg9[7]|0)===(Larg0&255)){
		tmp0o=0+7|0;
		tmp0=Larg9;
	}else if((Larg9[8]|0)===(Larg0&255)){
		tmp0o=0+8|0;
		tmp0=Larg9;
	}else if((Larg9[9]|0)===(Larg0&255)){
		tmp0o=0+9|0;
		tmp0=Larg9;
	}else if((Larg9[10]|0)===(Larg0&255)){
		tmp0o=0+10|0;
		tmp0=Larg9;
	}else if((Larg9[11]|0)===(Larg0&255)){
		tmp0o=0+11|0;
		tmp0=Larg9;
	}else if((Larg9[12]|0)===(Larg0&255)){
		tmp0o=0+12|0;
		tmp0=Larg9;
	}else if((Larg9[13]|0)===(Larg0&255)){
		tmp0o=0+13|0;
		tmp0=Larg9;
	}else if((Larg9[14]|0)===(Larg0&255)){
		tmp0o=0+14|0;
		tmp0=Larg9;
	}else if((Larg9[15]|0)===(Larg0&255)){
		tmp0o=0+15|0;
		tmp0=Larg9;
	}else if((Larg9[16]|0)===(Larg0&255)){
		tmp0o=0+16|0;
		tmp0=Larg9;
	}else if((Larg9[17]|0)===(Larg0&255)){
		tmp0o=0+17|0;
		tmp0=Larg9;
	}else if((Larg9[18]|0)===(Larg0&255)){
		tmp0o=0+18|0;
		tmp0=Larg9;
	}else if((Larg9[19]|0)===(Larg0&255)){
		tmp0o=0+19|0;
		tmp0=Larg9;
	}else if((Larg9[20]|0)===(Larg0&255)){
		tmp0o=0+20|0;
		tmp0=Larg9;
	}else if((Larg9[21]|0)===(Larg0&255)){
		tmp0o=0+21|0;
		tmp0=Larg9;
	}else if((Larg9[22]|0)===(Larg0&255)){
		tmp0o=0+22|0;
		tmp0=Larg9;
	}else if((Larg9[23]|0)===(Larg0&255)){
		tmp0o=0+23|0;
		tmp0=Larg9;
	}else if((Larg9[24]|0)===(Larg0&255)){
		tmp0o=0+24|0;
		tmp0=Larg9;
	}else{
		tmp3=Larg9[25]|0;
		tmp0o=tmp3===(Larg0&255)?0+25|0:0+26|0;
		tmp0=(tmp3===(Larg0&255)?Larg9:Larg9);
	}
	tmp3=(tmp0o)-(0)|0;
	if((tmp3|0)>23)return  -1|0;
	switch(Larg1|0){
		case 8:
		case 10:
		if((tmp3|0)<(Larg1|0))break;
		return  -1|0;
		case 16:
		if((tmp3|0)<22)break;
		if(tmp2)return  -1|0;
		if(((tmp1.o)-(Marg2)|0)<3){
			if((tmp1.d[tmp1.o+ -1|0]&255)===48){
				Larg4[Marg4]=0;
				tmp2=__ZNSt14__num_get_base5__srcE[tmp3]|0;
				Larg3[Marg3]={d:tmp1.d,o:tmp1.o+1|0};
				tmp1.d[tmp1.o]=tmp2;
				return 0|0;
			}
			return  -1|0;
		}
		return  -1|0;
		default:
	}
	tmp2=__ZNSt14__num_get_base5__srcE[tmp3]|0;
	Larg3[Marg3]={d:tmp1.d,o:tmp1.o+1|0};
	tmp1.d[tmp1.o]=tmp2;
	Larg4[Marg4]=(Larg4[Marg4]|0)+1|0;
	return 0|0;
}
function __ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjRe(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Marg6){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,tmp5=null,tmp6=null,LmergedArray=null,L$psroa$p0$p0$pcopyload=null,L$psroa$p0$p0$pcopyloado=0,L$psroa$p02$p0$pcopyload=null,L$pidx$pval=null,L$ppre$pi=null,L$ppre$pio=0,Lgeptoindexphi7=0,Lgeptoindexphi12=0,tmp14=null,tmp14o=0,tmp15=null,L$plcssa10$pi=0,Lgeptoindexphi=0,tmp18=-0.,Lgeptoindexphi3=0,tmp20=0;
	L$psroa$p0$p0$pcopyload=Larg2.a0;
	L$psroa$p02$p0$pcopyload=Larg3.a0;
	L$pidx$pval=Larg4.a7.a0;
	tmp0=[nullObj];
	tmp1=new Uint8Array(32);
	tmp2={i0:0,i1:0,a2:nullArray};
	tmp3={i0:0,i1:0,a2:nullArray};
	tmp4=new Int32Array(40);
	tmp5=[nullObj];
	tmp6=[0];
	LmergedArray=new Uint8Array(4);
	__ZNSt9__num_getIcE19__stage2_float_prepERSt8ios_basePcRcS4_(tmp2,L$pidx$pval,tmp1,0,LmergedArray,0,LmergedArray,1);
	tmp3.i0=0;
	tmp3.i1=0;
	tmp3.a2=nullArray;
	__ZNSs6appendEjc(tmp3,1);
	L$ppre$pi=tmp3.a2;
	tmp0[0]={d:L$ppre$pi,o:0};
	tmp5[0]={d:tmp4,o:0};
	tmp6[0]=0;
	LmergedArray[2]=1;
	LmergedArray[3]=69;
	Lgeptoindexphi7=LmergedArray[0]|0;
	Lgeptoindexphi12=LmergedArray[1]|0;
	L$pidx$pval=L$psroa$p0$p0$pcopyload;
	while(1){
		if(L$psroa$p0$p0$pcopyload!==null){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0){
				L$plcssa10$pi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
				L$psroa$p0$p0$pcopyload=((L$plcssa10$pi|0)===-1?null:L$psroa$p0$p0$pcopyload);
				L$pidx$pval=((L$plcssa10$pi|0)===-1?null:L$pidx$pval);
			}
		}else{
			L$psroa$p0$p0$pcopyload=null;
		}
		L$plcssa10$pi=L$psroa$p0$p0$pcopyload===null?1:0;
		a:{
			b:if(L$psroa$p02$p0$pcopyload!==null){
				tmp14o=L$psroa$p02$p0$pcopyload.a3o;
				tmp14=L$psroa$p02$p0$pcopyload.a3;
				tmp15=L$psroa$p02$p0$pcopyload.a4;
				if(tmp14===tmp15&&tmp14o===0)if((L$psroa$p02$p0$pcopyload.a0.a10(L$psroa$p02$p0$pcopyload)|0|0)===-1)break b;
				if(L$plcssa10$pi)break a;
				L$plcssa10$pi=0;
				break;
			}
			if(L$plcssa10$pi){
				L$psroa$p02$p0$pcopyload=null;
				L$plcssa10$pi=1;
				L$psroa$p0$p0$pcopyload=null;
				break;
			}
			L$psroa$p02$p0$pcopyload=null;
		}
		tmp14=tmp0[0];
		Lgeptoindexphi=tmp3.i1|0;
		if(tmp14.d===L$ppre$pi&&tmp14.o===(0+Lgeptoindexphi|0)){
			Lgeptoindexphi3=Lgeptoindexphi<<1;
			if(Lgeptoindexphi3>>>0<Lgeptoindexphi>>>0){
				L$ppre$pi[Lgeptoindexphi3]=0;
				tmp3.i1=Lgeptoindexphi3;
			}else __ZNSs6appendEjc(tmp3,Lgeptoindexphi);
			Lgeptoindexphi3=tmp3.i0|0;
			if(Lgeptoindexphi3>>>0<2){
				Lgeptoindexphi3=0;
			}else{
				Lgeptoindexphi3=(Lgeptoindexphi3& -2)-1|0;
			}
			tmp20=tmp3.i1|0;
			if(Lgeptoindexphi3>>>0<tmp20>>>0){
				L$ppre$pi=tmp3.a2;
				L$ppre$pi[Lgeptoindexphi3]=0;
				tmp3.i1=Lgeptoindexphi3;
			}else{
				__ZNSs6appendEjc(tmp3,Lgeptoindexphi3-tmp20|0);
				L$ppre$pi=tmp3.a2;
			}
			tmp0[0]={d:L$ppre$pi,o:0+Lgeptoindexphi|0};
		}
		tmp14o=L$psroa$p0$p0$pcopyload.a3o;
		tmp14=L$psroa$p0$p0$pcopyload.a3;
		tmp15=L$psroa$p0$p0$pcopyload.a4;
		if(tmp14===tmp15&&tmp14o===0){
			Lgeptoindexphi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			Lgeptoindexphi=tmp14[tmp14o]|0;
			Lgeptoindexphi=Lgeptoindexphi&255;
		}
		if((__ZNSt9__num_getIcE19__stage2_float_loopEcRbRcPcRS3_ccRKSsPjRS7_RjS3_(Lgeptoindexphi,LmergedArray,2,LmergedArray,3,L$ppre$pi,0,tmp0,0,Lgeptoindexphi7,Lgeptoindexphi12,tmp2,tmp4,0,tmp5,0,tmp6,0,tmp1)|0|0)===0){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0)L$psroa$p0$p0$pcopyload.a0.a11(L$psroa$p0$p0$pcopyload)|0;
			else{
				L$psroa$p0$p0$pcopyload.a3=tmp14;
				L$psroa$p0$p0$pcopyload.a3o=tmp14o+1|0;
			}
			continue;
		}
		break;
	}
	Lgeptoindexphi=LmergedArray[2]|0;
	if((tmp2.i1|0)!==0)if((Lgeptoindexphi&255)!==0){
		tmp14=tmp5[0];
		if((((tmp14.o)*4)-((0)*4)|0)<160){
			Lgeptoindexphi=tmp6[0]|0;
			tmp5[0]={d:tmp14.d,o:tmp14.o+1|0};
			tmp14.d[tmp14.o]=Lgeptoindexphi;
		}
	}
	tmp14=tmp0[0];
	if(L$ppre$pi===tmp14.d&&0===tmp14.o){
		Larg5[Marg5]=4;
		tmp18=0;
	}else{
		Lgeptoindexphi=_impure_data.i0|0;
		_impure_data.i0=0;
		tmp18=+__strtod_r(L$ppre$pi,0,tmp0,0);
		Lgeptoindexphi3=_impure_data.i0|0;
		if((Lgeptoindexphi3|0)===0)_impure_data.i0=Lgeptoindexphi;
		L$ppre$pi=tmp0[0];
		a:{
			if(L$ppre$pi.d===tmp14.d&&L$ppre$pi.o===tmp14.o){
				if((Lgeptoindexphi3|0)!==34)break a;
			}else{
				tmp18=0;
			}
			Larg5[Marg5]=4;
		}
	}
	Larg6[Marg6]=tmp18;
	L$ppre$pi=tmp5[0];
	a:if((tmp2.i1|0)!==0){
		if(tmp4!==L$ppre$pi.d||0!==L$ppre$pi.o)if((L$ppre$pi.o+ -1|0)>0){
			Lgeptoindexphi3=0;
			Lgeptoindexphi=-1;
			while(1){
				tmp20=tmp4[Lgeptoindexphi3]|0;
				tmp4[Lgeptoindexphi3]=L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]|0;
				L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]=tmp20;
				Lgeptoindexphi3=Lgeptoindexphi3+1|0;
				Lgeptoindexphi=Lgeptoindexphi-1|0;
				if((0+Lgeptoindexphi3|0)<(L$ppre$pi.o+Lgeptoindexphi|0))continue;
				break;
			}
		}
		tmp14=tmp2.a2;
		Lgeptoindexphi=tmp14[0]|0;
		Lgeptoindexphi3=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
		if((L$ppre$pi.o+ -1|0)>0){
			tmp20=(0+(tmp2.i1|0)|0);
			Lgeptoindexphi12=0;
			Lgeptoindexphi7=0;
			while(1){
				if(Lgeptoindexphi3)if((tmp4[Lgeptoindexphi7]|0)!==(Lgeptoindexphi<<24>>24|0)){
					Larg5[Marg5]=4;
					break a;
				}
				if((tmp20-(0+Lgeptoindexphi12|0)|0)>1){
					Lgeptoindexphi12=Lgeptoindexphi12+1|0;
					Lgeptoindexphi=tmp14[Lgeptoindexphi12]|0;
				}
				Lgeptoindexphi7=Lgeptoindexphi7+1|0;
				Lgeptoindexphi3=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
				if((0+Lgeptoindexphi7|0)<(L$ppre$pi.o+ -1|0))continue;
				break;
			}
		}
		if(Lgeptoindexphi3)if((L$ppre$pi.d[L$ppre$pi.o+ -1|0]|0)-1>>>0>=Lgeptoindexphi<<24>>24>>>0)Larg5[Marg5]=4;
	}
	if(L$plcssa10$pi){
		L$psroa$p0$p0$pcopyload=null;
	}else{
		L$ppre$pio=L$psroa$p0$p0$pcopyload.a3o;
		L$ppre$pi=L$psroa$p0$p0$pcopyload.a3;
		tmp14=L$psroa$p0$p0$pcopyload.a4;
		if(L$ppre$pi===tmp14&&L$ppre$pio===0){
			L$plcssa10$pi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
			L$psroa$p0$p0$pcopyload=((L$plcssa10$pi|0)===-1?null:L$psroa$p0$p0$pcopyload);
			L$pidx$pval=((L$plcssa10$pi|0)===-1?null:L$pidx$pval);
		}
	}
	L$plcssa10$pi=L$psroa$p0$p0$pcopyload===null?1:0;
	a:{
		b:{
			c:if(L$psroa$p02$p0$pcopyload!==null){
				L$psroa$p0$p0$pcopyloado=L$psroa$p02$p0$pcopyload.a3o;
				L$psroa$p0$p0$pcopyload=L$psroa$p02$p0$pcopyload.a3;
				L$ppre$pi=L$psroa$p02$p0$pcopyload.a4;
				if(L$psroa$p0$p0$pcopyload===L$ppre$pi&&L$psroa$p0$p0$pcopyloado===0)if((L$psroa$p02$p0$pcopyload.a0.a10(L$psroa$p02$p0$pcopyload)|0|0)===-1)break c;
				if(L$plcssa10$pi)break a;
				break b;
			}
			if(!(L$plcssa10$pi))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=L$pidx$pval;
}
function __ZNSt9__num_getIcE19__stage2_float_loopEcRbRcPcRS3_ccRKSsPjRS7_RjS3_(Larg0,Larg1,Marg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4,Larg5,Larg6,Larg7,Larg8,Marg8,Larg9,Marg9,Larg10,Marg10,Larg11){
	var tmp0=0,tmp1=null,tmp1o=0,tmp2=0,tmp3=0;
	if((Larg0&255)===(Larg5&255)){
		if((Larg1[Marg1]&255)!==0){
			Larg1[Marg1]=0;
			tmp1=Larg4[Marg4];
			Larg4[Marg4]={d:tmp1.d,o:tmp1.o+1|0};
			tmp1.d[tmp1.o]=46;
			if((Larg7.i1|0)!==0){
				tmp1=Larg9[Marg9];
				if((((tmp1.o)*4)-((Marg8)*4)|0)<160){
					tmp2=Larg10[Marg10]|0;
					Larg9[Marg9]={d:tmp1.d,o:tmp1.o+1|0};
					tmp1.d[tmp1.o]=tmp2;
					return 0|0;
				}
				return 0|0;
			}
			return 0|0;
		}
		return  -1|0;
	}
	if((Larg0&255)===(Larg6&255))if((Larg7.i1|0)!==0){
		if((Larg1[Marg1]&255)!==0){
			tmp1=Larg9[Marg9];
			if((((tmp1.o)*4)-((Marg8)*4)|0)<160){
				tmp2=Larg10[Marg10]|0;
				Larg9[Marg9]={d:tmp1.d,o:tmp1.o+1|0};
				tmp1.d[tmp1.o]=tmp2;
				Larg10[Marg10]=0;
				return 0|0;
			}
			return 0|0;
		}
		return  -1|0;
	}
	if((Larg11[0]&255)===(Larg0&255)){
		tmp1o=0;
		tmp1=Larg11;
	}else if((Larg11[1]|0)===(Larg0&255)){
		tmp1o=0+1|0;
		tmp1=Larg11;
	}else if((Larg11[2]|0)===(Larg0&255)){
		tmp1o=0+2|0;
		tmp1=Larg11;
	}else if((Larg11[3]|0)===(Larg0&255)){
		tmp1o=0+3|0;
		tmp1=Larg11;
	}else if((Larg11[4]|0)===(Larg0&255)){
		tmp1o=0+4|0;
		tmp1=Larg11;
	}else if((Larg11[5]|0)===(Larg0&255)){
		tmp1o=0+5|0;
		tmp1=Larg11;
	}else if((Larg11[6]|0)===(Larg0&255)){
		tmp1o=0+6|0;
		tmp1=Larg11;
	}else if((Larg11[7]|0)===(Larg0&255)){
		tmp1o=0+7|0;
		tmp1=Larg11;
	}else if((Larg11[8]|0)===(Larg0&255)){
		tmp1o=0+8|0;
		tmp1=Larg11;
	}else if((Larg11[9]|0)===(Larg0&255)){
		tmp1o=0+9|0;
		tmp1=Larg11;
	}else if((Larg11[10]|0)===(Larg0&255)){
		tmp1o=0+10|0;
		tmp1=Larg11;
	}else if((Larg11[11]|0)===(Larg0&255)){
		tmp1o=0+11|0;
		tmp1=Larg11;
	}else if((Larg11[12]|0)===(Larg0&255)){
		tmp1o=0+12|0;
		tmp1=Larg11;
	}else if((Larg11[13]|0)===(Larg0&255)){
		tmp1o=0+13|0;
		tmp1=Larg11;
	}else if((Larg11[14]|0)===(Larg0&255)){
		tmp1o=0+14|0;
		tmp1=Larg11;
	}else if((Larg11[15]|0)===(Larg0&255)){
		tmp1o=0+15|0;
		tmp1=Larg11;
	}else if((Larg11[16]|0)===(Larg0&255)){
		tmp1o=0+16|0;
		tmp1=Larg11;
	}else if((Larg11[17]|0)===(Larg0&255)){
		tmp1o=0+17|0;
		tmp1=Larg11;
	}else if((Larg11[18]|0)===(Larg0&255)){
		tmp1o=0+18|0;
		tmp1=Larg11;
	}else if((Larg11[19]|0)===(Larg0&255)){
		tmp1o=0+19|0;
		tmp1=Larg11;
	}else if((Larg11[20]|0)===(Larg0&255)){
		tmp1o=0+20|0;
		tmp1=Larg11;
	}else if((Larg11[21]|0)===(Larg0&255)){
		tmp1o=0+21|0;
		tmp1=Larg11;
	}else if((Larg11[22]|0)===(Larg0&255)){
		tmp1o=0+22|0;
		tmp1=Larg11;
	}else if((Larg11[23]|0)===(Larg0&255)){
		tmp1o=0+23|0;
		tmp1=Larg11;
	}else if((Larg11[24]|0)===(Larg0&255)){
		tmp1o=0+24|0;
		tmp1=Larg11;
	}else if((Larg11[25]|0)===(Larg0&255)){
		tmp1o=0+25|0;
		tmp1=Larg11;
	}else if((Larg11[26]|0)===(Larg0&255)){
		tmp1o=0+26|0;
		tmp1=Larg11;
	}else if((Larg11[27]|0)===(Larg0&255)){
		tmp1o=0+27|0;
		tmp1=Larg11;
	}else if((Larg11[28]|0)===(Larg0&255)){
		tmp1o=0+28|0;
		tmp1=Larg11;
	}else if((Larg11[29]|0)===(Larg0&255)){
		tmp1o=0+29|0;
		tmp1=Larg11;
	}else if((Larg11[30]|0)===(Larg0&255)){
		tmp1o=0+30|0;
		tmp1=Larg11;
	}else{
		tmp2=Larg11[31]|0;
		tmp1o=tmp2===(Larg0&255)?0+31|0:0+32|0;
		tmp1=(tmp2===(Larg0&255)?Larg11:Larg11);
	}
	tmp2=(tmp1o)-(0)|0;
	if((tmp2|0)>31)return  -1|0;
	tmp0=__ZNSt14__num_get_base5__srcE[tmp2]|0;
	switch(tmp2|1|0){
		case 25:
		tmp1=Larg4[Marg4];
		if(tmp1.d!==Larg3||tmp1.o!==Marg3)if((tmp1.d[tmp1.o+ -1|0]&95)!==(Larg2[Marg2]&127))return  -1|0;
		Larg4[Marg4]={d:tmp1.d,o:tmp1.o+1|0};
		tmp1.d[tmp1.o]=tmp0;
		return 0|0;
		case 23:
		Larg2[Marg2]=80;
		break;
		default:
		tmp3=Larg2[Marg2]|0;
		if((tmp0&95|0)===(tmp3<<24>>24|0)){
			Larg2[Marg2]=tmp3|128;
			if((Larg1[Marg1]&255)!==0){
				Larg1[Marg1]=0;
				if((Larg7.i1|0)!==0){
					tmp1=Larg9[Marg9];
					if((((tmp1.o)*4)-((Marg8)*4)|0)<160){
						tmp3=Larg10[Marg10]|0;
						Larg9[Marg9]={d:tmp1.d,o:tmp1.o+1|0};
						tmp1.d[tmp1.o]=tmp3;
					}
				}
			}
		}
	}
	tmp1=Larg4[Marg4];
	Larg4[Marg4]={d:tmp1.d,o:tmp1.o+1|0};
	tmp1.d[tmp1.o]=tmp0;
	if((tmp2|0)>21)return 0|0;
	Larg10[Marg10]=(Larg10[Marg10]|0)+1|0;
	return 0|0;
}
function __ZNSt9__num_getIcE19__stage2_float_prepERSt8ios_basePcRcS4_(Larg0,L$p0$p7$p0$pval,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4){
	var tmp0=0,tmp1=null;
	L$p0$p7$p0$pval.i1=(L$p0$p7$p0$pval.i1|0)+1|0;
	if((__ZNSt5ctypeIcE2idE.i0&255)!==0){
		tmp0=__ZNSt5ctypeIcE2idE.i1|0;
	}else{
		tmp0=(__ZNSt6locale2id9__next_idE|0)+1|0;
		__ZNSt6locale2id9__next_idE=tmp0;
		__ZNSt5ctypeIcE2idE.i1=tmp0;
		__ZNSt5ctypeIcE2idE.i0=1;
	}
	tmp1=L$p0$p7$p0$pval.a2.a0;
	tmp1=tmp1[tmp0-1|0];
	tmp1.a0.a9(tmp1,__ZNSt14__num_get_base5__srcE,0,__ZNSt14__num_get_base5__srcE,32,Larg2,Marg2);
	tmp1=L$p0$p7$p0$pval.a2.a0;
	tmp1=tmp1[(__ZNSt8numpunctIcE2idE$p1|0)-1|0];
	Larg3[Marg3]=tmp1.a0.a4(tmp1)|0;
	Larg4[Marg4]=tmp1.a0.a5(tmp1)|0;
	tmp1.a0.a6(Larg0,tmp1);
	tmp0=L$p0$p7$p0$pval.i1|0;
	L$p0$p7$p0$pval.i1=tmp0-1|0;
	if((tmp0|0)===0)L$p0$p7$p0$pval.a0.a3(L$p0$p7$p0$pval);
}
function __ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjRd(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Marg6){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,tmp5=null,tmp6=null,LmergedArray=null,L$psroa$p0$p0$pcopyload=null,L$psroa$p0$p0$pcopyloado=0,L$psroa$p02$p0$pcopyload=null,L$pidx$pval=null,L$ppre$pi=null,L$ppre$pio=0,Lgeptoindexphi7=0,Lgeptoindexphi12=0,tmp14=null,tmp14o=0,tmp15=null,L$plcssa10$pi=0,Lgeptoindexphi=0,tmp18=-0.,Lgeptoindexphi3=0,tmp20=0;
	L$psroa$p0$p0$pcopyload=Larg2.a0;
	L$psroa$p02$p0$pcopyload=Larg3.a0;
	L$pidx$pval=Larg4.a7.a0;
	tmp0=[nullObj];
	tmp1=new Uint8Array(32);
	tmp2={i0:0,i1:0,a2:nullArray};
	tmp3={i0:0,i1:0,a2:nullArray};
	tmp4=new Int32Array(40);
	tmp5=[nullObj];
	tmp6=[0];
	LmergedArray=new Uint8Array(4);
	__ZNSt9__num_getIcE19__stage2_float_prepERSt8ios_basePcRcS4_(tmp2,L$pidx$pval,tmp1,0,LmergedArray,0,LmergedArray,1);
	tmp3.i0=0;
	tmp3.i1=0;
	tmp3.a2=nullArray;
	__ZNSs6appendEjc(tmp3,1);
	L$ppre$pi=tmp3.a2;
	tmp0[0]={d:L$ppre$pi,o:0};
	tmp5[0]={d:tmp4,o:0};
	tmp6[0]=0;
	LmergedArray[2]=1;
	LmergedArray[3]=69;
	Lgeptoindexphi7=LmergedArray[0]|0;
	Lgeptoindexphi12=LmergedArray[1]|0;
	L$pidx$pval=L$psroa$p0$p0$pcopyload;
	while(1){
		if(L$psroa$p0$p0$pcopyload!==null){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0){
				L$plcssa10$pi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
				L$psroa$p0$p0$pcopyload=((L$plcssa10$pi|0)===-1?null:L$psroa$p0$p0$pcopyload);
				L$pidx$pval=((L$plcssa10$pi|0)===-1?null:L$pidx$pval);
			}
		}else{
			L$psroa$p0$p0$pcopyload=null;
		}
		L$plcssa10$pi=L$psroa$p0$p0$pcopyload===null?1:0;
		a:{
			b:if(L$psroa$p02$p0$pcopyload!==null){
				tmp14o=L$psroa$p02$p0$pcopyload.a3o;
				tmp14=L$psroa$p02$p0$pcopyload.a3;
				tmp15=L$psroa$p02$p0$pcopyload.a4;
				if(tmp14===tmp15&&tmp14o===0)if((L$psroa$p02$p0$pcopyload.a0.a10(L$psroa$p02$p0$pcopyload)|0|0)===-1)break b;
				if(L$plcssa10$pi)break a;
				L$plcssa10$pi=0;
				break;
			}
			if(L$plcssa10$pi){
				L$psroa$p02$p0$pcopyload=null;
				L$plcssa10$pi=1;
				L$psroa$p0$p0$pcopyload=null;
				break;
			}
			L$psroa$p02$p0$pcopyload=null;
		}
		tmp14=tmp0[0];
		Lgeptoindexphi=tmp3.i1|0;
		if(tmp14.d===L$ppre$pi&&tmp14.o===(0+Lgeptoindexphi|0)){
			Lgeptoindexphi3=Lgeptoindexphi<<1;
			if(Lgeptoindexphi3>>>0<Lgeptoindexphi>>>0){
				L$ppre$pi[Lgeptoindexphi3]=0;
				tmp3.i1=Lgeptoindexphi3;
			}else __ZNSs6appendEjc(tmp3,Lgeptoindexphi);
			Lgeptoindexphi3=tmp3.i0|0;
			if(Lgeptoindexphi3>>>0<2){
				Lgeptoindexphi3=0;
			}else{
				Lgeptoindexphi3=(Lgeptoindexphi3& -2)-1|0;
			}
			tmp20=tmp3.i1|0;
			if(Lgeptoindexphi3>>>0<tmp20>>>0){
				L$ppre$pi=tmp3.a2;
				L$ppre$pi[Lgeptoindexphi3]=0;
				tmp3.i1=Lgeptoindexphi3;
			}else{
				__ZNSs6appendEjc(tmp3,Lgeptoindexphi3-tmp20|0);
				L$ppre$pi=tmp3.a2;
			}
			tmp0[0]={d:L$ppre$pi,o:0+Lgeptoindexphi|0};
		}
		tmp14o=L$psroa$p0$p0$pcopyload.a3o;
		tmp14=L$psroa$p0$p0$pcopyload.a3;
		tmp15=L$psroa$p0$p0$pcopyload.a4;
		if(tmp14===tmp15&&tmp14o===0){
			Lgeptoindexphi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			Lgeptoindexphi=tmp14[tmp14o]|0;
			Lgeptoindexphi=Lgeptoindexphi&255;
		}
		if((__ZNSt9__num_getIcE19__stage2_float_loopEcRbRcPcRS3_ccRKSsPjRS7_RjS3_(Lgeptoindexphi,LmergedArray,2,LmergedArray,3,L$ppre$pi,0,tmp0,0,Lgeptoindexphi7,Lgeptoindexphi12,tmp2,tmp4,0,tmp5,0,tmp6,0,tmp1)|0|0)===0){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0)L$psroa$p0$p0$pcopyload.a0.a11(L$psroa$p0$p0$pcopyload)|0;
			else{
				L$psroa$p0$p0$pcopyload.a3=tmp14;
				L$psroa$p0$p0$pcopyload.a3o=tmp14o+1|0;
			}
			continue;
		}
		break;
	}
	Lgeptoindexphi=LmergedArray[2]|0;
	if((tmp2.i1|0)!==0)if((Lgeptoindexphi&255)!==0){
		tmp14=tmp5[0];
		if((((tmp14.o)*4)-((0)*4)|0)<160){
			Lgeptoindexphi=tmp6[0]|0;
			tmp5[0]={d:tmp14.d,o:tmp14.o+1|0};
			tmp14.d[tmp14.o]=Lgeptoindexphi;
		}
	}
	tmp14=tmp0[0];
	if(L$ppre$pi===tmp14.d&&0===tmp14.o){
		Larg5[Marg5]=4;
		tmp18=0;
	}else{
		Lgeptoindexphi=_impure_data.i0|0;
		_impure_data.i0=0;
		tmp18=+__strtod_r(L$ppre$pi,0,tmp0,0);
		Lgeptoindexphi3=_impure_data.i0|0;
		if((Lgeptoindexphi3|0)===0)_impure_data.i0=Lgeptoindexphi;
		L$ppre$pi=tmp0[0];
		a:{
			if(L$ppre$pi.d===tmp14.d&&L$ppre$pi.o===tmp14.o){
				if((Lgeptoindexphi3|0)!==34)break a;
			}else{
				tmp18=0;
			}
			Larg5[Marg5]=4;
		}
	}
	Larg6[Marg6]=tmp18;
	L$ppre$pi=tmp5[0];
	a:if((tmp2.i1|0)!==0){
		if(tmp4!==L$ppre$pi.d||0!==L$ppre$pi.o)if((L$ppre$pi.o+ -1|0)>0){
			Lgeptoindexphi3=0;
			Lgeptoindexphi=-1;
			while(1){
				tmp20=tmp4[Lgeptoindexphi3]|0;
				tmp4[Lgeptoindexphi3]=L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]|0;
				L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]=tmp20;
				Lgeptoindexphi3=Lgeptoindexphi3+1|0;
				Lgeptoindexphi=Lgeptoindexphi-1|0;
				if((0+Lgeptoindexphi3|0)<(L$ppre$pi.o+Lgeptoindexphi|0))continue;
				break;
			}
		}
		tmp14=tmp2.a2;
		Lgeptoindexphi=tmp14[0]|0;
		Lgeptoindexphi3=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
		if((L$ppre$pi.o+ -1|0)>0){
			tmp20=(0+(tmp2.i1|0)|0);
			Lgeptoindexphi12=0;
			Lgeptoindexphi7=0;
			while(1){
				if(Lgeptoindexphi3)if((tmp4[Lgeptoindexphi7]|0)!==(Lgeptoindexphi<<24>>24|0)){
					Larg5[Marg5]=4;
					break a;
				}
				if((tmp20-(0+Lgeptoindexphi12|0)|0)>1){
					Lgeptoindexphi12=Lgeptoindexphi12+1|0;
					Lgeptoindexphi=tmp14[Lgeptoindexphi12]|0;
				}
				Lgeptoindexphi7=Lgeptoindexphi7+1|0;
				Lgeptoindexphi3=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
				if((0+Lgeptoindexphi7|0)<(L$ppre$pi.o+ -1|0))continue;
				break;
			}
		}
		if(Lgeptoindexphi3)if((L$ppre$pi.d[L$ppre$pi.o+ -1|0]|0)-1>>>0>=Lgeptoindexphi<<24>>24>>>0)Larg5[Marg5]=4;
	}
	if(L$plcssa10$pi){
		L$psroa$p0$p0$pcopyload=null;
	}else{
		L$ppre$pio=L$psroa$p0$p0$pcopyload.a3o;
		L$ppre$pi=L$psroa$p0$p0$pcopyload.a3;
		tmp14=L$psroa$p0$p0$pcopyload.a4;
		if(L$ppre$pi===tmp14&&L$ppre$pio===0){
			L$plcssa10$pi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
			L$psroa$p0$p0$pcopyload=((L$plcssa10$pi|0)===-1?null:L$psroa$p0$p0$pcopyload);
			L$pidx$pval=((L$plcssa10$pi|0)===-1?null:L$pidx$pval);
		}
	}
	L$plcssa10$pi=L$psroa$p0$p0$pcopyload===null?1:0;
	a:{
		b:{
			c:if(L$psroa$p02$p0$pcopyload!==null){
				L$psroa$p0$p0$pcopyloado=L$psroa$p02$p0$pcopyload.a3o;
				L$psroa$p0$p0$pcopyload=L$psroa$p02$p0$pcopyload.a3;
				L$ppre$pi=L$psroa$p02$p0$pcopyload.a4;
				if(L$psroa$p0$p0$pcopyload===L$ppre$pi&&L$psroa$p0$p0$pcopyloado===0)if((L$psroa$p02$p0$pcopyload.a0.a10(L$psroa$p02$p0$pcopyload)|0|0)===-1)break c;
				if(L$plcssa10$pi)break a;
				break b;
			}
			if(!(L$plcssa10$pi))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=L$pidx$pval;
}
function __ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjRf(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Marg6){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,tmp5=null,tmp6=null,LmergedArray=null,L$psroa$p0$p0$pcopyload=null,L$psroa$p0$p0$pcopyloado=0,L$psroa$p02$p0$pcopyload=null,L$pidx$pval=null,L$ppre$pi=null,L$ppre$pio=0,Lgeptoindexphi7=0,Lgeptoindexphi12=0,tmp14=null,tmp14o=0,tmp15=null,L$plcssa10$pi=0,Lgeptoindexphi=0,tmp18=-0.,Lgeptoindexphi3=0,tmp20=0;
	L$psroa$p0$p0$pcopyload=Larg2.a0;
	L$psroa$p02$p0$pcopyload=Larg3.a0;
	L$pidx$pval=Larg4.a7.a0;
	tmp0=[nullObj];
	tmp1=new Uint8Array(32);
	tmp2={i0:0,i1:0,a2:nullArray};
	tmp3={i0:0,i1:0,a2:nullArray};
	tmp4=new Int32Array(40);
	tmp5=[nullObj];
	tmp6=[0];
	LmergedArray=new Uint8Array(4);
	__ZNSt9__num_getIcE19__stage2_float_prepERSt8ios_basePcRcS4_(tmp2,L$pidx$pval,tmp1,0,LmergedArray,0,LmergedArray,1);
	tmp3.i0=0;
	tmp3.i1=0;
	tmp3.a2=nullArray;
	__ZNSs6appendEjc(tmp3,1);
	L$ppre$pi=tmp3.a2;
	tmp0[0]={d:L$ppre$pi,o:0};
	tmp5[0]={d:tmp4,o:0};
	tmp6[0]=0;
	LmergedArray[2]=1;
	LmergedArray[3]=69;
	Lgeptoindexphi7=LmergedArray[0]|0;
	Lgeptoindexphi12=LmergedArray[1]|0;
	L$pidx$pval=L$psroa$p0$p0$pcopyload;
	while(1){
		if(L$psroa$p0$p0$pcopyload!==null){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0){
				L$plcssa10$pi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
				L$psroa$p0$p0$pcopyload=((L$plcssa10$pi|0)===-1?null:L$psroa$p0$p0$pcopyload);
				L$pidx$pval=((L$plcssa10$pi|0)===-1?null:L$pidx$pval);
			}
		}else{
			L$psroa$p0$p0$pcopyload=null;
		}
		L$plcssa10$pi=L$psroa$p0$p0$pcopyload===null?1:0;
		a:{
			b:if(L$psroa$p02$p0$pcopyload!==null){
				tmp14o=L$psroa$p02$p0$pcopyload.a3o;
				tmp14=L$psroa$p02$p0$pcopyload.a3;
				tmp15=L$psroa$p02$p0$pcopyload.a4;
				if(tmp14===tmp15&&tmp14o===0)if((L$psroa$p02$p0$pcopyload.a0.a10(L$psroa$p02$p0$pcopyload)|0|0)===-1)break b;
				if(L$plcssa10$pi)break a;
				L$plcssa10$pi=0;
				break;
			}
			if(L$plcssa10$pi){
				L$psroa$p02$p0$pcopyload=null;
				L$plcssa10$pi=1;
				L$psroa$p0$p0$pcopyload=null;
				break;
			}
			L$psroa$p02$p0$pcopyload=null;
		}
		tmp14=tmp0[0];
		Lgeptoindexphi=tmp3.i1|0;
		if(tmp14.d===L$ppre$pi&&tmp14.o===(0+Lgeptoindexphi|0)){
			Lgeptoindexphi3=Lgeptoindexphi<<1;
			if(Lgeptoindexphi3>>>0<Lgeptoindexphi>>>0){
				L$ppre$pi[Lgeptoindexphi3]=0;
				tmp3.i1=Lgeptoindexphi3;
			}else __ZNSs6appendEjc(tmp3,Lgeptoindexphi);
			Lgeptoindexphi3=tmp3.i0|0;
			if(Lgeptoindexphi3>>>0<2){
				Lgeptoindexphi3=0;
			}else{
				Lgeptoindexphi3=(Lgeptoindexphi3& -2)-1|0;
			}
			tmp20=tmp3.i1|0;
			if(Lgeptoindexphi3>>>0<tmp20>>>0){
				L$ppre$pi=tmp3.a2;
				L$ppre$pi[Lgeptoindexphi3]=0;
				tmp3.i1=Lgeptoindexphi3;
			}else{
				__ZNSs6appendEjc(tmp3,Lgeptoindexphi3-tmp20|0);
				L$ppre$pi=tmp3.a2;
			}
			tmp0[0]={d:L$ppre$pi,o:0+Lgeptoindexphi|0};
		}
		tmp14o=L$psroa$p0$p0$pcopyload.a3o;
		tmp14=L$psroa$p0$p0$pcopyload.a3;
		tmp15=L$psroa$p0$p0$pcopyload.a4;
		if(tmp14===tmp15&&tmp14o===0){
			Lgeptoindexphi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			Lgeptoindexphi=tmp14[tmp14o]|0;
			Lgeptoindexphi=Lgeptoindexphi&255;
		}
		if((__ZNSt9__num_getIcE19__stage2_float_loopEcRbRcPcRS3_ccRKSsPjRS7_RjS3_(Lgeptoindexphi,LmergedArray,2,LmergedArray,3,L$ppre$pi,0,tmp0,0,Lgeptoindexphi7,Lgeptoindexphi12,tmp2,tmp4,0,tmp5,0,tmp6,0,tmp1)|0|0)===0){
			tmp14o=L$psroa$p0$p0$pcopyload.a3o;
			tmp14=L$psroa$p0$p0$pcopyload.a3;
			tmp15=L$psroa$p0$p0$pcopyload.a4;
			if(tmp14===tmp15&&tmp14o===0)L$psroa$p0$p0$pcopyload.a0.a11(L$psroa$p0$p0$pcopyload)|0;
			else{
				L$psroa$p0$p0$pcopyload.a3=tmp14;
				L$psroa$p0$p0$pcopyload.a3o=tmp14o+1|0;
			}
			continue;
		}
		break;
	}
	Lgeptoindexphi=LmergedArray[2]|0;
	if((tmp2.i1|0)!==0)if((Lgeptoindexphi&255)!==0){
		tmp14=tmp5[0];
		if((((tmp14.o)*4)-((0)*4)|0)<160){
			Lgeptoindexphi=tmp6[0]|0;
			tmp5[0]={d:tmp14.d,o:tmp14.o+1|0};
			tmp14.d[tmp14.o]=Lgeptoindexphi;
		}
	}
	tmp14=tmp0[0];
	if(L$ppre$pi===tmp14.d&&0===tmp14.o){
		Larg5[Marg5]=4;
		tmp18=0;
	}else{
		Lgeptoindexphi=_impure_data.i0|0;
		_impure_data.i0=0;
		tmp18=+__strtod_r(L$ppre$pi,0,tmp0,0);
		Lgeptoindexphi3=_impure_data.i0|0;
		if((Lgeptoindexphi3|0)===0)_impure_data.i0=Lgeptoindexphi;
		L$ppre$pi=tmp0[0];
		if(L$ppre$pi.d===tmp14.d&&L$ppre$pi.o===tmp14.o){
			if((Lgeptoindexphi3|0)===34)Larg5[Marg5]=4;
			tmp18=tmp18;
		}else{
			Larg5[Marg5]=4;
			tmp18=0;
		}
	}
	Larg6[Marg6]=tmp18;
	L$ppre$pi=tmp5[0];
	a:if((tmp2.i1|0)!==0){
		if(tmp4!==L$ppre$pi.d||0!==L$ppre$pi.o)if((L$ppre$pi.o+ -1|0)>0){
			Lgeptoindexphi3=0;
			Lgeptoindexphi=-1;
			while(1){
				tmp20=tmp4[Lgeptoindexphi3]|0;
				tmp4[Lgeptoindexphi3]=L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]|0;
				L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]=tmp20;
				Lgeptoindexphi3=Lgeptoindexphi3+1|0;
				Lgeptoindexphi=Lgeptoindexphi-1|0;
				if((0+Lgeptoindexphi3|0)<(L$ppre$pi.o+Lgeptoindexphi|0))continue;
				break;
			}
		}
		tmp14=tmp2.a2;
		Lgeptoindexphi=tmp14[0]|0;
		Lgeptoindexphi3=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
		if((L$ppre$pi.o+ -1|0)>0){
			tmp20=(0+(tmp2.i1|0)|0);
			Lgeptoindexphi12=0;
			Lgeptoindexphi7=0;
			while(1){
				if(Lgeptoindexphi3)if((tmp4[Lgeptoindexphi7]|0)!==(Lgeptoindexphi<<24>>24|0)){
					Larg5[Marg5]=4;
					break a;
				}
				if((tmp20-(0+Lgeptoindexphi12|0)|0)>1){
					Lgeptoindexphi12=Lgeptoindexphi12+1|0;
					Lgeptoindexphi=tmp14[Lgeptoindexphi12]|0;
				}
				Lgeptoindexphi7=Lgeptoindexphi7+1|0;
				Lgeptoindexphi3=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
				if((0+Lgeptoindexphi7|0)<(L$ppre$pi.o+ -1|0))continue;
				break;
			}
		}
		if(Lgeptoindexphi3)if((L$ppre$pi.d[L$ppre$pi.o+ -1|0]|0)-1>>>0>=Lgeptoindexphi<<24>>24>>>0)Larg5[Marg5]=4;
	}
	if(L$plcssa10$pi){
		L$psroa$p0$p0$pcopyload=null;
	}else{
		L$ppre$pio=L$psroa$p0$p0$pcopyload.a3o;
		L$ppre$pi=L$psroa$p0$p0$pcopyload.a3;
		tmp14=L$psroa$p0$p0$pcopyload.a4;
		if(L$ppre$pi===tmp14&&L$ppre$pio===0){
			L$plcssa10$pi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
			L$psroa$p0$p0$pcopyload=((L$plcssa10$pi|0)===-1?null:L$psroa$p0$p0$pcopyload);
			L$pidx$pval=((L$plcssa10$pi|0)===-1?null:L$pidx$pval);
		}
	}
	L$plcssa10$pi=L$psroa$p0$p0$pcopyload===null?1:0;
	a:{
		b:{
			c:if(L$psroa$p02$p0$pcopyload!==null){
				L$psroa$p0$p0$pcopyloado=L$psroa$p02$p0$pcopyload.a3o;
				L$psroa$p0$p0$pcopyload=L$psroa$p02$p0$pcopyload.a3;
				L$ppre$pi=L$psroa$p02$p0$pcopyload.a4;
				if(L$psroa$p0$p0$pcopyload===L$ppre$pi&&L$psroa$p0$p0$pcopyloado===0)if((L$psroa$p02$p0$pcopyload.a0.a10(L$psroa$p02$p0$pcopyload)|0|0)===-1)break c;
				if(L$plcssa10$pi)break a;
				break b;
			}
			if(!(L$plcssa10$pi))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=L$pidx$pval;
}
function __ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjRy(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Marg6){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,tmp5=null,tmp6=null,tmp7=null,tmp8=null,L$psroa$p0$p0$pcopyload=null,L$psroa$p0$p0$pcopyloado=0,L$psroa$p03$p0$pcopyload=null,L$pidx$pval=0,L$pidx1$pval=null,L$psroa$p6$p0$pph$pi=0,L$ppre$pi=null,L$ppre$pio=0,Lgeptoindexphi7=0,tmp16=null,tmp16o=0,tmp17=null,Lgeptoindexphi=0,L$psroa$p0$p0$pi=0,Lgeptoindexphi12=0;
	L$psroa$p0$p0$pcopyload=Larg2.a0;
	L$psroa$p03$p0$pcopyload=Larg3.a0;
	L$pidx$pval=Larg4.i1|0;
	L$pidx1$pval=Larg4.a7.a0;
	tmp0=new Int32Array(2);
	tmp1=[nullObj];
	tmp2=new Uint8Array(26);
	tmp3={i0:0,i1:0,a2:nullArray};
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp5=new Int32Array(40);
	tmp6=[nullObj];
	tmp7=[0];
	switch(L$pidx$pval&74&127){
		case 64:
		L$psroa$p6$p0$pph$pi=8;
		break;
		case 8:
		L$psroa$p6$p0$pph$pi=16;
		break;
		case 0:
		L$psroa$p6$p0$pph$pi=0;
		break;
		default:
		L$psroa$p6$p0$pph$pi=10;
	}
	tmp8=[0];
	__ZNSt9__num_getIcE17__stage2_int_prepERSt8ios_basePcRc(tmp3,L$pidx1$pval,tmp2,0,tmp8,0);
	tmp4.i0=0;
	tmp4.i1=0;
	tmp4.a2=nullArray;
	__ZNSs6appendEjc(tmp4,1);
	L$ppre$pi=tmp4.a2;
	tmp1[0]={d:L$ppre$pi,o:0};
	tmp6[0]={d:tmp5,o:0};
	tmp7[0]=0;
	Lgeptoindexphi7=tmp8[0]|0;
	L$pidx1$pval=L$psroa$p0$p0$pcopyload;
	while(1){
		if(L$psroa$p0$p0$pcopyload!==null){
			tmp16o=L$psroa$p0$p0$pcopyload.a3o;
			tmp16=L$psroa$p0$p0$pcopyload.a3;
			tmp17=L$psroa$p0$p0$pcopyload.a4;
			if(tmp16===tmp17&&tmp16o===0){
				L$pidx$pval=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
				L$psroa$p0$p0$pcopyload=((L$pidx$pval|0)===-1?null:L$psroa$p0$p0$pcopyload);
				L$pidx1$pval=((L$pidx$pval|0)===-1?null:L$pidx1$pval);
			}
		}else{
			L$psroa$p0$p0$pcopyload=null;
		}
		L$pidx$pval=L$psroa$p0$p0$pcopyload===null?1:0;
		a:{
			b:if(L$psroa$p03$p0$pcopyload!==null){
				tmp16o=L$psroa$p03$p0$pcopyload.a3o;
				tmp16=L$psroa$p03$p0$pcopyload.a3;
				tmp17=L$psroa$p03$p0$pcopyload.a4;
				if(tmp16===tmp17&&tmp16o===0)if((L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0|0)===-1)break b;
				if(L$pidx$pval)break a;
				L$pidx$pval=0;
				break;
			}
			if(L$pidx$pval){
				L$psroa$p03$p0$pcopyload=null;
				L$pidx$pval=1;
				L$psroa$p0$p0$pcopyload=null;
				break;
			}
			L$psroa$p03$p0$pcopyload=null;
		}
		tmp16=tmp1[0];
		Lgeptoindexphi=tmp4.i1|0;
		if(tmp16.d===L$ppre$pi&&tmp16.o===(0+Lgeptoindexphi|0)){
			Lgeptoindexphi12=Lgeptoindexphi<<1;
			if(Lgeptoindexphi12>>>0<Lgeptoindexphi>>>0){
				L$ppre$pi[Lgeptoindexphi12]=0;
				tmp4.i1=Lgeptoindexphi12;
			}else __ZNSs6appendEjc(tmp4,Lgeptoindexphi);
			Lgeptoindexphi12=tmp4.i0|0;
			if(Lgeptoindexphi12>>>0<2){
				Lgeptoindexphi12=0;
			}else{
				Lgeptoindexphi12=(Lgeptoindexphi12& -2)-1|0;
			}
			L$psroa$p0$p0$pi=tmp4.i1|0;
			if(Lgeptoindexphi12>>>0<L$psroa$p0$p0$pi>>>0){
				L$ppre$pi=tmp4.a2;
				L$ppre$pi[Lgeptoindexphi12]=0;
				tmp4.i1=Lgeptoindexphi12;
			}else{
				__ZNSs6appendEjc(tmp4,Lgeptoindexphi12-L$psroa$p0$p0$pi|0);
				L$ppre$pi=tmp4.a2;
			}
			tmp1[0]={d:L$ppre$pi,o:0+Lgeptoindexphi|0};
		}
		tmp16o=L$psroa$p0$p0$pcopyload.a3o;
		tmp16=L$psroa$p0$p0$pcopyload.a3;
		tmp17=L$psroa$p0$p0$pcopyload.a4;
		if(tmp16===tmp17&&tmp16o===0){
			Lgeptoindexphi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			Lgeptoindexphi=tmp16[tmp16o]|0;
			Lgeptoindexphi=Lgeptoindexphi&255;
		}
		if((__ZNSt9__num_getIcE17__stage2_int_loopEciPcRS1_RjcRKSsPjRS6_S1_(Lgeptoindexphi,L$psroa$p6$p0$pph$pi,L$ppre$pi,0,tmp1,0,tmp7,0,Lgeptoindexphi7,tmp3,tmp5,0,tmp6,0,tmp2)|0|0)===0){
			tmp16o=L$psroa$p0$p0$pcopyload.a3o;
			tmp16=L$psroa$p0$p0$pcopyload.a3;
			tmp17=L$psroa$p0$p0$pcopyload.a4;
			if(tmp16===tmp17&&tmp16o===0)L$psroa$p0$p0$pcopyload.a0.a11(L$psroa$p0$p0$pcopyload)|0;
			else{
				L$psroa$p0$p0$pcopyload.a3=tmp16;
				L$psroa$p0$p0$pcopyload.a3o=tmp16o+1|0;
			}
			continue;
		}
		break;
	}
	if((tmp3.i1|0)!==0){
		tmp16=tmp6[0];
		if((((tmp16.o)*4)-((0)*4)|0)<160){
			Lgeptoindexphi=tmp7[0]|0;
			tmp6[0]={d:tmp16.d,o:tmp16.o+1|0};
			tmp16.d[tmp16.o]=Lgeptoindexphi;
		}
	}
	tmp16=tmp1[0];
	if(L$ppre$pi===tmp16.d&&0===tmp16.o){
		Larg5[Marg5]=4;
		L$psroa$p0$p0$pi=0;
		L$psroa$p6$p0$pph$pi=0;
	}else if((L$ppre$pi[0]&255)===45){
		Larg5[Marg5]=4;
		L$psroa$p0$p0$pi=0;
		L$psroa$p6$p0$pph$pi=0;
	}else{
		Lgeptoindexphi=_impure_data.i0|0;
		_impure_data.i0=0;
		__strtoull_r(tmp0,0,_impure_data,L$ppre$pi,0,tmp1,0,L$psroa$p6$p0$pph$pi);
		L$psroa$p6$p0$pph$pi=tmp0[1]|0;
		L$psroa$p0$p0$pi=tmp0[0]|0;
		Lgeptoindexphi7=_impure_data.i0|0;
		if((Lgeptoindexphi7|0)===0)_impure_data.i0=Lgeptoindexphi;
		L$ppre$pi=tmp1[0];
		a:{
			if(L$ppre$pi.d===tmp16.d&&L$ppre$pi.o===tmp16.o){
				if((Lgeptoindexphi7|0)!==34)break a;
				L$psroa$p6$p0$pph$pi=-1;
			}else{
				L$psroa$p6$p0$pph$pi=0;
			}
			Larg5[Marg5]=4;
			L$psroa$p0$p0$pi=L$psroa$p6$p0$pph$pi;
		}
	}
	Larg6[Marg6+1|0]=L$psroa$p6$p0$pph$pi;
	Larg6[Marg6]=L$psroa$p0$p0$pi;
	L$ppre$pi=tmp6[0];
	a:if((tmp3.i1|0)!==0){
		if(tmp5!==L$ppre$pi.d||0!==L$ppre$pi.o)if((L$ppre$pi.o+ -1|0)>0){
			L$psroa$p6$p0$pph$pi=0;
			Lgeptoindexphi=-1;
			while(1){
				L$psroa$p0$p0$pi=tmp5[L$psroa$p6$p0$pph$pi]|0;
				tmp5[L$psroa$p6$p0$pph$pi]=L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]|0;
				L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]=L$psroa$p0$p0$pi;
				L$psroa$p6$p0$pph$pi=L$psroa$p6$p0$pph$pi+1|0;
				Lgeptoindexphi=Lgeptoindexphi-1|0;
				if((0+L$psroa$p6$p0$pph$pi|0)<(L$ppre$pi.o+Lgeptoindexphi|0))continue;
				break;
			}
		}
		tmp16=tmp3.a2;
		Lgeptoindexphi=tmp16[0]|0;
		L$psroa$p6$p0$pph$pi=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
		if((L$ppre$pi.o+ -1|0)>0){
			L$psroa$p0$p0$pi=(0+(tmp3.i1|0)|0);
			Lgeptoindexphi12=0;
			Lgeptoindexphi7=0;
			while(1){
				if(L$psroa$p6$p0$pph$pi)if((tmp5[Lgeptoindexphi7]|0)!==(Lgeptoindexphi<<24>>24|0)){
					Larg5[Marg5]=4;
					break a;
				}
				if((L$psroa$p0$p0$pi-(0+Lgeptoindexphi12|0)|0)>1){
					Lgeptoindexphi12=Lgeptoindexphi12+1|0;
					Lgeptoindexphi=tmp16[Lgeptoindexphi12]|0;
				}
				Lgeptoindexphi7=Lgeptoindexphi7+1|0;
				L$psroa$p6$p0$pph$pi=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
				if((0+Lgeptoindexphi7|0)<(L$ppre$pi.o+ -1|0))continue;
				break;
			}
		}
		if(L$psroa$p6$p0$pph$pi)if((L$ppre$pi.d[L$ppre$pi.o+ -1|0]|0)-1>>>0>=Lgeptoindexphi<<24>>24>>>0)Larg5[Marg5]=4;
	}
	if(L$pidx$pval){
		L$psroa$p0$p0$pcopyload=null;
	}else{
		L$ppre$pio=L$psroa$p0$p0$pcopyload.a3o;
		L$ppre$pi=L$psroa$p0$p0$pcopyload.a3;
		tmp16=L$psroa$p0$p0$pcopyload.a4;
		if(L$ppre$pi===tmp16&&L$ppre$pio===0){
			L$pidx$pval=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
			L$psroa$p0$p0$pcopyload=((L$pidx$pval|0)===-1?null:L$psroa$p0$p0$pcopyload);
			L$pidx1$pval=((L$pidx$pval|0)===-1?null:L$pidx1$pval);
		}
	}
	L$pidx$pval=L$psroa$p0$p0$pcopyload===null?1:0;
	a:{
		b:{
			c:if(L$psroa$p03$p0$pcopyload!==null){
				L$psroa$p0$p0$pcopyloado=L$psroa$p03$p0$pcopyload.a3o;
				L$psroa$p0$p0$pcopyload=L$psroa$p03$p0$pcopyload.a3;
				L$ppre$pi=L$psroa$p03$p0$pcopyload.a4;
				if(L$psroa$p0$p0$pcopyload===L$ppre$pi&&L$psroa$p0$p0$pcopyloado===0)if((L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0|0)===-1)break c;
				if(L$pidx$pval)break a;
				break b;
			}
			if(!(L$pidx$pval))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=L$pidx1$pval;
}
function __ZNSt9__num_getIcE17__stage2_int_prepERSt8ios_basePcRc(Larg0,L$p0$p7$p0$pval,Larg2,Marg2,Larg3,Marg3){
	var tmp0=0,tmp1=null;
	L$p0$p7$p0$pval.i1=(L$p0$p7$p0$pval.i1|0)+1|0;
	if((__ZNSt5ctypeIcE2idE.i0&255)!==0){
		tmp0=__ZNSt5ctypeIcE2idE.i1|0;
	}else{
		tmp0=(__ZNSt6locale2id9__next_idE|0)+1|0;
		__ZNSt6locale2id9__next_idE=tmp0;
		__ZNSt5ctypeIcE2idE.i1=tmp0;
		__ZNSt5ctypeIcE2idE.i0=1;
	}
	tmp1=L$p0$p7$p0$pval.a2.a0;
	tmp1=tmp1[tmp0-1|0];
	tmp1.a0.a9(tmp1,__ZNSt14__num_get_base5__srcE,0,__ZNSt14__num_get_base5__srcE,26,Larg2,Marg2);
	tmp1=L$p0$p7$p0$pval.a2.a0;
	tmp1=tmp1[(__ZNSt8numpunctIcE2idE$p1|0)-1|0];
	Larg3[Marg3]=tmp1.a0.a5(tmp1)|0;
	tmp1.a0.a6(Larg0,tmp1);
	tmp0=L$p0$p7$p0$pval.i1|0;
	L$p0$p7$p0$pval.i1=tmp0-1|0;
	if((tmp0|0)===0)L$p0$p7$p0$pval.a0.a3(L$p0$p7$p0$pval);
}
function __ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjRm(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Marg6){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,tmp5=null,tmp6=null,tmp7=null,tmp8=null,L$psroa$p0$p0$pcopyload=null,L$psroa$p0$p0$pcopyloado=0,L$psroa$p03$p0$pcopyload=null,L$pidx$pval=0,L$pidx1$pval=null,Lgeptoindexphi3=0,L$ppre$pi=null,L$ppre$pio=0,Lgeptoindexphi7=0,tmp16=null,tmp16o=0,tmp17=null,Lgeptoindexphi=0,tmp19=0,Lgeptoindexphi12=0;
	L$psroa$p0$p0$pcopyload=Larg2.a0;
	L$psroa$p03$p0$pcopyload=Larg3.a0;
	L$pidx$pval=Larg4.i1|0;
	L$pidx1$pval=Larg4.a7.a0;
	tmp0=new Int32Array(2);
	tmp1=[nullObj];
	tmp2=new Uint8Array(26);
	tmp3={i0:0,i1:0,a2:nullArray};
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp5=new Int32Array(40);
	tmp6=[nullObj];
	tmp7=[0];
	switch(L$pidx$pval&74&127){
		case 64:
		Lgeptoindexphi3=8;
		break;
		case 8:
		Lgeptoindexphi3=16;
		break;
		case 0:
		Lgeptoindexphi3=0;
		break;
		default:
		Lgeptoindexphi3=10;
	}
	tmp8=[0];
	__ZNSt9__num_getIcE17__stage2_int_prepERSt8ios_basePcRc(tmp3,L$pidx1$pval,tmp2,0,tmp8,0);
	tmp4.i0=0;
	tmp4.i1=0;
	tmp4.a2=nullArray;
	__ZNSs6appendEjc(tmp4,1);
	L$ppre$pi=tmp4.a2;
	tmp1[0]={d:L$ppre$pi,o:0};
	tmp6[0]={d:tmp5,o:0};
	tmp7[0]=0;
	Lgeptoindexphi7=tmp8[0]|0;
	L$pidx1$pval=L$psroa$p0$p0$pcopyload;
	while(1){
		if(L$psroa$p0$p0$pcopyload!==null){
			tmp16o=L$psroa$p0$p0$pcopyload.a3o;
			tmp16=L$psroa$p0$p0$pcopyload.a3;
			tmp17=L$psroa$p0$p0$pcopyload.a4;
			if(tmp16===tmp17&&tmp16o===0){
				L$pidx$pval=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
				L$psroa$p0$p0$pcopyload=((L$pidx$pval|0)===-1?null:L$psroa$p0$p0$pcopyload);
				L$pidx1$pval=((L$pidx$pval|0)===-1?null:L$pidx1$pval);
			}
		}else{
			L$psroa$p0$p0$pcopyload=null;
		}
		L$pidx$pval=L$psroa$p0$p0$pcopyload===null?1:0;
		a:{
			b:if(L$psroa$p03$p0$pcopyload!==null){
				tmp16o=L$psroa$p03$p0$pcopyload.a3o;
				tmp16=L$psroa$p03$p0$pcopyload.a3;
				tmp17=L$psroa$p03$p0$pcopyload.a4;
				if(tmp16===tmp17&&tmp16o===0)if((L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0|0)===-1)break b;
				if(L$pidx$pval)break a;
				L$pidx$pval=0;
				break;
			}
			if(L$pidx$pval){
				L$psroa$p03$p0$pcopyload=null;
				L$pidx$pval=1;
				L$psroa$p0$p0$pcopyload=null;
				break;
			}
			L$psroa$p03$p0$pcopyload=null;
		}
		tmp16=tmp1[0];
		Lgeptoindexphi=tmp4.i1|0;
		if(tmp16.d===L$ppre$pi&&tmp16.o===(0+Lgeptoindexphi|0)){
			Lgeptoindexphi12=Lgeptoindexphi<<1;
			if(Lgeptoindexphi12>>>0<Lgeptoindexphi>>>0){
				L$ppre$pi[Lgeptoindexphi12]=0;
				tmp4.i1=Lgeptoindexphi12;
			}else __ZNSs6appendEjc(tmp4,Lgeptoindexphi);
			Lgeptoindexphi12=tmp4.i0|0;
			if(Lgeptoindexphi12>>>0<2){
				Lgeptoindexphi12=0;
			}else{
				Lgeptoindexphi12=(Lgeptoindexphi12& -2)-1|0;
			}
			tmp19=tmp4.i1|0;
			if(Lgeptoindexphi12>>>0<tmp19>>>0){
				L$ppre$pi=tmp4.a2;
				L$ppre$pi[Lgeptoindexphi12]=0;
				tmp4.i1=Lgeptoindexphi12;
			}else{
				__ZNSs6appendEjc(tmp4,Lgeptoindexphi12-tmp19|0);
				L$ppre$pi=tmp4.a2;
			}
			tmp1[0]={d:L$ppre$pi,o:0+Lgeptoindexphi|0};
		}
		tmp16o=L$psroa$p0$p0$pcopyload.a3o;
		tmp16=L$psroa$p0$p0$pcopyload.a3;
		tmp17=L$psroa$p0$p0$pcopyload.a4;
		if(tmp16===tmp17&&tmp16o===0){
			Lgeptoindexphi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			Lgeptoindexphi=tmp16[tmp16o]|0;
			Lgeptoindexphi=Lgeptoindexphi&255;
		}
		if((__ZNSt9__num_getIcE17__stage2_int_loopEciPcRS1_RjcRKSsPjRS6_S1_(Lgeptoindexphi,Lgeptoindexphi3,L$ppre$pi,0,tmp1,0,tmp7,0,Lgeptoindexphi7,tmp3,tmp5,0,tmp6,0,tmp2)|0|0)===0){
			tmp16o=L$psroa$p0$p0$pcopyload.a3o;
			tmp16=L$psroa$p0$p0$pcopyload.a3;
			tmp17=L$psroa$p0$p0$pcopyload.a4;
			if(tmp16===tmp17&&tmp16o===0)L$psroa$p0$p0$pcopyload.a0.a11(L$psroa$p0$p0$pcopyload)|0;
			else{
				L$psroa$p0$p0$pcopyload.a3=tmp16;
				L$psroa$p0$p0$pcopyload.a3o=tmp16o+1|0;
			}
			continue;
		}
		break;
	}
	if((tmp3.i1|0)!==0){
		tmp16=tmp6[0];
		if((((tmp16.o)*4)-((0)*4)|0)<160){
			Lgeptoindexphi=tmp7[0]|0;
			tmp6[0]={d:tmp16.d,o:tmp16.o+1|0};
			tmp16.d[tmp16.o]=Lgeptoindexphi;
		}
	}
	tmp16=tmp1[0];
	if(L$ppre$pi===tmp16.d&&0===tmp16.o){
		Larg5[Marg5]=4;
		tmp19=0;
	}else if((L$ppre$pi[0]&255)===45){
		Larg5[Marg5]=4;
		tmp19=0;
	}else{
		Lgeptoindexphi=_impure_data.i0|0;
		_impure_data.i0=0;
		__strtoull_r(tmp0,0,_impure_data,L$ppre$pi,0,tmp1,0,Lgeptoindexphi3);
		Lgeptoindexphi3=tmp0[1]|0;
		tmp19=tmp0[0]|0;
		Lgeptoindexphi7=_impure_data.i0|0;
		if((Lgeptoindexphi7|0)===0)_impure_data.i0=Lgeptoindexphi;
		L$ppre$pi=tmp1[0];
		a:{
			if(L$ppre$pi.d===tmp16.d&&L$ppre$pi.o===tmp16.o){
				if((Lgeptoindexphi3|0)!==0){
					tmp19=-1;
				}else{
					if((Lgeptoindexphi7|0)!==34)break a;
					tmp19=-1;
				}
			}else{
				tmp19=0;
			}
			Larg5[Marg5]=4;
		}
	}
	Larg6[Marg6]=tmp19;
	L$ppre$pi=tmp6[0];
	a:if((tmp3.i1|0)!==0){
		if(tmp5!==L$ppre$pi.d||0!==L$ppre$pi.o)if((L$ppre$pi.o+ -1|0)>0){
			Lgeptoindexphi3=0;
			Lgeptoindexphi=-1;
			while(1){
				tmp19=tmp5[Lgeptoindexphi3]|0;
				tmp5[Lgeptoindexphi3]=L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]|0;
				L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]=tmp19;
				Lgeptoindexphi3=Lgeptoindexphi3+1|0;
				Lgeptoindexphi=Lgeptoindexphi-1|0;
				if((0+Lgeptoindexphi3|0)<(L$ppre$pi.o+Lgeptoindexphi|0))continue;
				break;
			}
		}
		tmp16=tmp3.a2;
		Lgeptoindexphi=tmp16[0]|0;
		Lgeptoindexphi3=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
		if((L$ppre$pi.o+ -1|0)>0){
			tmp19=(0+(tmp3.i1|0)|0);
			Lgeptoindexphi12=0;
			Lgeptoindexphi7=0;
			while(1){
				if(Lgeptoindexphi3)if((tmp5[Lgeptoindexphi7]|0)!==(Lgeptoindexphi<<24>>24|0)){
					Larg5[Marg5]=4;
					break a;
				}
				if((tmp19-(0+Lgeptoindexphi12|0)|0)>1){
					Lgeptoindexphi12=Lgeptoindexphi12+1|0;
					Lgeptoindexphi=tmp16[Lgeptoindexphi12]|0;
				}
				Lgeptoindexphi7=Lgeptoindexphi7+1|0;
				Lgeptoindexphi3=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
				if((0+Lgeptoindexphi7|0)<(L$ppre$pi.o+ -1|0))continue;
				break;
			}
		}
		if(Lgeptoindexphi3)if((L$ppre$pi.d[L$ppre$pi.o+ -1|0]|0)-1>>>0>=Lgeptoindexphi<<24>>24>>>0)Larg5[Marg5]=4;
	}
	if(L$pidx$pval){
		L$psroa$p0$p0$pcopyload=null;
	}else{
		L$ppre$pio=L$psroa$p0$p0$pcopyload.a3o;
		L$ppre$pi=L$psroa$p0$p0$pcopyload.a3;
		tmp16=L$psroa$p0$p0$pcopyload.a4;
		if(L$ppre$pi===tmp16&&L$ppre$pio===0){
			L$pidx$pval=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
			L$psroa$p0$p0$pcopyload=((L$pidx$pval|0)===-1?null:L$psroa$p0$p0$pcopyload);
			L$pidx1$pval=((L$pidx$pval|0)===-1?null:L$pidx1$pval);
		}
	}
	L$pidx$pval=L$psroa$p0$p0$pcopyload===null?1:0;
	a:{
		b:{
			c:if(L$psroa$p03$p0$pcopyload!==null){
				L$psroa$p0$p0$pcopyloado=L$psroa$p03$p0$pcopyload.a3o;
				L$psroa$p0$p0$pcopyload=L$psroa$p03$p0$pcopyload.a3;
				L$ppre$pi=L$psroa$p03$p0$pcopyload.a4;
				if(L$psroa$p0$p0$pcopyload===L$ppre$pi&&L$psroa$p0$p0$pcopyloado===0)if((L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0|0)===-1)break c;
				if(L$pidx$pval)break a;
				break b;
			}
			if(!(L$pidx$pval))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=L$pidx1$pval;
}
function __ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjS7_(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Marg6){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,tmp5=null,tmp6=null,tmp7=null,tmp8=null,L$psroa$p0$p0$pcopyload=null,L$psroa$p0$p0$pcopyloado=0,L$psroa$p03$p0$pcopyload=null,L$pidx$pval=0,L$pidx1$pval=null,Lgeptoindexphi3=0,L$ppre$pi=null,L$ppre$pio=0,Lgeptoindexphi7=0,tmp16=null,tmp16o=0,tmp17=null,Lgeptoindexphi=0,tmp19=0,Lgeptoindexphi12=0;
	L$psroa$p0$p0$pcopyload=Larg2.a0;
	L$psroa$p03$p0$pcopyload=Larg3.a0;
	L$pidx$pval=Larg4.i1|0;
	L$pidx1$pval=Larg4.a7.a0;
	tmp0=new Int32Array(2);
	tmp1=[nullObj];
	tmp2=new Uint8Array(26);
	tmp3={i0:0,i1:0,a2:nullArray};
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp5=new Int32Array(40);
	tmp6=[nullObj];
	tmp7=[0];
	switch(L$pidx$pval&74&127){
		case 64:
		Lgeptoindexphi3=8;
		break;
		case 8:
		Lgeptoindexphi3=16;
		break;
		case 0:
		Lgeptoindexphi3=0;
		break;
		default:
		Lgeptoindexphi3=10;
	}
	tmp8=[0];
	__ZNSt9__num_getIcE17__stage2_int_prepERSt8ios_basePcRc(tmp3,L$pidx1$pval,tmp2,0,tmp8,0);
	tmp4.i0=0;
	tmp4.i1=0;
	tmp4.a2=nullArray;
	__ZNSs6appendEjc(tmp4,1);
	L$ppre$pi=tmp4.a2;
	tmp1[0]={d:L$ppre$pi,o:0};
	tmp6[0]={d:tmp5,o:0};
	tmp7[0]=0;
	Lgeptoindexphi7=tmp8[0]|0;
	L$pidx1$pval=L$psroa$p0$p0$pcopyload;
	while(1){
		if(L$psroa$p0$p0$pcopyload!==null){
			tmp16o=L$psroa$p0$p0$pcopyload.a3o;
			tmp16=L$psroa$p0$p0$pcopyload.a3;
			tmp17=L$psroa$p0$p0$pcopyload.a4;
			if(tmp16===tmp17&&tmp16o===0){
				L$pidx$pval=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
				L$psroa$p0$p0$pcopyload=((L$pidx$pval|0)===-1?null:L$psroa$p0$p0$pcopyload);
				L$pidx1$pval=((L$pidx$pval|0)===-1?null:L$pidx1$pval);
			}
		}else{
			L$psroa$p0$p0$pcopyload=null;
		}
		L$pidx$pval=L$psroa$p0$p0$pcopyload===null?1:0;
		a:{
			b:if(L$psroa$p03$p0$pcopyload!==null){
				tmp16o=L$psroa$p03$p0$pcopyload.a3o;
				tmp16=L$psroa$p03$p0$pcopyload.a3;
				tmp17=L$psroa$p03$p0$pcopyload.a4;
				if(tmp16===tmp17&&tmp16o===0)if((L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0|0)===-1)break b;
				if(L$pidx$pval)break a;
				L$pidx$pval=0;
				break;
			}
			if(L$pidx$pval){
				L$psroa$p03$p0$pcopyload=null;
				L$pidx$pval=1;
				L$psroa$p0$p0$pcopyload=null;
				break;
			}
			L$psroa$p03$p0$pcopyload=null;
		}
		tmp16=tmp1[0];
		Lgeptoindexphi=tmp4.i1|0;
		if(tmp16.d===L$ppre$pi&&tmp16.o===(0+Lgeptoindexphi|0)){
			Lgeptoindexphi12=Lgeptoindexphi<<1;
			if(Lgeptoindexphi12>>>0<Lgeptoindexphi>>>0){
				L$ppre$pi[Lgeptoindexphi12]=0;
				tmp4.i1=Lgeptoindexphi12;
			}else __ZNSs6appendEjc(tmp4,Lgeptoindexphi);
			Lgeptoindexphi12=tmp4.i0|0;
			if(Lgeptoindexphi12>>>0<2){
				Lgeptoindexphi12=0;
			}else{
				Lgeptoindexphi12=(Lgeptoindexphi12& -2)-1|0;
			}
			tmp19=tmp4.i1|0;
			if(Lgeptoindexphi12>>>0<tmp19>>>0){
				L$ppre$pi=tmp4.a2;
				L$ppre$pi[Lgeptoindexphi12]=0;
				tmp4.i1=Lgeptoindexphi12;
			}else{
				__ZNSs6appendEjc(tmp4,Lgeptoindexphi12-tmp19|0);
				L$ppre$pi=tmp4.a2;
			}
			tmp1[0]={d:L$ppre$pi,o:0+Lgeptoindexphi|0};
		}
		tmp16o=L$psroa$p0$p0$pcopyload.a3o;
		tmp16=L$psroa$p0$p0$pcopyload.a3;
		tmp17=L$psroa$p0$p0$pcopyload.a4;
		if(tmp16===tmp17&&tmp16o===0){
			Lgeptoindexphi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			Lgeptoindexphi=tmp16[tmp16o]|0;
			Lgeptoindexphi=Lgeptoindexphi&255;
		}
		if((__ZNSt9__num_getIcE17__stage2_int_loopEciPcRS1_RjcRKSsPjRS6_S1_(Lgeptoindexphi,Lgeptoindexphi3,L$ppre$pi,0,tmp1,0,tmp7,0,Lgeptoindexphi7,tmp3,tmp5,0,tmp6,0,tmp2)|0|0)===0){
			tmp16o=L$psroa$p0$p0$pcopyload.a3o;
			tmp16=L$psroa$p0$p0$pcopyload.a3;
			tmp17=L$psroa$p0$p0$pcopyload.a4;
			if(tmp16===tmp17&&tmp16o===0)L$psroa$p0$p0$pcopyload.a0.a11(L$psroa$p0$p0$pcopyload)|0;
			else{
				L$psroa$p0$p0$pcopyload.a3=tmp16;
				L$psroa$p0$p0$pcopyload.a3o=tmp16o+1|0;
			}
			continue;
		}
		break;
	}
	if((tmp3.i1|0)!==0){
		tmp16=tmp6[0];
		if((((tmp16.o)*4)-((0)*4)|0)<160){
			Lgeptoindexphi=tmp7[0]|0;
			tmp6[0]={d:tmp16.d,o:tmp16.o+1|0};
			tmp16.d[tmp16.o]=Lgeptoindexphi;
		}
	}
	tmp16=tmp1[0];
	if(L$ppre$pi===tmp16.d&&0===tmp16.o){
		Larg5[Marg5]=4;
		tmp19=0;
	}else if((L$ppre$pi[0]&255)===45){
		Larg5[Marg5]=4;
		tmp19=0;
	}else{
		Lgeptoindexphi=_impure_data.i0|0;
		_impure_data.i0=0;
		__strtoull_r(tmp0,0,_impure_data,L$ppre$pi,0,tmp1,0,Lgeptoindexphi3);
		Lgeptoindexphi3=tmp0[1]|0;
		tmp19=tmp0[0]|0;
		Lgeptoindexphi7=_impure_data.i0|0;
		if((Lgeptoindexphi7|0)===0)_impure_data.i0=Lgeptoindexphi;
		L$ppre$pi=tmp1[0];
		a:{
			if(L$ppre$pi.d===tmp16.d&&L$ppre$pi.o===tmp16.o){
				if((Lgeptoindexphi3|0)!==0){
					tmp19=-1;
				}else{
					if((Lgeptoindexphi7|0)!==34)break a;
					tmp19=-1;
				}
			}else{
				tmp19=0;
			}
			Larg5[Marg5]=4;
		}
	}
	Larg6[Marg6]=tmp19;
	L$ppre$pi=tmp6[0];
	a:if((tmp3.i1|0)!==0){
		if(tmp5!==L$ppre$pi.d||0!==L$ppre$pi.o)if((L$ppre$pi.o+ -1|0)>0){
			Lgeptoindexphi3=0;
			Lgeptoindexphi=-1;
			while(1){
				tmp19=tmp5[Lgeptoindexphi3]|0;
				tmp5[Lgeptoindexphi3]=L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]|0;
				L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]=tmp19;
				Lgeptoindexphi3=Lgeptoindexphi3+1|0;
				Lgeptoindexphi=Lgeptoindexphi-1|0;
				if((0+Lgeptoindexphi3|0)<(L$ppre$pi.o+Lgeptoindexphi|0))continue;
				break;
			}
		}
		tmp16=tmp3.a2;
		Lgeptoindexphi=tmp16[0]|0;
		Lgeptoindexphi3=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
		if((L$ppre$pi.o+ -1|0)>0){
			tmp19=(0+(tmp3.i1|0)|0);
			Lgeptoindexphi12=0;
			Lgeptoindexphi7=0;
			while(1){
				if(Lgeptoindexphi3)if((tmp5[Lgeptoindexphi7]|0)!==(Lgeptoindexphi<<24>>24|0)){
					Larg5[Marg5]=4;
					break a;
				}
				if((tmp19-(0+Lgeptoindexphi12|0)|0)>1){
					Lgeptoindexphi12=Lgeptoindexphi12+1|0;
					Lgeptoindexphi=tmp16[Lgeptoindexphi12]|0;
				}
				Lgeptoindexphi7=Lgeptoindexphi7+1|0;
				Lgeptoindexphi3=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
				if((0+Lgeptoindexphi7|0)<(L$ppre$pi.o+ -1|0))continue;
				break;
			}
		}
		if(Lgeptoindexphi3)if((L$ppre$pi.d[L$ppre$pi.o+ -1|0]|0)-1>>>0>=Lgeptoindexphi<<24>>24>>>0)Larg5[Marg5]=4;
	}
	if(L$pidx$pval){
		L$psroa$p0$p0$pcopyload=null;
	}else{
		L$ppre$pio=L$psroa$p0$p0$pcopyload.a3o;
		L$ppre$pi=L$psroa$p0$p0$pcopyload.a3;
		tmp16=L$psroa$p0$p0$pcopyload.a4;
		if(L$ppre$pi===tmp16&&L$ppre$pio===0){
			L$pidx$pval=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
			L$psroa$p0$p0$pcopyload=((L$pidx$pval|0)===-1?null:L$psroa$p0$p0$pcopyload);
			L$pidx1$pval=((L$pidx$pval|0)===-1?null:L$pidx1$pval);
		}
	}
	L$pidx$pval=L$psroa$p0$p0$pcopyload===null?1:0;
	a:{
		b:{
			c:if(L$psroa$p03$p0$pcopyload!==null){
				L$psroa$p0$p0$pcopyloado=L$psroa$p03$p0$pcopyload.a3o;
				L$psroa$p0$p0$pcopyload=L$psroa$p03$p0$pcopyload.a3;
				L$ppre$pi=L$psroa$p03$p0$pcopyload.a4;
				if(L$psroa$p0$p0$pcopyload===L$ppre$pi&&L$psroa$p0$p0$pcopyloado===0)if((L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0|0)===-1)break c;
				if(L$pidx$pval)break a;
				break b;
			}
			if(!(L$pidx$pval))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=L$pidx1$pval;
}
function __ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjRt(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Marg6){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,tmp5=null,tmp6=null,tmp7=null,tmp8=null,L$psroa$p0$p0$pcopyload=null,L$psroa$p0$p0$pcopyloado=0,L$psroa$p03$p0$pcopyload=null,L$pidx$pval=0,L$pidx1$pval=null,Lgeptoindexphi3=0,L$ppre$pi=null,L$ppre$pio=0,Lgeptoindexphi7=0,tmp16=null,tmp16o=0,tmp17=null,Lgeptoindexphi=0,tmp19=0,Lgeptoindexphi12=0;
	L$psroa$p0$p0$pcopyload=Larg2.a0;
	L$psroa$p03$p0$pcopyload=Larg3.a0;
	L$pidx$pval=Larg4.i1|0;
	L$pidx1$pval=Larg4.a7.a0;
	tmp0=new Int32Array(2);
	tmp1=[nullObj];
	tmp2=new Uint8Array(26);
	tmp3={i0:0,i1:0,a2:nullArray};
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp5=new Int32Array(40);
	tmp6=[nullObj];
	tmp7=[0];
	switch(L$pidx$pval&74&127){
		case 64:
		Lgeptoindexphi3=8;
		break;
		case 8:
		Lgeptoindexphi3=16;
		break;
		case 0:
		Lgeptoindexphi3=0;
		break;
		default:
		Lgeptoindexphi3=10;
	}
	tmp8=[0];
	__ZNSt9__num_getIcE17__stage2_int_prepERSt8ios_basePcRc(tmp3,L$pidx1$pval,tmp2,0,tmp8,0);
	tmp4.i0=0;
	tmp4.i1=0;
	tmp4.a2=nullArray;
	__ZNSs6appendEjc(tmp4,1);
	L$ppre$pi=tmp4.a2;
	tmp1[0]={d:L$ppre$pi,o:0};
	tmp6[0]={d:tmp5,o:0};
	tmp7[0]=0;
	Lgeptoindexphi7=tmp8[0]|0;
	L$pidx1$pval=L$psroa$p0$p0$pcopyload;
	while(1){
		if(L$psroa$p0$p0$pcopyload!==null){
			tmp16o=L$psroa$p0$p0$pcopyload.a3o;
			tmp16=L$psroa$p0$p0$pcopyload.a3;
			tmp17=L$psroa$p0$p0$pcopyload.a4;
			if(tmp16===tmp17&&tmp16o===0){
				L$pidx$pval=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
				L$psroa$p0$p0$pcopyload=((L$pidx$pval|0)===-1?null:L$psroa$p0$p0$pcopyload);
				L$pidx1$pval=((L$pidx$pval|0)===-1?null:L$pidx1$pval);
			}
		}else{
			L$psroa$p0$p0$pcopyload=null;
		}
		L$pidx$pval=L$psroa$p0$p0$pcopyload===null?1:0;
		a:{
			b:if(L$psroa$p03$p0$pcopyload!==null){
				tmp16o=L$psroa$p03$p0$pcopyload.a3o;
				tmp16=L$psroa$p03$p0$pcopyload.a3;
				tmp17=L$psroa$p03$p0$pcopyload.a4;
				if(tmp16===tmp17&&tmp16o===0)if((L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0|0)===-1)break b;
				if(L$pidx$pval)break a;
				L$pidx$pval=0;
				break;
			}
			if(L$pidx$pval){
				L$psroa$p03$p0$pcopyload=null;
				L$pidx$pval=1;
				L$psroa$p0$p0$pcopyload=null;
				break;
			}
			L$psroa$p03$p0$pcopyload=null;
		}
		tmp16=tmp1[0];
		Lgeptoindexphi=tmp4.i1|0;
		if(tmp16.d===L$ppre$pi&&tmp16.o===(0+Lgeptoindexphi|0)){
			Lgeptoindexphi12=Lgeptoindexphi<<1;
			if(Lgeptoindexphi12>>>0<Lgeptoindexphi>>>0){
				L$ppre$pi[Lgeptoindexphi12]=0;
				tmp4.i1=Lgeptoindexphi12;
			}else __ZNSs6appendEjc(tmp4,Lgeptoindexphi);
			Lgeptoindexphi12=tmp4.i0|0;
			if(Lgeptoindexphi12>>>0<2){
				Lgeptoindexphi12=0;
			}else{
				Lgeptoindexphi12=(Lgeptoindexphi12& -2)-1|0;
			}
			tmp19=tmp4.i1|0;
			if(Lgeptoindexphi12>>>0<tmp19>>>0){
				L$ppre$pi=tmp4.a2;
				L$ppre$pi[Lgeptoindexphi12]=0;
				tmp4.i1=Lgeptoindexphi12;
			}else{
				__ZNSs6appendEjc(tmp4,Lgeptoindexphi12-tmp19|0);
				L$ppre$pi=tmp4.a2;
			}
			tmp1[0]={d:L$ppre$pi,o:0+Lgeptoindexphi|0};
		}
		tmp16o=L$psroa$p0$p0$pcopyload.a3o;
		tmp16=L$psroa$p0$p0$pcopyload.a3;
		tmp17=L$psroa$p0$p0$pcopyload.a4;
		if(tmp16===tmp17&&tmp16o===0){
			Lgeptoindexphi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			Lgeptoindexphi=tmp16[tmp16o]|0;
			Lgeptoindexphi=Lgeptoindexphi&255;
		}
		if((__ZNSt9__num_getIcE17__stage2_int_loopEciPcRS1_RjcRKSsPjRS6_S1_(Lgeptoindexphi,Lgeptoindexphi3,L$ppre$pi,0,tmp1,0,tmp7,0,Lgeptoindexphi7,tmp3,tmp5,0,tmp6,0,tmp2)|0|0)===0){
			tmp16o=L$psroa$p0$p0$pcopyload.a3o;
			tmp16=L$psroa$p0$p0$pcopyload.a3;
			tmp17=L$psroa$p0$p0$pcopyload.a4;
			if(tmp16===tmp17&&tmp16o===0)L$psroa$p0$p0$pcopyload.a0.a11(L$psroa$p0$p0$pcopyload)|0;
			else{
				L$psroa$p0$p0$pcopyload.a3=tmp16;
				L$psroa$p0$p0$pcopyload.a3o=tmp16o+1|0;
			}
			continue;
		}
		break;
	}
	if((tmp3.i1|0)!==0){
		tmp16=tmp6[0];
		if((((tmp16.o)*4)-((0)*4)|0)<160){
			Lgeptoindexphi=tmp7[0]|0;
			tmp6[0]={d:tmp16.d,o:tmp16.o+1|0};
			tmp16.d[tmp16.o]=Lgeptoindexphi;
		}
	}
	tmp16=tmp1[0];
	if(L$ppre$pi===tmp16.d&&0===tmp16.o){
		Larg5[Marg5]=4;
		tmp19=0;
	}else if((L$ppre$pi[0]&255)===45){
		Larg5[Marg5]=4;
		tmp19=0;
	}else{
		Lgeptoindexphi=_impure_data.i0|0;
		_impure_data.i0=0;
		__strtoull_r(tmp0,0,_impure_data,L$ppre$pi,0,tmp1,0,Lgeptoindexphi3);
		Lgeptoindexphi3=tmp0[1]|0;
		tmp19=tmp0[0]|0;
		Lgeptoindexphi7=_impure_data.i0|0;
		if((Lgeptoindexphi7|0)===0)_impure_data.i0=Lgeptoindexphi;
		L$ppre$pi=tmp1[0];
		a:if(L$ppre$pi.d===tmp16.d&&L$ppre$pi.o===tmp16.o){
			if((Lgeptoindexphi7|0)!==34)if((Lgeptoindexphi3|0)===0)if(tmp19>>>0<=65535)break a;
			Larg5[Marg5]=4;
			tmp19=65535;
		}else{
			Larg5[Marg5]=4;
			tmp19=0;
		}
	}
	Larg6[Marg6]=tmp19;
	L$ppre$pi=tmp6[0];
	a:if((tmp3.i1|0)!==0){
		if(tmp5!==L$ppre$pi.d||0!==L$ppre$pi.o)if((L$ppre$pi.o+ -1|0)>0){
			Lgeptoindexphi3=0;
			Lgeptoindexphi=-1;
			while(1){
				tmp19=tmp5[Lgeptoindexphi3]|0;
				tmp5[Lgeptoindexphi3]=L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]|0;
				L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]=tmp19;
				Lgeptoindexphi3=Lgeptoindexphi3+1|0;
				Lgeptoindexphi=Lgeptoindexphi-1|0;
				if((0+Lgeptoindexphi3|0)<(L$ppre$pi.o+Lgeptoindexphi|0))continue;
				break;
			}
		}
		tmp16=tmp3.a2;
		Lgeptoindexphi=tmp16[0]|0;
		Lgeptoindexphi3=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
		if((L$ppre$pi.o+ -1|0)>0){
			tmp19=(0+(tmp3.i1|0)|0);
			Lgeptoindexphi12=0;
			Lgeptoindexphi7=0;
			while(1){
				if(Lgeptoindexphi3)if((tmp5[Lgeptoindexphi7]|0)!==(Lgeptoindexphi<<24>>24|0)){
					Larg5[Marg5]=4;
					break a;
				}
				if((tmp19-(0+Lgeptoindexphi12|0)|0)>1){
					Lgeptoindexphi12=Lgeptoindexphi12+1|0;
					Lgeptoindexphi=tmp16[Lgeptoindexphi12]|0;
				}
				Lgeptoindexphi7=Lgeptoindexphi7+1|0;
				Lgeptoindexphi3=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
				if((0+Lgeptoindexphi7|0)<(L$ppre$pi.o+ -1|0))continue;
				break;
			}
		}
		if(Lgeptoindexphi3)if((L$ppre$pi.d[L$ppre$pi.o+ -1|0]|0)-1>>>0>=Lgeptoindexphi<<24>>24>>>0)Larg5[Marg5]=4;
	}
	if(L$pidx$pval){
		L$psroa$p0$p0$pcopyload=null;
	}else{
		L$ppre$pio=L$psroa$p0$p0$pcopyload.a3o;
		L$ppre$pi=L$psroa$p0$p0$pcopyload.a3;
		tmp16=L$psroa$p0$p0$pcopyload.a4;
		if(L$ppre$pi===tmp16&&L$ppre$pio===0){
			L$pidx$pval=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
			L$psroa$p0$p0$pcopyload=((L$pidx$pval|0)===-1?null:L$psroa$p0$p0$pcopyload);
			L$pidx1$pval=((L$pidx$pval|0)===-1?null:L$pidx1$pval);
		}
	}
	L$pidx$pval=L$psroa$p0$p0$pcopyload===null?1:0;
	a:{
		b:{
			c:if(L$psroa$p03$p0$pcopyload!==null){
				L$psroa$p0$p0$pcopyloado=L$psroa$p03$p0$pcopyload.a3o;
				L$psroa$p0$p0$pcopyload=L$psroa$p03$p0$pcopyload.a3;
				L$ppre$pi=L$psroa$p03$p0$pcopyload.a4;
				if(L$psroa$p0$p0$pcopyload===L$ppre$pi&&L$psroa$p0$p0$pcopyloado===0)if((L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0|0)===-1)break c;
				if(L$pidx$pval)break a;
				break b;
			}
			if(!(L$pidx$pval))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=L$pidx1$pval;
}
function __ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjRx(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Marg6){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,tmp5=null,tmp6=null,tmp7=null,tmp8=null,L$psroa$p0$p0$pcopyload=null,L$psroa$p0$p0$pcopyloado=0,L$psroa$p03$p0$pcopyload=null,L$pidx$pval=0,L$pidx1$pval=null,L$psroa$p6$p0$pi=0,L$ppre$pi=null,L$ppre$pio=0,Lgeptoindexphi7=0,tmp16=null,tmp16o=0,tmp17=null,Lgeptoindexphi=0,L$psroa$p0$p0$pi=0,Lgeptoindexphi12=0;
	L$psroa$p0$p0$pcopyload=Larg2.a0;
	L$psroa$p03$p0$pcopyload=Larg3.a0;
	L$pidx$pval=Larg4.i1|0;
	L$pidx1$pval=Larg4.a7.a0;
	tmp0=new Int32Array(2);
	tmp1=[nullObj];
	tmp2=new Uint8Array(26);
	tmp3={i0:0,i1:0,a2:nullArray};
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp5=new Int32Array(40);
	tmp6=[nullObj];
	tmp7=[0];
	switch(L$pidx$pval&74&127){
		case 64:
		L$psroa$p6$p0$pi=8;
		break;
		case 8:
		L$psroa$p6$p0$pi=16;
		break;
		case 0:
		L$psroa$p6$p0$pi=0;
		break;
		default:
		L$psroa$p6$p0$pi=10;
	}
	tmp8=[0];
	__ZNSt9__num_getIcE17__stage2_int_prepERSt8ios_basePcRc(tmp3,L$pidx1$pval,tmp2,0,tmp8,0);
	tmp4.i0=0;
	tmp4.i1=0;
	tmp4.a2=nullArray;
	__ZNSs6appendEjc(tmp4,1);
	L$ppre$pi=tmp4.a2;
	tmp1[0]={d:L$ppre$pi,o:0};
	tmp6[0]={d:tmp5,o:0};
	tmp7[0]=0;
	Lgeptoindexphi7=tmp8[0]|0;
	L$pidx1$pval=L$psroa$p0$p0$pcopyload;
	while(1){
		if(L$psroa$p0$p0$pcopyload!==null){
			tmp16o=L$psroa$p0$p0$pcopyload.a3o;
			tmp16=L$psroa$p0$p0$pcopyload.a3;
			tmp17=L$psroa$p0$p0$pcopyload.a4;
			if(tmp16===tmp17&&tmp16o===0){
				L$pidx$pval=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
				L$psroa$p0$p0$pcopyload=((L$pidx$pval|0)===-1?null:L$psroa$p0$p0$pcopyload);
				L$pidx1$pval=((L$pidx$pval|0)===-1?null:L$pidx1$pval);
			}
		}else{
			L$psroa$p0$p0$pcopyload=null;
		}
		L$pidx$pval=L$psroa$p0$p0$pcopyload===null?1:0;
		a:{
			b:if(L$psroa$p03$p0$pcopyload!==null){
				tmp16o=L$psroa$p03$p0$pcopyload.a3o;
				tmp16=L$psroa$p03$p0$pcopyload.a3;
				tmp17=L$psroa$p03$p0$pcopyload.a4;
				if(tmp16===tmp17&&tmp16o===0)if((L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0|0)===-1)break b;
				if(L$pidx$pval)break a;
				L$pidx$pval=0;
				break;
			}
			if(L$pidx$pval){
				L$psroa$p03$p0$pcopyload=null;
				L$pidx$pval=1;
				L$psroa$p0$p0$pcopyload=null;
				break;
			}
			L$psroa$p03$p0$pcopyload=null;
		}
		tmp16=tmp1[0];
		Lgeptoindexphi=tmp4.i1|0;
		if(tmp16.d===L$ppre$pi&&tmp16.o===(0+Lgeptoindexphi|0)){
			Lgeptoindexphi12=Lgeptoindexphi<<1;
			if(Lgeptoindexphi12>>>0<Lgeptoindexphi>>>0){
				L$ppre$pi[Lgeptoindexphi12]=0;
				tmp4.i1=Lgeptoindexphi12;
			}else __ZNSs6appendEjc(tmp4,Lgeptoindexphi);
			Lgeptoindexphi12=tmp4.i0|0;
			if(Lgeptoindexphi12>>>0<2){
				Lgeptoindexphi12=0;
			}else{
				Lgeptoindexphi12=(Lgeptoindexphi12& -2)-1|0;
			}
			L$psroa$p0$p0$pi=tmp4.i1|0;
			if(Lgeptoindexphi12>>>0<L$psroa$p0$p0$pi>>>0){
				L$ppre$pi=tmp4.a2;
				L$ppre$pi[Lgeptoindexphi12]=0;
				tmp4.i1=Lgeptoindexphi12;
			}else{
				__ZNSs6appendEjc(tmp4,Lgeptoindexphi12-L$psroa$p0$p0$pi|0);
				L$ppre$pi=tmp4.a2;
			}
			tmp1[0]={d:L$ppre$pi,o:0+Lgeptoindexphi|0};
		}
		tmp16o=L$psroa$p0$p0$pcopyload.a3o;
		tmp16=L$psroa$p0$p0$pcopyload.a3;
		tmp17=L$psroa$p0$p0$pcopyload.a4;
		if(tmp16===tmp17&&tmp16o===0){
			Lgeptoindexphi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			Lgeptoindexphi=tmp16[tmp16o]|0;
			Lgeptoindexphi=Lgeptoindexphi&255;
		}
		if((__ZNSt9__num_getIcE17__stage2_int_loopEciPcRS1_RjcRKSsPjRS6_S1_(Lgeptoindexphi,L$psroa$p6$p0$pi,L$ppre$pi,0,tmp1,0,tmp7,0,Lgeptoindexphi7,tmp3,tmp5,0,tmp6,0,tmp2)|0|0)===0){
			tmp16o=L$psroa$p0$p0$pcopyload.a3o;
			tmp16=L$psroa$p0$p0$pcopyload.a3;
			tmp17=L$psroa$p0$p0$pcopyload.a4;
			if(tmp16===tmp17&&tmp16o===0)L$psroa$p0$p0$pcopyload.a0.a11(L$psroa$p0$p0$pcopyload)|0;
			else{
				L$psroa$p0$p0$pcopyload.a3=tmp16;
				L$psroa$p0$p0$pcopyload.a3o=tmp16o+1|0;
			}
			continue;
		}
		break;
	}
	if((tmp3.i1|0)!==0){
		tmp16=tmp6[0];
		if((((tmp16.o)*4)-((0)*4)|0)<160){
			Lgeptoindexphi=tmp7[0]|0;
			tmp6[0]={d:tmp16.d,o:tmp16.o+1|0};
			tmp16.d[tmp16.o]=Lgeptoindexphi;
		}
	}
	tmp16=tmp1[0];
	if(L$ppre$pi===tmp16.d&&0===tmp16.o){
		Larg5[Marg5]=4;
		L$psroa$p0$p0$pi=0;
		L$psroa$p6$p0$pi=0;
	}else{
		Lgeptoindexphi=_impure_data.i0|0;
		_impure_data.i0=0;
		__strtoll_r(tmp0,0,_impure_data,L$ppre$pi,0,tmp1,0,L$psroa$p6$p0$pi);
		L$psroa$p6$p0$pi=tmp0[1]|0;
		L$psroa$p0$p0$pi=tmp0[0]|0;
		Lgeptoindexphi7=_impure_data.i0|0;
		if((Lgeptoindexphi7|0)===0)_impure_data.i0=Lgeptoindexphi;
		L$ppre$pi=tmp1[0];
		if(L$ppre$pi.d===tmp16.d&&L$ppre$pi.o===tmp16.o){
			if((Lgeptoindexphi7|0)===34){
				Larg5[Marg5]=4;
				Lgeptoindexphi=(L$psroa$p6$p0$pi|0)>0||(L$psroa$p6$p0$pi|0)===0&&(L$psroa$p0$p0$pi|0)!==0?1:0;
				L$psroa$p6$p0$pi=Lgeptoindexphi?2147483647|0: -2147483648|0;
				L$psroa$p0$p0$pi=Lgeptoindexphi<<31>>31;
			}
		}else{
			Larg5[Marg5]=4;
			L$psroa$p0$p0$pi=0;
			L$psroa$p6$p0$pi=0;
		}
	}
	Larg6[Marg6+1|0]=L$psroa$p6$p0$pi;
	Larg6[Marg6]=L$psroa$p0$p0$pi;
	L$ppre$pi=tmp6[0];
	a:if((tmp3.i1|0)!==0){
		if(tmp5!==L$ppre$pi.d||0!==L$ppre$pi.o)if((L$ppre$pi.o+ -1|0)>0){
			L$psroa$p6$p0$pi=0;
			Lgeptoindexphi=-1;
			while(1){
				L$psroa$p0$p0$pi=tmp5[L$psroa$p6$p0$pi]|0;
				tmp5[L$psroa$p6$p0$pi]=L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]|0;
				L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]=L$psroa$p0$p0$pi;
				L$psroa$p6$p0$pi=L$psroa$p6$p0$pi+1|0;
				Lgeptoindexphi=Lgeptoindexphi-1|0;
				if((0+L$psroa$p6$p0$pi|0)<(L$ppre$pi.o+Lgeptoindexphi|0))continue;
				break;
			}
		}
		tmp16=tmp3.a2;
		Lgeptoindexphi=tmp16[0]|0;
		L$psroa$p6$p0$pi=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
		if((L$ppre$pi.o+ -1|0)>0){
			L$psroa$p0$p0$pi=(0+(tmp3.i1|0)|0);
			Lgeptoindexphi12=0;
			Lgeptoindexphi7=0;
			while(1){
				if(L$psroa$p6$p0$pi)if((tmp5[Lgeptoindexphi7]|0)!==(Lgeptoindexphi<<24>>24|0)){
					Larg5[Marg5]=4;
					break a;
				}
				if((L$psroa$p0$p0$pi-(0+Lgeptoindexphi12|0)|0)>1){
					Lgeptoindexphi12=Lgeptoindexphi12+1|0;
					Lgeptoindexphi=tmp16[Lgeptoindexphi12]|0;
				}
				Lgeptoindexphi7=Lgeptoindexphi7+1|0;
				L$psroa$p6$p0$pi=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
				if((0+Lgeptoindexphi7|0)<(L$ppre$pi.o+ -1|0))continue;
				break;
			}
		}
		if(L$psroa$p6$p0$pi)if((L$ppre$pi.d[L$ppre$pi.o+ -1|0]|0)-1>>>0>=Lgeptoindexphi<<24>>24>>>0)Larg5[Marg5]=4;
	}
	if(L$pidx$pval){
		L$psroa$p0$p0$pcopyload=null;
	}else{
		L$ppre$pio=L$psroa$p0$p0$pcopyload.a3o;
		L$ppre$pi=L$psroa$p0$p0$pcopyload.a3;
		tmp16=L$psroa$p0$p0$pcopyload.a4;
		if(L$ppre$pi===tmp16&&L$ppre$pio===0){
			L$pidx$pval=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
			L$psroa$p0$p0$pcopyload=((L$pidx$pval|0)===-1?null:L$psroa$p0$p0$pcopyload);
			L$pidx1$pval=((L$pidx$pval|0)===-1?null:L$pidx1$pval);
		}
	}
	L$pidx$pval=L$psroa$p0$p0$pcopyload===null?1:0;
	a:{
		b:{
			c:if(L$psroa$p03$p0$pcopyload!==null){
				L$psroa$p0$p0$pcopyloado=L$psroa$p03$p0$pcopyload.a3o;
				L$psroa$p0$p0$pcopyload=L$psroa$p03$p0$pcopyload.a3;
				L$ppre$pi=L$psroa$p03$p0$pcopyload.a4;
				if(L$psroa$p0$p0$pcopyload===L$ppre$pi&&L$psroa$p0$p0$pcopyloado===0)if((L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0|0)===-1)break c;
				if(L$pidx$pval)break a;
				break b;
			}
			if(!(L$pidx$pval))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=L$pidx1$pval;
}
function __ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjRl(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Marg6){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,tmp5=null,tmp6=null,tmp7=null,tmp8=null,L$psroa$p0$p0$pcopyload=null,L$psroa$p0$p0$pcopyloado=0,L$psroa$p03$p0$pcopyload=null,L$pidx$pval=0,L$pidx1$pval=null,Lgeptoindexphi5=0,L$ppre$pi=null,L$ppre$pio=0,Lgeptoindexphi9=0,tmp16=null,tmp16o=0,tmp17=null,Lgeptoindexphi=0,tmp19=0,Lgeptoindexphi14=0;
	L$psroa$p0$p0$pcopyload=Larg2.a0;
	L$psroa$p03$p0$pcopyload=Larg3.a0;
	L$pidx$pval=Larg4.i1|0;
	L$pidx1$pval=Larg4.a7.a0;
	tmp0=new Int32Array(2);
	tmp1=[nullObj];
	tmp2=new Uint8Array(26);
	tmp3={i0:0,i1:0,a2:nullArray};
	tmp4={i0:0,i1:0,a2:nullArray};
	tmp5=new Int32Array(40);
	tmp6=[nullObj];
	tmp7=[0];
	switch(L$pidx$pval&74&127){
		case 64:
		Lgeptoindexphi5=8;
		break;
		case 8:
		Lgeptoindexphi5=16;
		break;
		case 0:
		Lgeptoindexphi5=0;
		break;
		default:
		Lgeptoindexphi5=10;
	}
	tmp8=[0];
	__ZNSt9__num_getIcE17__stage2_int_prepERSt8ios_basePcRc(tmp3,L$pidx1$pval,tmp2,0,tmp8,0);
	tmp4.i0=0;
	tmp4.i1=0;
	tmp4.a2=nullArray;
	__ZNSs6appendEjc(tmp4,1);
	L$ppre$pi=tmp4.a2;
	tmp1[0]={d:L$ppre$pi,o:0};
	tmp6[0]={d:tmp5,o:0};
	tmp7[0]=0;
	Lgeptoindexphi9=tmp8[0]|0;
	L$pidx1$pval=L$psroa$p0$p0$pcopyload;
	while(1){
		if(L$psroa$p0$p0$pcopyload!==null){
			tmp16o=L$psroa$p0$p0$pcopyload.a3o;
			tmp16=L$psroa$p0$p0$pcopyload.a3;
			tmp17=L$psroa$p0$p0$pcopyload.a4;
			if(tmp16===tmp17&&tmp16o===0){
				L$pidx$pval=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
				L$psroa$p0$p0$pcopyload=((L$pidx$pval|0)===-1?null:L$psroa$p0$p0$pcopyload);
				L$pidx1$pval=((L$pidx$pval|0)===-1?null:L$pidx1$pval);
			}
		}else{
			L$psroa$p0$p0$pcopyload=null;
		}
		L$pidx$pval=L$psroa$p0$p0$pcopyload===null?1:0;
		a:{
			b:if(L$psroa$p03$p0$pcopyload!==null){
				tmp16o=L$psroa$p03$p0$pcopyload.a3o;
				tmp16=L$psroa$p03$p0$pcopyload.a3;
				tmp17=L$psroa$p03$p0$pcopyload.a4;
				if(tmp16===tmp17&&tmp16o===0)if((L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0|0)===-1)break b;
				if(L$pidx$pval)break a;
				L$pidx$pval=0;
				break;
			}
			if(L$pidx$pval){
				L$psroa$p03$p0$pcopyload=null;
				L$pidx$pval=1;
				L$psroa$p0$p0$pcopyload=null;
				break;
			}
			L$psroa$p03$p0$pcopyload=null;
		}
		tmp16=tmp1[0];
		Lgeptoindexphi=tmp4.i1|0;
		if(tmp16.d===L$ppre$pi&&tmp16.o===(0+Lgeptoindexphi|0)){
			Lgeptoindexphi14=Lgeptoindexphi<<1;
			if(Lgeptoindexphi14>>>0<Lgeptoindexphi>>>0){
				L$ppre$pi[Lgeptoindexphi14]=0;
				tmp4.i1=Lgeptoindexphi14;
			}else __ZNSs6appendEjc(tmp4,Lgeptoindexphi);
			Lgeptoindexphi14=tmp4.i0|0;
			if(Lgeptoindexphi14>>>0<2){
				Lgeptoindexphi14=0;
			}else{
				Lgeptoindexphi14=(Lgeptoindexphi14& -2)-1|0;
			}
			tmp19=tmp4.i1|0;
			if(Lgeptoindexphi14>>>0<tmp19>>>0){
				L$ppre$pi=tmp4.a2;
				L$ppre$pi[Lgeptoindexphi14]=0;
				tmp4.i1=Lgeptoindexphi14;
			}else{
				__ZNSs6appendEjc(tmp4,Lgeptoindexphi14-tmp19|0);
				L$ppre$pi=tmp4.a2;
			}
			tmp1[0]={d:L$ppre$pi,o:0+Lgeptoindexphi|0};
		}
		tmp16o=L$psroa$p0$p0$pcopyload.a3o;
		tmp16=L$psroa$p0$p0$pcopyload.a3;
		tmp17=L$psroa$p0$p0$pcopyload.a4;
		if(tmp16===tmp17&&tmp16o===0){
			Lgeptoindexphi=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
		}else{
			Lgeptoindexphi=tmp16[tmp16o]|0;
			Lgeptoindexphi=Lgeptoindexphi&255;
		}
		if((__ZNSt9__num_getIcE17__stage2_int_loopEciPcRS1_RjcRKSsPjRS6_S1_(Lgeptoindexphi,Lgeptoindexphi5,L$ppre$pi,0,tmp1,0,tmp7,0,Lgeptoindexphi9,tmp3,tmp5,0,tmp6,0,tmp2)|0|0)===0){
			tmp16o=L$psroa$p0$p0$pcopyload.a3o;
			tmp16=L$psroa$p0$p0$pcopyload.a3;
			tmp17=L$psroa$p0$p0$pcopyload.a4;
			if(tmp16===tmp17&&tmp16o===0)L$psroa$p0$p0$pcopyload.a0.a11(L$psroa$p0$p0$pcopyload)|0;
			else{
				L$psroa$p0$p0$pcopyload.a3=tmp16;
				L$psroa$p0$p0$pcopyload.a3o=tmp16o+1|0;
			}
			continue;
		}
		break;
	}
	if((tmp3.i1|0)!==0){
		tmp16=tmp6[0];
		if((((tmp16.o)*4)-((0)*4)|0)<160){
			Lgeptoindexphi=tmp7[0]|0;
			tmp6[0]={d:tmp16.d,o:tmp16.o+1|0};
			tmp16.d[tmp16.o]=Lgeptoindexphi;
		}
	}
	tmp16=tmp1[0];
	if(L$ppre$pi===tmp16.d&&0===tmp16.o){
		Larg5[Marg5]=4;
		tmp19=0;
	}else{
		Lgeptoindexphi=_impure_data.i0|0;
		_impure_data.i0=0;
		__strtoll_r(tmp0,0,_impure_data,L$ppre$pi,0,tmp1,0,Lgeptoindexphi5);
		Lgeptoindexphi5=tmp0[1]|0;
		tmp19=tmp0[0]|0;
		Lgeptoindexphi9=_impure_data.i0|0;
		if((Lgeptoindexphi9|0)===0)_impure_data.i0=Lgeptoindexphi;
		L$ppre$pi=tmp1[0];
		a:if(L$ppre$pi.d===tmp16.d&&L$ppre$pi.o===tmp16.o){
			b:if((Lgeptoindexphi9|0)!==34)if((Lgeptoindexphi5|0)>=-1){
				if((Lgeptoindexphi5|0)===-1)if((tmp19|0)>-1)break b;
				if((Lgeptoindexphi5|0)<=0){
					if((Lgeptoindexphi5|0)!==0)break a;
					if((tmp19|0)>=0)break a;
				}
			}
			Larg5[Marg5]=4;
			tmp19=(Lgeptoindexphi5|0)>0||(Lgeptoindexphi5|0)===0&&(tmp19|0)!==0?2147483647|0: -2147483648|0;
		}else{
			Larg5[Marg5]=4;
			tmp19=0;
		}
	}
	Larg6[Marg6]=tmp19;
	L$ppre$pi=tmp6[0];
	a:if((tmp3.i1|0)!==0){
		if(tmp5!==L$ppre$pi.d||0!==L$ppre$pi.o)if((L$ppre$pi.o+ -1|0)>0){
			Lgeptoindexphi5=0;
			Lgeptoindexphi=-1;
			while(1){
				tmp19=tmp5[Lgeptoindexphi5]|0;
				tmp5[Lgeptoindexphi5]=L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]|0;
				L$ppre$pi.d[L$ppre$pi.o+Lgeptoindexphi|0]=tmp19;
				Lgeptoindexphi5=Lgeptoindexphi5+1|0;
				Lgeptoindexphi=Lgeptoindexphi-1|0;
				if((0+Lgeptoindexphi5|0)<(L$ppre$pi.o+Lgeptoindexphi|0))continue;
				break;
			}
		}
		tmp16=tmp3.a2;
		Lgeptoindexphi=tmp16[0]|0;
		Lgeptoindexphi5=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
		if((L$ppre$pi.o+ -1|0)>0){
			tmp19=(0+(tmp3.i1|0)|0);
			Lgeptoindexphi14=0;
			Lgeptoindexphi9=0;
			while(1){
				if(Lgeptoindexphi5)if((tmp5[Lgeptoindexphi9]|0)!==(Lgeptoindexphi<<24>>24|0)){
					Larg5[Marg5]=4;
					break a;
				}
				if((tmp19-(0+Lgeptoindexphi14|0)|0)>1){
					Lgeptoindexphi14=Lgeptoindexphi14+1|0;
					Lgeptoindexphi=tmp16[Lgeptoindexphi14]|0;
				}
				Lgeptoindexphi9=Lgeptoindexphi9+1|0;
				Lgeptoindexphi5=Lgeptoindexphi<<24>0&&(Lgeptoindexphi&255)!==127?1:0;
				if((0+Lgeptoindexphi9|0)<(L$ppre$pi.o+ -1|0))continue;
				break;
			}
		}
		if(Lgeptoindexphi5)if((L$ppre$pi.d[L$ppre$pi.o+ -1|0]|0)-1>>>0>=Lgeptoindexphi<<24>>24>>>0)Larg5[Marg5]=4;
	}
	if(L$pidx$pval){
		L$psroa$p0$p0$pcopyload=null;
	}else{
		L$ppre$pio=L$psroa$p0$p0$pcopyload.a3o;
		L$ppre$pi=L$psroa$p0$p0$pcopyload.a3;
		tmp16=L$psroa$p0$p0$pcopyload.a4;
		if(L$ppre$pi===tmp16&&L$ppre$pio===0){
			L$pidx$pval=L$psroa$p0$p0$pcopyload.a0.a10(L$psroa$p0$p0$pcopyload)|0;
			L$psroa$p0$p0$pcopyload=((L$pidx$pval|0)===-1?null:L$psroa$p0$p0$pcopyload);
			L$pidx1$pval=((L$pidx$pval|0)===-1?null:L$pidx1$pval);
		}
	}
	L$pidx$pval=L$psroa$p0$p0$pcopyload===null?1:0;
	a:{
		b:{
			c:if(L$psroa$p03$p0$pcopyload!==null){
				L$psroa$p0$p0$pcopyloado=L$psroa$p03$p0$pcopyload.a3o;
				L$psroa$p0$p0$pcopyload=L$psroa$p03$p0$pcopyload.a3;
				L$ppre$pi=L$psroa$p03$p0$pcopyload.a4;
				if(L$psroa$p0$p0$pcopyload===L$ppre$pi&&L$psroa$p0$p0$pcopyloado===0)if((L$psroa$p03$p0$pcopyload.a0.a10(L$psroa$p03$p0$pcopyload)|0|0)===-1)break c;
				if(L$pidx$pval)break a;
				break b;
			}
			if(!(L$pidx$pval))break a;
		}
		Larg5[Marg5]=Larg5[Marg5]|2;
	}
	Larg0.a0=L$pidx1$pval;
}
function __ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjRb(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5,Larg6,Marg6){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=null,tmp4=0,tmp5=0,tmp6=null,tmp7=null,tmp7o=0;
	tmp0={a0:null};
	if((Larg4.i1&1|0)!==0){
		tmp3=Larg4.a7.a0;
		tmp4=tmp3.i1|0;
		tmp1=tmp4+1|0;
		tmp3.i1=tmp1;
		if((__ZNSt5ctypeIcE2idE.i0&255)!==0){
			tmp5=__ZNSt5ctypeIcE2idE.i1|0;
		}else{
			tmp5=(__ZNSt6locale2id9__next_idE|0)+1|0;
			__ZNSt6locale2id9__next_idE=tmp5;
			__ZNSt5ctypeIcE2idE.i1=tmp5;
			__ZNSt5ctypeIcE2idE.i0=1;
		}
		tmp6=tmp3.a2.a0;
		tmp6=tmp6[tmp5-1|0];
		tmp3.i1=tmp4;
		if((tmp1|0)===0)tmp3.a0.a3(tmp3);
		tmp3=Larg4.a7.a0;
		tmp4=tmp3.i1|0;
		tmp7=tmp3.a2.a0;
		tmp7=tmp7[(__ZNSt8numpunctIcE2idE$p1|0)-1|0];
		tmp3.i1=tmp4;
		if((tmp4|0)===-1)tmp3.a0.a3(tmp3);
		tmp3=[{i0:0,i1:0,a2:nullArray},{i0:0,i1:0,a2:nullArray}];
		tmp7.a0.a7(tmp3[0],tmp7);
		tmp7.a0.a8(tmp3[1],tmp7);
		tmp0.a0=Larg3.a0;
		tmp7=__ZSt14__scan_keywordISt19istreambuf_iteratorIcSt11char_traitsIcEEPKSsSt5ctypeIcEET0_RT_S9_S8_S8_RKT1_Rjb(Larg2,tmp0,tmp3,0,tmp3,2,tmp6,Larg5,Marg5,1);
		tmp7o=oSlot;
		Larg6[Marg6]=tmp7===tmp3&&tmp7o===0?1:0;
		Larg0.a0=Larg2.a0;
	}else{
		tmp6=[0];
		tmp6[0]=-1;
		tmp3=Larg1.a0.a5;
		tmp7={a0:null};
		tmp7.a0=Larg2.a0;
		tmp2={a0:null};
		tmp2.a0=Larg3.a0;
		tmp3(tmp0,Larg1,tmp7,tmp2,Larg4,Larg5,Marg5,tmp6,0);
		tmp3=tmp0.a0;
		Larg2.a0=tmp3;
		switch(tmp6[0]|0){
			case 0:
			Larg6[Marg6]=0;
			break;
			case 1:
			Larg6[Marg6]=1;
			break;
			default:
			Larg6[Marg6]=1;
			Larg5[Marg5]=4;
		}
		Larg0.a0=tmp3;
	}
}
function __ZNSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEED0Ev(Larg0){
}
function __ZNSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEED2Ev(Larg0){
}
function __ZNKSt8numpunctIwE12do_falsenameEv(Larg0,Larg1){
	var tmp0=null;
	tmp0=new Int32Array(8);
	Larg0.a2=tmp0;
	Larg0.i0=9;
	Larg0.i1=5;
	tmp0[0]=102;
	tmp0[1]=97;
	tmp0[2]=108;
	tmp0[3]=115;
	tmp0[4]=101;
	tmp0[5]=0;
}
function __ZNKSt8numpunctIwE11do_truenameEv(Larg0,Larg1){
	var tmp0=null;
	tmp0=new Int32Array(8);
	Larg0.a2=tmp0;
	Larg0.i0=9;
	Larg0.i1=4;
	tmp0[0]=116;
	tmp0[1]=114;
	tmp0[2]=117;
	tmp0[3]=101;
	tmp0[4]=0;
}
function __ZNKSt8numpunctIwE11do_groupingEv(Larg0,Larg1){
	var tmp0=null,tmp1=0,tmp2=null,Lgeptoindexphi=0,Lgeptoindexphi2=0;
	tmp2=Larg1.a4;
	tmp0=tmp2.a2;
	tmp1=tmp2.i1|0;
	Lgeptoindexphi=tmp1+16& -16;
	tmp2=new Uint8Array(Lgeptoindexphi/1|0);
	Larg0.a2=tmp2;
	Larg0.i0=Lgeptoindexphi|1;
	Larg0.i1=tmp1;
	if((tmp1|0)!==0){
		Lgeptoindexphi2=0;
		Lgeptoindexphi=0;
		while(1){
			tmp2[Lgeptoindexphi2]=tmp0[Lgeptoindexphi]|0;
			Lgeptoindexphi2=Lgeptoindexphi2+1|0;
			if(tmp2!==tmp2||(0+tmp1|0)!==(0+Lgeptoindexphi2|0)){
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				continue;
			}
			break;
		}
	}
	tmp2[tmp1]=0;
}
function __ZNKSt8numpunctIwE16do_thousands_sepEv(Larg0){
	return Larg0.i3|0;
}
function __ZNKSt8numpunctIwE16do_decimal_pointEv(Larg0){
	return Larg0.i2|0;
}
function __ZNSt8numpunctIwED0Ev(Larg0){
	Larg0.a0=__ZTVSt8numpunctIwE;
}
function __ZNSt8numpunctIwED2Ev(Larg0){
	Larg0.a0=__ZTVSt8numpunctIwE;
}
function __ZNKSt8numpunctIcE12do_falsenameEv(Larg0,Larg1){
	var tmp0=null;
	tmp0=new Uint8Array(16);
	Larg0.a2=tmp0;
	Larg0.i0=17;
	Larg0.i1=5;
	tmp0[0]=102;
	tmp0[1]=97;
	tmp0[2]=108;
	tmp0[3]=115;
	tmp0[4]=101;
	tmp0[5]=0;
}
function __ZNKSt8numpunctIcE11do_truenameEv(Larg0,Larg1){
	var tmp0=null;
	tmp0=new Uint8Array(16);
	Larg0.a2=tmp0;
	Larg0.i0=17;
	Larg0.i1=4;
	tmp0[0]=116;
	tmp0[1]=114;
	tmp0[2]=117;
	tmp0[3]=101;
	tmp0[4]=0;
}
function __ZNKSt8numpunctIcE11do_groupingEv(Larg0,Larg1){
	var tmp0=null,tmp1=0,tmp2=null,Lgeptoindexphi=0,Lgeptoindexphi2=0;
	tmp2=Larg1.a3;
	tmp0=tmp2.a2;
	tmp1=tmp2.i1|0;
	Lgeptoindexphi=tmp1+16& -16;
	tmp2=new Uint8Array(Lgeptoindexphi/1|0);
	Larg0.a2=tmp2;
	Larg0.i0=Lgeptoindexphi|1;
	Larg0.i1=tmp1;
	if((tmp1|0)!==0){
		Lgeptoindexphi2=0;
		Lgeptoindexphi=0;
		while(1){
			tmp2[Lgeptoindexphi2]=tmp0[Lgeptoindexphi]|0;
			Lgeptoindexphi2=Lgeptoindexphi2+1|0;
			if(tmp2!==tmp2||(0+tmp1|0)!==(0+Lgeptoindexphi2|0)){
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				continue;
			}
			break;
		}
	}
	tmp2[tmp1]=0;
}
function __ZNKSt8numpunctIcE16do_thousands_sepEv(Larg0){
	return (Larg0.i2&65535)>>>8|0;
}
function __ZNKSt8numpunctIcE16do_decimal_pointEv(Larg0){
	return Larg0.i2|0;
}
function __ZNSt8numpunctIcED0Ev(Larg0){
	Larg0.a0=__ZTVSt8numpunctIcE;
}
function __ZNSt8numpunctIcED2Ev(Larg0){
	Larg0.a0=__ZTVSt8numpunctIcE;
}
function __ZNKSt7codecvtIDic10_mbstate_tE13do_max_lengthEv(Larg0){
	return 4|0;
}
function __ZNKSt7codecvtIDic10_mbstate_tE9do_lengthERS0_PKcS4_j(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4){
	var tmp0=0,tmp1=0,tmp2=0,Lgeptoindexphi=0,tmp4=0,tmp5=0,tmp6=0,tmp7=0;
	a:if(Marg2<Marg3){
		if((Larg4|0)!==0){
			tmp0=(Marg3);
			Lgeptoindexphi=0;
			tmp2=0;
			while(1){
				tmp4=Larg2[Marg2+Lgeptoindexphi|0]|0;
				if(tmp4<<24>-16777216){
					tmp4=1;
				}else{
					if((tmp4&255)<194)break a;
					if((tmp4&255)<224){
						if((tmp0-(Marg2+Lgeptoindexphi|0)|0)<2)break a;
						if((Larg2[(Marg2+Lgeptoindexphi|0)+1|0]&192)!==128)break a;
						tmp4=2;
					}else if((tmp4&255)<240){
						tmp5=(Marg2+Lgeptoindexphi|0);
						if((tmp0-tmp5|0)<3)break a;
						tmp6=Larg2[(Marg2+Lgeptoindexphi|0)+1|0]|0;
						tmp7=Larg2[(Marg2+Lgeptoindexphi|0)+2|0]|0;
						switch(tmp4&255){
							case 224:
							if((tmp6&224)===160)break;
							return tmp5-(Marg2)|0;
							case 237:
							if((tmp6&224)===128)break;
							return tmp5-(Marg2)|0;
							default:
							if((tmp6&192)!==128)return tmp5-(Marg2)|0;
						}
						if((tmp7&192)!==128)break a;
						tmp4=3;
					}else{
						if((tmp4&255)>=245)break a;
						tmp5=(Marg2+Lgeptoindexphi|0);
						if((tmp0-tmp5|0)<4)break a;
						tmp6=Larg2[(Marg2+Lgeptoindexphi|0)+1|0]|0;
						tmp7=Larg2[(Marg2+Lgeptoindexphi|0)+2|0]|0;
						tmp1=Larg2[(Marg2+Lgeptoindexphi|0)+3|0]|0;
						switch(tmp4&255){
							case 240:
							if((tmp6+112&255)<48)break;
							return tmp5-(Marg2)|0;
							case 244:
							if((tmp6&240)===128)break;
							return tmp5-(Marg2)|0;
							default:
							if((tmp6&192)!==128)return tmp5-(Marg2)|0;
						}
						if((tmp7&192)!==128)break a;
						if((tmp1&192)!==128)break a;
						if(((tmp6&48)<<12|(tmp4&255)<<18&1835008)>>>0>1114111)break a;
						tmp4=4;
					}
				}
				Lgeptoindexphi=Lgeptoindexphi+tmp4|0;
				tmp2=tmp2+1|0;
				if(tmp2>>>0<Larg4>>>0)if((Marg2+Lgeptoindexphi|0)<Marg3)continue;
				break;
			}
		}else{
			Lgeptoindexphi=0;
		}
	}else{
		Lgeptoindexphi=0;
	}
	return (Marg2+Lgeptoindexphi|0)-(Marg2)|0;
}
function __ZNKSt7codecvtIDic10_mbstate_tE16do_always_noconvEv(Larg0){
	return 0|0;
}
function __ZNKSt7codecvtIDic10_mbstate_tE11do_encodingEv(Larg0){
	return 0|0;
}
function __ZNKSt7codecvtIDic10_mbstate_tE10do_unshiftERS0_PcS3_RS3_(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4){
	Larg4[Marg4]={d:Larg2,o:Marg2};
	return 3|0;
}
function __ZNKSt7codecvtIDic10_mbstate_tE5do_inERS0_PKcS4_RS4_PDiS6_RS6_(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4,Larg5,Marg5,Larg6,Marg6,Larg7,Marg7){
	var tmp0=0,tmp1=0,tmp2=0,Lgeptoindexphi=0,Lgeptoindexphi4=0,tmp5=0,tmp6=0,tmp7=0;
	tmp2=Marg2<Marg3?1:0;
	a:{
		if(tmp2){
			if(Marg5<Marg6){
				tmp0=(Marg3);
				Lgeptoindexphi4=0;
				Lgeptoindexphi=0;
				while(1){
					tmp2=Larg2[Marg2+Lgeptoindexphi|0]|0;
					tmp5=tmp2&255;
					if(tmp2<<24>-16777216){
						tmp2=1;
					}else{
						if((tmp2&255)<194){
							tmp2=2;
							break a;
						}
						if((tmp2&255)<224){
							if((tmp0-(Marg2+Lgeptoindexphi|0)|0)<2){
								tmp2=1;
								break a;
							}
							tmp2=Larg2[(Marg2+Lgeptoindexphi|0)+1|0]|0;
							if((tmp2&192|0)!==128){
								tmp2=2;
								break a;
							}
							tmp5=tmp2&63|tmp5<<6&1984;
							tmp2=2;
						}else if((tmp2&255)<240){
							if((tmp0-(Marg2+Lgeptoindexphi|0)|0)<3){
								tmp2=1;
								break a;
							}
							tmp6=Larg2[(Marg2+Lgeptoindexphi|0)+1|0]|0;
							tmp7=Larg2[(Marg2+Lgeptoindexphi|0)+2|0]|0;
							switch(tmp2&255){
								case 224:
								if((tmp6&224)===160)break;
								tmp2=2;
								break a;
								case 237:
								if((tmp6&224)===128)break;
								tmp2=2;
								break a;
								default:
								if((tmp6&192)!==128){
									tmp2=2;
									break a;
								}
							}
							tmp2=tmp7;
							if((tmp2&192|0)!==128){
								tmp2=2;
								break a;
							}
							tmp5=(tmp6&63)<<6|tmp5<<12&61440|tmp2&63;
							tmp2=3;
						}else{
							if((tmp2&255)>=245){
								tmp2=2;
								break a;
							}
							if((tmp0-(Marg2+Lgeptoindexphi|0)|0)<4){
								tmp2=1;
								break a;
							}
							tmp1=Larg2[(Marg2+Lgeptoindexphi|0)+1|0]|0;
							tmp7=Larg2[(Marg2+Lgeptoindexphi|0)+2|0]|0;
							tmp6=Larg2[(Marg2+Lgeptoindexphi|0)+3|0]|0;
							switch(tmp2&255){
								case 240:
								if((tmp1+112&255)<48)break;
								tmp2=2;
								break a;
								case 244:
								if((tmp1&240)===128)break;
								tmp2=2;
								break a;
								default:
								if((tmp1&192)!==128){
									tmp2=2;
									break a;
								}
							}
							tmp2=tmp7;
							if((tmp2&192|0)!==128){
								tmp2=2;
								break a;
							}
							tmp6=tmp6;
							if((tmp6&192|0)!==128){
								tmp2=2;
								break a;
							}
							tmp5=(tmp1&63)<<12|tmp5<<18&1835008|tmp2<<6&4032|tmp6&63;
							if(tmp5>>>0>1114111){
								tmp2=2;
								break a;
							}
							tmp2=4;
						}
					}
					Larg5[Marg5+Lgeptoindexphi4|0]=tmp5;
					Lgeptoindexphi=Lgeptoindexphi+tmp2|0;
					Lgeptoindexphi4=Lgeptoindexphi4+1|0;
					tmp2=(Marg2+Lgeptoindexphi|0)<Marg3?1:0;
					if(tmp2)if((Marg5+Lgeptoindexphi4|0)<Marg6)continue;
					break;
				}
			}else{
				Lgeptoindexphi4=0;
				Lgeptoindexphi=0;
			}
		}else{
			Lgeptoindexphi4=0;
			Lgeptoindexphi=0;
		}
		tmp2=tmp2?1:0;
	}
	Larg4[Marg4]={d:Larg2,o:Marg2+Lgeptoindexphi|0};
	Larg7[Marg7]={d:Larg5,o:Marg5+Lgeptoindexphi4|0};
	return tmp2|0;
}
function __ZNKSt7codecvtIDic10_mbstate_tE6do_outERS0_PKDiS4_RS4_PcS6_RS6_(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4,Larg5,Marg5,Larg6,Marg6,Larg7,Marg7){
	var tmp0=0,tmp1=0,tmp2=0,Lgeptoindexphi=0,Lgeptoindexphi4=0;
	a:if(Marg2<Marg3){
		tmp2=(Marg6);
		Lgeptoindexphi4=0;
		Lgeptoindexphi=0;
		while(1){
			tmp0=Larg2[Marg2+Lgeptoindexphi|0]|0;
			if(tmp0>>>0>1114111){
				tmp2=2;
			}else if((tmp0& -2048|0)===55296){
				tmp2=2;
			}else{
				if(tmp0>>>0<128){
					if((tmp2-(Marg5+Lgeptoindexphi4|0)|0)<1){
						tmp2=1;
						break a;
					}
					Larg5[Marg5+Lgeptoindexphi4|0]=tmp0;
					Lgeptoindexphi4=Lgeptoindexphi4+1|0;
				}else if(tmp0>>>0<2048){
					if((tmp2-(Marg5+Lgeptoindexphi4|0)|0)<2){
						tmp2=1;
						break a;
					}
					Larg5[Marg5+Lgeptoindexphi4|0]=tmp0>>>6|192;
					Larg5[(Marg5+Lgeptoindexphi4|0)+1|0]=tmp0&63|128;
					Lgeptoindexphi4=Lgeptoindexphi4+2|0;
				}else{
					tmp1=tmp2-(Marg5+Lgeptoindexphi4|0)|0;
					if(tmp0>>>0<65536){
						if((tmp1|0)<3){
							tmp2=1;
							break a;
						}
						Larg5[Marg5+Lgeptoindexphi4|0]=tmp0>>>12|224;
						Larg5[(Marg5+Lgeptoindexphi4|0)+1|0]=tmp0>>>6&63|128;
						Larg5[(Marg5+Lgeptoindexphi4|0)+2|0]=tmp0&63|128;
						Lgeptoindexphi4=Lgeptoindexphi4+3|0;
					}else{
						if((tmp1|0)<4){
							tmp2=1;
							break a;
						}
						Larg5[Marg5+Lgeptoindexphi4|0]=tmp0>>>18|240;
						Larg5[(Marg5+Lgeptoindexphi4|0)+1|0]=tmp0>>>12&63|128;
						Larg5[(Marg5+Lgeptoindexphi4|0)+2|0]=tmp0>>>6&63|128;
						Larg5[(Marg5+Lgeptoindexphi4|0)+3|0]=tmp0&63|128;
						Lgeptoindexphi4=Lgeptoindexphi4+4|0;
					}
				}
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				if((Marg2+Lgeptoindexphi|0)<Marg3)continue;
				tmp2=0;
			}
			break;
		}
	}else{
		tmp2=0;
		Lgeptoindexphi4=0;
		Lgeptoindexphi=0;
	}
	Larg4[Marg4]={d:Larg2,o:Marg2+Lgeptoindexphi|0};
	Larg7[Marg7]={d:Larg5,o:Marg5+Lgeptoindexphi4|0};
	return tmp2|0;
}
function __ZNSt7codecvtIDic10_mbstate_tED0Ev(Larg0){
}
function __ZNSt7codecvtIDic10_mbstate_tED2Ev(Larg0){
}
function __ZNKSt7codecvtIDsc10_mbstate_tE13do_max_lengthEv(Larg0){
	return 4|0;
}
function __ZNKSt7codecvtIDsc10_mbstate_tE9do_lengthERS0_PKcS4_j(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4){
	var tmp0=0,tmp1=0,tmp2=0,Lgeptoindexphi=0,tmp4=0,tmp5=0,tmp6=0,tmp7=0;
	a:if(Marg2<Marg3){
		if((Larg4|0)!==0){
			tmp0=(Marg3);
			Lgeptoindexphi=0;
			tmp2=0;
			while(1){
				tmp4=Larg2[Marg2+Lgeptoindexphi|0]|0;
				if(tmp4<<24>-16777216){
					tmp4=1;
				}else{
					if((tmp4&255)<194)break a;
					if((tmp4&255)<224){
						if((tmp0-(Marg2+Lgeptoindexphi|0)|0)<2)break a;
						if((Larg2[(Marg2+Lgeptoindexphi|0)+1|0]&192)!==128)break a;
						tmp4=2;
					}else if((tmp4&255)<240){
						tmp5=(Marg2+Lgeptoindexphi|0);
						if((tmp0-tmp5|0)<3)break a;
						tmp6=Larg2[(Marg2+Lgeptoindexphi|0)+1|0]|0;
						tmp7=Larg2[(Marg2+Lgeptoindexphi|0)+2|0]|0;
						switch(tmp4&255){
							case 224:
							if((tmp6&224)===160)break;
							return tmp5-(Marg2)|0;
							case 237:
							if((tmp6&224)===128)break;
							return tmp5-(Marg2)|0;
							default:
							if((tmp6&192)!==128)return tmp5-(Marg2)|0;
						}
						if((tmp7&192)!==128)break a;
						tmp4=3;
					}else{
						if((tmp4&255)>=245)break a;
						tmp1=(Marg2+Lgeptoindexphi|0);
						tmp5=(tmp0-tmp1|0)<4?1:0;
						if(Larg4-tmp2>>>0<2)break a;
						if(tmp5)break a;
						tmp5=Larg2[(Marg2+Lgeptoindexphi|0)+1|0]|0;
						tmp6=Larg2[(Marg2+Lgeptoindexphi|0)+2|0]|0;
						tmp7=Larg2[(Marg2+Lgeptoindexphi|0)+3|0]|0;
						switch(tmp4&255){
							case 240:
							if((tmp5+112&255)<48)break;
							return tmp1-(Marg2)|0;
							case 244:
							if((tmp5&240)===128)break;
							return tmp1-(Marg2)|0;
							default:
							if((tmp5&192)!==128)return tmp1-(Marg2)|0;
						}
						tmp6=tmp6;
						if((tmp6&192|0)!==128)break a;
						tmp7=tmp7;
						if((tmp7&192|0)!==128)break a;
						if(((((tmp5&63)<<12)+((tmp4&255)<<18&1835008)|0)+(tmp6<<6&4032)|0)+(tmp7&63)>>>0>1114111)break a;
						tmp2=tmp2+1|0;
						tmp4=4;
					}
				}
				Lgeptoindexphi=Lgeptoindexphi+tmp4|0;
				if((Marg2+Lgeptoindexphi|0)<Marg3){
					tmp2=tmp2+1|0;
					if(tmp2>>>0<Larg4>>>0)continue;
				}
				break;
			}
		}else{
			Lgeptoindexphi=0;
		}
	}else{
		Lgeptoindexphi=0;
	}
	return (Marg2+Lgeptoindexphi|0)-(Marg2)|0;
}
function __ZNKSt7codecvtIDsc10_mbstate_tE16do_always_noconvEv(Larg0){
	return 0|0;
}
function __ZNKSt7codecvtIDsc10_mbstate_tE11do_encodingEv(Larg0){
	return 0|0;
}
function __ZNKSt7codecvtIDsc10_mbstate_tE10do_unshiftERS0_PcS3_RS3_(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4){
	Larg4[Marg4]={d:Larg2,o:Marg2};
	return 3|0;
}
function __ZNKSt7codecvtIDsc10_mbstate_tE5do_inERS0_PKcS4_RS4_PDsS6_RS6_(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4,Larg5,Marg5,Larg6,Marg6,Larg7,Marg7){
	var tmp0=0,tmp1=0,tmp2=0,Lgeptoindexphi=0,Lgeptoindexphi5=0,L$psink=0,tmp6=0,tmp7=0,tmp8=0;
	tmp1=Marg2<Marg3?1:0;
	a:{
		if(tmp1){
			if(Marg5<Marg6){
				tmp2=((Marg6)*2);
				tmp0=(Marg3);
				Lgeptoindexphi5=0;
				Lgeptoindexphi=0;
				while(1){
					L$psink=Larg2[Marg2+Lgeptoindexphi|0]|0;
					if(L$psink<<24>-16777216){
						Larg5[Marg5+Lgeptoindexphi5|0]=L$psink&255;
						L$psink=1;
					}else{
						if((L$psink&255)<194){
							tmp2=2;
							break a;
						}
						tmp6=L$psink&255;
						if((L$psink&255)<224){
							if((tmp0-(Marg2+Lgeptoindexphi|0)|0)<2){
								tmp2=1;
								break a;
							}
							L$psink=Larg2[(Marg2+Lgeptoindexphi|0)+1|0]|0;
							if((L$psink&192|0)!==128){
								tmp2=2;
								break a;
							}
							Larg5[Marg5+Lgeptoindexphi5|0]=L$psink&63|tmp6<<6&1984;
							L$psink=2;
						}else if((L$psink&255)<240){
							if((tmp0-(Marg2+Lgeptoindexphi|0)|0)<3){
								tmp2=1;
								break a;
							}
							tmp1=Larg2[(Marg2+Lgeptoindexphi|0)+1|0]|0;
							tmp7=Larg2[(Marg2+Lgeptoindexphi|0)+2|0]|0;
							switch(L$psink&255){
								case 224:
								if((tmp1&224)===160)break;
								tmp2=2;
								break a;
								case 237:
								if((tmp1&224)===128)break;
								tmp2=2;
								break a;
								default:
								if((tmp1&192)!==128){
									tmp2=2;
									break a;
								}
							}
							L$psink=tmp7;
							if((L$psink&192|0)!==128){
								tmp2=2;
								break a;
							}
							Larg5[Marg5+Lgeptoindexphi5|0]=(tmp1&63)<<6|tmp6<<12|L$psink&63;
							L$psink=3;
						}else{
							if((L$psink&255)>=245){
								tmp2=2;
								break a;
							}
							if((tmp0-(Marg2+Lgeptoindexphi|0)|0)<4){
								tmp2=1;
								break a;
							}
							tmp1=Larg2[(Marg2+Lgeptoindexphi|0)+1|0]|0;
							tmp7=Larg2[(Marg2+Lgeptoindexphi|0)+2|0]|0;
							tmp8=Larg2[(Marg2+Lgeptoindexphi|0)+3|0]|0;
							switch(L$psink&255){
								case 240:
								if((tmp1+112&255)<48)break;
								tmp2=2;
								break a;
								case 244:
								if((tmp1&240)===128)break;
								tmp2=2;
								break a;
								default:
								if((tmp1&192)!==128){
									tmp2=2;
									break a;
								}
							}
							tmp7=tmp7;
							if((tmp7&192|0)!==128){
								tmp2=2;
								break a;
							}
							L$psink=tmp8;
							if((L$psink&192|0)!==128){
								tmp2=2;
								break a;
							}
							if((tmp2-((Marg5+Lgeptoindexphi5|0)*2)|0)<4){
								tmp2=1;
								break a;
							}
							tmp8=tmp1;
							tmp6&=7;
							tmp1=tmp7<<6;
							L$psink&=63;
							if((((tmp8<<12&258048)+(tmp6<<18)|0)+(tmp1&4032)|0)+L$psink>>>0>1114111){
								tmp2=2;
								break a;
							}
							Larg5[Marg5+Lgeptoindexphi5|0]=tmp7>>>4&3|tmp8<<2&60|((tmp8>>>4&3|tmp6<<2)<<6)+16320|55296;
							Lgeptoindexphi5=Lgeptoindexphi5+1|0;
							Larg5[Marg5+Lgeptoindexphi5|0]=L$psink|tmp1&960|56320;
							L$psink=4;
						}
					}
					Lgeptoindexphi=Lgeptoindexphi+L$psink|0;
					Lgeptoindexphi5=Lgeptoindexphi5+1|0;
					tmp1=(Marg2+Lgeptoindexphi|0)<Marg3?1:0;
					if(tmp1)if((Marg5+Lgeptoindexphi5|0)<Marg6)continue;
					break;
				}
			}else{
				Lgeptoindexphi5=0;
				Lgeptoindexphi=0;
			}
		}else{
			Lgeptoindexphi5=0;
			Lgeptoindexphi=0;
		}
		tmp2=tmp1?1:0;
	}
	Larg4[Marg4]={d:Larg2,o:Marg2+Lgeptoindexphi|0};
	Larg7[Marg7]={d:Larg5,o:Marg5+Lgeptoindexphi5|0};
	return tmp2|0;
}
function __ZNKSt7codecvtIDsc10_mbstate_tE6do_outERS0_PKDsS4_RS4_PcS6_RS6_(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4,Larg5,Marg5,Larg6,Marg6,Larg7,Marg7){
	var tmp0=0,Lgeptoindex4=0,tmp2=0,tmp3=0,tmp4=0,tmp5=0,Lgeptoindexphi1=0,Lgeptoindexphi8=0,tmp8=0;
	a:if(Marg2<Marg3){
		tmp5=(Marg6);
		tmp0=((Marg3)*2);
		Lgeptoindexphi8=0;
		Lgeptoindexphi1=0;
		while(1){
			tmp8=Larg2[Marg2+Lgeptoindexphi1|0]|0;
			if((tmp8&65535)<128){
				if((tmp5-(Marg5+Lgeptoindexphi8|0)|0)<1){
					tmp5=1;
					break a;
				}
				Larg5[Marg5+Lgeptoindexphi8|0]=tmp8;
				Lgeptoindexphi8=Lgeptoindexphi8+1|0;
			}else if((tmp8&65535)<2048){
				if((tmp5-(Marg5+Lgeptoindexphi8|0)|0)<2){
					tmp5=1;
					break a;
				}
				Larg5[Marg5+Lgeptoindexphi8|0]=(tmp8&65535)>>>6|192;
				Larg5[(Marg5+Lgeptoindexphi8|0)+1|0]=tmp8&63|128;
				Lgeptoindexphi8=Lgeptoindexphi8+2|0;
			}else if((tmp8&65535)<55296){
				if((tmp5-(Marg5+Lgeptoindexphi8|0)|0)<3){
					tmp5=1;
					break a;
				}
				Larg5[Marg5+Lgeptoindexphi8|0]=(tmp8&65535)>>>12|224;
				Larg5[(Marg5+Lgeptoindexphi8|0)+1|0]=(tmp8&65535)>>>6&63|128;
				Larg5[(Marg5+Lgeptoindexphi8|0)+2|0]=tmp8&63|128;
				Lgeptoindexphi8=Lgeptoindexphi8+3|0;
			}else if((tmp8&65535)<56320){
				if((tmp0-((Marg2+Lgeptoindexphi1|0)*2)|0)<4){
					tmp5=1;
					break a;
				}
				Lgeptoindex4=Lgeptoindexphi1+1|0;
				tmp2=Larg2[Marg2+Lgeptoindex4|0]|0;
				tmp3=tmp2&65535;
				if((tmp3&64512|0)!==56320){
					tmp5=2;
					break a;
				}
				if((tmp5-(Marg5+Lgeptoindexphi8|0)|0)<4){
					tmp5=1;
					break a;
				}
				tmp8=tmp8&65535;
				tmp4=tmp8&960;
				if((((tmp4<<10)+65536|0)+(tmp8<<10&64512)|0)+(tmp3&1023)>>>0>1114111){
					tmp5=2;
					break a;
				}
				Lgeptoindexphi1=(tmp4>>>6)+1|0;
				Larg5[Marg5+Lgeptoindexphi8|0]=Lgeptoindexphi1>>>2|240;
				Larg5[(Marg5+Lgeptoindexphi8|0)+1|0]=Lgeptoindexphi1<<4&48|tmp8>>>2&15|128;
				Larg5[(Marg5+Lgeptoindexphi8|0)+2|0]=tmp3>>>6&15|tmp8<<4&48|128;
				Larg5[(Marg5+Lgeptoindexphi8|0)+3|0]=tmp2&63|128;
				Lgeptoindexphi1=Lgeptoindex4;
				Lgeptoindexphi8=Lgeptoindexphi8+4|0;
			}else{
				if((tmp8&65535)<57344){
					tmp5=2;
					break a;
				}
				if((tmp5-(Marg5+Lgeptoindexphi8|0)|0)<3){
					tmp5=1;
					break a;
				}
				Larg5[Marg5+Lgeptoindexphi8|0]=(tmp8&65535)>>>12|224;
				Larg5[(Marg5+Lgeptoindexphi8|0)+1|0]=(tmp8&65535)>>>6&63|128;
				Larg5[(Marg5+Lgeptoindexphi8|0)+2|0]=tmp8&63|128;
				Lgeptoindexphi8=Lgeptoindexphi8+3|0;
			}
			Lgeptoindexphi1=Lgeptoindexphi1+1|0;
			if((Marg2+Lgeptoindexphi1|0)<Marg3)continue;
			break;
		}
		tmp5=0;
	}else{
		tmp5=0;
		Lgeptoindexphi8=0;
		Lgeptoindexphi1=0;
	}
	Larg4[Marg4]={d:Larg2,o:Marg2+Lgeptoindexphi1|0};
	Larg7[Marg7]={d:Larg5,o:Marg5+Lgeptoindexphi8|0};
	return tmp5|0;
}
function __ZNSt7codecvtIDsc10_mbstate_tED0Ev(Larg0){
}
function __ZNSt7codecvtIDsc10_mbstate_tED2Ev(Larg0){
}
function __ZNKSt7codecvtIwc10_mbstate_tE13do_max_lengthEv(Larg0){
	return 1|0;
}
function __ZNKSt7codecvtIwc10_mbstate_tE9do_lengthERS0_PKcS4_j(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4){
	var tmp0=0,tmp1=0,Lgeptoindexphi=0,tmp3=0,tmp4=0;
	if(Larg2===Larg3&&Marg2===Marg3)return 0|0;
	if((Larg4|0)===0)return 0|0;
	tmp0=(Marg3);
	tmp3=0;
	Lgeptoindexphi=0;
	tmp1=0;
	while(1){
		tmp4=__mbrtowc_r(nullArray,0,Larg2,Marg2+Lgeptoindexphi|0,tmp0-(Marg2+Lgeptoindexphi|0)|0,Larg1)|0;
		switch(tmp4|0){
			case 0:
			tmp4=1;
			break;
			case -1:
			case -2:
			return tmp3|0;
			default:
		}
		tmp3=tmp4+tmp3|0;
		Lgeptoindexphi=Lgeptoindexphi+tmp4|0;
		tmp1=tmp1+1|0;
		if(tmp1>>>0<Larg4>>>0){
			if(Larg2!==Larg3||(Marg2+Lgeptoindexphi|0)!==Marg3)continue;
			return tmp3|0;
		}
		break;
	}
	return tmp3|0;
}
function __ZNKSt7codecvtIwc10_mbstate_tE16do_always_noconvEv(Larg0){
	return 0|0;
}
function __ZNKSt7codecvtIwc10_mbstate_tE11do_encodingEv(Larg0){
	var L$poptgep$poptgep1$poptgepsqueezed=null;
	if(_impure_data.a22===null){
		L$poptgep$poptgep1$poptgepsqueezed=new constructor_struct$p_Z11_misc_reent();
		_impure_data.a22=L$poptgep$poptgep1$poptgepsqueezed;
		L$poptgep$poptgep1$poptgepsqueezed.a0=null;
		L$poptgep$poptgep1$poptgepsqueezed=L$poptgep$poptgep1$poptgepsqueezed.a1;
		L$poptgep$poptgep1$poptgepsqueezed.i0=0;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		L$poptgep$poptgep1$poptgepsqueezed=_impure_data.a22.a2;
		L$poptgep$poptgep1$poptgepsqueezed.i0=0;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		L$poptgep$poptgep1$poptgepsqueezed=_impure_data.a22.a3;
		L$poptgep$poptgep1$poptgepsqueezed.i0=0;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		L$poptgep$poptgep1$poptgepsqueezed=_impure_data.a22.a6;
		L$poptgep$poptgep1$poptgepsqueezed.i0=0;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		L$poptgep$poptgep1$poptgepsqueezed=_impure_data.a22.a7;
		L$poptgep$poptgep1$poptgepsqueezed.i0=0;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		L$poptgep$poptgep1$poptgepsqueezed=_impure_data.a22.a8;
		L$poptgep$poptgep1$poptgepsqueezed.i0=0;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		L$poptgep$poptgep1$poptgepsqueezed=_impure_data.a22.a9;
		L$poptgep$poptgep1$poptgepsqueezed.i0=0;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		L$poptgep$poptgep1$poptgepsqueezed=_impure_data.a22.a10;
		L$poptgep$poptgep1$poptgepsqueezed.i0=0;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		_impure_data.a22.a4[0]=0;
		_impure_data.a22.i5=0;
	}
	return 1|0;
}
function __ZNKSt7codecvtIwc10_mbstate_tE10do_unshiftERS0_PcS3_RS3_(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4){
	Larg4[Marg4]={d:Larg2,o:Marg2};
	return 0|0;
}
function __ZNKSt7codecvtIwc10_mbstate_tE5do_inERS0_PKcS4_RS4_PwS6_RS6_(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4,Larg5,Marg5,Larg6,Marg6,Larg7,Marg7){
	var tmp0=null,tmp1=0,tmp2=null,tmp2o=0,Lgeptoindexphi=0,tmp4=null,tmp4o=0,tmp5=null,tmp5o=0,Lgeptoindexphi4=0;
	if(Larg2===Larg3&&Marg2===Marg3){
		tmp2o=Marg2;
		tmp2=Larg2;
	}else{
		Lgeptoindexphi=0;
		while(1){
			if((Larg2[Marg2+Lgeptoindexphi|0]&255)!==0){
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				if(Larg2!==Larg3||(Marg2+Lgeptoindexphi|0)!==Marg3)continue;
				tmp2o=Marg3;
				tmp2=Larg3;
			}else{
				tmp2o=Marg2+Lgeptoindexphi|0;
				tmp2=Larg2;
			}
			break;
		}
	}
	Larg7[Marg7]={d:Larg5,o:Marg5};
	Larg4[Marg4]={d:Larg2,o:Marg2};
	a:if(Larg2!==Larg3||Marg2!==Marg3){
		if(Larg5!==Larg6||Marg5!==Marg6){
			Lgeptoindexphi=((Marg6)*4);
			tmp0={i0:0,i1:0};
			tmp5o=Marg5;
			tmp5=Larg5;
			tmp4o=Marg2;
			tmp4=Larg2;
			b:{
				while(1){
					tmp0.i0=Larg1.i0|0;
					tmp0.i1=Larg1.i1|0;
					Lgeptoindexphi4=(tmp2o);
					tmp1=__mbsnrtowcs_r(tmp5,tmp5o,Larg4,Marg4,Lgeptoindexphi4-(tmp4o)|0,Lgeptoindexphi-((tmp5o)*4)>>2,Larg1)|0;
					if((tmp1|0)!==-1){
						tmp5=Larg7[Marg7];
						Larg7[Marg7]={d:tmp5.d,o:tmp5.o+tmp1|0};
						if(tmp5.d===Larg6&&(tmp5.o+tmp1|0)===Marg6){
							tmp4=Larg4[Marg4];
							tmp4o=tmp4.o;
							tmp4=tmp4.d;
							break a;
						}
						tmp4=Larg4[Marg4];
						if(tmp2===Larg3&&tmp2o===Marg3){
							tmp4o=tmp4.o;
							tmp4=tmp4.d;
							tmp2o=Marg3;
							tmp2=Larg3;
						}else{
							if((__mbrtowc_r(tmp5.d,tmp5.o+tmp1|0,tmp4.d,tmp4.o,1,Larg1)|0|0)!==0){
								Lgeptoindexphi=2;
								break b;
							}
							tmp2=Larg7[Marg7];
							Larg7[Marg7]={d:tmp2.d,o:tmp2.o+1|0};
							tmp2=Larg4[Marg4];
							Larg4[Marg4]={d:tmp2.d,o:tmp2.o+1|0};
							if(tmp2.d===Larg3&&(tmp2.o+1|0)===Marg3){
								tmp2o=Marg3;
								tmp2=Larg3;
								tmp4o=Marg3;
								tmp4=Larg3;
							}else{
								Lgeptoindexphi4=1;
								while(1){
									if((tmp2.d[tmp2.o+Lgeptoindexphi4|0]&255)!==0){
										Lgeptoindexphi4=Lgeptoindexphi4+1|0;
										if(tmp2.d!==Larg3||(tmp2.o+Lgeptoindexphi4|0)!==Marg3)continue;
										tmp4o=tmp2.o+1|0;
										tmp4=tmp2.d;
										tmp2o=Marg3;
										tmp2=Larg3;
									}else{
										tmp4o=tmp2.o+1|0;
										tmp4=tmp2.d;
										tmp2o=tmp2.o+Lgeptoindexphi4|0;
										tmp2=tmp2.d;
									}
									break;
								}
							}
						}
						tmp5=Larg7[Marg7];
						if(tmp4===Larg3&&tmp4o===Marg3)break a;
						if(tmp5.d===Larg6&&tmp5.o===Marg6)break a;
						tmp5o=tmp5.o;
						tmp5=tmp5.d;
						continue;
					}
					Larg7[Marg7]={d:tmp5,o:tmp5o};
					tmp2=Larg4[Marg4];
					if(tmp4!==tmp2.d||tmp4o!==tmp2.o){
						while(1){
							Lgeptoindexphi=__mbrtowc_r(tmp5,tmp5o,tmp4,tmp4o,Lgeptoindexphi4-(tmp4o)|0,tmp0)|0;
							switch(Lgeptoindexphi|0){
								case 0:
								Lgeptoindexphi=1;
								break;
								case -1:
								Larg4[Marg4]={d:tmp4,o:tmp4o};
								Lgeptoindexphi=2;
								break b;
								case -2:
								Larg4[Marg4]={d:tmp4,o:tmp4o};
								Lgeptoindexphi=1;
								break b;
								default:
							}
							tmp5=Larg7[Marg7];
							Larg7[Marg7]={d:tmp5.d,o:tmp5.o+1|0};
							tmp2=Larg4[Marg4];
							if(tmp4!==tmp2.d||(tmp4o+Lgeptoindexphi|0)!==tmp2.o){
								tmp4o=tmp4o+Lgeptoindexphi|0;
								tmp4=tmp4;
								tmp5o=tmp5.o+1|0;
								tmp5=tmp5.d;
								continue;
							}
							break;
						}
						tmp4o=tmp4o+Lgeptoindexphi|0;
						tmp4=tmp4;
					}
					break;
				}
				Larg4[Marg4]={d:tmp4,o:tmp4o};
				Lgeptoindexphi=tmp4!==Larg3||tmp4o!==Marg3?1:0;
			}
			return Lgeptoindexphi|0;
		}
		tmp4o=Marg2;
		tmp4=Larg2;
	}else{
		tmp4o=Marg2;
		tmp4=Larg2;
	}
	return (tmp4!==Larg3||tmp4o!==Marg3?1:0)|0;
}
function __ZNKSt7codecvtIwc10_mbstate_tE6do_outERS0_PKwS4_RS4_PcS6_RS6_(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4,Larg5,Marg5,Larg6,Marg6,Larg7,Marg7){
	var tmp0=0,tmp1=0,tmp2=null,tmp2o=0,tmp3=null,tmp3o=0,tmp4=null,tmp4o=0,Lgeptoindexphi=0,tmp6=null,tmp6o=0,L$ppre=null,L$ppreo=0,Lgeptoindexphi4=0,tmp9=null,tmp9o=0,L$plcssa13$pi$pi=0,tmp11=0;
	if(Larg2===Larg3&&Marg2===Marg3){
		tmp4o=Marg2;
		tmp4=Larg2;
	}else{
		Lgeptoindexphi=0;
		while(1){
			if((Larg2[Marg2+Lgeptoindexphi|0]|0)!==0){
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				if(Larg2!==Larg3||(Marg2+Lgeptoindexphi|0)!==Marg3)continue;
				tmp4o=Marg3;
				tmp4=Larg3;
			}else{
				tmp4o=Marg2+Lgeptoindexphi|0;
				tmp4=Larg2;
			}
			break;
		}
	}
	Larg7[Marg7]={d:Larg5,o:Marg5};
	Larg4[Marg4]={d:Larg2,o:Marg2};
	a:if(Larg2!==Larg3||Marg2!==Marg3){
		if(Larg5!==Larg6||Marg5!==Marg6){
			Lgeptoindexphi=(Marg6);
			L$ppreo=Marg5;
			L$ppre=Larg5;
			tmp6o=Marg2;
			tmp6=Larg2;
			b:while(1){
				Lgeptoindexphi4=((tmp4o)*4)-((tmp6o)*4)>>2;
				tmp0=L$ppre!==nullArray||L$ppreo!==0?Lgeptoindexphi-(L$ppreo)|0: -1|0;
				if((tmp0|0)!==0){
					tmp1=L$ppre!==nullArray||L$ppreo!==0?1:0;
					c:{
						d:{
							e:{
								if(tmp1){
									tmp2o=L$ppreo;
									tmp2=L$ppre;
									tmp3o=tmp6o;
									tmp3=tmp6;
									tmp9o=tmp6o;
									tmp9=tmp6;
									L$plcssa13$pi$pi=0;
									while(1){
										if((Lgeptoindexphi4|0)===0)break e;
										tmp11=tmp3[tmp3o]|0;
										if(tmp11>>>0>255)break d;
										tmp2[tmp2o]=tmp11;
										Larg4[Marg4]={d:tmp9,o:tmp9o+1|0};
										L$plcssa13$pi$pi=L$plcssa13$pi$pi+1|0;
										if((tmp3[tmp3o]|0)!==0){
											if(L$plcssa13$pi$pi>>>0>=tmp0>>>0)break e;
											tmp2o=tmp2o+1|0;
											tmp2=tmp2;
											tmp3o=tmp3o+1|0;
											tmp3=tmp3;
											Lgeptoindexphi4=Lgeptoindexphi4-1|0;
											tmp9o=tmp9o+1|0;
											tmp9=tmp9;
											continue;
										}
										break;
									}
								}else{
									tmp9o=tmp6o;
									tmp9=tmp6;
									L$plcssa13$pi$pi=0;
									while(1){
										if((Lgeptoindexphi4|0)===0)break e;
										tmp11=tmp9[tmp9o]|0;
										if(tmp11>>>0>255){
											L$ppreo=0;
											L$ppre=nullArray;
											break d;
										}
										L$plcssa13$pi$pi=L$plcssa13$pi$pi+1|0;
										if((tmp11|0)!==0){
											if(L$plcssa13$pi$pi>>>0>=tmp0>>>0)break e;
											Lgeptoindexphi4=Lgeptoindexphi4-1|0;
											tmp9o=tmp9o+1|0;
											tmp9=tmp9;
											continue;
										}
										break;
									}
								}
								if(tmp1)Larg4[Marg4]=nullObj;
								Larg1.i0=0;
								L$plcssa13$pi$pi=L$plcssa13$pi$pi-1|0;
							}
							switch(L$plcssa13$pi$pi|0){
								case -1:
								break c;
								case 0:
								return 1|0;
								default:
								L$ppre=Larg7[Marg7];
								Larg7[Marg7]={d:L$ppre.d,o:L$ppre.o+L$plcssa13$pi$pi|0};
								if(L$ppre.d===Larg6&&(L$ppre.o+L$plcssa13$pi$pi|0)===Marg6){
									tmp6=Larg4[Marg4];
									tmp6o=tmp6.o;
									tmp6=tmp6.d;
									break a;
								}
								if(tmp4===Larg3&&tmp4o===Marg3){
									tmp6=Larg4[Marg4];
									tmp6o=tmp6.o;
									tmp6=tmp6.d;
									L$ppreo=L$ppre.o+L$plcssa13$pi$pi|0;
									L$ppre=L$ppre.d;
									tmp4o=Marg3;
									tmp4=Larg3;
								}else{
									if((Lgeptoindexphi|0)===((L$ppre.o+L$plcssa13$pi$pi|0)|0))return 1|0;
									Larg7[Marg7]={d:L$ppre.d,o:(L$ppre.o+L$plcssa13$pi$pi|0)+1|0};
									L$ppre.d[L$ppre.o+L$plcssa13$pi$pi|0]=0;
									tmp6=Larg4[Marg4];
									Larg4[Marg4]={d:tmp6.d,o:tmp6.o+1|0};
									if(tmp6.d===Larg3&&(tmp6.o+1|0)===Marg3){
										tmp4o=Marg3;
										tmp4=Larg3;
									}else{
										Lgeptoindexphi4=1;
										while(1){
											if((tmp6.d[tmp6.o+Lgeptoindexphi4|0]|0)!==0){
												Lgeptoindexphi4=Lgeptoindexphi4+1|0;
												if(tmp6.d!==Larg3||(tmp6.o+Lgeptoindexphi4|0)!==Marg3)continue;
												tmp4o=Marg3;
												tmp4=Larg3;
											}else{
												tmp4o=tmp6.o+Lgeptoindexphi4|0;
												tmp4=tmp6.d;
											}
											break;
										}
									}
									L$ppre=Larg7[Marg7];
									tmp6o=tmp6.o+1|0;
									tmp6=tmp6.d;
									L$ppreo=L$ppre.o;
									L$ppre=L$ppre.d;
								}
								if(L$ppre===Larg6&&L$ppreo===Marg6)break a;
								if(tmp6!==Larg3||tmp6o!==Marg3)continue b;
								break a;
							}
						}
						_impure_data.i0=138;
						Larg1.i0=0;
					}
					Larg7[Marg7]={d:L$ppre,o:L$ppreo};
					tmp4=Larg4[Marg4];
					c:if(tmp6===tmp4.d&&tmp6o===tmp4.o){
						tmp6={d:tmp6,o:tmp6o};
					}else{
						while(1){
							Lgeptoindexphi=tmp6[tmp6o]|0;
							if(L$ppre!==nullArray||L$ppreo!==0){
								if(Lgeptoindexphi>>>0>255){
									_impure_data.i0=138;
									tmp6={d:tmp6,o:tmp6o};
									break c;
								}
								L$ppre[L$ppreo]=Lgeptoindexphi;
								L$ppre=Larg7[Marg7];
								L$ppreo=L$ppre.o;
								L$ppre=L$ppre.d;
							}else{
								L$ppreo=0;
								L$ppre=nullArray;
							}
							Larg7[Marg7]={d:L$ppre,o:L$ppreo+1|0};
							tmp4=Larg4[Marg4];
							if(tmp6!==tmp4.d||(tmp6o+1|0)!==tmp4.o){
								tmp6o=tmp6o+1|0;
								tmp6=tmp6;
								L$ppreo=L$ppreo+1|0;
								L$ppre=L$ppre;
								continue;
							}
							break;
						}
						tmp6={d:tmp6,o:tmp6o+1|0};
					}
					Larg4[Marg4]=tmp6;
					return 2|0;
				}
				break;
			}
			return 1|0;
		}else{
			tmp6o=Marg2;
			tmp6=Larg2;
		}
	}else{
		tmp6o=Marg2;
		tmp6=Larg2;
	}
	return (tmp6!==Larg3||tmp6o!==Marg3?1:0)|0;
}
function __ZNSt7codecvtIwc10_mbstate_tED0Ev(Larg0){
	Larg0.a0=__ZTVSt7codecvtIwc10_mbstate_tE;
}
function __ZNSt7codecvtIwc10_mbstate_tED2Ev(Larg0){
	Larg0.a0=__ZTVSt7codecvtIwc10_mbstate_tE;
}
function __ZNKSt7codecvtIcc10_mbstate_tE13do_max_lengthEv(Larg0){
	return 1|0;
}
function __ZNKSt7codecvtIcc10_mbstate_tE9do_lengthERS0_PKcS4_j(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4){
	var tmp0=0;
	tmp0=(Marg3)-(Marg2)|0;
	return (tmp0>>>0<Larg4>>>0?tmp0|0:Larg4|0)|0;
}
function __ZNKSt7codecvtIcc10_mbstate_tE16do_always_noconvEv(Larg0){
	return 1|0;
}
function __ZNKSt7codecvtIcc10_mbstate_tE11do_encodingEv(Larg0){
	return 1|0;
}
function __ZNKSt7codecvtIcc10_mbstate_tE10do_unshiftERS0_PcS3_RS3_(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4){
	Larg4[Marg4]={d:Larg2,o:Marg2};
	return 3|0;
}
function __ZNKSt7codecvtIcc10_mbstate_tE5do_inERS0_PKcS4_RS4_PcS6_RS6_(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4,Larg5,Marg5,Larg6,Marg6,Larg7,Marg7){
	Larg4[Marg4]={d:Larg2,o:Marg2};
	Larg7[Marg7]={d:Larg5,o:Marg5};
	return 3|0;
}
function __ZNKSt7codecvtIcc10_mbstate_tE6do_outERS0_PKcS4_RS4_PcS6_RS6_(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4,Larg5,Marg5,Larg6,Marg6,Larg7,Marg7){
	Larg4[Marg4]={d:Larg2,o:Marg2};
	Larg7[Marg7]={d:Larg5,o:Marg5};
	return 3|0;
}
function __ZNSt7codecvtIcc10_mbstate_tED0Ev(Larg0){
}
function __ZNSt7codecvtIcc10_mbstate_tED2Ev(Larg0){
}
function __ZNKSt5ctypeIwE9do_narrowEPKwS2_cPc(Larg0,Larg1,Marg1,Larg2,Marg2,Larg3,Larg4,Marg4){
	var Lgeptoindexphi=0,tmp1=0,Lgeptoindexphi2=0;
	if(Larg1===Larg2&&Marg1===Marg2)return Larg1[Marg1];
	Lgeptoindexphi2=0;
	Lgeptoindexphi=0;
	while(1){
		tmp1=Larg1[Marg1+Lgeptoindexphi2|0]|0;
		Larg4[Marg4+Lgeptoindexphi|0]=tmp1>>>0<128?tmp1|0:Larg3|0;
		Lgeptoindexphi2=Lgeptoindexphi2+1|0;
		if(Larg1===Larg2&&(Marg1+Lgeptoindexphi2|0)===Marg2)return Larg1[Marg1+((( -4-((Marg1)*4)|0)+((Marg2)*4)>>>2)+1|0)|0];
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		continue;
	}
}
function __ZNKSt5ctypeIwE9do_narrowEwc(Larg0,Larg1,Larg2){
	return (Larg1>>>0<128?Larg1|0:Larg2|0)|0;
}
function __ZNKSt5ctypeIwE8do_widenEPKcS2_Pw(Larg0,Larg1,Marg1,Larg2,Marg2,Larg3,Marg3){
	var Lgeptoindexphi=0,Lgeptoindexphi2=0;
	if(Larg1===Larg2&&Marg1===Marg2)return Larg1[Marg1];
	Lgeptoindexphi2=0;
	Lgeptoindexphi=0;
	while(1){
		Larg3[Marg3+Lgeptoindexphi|0]=Larg1[Marg1+Lgeptoindexphi2|0]<<24>>24;
		Lgeptoindexphi2=Lgeptoindexphi2+1|0;
		if(Larg1===Larg2&&(Marg1+Lgeptoindexphi2|0)===Marg2)return Larg2[Marg2];
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		continue;
	}
}
function __ZNKSt5ctypeIwE8do_widenEc(Larg0,Larg1){
	return Larg1<<24>>24|0;
}
function __ZNKSt5ctypeIwE10do_tolowerEPwPKw(Larg0,Larg1,Marg1,Larg2,Marg2){
	var tmp0=0,Lgeptoindexphi=0,tmp2=0;
	if(Larg1===Larg2&&Marg1===Marg2)return Larg1[Marg1];
	Lgeptoindexphi=0;
	while(1){
		tmp2=Larg1[Marg1+Lgeptoindexphi|0]|0;
		if(tmp2>>>0<128){
			tmp0=__ctype_b[127+(tmp2+1|0)|0]|0;
			tmp2=(tmp0&3)===1?tmp2+32|0:tmp2|0;
		}
		Larg1[Marg1+Lgeptoindexphi|0]=tmp2;
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if(Larg1!==Larg2||(Marg1+Lgeptoindexphi|0)!==Marg2)continue;
		break;
	}
	return Larg1[Marg1+((( -4-((Marg1)*4)|0)+((Marg2)*4)>>>2)+1|0)|0];
}
function __ZNKSt5ctypeIwE10do_tolowerEw(Larg0,Larg1){
	if(Larg1>>>0<128)return ((__ctype_b[127+(Larg1+1|0)|0]&3)===1?Larg1+32|0:Larg1|0)|0;
	return Larg1|0;
}
function __ZNKSt5ctypeIwE10do_toupperEPwPKw(Larg0,Larg1,Marg1,Larg2,Marg2){
	var tmp0=0,Lgeptoindexphi=0,tmp2=0;
	if(Larg1===Larg2&&Marg1===Marg2)return Larg1[Marg1];
	Lgeptoindexphi=0;
	while(1){
		tmp2=Larg1[Marg1+Lgeptoindexphi|0]|0;
		if(tmp2>>>0<128){
			tmp0=__ctype_b[127+(tmp2+1|0)|0]|0;
			tmp2=(tmp0&3)===2?tmp2-32|0:tmp2|0;
		}
		Larg1[Marg1+Lgeptoindexphi|0]=tmp2;
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if(Larg1!==Larg2||(Marg1+Lgeptoindexphi|0)!==Marg2)continue;
		break;
	}
	return Larg1[Marg1+((( -4-((Marg1)*4)|0)+((Marg2)*4)>>>2)+1|0)|0];
}
function __ZNKSt5ctypeIwE10do_toupperEw(Larg0,Larg1){
	var tmp0=0,Lgeptoindexphi49=0,Lgeptoindexphi55=0,Lgeptoindexphi=0;
	if(Larg1>>>0<128){
		tmp0=_lc_ctype_charset[0]|0;
		if(tmp0===0){
			Lgeptoindexphi55=0;
			Lgeptoindexphi49=0;
		}else{
			Lgeptoindexphi55=tmp0;
			Lgeptoindexphi49=0;
			Lgeptoindexphi=0;
			while(1){
				if((Lgeptoindexphi55&255)===(_$pstr$p8$p249[0+Lgeptoindexphi49|0]&255)){
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					Lgeptoindexphi55=_lc_ctype_charset[0+Lgeptoindexphi|0]|0;
					Lgeptoindexphi49=Lgeptoindexphi49+1|0;
					if((Lgeptoindexphi55&255)!==0)continue;
					Lgeptoindexphi55=0;
				}
				break;
			}
		}
		a:{
			b:{
				c:{
					d:{
						e:{
							if((Lgeptoindexphi55&255)===(_$pstr$p8$p249[0+Lgeptoindexphi49|0]&255)){
								tmp0=Larg1+128|0;
								Lgeptoindexphi49=(Larg1>>8)+128|0;
							}else{
								if(tmp0===0){
									Lgeptoindexphi49=0;
									Lgeptoindexphi=0;
								}else{
									Lgeptoindexphi49=tmp0;
									Lgeptoindexphi=0;
									Lgeptoindexphi55=0;
									while(1){
										if((Lgeptoindexphi49&255)===(_$pstr$p12[0+Lgeptoindexphi|0]&255)){
											Lgeptoindexphi55=Lgeptoindexphi55+1|0;
											Lgeptoindexphi49=_lc_ctype_charset[0+Lgeptoindexphi55|0]|0;
											Lgeptoindexphi=Lgeptoindexphi+1|0;
											if((Lgeptoindexphi49&255)!==0)continue;
											Lgeptoindexphi49=0;
										}
										break;
									}
								}
								if((Lgeptoindexphi49&255)===(_$pstr$p12[0+Lgeptoindexphi|0]&255)){
									Lgeptoindexphi49=(Larg1&255)>>>0<159?127|0:128|0;
									tmp0=(Larg1+161|0)+((Larg1&255)>>>0<159?225|0:130|0)|0;
									Lgeptoindexphi55=Larg1>>>8;
									Lgeptoindexphi=Lgeptoindexphi55&255;
									if(Lgeptoindexphi>>>0<160){
										Lgeptoindexphi49=((Lgeptoindexphi<<1)-224|0)+Lgeptoindexphi49|0;
									}else{
										Lgeptoindexphi49=((Lgeptoindexphi55<<1)+160|0)+Lgeptoindexphi49|0;
									}
								}else{
									if(tmp0===0){
										tmp0=0;
										Lgeptoindexphi55=0;
									}else{
										Lgeptoindexphi55=0;
										Lgeptoindexphi49=0;
										while(1){
											if((tmp0&255)===(_$pstr$p11[0+Lgeptoindexphi55|0]&255)){
												Lgeptoindexphi49=Lgeptoindexphi49+1|0;
												tmp0=_lc_ctype_charset[0+Lgeptoindexphi49|0]|0;
												Lgeptoindexphi55=Lgeptoindexphi55+1|0;
												if((tmp0&255)!==0)continue;
												tmp0=0;
											}
											break;
										}
									}
									if((tmp0&255)!==(_$pstr$p11[0+Lgeptoindexphi55|0]&255)){
										tmp0=Larg1;
										break e;
									}
									tmp0=Larg1;
									Lgeptoindexphi49=Larg1>>8;
								}
							}
							Lgeptoindexphi55=Lgeptoindexphi49&255;
							if(Lgeptoindexphi55>>>0>175){
								if((Larg1|0)<53204)if(Lgeptoindexphi55>>>0<208){
									tmp0=_b02cf[((tmp0&255)-44865|0)+(Lgeptoindexphi55*254|0)|0]|0;
									tmp0=tmp0;
									break e;
								}
								if(Lgeptoindexphi55>>>0>207)if((Larg1|0)<62631)if(Lgeptoindexphi55>>>0<245){
									tmp0=_d02f4[((tmp0&255)-52993|0)+(Lgeptoindexphi55*254|0)|0]|0;
									tmp0=tmp0;
									break e;
								}
							}
							switch(Lgeptoindexphi49&255){
								case 161:
								tmp0=_a1[(tmp0&255)-161|0]|0;
								tmp0=tmp0;
								break e;
								case 162:
								tmp0=_a2[(tmp0&255)-161|0]|0;
								if(tmp0!==0){
									tmp0=tmp0;
									break e;
								}
								tmp0=-1;
								break a;
								case 163:
								tmp0=tmp0&255;
								if((_a3[tmp0-161|0]|0)!==0){
									tmp0=tmp0+65120|0;
									break c;
								}
								tmp0=-1;
								break a;
								case 164:
								if((tmp0&255)<244){
									tmp0=(tmp0&255)+12192|0;
									break d;
								}
								tmp0=-1;
								break a;
								case 165:
								if((tmp0&255)<247){
									tmp0=(tmp0&255)+12288|0;
									break c;
								}
								tmp0=-1;
								break a;
								case 166:
								if((tmp0&255)<217){
									tmp0=(tmp0&255)-161|0;
									Lgeptoindexphi49=_a6[tmp0]|0;
									if((tmp0& -8|0)===24){
										tmp0=-1;
										break a;
									}
									tmp0=Lgeptoindexphi49;
									break e;
								}
								tmp0=-1;
								break a;
								case 167:
								if((tmp0&255)<242){
									tmp0=tmp0&255;
									Lgeptoindexphi49=_a7[tmp0-161|0]|0;
									if(tmp0-194>>>0<15){
										tmp0=-1;
										break a;
									}
									tmp0=Lgeptoindexphi49;
									break e;
								}
								tmp0=-1;
								break a;
								case 168:
								if((tmp0&255)<193){
									tmp0=_a8[(tmp0&255)-161|0]|0;
									tmp0=tmp0;
									break e;
								}
								tmp0=-1;
								break a;
								default:
								tmp0=-1;
								break a;
							}
						}
						if((tmp0|0)<256){
							if((tmp0|0)!==181)break a;
							return (924===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
						}
						if((tmp0|0)<768){
							if(tmp0-583>>>0>=9)if(tmp0-547>>>0>=17)if(tmp0-505>>>0>=39)if(tmp0-479>>>0>=17)if(tmp0-331>>>0>=45)if(tmp0-257>>>0>=47)if(tmp0-307>>>0>=5){
								e:if(tmp0-314>>>0>=15)if(tmp0-462>>>0>=15){
									f:{
										if((tmp0|0)<382){
											if((tmp0|0)<378){
												if((tmp0|0)===305)return (73===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											}else if((tmp0|0)<380){
												if((tmp0|0)===378)break f;
											}else if((tmp0|0)===380)break f;
										}else if((tmp0|0)<572){
											if((tmp0|0)===382)break f;
										}else if((tmp0|0)<578){
											if((tmp0|0)===572)break e;
										}else if((tmp0|0)===578)break e;
										if(tmp0-383>>>0>=276)break b;
										switch(tmp0|0){
											case 383:
											return (83===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 384:
											return (579===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 387:
											return (386===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 389:
											return (388===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 392:
											return (391===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 396:
											return (395===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 402:
											return (401===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 405:
											return (502===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 409:
											return (408===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 410:
											return (573===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 414:
											return (544===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 417:
											case 419:
											case 421:
											case 424:
											case 429:
											case 432:
											case 436:
											case 438:
											case 441:
											case 445:
											case 453:
											case 456:
											case 459:
											case 498:
											case 501:
											return ((tmp0-1|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 447:
											return (503===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 454:
											case 457:
											case 460:
											return ((tmp0-2|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 477:
											return (398===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 499:
											return (497===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 575:
											return (11390===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 576:
											return (11391===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 592:
											return (11375===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 593:
											return (11373===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 594:
											return (11376===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 595:
											return (385===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 596:
											return (390===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 598:
											return (393===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 599:
											return (394===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 601:
											return (399===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 603:
											return (400===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 608:
											return (403===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 611:
											return (404===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 616:
											return (407===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 617:
											return (406===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 619:
											return (11362===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 623:
											return (412===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 625:
											return (11374===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 626:
											return (413===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 629:
											return (415===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 637:
											return (11364===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 640:
											return (422===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 643:
											return (425===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 648:
											return (430===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 649:
											return (580===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 650:
											return (433===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 651:
											return (434===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 652:
											return (581===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											case 658:
											return (439===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
											default:
											break b;
										}
									}
									return ((tmp0-1|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								}
								return (((tmp0-1|0)+(tmp0&1)|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
							}
							return (((tmp0<<31>>31)+tmp0|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
						}
						if((tmp0|0)<1024){
							if(tmp0-941>>>0<3)return ((tmp0-37|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
							if((tmp0|0)!==962)if(tmp0-945>>>0<27)return ((tmp0-32|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
							if(tmp0-985>>>0<23)if((tmp0&1|0)!==0)return ((tmp0-1|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
							switch(tmp0|0){
								case 837:
								return (921===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								case 881:
								case 883:
								case 887:
								case 1016:
								case 1019:
								return ((tmp0-1|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								case 891:
								case 892:
								case 893:
								return ((tmp0+130|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								case 940:
								return (902===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								case 962:
								return (931===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								case 972:
								return (908===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								case 973:
								case 974:
								return ((tmp0-63|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								case 976:
								return (914===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								case 977:
								return (920===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								case 981:
								return (934===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								case 982:
								return (928===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								case 983:
								return (975===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								case 1008:
								return (922===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								case 1009:
								return (929===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								case 1010:
								return (1017===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								case 1013:
								return (917===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								default:
								break b;
							}
						}else{
							if((tmp0|0)<1280){
								if(tmp0-1072>>>0<32)return ((tmp0-32|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								if((tmp0& -16|0)===1104)return ((tmp0-80|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								if(tmp0-1233>>>0>=47)if(tmp0-1121>>>0>=33)if(tmp0-1163>>>0>=53){
									if(tmp0-1218>>>0<13)return (((tmp0-1|0)+(tmp0&1)|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
									if((tmp0|0)===1231)return (1216===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
									if(tmp0-1271>>>0>=3)break b;
									return ((tmp0-1|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								}
								return (((tmp0<<31>>31)+tmp0|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
							}
							if((tmp0|0)<1536){
								if(tmp0-1281>>>0<37)if((tmp0&1|0)!==0)return ((tmp0-1|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								if(tmp0-1377>>>0>=38)break b;
								return ((tmp0-48|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
							}
							if((tmp0|0)<7936){
								switch(tmp0|0){
									case 7545:
									return (42877===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
									case 7549:
									return (11363===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
									default:
									if(tmp0-7681>>>0>=149)if(tmp0-7841>>>0>=95){
										if((tmp0|0)!==7835)break b;
										return (7776===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
									}
									return (((tmp0<<31>>31)+tmp0|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
								}
							}else if((tmp0|0)<8192){
								Lgeptoindexphi49=tmp0& -8;
								if((Lgeptoindexphi49|0)!==8096)if((Lgeptoindexphi49|16|0)!==8080)if((Lgeptoindexphi49|0)!==8032)if(tmp0-8000>>>0>=6)if((Lgeptoindexphi49|0)!==7984)if(tmp0-7952>>>0>=6)if((Lgeptoindexphi49|32|0)!==7968){
									if(tmp0-8017>>>0<7)if((tmp0&1|0)!==0)return ((tmp0+8|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
									if(tmp0-8048>>>0>=132)break b;
									switch(tmp0|0){
										case 8112:
										return (8120===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8113:
										return (8121===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8048:
										return (8122===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8049:
										return (8123===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8115:
										return (8124===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8126:
										return (921===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8050:
										return (8136===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8051:
										return (8137===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8052:
										return (8138===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8053:
										return (8139===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8131:
										return (8140===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8144:
										return (8152===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8145:
										return (8153===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8054:
										return (8154===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8055:
										return (8155===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8160:
										return (8168===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8161:
										return (8169===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8058:
										return (8170===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8059:
										return (8171===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8165:
										return (8172===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8056:
										return (8184===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8057:
										return (8185===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8060:
										return (8186===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8061:
										return (8187===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										case 8179:
										return (8188===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
										default:
										break b;
									}
								}
								return ((tmp0+8|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
							}
						}
					}
					if((tmp0|0)<12288){
						switch(tmp0|0){
							case 8526:
							return (8498===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
							case 8580:
							return (8579===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
							default:
							if((tmp0& -16|0)===8560)return ((tmp0-16|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
							if(tmp0-9424>>>0<26)return ((tmp0-26|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
							if(tmp0-11312>>>0<47)return ((tmp0-48|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
							d:{
								if(tmp0-11368>>>0<=4)if((tmp0&1|0)===0)break d;
								if(tmp0-11393>>>0<99){
									if((tmp0&1|0)!==0)break d;
								}else{
									switch(tmp0|0){
										case 11502:
										case 11500:
										case 11382:
										case 11379:
										break d;
										default:
										if(tmp0-11520>>>0<38)return ((tmp0-7264|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
									}
								}
								switch(tmp0|0){
									case 11361:
									return (11360===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
									case 11365:
									return (570===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
									case 11366:
									return (574===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
									default:
									break b;
								}
							}
							return ((tmp0-1|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
						}
					}
				}
				if((tmp0& -4096|0)===40960){
					c:{
						d:{
							if(tmp0-42803>>>0>=61)if(tmp0-42787>>>0>=13)if(tmp0-42625>>>0>=23)if(tmp0-42561>>>0>=31)if(tmp0-42595>>>0>=11){
								if(tmp0-42879>>>0>=9)break c;
								if((tmp0&1|0)!==0)break d;
								break c;
							}
							if((tmp0&1|0)===0)break c;
						}
						return ((tmp0-1|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
					}
					switch(tmp0|0){
						case 42892:
						case 42876:
						case 42874:
						return ((tmp0-1|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
						default:
					}
				}else{
					if(tmp0-65345>>>0<26)return ((tmp0-32|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
					if(tmp0-66600>>>0<40)return ((tmp0-40|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
				}
			}
			return ((tmp0|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
		}
		a:if(tmp0-97>>>0>=26){
			if((tmp0|0)!==247)if(tmp0-224>>>0<31)break a;
			return ((((tmp0|0)===255?376|0:tmp0|0)|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
		}
		return ((tmp0-32|0)===(Larg1|0)?Larg1|0:Larg1-32|0)|0;
	}
	return Larg1|0;
}
function __ZNKSt5ctypeIwE11do_scan_notEcPKwS2_(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3){
	var tmp0=0,Lgeptoindexphi=0;
	if(Larg2===Larg3&&Marg2===Marg3)return Larg2[Marg2];
	Lgeptoindexphi=0;
	while(1){
		tmp0=Larg2[Marg2+Lgeptoindexphi|0]|0;
		if(tmp0>>>0<128){
			if((__ctype_[1+tmp0|0]&Larg1&255)!==0){
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				if(Larg2!==Larg3||(Marg2+Lgeptoindexphi|0)!==Marg3)continue;
				return Larg3[Marg3];
			}
			return Larg2[Marg2+Lgeptoindexphi|0];
		}
		break;
	}
	return Larg2[Marg2+Lgeptoindexphi|0];
}
function __ZNKSt5ctypeIwE10do_scan_isEcPKwS2_(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3){
	var tmp0=0,Lgeptoindexphi=0;
	if(Larg2===Larg3&&Marg2===Marg3)return Larg2[Marg2];
	Lgeptoindexphi=0;
	while(1){
		tmp0=Larg2[Marg2+Lgeptoindexphi|0]|0;
		if(tmp0>>>0<128)if((__ctype_[1+tmp0|0]&Larg1&255)!==0)return Larg2[Marg2+Lgeptoindexphi|0];
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if(Larg2!==Larg3||(Marg2+Lgeptoindexphi|0)!==Marg3)continue;
		break;
	}
	return Larg3[Marg3];
}
function __ZNKSt5ctypeIwE5do_isEPKwS2_Pc(Larg0,Larg1,Marg1,Larg2,Marg2,Larg3,Marg3){
	var Lgeptoindexphi=0,Lgeptoindexphi2=0,tmp2=0;
	if(Larg1===Larg2&&Marg1===Marg2)return Larg1[Marg1];
	Lgeptoindexphi2=0;
	Lgeptoindexphi=0;
	while(1){
		tmp2=Larg1[Marg1+Lgeptoindexphi2|0]|0;
		if(tmp2>>>0<128){
			tmp2=__ctype_[1+tmp2|0]|0;
		}else{
			tmp2=0;
		}
		Larg3[Marg3+Lgeptoindexphi|0]=tmp2;
		Lgeptoindexphi2=Lgeptoindexphi2+1|0;
		if(Larg1===Larg2&&(Marg1+Lgeptoindexphi2|0)===Marg2)return Larg1[Marg1+((( -4-((Marg1)*4)|0)+((Marg2)*4)>>>2)+1|0)|0];
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		continue;
	}
}
function __ZNKSt5ctypeIwE5do_isEcw(Larg0,Larg1,Larg2){
	if(Larg2>>>0<128)return ((__ctype_[1+Larg2|0]&Larg1&255)!==0?1:0)|0;
	return 0|0;
}
function __ZNSt5ctypeIwED0Ev(Larg0){
}
function __ZNSt5ctypeIwED2Ev(Larg0){
}
function __ZNKSt5ctypeIcE9do_narrowEPKcS2_cPc(Larg0,Larg1,Marg1,Larg2,Marg2,Larg3,Larg4,Marg4){
	var Lgeptoindexphi=0,tmp1=0,Lgeptoindexphi2=0;
	if(Larg1===Larg2&&Marg1===Marg2)return Larg1[Marg1];
	Lgeptoindexphi2=0;
	Lgeptoindexphi=0;
	while(1){
		tmp1=Larg1[Marg1+Lgeptoindexphi2|0]|0;
		Larg4[Marg4+Lgeptoindexphi|0]=tmp1<<24>-16777216?tmp1|0:Larg3|0;
		Lgeptoindexphi2=Lgeptoindexphi2+1|0;
		if(Larg1===Larg2&&(Marg1+Lgeptoindexphi2|0)===Marg2)return Larg2[Marg2];
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		continue;
	}
}
function __ZNKSt5ctypeIcE9do_narrowEcc(Larg0,Larg1,Larg2){
	return (Larg1<<24>-16777216?Larg1|0:Larg2|0)|0;
}
function __ZNKSt5ctypeIcE8do_widenEPKcS2_Pc(Larg0,Larg1,Marg1,Larg2,Marg2,Larg3,Marg3){
	var Lgeptoindexphi=0,Lgeptoindexphi2=0;
	if(Larg1===Larg2&&Marg1===Marg2)return Larg1[Marg1];
	Lgeptoindexphi2=0;
	Lgeptoindexphi=0;
	while(1){
		Larg3[Marg3+Lgeptoindexphi|0]=Larg1[Marg1+Lgeptoindexphi2|0]|0;
		Lgeptoindexphi2=Lgeptoindexphi2+1|0;
		if(Larg1===Larg2&&(Marg1+Lgeptoindexphi2|0)===Marg2)return Larg2[Marg2];
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		continue;
	}
}
function __ZNKSt5ctypeIcE8do_widenEc(Larg0,Larg1){
	return Larg1|0;
}
function __ZNKSt5ctypeIcE10do_tolowerEPcPKc(Larg0,Larg1,Marg1,Larg2,Marg2){
	var tmp0=0,Lgeptoindexphi=0,tmp2=0;
	if(Larg1===Larg2&&Marg1===Marg2)return Larg1[Marg1];
	Lgeptoindexphi=0;
	while(1){
		tmp2=Larg1[Marg1+Lgeptoindexphi|0]|0;
		if(tmp2<<24>-16777216){
			tmp0=__ctype_b[127+((tmp2<<24>>24)+1|0)|0]|0;
			tmp2=(tmp0&3)===1?tmp2+32|0:tmp2|0;
		}
		Larg1[Marg1+Lgeptoindexphi|0]=tmp2;
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if(Larg1!==Larg2||(Marg1+Lgeptoindexphi|0)!==Marg2)continue;
		break;
	}
	return Larg2[Marg2];
}
function __ZNKSt5ctypeIcE10do_tolowerEc(Larg0,Larg1){
	if(Larg1<<24>-16777216)return ((__ctype_b[127+((Larg1<<24>>24)+1|0)|0]&3)===1?Larg1+32|0:Larg1|0)|0;
	return Larg1|0;
}
function __ZNKSt5ctypeIcE10do_toupperEPcPKc(Larg0,Larg1,Marg1,Larg2,Marg2){
	var tmp0=0,Lgeptoindexphi=0,tmp2=0;
	if(Larg1===Larg2&&Marg1===Marg2)return Larg1[Marg1];
	Lgeptoindexphi=0;
	while(1){
		tmp2=Larg1[Marg1+Lgeptoindexphi|0]|0;
		if(tmp2<<24>-16777216){
			tmp0=__ctype_b[127+((tmp2<<24>>24)+1|0)|0]|0;
			tmp2=(tmp0&3)===2?tmp2+224|0:tmp2|0;
		}
		Larg1[Marg1+Lgeptoindexphi|0]=tmp2;
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if(Larg1!==Larg2||(Marg1+Lgeptoindexphi|0)!==Marg2)continue;
		break;
	}
	return Larg2[Marg2];
}
function __ZNKSt5ctypeIcE10do_toupperEc(Larg0,Larg1){
	if(Larg1<<24>-16777216)return ((__ctype_b[127+((Larg1<<24>>24)+1|0)|0]&3)===2?Larg1+224|0:Larg1|0)|0;
	return Larg1|0;
}
function __ZNSt5ctypeIcED0Ev(Larg0){
	Larg0.a0=__ZTVSt5ctypeIcE;
}
function __ZNSt5ctypeIcED2Ev(Larg0){
	Larg0.a0=__ZTVSt5ctypeIcE;
}
function __ZNKSt7collateIwE7do_hashEPKwS2_(Larg0,Larg1,Marg1,Larg2,Marg2){
	var tmp0=0,Lgeptoindexphi=0,tmp2=0;
	if(Larg1===Larg2&&Marg1===Marg2)return 0|0;
	tmp2=0;
	Lgeptoindexphi=0;
	while(1){
		tmp2=(Larg1[Marg1+Lgeptoindexphi|0]|0)+(tmp2<<4)|0;
		tmp0=tmp2& -268435456;
		tmp2^=(tmp0>>>24|tmp0);
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if(Larg1!==Larg2||(Marg1+Lgeptoindexphi|0)!==Marg2)continue;
		break;
	}
	return tmp2|0;
}
function __ZNKSt7collateIwE12do_transformEPKwS2_(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3){
	var tmp0=0,tmp1=null,Lgeptoindexphi=0,Lgeptoindexphi2=0;
	tmp0=((Marg3)*4)-((Marg2)*4)|0;
	Lgeptoindexphi=tmp0>>2;
	Lgeptoindexphi2=Lgeptoindexphi+4& -4;
	tmp1=new Int32Array((Lgeptoindexphi2<<2)/4|0);
	Larg0.a2=tmp1;
	Larg0.i0=Lgeptoindexphi2|1;
	Larg0.i1=Lgeptoindexphi;
	if(Larg2===Larg3&&Marg2===Marg3){
		tmp1[0]=0;
		return;
	}
	Lgeptoindexphi2=0;
	Lgeptoindexphi=0;
	while(1){
		tmp1[Lgeptoindexphi]=Larg2[Marg2+Lgeptoindexphi2|0]|0;
		Lgeptoindexphi2=Lgeptoindexphi2+1|0;
		if(Larg2===Larg3&&(Marg2+Lgeptoindexphi2|0)===Marg3){
			tmp1[(tmp0-4>>>2)+1|0]=0;
			return;
		}
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		continue;
	}
}
function __ZNKSt7collateIwE10do_compareEPKwS2_S2_S2_(Larg0,Larg1,Marg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4){
	var tmp0=0,tmp1=0,Lgeptoindexphi3=0,Lgeptoindexphi=0;
	if(Larg3===Larg4&&Marg3===Marg4){
		Lgeptoindexphi3=0;
	}else{
		Lgeptoindexphi3=0;
		Lgeptoindexphi=0;
		while(1){
			if(Larg1===Larg2&&(Marg1+Lgeptoindexphi3|0)===Marg2)return  -1|0;
			tmp0=Larg1[Marg1+Lgeptoindexphi3|0]|0;
			tmp1=Larg3[Marg3+Lgeptoindexphi|0]|0;
			if((tmp0|0)<(tmp1|0))return  -1|0;
			if((tmp1|0)<(tmp0|0))return 1|0;
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			Lgeptoindexphi3=Lgeptoindexphi3+1|0;
			if(Larg3!==Larg4||(Marg3+Lgeptoindexphi|0)!==Marg4)continue;
			break;
		}
	}
	return (Larg1!==Larg2||(Marg1+Lgeptoindexphi3|0)!==Marg2?1:0)|0;
}
function __ZNSt7collateIwED0Ev(Larg0){
}
function __ZNSt7collateIwED2Ev(Larg0){
}
function __ZNKSt7collateIcE7do_hashEPKcS2_(Larg0,Larg1,Marg1,Larg2,Marg2){
	var tmp0=0,Lgeptoindexphi=0,tmp2=0;
	if(Larg1===Larg2&&Marg1===Marg2)return 0|0;
	tmp2=0;
	Lgeptoindexphi=0;
	while(1){
		tmp2=(tmp2<<4)+(Larg1[Marg1+Lgeptoindexphi|0]<<24>>24)|0;
		tmp0=tmp2& -268435456;
		tmp2^=(tmp0>>>24|tmp0);
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if(Larg1!==Larg2||(Marg1+Lgeptoindexphi|0)!==Marg2)continue;
		break;
	}
	return tmp2|0;
}
function __ZNKSt7collateIcE12do_transformEPKcS2_(Larg0,Larg1,Larg2,Marg2,Larg3,Marg3){
	var tmp0=0,tmp1=null,Lgeptoindexphi=0,Lgeptoindexphi2=0;
	tmp0=(Marg3)-(Marg2)|0;
	Lgeptoindexphi=tmp0+16& -16;
	tmp1=new Uint8Array(Lgeptoindexphi/1|0);
	Larg0.a2=tmp1;
	Larg0.i0=Lgeptoindexphi|1;
	Larg0.i1=tmp0;
	if(Larg2===Larg3&&Marg2===Marg3){
		tmp1[0]=0;
		return;
	}
	Lgeptoindexphi2=0;
	Lgeptoindexphi=0;
	while(1){
		tmp1[Lgeptoindexphi]=Larg2[Marg2+Lgeptoindexphi2|0]|0;
		Lgeptoindexphi2=Lgeptoindexphi2+1|0;
		if(Larg2===Larg3&&(Marg2+Lgeptoindexphi2|0)===Marg3){
			tmp1[tmp0]=0;
			return;
		}
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		continue;
	}
}
function __ZNKSt7collateIcE10do_compareEPKcS2_S2_S2_(Larg0,Larg1,Marg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4){
	var tmp0=0,tmp1=0,Lgeptoindexphi3=0,Lgeptoindexphi=0;
	if(Larg3===Larg4&&Marg3===Marg4){
		Lgeptoindexphi3=0;
	}else{
		Lgeptoindexphi3=0;
		Lgeptoindexphi=0;
		while(1){
			if(Larg1===Larg2&&(Marg1+Lgeptoindexphi3|0)===Marg2)return  -1|0;
			tmp0=Larg1[Marg1+Lgeptoindexphi3|0]|0;
			tmp1=Larg3[Marg3+Lgeptoindexphi|0]|0;
			if(tmp0<<24<tmp1<<24)return  -1|0;
			if(tmp1<<24<tmp0<<24)return 1|0;
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			Lgeptoindexphi3=Lgeptoindexphi3+1|0;
			if(Larg3!==Larg4||(Marg3+Lgeptoindexphi|0)!==Marg4)continue;
			break;
		}
	}
	return (Larg1!==Larg2||(Marg1+Lgeptoindexphi3|0)!==Marg2?1:0)|0;
}
function __ZNSt7collateIcED0Ev(Larg0){
}
function __ZNSt7collateIcED2Ev(Larg0){
}
function __ZNSt6locale5facet16__on_zero_sharedEv(Larg0){
	if(Larg0!==null)Larg0.a0.a2(Larg0);
}
function __ZNSt6locale5__impD0Ev(Larg0){
	__ZNSt6locale5__impD2Ev(Larg0);
}
function __ZNSt6locale5__impD2Ev(Larg0){
	var tmp0=null,tmp1=null,L$ppromoted=null,L$ppromotedo=0,L$ppre2=null,L$ppre$mphi=0,tmp5=0;
	Larg0.a0=__ZTVNSt6locale5__impE;
	tmp0=Larg0.a2;
	L$ppromotedo=tmp0.a1o;
	L$ppromoted=tmp0.a1;
	L$ppre2=tmp0.a0;
	L$ppre$mphi=((L$ppromotedo)*4);
	if((L$ppre$mphi|0)!==(((0)*4)|0)){
		tmp5=0;
		while(1){
			tmp1=L$ppre2[tmp5];
			if(tmp1!==null){
				L$ppre$mphi=tmp1.i1|0;
				tmp1.i1=L$ppre$mphi-1|0;
				if((L$ppre$mphi|0)===0){
					tmp1.a0.a3(tmp1);
					L$ppromotedo=tmp0.a1o;
					L$ppromoted=tmp0.a1;
					L$ppre2=tmp0.a0;
				}
			}
			L$ppre$mphi=((0)*4);
			tmp5=tmp5+1|0;
			if(tmp5>>>0<((L$ppromotedo)*4)-L$ppre$mphi>>2>>>0)continue;
			break;
		}
	}
	tmp5=L$ppromoted===L$ppre2&&L$ppromotedo===0?1:0;
	if(L$ppre2!==nullArray||0!==0)if(!(tmp5)){
		tmp0.a1=L$ppromoted;
		tmp0.a1o=L$ppromotedo+((((L$ppromotedo)*4)-L$ppre$mphi|0)-4>>>2^ -1)|0;
	}
}
function __ZNSt11__stdoutbufIcE8overflowEi(Larg0,Larg1){
	var LmergedArray=null,LmergedArray14=null,tmp2=0,tmp3=0,tmp4=0,tmp5=null,tmp5o=0,tmp6=null;
	LmergedArray=new Uint8Array(9);
	a:if((Larg1|0)!==-1){
		LmergedArray[8]=Larg1;
		if((Larg0.i11&255)===0){
			LmergedArray14=[nullObj,nullObj];
			LmergedArray14[0]={d:LmergedArray,o:0};
			tmp2=(0);
			tmp5o=8;
			tmp5=LmergedArray;
			b:while(1){
				tmp6=Larg0.a9;
				tmp3=tmp6.a0.a4(tmp6,Larg0.a10,tmp5,tmp5o,LmergedArray,8+1|0,LmergedArray14,1,LmergedArray,0,LmergedArray,0+8|0,LmergedArray14,0)|0;
				tmp6=LmergedArray14[1];
				if(tmp6.d!==tmp5||tmp6.o!==tmp5o){
					switch(tmp3|0){
						case 3:
						if((_fwrite(tmp5,tmp5o,1,Larg0.a8)|0|0)===1)break;
						break b;
						case 1:
						case 0:
						tmp5=LmergedArray14[0];
						tmp4=(tmp5.o)-tmp2|0;
						if((_fwrite(LmergedArray,0,tmp4,Larg0.a8)|0|0)!==(tmp4|0))break b;
						tmp5=LmergedArray14[1];
						if((tmp3|0)!==1)break;
						tmp5o=tmp5.o;
						tmp5=tmp5.d;
						continue b;
						default:
						break b;
					}
					break a;
				}
				break;
			}
			return  -1|0;
		}
		if((_fwrite(LmergedArray,8,1,Larg0.a8)|0|0)!==1)return  -1|0;
	}
	return ((Larg1|0)===-1?0|0:Larg1|0)|0;
}
function _fwrite(Larg0,Marg0,Larg1,Larg2){
	var tmp0=null,tmp1=0,tmp2=null,tmp2o=0,Lmergedinsert$pi=0,tmp4=null,tmp4o=0,Lgeptoindexphi5=0,tmp6=0,L$poptgep103$poptgep110$poptgepsqueezed=null,L$poptgep103$poptgep110$poptgepsqueezedo=0,Lgeptoindexphi19=0,Lgeptoindexphi52=0,Lgeptoindexphi40=0,Lgeptoindexphi28=0,Lgeptoindexphi36=0,L$poptgep84$poptgep91$poptgepsqueezed=null,L$poptgep84$poptgep91$poptgepsqueezedo=0,L$poptgep84$poptgep93$poptgepsqueezed=null,L$poptgep84$poptgep93$poptgepsqueezedo=0;
	tmp0=[{a0:Larg0,a0o:Marg0,i1:Larg1}];
	if((_impure_data.i6|0)===0)___sinit(_impure_data);
	if(Larg2===___sf_fake_stdin[$__sf_fake_stdin]){
		tmp2o=_impure_data.a1o;
		tmp2=_impure_data.a1;
		tmp2=tmp2[tmp2o];
	}else if(Larg2===___sf_fake_stdout[$__sf_fake_stdout]){
		tmp2o=_impure_data.a2o;
		tmp2=_impure_data.a2;
		tmp2=tmp2[tmp2o];
	}else{
		tmp4o=_impure_data.a3o;
		tmp4=_impure_data.a3;
		tmp2=(Larg2===___sf_fake_stderr[$__sf_fake_stderr]?tmp4[tmp4o]:Larg2);
	}
	Lmergedinsert$pi=tmp2.i3|0;
	if((Lmergedinsert$pi&8192|0)===0){
		Lmergedinsert$pi|=8192;
		tmp2.i3=Lmergedinsert$pi;
		tmp2.i21=tmp2.i21& -8193;
	}
	if((Larg1|0)!==0){
		a:{
			b:{
				if((Lmergedinsert$pi&8|0)!==0){
					tmp4o=tmp2.a4.a0o;
					tmp4=tmp2.a4.a0;
					if(tmp4!==nullArray||tmp4o!==0)break b;
				}
				if((_impure_data.i6|0)===0)___sinit(_impure_data);
				if(tmp2===___sf_fake_stdin[$__sf_fake_stdin]){
					tmp4o=_impure_data.a1o;
					tmp4=_impure_data.a1;
					tmp4=tmp4[tmp4o];
				}else if(tmp2===___sf_fake_stdout[$__sf_fake_stdout]){
					tmp4o=_impure_data.a2o;
					tmp4=_impure_data.a2;
					tmp4=tmp4[tmp4o];
				}else{
					tmp4o=_impure_data.a3o;
					tmp4=_impure_data.a3;
					tmp4=(tmp2===___sf_fake_stderr[$__sf_fake_stderr]?tmp4[tmp4o]:tmp2);
				}
				Lmergedinsert$pi=tmp4.i3|0;
				Lgeptoindexphi5=Lmergedinsert$pi<<16>>16;
				if((Lgeptoindexphi5&8|0)!==0){
					Lgeptoindexphi5=Lmergedinsert$pi;
				}else{
					if((Lgeptoindexphi5&16|0)===0){
						_impure_data.i0=9;
						tmp4.i3=Lmergedinsert$pi|64;
						Lmergedinsert$pi=Larg1;
						break a;
					}
					if((Lgeptoindexphi5&4|0)!==0){
						L$poptgep103$poptgep110$poptgepsqueezedo=tmp4.a12.a0o;
						L$poptgep103$poptgep110$poptgepsqueezed=tmp4.a12.a0;
						if(L$poptgep103$poptgep110$poptgepsqueezed!==nullArray||L$poptgep103$poptgep110$poptgepsqueezedo!==0){
							tmp4.a12.a0=nullArray;
							tmp4.a12.a0o=0;
						}
						Lgeptoindexphi5=Lmergedinsert$pi&65499;
						Lmergedinsert$pi=Lmergedinsert$pi& -65536|Lgeptoindexphi5;
						tmp4.i3=Lmergedinsert$pi;
						tmp4.i1=0;
						L$poptgep103$poptgep110$poptgepsqueezedo=tmp4.a4.a0o;
						L$poptgep103$poptgep110$poptgepsqueezed=tmp4.a4.a0;
						tmp4.a0=L$poptgep103$poptgep110$poptgepsqueezed;
						tmp4.a0o=L$poptgep103$poptgep110$poptgepsqueezedo;
					}else{
						Lgeptoindexphi5=Lmergedinsert$pi;
					}
					Lgeptoindexphi5|=8;
					Lmergedinsert$pi=Lmergedinsert$pi& -65536|Lgeptoindexphi5&65535;
					tmp4.i3=Lmergedinsert$pi;
				}
				L$poptgep103$poptgep110$poptgepsqueezed=tmp4.a4;
				L$poptgep84$poptgep91$poptgepsqueezedo=L$poptgep103$poptgep110$poptgepsqueezed.a0o;
				L$poptgep84$poptgep91$poptgepsqueezed=L$poptgep103$poptgep110$poptgepsqueezed.a0;
				c:if(L$poptgep84$poptgep91$poptgepsqueezed===nullArray&&L$poptgep84$poptgep91$poptgepsqueezedo===0){
					if((Lgeptoindexphi5&512)!==0)if(Lgeptoindexphi5<<24>=0)break c;
					if((Lmergedinsert$pi&2|0)!==0){
						tmp4.a0=tmp4.a15;
						tmp4.a0o=3;
						L$poptgep103$poptgep110$poptgepsqueezed.a0=tmp4.a15;
						L$poptgep103$poptgep110$poptgepsqueezed.a0o=3;
						L$poptgep103$poptgep110$poptgepsqueezed.i1=1;
					}else{
						d:{
							if(Lmergedinsert$pi>>16>>>0<3)if(Lmergedinsert$pi>>>16<<16>-65536){
								Lmergedinsert$pi&= -2049;
								Lgeptoindexphi19=1;
								tmp6=1024;
								break d;
							}
							tmp6=Lmergedinsert$pi<<24<0?64|0:1024|0;
							Lgeptoindexphi19=0;
						}
						tmp4.i3=Lmergedinsert$pi|2048;
						L$poptgep84$poptgep91$poptgepsqueezed=new Uint8Array(tmp6/1|0);
						if(L$poptgep84$poptgep91$poptgepsqueezed!==nullArray||0!==0){
							_impure_data.a10=__cleanup_r;
							Lgeptoindexphi5=tmp4.i3|0;
							Lmergedinsert$pi=Lgeptoindexphi5|128;
							tmp4.i3=Lmergedinsert$pi;
							tmp4.a0=L$poptgep84$poptgep91$poptgepsqueezed;
							tmp4.a0o=0;
							L$poptgep103$poptgep110$poptgepsqueezed.a0=L$poptgep84$poptgep91$poptgepsqueezed;
							L$poptgep103$poptgep110$poptgepsqueezed.a0o=0;
							L$poptgep103$poptgep110$poptgepsqueezed.i1=tmp6;
							if((Lgeptoindexphi19|0)!==0)if((Lgeptoindexphi5>>>16&65535)<=3){
								Lmergedinsert$pi=Lgeptoindexphi5|129;
								tmp4.i3=Lmergedinsert$pi;
							}
						}else{
							Lmergedinsert$pi=tmp4.i3|0;
							if((Lmergedinsert$pi&512|0)===0){
								Lmergedinsert$pi|=2;
								tmp4.i3=Lmergedinsert$pi;
								tmp4.a0=tmp4.a15;
								tmp4.a0o=3;
								L$poptgep103$poptgep110$poptgepsqueezed.a0=tmp4.a15;
								L$poptgep103$poptgep110$poptgepsqueezed.a0o=3;
								L$poptgep103$poptgep110$poptgepsqueezed.i1=1;
							}
						}
					}
					Lgeptoindexphi5=Lmergedinsert$pi;
				}
				tmp6=Lgeptoindexphi5<<16>>16;
				if((tmp6&1|0)!==0){
					tmp4.i2=0;
					tmp4.i5=-(L$poptgep103$poptgep110$poptgepsqueezed.i1|0)|0;
				}else{
					if((tmp6&2|0)!==0){
						tmp6=0;
					}else{
						tmp6=L$poptgep103$poptgep110$poptgepsqueezed.i1|0;
					}
					tmp4.i2=tmp6;
				}
				L$poptgep103$poptgep110$poptgepsqueezedo=L$poptgep103$poptgep110$poptgepsqueezed.a0o;
				L$poptgep103$poptgep110$poptgepsqueezed=L$poptgep103$poptgep110$poptgepsqueezed.a0;
				if(Lgeptoindexphi5<<24<0)if(L$poptgep103$poptgep110$poptgepsqueezed===nullArray&&L$poptgep103$poptgep110$poptgepsqueezedo===0){
					tmp4.i3=Lmergedinsert$pi& -65536|(Lgeptoindexphi5|64)&65535;
					Lmergedinsert$pi=Larg1;
					break a;
				}
				Lmergedinsert$pi=tmp2.i3|0;
			}
			Lmergedinsert$pi=Lmergedinsert$pi<<16>>16;
			b:if((Lmergedinsert$pi&2|0)!==0){
				tmp6=0;
				tmp4o=0;
				tmp4=nullArray;
				Lgeptoindexphi5=0;
				Lmergedinsert$pi=Larg1;
				while(1){
					if((tmp6|0)===0){
						while(1){
							tmp6=tmp0[Lgeptoindexphi5].i1|0;
							if((tmp6|0)===0){
								Lgeptoindexphi5=Lgeptoindexphi5+1|0;
								continue;
							}
							break;
						}
						tmp4o=tmp0[Lgeptoindexphi5].a0o;
						tmp4=tmp0[Lgeptoindexphi5].a0;
						Lgeptoindexphi5=Lgeptoindexphi5+1|0;
					}
					L$poptgep103$poptgep110$poptgepsqueezedo=tmp2.a7o;
					L$poptgep103$poptgep110$poptgepsqueezed=tmp2.a7;
					Lgeptoindexphi19=tmp2.a9(_impure_data,L$poptgep103$poptgep110$poptgepsqueezed,L$poptgep103$poptgep110$poptgepsqueezedo,tmp4,tmp4o,tmp6>>>0<2147482624?tmp6|0:2147482624|0)|0;
					if((Lgeptoindexphi19|0)>=1){
						Lmergedinsert$pi=Lmergedinsert$pi-Lgeptoindexphi19|0;
						if((Lmergedinsert$pi|0)!==0){
							tmp4o=tmp4o+Lgeptoindexphi19|0;
							tmp4=tmp4;
							tmp6=tmp6-Lgeptoindexphi19|0;
							continue;
						}
						return Larg1|0;
					}
					break;
				}
			}else if((Lmergedinsert$pi&1|0)!==0){
				Lgeptoindexphi52=0;
				tmp4o=0;
				tmp4=nullArray;
				Lgeptoindexphi19=0;
				tmp6=0;
				Lgeptoindexphi5=0;
				Lmergedinsert$pi=Larg1;
				while(1){
					c:{
						if((Lgeptoindexphi52|0)!==0){
							if((Lgeptoindexphi5|0)!==0)break c;
						}else{
							while(1){
								Lgeptoindexphi52=tmp0[Lgeptoindexphi19].i1|0;
								if((Lgeptoindexphi52|0)===0){
									Lgeptoindexphi19=Lgeptoindexphi19+1|0;
									continue;
								}
								break;
							}
							tmp4o=tmp0[Lgeptoindexphi19].a0o;
							tmp4=tmp0[Lgeptoindexphi19].a0;
							Lgeptoindexphi19=Lgeptoindexphi19+1|0;
						}
						Lgeptoindexphi5=Lgeptoindexphi52;
						L$poptgep103$poptgep110$poptgepsqueezedo=tmp4o;
						L$poptgep103$poptgep110$poptgepsqueezed=tmp4;
						while(1){
							if((L$poptgep103$poptgep110$poptgepsqueezed[L$poptgep103$poptgep110$poptgepsqueezedo]&255)===10){
								if(L$poptgep103$poptgep110$poptgepsqueezed!==nullArray||L$poptgep103$poptgep110$poptgepsqueezedo!==0){
									tmp6=(L$poptgep103$poptgep110$poptgepsqueezedo+1|0)-(tmp4o)|0;
									Lgeptoindexphi5=1;
									break c;
								}
							}else{
								Lgeptoindexphi5=Lgeptoindexphi5-1|0;
								if((Lgeptoindexphi5|0)!==0){
									L$poptgep103$poptgep110$poptgepsqueezedo=L$poptgep103$poptgep110$poptgepsqueezedo+1|0;
									L$poptgep103$poptgep110$poptgepsqueezed=L$poptgep103$poptgep110$poptgepsqueezed;
									continue;
								}
							}
							break;
						}
						tmp6=Lgeptoindexphi52+1|0;
						Lgeptoindexphi5=1;
					}
					Lgeptoindexphi40=Lgeptoindexphi52>>>0<tmp6>>>0?Lgeptoindexphi52|0:tmp6|0;
					L$poptgep103$poptgep110$poptgepsqueezed=tmp2.a4;
					Lgeptoindexphi28=L$poptgep103$poptgep110$poptgepsqueezed.i1|0;
					Lgeptoindexphi36=Lgeptoindexphi28+(tmp2.i2|0)|0;
					L$poptgep84$poptgep91$poptgepsqueezedo=tmp2.a0o;
					L$poptgep84$poptgep91$poptgepsqueezed=tmp2.a0;
					L$poptgep103$poptgep110$poptgepsqueezedo=L$poptgep103$poptgep110$poptgepsqueezed.a0o;
					L$poptgep103$poptgep110$poptgepsqueezed=L$poptgep103$poptgep110$poptgepsqueezed.a0;
					tmp1=L$poptgep84$poptgep91$poptgepsqueezedo>L$poptgep103$poptgep110$poptgepsqueezedo?1:0;
					c:{
						if((Lgeptoindexphi40|0)>(Lgeptoindexphi36|0))if(tmp1){
							if((Lgeptoindexphi36|0)!==0)if(tmp4o<L$poptgep84$poptgep91$poptgepsqueezedo){
								Lgeptoindexphi28=Lgeptoindexphi36;
								Lgeptoindexphi40=0;
								while(1){
									Lgeptoindexphi40=Lgeptoindexphi40-1|0;
									Lgeptoindexphi28=Lgeptoindexphi28-1|0;
									L$poptgep84$poptgep91$poptgepsqueezed[L$poptgep84$poptgep91$poptgepsqueezedo+Lgeptoindexphi28|0]=tmp4[(tmp4o+Lgeptoindexphi36|0)+Lgeptoindexphi40|0]|0;
									if(L$poptgep84$poptgep91$poptgepsqueezed!==L$poptgep84$poptgep91$poptgepsqueezed||L$poptgep84$poptgep91$poptgepsqueezedo!==(L$poptgep84$poptgep91$poptgepsqueezedo+Lgeptoindexphi28|0))continue;
									break;
								}
							}else{
								L$poptgep103$poptgep110$poptgepsqueezedo=tmp4o;
								L$poptgep103$poptgep110$poptgepsqueezed=tmp4;
								Lgeptoindexphi40=0;
								while(1){
									L$poptgep84$poptgep91$poptgepsqueezed[L$poptgep84$poptgep91$poptgepsqueezedo+Lgeptoindexphi40|0]=L$poptgep103$poptgep110$poptgepsqueezed[L$poptgep103$poptgep110$poptgepsqueezedo]|0;
									Lgeptoindexphi40=Lgeptoindexphi40+1|0;
									if(L$poptgep84$poptgep91$poptgepsqueezed!==L$poptgep84$poptgep91$poptgepsqueezed||(L$poptgep84$poptgep91$poptgepsqueezedo+Lgeptoindexphi36|0)!==(L$poptgep84$poptgep91$poptgepsqueezedo+Lgeptoindexphi40|0)){
										L$poptgep103$poptgep110$poptgepsqueezedo=L$poptgep103$poptgep110$poptgepsqueezedo+1|0;
										L$poptgep103$poptgep110$poptgepsqueezed=L$poptgep103$poptgep110$poptgepsqueezed;
										continue;
									}
									break;
								}
							}
							L$poptgep103$poptgep110$poptgepsqueezedo=tmp2.a0o;
							L$poptgep103$poptgep110$poptgepsqueezed=tmp2.a0;
							tmp2.a0=L$poptgep103$poptgep110$poptgepsqueezed;
							tmp2.a0o=L$poptgep103$poptgep110$poptgepsqueezedo+Lgeptoindexphi36|0;
							if((__fflush_r(_impure_data,tmp2)|0|0)!==0)break b;
							break c;
						}
						if((Lgeptoindexphi40|0)<(Lgeptoindexphi28|0)){
							if((Lgeptoindexphi40|0)!==0)if(tmp4o<L$poptgep84$poptgep91$poptgepsqueezedo){
								Lgeptoindexphi36=Lgeptoindexphi40;
								Lgeptoindexphi28=0;
								while(1){
									Lgeptoindexphi28=Lgeptoindexphi28-1|0;
									Lgeptoindexphi36=Lgeptoindexphi36-1|0;
									L$poptgep84$poptgep91$poptgepsqueezed[L$poptgep84$poptgep91$poptgepsqueezedo+Lgeptoindexphi36|0]=tmp4[(tmp4o+Lgeptoindexphi40|0)+Lgeptoindexphi28|0]|0;
									if(L$poptgep84$poptgep91$poptgepsqueezed!==L$poptgep84$poptgep91$poptgepsqueezed||L$poptgep84$poptgep91$poptgepsqueezedo!==(L$poptgep84$poptgep91$poptgepsqueezedo+Lgeptoindexphi36|0))continue;
									break;
								}
							}else{
								L$poptgep103$poptgep110$poptgepsqueezedo=tmp4o;
								L$poptgep103$poptgep110$poptgepsqueezed=tmp4;
								Lgeptoindexphi28=0;
								while(1){
									L$poptgep84$poptgep91$poptgepsqueezed[L$poptgep84$poptgep91$poptgepsqueezedo+Lgeptoindexphi28|0]=L$poptgep103$poptgep110$poptgepsqueezed[L$poptgep103$poptgep110$poptgepsqueezedo]|0;
									Lgeptoindexphi28=Lgeptoindexphi28+1|0;
									if(L$poptgep84$poptgep91$poptgepsqueezed!==L$poptgep84$poptgep91$poptgepsqueezed||(L$poptgep84$poptgep91$poptgepsqueezedo+Lgeptoindexphi40|0)!==(L$poptgep84$poptgep91$poptgepsqueezedo+Lgeptoindexphi28|0)){
										L$poptgep103$poptgep110$poptgepsqueezedo=L$poptgep103$poptgep110$poptgepsqueezedo+1|0;
										L$poptgep103$poptgep110$poptgepsqueezed=L$poptgep103$poptgep110$poptgepsqueezed;
										continue;
									}
									break;
								}
							}
							tmp2.i2=(tmp2.i2|0)-Lgeptoindexphi40|0;
							L$poptgep103$poptgep110$poptgepsqueezedo=tmp2.a0o;
							L$poptgep103$poptgep110$poptgepsqueezed=tmp2.a0;
							tmp2.a0=L$poptgep103$poptgep110$poptgepsqueezed;
							tmp2.a0o=L$poptgep103$poptgep110$poptgepsqueezedo+Lgeptoindexphi40|0;
							Lgeptoindexphi36=Lgeptoindexphi40;
						}else{
							L$poptgep103$poptgep110$poptgepsqueezedo=tmp2.a7o;
							L$poptgep103$poptgep110$poptgepsqueezed=tmp2.a7;
							Lgeptoindexphi36=tmp2.a9(_impure_data,L$poptgep103$poptgep110$poptgepsqueezed,L$poptgep103$poptgep110$poptgepsqueezedo,tmp4,tmp4o,Lgeptoindexphi28)|0;
							if((Lgeptoindexphi36|0)<1)break b;
						}
					}
					tmp6=tmp6-Lgeptoindexphi36|0;
					if((tmp6|0)===0){
						if((__fflush_r(_impure_data,tmp2)|0|0)!==0)break b;
						Lgeptoindexphi5=0;
					}
					Lmergedinsert$pi=Lmergedinsert$pi-Lgeptoindexphi36|0;
					if((Lmergedinsert$pi|0)!==0){
						tmp4o=tmp4o+Lgeptoindexphi36|0;
						tmp4=tmp4;
						Lgeptoindexphi52=Lgeptoindexphi52-Lgeptoindexphi36|0;
						continue;
					}
					break;
				}
				return Larg1|0;
			}else{
				tmp6=0;
				tmp4o=0;
				tmp4=nullArray;
				Lgeptoindexphi5=0;
				Lmergedinsert$pi=Larg1;
				while(1){
					if((tmp6|0)===0){
						while(1){
							tmp6=tmp0[Lgeptoindexphi5].i1|0;
							if((tmp6|0)===0){
								Lgeptoindexphi5=Lgeptoindexphi5+1|0;
								continue;
							}
							break;
						}
						tmp4o=tmp0[Lgeptoindexphi5].a0o;
						tmp4=tmp0[Lgeptoindexphi5].a0;
						Lgeptoindexphi5=Lgeptoindexphi5+1|0;
					}
					Lgeptoindexphi19=tmp2.i2|0;
					Lgeptoindexphi52=tmp2.i3<<16>>16;
					c:if((Lgeptoindexphi52&512|0)!==0){
						L$poptgep103$poptgep110$poptgepsqueezedo=tmp2.a0o;
						L$poptgep103$poptgep110$poptgepsqueezed=tmp2.a0;
						if(tmp6>>>0>=Lgeptoindexphi19>>>0)if((Lgeptoindexphi52&1152|0)!==0){
							L$poptgep84$poptgep93$poptgepsqueezed=tmp2.a4;
							L$poptgep84$poptgep91$poptgepsqueezedo=L$poptgep84$poptgep93$poptgepsqueezed.a0o;
							L$poptgep84$poptgep91$poptgepsqueezed=L$poptgep84$poptgep93$poptgepsqueezed.a0;
							Lgeptoindexphi19=(L$poptgep103$poptgep110$poptgepsqueezedo)-(L$poptgep84$poptgep91$poptgepsqueezedo)|0;
							Lgeptoindexphi40=(tmp6+1|0)+Lgeptoindexphi19|0;
							Lgeptoindexphi28=((L$poptgep84$poptgep93$poptgepsqueezed.i1|0)*3|0)/2|0;
							Lgeptoindexphi28=Lgeptoindexphi28>>>0<Lgeptoindexphi40>>>0?Lgeptoindexphi40|0:Lgeptoindexphi28|0;
							if((Lgeptoindexphi52&1024|0)!==0){
								L$poptgep103$poptgep110$poptgepsqueezed=new Uint8Array(Lgeptoindexphi28/1|0);
								if(L$poptgep103$poptgep110$poptgepsqueezed===nullArray&&0===0){
									_impure_data.i0=12;
									break b;
								}
								if((Lgeptoindexphi19|0)!==0){
									L$poptgep84$poptgep91$poptgepsqueezedo=L$poptgep84$poptgep93$poptgepsqueezed.a0o;
									L$poptgep84$poptgep91$poptgepsqueezed=L$poptgep84$poptgep93$poptgepsqueezed.a0;
									Lgeptoindexphi40=0;
									Lgeptoindexphi52=0;
									while(1){
										L$poptgep103$poptgep110$poptgepsqueezed[Lgeptoindexphi40]=L$poptgep84$poptgep91$poptgepsqueezed[L$poptgep84$poptgep91$poptgepsqueezedo+Lgeptoindexphi52|0]|0;
										Lgeptoindexphi40=Lgeptoindexphi40+1|0;
										if(L$poptgep103$poptgep110$poptgepsqueezed!==L$poptgep103$poptgep110$poptgepsqueezed||(0+Lgeptoindexphi19|0)!==(0+Lgeptoindexphi40|0)){
											Lgeptoindexphi52=Lgeptoindexphi52+1|0;
											continue;
										}
										break;
									}
								}
								tmp2.i3=tmp2.i3& -1153|128;
							}else{
								if(L$poptgep84$poptgep91$poptgepsqueezed!==nullArray||L$poptgep84$poptgep91$poptgepsqueezedo!==0){
									L$poptgep103$poptgep110$poptgepsqueezed=(function(){var __old__=L$poptgep84$poptgep91$poptgepsqueezed;
										var __ret__=new Uint8Array(Lgeptoindexphi28/1|0);
										__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));
										return __ret__;})();
								}else{
									L$poptgep103$poptgep110$poptgepsqueezed=new Uint8Array(Lgeptoindexphi28/1|0);
								}
								if(L$poptgep103$poptgep110$poptgepsqueezed===nullArray&&0===0){
									tmp2.i3=tmp2.i3& -129;
									_impure_data.i0=12;
									break b;
								}
							}
							L$poptgep84$poptgep93$poptgepsqueezed.a0=L$poptgep103$poptgep110$poptgepsqueezed;
							L$poptgep84$poptgep93$poptgepsqueezed.a0o=0;
							tmp2.a0=L$poptgep103$poptgep110$poptgepsqueezed;
							tmp2.a0o=0+Lgeptoindexphi19|0;
							L$poptgep84$poptgep93$poptgepsqueezed.i1=Lgeptoindexphi28;
							tmp2.i2=Lgeptoindexphi28-Lgeptoindexphi19|0;
							L$poptgep103$poptgep110$poptgepsqueezedo=0+Lgeptoindexphi19|0;
							L$poptgep103$poptgep110$poptgepsqueezed=L$poptgep103$poptgep110$poptgepsqueezed;
							Lgeptoindexphi19=tmp6;
						}
						Lgeptoindexphi19=tmp6>>>0<Lgeptoindexphi19>>>0?tmp6|0:Lgeptoindexphi19|0;
						if((Lgeptoindexphi19|0)!==0)if(tmp4o<L$poptgep103$poptgep110$poptgepsqueezedo){
							Lgeptoindexphi40=0;
							Lgeptoindexphi52=0;
							while(1){
								Lgeptoindexphi52=Lgeptoindexphi52-1|0;
								Lgeptoindexphi40=Lgeptoindexphi40-1|0;
								L$poptgep103$poptgep110$poptgepsqueezed[(L$poptgep103$poptgep110$poptgepsqueezedo+Lgeptoindexphi19|0)+Lgeptoindexphi40|0]=tmp4[(tmp4o+Lgeptoindexphi19|0)+Lgeptoindexphi52|0]|0;
								if(L$poptgep103$poptgep110$poptgepsqueezed!==L$poptgep103$poptgep110$poptgepsqueezed||L$poptgep103$poptgep110$poptgepsqueezedo!==((L$poptgep103$poptgep110$poptgepsqueezedo+Lgeptoindexphi19|0)+Lgeptoindexphi40|0))continue;
								break;
							}
						}else{
							L$poptgep84$poptgep91$poptgepsqueezedo=L$poptgep103$poptgep110$poptgepsqueezedo;
							L$poptgep84$poptgep91$poptgepsqueezed=L$poptgep103$poptgep110$poptgepsqueezed;
							L$poptgep84$poptgep93$poptgepsqueezedo=tmp4o;
							L$poptgep84$poptgep93$poptgepsqueezed=tmp4;
							while(1){
								L$poptgep84$poptgep91$poptgepsqueezed[L$poptgep84$poptgep91$poptgepsqueezedo]=L$poptgep84$poptgep93$poptgepsqueezed[L$poptgep84$poptgep93$poptgepsqueezedo]|0;
								if(L$poptgep103$poptgep110$poptgepsqueezed!==L$poptgep84$poptgep91$poptgepsqueezed||(L$poptgep103$poptgep110$poptgepsqueezedo+Lgeptoindexphi19|0)!==(L$poptgep84$poptgep91$poptgepsqueezedo+1|0)){
									L$poptgep84$poptgep91$poptgepsqueezedo=L$poptgep84$poptgep91$poptgepsqueezedo+1|0;
									L$poptgep84$poptgep91$poptgepsqueezed=L$poptgep84$poptgep91$poptgepsqueezed;
									L$poptgep84$poptgep93$poptgepsqueezedo=L$poptgep84$poptgep93$poptgepsqueezedo+1|0;
									L$poptgep84$poptgep93$poptgepsqueezed=L$poptgep84$poptgep93$poptgepsqueezed;
									continue;
								}
								break;
							}
						}
						tmp2.i2=(tmp2.i2|0)-Lgeptoindexphi19|0;
						L$poptgep84$poptgep91$poptgepsqueezedo=tmp2.a0o;
						L$poptgep84$poptgep91$poptgepsqueezed=tmp2.a0;
						tmp2.a0=L$poptgep84$poptgep91$poptgepsqueezed;
						tmp2.a0o=L$poptgep84$poptgep91$poptgepsqueezedo+Lgeptoindexphi19|0;
						Lgeptoindexphi19=tmp6;
					}else{
						L$poptgep103$poptgep110$poptgepsqueezedo=tmp2.a0o;
						L$poptgep103$poptgep110$poptgepsqueezed=tmp2.a0;
						L$poptgep84$poptgep91$poptgepsqueezed=tmp2.a4;
						L$poptgep84$poptgep93$poptgepsqueezedo=L$poptgep84$poptgep91$poptgepsqueezed.a0o;
						L$poptgep84$poptgep93$poptgepsqueezed=L$poptgep84$poptgep91$poptgepsqueezed.a0;
						if(L$poptgep103$poptgep110$poptgepsqueezedo<=L$poptgep84$poptgep93$poptgepsqueezedo){
							Lgeptoindexphi52=L$poptgep84$poptgep91$poptgepsqueezed.i1|0;
							if(tmp6>>>0>=Lgeptoindexphi52>>>0){
								Lgeptoindexphi19=tmp6>>>0<2147483647?tmp6|0:2147483647|0;
								L$poptgep84$poptgep91$poptgepsqueezedo=tmp2.a7o;
								L$poptgep84$poptgep91$poptgepsqueezed=tmp2.a7;
								Lgeptoindexphi19=tmp2.a9(_impure_data,L$poptgep84$poptgep91$poptgepsqueezed,L$poptgep84$poptgep91$poptgepsqueezedo,tmp4,tmp4o,Lgeptoindexphi19-((Lgeptoindexphi19|0)%(Lgeptoindexphi52|0)|0)|0)|0;
								if((Lgeptoindexphi19|0)<1)break b;
								break c;
							}
						}
						Lgeptoindexphi19=tmp6>>>0<Lgeptoindexphi19>>>0?tmp6|0:Lgeptoindexphi19|0;
						if((Lgeptoindexphi19|0)!==0)if(tmp4o<L$poptgep103$poptgep110$poptgepsqueezedo){
							Lgeptoindexphi40=Lgeptoindexphi19;
							Lgeptoindexphi52=0;
							while(1){
								Lgeptoindexphi52=Lgeptoindexphi52-1|0;
								Lgeptoindexphi40=Lgeptoindexphi40-1|0;
								L$poptgep103$poptgep110$poptgepsqueezed[L$poptgep103$poptgep110$poptgepsqueezedo+Lgeptoindexphi40|0]=tmp4[(tmp4o+Lgeptoindexphi19|0)+Lgeptoindexphi52|0]|0;
								if(L$poptgep103$poptgep110$poptgepsqueezed!==L$poptgep103$poptgep110$poptgepsqueezed||L$poptgep103$poptgep110$poptgepsqueezedo!==(L$poptgep103$poptgep110$poptgepsqueezedo+Lgeptoindexphi40|0))continue;
								break;
							}
						}else{
							L$poptgep84$poptgep93$poptgepsqueezedo=tmp4o;
							L$poptgep84$poptgep93$poptgepsqueezed=tmp4;
							Lgeptoindexphi52=0;
							while(1){
								L$poptgep103$poptgep110$poptgepsqueezed[L$poptgep103$poptgep110$poptgepsqueezedo+Lgeptoindexphi52|0]=L$poptgep84$poptgep93$poptgepsqueezed[L$poptgep84$poptgep93$poptgepsqueezedo]|0;
								Lgeptoindexphi52=Lgeptoindexphi52+1|0;
								if(L$poptgep103$poptgep110$poptgepsqueezed!==L$poptgep103$poptgep110$poptgepsqueezed||(L$poptgep103$poptgep110$poptgepsqueezedo+Lgeptoindexphi19|0)!==(L$poptgep103$poptgep110$poptgepsqueezedo+Lgeptoindexphi52|0)){
									L$poptgep84$poptgep93$poptgepsqueezedo=L$poptgep84$poptgep93$poptgepsqueezedo+1|0;
									L$poptgep84$poptgep93$poptgepsqueezed=L$poptgep84$poptgep93$poptgepsqueezed;
									continue;
								}
								break;
							}
						}
						Lgeptoindexphi52=(tmp2.i2|0)-Lgeptoindexphi19|0;
						tmp2.i2=Lgeptoindexphi52;
						L$poptgep84$poptgep91$poptgepsqueezedo=tmp2.a0o;
						L$poptgep84$poptgep91$poptgepsqueezed=tmp2.a0;
						tmp2.a0=L$poptgep84$poptgep91$poptgepsqueezed;
						tmp2.a0o=L$poptgep84$poptgep91$poptgepsqueezedo+Lgeptoindexphi19|0;
						if((Lgeptoindexphi52|0)===0)if((__fflush_r(_impure_data,tmp2)|0|0)!==0)break b;
					}
					Lmergedinsert$pi=Lmergedinsert$pi-Lgeptoindexphi19|0;
					if((Lmergedinsert$pi|0)!==0){
						tmp4o=tmp4o+Lgeptoindexphi19|0;
						tmp4=tmp4;
						tmp6=tmp6-Lgeptoindexphi19|0;
						continue;
					}
					break;
				}
				return Larg1|0;
			}
			tmp2.i3=tmp2.i3|64;
		}
		return Larg1-Lmergedinsert$pi|0;
	}
	return 0|0;
}
function __fflush_r(Larg0,Larg1){
	var tmp0=null,tmp0o=0;
	tmp0o=Larg1.a4.a0o;
	tmp0=Larg1.a4.a0;
	if(tmp0!==nullArray||tmp0o!==0){
		if(Larg0!==null)if((Larg0.i6|0)===0)___sinit(Larg0);
		if(Larg1===___sf_fake_stdin[$__sf_fake_stdin]){
			tmp0o=Larg0.a1o;
			tmp0=Larg0.a1;
			tmp0=tmp0[tmp0o];
		}else if(Larg1===___sf_fake_stdout[$__sf_fake_stdout]){
			tmp0o=Larg0.a2o;
			tmp0=Larg0.a2;
			tmp0=tmp0[tmp0o];
		}else if(Larg1===___sf_fake_stderr[$__sf_fake_stderr]){
			tmp0o=Larg0.a3o;
			tmp0=Larg0.a3;
			tmp0=tmp0[tmp0o];
		}else{
			tmp0=Larg1;
		}
		if((tmp0.i3&65535)!==0)return ___sflush_r(Larg0,tmp0)|0|0;
		return 0|0;
	}
	return 0|0;
}
function ___sflush_r(Larg0,Larg1){
	var tmp0=null,tmp0o=0,tmp1=0,Lgeptoindexphi=0,L$poptgep$poptgep25$poptgepsqueezed=null,L$poptgep$poptgep25$poptgepsqueezedo=0,tmp4=null,tmp4o=0,tmp5=0;
	tmp1=Larg1.i3|0;
	Lgeptoindexphi=tmp1<<16>>16;
	if((Lgeptoindexphi&8|0)===0){
		Larg1.i3=tmp1|2048;
		if((Larg1.i1|0)<=0)if((Larg1.i14|0)<=0)return 0|0;
		L$poptgep$poptgep25$poptgepsqueezed=Larg1.a10;
		if(L$poptgep$poptgep25$poptgepsqueezed!==null){
			Lgeptoindexphi=Larg0.i0|0;
			Larg0.i0=0;
			a:if((tmp1&4096|0)!==0){
				tmp1=Larg1.i18|0;
			}else{
				tmp4o=Larg1.a7o;
				tmp4=Larg1.a7;
				tmp1=L$poptgep$poptgep25$poptgepsqueezed(Larg0,tmp4,tmp4o,0,1)|0;
				if((tmp1|0)===-1){
					switch(Larg0.i0|0){
						case 0:
						tmp1=-1;
						break a;
						case 29:
						case 22:
						Larg0.i0=Lgeptoindexphi;
						return 0|0;
						default:
						Larg1.i3=Larg1.i3|64;
						return  -1|0;
					}
				}
			}
			if((Larg1.i3&4|0)!==0){
				L$poptgep$poptgep25$poptgepsqueezedo=Larg1.a12.a0o;
				L$poptgep$poptgep25$poptgepsqueezed=Larg1.a12.a0;
				tmp1=tmp1-(Larg1.i1|0)|0;
				if(L$poptgep$poptgep25$poptgepsqueezed!==nullArray||L$poptgep$poptgep25$poptgepsqueezedo!==0){
					tmp5=Larg1.i14|0;
					tmp1=tmp1-tmp5|0;
				}
			}
			L$poptgep$poptgep25$poptgepsqueezedo=Larg1.a7o;
			L$poptgep$poptgep25$poptgepsqueezed=Larg1.a7;
			tmp1=Larg1.a10(Larg0,L$poptgep$poptgep25$poptgepsqueezed,L$poptgep$poptgep25$poptgepsqueezedo,tmp1,0)|0;
			a:if((tmp1|0)===-1){
				switch(Larg0.i0|0){
					case 0:
					case 29:
					case 22:
					break a;
					default:
					Larg1.i3=Larg1.i3|64;
					return  -1|0;
				}
			}
			tmp5=Larg1.i3|0;
			Larg1.i3=tmp5& -2049;
			Larg1.i1=0;
			L$poptgep$poptgep25$poptgepsqueezedo=Larg1.a4.a0o;
			L$poptgep$poptgep25$poptgepsqueezed=Larg1.a4.a0;
			Larg1.a0=L$poptgep$poptgep25$poptgepsqueezed;
			Larg1.a0o=L$poptgep$poptgep25$poptgepsqueezedo;
			a:if((tmp5&4096|0)!==0){
				if((tmp1|0)===-1)if((Larg0.i0|0)!==0)break a;
				Larg1.i18=tmp1;
			}
			Larg0.i0=Lgeptoindexphi;
			L$poptgep$poptgep25$poptgepsqueezedo=Larg1.a12.a0o;
			L$poptgep$poptgep25$poptgepsqueezed=Larg1.a12.a0;
			if(L$poptgep$poptgep25$poptgepsqueezed!==nullArray||L$poptgep$poptgep25$poptgepsqueezedo!==0){
				Larg1.a12.a0=nullArray;
				Larg1.a12.a0o=0;
				return 0|0;
			}
			return 0|0;
		}
		return 0|0;
	}
	L$poptgep$poptgep25$poptgepsqueezed=Larg1.a4;
	tmp0o=L$poptgep$poptgep25$poptgepsqueezed.a0o;
	tmp0=L$poptgep$poptgep25$poptgepsqueezed.a0;
	if(tmp0===nullArray&&tmp0o===0)return 0|0;
	tmp4o=Larg1.a0o;
	tmp4=Larg1.a0;
	tmp1=(tmp4o)-(tmp0o)|0;
	Larg1.a0=tmp0;
	Larg1.a0o=tmp0o;
	if((Lgeptoindexphi&3|0)!==0){
		Lgeptoindexphi=0;
	}else{
		Lgeptoindexphi=L$poptgep$poptgep25$poptgepsqueezed.i1|0;
	}
	Larg1.i2=Lgeptoindexphi;
	if((tmp1|0)<=0)return 0|0;
	Lgeptoindexphi=0;
	while(1){
		L$poptgep$poptgep25$poptgepsqueezedo=Larg1.a7o;
		L$poptgep$poptgep25$poptgepsqueezed=Larg1.a7;
		tmp5=Larg1.a9(Larg0,L$poptgep$poptgep25$poptgepsqueezed,L$poptgep$poptgep25$poptgepsqueezedo,tmp0,tmp0o+Lgeptoindexphi|0,tmp1)|0;
		if((tmp5|0)<1){
			Larg1.i3=Larg1.i3|64;
			return  -1|0;
		}
		tmp1=tmp1-tmp5|0;
		if((tmp1|0)>0){
			Lgeptoindexphi=Lgeptoindexphi+tmp5|0;
			continue;
		}
		break;
	}
	return 0|0;
}
function __cleanup_r(Larg0){
	__fwalk_reent(Larg0,__fclose_r)|0;
}
function __fwalk_reent(Larg0,Larg1){
	var tmp0=null,Lgeptoindexphi=0,tmp2=null,tmp3=0,tmp4=0,tmp5=0;
	tmp2=Larg0.a20;
	tmp3=0;
	while(1){
		tmp4=tmp2.i1|0;
		if((tmp4|0)>0){
			tmp0=tmp2.a2;
			Lgeptoindexphi=0;
			while(1){
				tmp5=tmp0[Lgeptoindexphi].i3|0;
				if(tmp5>>>0<=4294901759)if((tmp5&65535)>=2){
					tmp5=Larg1(Larg0,tmp0[Lgeptoindexphi])|0;
					tmp3|=tmp5;
				}
				if((tmp4|0)>1){
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					tmp4=tmp4-1|0;
					continue;
				}
				break;
			}
		}
		tmp2=tmp2.a0;
		if(tmp2!==null)continue;
		break;
	}
	return tmp3|0;
}
function __fclose_r(Larg0,Larg1){
	var tmp0=null,tmp0o=0,tmp1=null,tmp1o=0,tmp2=0,tmp3=null,tmp3o=0,tmp4=0;
	if(Larg1!==null){
		if(Larg0!==null)if((Larg0.i6|0)===0)___sinit(Larg0);
		if(Larg1===___sf_fake_stdin[$__sf_fake_stdin]){
			tmp1o=Larg0.a1o;
			tmp1=Larg0.a1;
			tmp1=tmp1[tmp1o];
		}else if(Larg1===___sf_fake_stdout[$__sf_fake_stdout]){
			tmp1o=Larg0.a2o;
			tmp1=Larg0.a2;
			tmp1=tmp1[tmp1o];
		}else if(Larg1===___sf_fake_stderr[$__sf_fake_stderr]){
			tmp1o=Larg0.a3o;
			tmp1=Larg0.a3;
			tmp1=tmp1[tmp1o];
		}else{
			tmp1=Larg1;
		}
		if((tmp1.i3&65535)!==0){
			tmp2=___sflush_r(Larg0,tmp1)|0;
			tmp3=tmp1.a11;
			if(tmp3!==null){
				tmp0o=tmp1.a7o;
				tmp0=tmp1.a7;
				tmp4=tmp3(Larg0,tmp0,tmp0o)|0;
				tmp2=(tmp4|0)<0? -1|0:tmp2|0;
			}
			tmp4=tmp1.i3|0;
			tmp3o=tmp1.a12.a0o;
			tmp3=tmp1.a12.a0;
			if(tmp3!==nullArray||tmp3o!==0){
				tmp1.a12.a0=nullArray;
				tmp1.a12.a0o=0;
			}
			tmp3o=tmp1.a16.a0o;
			tmp3=tmp1.a16.a0;
			if(tmp3!==nullArray||tmp3o!==0){
				tmp1.a16.a0=nullArray;
				tmp1.a16.a0o=0;
			}
			tmp1.i3=tmp4& -65536;
			return tmp2|0;
		}
		return 0|0;
	}
	return 0|0;
}
function ___sinit(Larg0){
	var L$poptgep$poptgep2$poptgepsqueezed=null,L$poptgep$poptgep2$poptgepsqueezedo=0;
	if((Larg0.i6|0)===0){
		Larg0.a10=__cleanup_r;
		L$poptgep$poptgep2$poptgepsqueezed=Larg0.a20;
		L$poptgep$poptgep2$poptgepsqueezed.a0=null;
		L$poptgep$poptgep2$poptgepsqueezed.i1=0;
		L$poptgep$poptgep2$poptgepsqueezed.a2=nullArray;
		if(Larg0===_impure_data)Larg0.i6=1;
		L$poptgep$poptgep2$poptgepsqueezed=___sfp(Larg0);
		L$poptgep$poptgep2$poptgepsqueezedo=oSlot;
		Larg0.a1=L$poptgep$poptgep2$poptgepsqueezed;
		Larg0.a1o=L$poptgep$poptgep2$poptgepsqueezedo;
		L$poptgep$poptgep2$poptgepsqueezed=___sfp(Larg0);
		L$poptgep$poptgep2$poptgepsqueezedo=oSlot;
		Larg0.a2=L$poptgep$poptgep2$poptgepsqueezed;
		Larg0.a2o=L$poptgep$poptgep2$poptgepsqueezedo;
		L$poptgep$poptgep2$poptgepsqueezed=___sfp(Larg0);
		L$poptgep$poptgep2$poptgepsqueezedo=oSlot;
		Larg0.a3=L$poptgep$poptgep2$poptgepsqueezed;
		Larg0.a3o=L$poptgep$poptgep2$poptgepsqueezedo;
		L$poptgep$poptgep2$poptgepsqueezedo=Larg0.a1o;
		L$poptgep$poptgep2$poptgepsqueezed=Larg0.a1;
		_std(L$poptgep$poptgep2$poptgepsqueezed,L$poptgep$poptgep2$poptgepsqueezedo,4,0);
		L$poptgep$poptgep2$poptgepsqueezedo=Larg0.a2o;
		L$poptgep$poptgep2$poptgepsqueezed=Larg0.a2;
		_std(L$poptgep$poptgep2$poptgepsqueezed,L$poptgep$poptgep2$poptgepsqueezedo,9,1);
		L$poptgep$poptgep2$poptgepsqueezedo=Larg0.a3o;
		L$poptgep$poptgep2$poptgepsqueezed=Larg0.a3;
		_std(L$poptgep$poptgep2$poptgepsqueezed,L$poptgep$poptgep2$poptgepsqueezedo,17,2);
		Larg0.i6=1;
	}
}
function _std(Larg0,Marg0,Larg1,Larg2){
	var L$poptgep$poptgep5$poptgepsqueezed=null;
	Larg0[Marg0].a0=nullArray;
	Larg0[Marg0].a0o=0;
	Larg0[Marg0].i1=0;
	Larg0[Marg0].i2=0;
	Larg0[Marg0].i21=0;
	Larg0[Marg0].i3=Larg2<<16|Larg1&65535;
	L$poptgep$poptgep5$poptgepsqueezed=Larg0[Marg0].a4;
	L$poptgep$poptgep5$poptgepsqueezed.a0=nullArray;
	L$poptgep$poptgep5$poptgepsqueezed.a0o=0;
	L$poptgep$poptgep5$poptgepsqueezed.i1=0;
	Larg0[Marg0].i5=0;
	L$poptgep$poptgep5$poptgepsqueezed=Larg0[Marg0].a20;
	L$poptgep$poptgep5$poptgepsqueezed.i0=0;
	L$poptgep$poptgep5$poptgepsqueezed.i1=0;
	Larg0[Marg0].a7=Larg0;
	Larg0[Marg0].a7o=Marg0;
	Larg0[Marg0].a8=___sread;
	Larg0[Marg0].a9=___swrite;
	Larg0[Marg0].a10=___sseek;
	Larg0[Marg0].a11=___sclose;
}
function ___sclose(Larg0,Larg1,Marg1){
	return  -1|0;
}
function ___sseek(Larg0,Larg1,Marg1,Larg2,Larg3){
	Larg1[Marg1].i3=Larg1[Marg1].i3& -4097;
	return  -1|0;
}
function ___swrite(Larg0,Larg1,Marg1,Larg2,Marg2,Larg3){
	var Lgeptoindexphi2=0,tmp1=null,L$plcssa13$pi$pi$pi$pi=0,tmp3=0,L$plcssa$pi$pi$pi$pi=0,tmp5=0,tmp6=null;
	Lgeptoindexphi2=Larg1[Marg1].i3|0;
	Larg1[Marg1].i3=Lgeptoindexphi2& -4097;
	if((Lgeptoindexphi2>>16)-1>>>0<2){
		tmp1=String();
		a:if((Larg3|0)!==0){
			L$plcssa13$pi$pi$pi$pi=Larg3;
			Lgeptoindexphi2=0;
			while(1){
				L$plcssa$pi$pi$pi$pi=Larg2[Marg2+Lgeptoindexphi2|0]|0;
				if((L$plcssa$pi$pi$pi$pi&255)!==0){
					while(1){
						tmp5=L$plcssa$pi$pi$pi$pi&255;
						if(L$plcssa$pi$pi$pi$pi<<24>-16777216){
							tmp3=tmp5;
						}else if((L$plcssa$pi$pi$pi$pi&255)<192){
							tmp3=tmp5&63|tmp3<<6;
						}else if((L$plcssa$pi$pi$pi$pi&255)<224){
							tmp3=tmp5&31;
						}else if((L$plcssa$pi$pi$pi$pi&255)<240){
							tmp3=tmp5&15;
						}else{
							tmp3=tmp5&7;
						}
						L$plcssa13$pi$pi$pi$pi=L$plcssa13$pi$pi$pi$pi-1|0;
						Lgeptoindexphi2=Lgeptoindexphi2+1|0;
						if((L$plcssa13$pi$pi$pi$pi|0)!==0){
							L$plcssa$pi$pi$pi$pi=Larg2[Marg2+Lgeptoindexphi2|0]|0;
							if((L$plcssa$pi$pi$pi$pi&192)===128){
								if((L$plcssa$pi$pi$pi$pi&255)!==0)continue;
								break a;
							}
							L$plcssa$pi$pi$pi$pi=0;
						}else{
							L$plcssa$pi$pi$pi$pi=1;
							L$plcssa13$pi$pi$pi$pi=0;
						}
						break;
					}
					if(tmp3>>>0<65536){
						tmp5=tmp3;
					}else{
						tmp3=tmp3-65536|0;
						tmp6=String.fromCharCode((tmp3>>>10)+55296|0);
						tmp1=tmp1.concat(tmp6);
						tmp5=(tmp3&1023)+56320|0;
					}
					tmp6=String.fromCharCode(tmp5);
					tmp1=tmp1.concat(tmp6);
					if(!(L$plcssa$pi$pi$pi$pi))continue;
				}
				break;
			}
		}
		Lgeptoindexphi2=Larg3-1|0;
		if((Larg2[Marg2+Lgeptoindexphi2|0]&255)===10){
			tmp6=tmp1.substr(0,Lgeptoindexphi2);
			console.log(tmp6);
			return Larg3|0;
		}
		console.log(tmp1);
		return Larg3|0;
	}
	throw new Error("Abort called");
}
function ___sread(Larg0,Larg1,Marg1,Larg2,Marg2,Larg3){
	Larg1[Marg1].i3=Larg1[Marg1].i3& -4097;
	return  -1|0;
}
function ___sfp(Larg0){
	var Lgeptoindexphi=0,tmp1=null,L$pbe=null,L$pidx$pi=0,tmp4=null,L$poptgep20$poptgep24=null;
	if((_impure_data.i6|0)===0)___sinit(_impure_data);
	L$pbe=_impure_data.a20;
	while(1){
		L$pidx$pi=L$pbe.i1|0;
		if((L$pidx$pi|0)>0){
			tmp4=L$pbe.a2;
			Lgeptoindexphi=0;
			while(1){
				if((tmp4[Lgeptoindexphi].i3&65535)===0){
					tmp4[Lgeptoindexphi].i3=-65535;
					tmp4[Lgeptoindexphi].i21=0;
					tmp4[Lgeptoindexphi].a0=nullArray;
					tmp4[Lgeptoindexphi].a0o=0;
					tmp4[Lgeptoindexphi].i2=0;
					tmp4[Lgeptoindexphi].i1=0;
					L$pbe=tmp4[Lgeptoindexphi].a4;
					L$pbe.a0=nullArray;
					L$pbe.a0o=0;
					L$pbe.i1=0;
					tmp4[Lgeptoindexphi].i5=0;
					L$pbe=tmp4[Lgeptoindexphi].a20;
					L$pbe.i0=0;
					L$pbe.i1=0;
					L$pbe=tmp4[Lgeptoindexphi].a12;
					L$pbe.a0=nullArray;
					L$pbe.a0o=0;
					L$pbe.i1=0;
					L$pbe=tmp4[Lgeptoindexphi].a16;
					L$pbe.a0=nullArray;
					L$pbe.a0o=0;
					L$pbe.i1=0;
					oSlot=0+Lgeptoindexphi|0;
					return tmp4;
				}
				if((L$pidx$pi|0)>1){
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					L$pidx$pi=L$pidx$pi-1|0;
					continue;
				}
				break;
			}
		}
		tmp4=L$pbe.a0;
		a:{
			if(tmp4===null){
				tmp4={a0:null,i1:0,a2:nullArray,a3:null};
				tmp1=[new constructor_struct$p_Z7__sFILE(),new constructor_struct$p_Z7__sFILE(),new constructor_struct$p_Z7__sFILE(),new constructor_struct$p_Z7__sFILE()];
				tmp4.a3=tmp1[0];
				if(tmp4!==null){
					tmp4.a0=null;
					tmp4.i1=4;
					tmp4.a2=tmp1;
					L$pidx$pi=0;
					while(1){
						tmp1[L$pidx$pi].a0=nullArray;
						tmp1[L$pidx$pi].a0o=0;
						tmp1[L$pidx$pi].i1=0;
						tmp1[L$pidx$pi].i2=0;
						tmp1[L$pidx$pi].i3=0;
						L$poptgep20$poptgep24=tmp1[L$pidx$pi].a4;
						L$poptgep20$poptgep24.a0=nullArray;
						L$poptgep20$poptgep24.a0o=0;
						L$poptgep20$poptgep24.i1=0;
						tmp1[L$pidx$pi].i5=0;
						tmp1[L$pidx$pi].a6=null;
						tmp1[L$pidx$pi].a7=nullArray;
						tmp1[L$pidx$pi].a7o=0;
						tmp1[L$pidx$pi].a8=null;
						tmp1[L$pidx$pi].a9=null;
						tmp1[L$pidx$pi].a10=null;
						tmp1[L$pidx$pi].a11=null;
						L$poptgep20$poptgep24=tmp1[L$pidx$pi].a12;
						L$poptgep20$poptgep24.a0=nullArray;
						L$poptgep20$poptgep24.a0o=0;
						L$poptgep20$poptgep24.i1=0;
						tmp1[L$pidx$pi].a13=nullArray;
						tmp1[L$pidx$pi].a13o=0;
						tmp1[L$pidx$pi].i14=0;
						L$poptgep20$poptgep24=tmp1[L$pidx$pi].a15;
						L$poptgep20$poptgep24[0]=0;
						L$poptgep20$poptgep24[1]=0;
						L$poptgep20$poptgep24[2]=0;
						L$poptgep20$poptgep24[3]=0;
						L$poptgep20$poptgep24=tmp1[L$pidx$pi].a16;
						L$poptgep20$poptgep24.a0=nullArray;
						L$poptgep20$poptgep24.a0o=0;
						L$poptgep20$poptgep24.i1=0;
						tmp1[L$pidx$pi].i17=0;
						tmp1[L$pidx$pi].i18=0;
						tmp1[L$pidx$pi].i19=0;
						L$poptgep20$poptgep24=tmp1[L$pidx$pi].a20;
						L$poptgep20$poptgep24.i0=0;
						L$poptgep20$poptgep24.i1=0;
						tmp1[L$pidx$pi].i21=0;
						L$pidx$pi=L$pidx$pi+1|0;
						if((L$pidx$pi|0)!==4)continue;
						break;
					}
					L$pbe.a0=tmp4;
					if(tmp4!==null){
						L$pbe=tmp4;
						break a;
					}
				}else L$pbe.a0=null;
				Larg0.i0=12;
				oSlot=0;
				return nullArray;
			}
			L$pbe=tmp4;
		}
		continue;
	}
}
function __ZNSt11__stdoutbufIcE6xsputnEPKcl(Larg0,Larg1,Marg1,Larg2){
	var Lgeptoindexphi=0,tmp1=0;
	if((Larg0.i11&255)!==0)return _fwrite(Larg1,Marg1,Larg2,Larg0.a8)|0|0;
	if((Larg2|0)<=0)return 0|0;
	Lgeptoindexphi=0;
	tmp1=0;
	while(1){
		if((Larg0.a0.a14(Larg0,Larg1[Marg1+Lgeptoindexphi|0]&255)|0|0)===-1)return tmp1|0;
		tmp1=tmp1+1|0;
		if((tmp1|0)<(Larg2|0)){
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			continue;
		}
		break;
	}
	return tmp1|0;
}
function __ZNSt15basic_streambufIcSt11char_traitsIcEE9pbackfailEi(Larg0,Larg1){
	return  -1|0;
}
function __ZNSt15basic_streambufIcSt11char_traitsIcEE5uflowEv(Larg0){
	var tmp0=null,tmp0o=0;
	if((Larg0.a0.a10(Larg0)|0|0)===-1)return  -1|0;
	tmp0o=Larg0.a3o;
	tmp0=Larg0.a3;
	Larg0.a3=tmp0;
	Larg0.a3o=tmp0o+1|0;
	return tmp0[tmp0o]&255|0;
}
function __ZNSt15basic_streambufIcSt11char_traitsIcEE9underflowEv(Larg0){
	return  -1|0;
}
function __ZNSt15basic_streambufIcSt11char_traitsIcEE6xsgetnEPcl(Larg0,Larg1,Marg1,Larg2){
	var Lgeptoindexphi=0,tmp1=null,tmp1o=0,tmp2=null,tmp3=0,tmp4=0;
	if((Larg2|0)<=0)return 0|0;
	Lgeptoindexphi=0;
	tmp3=0;
	while(1){
		tmp1o=Larg0.a3o;
		tmp1=Larg0.a3;
		tmp2=Larg0.a4;
		if(tmp1o<0){
			Larg0.a3=tmp1;
			Larg0.a3o=tmp1o+1|0;
			tmp4=tmp1[tmp1o]|0;
		}else{
			tmp4=Larg0.a0.a11(Larg0)|0;
			if((tmp4|0)===-1)return tmp3|0;
		}
		Larg1[Marg1+Lgeptoindexphi|0]=tmp4;
		tmp3=tmp3+1|0;
		if((tmp3|0)<(Larg2|0)){
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			continue;
		}
		break;
	}
	return tmp3|0;
}
function __ZNSt15basic_streambufIcSt11char_traitsIcEE9showmanycEv(Larg0){
	return 0|0;
}
function __ZNSt11__stdoutbufIcE4syncEv(Larg0){
	var tmp0=null,tmp1=0,tmp2=0,tmp3=0,tmp4=null,tmp5=0,tmp6=null;
	tmp0=new Uint8Array(8);
	tmp4=[nullObj];
	tmp5=(0);
	a:while(1){
		tmp6=Larg0.a9;
		tmp1=tmp6.a0.a6(tmp6,Larg0.a10,tmp0,0,tmp0,8,tmp4,0)|0;
		tmp6=tmp4[0];
		tmp2=(tmp6.o)-tmp5|0;
		tmp3=_fwrite(tmp0,0,tmp2,Larg0.a8)|0;
		if((tmp3|0)!==(tmp2|0))return  -1|0;
		switch(tmp1|0){
			case 1:
			continue a;
			case 2:
			return  -1|0;
			default:
			tmp4=Larg0.a8;
			if(tmp4!==null){
				tmp5=__fflush_r(_impure_data,tmp4)|0;
			}else{
				tmp5=__fwalk_reent(_impure_data,__fflush_r)|0;
			}
			return ((tmp5|0)!==0?1:0)<<31>>31|0;
		}
		break;
	}
}
function __ZNSt15basic_streambufIcSt11char_traitsIcEE7seekposESt4fposI10_mbstate_tEj(Larg0,Larg1,Larg2,Larg3){
	Larg0.i0=0;
	Larg0.i1=0;
	Larg0.i2=-1;
}
function __ZNSt15basic_streambufIcSt11char_traitsIcEE7seekoffElNSt8ios_base7seekdirEj(Larg0,Larg1,Larg2,Larg3,Larg4){
	Larg0.i0=0;
	Larg0.i1=0;
	Larg0.i2=-1;
}
function __ZNSt15basic_streambufIcSt11char_traitsIcEE6setbufEPcl(Larg0,Larg1,Marg1,Larg2){
	return Larg0;
}
function __ZNSt11__stdoutbufIcE5imbueERKSt6locale(Larg0,Larg1){
	var tmp0=null;
	Larg0.a0.a7(Larg0)|0;
	tmp0=Larg1.a0.a2.a0;
	tmp0=tmp0[(__ZNSt7codecvtIcc10_mbstate_tE2idE$p1|0)-1|0];
	Larg0.a9=tmp0;
	Larg0.i11=tmp0.a0.a8(tmp0)|0?1:0;
}
function __ZNSt11__stdoutbufIcED0Ev(Larg0){
	var tmp0=null,tmp1=0;
	Larg0.a0=__ZTVSt15basic_streambufIcSt11char_traitsIcEE;
	tmp0=Larg0.a1.a0;
	tmp1=tmp0.i1|0;
	tmp0.i1=tmp1-1|0;
	if((tmp1|0)===0)tmp0.a0.a3(tmp0);
}
function __ZNSt15basic_streambufIcSt11char_traitsIcEE8overflowEi(Larg0,Larg1){
	return  -1|0;
}
function __ZNSt15basic_streambufIcSt11char_traitsIcEE6xsputnEPKcl(Larg0,Larg1,Marg1,Larg2){
	var Lgeptoindexphi=0,tmp1=null,tmp2=0,L$ppre=null,L$ppreo=0,tmp4=0,Lgeptoindexphi2=0,Lgeptoindexphi5=0;
	if((Larg2|0)<=0)return 0|0;
	Lgeptoindexphi=0;
	tmp2=0;
	while(1){
		L$ppreo=Larg0.a6o;
		L$ppre=Larg0.a6;
		tmp1=Larg0.a7;
		if(L$ppreo<0){
			tmp4=(0)-(L$ppreo)|0;
			Lgeptoindexphi2=Larg2-tmp2|0;
			tmp4=(Lgeptoindexphi2|0)<(tmp4|0)?Lgeptoindexphi2|0:tmp4|0;
			if((tmp4|0)!==0){
				Lgeptoindexphi2=Lgeptoindexphi;
				Lgeptoindexphi5=0;
				while(1){
					L$ppre[L$ppreo+Lgeptoindexphi5|0]=Larg1[Marg1+Lgeptoindexphi2|0]|0;
					Lgeptoindexphi5=Lgeptoindexphi5+1|0;
					if(L$ppre!==L$ppre||(L$ppreo+tmp4|0)!==(L$ppreo+Lgeptoindexphi5|0)){
						Lgeptoindexphi2=Lgeptoindexphi2+1|0;
						continue;
					}
					break;
				}
				L$ppreo=Larg0.a6o;
				L$ppre=Larg0.a6;
			}
			Larg0.a6=L$ppre;
			Larg0.a6o=L$ppreo+tmp4|0;
		}else{
			if((Larg0.a0.a14(Larg0,Larg1[Marg1+Lgeptoindexphi|0]&255)|0|0)===-1)return tmp2|0;
			tmp4=1;
		}
		tmp2=tmp4+tmp2|0;
		if((tmp2|0)<(Larg2|0)){
			Lgeptoindexphi=Lgeptoindexphi+tmp4|0;
			continue;
		}
		break;
	}
	return tmp2|0;
}
function __ZNSt15basic_streambufIcSt11char_traitsIcEE4syncEv(Larg0){
	return 0|0;
}
function __ZNSt15basic_streambufIcSt11char_traitsIcEE5imbueERKSt6locale(Larg0,Larg1){
}
function __ZNSt15basic_streambufIcSt11char_traitsIcEED0Ev(Larg0){
	var tmp0=null,tmp1=0;
	Larg0.a0=__ZTVSt15basic_streambufIcSt11char_traitsIcEE;
	tmp0=Larg0.a1.a0;
	tmp1=tmp0.i1|0;
	tmp0.i1=tmp1-1|0;
	if((tmp1|0)===0)tmp0.a0.a3(tmp0);
}
function __ZNSt15basic_streambufIcSt11char_traitsIcEED2Ev(Larg0){
	var tmp0=null,tmp1=0;
	Larg0.a0=__ZTVSt15basic_streambufIcSt11char_traitsIcEE;
	tmp0=Larg0.a1.a0;
	tmp1=tmp0.i1|0;
	tmp0.i1=tmp1-1|0;
	if((tmp1|0)===0)tmp0.a0.a3(tmp0);
}
function __ZNSt11__stdoutbufIcED2Ev(Larg0){
	var tmp0=null,tmp1=0;
	Larg0.a0=__ZTVSt15basic_streambufIcSt11char_traitsIcEE;
	tmp0=Larg0.a1.a0;
	tmp1=tmp0.i1|0;
	tmp0.i1=tmp1-1|0;
	if((tmp1|0)===0)tmp0.a0.a3(tmp0);
}
function __ZTv0_3_NSoD0Ev(Larg0){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0;
	tmp2=Larg0;
	tmp3=tmp2.a0.i3|0;
	tmp2=tmp2.a[tmp3];
	tmp2=tmp2.a1;
	tmp2.a0=__ZTVSt8ios_base;
	tmp3=tmp2.i10|0;
	if((tmp3|0)!==0)while(1){
		tmp0=tmp2.a8;
		tmp3=tmp3-1|0;
		tmp1=tmp2.a9;
		tmp0[tmp3](0,tmp2,tmp1[tmp3]|0);
		if((tmp3|0)!==0)continue;
		break;
	}
	tmp2=tmp2.a7.a0;
	tmp3=tmp2.i1|0;
	tmp2.i1=tmp3-1|0;
	if((tmp3|0)===0)tmp2.a0.a3(tmp2);
}
function __ZNSt8ios_baseD0Ev(Larg0){
	var tmp0=null,tmp1=0,tmp2=null;
	Larg0.a0=__ZTVSt8ios_base;
	tmp1=Larg0.i10|0;
	if((tmp1|0)!==0)while(1){
		tmp2=Larg0.a8;
		tmp1=tmp1-1|0;
		tmp0=Larg0.a9;
		tmp2[tmp1](0,Larg0,tmp0[tmp1]|0);
		if((tmp1|0)!==0)continue;
		break;
	}
	tmp2=Larg0.a7.a0;
	tmp1=tmp2.i1|0;
	tmp2.i1=tmp1-1|0;
	if((tmp1|0)===0)tmp2.a0.a3(tmp2);
}
function __ZNSt8ios_baseD2Ev(Larg0){
	var tmp0=null,tmp1=0,tmp2=null;
	Larg0.a0=__ZTVSt8ios_base;
	tmp1=Larg0.i10|0;
	if((tmp1|0)!==0)while(1){
		tmp2=Larg0.a8;
		tmp1=tmp1-1|0;
		tmp0=Larg0.a9;
		tmp2[tmp1](0,Larg0,tmp0[tmp1]|0);
		if((tmp1|0)!==0)continue;
		break;
	}
	tmp2=Larg0.a7.a0;
	tmp1=tmp2.i1|0;
	tmp2.i1=tmp1-1|0;
	if((tmp1|0)===0)tmp2.a0.a3(tmp2);
}
function __ZTv0_3_NSoD1Ev(Larg0){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0;
	tmp2=Larg0;
	tmp3=tmp2.a0.i3|0;
	tmp2=tmp2.a[tmp3];
	tmp2=tmp2.a1;
	tmp2.a0=__ZTVSt8ios_base;
	tmp3=tmp2.i10|0;
	if((tmp3|0)!==0)while(1){
		tmp0=tmp2.a8;
		tmp3=tmp3-1|0;
		tmp1=tmp2.a9;
		tmp0[tmp3](0,tmp2,tmp1[tmp3]|0);
		if((tmp3|0)!==0)continue;
		break;
	}
	tmp2=tmp2.a7.a0;
	tmp3=tmp2.i1|0;
	tmp2.i1=tmp3-1|0;
	if((tmp3|0)===0)tmp2.a0.a3(tmp2);
}
function __ZNSoD0Ev(Larg0){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0;
	tmp2=Larg0.a1;
	tmp2.a0=__ZTVSt8ios_base;
	tmp3=tmp2.i10|0;
	if((tmp3|0)!==0)while(1){
		tmp0=tmp2.a8;
		tmp3=tmp3-1|0;
		tmp1=tmp2.a9;
		tmp0[tmp3](0,tmp2,tmp1[tmp3]|0);
		if((tmp3|0)!==0)continue;
		break;
	}
	tmp2=tmp2.a7.a0;
	tmp3=tmp2.i1|0;
	tmp2.i1=tmp3-1|0;
	if((tmp3|0)===0)tmp2.a0.a3(tmp2);
}
function __ZNSoD1Ev(Larg0){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0;
	tmp2=Larg0.a1;
	tmp2.a0=__ZTVSt8ios_base;
	tmp3=tmp2.i10|0;
	if((tmp3|0)!==0)while(1){
		tmp0=tmp2.a8;
		tmp3=tmp3-1|0;
		tmp1=tmp2.a9;
		tmp0[tmp3](0,tmp2,tmp1[tmp3]|0);
		if((tmp3|0)!==0)continue;
		break;
	}
	tmp2=tmp2.a7.a0;
	tmp3=tmp2.i1|0;
	tmp2.i1=tmp3-1|0;
	if((tmp3|0)===0)tmp2.a0.a3(tmp2);
}
function __ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEli(Larg0,Larg1,Larg2,Larg3){
	var L$poptgep16$poptgep$poptgepsqueezed=null,tmp1=0,L$poptgep20$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed=null,tmp3=0,tmp4=null,L$ppre=0,Lgeptoindexphi3=0,tmp7=0,tmp8=0,tmp9=null,L$poptgep27$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed=null;
	if(Larg0===Larg1.a2){
		tmp3=Larg1.i6|0;
		if((tmp3|0)!==0){
			if((tmp3|0)===(Larg2|0)){
				if((Larg1.i8|0)===2)Larg1.i8=Larg3;
			}else{
				Larg1.i11=(Larg1.i11|0)+1|0;
				Larg1.i8=2;
				Larg1.i15=Larg1.i15&65535|65536;
			}
		}else{
			Larg1.i6=Larg2;
			Larg1.i8=Larg3;
			Larg1.i11=1;
		}
	}else{
		tmp3=Larg0.i3|0;
		L$poptgep16$poptgep$poptgepsqueezed=Larg0.a5;
		tmp4=L$poptgep16$poptgep$poptgepsqueezed[0];
		L$ppre=tmp4.i1|0;
		if((Larg2|0)===-1){
			Lgeptoindexphi3=0;
		}else if((L$ppre&1|0)!==0){
			tmp9=Larg1.a4;
			Lgeptoindexphi3=tmp9.i3|0;
			tmp7=(tmp9.i4|0)+Lgeptoindexphi3|0;
			if(Lgeptoindexphi3>>>0<tmp7>>>0){
				L$poptgep27$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed=tmp4.a0;
				while(1){
					L$poptgep20$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed=tmp9.a5[Lgeptoindexphi3];
					if(L$poptgep20$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed.a0===L$poptgep27$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed){
						Lgeptoindexphi3=L$poptgep20$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed.i1|0;
					}else{
						Lgeptoindexphi3=Lgeptoindexphi3+1|0;
						if(Lgeptoindexphi3>>>0<tmp7>>>0)continue;
						Lgeptoindexphi3=0;
					}
					break;
				}
			}else{
				Lgeptoindexphi3=0;
			}
			Lgeptoindexphi3=(1-Larg2|0)+Lgeptoindexphi3|0;
		}else{
			Lgeptoindexphi3=L$ppre>>8;
		}
		tmp4=tmp4.a0;
		tmp4.a0.a8(tmp4,Larg1,Lgeptoindexphi3+Larg2|0,(L$ppre&2|0)!==0?Larg3|0:2|0);
		if((tmp3|0)>1)if((Larg2|0)===-1){
			L$ppre=0;
			while(1){
				tmp4=L$poptgep16$poptgep$poptgepsqueezed[1+L$ppre|0].a0;
				tmp4.a0.a8(tmp4,Larg1,-1,(L$poptgep16$poptgep$poptgepsqueezed[1+L$ppre|0].i1&2|0)!==0?Larg3|0:2|0);
				if((Larg1.i15&16777215)<65536){
					L$ppre=L$ppre+1|0;
					if((1+L$ppre|0)<tmp3)continue;
				}
				break;
			}
		}else{
			L$ppre=1-Larg2|0;
			Lgeptoindexphi3=0;
			while(1){
				tmp7=L$poptgep16$poptgep$poptgepsqueezed[1+Lgeptoindexphi3|0].i1|0;
				if((tmp7&1|0)!==0){
					tmp4=Larg1.a4;
					tmp8=tmp4.i3|0;
					tmp1=(tmp4.i4|0)+tmp8|0;
					if(tmp8>>>0<tmp1>>>0){
						tmp9=L$poptgep16$poptgep$poptgepsqueezed[1+Lgeptoindexphi3|0].a0;
						while(1){
							L$poptgep27$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed=tmp4.a5[tmp8];
							if(L$poptgep27$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed.a0===tmp9){
								tmp8=L$poptgep27$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed.i1|0;
							}else{
								tmp8=tmp8+1|0;
								if(tmp8>>>0<tmp1>>>0)continue;
								tmp8=0;
							}
							break;
						}
					}else{
						tmp8=0;
					}
					tmp8=L$ppre+tmp8|0;
				}else{
					tmp8=tmp7>>8;
				}
				tmp4=L$poptgep16$poptgep$poptgepsqueezed[1+Lgeptoindexphi3|0].a0;
				tmp4.a0.a8(tmp4,Larg1,tmp8+Larg2|0,(tmp7&2|0)!==0?Larg3|0:2|0);
				if((Larg1.i15&16777215)<65536){
					Lgeptoindexphi3=Lgeptoindexphi3+1|0;
					if((1+Lgeptoindexphi3|0)<tmp3)continue;
				}
				break;
			}
		}
	}
}
function __ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoElib(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=0,L$poptgep52$poptgep53$poptgep$poptgepsqueezed$poptgepsqueezed=null,tmp2=0,L$poptgep37$poptgep40$poptgepsqueezed=null,Lgeptoindexphi7=0,Lmergedload=0,Lgeptoindexphi=0,tmp7=0,tmp8=0,tmp9=null,tmp10=0,tmp11=null,L$poptgep48$poptgep49$poptgep$poptgepsqueezed$poptgepsqueezed=null;
	a:if(Larg0===Larg1.a2){
		if((Larg1.i1|0)===(Larg2|0))if((Larg1.i9|0)!==1)Larg1.i9=Larg3;
	}else if(Larg0===Larg1.a0){
		if((Larg1.i6|0)!==(Larg2|0))if((Larg1.i7|0)!==(Larg2|0)){
			Larg1.i10=Larg3;
			if((Larg1.i13|0)===4)break a;
			tmp2=Larg0.i3|0;
			L$poptgep37$poptgep40$poptgepsqueezed=Larg0.a5;
			b:{
				c:{
					if((tmp2|0)>0){
						Lgeptoindexphi7=1-Larg2|0;
						Lmergedload=Larg1.i15|0;
						tmp8=0;
						tmp7=0;
						Lgeptoindexphi=0;
						while(1){
							Larg1.i15=Lmergedload&16711680;
							Lmergedload=L$poptgep37$poptgep40$poptgepsqueezed[Lgeptoindexphi].i1|0;
							if((Lmergedload&1|0)!==0){
								tmp9=Larg1.a4;
								tmp10=tmp9.i3|0;
								tmp0=(tmp9.i4|0)+tmp10|0;
								if(tmp10>>>0<tmp0>>>0){
									tmp11=L$poptgep37$poptgep40$poptgepsqueezed[Lgeptoindexphi].a0;
									while(1){
										L$poptgep48$poptgep49$poptgep$poptgepsqueezed$poptgepsqueezed=tmp9.a5[tmp10];
										if(L$poptgep48$poptgep49$poptgep$poptgepsqueezed$poptgepsqueezed.a0===tmp11){
											tmp10=L$poptgep48$poptgep49$poptgep$poptgepsqueezed$poptgepsqueezed.i1|0;
										}else{
											tmp10=tmp10+1|0;
											if(tmp10>>>0<tmp0>>>0)continue;
											tmp10=0;
										}
										break;
									}
								}else{
									tmp10=0;
								}
								tmp10=Lgeptoindexphi7+tmp10|0;
							}else{
								tmp10=Lmergedload>>8;
							}
							tmp9=L$poptgep37$poptgep40$poptgepsqueezed[Lgeptoindexphi].a0;
							tmp9.a0.a6(tmp9,Larg1,Larg2,tmp10+Larg2|0,2-(Lmergedload>>>1&1)|0,Larg4);
							Lmergedload=Larg1.i15|0;
							if((Lmergedload&16777215)<65536){
								if((Lmergedload&65280&16777215)!==0)if((Lmergedload&255)!==0){
									if((Larg1.i8|0)===1)break b;
									if((Larg0.i2&2|0)===0)break b;
									tmp7=1;
									tmp8=1;
								}else{
									if((Larg0.i2&1|0)===0){
										tmp8=1;
										break;
									}
									tmp8=1;
								}
								Lgeptoindexphi=Lgeptoindexphi+1|0;
								if((0+Lgeptoindexphi|0)<tmp2)continue;
							}
							break;
						}
						if((tmp7&1)!==0)break c;
					}else{
						tmp8=0;
					}
					Larg1.i7=Larg2;
					Larg1.i12=(Larg1.i12|0)+1|0;
					if((Larg1.i11|0)===1)if((Larg1.i8|0)===2)Larg1.i15=Larg1.i15&65535|65536;
				}
				if((tmp8&1)===0){
					Larg1.i13=4;
					break a;
				}
			}
			Larg1.i13=3;
			break a;
		}
		if((Larg3|0)===1)Larg1.i10=1;
	}else{
		tmp2=Larg0.i3|0;
		L$poptgep37$poptgep40$poptgepsqueezed=Larg0.a5;
		tmp9=L$poptgep37$poptgep40$poptgepsqueezed[0];
		Lgeptoindexphi7=tmp9.i1|0;
		if((Lgeptoindexphi7&1|0)!==0){
			tmp11=Larg1.a4;
			Lmergedload=tmp11.i3|0;
			Lgeptoindexphi=(tmp11.i4|0)+Lmergedload|0;
			if(Lmergedload>>>0<Lgeptoindexphi>>>0){
				L$poptgep48$poptgep49$poptgep$poptgepsqueezed$poptgepsqueezed=tmp9.a0;
				while(1){
					L$poptgep52$poptgep53$poptgep$poptgepsqueezed$poptgepsqueezed=tmp11.a5[Lmergedload];
					if(L$poptgep52$poptgep53$poptgep$poptgepsqueezed$poptgepsqueezed.a0===L$poptgep48$poptgep49$poptgep$poptgepsqueezed$poptgepsqueezed){
						Lmergedload=L$poptgep52$poptgep53$poptgep$poptgepsqueezed$poptgepsqueezed.i1|0;
					}else{
						Lmergedload=Lmergedload+1|0;
						if(Lmergedload>>>0<Lgeptoindexphi>>>0)continue;
						Lmergedload=0;
					}
					break;
				}
			}else{
				Lmergedload=0;
			}
			Lmergedload=(1-Larg2|0)+Lmergedload|0;
		}else{
			Lmergedload=Lgeptoindexphi7>>8;
		}
		tmp9=tmp9.a0;
		tmp9.a0.a7(tmp9,Larg1,Lmergedload+Larg2|0,(Lgeptoindexphi7&2|0)!==0?Larg3|0:2|0,Larg4);
		if((tmp2|0)>1){
			Lgeptoindexphi7=Larg0.i2|0;
			if((Lgeptoindexphi7&2|0)===0)if((Larg1.i11|0)!==1){
				tmp8=1-Larg2|0;
				if((Lgeptoindexphi7&1|0)!==0){
					Lgeptoindexphi7=0;
					while(1){
						if((Larg1.i15&16777215)>=65536)break a;
						if((Larg1.i11|0)===1)if((Larg1.i8|0)===1)break a;
						Lmergedload=L$poptgep37$poptgep40$poptgepsqueezed[1+Lgeptoindexphi7|0].i1|0;
						if((Lmergedload&1|0)!==0){
							tmp9=Larg1.a4;
							Lgeptoindexphi=tmp9.i3|0;
							tmp7=(tmp9.i4|0)+Lgeptoindexphi|0;
							if(Lgeptoindexphi>>>0<tmp7>>>0){
								tmp11=L$poptgep37$poptgep40$poptgepsqueezed[1+Lgeptoindexphi7|0].a0;
								while(1){
									L$poptgep48$poptgep49$poptgep$poptgepsqueezed$poptgepsqueezed=tmp9.a5[Lgeptoindexphi];
									if(L$poptgep48$poptgep49$poptgep$poptgepsqueezed$poptgepsqueezed.a0===tmp11){
										Lgeptoindexphi=L$poptgep48$poptgep49$poptgep$poptgepsqueezed$poptgepsqueezed.i1|0;
									}else{
										Lgeptoindexphi=Lgeptoindexphi+1|0;
										if(Lgeptoindexphi>>>0<tmp7>>>0)continue;
										Lgeptoindexphi=0;
									}
									break;
								}
							}else{
								Lgeptoindexphi=0;
							}
							Lgeptoindexphi=Lgeptoindexphi+tmp8|0;
						}else{
							Lgeptoindexphi=Lmergedload>>8;
						}
						tmp9=L$poptgep37$poptgep40$poptgepsqueezed[1+Lgeptoindexphi7|0].a0;
						tmp9.a0.a7(tmp9,Larg1,Lgeptoindexphi+Larg2|0,(Lmergedload&2|0)!==0?Larg3|0:2|0,Larg4);
						Lgeptoindexphi7=Lgeptoindexphi7+1|0;
						if((1+Lgeptoindexphi7|0)<tmp2)continue;
						break;
					}
					break a;
				}else{
					Lgeptoindexphi7=0;
					while(1){
						if((Larg1.i15&16777215)>=65536)break a;
						if((Larg1.i11|0)===1)break a;
						Lmergedload=L$poptgep37$poptgep40$poptgepsqueezed[1+Lgeptoindexphi7|0].i1|0;
						if((Lmergedload&1|0)!==0){
							tmp9=Larg1.a4;
							Lgeptoindexphi=tmp9.i3|0;
							tmp7=(tmp9.i4|0)+Lgeptoindexphi|0;
							if(Lgeptoindexphi>>>0<tmp7>>>0){
								tmp11=L$poptgep37$poptgep40$poptgepsqueezed[1+Lgeptoindexphi7|0].a0;
								while(1){
									L$poptgep48$poptgep49$poptgep$poptgepsqueezed$poptgepsqueezed=tmp9.a5[Lgeptoindexphi];
									if(L$poptgep48$poptgep49$poptgep$poptgepsqueezed$poptgepsqueezed.a0===tmp11){
										Lgeptoindexphi=L$poptgep48$poptgep49$poptgep$poptgepsqueezed$poptgepsqueezed.i1|0;
									}else{
										Lgeptoindexphi=Lgeptoindexphi+1|0;
										if(Lgeptoindexphi>>>0<tmp7>>>0)continue;
										Lgeptoindexphi=0;
									}
									break;
								}
							}else{
								Lgeptoindexphi=0;
							}
							Lgeptoindexphi=Lgeptoindexphi+tmp8|0;
						}else{
							Lgeptoindexphi=Lmergedload>>8;
						}
						tmp9=L$poptgep37$poptgep40$poptgepsqueezed[1+Lgeptoindexphi7|0].a0;
						tmp9.a0.a7(tmp9,Larg1,Lgeptoindexphi+Larg2|0,(Lmergedload&2|0)!==0?Larg3|0:2|0,Larg4);
						Lgeptoindexphi7=Lgeptoindexphi7+1|0;
						if((1+Lgeptoindexphi7|0)<tmp2)continue;
						break;
					}
					break a;
				}
			}
			Lgeptoindexphi7=1-Larg2|0;
			Lmergedload=0;
			while(1){
				if((Larg1.i15&16777215)<65536){
					Lgeptoindexphi=L$poptgep37$poptgep40$poptgepsqueezed[1+Lmergedload|0].i1|0;
					if((Lgeptoindexphi&1|0)!==0){
						tmp9=Larg1.a4;
						tmp7=tmp9.i3|0;
						tmp8=(tmp9.i4|0)+tmp7|0;
						if(tmp7>>>0<tmp8>>>0){
							tmp11=L$poptgep37$poptgep40$poptgepsqueezed[1+Lmergedload|0].a0;
							while(1){
								L$poptgep48$poptgep49$poptgep$poptgepsqueezed$poptgepsqueezed=tmp9.a5[tmp7];
								if(L$poptgep48$poptgep49$poptgep$poptgepsqueezed$poptgepsqueezed.a0===tmp11){
									tmp7=L$poptgep48$poptgep49$poptgep$poptgepsqueezed$poptgepsqueezed.i1|0;
								}else{
									tmp7=tmp7+1|0;
									if(tmp7>>>0<tmp8>>>0)continue;
									tmp7=0;
								}
								break;
							}
						}else{
							tmp7=0;
						}
						tmp7=Lgeptoindexphi7+tmp7|0;
					}else{
						tmp7=Lgeptoindexphi>>8;
					}
					tmp9=L$poptgep37$poptgep40$poptgepsqueezed[1+Lmergedload|0].a0;
					tmp9.a0.a7(tmp9,Larg1,tmp7+Larg2|0,(Lgeptoindexphi&2|0)!==0?Larg3|0:2|0,Larg4);
					Lmergedload=Lmergedload+1|0;
					if((1+Lmergedload|0)<tmp2)continue;
				}
				break;
			}
		}
	}
}
function __ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEllib(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var L$poptgep16$poptgep18$poptgepsqueezed=null,L$poptgep22$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed=null,tmp2=0,Lmergedload=0,tmp4=0,tmp5=null,tmp6=0,tmp7=null,Lgeptoindexphi=0,tmp9=0,L$poptgep28$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed=null,tmp11=0;
	Lmergedload=Larg1.i15|0;
	if(Larg0===Larg1.a2){
		Lmergedload=Lmergedload&16711935|256;
		Larg1.i15=Lmergedload;
		if((Larg1.i1|0)===(Larg3|0)){
			Larg1.i15=Lmergedload&16711936|1;
			Lmergedload=Larg1.i6|0;
			if((Lmergedload|0)!==0){
				if((Lmergedload|0)===(Larg2|0)){
					Lmergedload=Larg1.i8|0;
					if((Lmergedload|0)===2){
						Larg1.i8=Larg4;
						Lmergedload=Larg4;
					}
					tmp4=Larg1.i14|0;
					if((Lmergedload|0)===1)if((tmp4|0)===1)Larg1.i15=65793;
				}else{
					Larg1.i11=(Larg1.i11|0)+1|0;
					Larg1.i15=65793;
				}
			}else{
				Larg1.i6=Larg2;
				Larg1.i8=Larg4;
				Larg1.i11=1;
				Lmergedload=Larg1.i14|0;
				if((Larg4|0)===1)if((Lmergedload|0)===1)Larg1.i15=65793;
			}
		}
	}else{
		tmp4=Larg0.i3|0;
		L$poptgep16$poptgep18$poptgepsqueezed=Larg0.a5;
		Larg1.i15=Lmergedload&16711680;
		tmp5=L$poptgep16$poptgep18$poptgepsqueezed[0];
		tmp6=tmp5.i1|0;
		if((tmp6&1|0)!==0){
			tmp7=Larg1.a4;
			Lgeptoindexphi=tmp7.i3|0;
			tmp9=(tmp7.i4|0)+Lgeptoindexphi|0;
			if(Lgeptoindexphi>>>0<tmp9>>>0){
				L$poptgep28$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed=tmp5.a0;
				while(1){
					L$poptgep22$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed=tmp7.a5[Lgeptoindexphi];
					if(L$poptgep22$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed.a0===L$poptgep28$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed){
						Lgeptoindexphi=L$poptgep22$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed.i1|0;
					}else{
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						if(Lgeptoindexphi>>>0<tmp9>>>0)continue;
						Lgeptoindexphi=0;
					}
					break;
				}
			}else{
				Lgeptoindexphi=0;
			}
			Lgeptoindexphi=(1-Larg3|0)+Lgeptoindexphi|0;
		}else{
			Lgeptoindexphi=tmp6>>8;
		}
		tmp5=tmp5.a0;
		tmp5.a0.a6(tmp5,Larg1,Larg2,Lgeptoindexphi+Larg3|0,(tmp6&2|0)!==0?Larg4|0:2|0,Larg5);
		a:if((tmp4|0)>1){
			tmp6=1-Larg3|0;
			Lgeptoindexphi=0;
			while(1){
				tmp9=Larg1.i15|0;
				if((tmp9&16777215)<65536){
					if((tmp9&255)!==0){
						if((Larg1.i8|0)===1)break a;
						if((Larg0.i2&2|0)===0)break a;
					}else if((tmp9&65280&16777215)!==0)if((Larg0.i2&1|0)===0)break a;
					Larg1.i15=tmp9&16711680;
					tmp9=L$poptgep16$poptgep18$poptgepsqueezed[1+Lgeptoindexphi|0].i1|0;
					if((tmp9&1|0)!==0){
						tmp5=Larg1.a4;
						tmp11=tmp5.i3|0;
						tmp2=(tmp5.i4|0)+tmp11|0;
						if(tmp11>>>0<tmp2>>>0){
							tmp7=L$poptgep16$poptgep18$poptgepsqueezed[1+Lgeptoindexphi|0].a0;
							while(1){
								L$poptgep28$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed=tmp5.a5[tmp11];
								if(L$poptgep28$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed.a0===tmp7){
									tmp11=L$poptgep28$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed.i1|0;
								}else{
									tmp11=tmp11+1|0;
									if(tmp11>>>0<tmp2>>>0)continue;
									tmp11=0;
								}
								break;
							}
						}else{
							tmp11=0;
						}
						tmp11=tmp6+tmp11|0;
					}else{
						tmp11=tmp9>>8;
					}
					tmp5=L$poptgep16$poptgep18$poptgepsqueezed[1+Lgeptoindexphi|0].a0;
					tmp5.a0.a6(tmp5,Larg1,Larg2,tmp11+Larg3|0,(tmp9&2|0)!==0?Larg4|0:2|0,Larg5);
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					if((1+Lgeptoindexphi|0)<tmp4)continue;
				}
				break;
			}
		}
		Larg1.i15=Lmergedload&65535|Larg1.i15&16711680;
	}
}
function __ZN10__cxxabiv121__vmi_class_type_infoD0Ev(Larg0){
}
function __ZN10__cxxabiv121__vmi_class_type_infoD2Ev(Larg0){
}
function __ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEli(Larg0,Larg1,Larg2,Larg3){
	var tmp0=0,tmp1=null;
	if(Larg0===Larg1.a2){
		tmp0=Larg1.i6|0;
		if((tmp0|0)!==0){
			if((tmp0|0)===(Larg2|0)){
				if((Larg1.i8|0)===2)Larg1.i8=Larg3;
			}else{
				Larg1.i11=(Larg1.i11|0)+1|0;
				Larg1.i8=2;
				Larg1.i15=Larg1.i15&65535|65536;
			}
		}else{
			Larg1.i6=Larg2;
			Larg1.i8=Larg3;
			Larg1.i11=1;
		}
	}else{
		tmp1=Larg0.a2;
		tmp1.a0.a8(tmp1,Larg1,Larg2,Larg3);
	}
}
function __ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoElib(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=0,tmp1=0,tmp2=null;
	a:if(Larg0===Larg1.a2){
		if((Larg1.i1|0)===(Larg2|0))if((Larg1.i9|0)!==1)Larg1.i9=Larg3;
	}else if(Larg0===Larg1.a0){
		if((Larg1.i6|0)!==(Larg2|0))if((Larg1.i7|0)!==(Larg2|0)){
			Larg1.i10=Larg3;
			if((Larg1.i13|0)===4)break a;
			Larg1.i15=Larg1.i15&16711680;
			tmp2=Larg0.a2;
			tmp2.a0.a6(tmp2,Larg1,Larg2,Larg2,1,Larg4);
			tmp0=Larg1.i15|0;
			b:{
				if((tmp0&65280&16777215)!==0){
					if((tmp0&255)!==0)break b;
					tmp1=1;
				}else{
					tmp1=0;
				}
				Larg1.i7=Larg2;
				Larg1.i12=(Larg1.i12|0)+1|0;
				c:{
					if((Larg1.i11|0)===1)if((Larg1.i8|0)===2){
						Larg1.i15=tmp0&65535|65536;
						if(tmp1)break b;
						break c;
					}
					if(tmp1)break b;
				}
				Larg1.i13=4;
				break a;
			}
			Larg1.i13=3;
			break a;
		}
		if((Larg3|0)===1)Larg1.i10=1;
	}else{
		tmp2=Larg0.a2;
		tmp2.a0.a7(tmp2,Larg1,Larg2,Larg3,Larg4);
	}
}
function __ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEllib(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var tmp0=0,tmp1=null,Lmergedinsert=0;
	if(Larg0===Larg1.a2){
		Lmergedinsert=Larg1.i15&16711935|256;
		Larg1.i15=Lmergedinsert;
		if((Larg1.i1|0)===(Larg3|0)){
			Larg1.i15=Lmergedinsert&16711936|1;
			Lmergedinsert=Larg1.i6|0;
			if((Lmergedinsert|0)!==0){
				if((Lmergedinsert|0)===(Larg2|0)){
					Lmergedinsert=Larg1.i8|0;
					if((Lmergedinsert|0)===2){
						Larg1.i8=Larg4;
						Lmergedinsert=Larg4;
					}
					tmp0=Larg1.i14|0;
					if((Lmergedinsert|0)===1)if((tmp0|0)===1)Larg1.i15=65793;
				}else{
					Larg1.i11=(Larg1.i11|0)+1|0;
					Larg1.i15=65793;
				}
			}else{
				Larg1.i6=Larg2;
				Larg1.i8=Larg4;
				Larg1.i11=1;
				Lmergedinsert=Larg1.i14|0;
				if((Larg4|0)===1)if((Lmergedinsert|0)===1)Larg1.i15=65793;
			}
		}
	}else{
		tmp1=Larg0.a2;
		tmp1.a0.a6(tmp1,Larg1,Larg2,Larg3,Larg4,Larg5);
	}
}
function __ZN10__cxxabiv120__si_class_type_infoD0Ev(Larg0){
}
function __ZN10__cxxabiv120__si_class_type_infoD2Ev(Larg0){
}
function __ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEli(Larg0,Larg1,Larg2,Larg3){
	var tmp0=0;
	if(Larg0===Larg1.a2){
		tmp0=Larg1.i6|0;
		if((tmp0|0)!==0){
			if((tmp0|0)===(Larg2|0)){
				if((Larg1.i8|0)===2)Larg1.i8=Larg3;
			}else{
				Larg1.i11=(Larg1.i11|0)+1|0;
				Larg1.i8=2;
				Larg1.i15=Larg1.i15&65535|65536;
			}
		}else{
			Larg1.i6=Larg2;
			Larg1.i8=Larg3;
			Larg1.i11=1;
		}
	}
}
function __ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoElib(Larg0,Larg1,Larg2,Larg3,Larg4){
	a:if(Larg0===Larg1.a2){
		if((Larg1.i1|0)===(Larg2|0))if((Larg1.i9|0)!==1)Larg1.i9=Larg3;
	}else if(Larg0===Larg1.a0){
		if((Larg1.i6|0)!==(Larg2|0))if((Larg1.i7|0)!==(Larg2|0)){
			Larg1.i10=Larg3;
			Larg1.i7=Larg2;
			Larg1.i12=(Larg1.i12|0)+1|0;
			if((Larg1.i11|0)===1)if((Larg1.i8|0)===2)Larg1.i15=Larg1.i15&65535|65536;
			Larg1.i13=4;
			break a;
		}
		if((Larg3|0)===1)Larg1.i10=1;
	}
}
function __ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEllib(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var tmp0=0,Lmergedinsert=0;
	if(Larg0===Larg1.a2){
		Lmergedinsert=Larg1.i15&16711935|256;
		Larg1.i15=Lmergedinsert;
		if((Larg1.i1|0)===(Larg3|0)){
			Larg1.i15=Lmergedinsert&16711936|1;
			Lmergedinsert=Larg1.i6|0;
			if((Lmergedinsert|0)!==0){
				if((Lmergedinsert|0)===(Larg2|0)){
					Lmergedinsert=Larg1.i8|0;
					if((Lmergedinsert|0)===2){
						Larg1.i8=Larg4;
						Lmergedinsert=Larg4;
					}
					tmp0=Larg1.i14|0;
					if((Lmergedinsert|0)===1)if((tmp0|0)===1)Larg1.i15=65793;
				}else{
					Larg1.i11=(Larg1.i11|0)+1|0;
					Larg1.i15=65793;
				}
			}else{
				Larg1.i6=Larg2;
				Larg1.i8=Larg4;
				Larg1.i11=1;
				Lmergedinsert=Larg1.i14|0;
				if((Larg4|0)===1)if((Lmergedinsert|0)===1)Larg1.i15=65793;
			}
		}
	}
}
function __ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERl(Larg0,Larg1,Larg2,Marg2){
	var tmp0=0,tmp1=0,L$pidx$pval=null,tmp3=0,tmp4=null,tmp5=0;
	if(Larg0===Larg1)return 1|0;
	if(Larg1!==null){
		L$pidx$pval=Larg1.a0;
		tmp3=Larg1.o|0;
		L$pidx$pval=L$pidx$pval.a0;
		tmp4=new constructor_struct$p_ZN10__cxxabiv119__dynamic_cast_infoE();
		tmp4.a0=__ZTIN10__cxxabiv117__class_type_infoE;
		tmp0=tmp3+1|0;
		tmp4.i1=tmp0;
		tmp4.a2=__ZTIN10__cxxabiv116__shim_type_infoE;
		tmp4.i3=1;
		tmp4.a4=L$pidx$pval;
		tmp4.i5=0;
		tmp4.i6=0;
		tmp4.i7=0;
		tmp4.i8=0;
		tmp4.i9=0;
		tmp4.i10=0;
		tmp4.i11=0;
		tmp4.i12=0;
		tmp4.i13=0;
		tmp4.i14=0;
		tmp4.i15=0;
		a:{
			b:if(L$pidx$pval===__ZTIN10__cxxabiv117__class_type_infoE){
				tmp4.i14=1;
				L$pidx$pval.a0.a6(L$pidx$pval,tmp4,1,1,1,0);
				if((tmp4.i8|0)===1)break a;
			}else{
				L$pidx$pval.a0.a7(L$pidx$pval,tmp4,1,1,0);
				switch(tmp4.i11|0){
					case 0:
					tmp1=tmp4.i9|0;
					tmp5=tmp4.i10|0;
					tmp3=tmp4.i7|0;
					if((tmp4.i12|0)!==1)break b;
					if((tmp1|0)!==1)break b;
					if((tmp5|0)===1)break;
					break b;
					case 1:
					if((tmp4.i8|0)!==1){
						tmp3=tmp4.i9|0;
						tmp5=tmp4.i10|0;
						if((tmp4.i12|0)!==0)break b;
						if((tmp3|0)!==1)break b;
						if((tmp5|0)!==1)break b;
					}
					tmp3=tmp4.i6|0;
					break;
					default:
					break b;
				}
				if((tmp3|0)!==-2147483648){
					tmp3=tmp0-tmp3|0;
					break a;
				}
			}
			return 0|0;
		}
		a:{
			if((tmp3|0)<0){
				if((tmp3|0)===-2147483648)return 0|0;
			}else if((tmp3|0)===0){
				L$pidx$pval=Larg1;
				break a;
			}
			L$pidx$pval=Larg1.a[Larg1.o-tmp3];
		}
		if(L$pidx$pval!==null){
			tmp4=new constructor_struct$p_ZN10__cxxabiv119__dynamic_cast_infoE();
			tmp4.a0=L$pidx$pval;
			tmp4.i1=0;
			tmp4.a2=Larg0;
			tmp4.i3=0;
			tmp4.a4=Larg0;
			tmp4.i5=-1;
			tmp4.i6=0;
			tmp4.i7=0;
			tmp4.i8=0;
			tmp4.i9=0;
			tmp4.i10=0;
			tmp4.i11=0;
			tmp4.i12=0;
			tmp4.i13=0;
			tmp4.i15=0;
			tmp4.i14=1;
			L$pidx$pval.a0.a8(L$pidx$pval,tmp4,Larg2[Marg2]|0,1);
			if((tmp4.i8|0)===1){
				Larg2[Marg2]=tmp4.i6|0;
				tmp3=1;
			}else{
				tmp3=0;
			}
			return tmp3|0;
		}
		return 0|0;
	}
	return 0|0;
}
function __ZNK10__cxxabiv116__shim_type_info5noop2Ev(Larg0){
}
function __ZNK10__cxxabiv116__shim_type_info5noop1Ev(Larg0){
}
function __ZN10__cxxabiv117__class_type_infoD0Ev(Larg0){
}
function __ZN10__cxxabiv117__class_type_infoD2Ev(Larg0){
}
function __ZNSolsEi(Larg0){
	var tmp0=null,tmp1=0,tmp2=0,tmp3=null,tmp4=null,tmp5=null,tmp6=null,tmp7=null,tmp8=null;
	tmp2=__ZSt4cout.a0.i3|0;
	tmp3=__ZSt4cout.a[tmp2];
	if((tmp3.i4|0)===0){
		tmp2=__ZSt4cout.a0.i3|0;
		tmp3=__ZSt4cout.a[tmp2];
		if(tmp3.a18!==null){
			tmp2=__ZSt4cout.a0.i3|0;
			tmp3=__ZSt4cout.a[tmp2];
			__ZNSo5flushEv(tmp3.a18);
		}
		tmp2=__ZSt4cout.a0.i3|0;
		__ZSt4cout.a[tmp2];
		tmp2=__ZSt4cout.a0.i3|0;
		tmp3=__ZSt4cout.a[tmp2];
		tmp4=tmp3.a7.a0;
		tmp2=tmp4.i1|0;
		tmp3=tmp4.a2.a0;
		tmp3=tmp3[(__ZNSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE2idE$p1|0)-1|0];
		tmp4.i1=tmp2;
		if((tmp2|0)===-1)tmp4.a0.a3(tmp4);
		tmp4={a0:null};
		tmp2=__ZSt4cout.a0.i3|0;
		tmp5=__ZSt4cout.a[tmp2];
		tmp5=tmp5.a6;
		tmp2=__ZSt4cout.a0.i3|0;
		tmp0=__ZSt4cout.a[tmp2];
		tmp2=__ZSt4cout.a0.i3|0;
		tmp6=__ZSt4cout.a[tmp2];
		tmp2=tmp6.i19|0;
		if((tmp2|0)===-1){
			tmp7=tmp6.a7.a0;
			tmp7.i1=(tmp7.i1|0)+1|0;
			if((__ZNSt5ctypeIcE2idE.i0&255)!==0){
				tmp2=__ZNSt5ctypeIcE2idE.i1|0;
			}else{
				tmp2=(__ZNSt6locale2id9__next_idE|0)+1|0;
				__ZNSt6locale2id9__next_idE=tmp2;
				__ZNSt5ctypeIcE2idE.i1=tmp2;
				__ZNSt5ctypeIcE2idE.i0=1;
			}
			tmp8=tmp7.a2.a0;
			tmp8=tmp8[tmp2-1|0];
			tmp2=tmp8.a0.a8(tmp8,32)|0;
			tmp1=tmp7.i1|0;
			tmp7.i1=tmp1-1|0;
			if((tmp1|0)===0)tmp7.a0.a3(tmp7);
			tmp2=tmp2<<24>>24;
			tmp6.i19=tmp2;
		}
		tmp6=tmp3.a0.a5;
		tmp7={a0:null};
		tmp7.a0=tmp5;
		tmp6(tmp4,tmp3,tmp7,tmp0,tmp2,Larg0);
		tmp3=tmp4.a0;
		if(tmp3===null){
			tmp2=__ZSt4cout.a0.i3|0;
			tmp3=__ZSt4cout.a[tmp2];
			tmp3.i4=tmp3.i4|5;
		}
	}
	tmp2=__ZSt4cout.a0.i3|0;
	tmp3=__ZSt4cout.a[tmp2];
	if(tmp3.a6!==null){
		tmp2=__ZSt4cout.a0.i3|0;
		tmp3=__ZSt4cout.a[tmp2];
		if((tmp3.i4|0)===0){
			tmp2=__ZSt4cout.a0.i3|0;
			tmp3=__ZSt4cout.a[tmp2];
			if((tmp3.i1&8192|0)!==0){
				tmp2=__ZSt4cout.a0.i3|0;
				tmp3=__ZSt4cout.a[tmp2];
				tmp3=tmp3.a6;
				if((tmp3.a0.a7(tmp3)|0|0)===-1){
					tmp2=__ZSt4cout.a0.i3|0;
					tmp3=__ZSt4cout.a[tmp2];
					tmp3.i4=tmp3.i4|1;
				}
			}
		}
	}
}
function __ZSt24__put_character_sequenceIcSt11char_traitsIcEERSt13basic_ostreamIT_T0_ES6_PKS3_j(Larg0,Marg0,Larg1){
	var L$pidx$pval=null,tmp1=0,Lgeptoindexphi=0,tmp3=null,tmp4=null,tmp5=null,tmp6=0,tmp7=null,tmp8=null;
	Lgeptoindexphi=__ZSt4cout.a0.i3|0;
	tmp3=__ZSt4cout.a[Lgeptoindexphi];
	if((tmp3.i4|0)===0){
		Lgeptoindexphi=__ZSt4cout.a0.i3|0;
		tmp3=__ZSt4cout.a[Lgeptoindexphi];
		if(tmp3.a18!==null){
			Lgeptoindexphi=__ZSt4cout.a0.i3|0;
			tmp3=__ZSt4cout.a[Lgeptoindexphi];
			__ZNSo5flushEv(tmp3.a18);
		}
		tmp3={a0:null};
		Lgeptoindexphi=__ZSt4cout.a0.i3|0;
		tmp4=__ZSt4cout.a[Lgeptoindexphi];
		tmp4=tmp4.a6;
		Lgeptoindexphi=__ZSt4cout.a0.i3|0;
		tmp5=__ZSt4cout.a[Lgeptoindexphi];
		if((tmp5.i1&176|0)===32){
			Lgeptoindexphi=Larg1;
		}else{
			Lgeptoindexphi=0;
		}
		tmp6=__ZSt4cout.a0.i3|0;
		tmp5=__ZSt4cout.a[tmp6];
		tmp6=__ZSt4cout.a0.i3|0;
		tmp7=__ZSt4cout.a[tmp6];
		tmp6=tmp7.i19|0;
		if((tmp6|0)===-1){
			L$pidx$pval=tmp7.a7.a0;
			L$pidx$pval.i1=(L$pidx$pval.i1|0)+1|0;
			if((__ZNSt5ctypeIcE2idE.i0&255)!==0){
				tmp6=__ZNSt5ctypeIcE2idE.i1|0;
			}else{
				tmp6=(__ZNSt6locale2id9__next_idE|0)+1|0;
				__ZNSt6locale2id9__next_idE=tmp6;
				__ZNSt5ctypeIcE2idE.i1=tmp6;
				__ZNSt5ctypeIcE2idE.i0=1;
			}
			tmp8=L$pidx$pval.a2.a0;
			tmp8=tmp8[tmp6-1|0];
			tmp6=tmp8.a0.a8(tmp8,32)|0;
			tmp1=L$pidx$pval.i1|0;
			L$pidx$pval.i1=tmp1-1|0;
			if((tmp1|0)===0)L$pidx$pval.a0.a3(L$pidx$pval);
			tmp6=tmp6<<24>>24;
			tmp7.i19=tmp6;
		}
		tmp7={a0:null};
		tmp7.a0=tmp4;
		__ZSt16__pad_and_outputIcSt11char_traitsIcEESt19ostreambuf_iteratorIT_T0_ES5_PKS3_S7_S7_RSt8ios_baseS3_(tmp3,tmp7,Larg0,Marg0,Larg0,Marg0+Lgeptoindexphi|0,Larg0,Marg0+Larg1|0,tmp5,tmp6);
		tmp4=tmp3.a0;
		if(tmp4===null){
			Lgeptoindexphi=__ZSt4cout.a0.i3|0;
			tmp3=__ZSt4cout.a[Lgeptoindexphi];
			tmp3.i4=tmp3.i4|5;
		}
	}
	Lgeptoindexphi=__ZSt4cout.a0.i3|0;
	tmp3=__ZSt4cout.a[Lgeptoindexphi];
	if(tmp3.a6!==null){
		Lgeptoindexphi=__ZSt4cout.a0.i3|0;
		tmp3=__ZSt4cout.a[Lgeptoindexphi];
		if((tmp3.i4|0)===0){
			Lgeptoindexphi=__ZSt4cout.a0.i3|0;
			tmp3=__ZSt4cout.a[Lgeptoindexphi];
			if((tmp3.i1&8192|0)!==0){
				Lgeptoindexphi=__ZSt4cout.a0.i3|0;
				tmp3=__ZSt4cout.a[Lgeptoindexphi];
				tmp3=tmp3.a6;
				if((tmp3.a0.a7(tmp3)|0|0)===-1){
					Lgeptoindexphi=__ZSt4cout.a0.i3|0;
					tmp3=__ZSt4cout.a[Lgeptoindexphi];
					tmp3.i4=tmp3.i4|1;
				}
			}
		}
	}
}
function __ZN10maxiSample9normaliseEd(Larg0,Larg1){
	var tmp0=0,tmp1=-0.,tmp2=null,tmp3=-0.;
	if( +Larg0.a8.length>0){
		tmp1=0;
		tmp0=0;
		while(1){
			tmp2=Larg0.a8;
			tmp3=+tmp2[0+tmp0|0];
			tmp3=+Math.abs(tmp3);
			if(tmp3>tmp1){
				tmp1=tmp3;
			}
			tmp0=tmp0+1|0;
			if( +tmp2.length>(+(tmp0|0)))continue;
			break;
		}
	}else{
		tmp1=0;
	}
	if( +Larg0.a8.length>0){
		tmp1=Larg1/tmp1;
		tmp0=0;
		while(1){
			tmp2=Larg0.a8;
			tmp2[0+tmp0|0]=+Math.round( +tmp2[0+tmp0|0]*tmp1);
			tmp0=tmp0+1|0;
			if( +tmp2.length>(+(tmp0|0)))continue;
			break;
		}
	}
}
function __ZN10maxiSample16playUntilAtSpeedEdd(Larg0,Larg1,Larg2){
	var tmp0=null,tmp1=0,tmp2=-0.,tmp3=-0.,tmp4=-0.,tmp5=-0.;
	tmp2=+Larg0.d0;
	tmp3=(+(~~tmp2|0));
	tmp2-=tmp3;
	if(Larg1>1){
		tmp4=1;
	}else{
		tmp4=Larg1;
	}
	if(tmp4* +Larg0.a8.length>tmp3){
		tmp0=Larg0.a8;
		tmp4=+Larg0.d0;
		tmp1=~~tmp4;
		tmp5=+tmp0[0+(tmp1+1|0)|0];
		tmp3=+tmp0[0+(tmp1+2|0)|0];
		tmp5=(1-tmp2)*tmp5+tmp2*tmp3;
	}else{
		tmp4=+Larg0.d0;
		tmp5=0;
	}
	Larg0.d3=tmp5;
	Larg0.d0=tmp4+Larg2/(+((__ZN12maxiSettings10sampleRateE|0)/(Larg0.i6|0)|0));
	return tmp5;
}
function __ZN10maxiSample14loopSetPosOnZXEdd(Larg0,Larg1,Larg2){
	var L$poptgep$poptgep1$poptgepsqueezed=null,tmp1=-0.,tmp2=0;
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a7;
	a:{
		b:{
			if( +L$poptgep$poptgep1$poptgepsqueezed.d0<=0){
				if(!(Larg1>0))break b;
			}else{
				tmp2=L$poptgep$poptgep1$poptgepsqueezed.i1|0;
				if(!(Larg1>0))break b;
				if((tmp2&255)===0)break b;
			}
			L$poptgep$poptgep1$poptgepsqueezed.d0=Larg1;
			L$poptgep$poptgep1$poptgepsqueezed.i1=0;
			if(Larg2>1){
				tmp1=1;
			}else if(Larg2<0){
				tmp1=0;
			}else{
				tmp1=Larg2;
			}
			tmp1*= +Larg0.a8.length;
			Larg0.d0=tmp1;
			break a;
		}
		L$poptgep$poptgep1$poptgepsqueezed.d0=Larg1;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		tmp1=+Larg0.d0;
	}
	tmp1+=1;
	Larg0.d0=tmp1;
	if( +Larg0.a8.length<=(+(~~tmp1|0))){
		Larg0.d0=0;
		tmp2=0;
	}else{
		tmp1=+Larg0.d0;
		tmp2=~~tmp1;
	}
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a8;
	tmp1=+L$poptgep$poptgep1$poptgepsqueezed[0+tmp2|0];
	Larg0.d3=tmp1;
	return tmp1;
}
function __ZN10maxiSample28playOnZXAtSpeedBetweenPointsEdddd(Larg0,Larg1,Larg2,Larg3,Larg4){
	var L$poptgep$poptgep1$poptgepsqueezed=null,tmp1=-0.,tmp2=-0.,tmp3=-0.,tmp4=0,tmp5=-0.;
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a7;
	a:{
		b:{
			if( +L$poptgep$poptgep1$poptgepsqueezed.d0<=0){
				if(!(Larg1>0))break b;
			}else{
				tmp4=L$poptgep$poptgep1$poptgepsqueezed.i1|0;
				if(!(Larg1>0))break b;
				if((tmp4&255)===0)break b;
			}
			L$poptgep$poptgep1$poptgepsqueezed.d0=Larg1;
			L$poptgep$poptgep1$poptgepsqueezed.i1=0;
			Larg0.d0=0;
			Larg0.d1=0;
			tmp1= +Larg0.a8.length*Larg3;
			Larg0.d0=tmp1;
			break a;
		}
		L$poptgep$poptgep1$poptgepsqueezed.d0=Larg1;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		tmp1=+Larg0.d0;
	}
	tmp2=(+(~~tmp1|0));
	tmp1-=tmp2;
	tmp3=Larg3+Larg4;
	if(tmp3>1){
		tmp3=1;
	}
	if(tmp3* +Larg0.a8.length>tmp2){
		L$poptgep$poptgep1$poptgepsqueezed=Larg0.a8;
		tmp3=+Larg0.d0;
		tmp4=~~tmp3;
		tmp5=+L$poptgep$poptgep1$poptgepsqueezed[0+(tmp4+1|0)|0];
		tmp2=+L$poptgep$poptgep1$poptgepsqueezed[0+(tmp4+2|0)|0];
		tmp5=(1-tmp1)*tmp5+tmp1*tmp2;
	}else{
		tmp3=+Larg0.d0;
		tmp5=0;
	}
	Larg0.d3=tmp5;
	Larg0.d0=tmp3+Larg2/(+((__ZN12maxiSettings10sampleRateE|0)/(Larg0.i6|0)|0));
	return tmp5;
}
function __ZN10maxiSample25playOnZXAtSpeedFromOffsetEddd(Larg0,Larg1,Larg2,Larg3){
	var tmp0=-0.,tmp1=-0.,L$poptgep$poptgep1$poptgepsqueezed=null,tmp3=-0.,tmp4=0,tmp5=-0.;
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a7;
	a:{
		b:{
			if( +L$poptgep$poptgep1$poptgepsqueezed.d0<=0){
				if(!(Larg1>0))break b;
			}else{
				tmp4=L$poptgep$poptgep1$poptgepsqueezed.i1|0;
				if(!(Larg1>0))break b;
				if((tmp4&255)===0)break b;
			}
			L$poptgep$poptgep1$poptgepsqueezed.d0=Larg1;
			L$poptgep$poptgep1$poptgepsqueezed.i1=0;
			Larg0.d0=0;
			Larg0.d1=0;
			tmp3= +Larg0.a8.length*Larg3;
			Larg0.d0=tmp3;
			break a;
		}
		L$poptgep$poptgep1$poptgepsqueezed.d0=Larg1;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		tmp3=+Larg0.d0;
	}
	tmp4=~~tmp3;
	tmp3-=(+(tmp4|0));
	if( +Larg0.a8.length>(+(tmp4+1|0))){
		L$poptgep$poptgep1$poptgepsqueezed=Larg0.a8;
		tmp5=+Larg0.d0;
		tmp4=~~tmp5;
		tmp0=+L$poptgep$poptgep1$poptgepsqueezed[0+tmp4|0];
		tmp1=+L$poptgep$poptgep1$poptgepsqueezed[0+(tmp4+1|0)|0];
		tmp3=(1-tmp3)*tmp0+tmp3*tmp1;
	}else{
		tmp5=+Larg0.d0;
		tmp3=0;
	}
	Larg0.d3=tmp3;
	Larg0.d0=tmp5+Larg2/(+((__ZN12maxiSettings10sampleRateE|0)/(Larg0.i6|0)|0));
	return tmp3;
}
function __ZN10maxiSample15playOnZXAtSpeedEdd(Larg0,Larg1,Larg2){
	var tmp0=-0.,tmp1=-0.,L$poptgep$poptgep1$poptgepsqueezed=null,tmp3=-0.,tmp4=0,tmp5=-0.;
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a7;
	a:{
		b:{
			if( +L$poptgep$poptgep1$poptgepsqueezed.d0<=0){
				if(!(Larg1>0))break b;
			}else{
				tmp4=L$poptgep$poptgep1$poptgepsqueezed.i1|0;
				if(!(Larg1>0))break b;
				if((tmp4&255)===0)break b;
			}
			L$poptgep$poptgep1$poptgepsqueezed.d0=Larg1;
			L$poptgep$poptgep1$poptgepsqueezed.i1=0;
			Larg0.d0=0;
			Larg0.d1=0;
			tmp3=0;
			break a;
		}
		L$poptgep$poptgep1$poptgepsqueezed.d0=Larg1;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		tmp3=+Larg0.d0;
	}
	tmp4=~~tmp3;
	tmp3-=(+(tmp4|0));
	if( +Larg0.a8.length>(+(tmp4+1|0))){
		L$poptgep$poptgep1$poptgepsqueezed=Larg0.a8;
		tmp5=+Larg0.d0;
		tmp4=~~tmp5;
		tmp0=+L$poptgep$poptgep1$poptgepsqueezed[0+tmp4|0];
		tmp1=+L$poptgep$poptgep1$poptgepsqueezed[0+(tmp4+1|0)|0];
		tmp3=(1-tmp3)*tmp0+tmp3*tmp1;
	}else{
		tmp5=+Larg0.d0;
		tmp3=0;
	}
	Larg0.d3=tmp3;
	Larg0.d0=tmp5+Larg2/(+((__ZN12maxiSettings10sampleRateE|0)/(Larg0.i6|0)|0));
	return tmp3;
}
function __ZN10maxiSample8playOnZXEd(Larg0,Larg1){
	var tmp0=-0.,tmp1=0,L$poptgep$poptgep1$poptgepsqueezed=null,tmp3=-0.;
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a7;
	a:{
		b:{
			if( +L$poptgep$poptgep1$poptgepsqueezed.d0<=0){
				if(!(Larg1>0))break b;
			}else{
				tmp1=L$poptgep$poptgep1$poptgepsqueezed.i1|0;
				if(!(Larg1>0))break b;
				if((tmp1&255)===0)break b;
			}
			L$poptgep$poptgep1$poptgepsqueezed.d0=Larg1;
			L$poptgep$poptgep1$poptgepsqueezed.i1=0;
			Larg0.d0=0;
			Larg0.d1=0;
			tmp3=0;
			break a;
		}
		L$poptgep$poptgep1$poptgepsqueezed.d0=Larg1;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		tmp3=+Larg0.d0;
		tmp3=(+(~~tmp3|0));
	}
	if( +Larg0.a8.length>tmp3){
		L$poptgep$poptgep1$poptgepsqueezed=Larg0.a8;
		tmp3=+Larg0.d0;
		tmp0=+L$poptgep$poptgep1$poptgepsqueezed[0+~~tmp3|0];
	}else{
		tmp3=+Larg0.d0;
		tmp0=0;
	}
	Larg0.d3=tmp0;
	Larg0.d0=tmp3+1;
	return tmp0;
}
function __ZN10maxiSample15playOnceAtSpeedEd(Larg0,Larg1){
	var tmp0=null,tmp1=-0.,tmp2=-0.,tmp3=-0.,tmp4=0,tmp5=-0.;
	tmp3=+Larg0.d0;
	tmp4=~~tmp3;
	tmp3-=(+(tmp4|0));
	if( +Larg0.a8.length>(+(tmp4+1|0))){
		tmp0=Larg0.a8;
		tmp5=+Larg0.d0;
		tmp4=~~tmp5;
		tmp1=+tmp0[0+tmp4|0];
		tmp2=+tmp0[0+(tmp4+1|0)|0];
		tmp3=(1-tmp3)*tmp1+tmp3*tmp2;
	}else{
		tmp5=+Larg0.d0;
		tmp3=0;
	}
	Larg0.d3=tmp3;
	Larg0.d0=tmp5+Larg1/(+((__ZN12maxiSettings10sampleRateE|0)/(Larg0.i6|0)|0));
	return tmp3;
}
function __ZN10maxiSample8playOnceEv(Larg0){
	var tmp0=null,tmp1=-0.,tmp2=-0.;
	tmp2=+Larg0.d0;
	if( +Larg0.a8.length>(+(~~tmp2|0))){
		tmp0=Larg0.a8;
		tmp2=+Larg0.d0;
		tmp1=+tmp0[0+~~tmp2|0];
	}else{
		tmp2=+Larg0.d0;
		tmp1=0;
	}
	Larg0.d3=tmp1;
	Larg0.d0=tmp2+1;
	return tmp1;
}
function __ZN10maxiSample9playUntilEd(Larg0,Larg1){
	var tmp0=-0.,tmp1=null,tmp2=-0.;
	tmp2= +Larg0.d0+1;
	Larg0.d0=tmp2;
	if(Larg1>1){
		tmp0=1;
	}else{
		tmp0=Larg1;
	}
	if(tmp0* +Larg0.a8.length>(+(~~tmp2|0))){
		tmp1=Larg0.a8;
		tmp2=+tmp1[0+~~ +Larg0.d0|0];
		Larg0.d3=tmp2;
		return tmp2;
	}
	Larg0.d3=0;
	return 0;
}
function __ZN10maxiSample8playLoopEdd(Larg0,Larg1,Larg2){
	var tmp0=-0.,tmp1=null,tmp2=-0.,tmp3=-0.,tmp4=0;
	Larg0.d0= +Larg0.d0+1;
	tmp2=+Larg0.a8.length;
	tmp3=+Larg0.d0;
	tmp0=tmp2*Larg1;
	if(tmp3<tmp0){
		Larg0.d0=tmp0;
		tmp3=tmp0;
	}
	tmp4=~~tmp3;
	if(tmp2*Larg2<=(+(tmp4|0))){
		Larg0.d0=tmp0;
		tmp4=~~tmp0;
	}
	tmp1=Larg0.a8;
	tmp2=+tmp1[0+tmp4|0];
	Larg0.d3=tmp2;
	return tmp2;
}
function __ZN10maxiSample5play4Eddd(Larg0,Larg1,Larg2,Larg3){
	var tmp0=-0.,tmp1=-0.,tmp2=-0.,L$pmux=-0.,tmp4=null,tmp5=0,tmp6=-0.,tmp7=0,tmp8=-0.;
	tmp1=+Larg0.d0;
	if(Larg1>0){
		if(tmp1<Larg2){
			tmp2=Larg2;
		}else{
			tmp2=tmp1;
		}
		L$pmux=tmp2>=Larg3?Larg2:tmp2;
		a:{
			if(!(tmp2>=Larg3))if(!(tmp1<Larg2))break a;
			Larg0.d0=L$pmux;
			tmp2=L$pmux;
		}
		tmp2+=((Larg3-Larg2)/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1));
		Larg0.d0=tmp2;
		L$pmux=+Math.floor(tmp2);
		tmp1=tmp2-L$pmux;
		tmp4=Larg0.a8;
		if(tmp2>0){
			tmp5=~~L$pmux-1|0;
		}else{
			tmp5=0;
		}
		L$pmux=+tmp4[0+tmp5|0];
		tmp5=~~tmp2;
		tmp6=+tmp4[0+tmp5|0];
		if(tmp2<Larg3+-2){
			tmp7=tmp5+1|0;
		}else{
			tmp7=0;
		}
		tmp8=+tmp4[0+tmp7|0];
		if(tmp2<Larg3+-3){
			tmp5=tmp5+2|0;
		}else{
			tmp5=0;
		}
		tmp2=+tmp4[0+tmp5|0];
		tmp6+=(tmp1*((tmp8-L$pmux)*.5+tmp1*(L$pmux-tmp6*2.5+tmp8*2-tmp2*.5+tmp1*((tmp6-tmp8)*1.5+(tmp2-L$pmux)*.5))));
		Larg0.d3=tmp6;
		return tmp6;
	}
	if(tmp1<=Larg2){
		Larg0.d0=Larg3;
		tmp1=Larg3;
	}
	tmp1-=((Larg3-Larg2)/((+(__ZN12maxiSettings10sampleRateE|0))/(-Larg1)));
	Larg0.d0=tmp1;
	tmp2=+Math.floor(tmp1);
	tmp8=tmp1-tmp2;
	tmp4=Larg0.a8;
	tmp5=~~tmp1;
	tmp0=+tmp4[0+(tmp1>Larg2&&tmp1<Larg3+-1?tmp5+1|0:0|0)|0];
	L$pmux=+tmp4[0+tmp5|0];
	if(tmp1>Larg2){
		tmp7=tmp5-1|0;
	}else{
		tmp7=0;
	}
	tmp6=+tmp4[0+tmp7|0];
	if(tmp1>Larg2+1){
		tmp5=tmp5-2|0;
	}else{
		tmp5=0;
	}
	tmp1=+tmp4[0+tmp5|0];
	tmp2=-tmp8;
	L$pmux+=(((tmp6-tmp0)*.5+(tmp0-L$pmux*2.5+tmp6*2-tmp1*.5+tmp8*((L$pmux-tmp6)*1.5+(tmp1-tmp0)*.5))*tmp2)*tmp2);
	Larg0.d3=L$pmux;
	return L$pmux;
}
function __ZN10maxiSample31playAtSpeedBetweenPointsFromPosEdddd(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=0,tmp1=0,tmp2=0,tmp3=0,tmp4=-0.,tmp5=-0.,tmp6=null;
	tmp3=~~ +Larg0.a8.length;
	if((+(tmp3>>>0))<=Larg3){
		tmp4=(+(tmp3-1>>>0));
	}else{
		tmp4=Larg3;
	}
	if(Larg1>0){
		if(Larg4<Larg2){
			tmp5=Larg2;
		}else{
			tmp5=Larg4;
		}
		if(tmp5>=tmp4){
			tmp5=Larg2;
		}
		tmp5+=((tmp4-Larg2)/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1));
		tmp4=+Math.floor(tmp5);
		tmp5-=tmp4;
		tmp0=~~tmp4;
		tmp1=tmp0+1|0;
		tmp2=tmp0+2|0;
		tmp6=Larg0.a8;
		tmp4= +tmp6[0+(tmp2>>>0<tmp3>>>0?tmp2|0:tmp3-1|0)|0]*tmp5+ +tmp6[0+(tmp1>>>0<tmp3>>>0?tmp1|0:tmp0-1|0)|0]*(1-tmp5);
		Larg0.d3=tmp4;
		return tmp4;
	}
	if(Larg4<=Larg2){
		tmp5=tmp4;
	}else{
		tmp5=Larg4;
	}
	tmp5-=((tmp4-Larg2)/((+(__ZN12maxiSettings10sampleRateE|0))/(-Larg1)));
	tmp4=+Math.floor(tmp5);
	tmp5-=tmp4;
	tmp3=~~tmp4;
	tmp6=Larg0.a8;
	tmp4= +tmp6[0+((tmp3|0)>1?tmp3-2|0:0|0)|0]*tmp5+ +tmp6[0+((tmp3|0)>0?tmp3-1|0:0|0)|0]*(-1-tmp5);
	Larg0.d3=tmp4;
	return tmp4;
}
function __ZN10maxiSample24playAtSpeedBetweenPointsEddd(Larg0,Larg1,Larg2,Larg3){
	return +__ZN10maxiSample31playAtSpeedBetweenPointsFromPosEdddd(Larg0,Larg1,Larg2,Larg3,+Larg0.d0);
}
function __ZN10maxiSample11setPositionEd(Larg0,Larg1){
	var tmp0=-0.;
	if(Larg1>1){
		tmp0=1;
	}else if(Larg1<0){
		tmp0=0;
	}else{
		tmp0=Larg1;
	}
	Larg0.d0=tmp0* +Larg0.a8.length;
}
function __ZN10maxiSample4playEv(Larg0){
	var tmp0=0,tmp1=null,tmp2=-0.;
	tmp2= +Larg0.d0+1;
	Larg0.d0=tmp2;
	if( +Larg0.a8.length<=(+(~~tmp2|0))){
		Larg0.d0=0;
		tmp0=0;
	}else{
		tmp2=+Larg0.d0;
		tmp0=~~tmp2;
	}
	tmp1=Larg0.a8;
	tmp2=+tmp1[0+tmp0|0];
	Larg0.d3=tmp2;
	return tmp2;
}
function __ZN10maxiSample7triggerEv(Larg0){
	Larg0.d0=0;
	Larg0.d1=0;
}
function __ZN10maxiSampleC1Ev(Larg0){
	var L$poptgep$poptgep2$poptgepsqueezed=null;
	Larg0.d0=0;
	Larg0.d1=0;
	L$poptgep$poptgep2$poptgepsqueezed=Larg0.a4;
	L$poptgep$poptgep2$poptgepsqueezed.d0=.5;
	L$poptgep$poptgep2$poptgepsqueezed.d1=.5;
	L$poptgep$poptgep2$poptgepsqueezed.d2=0;
	Larg0.i5=Larg0.i5& -65536|1;
	Larg0.i6=__ZN12maxiSettings10sampleRateE|0;
	L$poptgep$poptgep2$poptgepsqueezed=Larg0.a7;
	L$poptgep$poptgep2$poptgepsqueezed.d0=1;
	L$poptgep$poptgep2$poptgepsqueezed.i1=1;
	Larg0.a8=new Float64Array(1);
}
function __ZN10maxiSample5resetEv(Larg0){
	Larg0.d0=0;
}
function __ZN10maxiSample10loopRecordEdbddd(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var tmp0=null,L$poptgep$poptgep$poptgepsqueezed=null,tmp2=-0.;
	L$poptgep$poptgep$poptgepsqueezed=Larg0.a4;
	L$poptgep$poptgep$poptgepsqueezed.d2= +L$poptgep$poptgep$poptgepsqueezed.d0*(+(Larg2&1))+ +L$poptgep$poptgep$poptgepsqueezed.d1* +L$poptgep$poptgep$poptgepsqueezed.d2;
	tmp2=+Larg0.d1;
	if(tmp2< +Larg0.a8.length*Larg4)Larg0.d1= +Larg0.a8.length*Larg4;
	if(Larg2){
		tmp0=Larg0.a8;
		L$poptgep$poptgep$poptgepsqueezed=new Float64Array( +L$poptgep$poptgep$poptgepsqueezed.d2*((1-Larg3)*Larg1+ +tmp0[0+~~ +Larg0.d1|0]/32767*Larg3)*32767);
	}
	tmp2= +Larg0.d1+1;
	Larg0.d1=tmp2;
	if(tmp2>= +Larg0.a8.length*Larg5)Larg0.d1= +Larg0.a8.length*Larg4;
}
function __ZN10maxiSample5clearEv(Larg0){
	Larg0.a8.fill(0);
}
function __ZN10maxiSample16setSampleAndRateEPN6client12Float64ArrayEi(Larg0,Larg1,Larg2){
	var tmp0=null;
	tmp0=new Float64Array(Larg1);
	Larg0.a8=tmp0;
	Larg0.i6=44100;
	Larg0.d0= +tmp0.length+-1;
	Larg0.i6=Larg2;
}
function __ZN10maxiSample9setSampleEPN6client12Float64ArrayE(Larg0,Larg1){
	var tmp0=null;
	tmp0=new Float64Array(Larg1);
	Larg0.a8=tmp0;
	Larg0.i6=44100;
	Larg0.d0= +tmp0.length+-1;
}
function __ZN10maxiSample7isReadyEv(Larg0){
	return ( +Larg0.a8.length>1?1:0)|0;
}
function __ZN10maxiSample9getLengthEv(Larg0){
	return ~~ +Larg0.a8.length|0;
}
function __ZN11maxiTriggerC1Ev(Larg0){
	Larg0.d0=1;
	Larg0.i1=1;
}
function __ZN11maxiTrigger9onChangedEdd(Larg0,Larg1,Larg2){
	var tmp0=-0.;
	tmp0=+Larg0.d0;
	tmp0=+Math.abs(Larg1-tmp0);
	if(tmp0>Larg2){
		Larg0.d0=Larg1;
		return 1;
	}
	Larg0.d0=Larg1;
	return 0;
}
function __ZN11maxiTrigger4onZXEd(Larg0,Larg1){
	var tmp0=0;
	if( +Larg0.d0<=0){
		if(!(Larg1>0)){
			Larg0.d0=Larg1;
			Larg0.i1=0;
			return 0;
		}
	}else{
		tmp0=Larg0.i1|0;
		if(!(Larg1>0)){
			Larg0.d0=Larg1;
			Larg0.i1=0;
			return 0;
		}
		if((tmp0&255)===0){
			Larg0.d0=Larg1;
			Larg0.i1=0;
			return 0;
		}
	}
	Larg0.d0=Larg1;
	Larg0.i1=0;
	return 1;
}
function __ZN10maxiFilterC1Ev(Larg0){
	Larg0.d5=0;
	Larg0.d6=0;
	Larg0.d7=0;
	Larg0.d8=0;
}
function __ZN10maxiFilter8bandpassEddd(Larg0,Larg1,Larg2,Larg3){
	var L$poptgep$poptgep2$poptgepsqueezed=null,tmp1=-0.,tmp2=-0.,tmp3=-0.,tmp4=-0.;
	Larg0.d9=Larg2;
	tmp1=(+(__ZN12maxiSettings10sampleRateE|0));
	tmp2=tmp1*.5;
	if(tmp2<Larg2)Larg0.d9=tmp2;
	else{
		tmp2=Larg2;
	}
	if(Larg3>=1){
		tmp3=.99999899999999997;
	}else{
		tmp3=Larg3;
	}
	tmp2=+Math.cos(tmp2*6.2831853071795862/tmp1);
	Larg0.d7=tmp2;
	tmp4=(1-tmp3)* +Math.sqrt(tmp3*(tmp3-tmp2*tmp2*4+2)+1);
	L$poptgep$poptgep2$poptgepsqueezed=Larg0.a3;
	L$poptgep$poptgep2$poptgepsqueezed[0]=tmp4;
	tmp1=tmp3*( +Larg0.d7*2);
	L$poptgep$poptgep2$poptgepsqueezed[1]=tmp1;
	tmp3*=tmp3;
	L$poptgep$poptgep2$poptgepsqueezed[2]=tmp3;
	tmp2=+L$poptgep$poptgep2$poptgepsqueezed[11];
	tmp4=tmp4*Larg1+tmp1*tmp2+tmp3* +L$poptgep$poptgep2$poptgepsqueezed[12];
	Larg0.d2=tmp4;
	L$poptgep$poptgep2$poptgepsqueezed[12]=tmp2;
	L$poptgep$poptgep2$poptgepsqueezed[11]=tmp4;
	return tmp4;
}
function __ZN10maxiFilter5hiresEddd(Larg0,Larg1,Larg2,Larg3){
	var tmp0=-0.,tmp1=-0.,tmp2=-0.,tmp3=-0.;
	if(Larg2<10){
		tmp1=10;
	}else{
		tmp1=Larg2;
	}
	Larg0.d9=tmp1;
	tmp2=(+(__ZN12maxiSettings10sampleRateE|0));
	if(tmp1>tmp2){
		Larg0.d9=tmp2;
		tmp1=tmp2;
	}
	if(Larg3<1){
		tmp3=1;
	}else{
		tmp3=Larg3;
	}
	tmp1=+Math.cos(tmp1*6.2831853071795862/tmp2);
	Larg0.d7=tmp1;
	Larg0.d8=2-tmp1*2;
	tmp2=+Math.sqrt(- +Math.pow(tmp1+-1,3));
	tmp3*=( +Larg0.d7+-1);
	tmp1=+Larg0.d6;
	tmp0= +Larg0.d5+(Larg1-tmp1)* +Larg0.d8;
	tmp1+=tmp0;
	Larg0.d6=tmp1;
	Larg0.d5=(tmp2*1.4142135623730951+tmp3)/tmp3*tmp0;
	tmp1=Larg1-tmp1;
	Larg0.d2=tmp1;
	return tmp1;
}
function __ZN10maxiFilter5loresEddd(Larg0,Larg1,Larg2,Larg3){
	var tmp0=-0.,tmp1=-0.,tmp2=-0.,tmp3=-0.;
	if(Larg2<10){
		tmp1=10;
	}else{
		tmp1=Larg2;
	}
	Larg0.d9=tmp1;
	tmp2=(+(__ZN12maxiSettings10sampleRateE|0));
	if(tmp1>tmp2){
		Larg0.d9=tmp2;
		tmp1=tmp2;
	}
	if(Larg3<1){
		tmp3=1;
	}else{
		tmp3=Larg3;
	}
	tmp1=+Math.cos(tmp1*6.2831853071795862/tmp2);
	Larg0.d7=tmp1;
	Larg0.d8=2-tmp1*2;
	tmp2=+Math.sqrt(- +Math.pow(tmp1+-1,3));
	tmp3*=( +Larg0.d7+-1);
	tmp1=+Larg0.d6;
	tmp0= +Larg0.d5+(Larg1-tmp1)* +Larg0.d8;
	tmp1+=tmp0;
	Larg0.d6=tmp1;
	Larg0.d5=(tmp2*1.4142135623730951+tmp3)/tmp3*tmp0;
	Larg0.d2=tmp1;
	return tmp1;
}
function __ZN10maxiFilter6hipassEdd(Larg0,Larg1,Larg2){
	var tmp0=-0.;
	tmp0=+Larg0.a3[10];
	tmp0=Larg1-(tmp0+(Larg1-tmp0)*Larg2);
	Larg0.d2=tmp0;
	Larg0.a3[10]=tmp0;
	return tmp0;
}
function __ZN10maxiFilter6lopassEdd(Larg0,Larg1,Larg2){
	var tmp0=-0.;
	tmp0=+Larg0.a3[10];
	tmp0+=((Larg1-tmp0)*Larg2);
	Larg0.d2=tmp0;
	Larg0.a3[10]=tmp0;
	return tmp0;
}
function __ZN10maxiFilter12getResonanceEv(Larg0){
	return +Larg0.d10;
}
function __ZN10maxiFilter9getCutoffEv(Larg0){
	return +Larg0.d9;
}
function __ZN10maxiFilter12setResonanceEd(Larg0,Larg1){
	Larg0.d10=Larg1;
}
function __ZN10maxiFilter9setCutoffEd(Larg0,Larg1){
	Larg0.d9=Larg1;
}
function __ZN12maxiSettingsC1Ev(Larg0){
}
function __ZN12maxiSettings13getSampleRateEv(){
	return __ZN12maxiSettings10sampleRateE|0;
}
function __ZN12maxiSettings5setupEiii(Larg0,Larg1,Larg2){
	__ZN12maxiSettings10sampleRateE=Larg0;
}
function _siprintf(Larg0,Marg0,Larg1,Marg1){
	var tmp0=null,tmp1=null,tmp2=0,L$poptgep$poptgep2$poptgepsqueezed=null,L$poptgep$poptgep2$poptgepsqueezedo=0;
	tmp0=[nullObj];
	tmp1=new constructor_struct$p_Z7__sFILE();
	tmp1.a0=Larg0;
	tmp1.a0o=Marg0;
	L$poptgep$poptgep2$poptgepsqueezed=tmp1.a4;
	L$poptgep$poptgep2$poptgepsqueezed.a0=Larg0;
	L$poptgep$poptgep2$poptgepsqueezed.a0o=Marg0;
	tmp1.i2=2147483647;
	L$poptgep$poptgep2$poptgepsqueezed.i1=2147483647;
	tmp1.i3=-65016;
	tmp0[0]={d:arguments,o:_siprintf.length};
	L$poptgep$poptgep2$poptgepsqueezed=tmp0[0];
	tmp2=__svfprintf_r(tmp1,Larg1,Marg1,L$poptgep$poptgep2$poptgepsqueezed.d,L$poptgep$poptgep2$poptgepsqueezed.o)|0;
	tmp0[0]=null;
	L$poptgep$poptgep2$poptgepsqueezedo=tmp1.a0o;
	L$poptgep$poptgep2$poptgepsqueezed=tmp1.a0;
	L$poptgep$poptgep2$poptgepsqueezed[L$poptgep$poptgep2$poptgepsqueezedo]=0;
	return tmp2|0;
}
function _snprintf(Larg0,Marg0,Larg1,Larg2,Marg2){
	var tmp0=null,tmp1=null,L$poptgep$poptgep2$poptgepsqueezed=null,L$poptgep$poptgep2$poptgepsqueezedo=0,tmp3=0;
	tmp0=[nullObj];
	tmp1=new constructor_struct$p_Z7__sFILE();
	if((Larg1|0)<0){
		_impure_data.i0=139;
		return  -1|0;
	}
	tmp1.a0=Larg0;
	tmp1.a0o=Marg0;
	L$poptgep$poptgep2$poptgepsqueezed=tmp1.a4;
	L$poptgep$poptgep2$poptgepsqueezed.a0=Larg0;
	L$poptgep$poptgep2$poptgepsqueezed.a0o=Marg0;
	tmp3=(Larg1|0)!==0?Larg1-1|0:0|0;
	tmp1.i2=tmp3;
	L$poptgep$poptgep2$poptgepsqueezed.i1=tmp3;
	tmp1.i3=-65016;
	tmp0[0]={d:arguments,o:_snprintf.length};
	L$poptgep$poptgep2$poptgepsqueezed=tmp0[0];
	tmp3=__svfprintf_r(tmp1,Larg2,Marg2,L$poptgep$poptgep2$poptgepsqueezed.d,L$poptgep$poptgep2$poptgepsqueezed.o)|0;
	tmp0[0]=null;
	if((tmp3|0)<-1)_impure_data.i0=139;
	if((Larg1|0)!==0){
		L$poptgep$poptgep2$poptgepsqueezedo=tmp1.a0o;
		L$poptgep$poptgep2$poptgepsqueezed=tmp1.a0;
		L$poptgep$poptgep2$poptgepsqueezed[L$poptgep$poptgep2$poptgepsqueezedo]=0;
		return tmp3|0;
	}
	return tmp3|0;
}
var _$pstr=new Uint8Array([77,97,120,105,109,105,108,105,97,110,32,50,32,45,32,74,97,118,97,115,99,114,105,112,116,32,84,114,97,110,115,112,105,108,101,32,48,46,50,0]);
var __ZN12maxiSettings10sampleRateE=44100;
var _transition=new Float64Array([-0.500003,-0.500003,-0.500023,-0.500063,-0.500121,-0.500179,-0.500259,-0.50036,-0.500476,-0.500591,-0.500732,-0.500893,-0.501066,-0.501239,-0.50144,-0.501661,-0.501891,-0.502123,-0.502382,-0.502662,-0.502949,-0.50324,-0.503555,-0.503895,-0.504238,-0.504587,-0.504958,-0.505356,-0.505754,-0.506162,-0.506589,-0.507042,-0.507495,-0.50796,-0.508444,-0.508951,-0.509458,-0.509979,-0.510518,-0.511079,-0.511638,-0.512213,-0.512808,-0.51342,-0.51403,-0.514659,-0.515307,-0.51597,-0.51663,-0.517312,-0.518012,-0.518724,-0.519433,-0.520166,-0.520916,-0.521675,-0.522432,-0.523214,-0.524013,-0.524819,-0.525624,-0.526451,-0.527298,-0.528147,-0.528999,-0.52987,-0.530762,-0.531654,-0.532551,-0.533464,-0.534399,-0.535332,-0.536271,-0.537226,-0.538202,-0.539172,-0.540152,-0.541148,-0.542161,-0.543168,-0.544187,-0.54522,-0.546269,-0.54731,-0.548365,-0.549434,-0.550516,-0.55159,-0.552679,-0.553781,-0.554893,-0.555997,-0.557118,-0.558252,-0.559391,-0.560524,-0.561674,-0.562836,-0.564001,-0.565161,-0.566336,-0.567524,-0.568712,-0.569896,-0.571095,-0.572306,-0.573514,-0.574721,-0.575939,-0.577171,-0.578396,-0.579622,-0.580858,-0.582108,-0.583348,-0.58459,-0.585842,-0.587106,-0.588358,-0.589614,-0.590879,-0.592154,-0.593415,-0.594682,-0.595957,-0.59724,-0.598507,-0.599782,-0.601064,-0.602351,-0.603623,-0.604902,-0.606189,-0.607476,-0.60875,-0.610032,-0.61131899999999995,-0.612605,-0.613877,-0.615157,-0.616443,-0.617723,-0.618992,-0.620268,-0.62154799999999999,-0.62282,-0.624083,-0.62535,-0.626622,-0.627882,-0.629135,-0.630391,-0.631652,-0.632898,-0.634138,-0.63538,-0.636626,-0.637854,-0.639078,-0.640304,-0.641531,-0.64273899999999995,-0.643943,-0.645149,-0.646355,-0.647538,-0.64872,-0.649903,-0.651084,-0.652241,-0.653397,-0.654553,-0.65570499999999998,-0.656834,-0.657961,-0.659087,-0.660206,-0.661304,-0.66239899999999996,-0.66349199999999997,-0.664575,-0.665639,-0.666699,-0.667756,-0.6688,-0.66982699999999995,-0.670849,-0.671866,-0.672868,-0.673854,-0.674835,-0.675811,-0.676767,-0.677709,-0.678646,-0.679576,-0.680484,-0.68138,-0.682269,-0.683151,-0.684008,-0.684854,-0.685693,-0.686524,-0.687327,-0.688119,-0.688905,-0.689682,-0.690428,-0.691164,-0.691893,-0.692613,-0.6933,-0.693978,-0.694647,-0.695305,-0.695932,-0.696549,-0.697156,-0.697748,-0.69831299999999996,-0.698865,-0.699407,-0.699932,-0.700431,-0.700917,-0.701391,-0.701845,-0.702276,-0.702693,-0.703097,-0.703478,-0.703837,-0.704183,-0.704514,-0.704819,-0.705105,-0.705378,-0.70563299999999995,-0.70586,-0.706069,-0.706265,-0.706444,-0.706591,-0.706721,-0.706837,-0.706938,-0.707003,-0.707051,-0.707086,-0.707106,-0.707086,-0.707051,-0.70700099999999999,-0.706935,-0.706832,-0.706711,-0.706576,-0.70642099999999997,-0.706233,-0.706025,-0.705802,-0.70555699999999999,-0.705282,-0.704984,-0.704671,-0.704334,-0.703969,-0.703582,-0.703176,-0.702746,-0.702288,-0.70181,-0.701312,-0.70078499999999999,-0.700234,-0.699664,-0.69907,-0.698447,-0.6978,-0.697135,-0.696446,-0.695725,-0.694981,-0.694219,-0.693435,-0.692613,-0.691771,-0.690911,-0.69003,-0.689108,-0.688166,-0.68720599999999998,-0.686227,-0.685204,-0.684162,-0.68310099999999996,-0.682019,-0.680898,-0.679755,-0.678592,-0.677407,-0.676187,-0.674941,-0.673676,-0.672386,-0.671066,-0.669718,-0.66835,-0.66695499999999996,-0.665532,-0.66408299999999998,-0.662611,-0.661112,-0.659585,-0.658035,-0.656459,-0.654854,-0.653223,-0.651572,-0.649892,-0.648181,-0.646446,-0.644691,-0.642909,-0.641093,-0.639253,-0.637393,-0.63551,-0.633588,-0.631644,-0.62968,-0.627695,-0.625668,-0.62362099999999998,-0.621553,-0.619464,-0.617334,-0.615183,-0.61301099999999997,-0.610817,-0.608587,-0.606333,-0.60405799999999998,-0.60176,-0.59942899999999999,-0.597072,-0.594695,-0.592293,-0.589862,-0.587404,-0.584925,-0.58242,-0.579888,-0.577331,-0.574751,-0.572145,-0.569512,-0.566858,-0.564178,-0.561471,-0.558739,-0.555988,-0.553209,-0.550402,-0.547572,-0.544723,-0.54185,-0.538944,-0.536018,-0.533072,-0.530105,-0.527103,-0.524081,-0.52104,-0.51798,-0.514883,-0.511767,-0.508633,-0.505479,-0.502291,-0.499083,-0.495857,-0.492611,-0.489335,-0.486037,-0.48272,-0.479384,-0.476021,-0.472634,-0.46923,-0.465805,-0.462356,-0.458884,-0.455394,-0.451882,-0.448348,-0.444795,-0.44122,-0.437624,-0.434008,-0.430374,-0.426718,-0.423041,-0.419344,-0.415631,-0.411897,-0.40814,-0.404365,-0.400575,-0.396766,-0.392933,-0.389082,-0.385217,-0.381336,-0.377428,-0.373505,-0.369568,-0.365616,-0.361638,-0.357645,-0.353638,-0.349617,-0.345572,-0.341512,-0.337438,-0.33335,-0.329242,-0.325118,-0.32098,-0.316829,-0.31266,-0.308474,-0.304276,-0.300063,-0.295836,-0.291593,-0.287337,-0.283067,-0.278783,-0.274487,-0.270176,-0.265852,-0.261515,-0.257168,-0.252806,-0.248431,-0.244045,-0.239649,-0.23524,-0.230817,-0.226385,-0.221943,-0.21749,-0.213024,-0.208548,-0.204064,-0.199571,-0.195064,-0.190549,-0.186026,-0.181495,-0.176952,-0.1724,-0.167842,-0.163277,-0.1587,-0.154117,-0.149527,-0.14493,-0.140325,-0.135712,-0.131094,-0.12647,-0.121839,-0.117201,-0.112559,-0.10791,-0.103257,-0.0985979,-0.093934299999999998,-0.0892662,-0.0845935,-0.079917,-0.0752362,-0.0705516,-0.0658635,-0.0611729,-0.0564786,-0.0517814,-0.0470818,-0.0423802,-0.0376765,-0.0329703,-0.0282629,-0.0235542,-0.0188445,-0.0141335,-0.00942183,-0.00470983,2.41979E-6,.00471481,.00942681,.0141384,.0188494,.023559,.028268,.0329754,.0376813,.0423851,.0470868,.0517863,.0564836,.0611777,.0658683,.0705566,.075241199999999994,.0799218,.084598199999999998,.089271199999999995,.0939393,.0986028,.103262,.107915,.112563,.117206,.121844,.126475,.131099,.135717,.14033,.144935,.149531,.154122,.158705,.163281,.167847,.172405,.176956,.1815,.18603,.190553,.195069,.199576,.204068,.208552,.213028,.217495,.221947,.226389,.230822,.235245,.239653,.244049,.248436,.252811,.257173,.26152,.265857,.270181,.274491,.278788,.283071,.287341,.291597,.29584,.300068,.30428,.308478,.312664,.316833,.320984,.325122,.329246,.333354,.337442,.341516,.345576,.34962,.353642,.357649,.361642,.36562,.369572,.373509,.377432,.38134,.385221,.389086,.392936,.39677,.400579,.404369,.408143,.4119,.415634,.419347,.423044,.426721,.430377,.434011,.437627,.441223,.444798,.448351,.451885,.455397,.458887,.462359,.465807,.469232,.472637,.476024,.479386,.482723,.486039,.489338,.492613,.49586,.499086,.502294,.505481,.508635,.511769,.514885,.517982,.521042,.524083,.527105,.530107,.533074,.53602,.538946,.541851,.544725,.547574,.550404,.553211,.555989,.55874,.561472,.564179,.566859,.569514,.572146,.574753,.577332,.579889,.582421,.584926,.587405,.589863,.592294,.594696,.59707299999999996,.59943,.60176,.604059,.606333,.608588,.610818,.613012,.615183,.61733499999999997,.619464,.621553,.62362099999999998,.625669,.627696,.629681,.631645,.633588,.63551,.637393,.639253,.641093,.642909,.644691,.646446,.648181,.649892,.651572,.653223,.654854,.656459,.658035,.659585,.661112,.662611,.66408299999999998,.665532,.66695499999999996,.66835,.669718,.671066,.672386,.673676,.674941,.676187,.677407,.678592,.679755,.680898,.682019,.68310099999999996,.684162,.685204,.686227,.68720599999999998,.688166,.689108,.69003,.690911,.691771,.692613,.693435,.694219,.694981,.695725,.696447,.697135,.6978,.698447,.69907,.699664,.700234,.700786,.701312,.70181,.702288,.702746,.703177,.703582,.703969,.704334,.704671,.704984,.705282,.70555699999999999,.705802,.706025,.706233,.706422,.706576,.706712,.706832,.706936,.707002,.707051,.707086,.707106,.707086,.707051,.707003,.70693899999999998,.706838,.706721,.706592,.706445,.706265,.70607,.705861,.705634,.705378,.705105,.70482,.704515,.704184,.703837,.703478,.703097,.702694,.702276,.70184599999999997,.701392,.700917,.700432,.699932,.699408,.69886599999999999,.698314,.69774899999999995,.697156,.696549,.695933,.695305,.694648,.693979,.69330099999999995,.692613,.691894,.691165,.690428,.689683,.688905,.68812,.687327,.686525,.685693,.684854,.684009,.68315199999999998,.68227,.68138,.680485,.679577,.678647,.67771,.676768,.675811,.674836,.673855,.672869,.67186699999999999,.670849,.66982699999999995,.66880099999999998,.667757,.6667,.66564,.664576,.663493,.6624,.661305,.66020699999999999,.659088,.657962,.656834,.65570499999999998,.654553,.653398,.652241,.651085,.649903,.648721,.647539,.646356,.645149,.643944,.64273899999999995,.64153199999999999,.640304,.63907899999999995,.637855,.636626,.63538099999999997,.634139,.632899,.631652,.630392,.629136,.62788299999999997,.626622,.62535,.624083,.62282,.62154799999999999,.620268,.618993,.617724,.616443,.615158,.613878,.612605,.61132,.610032,.608751,.607477,.606189,.60490299999999997,.603623,.602351,.60106499999999996,.599782,.598508,.59724,.595957,.594682,.593415,.592154,.59088,.589615,.588359,.587106,.585843,.584591,.583349,.582108,.580859,.579623,.578397,.577172,.575939,.574721,.573515,.572307,.571095,.569897,.568713,.567525,.566337,.565161,.564002,.562837,.561674,.560525,.559392,.558252,.557119,.555998,.554893,.553782,.552679,.55159,.550516,.549434,.548365,.54731,.546269,.54522,.544187,.543168,.542161,.541148,.540153,.539173,.538202,.537226,.536271,.535332,.5344,.533464,.532551,.531654,.530762,.52987,.528999,.528147,.527298,.526451,.525624,.524819,.524014,.523214,.522432,.521675,.520916,.520166,.519433,.518724,.518012,.517312,.51663,.51597,.515307,.51466,.51403,.51342,.512808,.512213,.511638,.511079,.510518,.509979,.509458,.508951,.508444,.50796,.507495,.507042,.506589,.506162,.505754,.505356,.504958,.504587,.504237,.503895,.503555,.50324,.502949,.502662,.502382,.502123,.501891,.501661,.50144,.501239,.501066,.500893,.500732,.500591,.500476,.50036,.500259,.500179,.500121,.500063,.500023,.500003,.500003]);
var _sineBuffer=new Float64Array([0,.012268,.024536,.036804,.049042,.06131,.073547,.085785,.097991999999999995,.1102,.12241,.13455,.1467,.15884,.17093,.18301,.19507,.20709,.21909,.23105,.24295,.25485,.26669,.2785,.29025,.30197,.31366,.32529,.33685,.34839,.35986,.37128,.38266,.39395,.40521,.41641,.42752,.4386,.44958,.46051,.47137,.48215,.49286,.50351,.51407,.52457,.53497,.54529,.55554,.5657,.57578,.58575,.59567,.60547,.61519999999999997,.62482,.63437,.6438,.65314,.66237999999999997,.67151,.68057,.68951,.69833,.70706,.7157,.72421,.7326,.74091,.74907999999999997,.75717,.76514,.77298,.78069999999999994,.7883,.79581,.80316,.81042,.81754,.82455,.83142,.8382,.84482,.85132,.8577,.86392,.87006,.87604,.88187,.8876,.89319,.89861999999999997,.90396,.90912,.91415,.91907,.92383,.92847,.93294999999999995,.93728999999999995,.9415,.94555999999999995,.94948999999999994,.95325,.95691,.96038999999999996,.96374999999999999,.96692,.96999999999999997,.97289999999999998,.97565,.97826999999999997,.98073999999999994,.98306,.98523,.98724,.98914,.99084,.99243,.99387,.99514999999999998,.99628,.99724999999999997,.99807999999999996,.99875,.99926999999999999,.99965999999999999,.99987999999999999,.99997,.99987999999999999,.99965999999999999,.99926999999999999,.99875,.99807999999999996,.99724999999999997,.99628,.99514999999999998,.99387,.99243,.99084,.98914,.98724,.98523,.98306,.98073999999999994,.97826999999999997,.97565,.97289999999999998,.96999999999999997,.96692,.96374999999999999,.96038999999999996,.95691,.95325,.94948999999999994,.94555999999999995,.9415,.93728999999999995,.93294999999999995,.92847,.92383,.91907,.91415,.90912,.90396,.89861999999999997,.89319,.8876,.88187,.87604,.87006,.86392,.8577,.85132,.84482,.8382,.83142,.82455,.81754,.81042,.80316,.79581,.7883,.78069999999999994,.77298,.76514,.75717,.74907999999999997,.74091,.7326,.72421,.7157,.70706,.69833,.68951,.68057,.67151,.66237999999999997,.65314,.6438,.63437,.62482,.61519999999999997,.60547,.59567,.58575,.57578,.5657,.55554,.54529,.53497,.52457,.51407,.50351,.49286,.48215,.47137,.46051,.44958,.4386,.42752,.41641,.40521,.39395,.38266,.37128,.35986,.34839,.33685,.32529,.31366,.30197,.29025,.2785,.26669,.25485,.24295,.23105,.21909,.20709,.19507,.18301,.17093,.15884,.1467,.13455,.12241,.1102,.097991999999999995,.085785,.073547,.06131,.049042,.036804,.024536,.012268,0,-0.012268,-0.024536,-0.036804,-0.049042,-0.06131,-0.073547,-0.085785,-0.097991999999999995,-0.1102,-0.12241,-0.13455,-0.1467,-0.15884,-0.17093,-0.18301,-0.19507,-0.20709,-0.21909,-0.23105,-0.24295,-0.25485,-0.26669,-0.2785,-0.29025,-0.30197,-0.31366,-0.32529,-0.33685,-0.34839,-0.35986,-0.37128,-0.38266,-0.39395,-0.40521,-0.41641,-0.42752,-0.4386,-0.44958,-0.46051,-0.47137,-0.48215,-0.49286,-0.50351,-0.51407,-0.52457,-0.53497,-0.54529,-0.55554,-0.5657,-0.57578,-0.58575,-0.59567,-0.60547,-0.61519999999999997,-0.62482,-0.63437,-0.6438,-0.65314,-0.66237999999999997,-0.67151,-0.68057,-0.68951,-0.69833,-0.70706,-0.7157,-0.72421,-0.7326,-0.74091,-0.74907999999999997,-0.75717,-0.76514,-0.77298,-0.78069999999999994,-0.7883,-0.79581,-0.80316,-0.81042,-0.81754,-0.82455,-0.83142,-0.8382,-0.84482,-0.85132,-0.8577,-0.86392,-0.87006,-0.87604,-0.88187,-0.8876,-0.89319,-0.89861999999999997,-0.90396,-0.90912,-0.91415,-0.91907,-0.92383,-0.92847,-0.93294999999999995,-0.93728999999999995,-0.9415,-0.94555999999999995,-0.94948999999999994,-0.95325,-0.95691,-0.96038999999999996,-0.96374999999999999,-0.96692,-0.96999999999999997,-0.97289999999999998,-0.97565,-0.97826999999999997,-0.98073999999999994,-0.98306,-0.98523,-0.98724,-0.98914,-0.99084,-0.99243,-0.99387,-0.99514999999999998,-0.99628,-0.99724999999999997,-0.99807999999999996,-0.99875,-0.99926999999999999,-0.99965999999999999,-0.99987999999999999,-0.99997,-0.99987999999999999,-0.99965999999999999,-0.99926999999999999,-0.99875,-0.99807999999999996,-0.99724999999999997,-0.99628,-0.99514999999999998,-0.99387,-0.99243,-0.99084,-0.98914,-0.98724,-0.98523,-0.98306,-0.98073999999999994,-0.97826999999999997,-0.97565,-0.97289999999999998,-0.96999999999999997,-0.96692,-0.96374999999999999,-0.96038999999999996,-0.95691,-0.95325,-0.94948999999999994,-0.94555999999999995,-0.9415,-0.93728999999999995,-0.93294999999999995,-0.92847,-0.92383,-0.91907,-0.91415,-0.90912,-0.90396,-0.89861999999999997,-0.89319,-0.8876,-0.88187,-0.87604,-0.87006,-0.86392,-0.8577,-0.85132,-0.84482,-0.8382,-0.83142,-0.82455,-0.81754,-0.81042,-0.80316,-0.79581,-0.7883,-0.78069999999999994,-0.77298,-0.76514,-0.75717,-0.74907999999999997,-0.74091,-0.7326,-0.72421,-0.7157,-0.70706,-0.69833,-0.68951,-0.68057,-0.67151,-0.66237999999999997,-0.65314,-0.6438,-0.63437,-0.62482,-0.61519999999999997,-0.60547,-0.59567,-0.58575,-0.57578,-0.5657,-0.55554,-0.54529,-0.53497,-0.52457,-0.51407,-0.50351,-0.49286,-0.48215,-0.47137,-0.46051,-0.44958,-0.4386,-0.42752,-0.41641,-0.40521,-0.39395,-0.38266,-0.37128,-0.35986,-0.34839,-0.33685,-0.32529,-0.31366,-0.30197,-0.29025,-0.2785,-0.26669,-0.25485,-0.24295,-0.23105,-0.21909,-0.20709,-0.19507,-0.18301,-0.17093,-0.15884,-0.1467,-0.13455,-0.12241,-0.1102,-0.097991999999999995,-0.085785,-0.073547,-0.06131,-0.049042,-0.036804,-0.024536,-0.012268,0,.012268]);
var ___sf_fake_stdin=[new constructor_struct$p_Z7__sFILE()];
var $__sf_fake_stdin=0;
var ___sf_fake_stdout=[new constructor_struct$p_Z7__sFILE()];
var $__sf_fake_stdout=0;
var ___sf_fake_stderr=[new constructor_struct$p_Z7__sFILE()];
var $__sf_fake_stderr=0;
var _$pstr$p18$p109=new Uint8Array([67,0]);
var _promotedMalloc$p2=new constructor_struct$p_Z11_misc_reent();
var _impure_data={i0:0,a1:___sf_fake_stdin,a1o:$__sf_fake_stdin,a2:___sf_fake_stdout,a2o:$__sf_fake_stdout,a3:___sf_fake_stderr,a3o:$__sf_fake_stderr,i4:0,a5:null,i6:0,i7:0,a8:_$pstr$p18$p109[0],a9:null,a10:null,i11:0,i12:0,a13:null,a14:null,a15:null,a16:null,a17:null,a18:null,a19:{a0:null,i1:0,a2:createPointerArray([],0,32,null),a3:null},a20:{a0:null,i1:0,a2:nullArray},a21:null,a22:_promotedMalloc$p2,a23:null};
var _$pstr$p8=new Uint8Array([65,117,116,111,116,114,105,109,58,32,115,116,97,114,116,58,32,0]);
var _$pstr$p1=new Uint8Array([44,32,101,110,100,58,32,0]);
var __ZTSN10__cxxabiv120__si_class_type_infoE=new Uint8Array([78,49,48,95,95,99,120,120,97,98,105,118,49,50,48,95,95,115,105,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0]);
var __ZTSN10__cxxabiv117__class_type_infoE=new Uint8Array([78,49,48,95,95,99,120,120,97,98,105,118,49,49,55,95,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0]);
var __ZTSN10__cxxabiv116__shim_type_infoE=new Uint8Array([78,49,48,95,95,99,120,120,97,98,105,118,49,49,54,95,95,115,104,105,109,95,116,121,112,101,95,105,110,102,111,69,0]);
var __ZTVN10__cxxabiv117__class_type_infoE={a0:undefined,a1:__ZN10__cxxabiv117__class_type_infoD2Ev,a2:__ZN10__cxxabiv117__class_type_infoD0Ev,a3:__ZNK10__cxxabiv116__shim_type_info5noop1Ev,a4:__ZNK10__cxxabiv116__shim_type_info5noop2Ev,a5:__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERl,a6:__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEllib,a7:__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoElib,a8:__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEli};
var __ZTSSt9type_info=new Uint8Array([83,116,57,116,121,112,101,95,105,110,102,111,0]);
var __ZTISt9type_info={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt9type_info[0]};
var __ZTIN10__cxxabiv116__shim_type_infoE={a0:undefined,a1:__ZTSN10__cxxabiv116__shim_type_infoE[0],a2:__ZTISt9type_info};
var __ZTIN10__cxxabiv117__class_type_infoE={a0:undefined,a1:__ZTSN10__cxxabiv117__class_type_infoE[0],a2:__ZTIN10__cxxabiv116__shim_type_infoE};
__ZTVN10__cxxabiv117__class_type_infoE.a0=__ZTIN10__cxxabiv117__class_type_infoE;
var __ZTIN10__cxxabiv120__si_class_type_infoE={a0:undefined,a1:__ZTSN10__cxxabiv120__si_class_type_infoE[0],a2:__ZTIN10__cxxabiv117__class_type_infoE};
var __ZTVN10__cxxabiv120__si_class_type_infoE={a0:__ZTIN10__cxxabiv120__si_class_type_infoE,a1:__ZN10__cxxabiv120__si_class_type_infoD2Ev,a2:__ZN10__cxxabiv120__si_class_type_infoD0Ev,a3:__ZNK10__cxxabiv116__shim_type_info5noop1Ev,a4:__ZNK10__cxxabiv116__shim_type_info5noop2Ev,a5:__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERl,a6:__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEllib,a7:__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoElib,a8:__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEli};
__ZTIN10__cxxabiv120__si_class_type_infoE.a0=__ZTVN10__cxxabiv120__si_class_type_infoE;
__ZTIN10__cxxabiv117__class_type_infoE.a0=__ZTVN10__cxxabiv120__si_class_type_infoE;
__ZTIN10__cxxabiv116__shim_type_infoE.a0=__ZTVN10__cxxabiv120__si_class_type_infoE;
var __ZTSN10__cxxabiv121__vmi_class_type_infoE=new Uint8Array([78,49,48,95,95,99,120,120,97,98,105,118,49,50,49,95,95,118,109,105,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0]);
var __ZTIN10__cxxabiv121__vmi_class_type_infoE={a0:__ZTVN10__cxxabiv120__si_class_type_infoE,a1:__ZTSN10__cxxabiv121__vmi_class_type_infoE[0],a2:__ZTIN10__cxxabiv117__class_type_infoE};
var __ZTVN10__cxxabiv121__vmi_class_type_infoE={a0:__ZTIN10__cxxabiv121__vmi_class_type_infoE,a1:__ZN10__cxxabiv121__vmi_class_type_infoD2Ev,a2:__ZN10__cxxabiv121__vmi_class_type_infoD0Ev,a3:__ZNK10__cxxabiv116__shim_type_info5noop1Ev,a4:__ZNK10__cxxabiv116__shim_type_info5noop2Ev,a5:__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERl,a6:__ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEllib,a7:__ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoElib,a8:__ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEli};
var __ZTSSo=new Uint8Array([83,111,0]);
var __ZTSSt9basic_iosIcSt11char_traitsIcEE=new Uint8Array([83,116,57,98,97,115,105,99,95,105,111,115,73,99,83,116,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,0]);
var __ZTSSt8ios_base=new Uint8Array([83,116,56,105,111,115,95,98,97,115,101,0]);
var __ZTISt8ios_base={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt8ios_base[0]};
var __ZTISt9basic_iosIcSt11char_traitsIcEE={a0:__ZTVN10__cxxabiv120__si_class_type_infoE,a1:__ZTSSt9basic_iosIcSt11char_traitsIcEE[0],a2:__ZTISt8ios_base};
var __ZTISo={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSo[0],i2:0,i3:1,i4:1,a5:[{a0:__ZTISt9basic_iosIcSt11char_traitsIcEE,i1:771},{a0:__ZTISt9basic_iosIcSt11char_traitsIcEE,i1:1}]};
var __ZTVSo={a0:{a0:__ZTISo,a1:__ZNSoD1Ev,a2:__ZNSoD0Ev,i3:1},a1:{a0:__ZTISo,a1:__ZTv0_3_NSoD1Ev,a2:__ZTv0_3_NSoD0Ev,i3:0}};
var __ZTSSt11__stdoutbufIcE=new Uint8Array([83,116,49,49,95,95,115,116,100,111,117,116,98,117,102,73,99,69,0]);
var __ZTSSt15basic_streambufIcSt11char_traitsIcEE=new Uint8Array([83,116,49,53,98,97,115,105,99,95,115,116,114,101,97,109,98,117,102,73,99,83,116,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,0]);
var __ZTISt15basic_streambufIcSt11char_traitsIcEE={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt15basic_streambufIcSt11char_traitsIcEE[0]};
var __ZTISt11__stdoutbufIcE={a0:__ZTVN10__cxxabiv120__si_class_type_infoE,a1:__ZTSSt11__stdoutbufIcE[0],a2:__ZTISt15basic_streambufIcSt11char_traitsIcEE};
var __ZTVSt11__stdoutbufIcE={a0:__ZTISt11__stdoutbufIcE,a1:__ZNSt11__stdoutbufIcED2Ev,a2:__ZNSt11__stdoutbufIcED0Ev,a3:__ZNSt11__stdoutbufIcE5imbueERKSt6locale,a4:__ZNSt15basic_streambufIcSt11char_traitsIcEE6setbufEPcl,a5:__ZNSt15basic_streambufIcSt11char_traitsIcEE7seekoffElNSt8ios_base7seekdirEj,a6:__ZNSt15basic_streambufIcSt11char_traitsIcEE7seekposESt4fposI10_mbstate_tEj,a7:__ZNSt11__stdoutbufIcE4syncEv,a8:__ZNSt15basic_streambufIcSt11char_traitsIcEE9showmanycEv,a9:__ZNSt15basic_streambufIcSt11char_traitsIcEE6xsgetnEPcl,a10:__ZNSt15basic_streambufIcSt11char_traitsIcEE9underflowEv,a11:__ZNSt15basic_streambufIcSt11char_traitsIcEE5uflowEv,a12:__ZNSt15basic_streambufIcSt11char_traitsIcEE9pbackfailEi,a13:__ZNSt11__stdoutbufIcE6xsputnEPKcl,a14:__ZNSt11__stdoutbufIcE8overflowEi};
var __ZTSNSt6locale5__impE=new Uint8Array([78,83,116,54,108,111,99,97,108,101,53,95,95,105,109,112,69,0]);
var __ZTSNSt6locale5facetE=new Uint8Array([78,83,116,54,108,111,99,97,108,101,53,102,97,99,101,116,69,0]);
var __ZTSSt14__shared_count=new Uint8Array([83,116,49,52,95,95,115,104,97,114,101,100,95,99,111,117,110,116,0]);
var __ZTISt14__shared_count={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt14__shared_count[0]};
var __ZTINSt6locale5facetE={a0:__ZTVN10__cxxabiv120__si_class_type_infoE,a1:__ZTSNSt6locale5facetE[0],a2:__ZTISt14__shared_count};
var __ZTINSt6locale5__impE={a0:__ZTVN10__cxxabiv120__si_class_type_infoE,a1:__ZTSNSt6locale5__impE[0],a2:__ZTINSt6locale5facetE};
var __ZTVNSt6locale5__impE={a0:__ZTINSt6locale5__impE,a1:__ZNSt6locale5__impD2Ev,a2:__ZNSt6locale5__impD0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv};
var __ZTSSt7collateIcE=new Uint8Array([83,116,55,99,111,108,108,97,116,101,73,99,69,0]);
var __ZTISt7collateIcE={a0:__ZTVN10__cxxabiv120__si_class_type_infoE,a1:__ZTSSt7collateIcE[0],a2:__ZTINSt6locale5facetE};
var __ZTVSt7collateIcE={a0:__ZTISt7collateIcE,a1:__ZNSt7collateIcED2Ev,a2:__ZNSt7collateIcED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt7collateIcE10do_compareEPKcS2_S2_S2_,a5:__ZNKSt7collateIcE12do_transformEPKcS2_,a6:__ZNKSt7collateIcE7do_hashEPKcS2_};
var __ZZNSt12_GLOBAL__N_14makeISt7collateIcEjEERT_T0_E3buf={a0:__ZTVSt7collateIcE,i1:1};
var __ZTSSt7collateIwE=new Uint8Array([83,116,55,99,111,108,108,97,116,101,73,119,69,0]);
var __ZTISt7collateIwE={a0:__ZTVN10__cxxabiv120__si_class_type_infoE,a1:__ZTSSt7collateIwE[0],a2:__ZTINSt6locale5facetE};
var __ZTVSt7collateIwE={a0:__ZTISt7collateIwE,a1:__ZNSt7collateIwED2Ev,a2:__ZNSt7collateIwED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt7collateIwE10do_compareEPKwS2_S2_S2_,a5:__ZNKSt7collateIwE12do_transformEPKwS2_,a6:__ZNKSt7collateIwE7do_hashEPKwS2_};
var __ZZNSt12_GLOBAL__N_14makeISt7collateIwEjEERT_T0_E3buf={a0:__ZTVSt7collateIwE,i1:1};
var __ZTSSt5ctypeIcE=new Uint8Array([83,116,53,99,116,121,112,101,73,99,69,0]);
var __ZTSSt10ctype_base=new Uint8Array([83,116,49,48,99,116,121,112,101,95,98,97,115,101,0]);
var __ZTISt10ctype_base={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt10ctype_base[0]};
var __ZTISt5ctypeIcE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt5ctypeIcE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt10ctype_base,i1:2}]};
var __ZTVSt5ctypeIcE={a0:__ZTISt5ctypeIcE,a1:__ZNSt5ctypeIcED2Ev,a2:__ZNSt5ctypeIcED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt5ctypeIcE10do_toupperEc,a5:__ZNKSt5ctypeIcE10do_toupperEPcPKc,a6:__ZNKSt5ctypeIcE10do_tolowerEc,a7:__ZNKSt5ctypeIcE10do_tolowerEPcPKc,a8:__ZNKSt5ctypeIcE8do_widenEc,a9:__ZNKSt5ctypeIcE8do_widenEPKcS2_Pc,a10:__ZNKSt5ctypeIcE9do_narrowEcc,a11:__ZNKSt5ctypeIcE9do_narrowEPKcS2_cPc};
var __ctype_=new Uint8Array([0,32,32,32,32,32,32,32,32,32,40,40,40,40,40,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,136,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,4,4,4,4,4,4,4,4,4,4,16,16,16,16,16,16,16,65,65,65,65,65,65,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,16,16,16,16,16,16,66,66,66,66,66,66,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,16,16,16,16,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
var __ZZNSt12_GLOBAL__N_14makeISt5ctypeIcEDnbjEERT_T0_T1_T2_E3buf={a0:__ZTVSt5ctypeIcE,i1:1,a2:__ctype_,i3:0};
var __ZTSSt5ctypeIwE=new Uint8Array([83,116,53,99,116,121,112,101,73,119,69,0]);
var __ZTISt5ctypeIwE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt5ctypeIwE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt10ctype_base,i1:2}]};
var __ZTVSt5ctypeIwE={a0:__ZTISt5ctypeIwE,a1:__ZNSt5ctypeIwED2Ev,a2:__ZNSt5ctypeIwED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt5ctypeIwE5do_isEcw,a5:__ZNKSt5ctypeIwE5do_isEPKwS2_Pc,a6:__ZNKSt5ctypeIwE10do_scan_isEcPKwS2_,a7:__ZNKSt5ctypeIwE11do_scan_notEcPKwS2_,a8:__ZNKSt5ctypeIwE10do_toupperEw,a9:__ZNKSt5ctypeIwE10do_toupperEPwPKw,a10:__ZNKSt5ctypeIwE10do_tolowerEw,a11:__ZNKSt5ctypeIwE10do_tolowerEPwPKw,a12:__ZNKSt5ctypeIwE8do_widenEc,a13:__ZNKSt5ctypeIwE8do_widenEPKcS2_Pw,a14:__ZNKSt5ctypeIwE9do_narrowEwc,a15:__ZNKSt5ctypeIwE9do_narrowEPKwS2_cPc};
var __ZZNSt12_GLOBAL__N_14makeISt5ctypeIwEjEERT_T0_E3buf={a0:__ZTVSt5ctypeIwE,i1:1};
var __ZTSSt7codecvtIcc10_mbstate_tE=new Uint8Array([83,116,55,99,111,100,101,99,118,116,73,99,99,49,48,95,109,98,115,116,97,116,101,95,116,69,0]);
var __ZTSSt12codecvt_base=new Uint8Array([83,116,49,50,99,111,100,101,99,118,116,95,98,97,115,101,0]);
var __ZTISt12codecvt_base={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt12codecvt_base[0]};
var __ZTISt7codecvtIcc10_mbstate_tE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt7codecvtIcc10_mbstate_tE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt12codecvt_base,i1:2}]};
var __ZTVSt7codecvtIcc10_mbstate_tE={a0:__ZTISt7codecvtIcc10_mbstate_tE,a1:__ZNSt7codecvtIcc10_mbstate_tED2Ev,a2:__ZNSt7codecvtIcc10_mbstate_tED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt7codecvtIcc10_mbstate_tE6do_outERS0_PKcS4_RS4_PcS6_RS6_,a5:__ZNKSt7codecvtIcc10_mbstate_tE5do_inERS0_PKcS4_RS4_PcS6_RS6_,a6:__ZNKSt7codecvtIcc10_mbstate_tE10do_unshiftERS0_PcS3_RS3_,a7:__ZNKSt7codecvtIcc10_mbstate_tE11do_encodingEv,a8:__ZNKSt7codecvtIcc10_mbstate_tE16do_always_noconvEv,a9:__ZNKSt7codecvtIcc10_mbstate_tE9do_lengthERS0_PKcS4_j,a10:__ZNKSt7codecvtIcc10_mbstate_tE13do_max_lengthEv};
var __ZZNSt12_GLOBAL__N_14makeISt7codecvtIcc10_mbstate_tEjEERT_T0_E3buf={a0:__ZTVSt7codecvtIcc10_mbstate_tE,i1:1};
var __ZTSSt7codecvtIwc10_mbstate_tE=new Uint8Array([83,116,55,99,111,100,101,99,118,116,73,119,99,49,48,95,109,98,115,116,97,116,101,95,116,69,0]);
var __ZTISt7codecvtIwc10_mbstate_tE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt7codecvtIwc10_mbstate_tE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt12codecvt_base,i1:2}]};
var __ZTVSt7codecvtIwc10_mbstate_tE={a0:__ZTISt7codecvtIwc10_mbstate_tE,a1:__ZNSt7codecvtIwc10_mbstate_tED2Ev,a2:__ZNSt7codecvtIwc10_mbstate_tED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt7codecvtIwc10_mbstate_tE6do_outERS0_PKwS4_RS4_PcS6_RS6_,a5:__ZNKSt7codecvtIwc10_mbstate_tE5do_inERS0_PKcS4_RS4_PwS6_RS6_,a6:__ZNKSt7codecvtIwc10_mbstate_tE10do_unshiftERS0_PcS3_RS3_,a7:__ZNKSt7codecvtIwc10_mbstate_tE11do_encodingEv,a8:__ZNKSt7codecvtIwc10_mbstate_tE16do_always_noconvEv,a9:__ZNKSt7codecvtIwc10_mbstate_tE9do_lengthERS0_PKcS4_j,a10:__ZNKSt7codecvtIwc10_mbstate_tE13do_max_lengthEv};
var __ZZNSt12_GLOBAL__N_14makeISt7codecvtIwc10_mbstate_tEjEERT_T0_E3buf={a0:__ZTVSt7codecvtIwc10_mbstate_tE,i1:1,a2:null};
var __ZTSSt7codecvtIDsc10_mbstate_tE=new Uint8Array([83,116,55,99,111,100,101,99,118,116,73,68,115,99,49,48,95,109,98,115,116,97,116,101,95,116,69,0]);
var __ZTISt7codecvtIDsc10_mbstate_tE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt7codecvtIDsc10_mbstate_tE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt12codecvt_base,i1:2}]};
var __ZTVSt7codecvtIDsc10_mbstate_tE={a0:__ZTISt7codecvtIDsc10_mbstate_tE,a1:__ZNSt7codecvtIDsc10_mbstate_tED2Ev,a2:__ZNSt7codecvtIDsc10_mbstate_tED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt7codecvtIDsc10_mbstate_tE6do_outERS0_PKDsS4_RS4_PcS6_RS6_,a5:__ZNKSt7codecvtIDsc10_mbstate_tE5do_inERS0_PKcS4_RS4_PDsS6_RS6_,a6:__ZNKSt7codecvtIDsc10_mbstate_tE10do_unshiftERS0_PcS3_RS3_,a7:__ZNKSt7codecvtIDsc10_mbstate_tE11do_encodingEv,a8:__ZNKSt7codecvtIDsc10_mbstate_tE16do_always_noconvEv,a9:__ZNKSt7codecvtIDsc10_mbstate_tE9do_lengthERS0_PKcS4_j,a10:__ZNKSt7codecvtIDsc10_mbstate_tE13do_max_lengthEv};
var __ZZNSt12_GLOBAL__N_14makeISt7codecvtIDsc10_mbstate_tEjEERT_T0_E3buf={a0:__ZTVSt7codecvtIDsc10_mbstate_tE,i1:1};
var __ZTSSt7codecvtIDic10_mbstate_tE=new Uint8Array([83,116,55,99,111,100,101,99,118,116,73,68,105,99,49,48,95,109,98,115,116,97,116,101,95,116,69,0]);
var __ZTISt7codecvtIDic10_mbstate_tE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt7codecvtIDic10_mbstate_tE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt12codecvt_base,i1:2}]};
var __ZTVSt7codecvtIDic10_mbstate_tE={a0:__ZTISt7codecvtIDic10_mbstate_tE,a1:__ZNSt7codecvtIDic10_mbstate_tED2Ev,a2:__ZNSt7codecvtIDic10_mbstate_tED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt7codecvtIDic10_mbstate_tE6do_outERS0_PKDiS4_RS4_PcS6_RS6_,a5:__ZNKSt7codecvtIDic10_mbstate_tE5do_inERS0_PKcS4_RS4_PDiS6_RS6_,a6:__ZNKSt7codecvtIDic10_mbstate_tE10do_unshiftERS0_PcS3_RS3_,a7:__ZNKSt7codecvtIDic10_mbstate_tE11do_encodingEv,a8:__ZNKSt7codecvtIDic10_mbstate_tE16do_always_noconvEv,a9:__ZNKSt7codecvtIDic10_mbstate_tE9do_lengthERS0_PKcS4_j,a10:__ZNKSt7codecvtIDic10_mbstate_tE13do_max_lengthEv};
var __ZZNSt12_GLOBAL__N_14makeISt7codecvtIDic10_mbstate_tEjEERT_T0_E3buf={a0:__ZTVSt7codecvtIDic10_mbstate_tE,i1:1};
var __ZTSSt8numpunctIcE=new Uint8Array([83,116,56,110,117,109,112,117,110,99,116,73,99,69,0]);
var __ZTISt8numpunctIcE={a0:__ZTVN10__cxxabiv120__si_class_type_infoE,a1:__ZTSSt8numpunctIcE[0],a2:__ZTINSt6locale5facetE};
var __ZTVSt8numpunctIcE={a0:__ZTISt8numpunctIcE,a1:__ZNSt8numpunctIcED2Ev,a2:__ZNSt8numpunctIcED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt8numpunctIcE16do_decimal_pointEv,a5:__ZNKSt8numpunctIcE16do_thousands_sepEv,a6:__ZNKSt8numpunctIcE11do_groupingEv,a7:__ZNKSt8numpunctIcE11do_truenameEv,a8:__ZNKSt8numpunctIcE12do_falsenameEv};
var __ZZNSt12_GLOBAL__N_14makeISt8numpunctIcEjEERT_T0_E3buf={a0:__ZTVSt8numpunctIcE,i1:1,i2:11310,a3:{i0:0,i1:0,a2:nullArray}};
var __ZTSSt8numpunctIwE=new Uint8Array([83,116,56,110,117,109,112,117,110,99,116,73,119,69,0]);
var __ZTISt8numpunctIwE={a0:__ZTVN10__cxxabiv120__si_class_type_infoE,a1:__ZTSSt8numpunctIwE[0],a2:__ZTINSt6locale5facetE};
var __ZTVSt8numpunctIwE={a0:__ZTISt8numpunctIwE,a1:__ZNSt8numpunctIwED2Ev,a2:__ZNSt8numpunctIwED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt8numpunctIwE16do_decimal_pointEv,a5:__ZNKSt8numpunctIwE16do_thousands_sepEv,a6:__ZNKSt8numpunctIwE11do_groupingEv,a7:__ZNKSt8numpunctIwE11do_truenameEv,a8:__ZNKSt8numpunctIwE12do_falsenameEv};
var __ZZNSt12_GLOBAL__N_14makeISt8numpunctIwEjEERT_T0_E3buf={a0:__ZTVSt8numpunctIwE,i1:1,i2:46,i3:44,a4:{i0:0,i1:0,a2:nullArray}};
var __ZTSSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE=new Uint8Array([83,116,55,110,117,109,95,103,101,116,73,99,83,116,49,57,105,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,99,83,116,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,0]);
var __ZTSSt9__num_getIcE=new Uint8Array([83,116,57,95,95,110,117,109,95,103,101,116,73,99,69,0]);
var __ZTSSt14__num_get_base=new Uint8Array([83,116,49,52,95,95,110,117,109,95,103,101,116,95,98,97,115,101,0]);
var __ZTISt14__num_get_base={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt14__num_get_base[0]};
var __ZTISt9__num_getIcE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt9__num_getIcE[0],i2:0,i3:1,i4:0,a5:[{a0:__ZTISt14__num_get_base,i1:0}]};
var __ZTISt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt9__num_getIcE,i1:0}]};
var __ZTVSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE={a0:__ZTISt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE,a1:__ZNSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEED2Ev,a2:__ZNSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjRb,a5:__ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjRl,a6:__ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjRx,a7:__ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjRt,a8:__ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjS7_,a9:__ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjRm,a10:__ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjRy,a11:__ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjRf,a12:__ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjRd,a13:__ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjRe,a14:__ZNKSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjRPv};
var __ZZNSt12_GLOBAL__N_14makeISt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEEjEERT_T0_E3buf={a0:__ZTVSt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE,i1:1};
var __ZTSSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE=new Uint8Array([83,116,55,110,117,109,95,103,101,116,73,119,83,116,49,57,105,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,119,83,116,49,49,99,104,97,114,95,116,114,97,105,116,115,73,119,69,69,69,0]);
var __ZTSSt9__num_getIwE=new Uint8Array([83,116,57,95,95,110,117,109,95,103,101,116,73,119,69,0]);
var __ZTISt9__num_getIwE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt9__num_getIwE[0],i2:0,i3:1,i4:0,a5:[{a0:__ZTISt14__num_get_base,i1:0}]};
var __ZTISt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt9__num_getIwE,i1:0}]};
var __ZTVSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE={a0:__ZTISt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE,a1:__ZNSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEED2Ev,a2:__ZNSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjRb,a5:__ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjRl,a6:__ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjRx,a7:__ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjRt,a8:__ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjS7_,a9:__ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjRm,a10:__ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjRy,a11:__ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjRf,a12:__ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjRd,a13:__ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjRe,a14:__ZNKSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjRPv};
var __ZZNSt12_GLOBAL__N_14makeISt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEEjEERT_T0_E3buf={a0:__ZTVSt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE,i1:1};
var __ZTSSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE=new Uint8Array([83,116,55,110,117,109,95,112,117,116,73,99,83,116,49,57,111,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,99,83,116,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,0]);
var __ZTSSt9__num_putIcE=new Uint8Array([83,116,57,95,95,110,117,109,95,112,117,116,73,99,69,0]);
var __ZTSSt14__num_put_base=new Uint8Array([83,116,49,52,95,95,110,117,109,95,112,117,116,95,98,97,115,101,0]);
var __ZTISt14__num_put_base={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt14__num_put_base[0]};
var __ZTISt9__num_putIcE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt9__num_putIcE[0],i2:0,i3:1,i4:0,a5:[{a0:__ZTISt14__num_put_base,i1:0}]};
var __ZTISt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt9__num_putIcE,i1:0}]};
var __ZTVSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE={a0:__ZTISt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE,a1:__ZNSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEED2Ev,a2:__ZNSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_RSt8ios_basecb,a5:__ZNKSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_RSt8ios_basecl,a6:__ZNKSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_RSt8ios_basecx,a7:__ZNKSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_RSt8ios_basecm,a8:__ZNKSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_RSt8ios_basecy,a9:__ZNKSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_RSt8ios_basecd,a10:__ZNKSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_RSt8ios_basece,a11:__ZNKSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_RSt8ios_basecPKv};
var __ZZNSt12_GLOBAL__N_14makeISt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEEjEERT_T0_E3buf={a0:__ZTVSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE,i1:1};
var __ZTSSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE=new Uint8Array([83,116,55,110,117,109,95,112,117,116,73,119,83,116,49,57,111,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,119,83,116,49,49,99,104,97,114,95,116,114,97,105,116,115,73,119,69,69,69,0]);
var __ZTSSt9__num_putIwE=new Uint8Array([83,116,57,95,95,110,117,109,95,112,117,116,73,119,69,0]);
var __ZTISt9__num_putIwE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt9__num_putIwE[0],i2:0,i3:1,i4:0,a5:[{a0:__ZTISt14__num_put_base,i1:0}]};
var __ZTISt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt9__num_putIwE,i1:0}]};
var __ZTVSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE={a0:__ZTISt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE,a1:__ZNSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEED2Ev,a2:__ZNSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_RSt8ios_basewb,a5:__ZNKSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_RSt8ios_basewl,a6:__ZNKSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_RSt8ios_basewx,a7:__ZNKSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_RSt8ios_basewm,a8:__ZNKSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_RSt8ios_basewy,a9:__ZNKSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_RSt8ios_basewd,a10:__ZNKSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_RSt8ios_basewe,a11:__ZNKSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_RSt8ios_basewPKv};
var __ZZNSt12_GLOBAL__N_14makeISt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEEjEERT_T0_E3buf={a0:__ZTVSt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE,i1:1};
var __ZTSSt10moneypunctIcLb0EE=new Uint8Array([83,116,49,48,109,111,110,101,121,112,117,110,99,116,73,99,76,98,48,69,69,0]);
var __ZTSSt10money_base=new Uint8Array([83,116,49,48,109,111,110,101,121,95,98,97,115,101,0]);
var __ZTISt10money_base={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt10money_base[0]};
var __ZTISt10moneypunctIcLb0EE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt10moneypunctIcLb0EE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt10money_base,i1:2}]};
var __ZTVSt10moneypunctIcLb0EE={a0:__ZTISt10moneypunctIcLb0EE,a1:__ZNSt10moneypunctIcLb0EED2Ev,a2:__ZNSt10moneypunctIcLb0EED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt10moneypunctIcLb0EE16do_decimal_pointEv,a5:__ZNKSt10moneypunctIcLb0EE16do_thousands_sepEv,a6:__ZNKSt10moneypunctIcLb0EE11do_groupingEv,a7:__ZNKSt10moneypunctIcLb0EE14do_curr_symbolEv,a8:__ZNKSt10moneypunctIcLb0EE16do_positive_signEv,a9:__ZNKSt10moneypunctIcLb0EE16do_negative_signEv,a10:__ZNKSt10moneypunctIcLb0EE14do_frac_digitsEv,a11:__ZNKSt10moneypunctIcLb0EE13do_pos_formatEv,a12:__ZNKSt10moneypunctIcLb0EE13do_neg_formatEv};
var __ZZNSt12_GLOBAL__N_14makeISt10moneypunctIcLb0EEjEERT_T0_E3buf={a0:__ZTVSt10moneypunctIcLb0EE,i1:1};
var __ZTSSt10moneypunctIcLb1EE=new Uint8Array([83,116,49,48,109,111,110,101,121,112,117,110,99,116,73,99,76,98,49,69,69,0]);
var __ZTISt10moneypunctIcLb1EE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt10moneypunctIcLb1EE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt10money_base,i1:2}]};
var __ZTVSt10moneypunctIcLb1EE={a0:__ZTISt10moneypunctIcLb1EE,a1:__ZNSt10moneypunctIcLb1EED2Ev,a2:__ZNSt10moneypunctIcLb1EED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt10moneypunctIcLb1EE16do_decimal_pointEv,a5:__ZNKSt10moneypunctIcLb1EE16do_thousands_sepEv,a6:__ZNKSt10moneypunctIcLb1EE11do_groupingEv,a7:__ZNKSt10moneypunctIcLb1EE14do_curr_symbolEv,a8:__ZNKSt10moneypunctIcLb1EE16do_positive_signEv,a9:__ZNKSt10moneypunctIcLb1EE16do_negative_signEv,a10:__ZNKSt10moneypunctIcLb1EE14do_frac_digitsEv,a11:__ZNKSt10moneypunctIcLb1EE13do_pos_formatEv,a12:__ZNKSt10moneypunctIcLb1EE13do_neg_formatEv};
var __ZZNSt12_GLOBAL__N_14makeISt10moneypunctIcLb1EEjEERT_T0_E3buf={a0:__ZTVSt10moneypunctIcLb1EE,i1:1};
var __ZTSSt10moneypunctIwLb0EE=new Uint8Array([83,116,49,48,109,111,110,101,121,112,117,110,99,116,73,119,76,98,48,69,69,0]);
var __ZTISt10moneypunctIwLb0EE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt10moneypunctIwLb0EE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt10money_base,i1:2}]};
var __ZTVSt10moneypunctIwLb0EE={a0:__ZTISt10moneypunctIwLb0EE,a1:__ZNSt10moneypunctIwLb0EED2Ev,a2:__ZNSt10moneypunctIwLb0EED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt10moneypunctIwLb0EE16do_decimal_pointEv,a5:__ZNKSt10moneypunctIwLb0EE16do_thousands_sepEv,a6:__ZNKSt10moneypunctIwLb0EE11do_groupingEv,a7:__ZNKSt10moneypunctIwLb0EE14do_curr_symbolEv,a8:__ZNKSt10moneypunctIwLb0EE16do_positive_signEv,a9:__ZNKSt10moneypunctIwLb0EE16do_negative_signEv,a10:__ZNKSt10moneypunctIwLb0EE14do_frac_digitsEv,a11:__ZNKSt10moneypunctIwLb0EE13do_pos_formatEv,a12:__ZNKSt10moneypunctIwLb0EE13do_neg_formatEv};
var __ZZNSt12_GLOBAL__N_14makeISt10moneypunctIwLb0EEjEERT_T0_E3buf={a0:__ZTVSt10moneypunctIwLb0EE,i1:1};
var __ZTSSt10moneypunctIwLb1EE=new Uint8Array([83,116,49,48,109,111,110,101,121,112,117,110,99,116,73,119,76,98,49,69,69,0]);
var __ZTISt10moneypunctIwLb1EE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt10moneypunctIwLb1EE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt10money_base,i1:2}]};
var __ZTVSt10moneypunctIwLb1EE={a0:__ZTISt10moneypunctIwLb1EE,a1:__ZNSt10moneypunctIwLb1EED2Ev,a2:__ZNSt10moneypunctIwLb1EED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt10moneypunctIwLb1EE16do_decimal_pointEv,a5:__ZNKSt10moneypunctIwLb1EE16do_thousands_sepEv,a6:__ZNKSt10moneypunctIwLb1EE11do_groupingEv,a7:__ZNKSt10moneypunctIwLb1EE14do_curr_symbolEv,a8:__ZNKSt10moneypunctIwLb1EE16do_positive_signEv,a9:__ZNKSt10moneypunctIwLb1EE16do_negative_signEv,a10:__ZNKSt10moneypunctIwLb1EE14do_frac_digitsEv,a11:__ZNKSt10moneypunctIwLb1EE13do_pos_formatEv,a12:__ZNKSt10moneypunctIwLb1EE13do_neg_formatEv};
var __ZZNSt12_GLOBAL__N_14makeISt10moneypunctIwLb1EEjEERT_T0_E3buf={a0:__ZTVSt10moneypunctIwLb1EE,i1:1};
var __ZTSSt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE=new Uint8Array([83,116,57,109,111,110,101,121,95,103,101,116,73,99,83,116,49,57,105,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,99,83,116,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,0]);
var __ZTSSt11__money_getIcE=new Uint8Array([83,116,49,49,95,95,109,111,110,101,121,95,103,101,116,73,99,69,0]);
var __ZTISt11__money_getIcE={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt11__money_getIcE[0]};
var __ZTISt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt11__money_getIcE,i1:0}]};
var __ZTVSt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE={a0:__ZTISt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE,a1:__ZNSt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEED2Ev,a2:__ZNSt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_bRSt8ios_baseRjRe,a5:__ZNKSt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_bRSt8ios_baseRjRSs};
var __ZZNSt12_GLOBAL__N_14makeISt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEEjEERT_T0_E3buf={a0:__ZTVSt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE,i1:1};
var __ZTSSt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE=new Uint8Array([83,116,57,109,111,110,101,121,95,103,101,116,73,119,83,116,49,57,105,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,119,83,116,49,49,99,104,97,114,95,116,114,97,105,116,115,73,119,69,69,69,0]);
var __ZTSSt11__money_getIwE=new Uint8Array([83,116,49,49,95,95,109,111,110,101,121,95,103,101,116,73,119,69,0]);
var __ZTISt11__money_getIwE={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt11__money_getIwE[0]};
var __ZTISt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt11__money_getIwE,i1:0}]};
var __ZTVSt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE={a0:__ZTISt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE,a1:__ZNSt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEED2Ev,a2:__ZNSt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_bRSt8ios_baseRjRe,a5:__ZNKSt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_bRSt8ios_baseRjRSbIwS2_SaIwEE};
var __ZZNSt12_GLOBAL__N_14makeISt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEEjEERT_T0_E3buf={a0:__ZTVSt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE,i1:1};
var __ZTSSt9money_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE=new Uint8Array([83,116,57,109,111,110,101,121,95,112,117,116,73,99,83,116,49,57,111,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,99,83,116,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,0]);
var __ZTSSt11__money_putIcE=new Uint8Array([83,116,49,49,95,95,109,111,110,101,121,95,112,117,116,73,99,69,0]);
var __ZTISt11__money_putIcE={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt11__money_putIcE[0]};
var __ZTISt9money_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt9money_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt11__money_putIcE,i1:0}]};
var __ZTVSt9money_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE={a0:__ZTISt9money_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE,a1:__ZNSt9money_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEED2Ev,a2:__ZNSt9money_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt9money_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_bRSt8ios_basece,a5:__ZNKSt9money_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_bRSt8ios_basecRKSs};
var __ZZNSt12_GLOBAL__N_14makeISt9money_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEEjEERT_T0_E3buf={a0:__ZTVSt9money_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE,i1:1};
var __ZTSSt9money_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE=new Uint8Array([83,116,57,109,111,110,101,121,95,112,117,116,73,119,83,116,49,57,111,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,119,83,116,49,49,99,104,97,114,95,116,114,97,105,116,115,73,119,69,69,69,0]);
var __ZTSSt11__money_putIwE=new Uint8Array([83,116,49,49,95,95,109,111,110,101,121,95,112,117,116,73,119,69,0]);
var __ZTISt11__money_putIwE={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt11__money_putIwE[0]};
var __ZTISt9money_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt9money_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt11__money_putIwE,i1:0}]};
var __ZTVSt9money_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE={a0:__ZTISt9money_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE,a1:__ZNSt9money_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEED2Ev,a2:__ZNSt9money_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt9money_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_bRSt8ios_basewe,a5:__ZNKSt9money_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_bRSt8ios_basewRKSbIwS2_SaIwEE};
var __ZZNSt12_GLOBAL__N_14makeISt9money_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEEjEERT_T0_E3buf={a0:__ZTVSt9money_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE,i1:1};
var __ZTSSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE=new Uint8Array([83,116,56,116,105,109,101,95,103,101,116,73,99,83,116,49,57,105,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,99,83,116,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,0]);
var __ZTSSt9time_base=new Uint8Array([83,116,57,116,105,109,101,95,98,97,115,101,0]);
var __ZTISt9time_base={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt9time_base[0]};
var __ZTSSt20__time_get_c_storageIcE=new Uint8Array([83,116,50,48,95,95,116,105,109,101,95,103,101,116,95,99,95,115,116,111,114,97,103,101,73,99,69,0]);
var __ZTISt20__time_get_c_storageIcE={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt20__time_get_c_storageIcE[0]};
var __ZTISt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE[0],i2:0,i3:3,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt9time_base,i1:2},{a0:__ZTISt20__time_get_c_storageIcE,i1:256}]};
var __ZTVSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE={a0:{a0:__ZTISt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE,a1:__ZNSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEED2Ev,a2:__ZNSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE13do_date_orderEv,a5:__ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE11do_get_timeES3_S3_RSt8ios_baseRjP2tm,a6:__ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE11do_get_dateES3_S3_RSt8ios_baseRjP2tm,a7:__ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE14do_get_weekdayES3_S3_RSt8ios_baseRjP2tm,a8:__ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE16do_get_monthnameES3_S3_RSt8ios_baseRjP2tm,a9:__ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE11do_get_yearES3_S3_RSt8ios_baseRjP2tm,a10:__ZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjP2tmcc},a1:{a0:__ZTISt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE,a1:__ZNKSt20__time_get_c_storageIcE7__weeksEv,a2:__ZNKSt20__time_get_c_storageIcE8__monthsEv,a3:__ZNKSt20__time_get_c_storageIcE7__am_pmEv,a4:__ZNKSt20__time_get_c_storageIcE3__cEv,a5:__ZNKSt20__time_get_c_storageIcE3__rEv,a6:__ZNKSt20__time_get_c_storageIcE3__xEv,a7:__ZNKSt20__time_get_c_storageIcE3__XEv}};
var __ZZNSt12_GLOBAL__N_14makeISt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEEjEERT_T0_E3buf={a0:__ZTVSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE.a0,i1:1,a2:{a0:__ZTVSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE.a1}};
var __ZTSSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE=new Uint8Array([83,116,56,116,105,109,101,95,103,101,116,73,119,83,116,49,57,105,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,119,83,116,49,49,99,104,97,114,95,116,114,97,105,116,115,73,119,69,69,69,0]);
var __ZTSSt20__time_get_c_storageIwE=new Uint8Array([83,116,50,48,95,95,116,105,109,101,95,103,101,116,95,99,95,115,116,111,114,97,103,101,73,119,69,0]);
var __ZTISt20__time_get_c_storageIwE={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt20__time_get_c_storageIwE[0]};
var __ZTISt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE[0],i2:0,i3:3,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt9time_base,i1:2},{a0:__ZTISt20__time_get_c_storageIwE,i1:256}]};
var __ZTVSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE={a0:{a0:__ZTISt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE,a1:__ZNSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEED2Ev,a2:__ZNSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE13do_date_orderEv,a5:__ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE11do_get_timeES3_S3_RSt8ios_baseRjP2tm,a6:__ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE11do_get_dateES3_S3_RSt8ios_baseRjP2tm,a7:__ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE14do_get_weekdayES3_S3_RSt8ios_baseRjP2tm,a8:__ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE16do_get_monthnameES3_S3_RSt8ios_baseRjP2tm,a9:__ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE11do_get_yearES3_S3_RSt8ios_baseRjP2tm,a10:__ZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjP2tmcc},a1:{a0:__ZTISt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE,a1:__ZNKSt20__time_get_c_storageIwE7__weeksEv,a2:__ZNKSt20__time_get_c_storageIwE8__monthsEv,a3:__ZNKSt20__time_get_c_storageIwE7__am_pmEv,a4:__ZNKSt20__time_get_c_storageIwE3__cEv,a5:__ZNKSt20__time_get_c_storageIwE3__rEv,a6:__ZNKSt20__time_get_c_storageIwE3__xEv,a7:__ZNKSt20__time_get_c_storageIwE3__XEv}};
var __ZZNSt12_GLOBAL__N_14makeISt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEEjEERT_T0_E3buf={a0:__ZTVSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE.a0,i1:1,a2:{a0:__ZTVSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE.a1}};
var __ZTSSt8time_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE=new Uint8Array([83,116,56,116,105,109,101,95,112,117,116,73,99,83,116,49,57,111,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,99,83,116,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,0]);
var __ZTSSt10__time_put=new Uint8Array([83,116,49,48,95,95,116,105,109,101,95,112,117,116,0]);
var __ZTISt10__time_put={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt10__time_put[0]};
var __ZTISt8time_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt8time_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt10__time_put,i1:256}]};
var __ZTVSt8time_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE={a0:__ZTISt8time_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE,a1:__ZNSt8time_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEED2Ev,a2:__ZNSt8time_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt8time_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE6do_putES3_RSt8ios_basecPK2tmcc};
var __ZZNSt12_GLOBAL__N_14makeISt8time_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEEjEERT_T0_E3buf={a0:__ZTVSt8time_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE,i1:1,a2:{a0:null}};
var __ZTSSt8time_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE=new Uint8Array([83,116,56,116,105,109,101,95,112,117,116,73,119,83,116,49,57,111,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,119,83,116,49,49,99,104,97,114,95,116,114,97,105,116,115,73,119,69,69,69,0]);
var __ZTISt8time_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt8time_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt10__time_put,i1:256}]};
var __ZTVSt8time_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE={a0:__ZTISt8time_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE,a1:__ZNSt8time_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEED2Ev,a2:__ZNSt8time_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt8time_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE6do_putES3_RSt8ios_basewPK2tmcc};
var __ZZNSt12_GLOBAL__N_14makeISt8time_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEEjEERT_T0_E3buf={a0:__ZTVSt8time_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEE,i1:1,a2:{a0:null}};
var __ZTSSt8messagesIcE=new Uint8Array([83,116,56,109,101,115,115,97,103,101,115,73,99,69,0]);
var __ZTSSt13messages_base=new Uint8Array([83,116,49,51,109,101,115,115,97,103,101,115,95,98,97,115,101,0]);
var __ZTISt13messages_base={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt13messages_base[0]};
var __ZTISt8messagesIcE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt8messagesIcE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt13messages_base,i1:2}]};
var __ZTVSt8messagesIcE={a0:__ZTISt8messagesIcE,a1:__ZNSt8messagesIcED2Ev,a2:__ZNSt8messagesIcED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt8messagesIcE7do_openERKSsRKSt6locale,a5:__ZNKSt8messagesIcE6do_getEliiRKSs,a6:__ZNKSt8messagesIcE8do_closeEl};
var __ZZNSt12_GLOBAL__N_14makeISt8messagesIcEjEERT_T0_E3buf={a0:__ZTVSt8messagesIcE,i1:1};
var __ZTSSt8messagesIwE=new Uint8Array([83,116,56,109,101,115,115,97,103,101,115,73,119,69,0]);
var __ZTISt8messagesIwE={a0:__ZTVN10__cxxabiv121__vmi_class_type_infoE,a1:__ZTSSt8messagesIwE[0],i2:0,i3:2,i4:0,a5:[{a0:__ZTINSt6locale5facetE,i1:2},{a0:__ZTISt13messages_base,i1:2}]};
var __ZTVSt8messagesIwE={a0:__ZTISt8messagesIwE,a1:__ZNSt8messagesIwED2Ev,a2:__ZNSt8messagesIwED0Ev,a3:__ZNSt6locale5facet16__on_zero_sharedEv,a4:__ZNKSt8messagesIwE7do_openERKSsRKSt6locale,a5:__ZNKSt8messagesIwE6do_getEliiRKSbIwSt11char_traitsIwESaIwEE,a6:__ZNKSt8messagesIwE8do_closeEl};
var __ZZNSt12_GLOBAL__N_14makeISt8messagesIwEjEERT_T0_E3buf={a0:__ZTVSt8messagesIwE,i1:1};
var _promotedMalloc=[__ZZNSt12_GLOBAL__N_14makeISt7collateIcEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt7collateIwEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt5ctypeIcEDnbjEERT_T0_T1_T2_E3buf,__ZZNSt12_GLOBAL__N_14makeISt5ctypeIwEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt7codecvtIcc10_mbstate_tEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt7codecvtIwc10_mbstate_tEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt7codecvtIDsc10_mbstate_tEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt7codecvtIDic10_mbstate_tEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt8numpunctIcEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt8numpunctIwEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt7num_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt7num_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt7num_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt10moneypunctIcLb0EEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt10moneypunctIcLb1EEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt10moneypunctIwLb0EEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt10moneypunctIwLb1EEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt9money_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt9money_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt8time_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt8time_putIwSt19ostreambuf_iteratorIwSt11char_traitsIwEEEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt8messagesIcEjEERT_T0_E3buf,__ZZNSt12_GLOBAL__N_14makeISt8messagesIwEjEERT_T0_E3buf];
var _promotedMalloc$p1=new Uint8Array([67,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
var __ZZNSt12_GLOBAL__N_14makeINSt6locale5__impEjEERT_T0_E3buf={a0:__ZTVNSt6locale5__impE,i1:15,a2:{a0:_promotedMalloc,a0o:0,a1:_promotedMalloc,a1o:0+28|0,a2:{a0:_promotedMalloc[0+28|0]}},a3:{i0:17,i1:1,a2:_promotedMalloc$p1}};
var __ZStL7mb_cout={i0:0,i1:0};
var __ZStL6__cout={a0:__ZTVSt11__stdoutbufIcE,a1:{a0:__ZZNSt12_GLOBAL__N_14makeINSt6locale5__impEjEERT_T0_E3buf},a2:null,a3:nullArray,a3o:0,a4:nullArray,a5:null,a6:nullArray,a6o:0,a7:nullArray,a8:___sf_fake_stdout[$__sf_fake_stdout],a9:__ZZNSt12_GLOBAL__N_14makeISt7codecvtIcc10_mbstate_tEjEERT_T0_E3buf,a10:__ZStL7mb_cout,i11:1};
var __ZSt4cout={a0:__ZTVSo.a0,a1:{a0:__ZTVSo.a1,i1:4098,i2:6,i3:0,i4:0,i5:0,a6:__ZStL6__cout,a7:{a0:__ZZNSt12_GLOBAL__N_14makeINSt6locale5__impEjEERT_T0_E3buf},a8:nullArray,a8o:0,a9:nullArray,a9o:0,i10:0,i11:0,a12:null,i13:0,i14:0,a15:null,i16:0,i17:0,a18:null,i19:-1}};
create_class$p_ZSt13basic_ostreamIcSt11char_traitsIcEE(__ZSt4cout);
var __ZNSt5ctypeIcE2idE={i0:1,i1:3};
var __ZNSt6locale2id9__next_idE=28;
var __ctype_b=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,32,32,32,32,32,32,32,32,40,40,40,40,40,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,136,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,4,4,4,4,4,4,4,4,4,4,16,16,16,16,16,16,16,65,65,65,65,65,65,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,16,16,16,16,16,16,66,66,66,66,66,66,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,16,16,16,16,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
var _$pstr$p71$p403=new Uint8Array([74,97,110,0]);
var _$pstr$p72$p404=new Uint8Array([70,101,98,0]);
var _$pstr$p73$p405=new Uint8Array([77,97,114,0]);
var _$pstr$p74$p406=new Uint8Array([65,112,114,0]);
var _$pstr$p63$p395=new Uint8Array([77,97,121,0]);
var _$pstr$p75$p407=new Uint8Array([74,117,110,0]);
var _$pstr$p76$p408=new Uint8Array([74,117,108,0]);
var _$pstr$p77$p409=new Uint8Array([65,117,103,0]);
var _$pstr$p78$p410=new Uint8Array([83,101,112,0]);
var _$pstr$p79$p411=new Uint8Array([79,99,116,0]);
var _$pstr$p80$p412=new Uint8Array([78,111,118,0]);
var _$pstr$p81$p413=new Uint8Array([68,101,99,0]);
var _$pstr$p59$p391=new Uint8Array([74,97,110,117,97,114,121,0]);
var _$pstr$p60$p392=new Uint8Array([70,101,98,114,117,97,114,121,0]);
var _$pstr$p61$p393=new Uint8Array([77,97,114,99,104,0]);
var _$pstr$p62$p394=new Uint8Array([65,112,114,105,108,0]);
var _$pstr$p64$p396=new Uint8Array([74,117,110,101,0]);
var _$pstr$p65$p397=new Uint8Array([74,117,108,121,0]);
var _$pstr$p66$p398=new Uint8Array([65,117,103,117,115,116,0]);
var _$pstr$p67$p399=new Uint8Array([83,101,112,116,101,109,98,101,114,0]);
var _$pstr$p68$p400=new Uint8Array([79,99,116,111,98,101,114,0]);
var _$pstr$p69$p401=new Uint8Array([78,111,118,101,109,98,101,114,0]);
var _$pstr$p70$p402=new Uint8Array([68,101,99,101,109,98,101,114,0]);
var _$pstr$p36$p421=new Uint8Array([83,117,110,0]);
var _$pstr$p37$p422=new Uint8Array([77,111,110,0]);
var _$pstr$p38$p423=new Uint8Array([84,117,101,0]);
var _$pstr$p39$p424=new Uint8Array([87,101,100,0]);
var _$pstr$p40$p425=new Uint8Array([84,104,117,0]);
var _$pstr$p41$p426=new Uint8Array([70,114,105,0]);
var _$pstr$p42$p427=new Uint8Array([83,97,116,0]);
var _$pstr$p29$p414=new Uint8Array([83,117,110,100,97,121,0]);
var _$pstr$p30$p415=new Uint8Array([77,111,110,100,97,121,0]);
var _$pstr$p31$p416=new Uint8Array([84,117,101,115,100,97,121,0]);
var _$pstr$p32$p417=new Uint8Array([87,101,100,110,101,115,100,97,121,0]);
var _$pstr$p33$p418=new Uint8Array([84,104,117,114,115,100,97,121,0]);
var _$pstr$p34$p419=new Uint8Array([70,114,105,100,97,121,0]);
var _$pstr$p35$p420=new Uint8Array([83,97,116,117,114,100,97,121,0]);
var _$pstr$p107$p389=new Uint8Array([65,77,0]);
var _$pstr$p108$p390=new Uint8Array([80,77,0]);
var _$pstr$p16$p385=new Uint8Array([37,72,58,37,77,58,37,83,0]);
var _$pstr$p14$p386=new Uint8Array([37,109,47,37,100,47,37,121,0]);
var _$pstr$p40$p674=new Uint8Array([37,97,32,37,98,32,37,101,32,37,72,58,37,77,58,37,83,32,37,89,0]);
var _$pstr$p43$p677=new Uint8Array([37,97,32,37,98,32,37,101,32,37,72,58,37,77,58,37,83,32,37,90,32,37,89,0]);
var _$pstr$p44$p678=new Uint8Array([109,100,0]);
var _$pstr$p20$p387=new Uint8Array([37,73,58,37,77,58,37,83,32,37,112,0]);
var _$pstr$p1$p869=[0];
var __C_time_locale={a0:[{d:_$pstr$p71$p403,o:0},{d:_$pstr$p72$p404,o:0},{d:_$pstr$p73$p405,o:0},{d:_$pstr$p74$p406,o:0},{d:_$pstr$p63$p395,o:0},{d:_$pstr$p75$p407,o:0},{d:_$pstr$p76$p408,o:0},{d:_$pstr$p77$p409,o:0},{d:_$pstr$p78$p410,o:0},{d:_$pstr$p79$p411,o:0},{d:_$pstr$p80$p412,o:0},{d:_$pstr$p81$p413,o:0},{d:_$pstr$p59$p391,o:0},{d:_$pstr$p60$p392,o:0},{d:_$pstr$p61$p393,o:0},{d:_$pstr$p62$p394,o:0},{d:_$pstr$p63$p395,o:0},{d:_$pstr$p64$p396,o:0},{d:_$pstr$p65$p397,o:0},{d:_$pstr$p66$p398,o:0},{d:_$pstr$p67$p399,o:0},{d:_$pstr$p68$p400,o:0},{d:_$pstr$p69$p401,o:0},{d:_$pstr$p70$p402,o:0},{d:_$pstr$p36$p421,o:0},{d:_$pstr$p37$p422,o:0},{d:_$pstr$p38$p423,o:0},{d:_$pstr$p39$p424,o:0},{d:_$pstr$p40$p425,o:0},{d:_$pstr$p41$p426,o:0},{d:_$pstr$p42$p427,o:0},{d:_$pstr$p29$p414,o:0},{d:_$pstr$p30$p415,o:0},{d:_$pstr$p31$p416,o:0},{d:_$pstr$p32$p417,o:0},{d:_$pstr$p33$p418,o:0},{d:_$pstr$p34$p419,o:0},{d:_$pstr$p35$p420,o:0},{d:_$pstr$p107$p389,o:0},{d:_$pstr$p108$p390,o:0},{d:_$pstr$p59$p391,o:0},{d:_$pstr$p60$p392,o:0},{d:_$pstr$p61$p393,o:0},{d:_$pstr$p62$p394,o:0},{d:_$pstr$p63$p395,o:0},{d:_$pstr$p64$p396,o:0},{d:_$pstr$p65$p397,o:0},{d:_$pstr$p66$p398,o:0},{d:_$pstr$p67$p399,o:0},{d:_$pstr$p68$p400,o:0},{d:_$pstr$p69$p401,o:0},{d:_$pstr$p70$p402,o:0}],a1:_$pstr$p16$p385[0],a2:_$pstr$p14$p386[0],a3:_$pstr$p40$p674[0],a4:_$pstr$p43$p677[0],a5:_$pstr$p44$p678[0],a6:_$pstr$p20$p387[0],a7:_$pstr$p1$p869[0],a8:_$pstr$p1$p869[0],a9:_$pstr$p1$p869[0],a10:_$pstr$p1$p869[0],a11:_$pstr$p1$p869[0]};
var _$pstr$p56$p667=new Uint8Array([43,0]);
var _$pstr$p2$p515=new Uint8Array([37,115,37,48,46,42,100,0]);
var _$pstr$p516=new Uint8Array([37,115,37,46,42,100,0]);
var _$pstr$p45$p653=new Uint8Array([45,0]);
var _$pstr$p5$p518=new Uint8Array([37,46,50,100,0]);
var _$pstr$p6$p519=new Uint8Array([37,50,100,0]);
var _$pstr$p7$p520=new Uint8Array([37,46,50,100,47,37,46,50,100,47,37,46,50,100,0]);
var _$pstr$p11$p261=new Uint8Array([37,108,117,0]);
var _$pstr$p11$p524=new Uint8Array([37,46,51,100,0]);
var _$pstr$p12$p525=new Uint8Array([37,46,50,100,58,37,46,50,100,0]);
var _$pstr$p13$p526=new Uint8Array([37,46,50,100,58,37,46,50,100,58,37,46,50,100,0]);
var _tzinfo$p2=[{i0:74,i1:0,i2:0,i3:0,i4:0,i5:0,i6:0},{i0:74,i1:0,i2:0,i3:0,i4:0,i5:0,i6:0}];
var _$pstr$p14$p527=new Uint8Array([37,43,48,51,108,100,37,46,50,108,100,0]);
var _$pstr$p1$p706=new Uint8Array([71,77,84,0]);
var __tzname=[{d:_$pstr$p1$p706,o:0},{d:_$pstr$p1$p706,o:0}];
var __ZGVZNKSt20__time_get_c_storageIwE3__XEvE1s=0;
var __ZZNKSt20__time_get_c_storageIwE3__XEvE1s=[{i0:0,i1:0,a2:nullArray}];
var $_ZZNKSt20__time_get_c_storageIwE3__XEvE1s=0;
var __ZGVZNKSt20__time_get_c_storageIwE3__xEvE1s=0;
var __ZZNKSt20__time_get_c_storageIwE3__xEvE1s=[{i0:0,i1:0,a2:nullArray}];
var $_ZZNKSt20__time_get_c_storageIwE3__xEvE1s=0;
var __ZGVZNKSt20__time_get_c_storageIwE3__rEvE1s=0;
var __ZZNKSt20__time_get_c_storageIwE3__rEvE1s=[{i0:0,i1:0,a2:nullArray}];
var $_ZZNKSt20__time_get_c_storageIwE3__rEvE1s=0;
var __ZGVZNKSt20__time_get_c_storageIwE3__cEvE1s=0;
var __ZZNKSt20__time_get_c_storageIwE3__cEvE1s=[{i0:0,i1:0,a2:nullArray}];
var $_ZZNKSt20__time_get_c_storageIwE3__cEvE1s=0;
var __ZGVZNKSt20__time_get_c_storageIwE7__am_pmEvE5am_pm=0;
var __ZZNKSt20__time_get_c_storageIwE7__am_pmEvE5am_pm=nullArray;
var __ZGVZStL11init_wam_pmvE5am_pm=0;
var __ZZStL11init_wam_pmvE5am_pm=createArray_class$p_ZSbIwSt11char_traitsIwESaIwEE(24);
var _$pstr$p110$p346=new Int32Array([65,77,0]);
var _$pstr$p111$p347=new Int32Array([80,77,0]);
var __ZGVZNKSt20__time_get_c_storageIwE8__monthsEvE6months=0;
var __ZZNKSt20__time_get_c_storageIwE8__monthsEvE6months=nullArray;
var __ZGVZStL12init_wmonthsvE6months=0;
var __ZZStL12init_wmonthsvE6months=createArray_class$p_ZSbIwSt11char_traitsIwESaIwEE(24);
var _$pstr$p83$p348=new Int32Array([74,97,110,117,97,114,121,0]);
var _$pstr$p84$p349=new Int32Array([70,101,98,114,117,97,114,121,0]);
var _$pstr$p85$p350=new Int32Array([77,97,114,99,104,0]);
var _$pstr$p86$p351=new Int32Array([65,112,114,105,108,0]);
var _$pstr$p87$p352=new Int32Array([77,97,121,0]);
var _$pstr$p88$p353=new Int32Array([74,117,110,101,0]);
var _$pstr$p89$p354=new Int32Array([74,117,108,121,0]);
var _$pstr$p90$p355=new Int32Array([65,117,103,117,115,116,0]);
var _$pstr$p91$p356=new Int32Array([83,101,112,116,101,109,98,101,114,0]);
var _$pstr$p92$p357=new Int32Array([79,99,116,111,98,101,114,0]);
var _$pstr$p93$p358=new Int32Array([78,111,118,101,109,98,101,114,0]);
var _$pstr$p94$p359=new Int32Array([68,101,99,101,109,98,101,114,0]);
var _$pstr$p95$p360=new Int32Array([74,97,110,0]);
var _$pstr$p96$p361=new Int32Array([70,101,98,0]);
var _$pstr$p97$p362=new Int32Array([77,97,114,0]);
var _$pstr$p98$p363=new Int32Array([65,112,114,0]);
var _$pstr$p99$p364=new Int32Array([74,117,110,0]);
var _$pstr$p100$p365=new Int32Array([74,117,108,0]);
var _$pstr$p101$p366=new Int32Array([65,117,103,0]);
var _$pstr$p102$p367=new Int32Array([83,101,112,0]);
var _$pstr$p103$p368=new Int32Array([79,99,116,0]);
var _$pstr$p104$p369=new Int32Array([78,111,118,0]);
var _$pstr$p105$p370=new Int32Array([68,101,99,0]);
var __ZGVZNKSt20__time_get_c_storageIwE7__weeksEvE5weeks=0;
var __ZZNKSt20__time_get_c_storageIwE7__weeksEvE5weeks=nullArray;
var __ZGVZStL11init_wweeksvE5weeks=0;
var __ZZStL11init_wweeksvE5weeks=createArray_class$p_ZSbIwSt11char_traitsIwESaIwEE(14);
var _$pstr$p44$p371=new Int32Array([83,117,110,100,97,121,0]);
var _$pstr$p45$p372=new Int32Array([77,111,110,100,97,121,0]);
var _$pstr$p46$p373=new Int32Array([84,117,101,115,100,97,121,0]);
var _$pstr$p47$p374=new Int32Array([87,101,100,110,101,115,100,97,121,0]);
var _$pstr$p48$p375=new Int32Array([84,104,117,114,115,100,97,121,0]);
var _$pstr$p49$p376=new Int32Array([70,114,105,100,97,121,0]);
var _$pstr$p50$p377=new Int32Array([83,97,116,117,114,100,97,121,0]);
var _$pstr$p51$p378=new Int32Array([83,117,110,0]);
var _$pstr$p52$p379=new Int32Array([77,111,110,0]);
var _$pstr$p53$p380=new Int32Array([84,117,101,0]);
var _$pstr$p54$p381=new Int32Array([87,101,100,0]);
var _$pstr$p55$p382=new Int32Array([84,104,117,0]);
var _$pstr$p56$p383=new Int32Array([70,114,105,0]);
var _$pstr$p57$p384=new Int32Array([83,97,116,0]);
var __ZNSt5ctypeIwE2idE$p1=4;
var __ZZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm=new Int32Array([37,109,47,37,100,47,37,121]);
var __ZZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_0=new Int32Array([37,89,45,37,109,45,37,100]);
var __ZZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_1=new Int32Array([37,73,58,37,77,58,37,83,32,37,112]);
var __ZZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_2=new Int32Array([37,72,58,37,77]);
var __ZZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_3=new Int32Array([37,72,58,37,77,58,37,83]);
var __ZZNKSt8time_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE11do_get_timeES3_S3_RSt8ios_baseRjP2tmE5__fmt=new Int32Array([37,72,58,37,77,58,37,83]);
var __ZGVZNKSt20__time_get_c_storageIcE3__XEvE1s=0;
var __ZZNKSt20__time_get_c_storageIcE3__XEvE1s=[{i0:0,i1:0,a2:nullArray}];
var $_ZZNKSt20__time_get_c_storageIcE3__XEvE1s=0;
var __ZGVZNKSt20__time_get_c_storageIcE3__xEvE1s=0;
var __ZZNKSt20__time_get_c_storageIcE3__xEvE1s=[{i0:0,i1:0,a2:nullArray}];
var $_ZZNKSt20__time_get_c_storageIcE3__xEvE1s=0;
var __ZGVZNKSt20__time_get_c_storageIcE3__rEvE1s=0;
var __ZZNKSt20__time_get_c_storageIcE3__rEvE1s=[{i0:0,i1:0,a2:nullArray}];
var $_ZZNKSt20__time_get_c_storageIcE3__rEvE1s=0;
var __ZGVZNKSt20__time_get_c_storageIcE3__cEvE1s=0;
var __ZZNKSt20__time_get_c_storageIcE3__cEvE1s=[{i0:0,i1:0,a2:nullArray}];
var $_ZZNKSt20__time_get_c_storageIcE3__cEvE1s=0;
var __ZGVZNKSt20__time_get_c_storageIcE7__am_pmEvE5am_pm=0;
var __ZZNKSt20__time_get_c_storageIcE7__am_pmEvE5am_pm=nullArray;
var __ZGVZStL10init_am_pmvE5am_pm=0;
var __ZZStL10init_am_pmvE5am_pm=createArray_class$p_ZSbIcSt11char_traitsIcESaIcEE(24);
var __ZGVZNKSt20__time_get_c_storageIcE8__monthsEvE6months=0;
var __ZZNKSt20__time_get_c_storageIcE8__monthsEvE6months=nullArray;
var __ZGVZStL11init_monthsvE6months=0;
var __ZZStL11init_monthsvE6months=createArray_class$p_ZSbIcSt11char_traitsIcESaIcEE(24);
var __ZGVZNKSt20__time_get_c_storageIcE7__weeksEvE5weeks=0;
var __ZZNKSt20__time_get_c_storageIcE7__weeksEvE5weeks=nullArray;
var __ZGVZStL10init_weeksvE5weeks=0;
var __ZZStL10init_weeksvE5weeks=createArray_class$p_ZSbIcSt11char_traitsIcESaIcEE(14);
var __ZZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm=new Uint8Array([37,109,47,37,100,47,37,121]);
var __ZZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_0=new Uint8Array([37,89,45,37,109,45,37,100]);
var __ZZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_1=new Uint8Array([37,73,58,37,77,58,37,83,32,37,112]);
var __ZZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_2=new Uint8Array([37,72,58,37,77]);
var __ZZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_RSt8ios_baseRjP2tmccE4__fm_3=new Uint8Array([37,72,58,37,77,58,37,83]);
var __ZZNKSt8time_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE11do_get_timeES3_S3_RSt8ios_baseRjP2tmE5__fmt=new Uint8Array([37,72,58,37,77,58,37,83]);
var __ZNSt10moneypunctIwLb1EE2idE$p1=18;
var __ZNSt10moneypunctIwLb0EE2idE$p1=17;
var _$pstr$p7$p428=new Uint8Array([37,46,48,76,102,0]);
var _$pstr$p359=new Uint8Array([35,45,48,43,32,0]);
var _$pstr$p356=new Uint8Array([104,108,76,0]);
var _$pstr$p1$p364=new Uint8Array([105,110,102,0]);
var _$pstr$p365=new Uint8Array([73,78,70,0]);
var _$pstr$p3$p366=new Uint8Array([110,97,110,0]);
var _$pstr$p2$p367=new Uint8Array([78,65,78,0]);
var _$pstr$p22=new Uint8Array([73,110,102,105,110,105,116,121,0]);
var _$pstr$p3$p223=new Uint8Array([78,97,78,0]);
var ___mprec_tens=new Float64Array([1,10,100,1000,1.0E+4,1.0E+5,1.0E+6,1.0E+7,1.0E+8,1.0E+9,1.0E+10,1.0E+11,1.0E+12,1.0E+13,1.0E+14,1.0E+15,1.0E+16,1.0E+17,1.0E+18,1.0E+19,1.0E+20,1.0E+21,1.0E+22,9.9999999999999991E+22,9.9999999999999998E+23]);
var ___mprec_bigtens=new Float64Array([1.0E+16,1.0E+32,1.0E+64,1.0E+128,1.0E+256]);
var _$pstr$p2$p24=new Uint8Array([48,0]);
var _$pstr$p143$p642=new Uint8Array([46,0]);
var _$pstr$p1$p373=new Uint8Array([48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,0]);
var _$pstr$p374=new Uint8Array([48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,0]);
var ___pow5mult$pp05=new Int32Array([5,25,125]);
var __ZNSt10moneypunctIcLb1EE2idE$p1=16;
var __ZNSt10moneypunctIcLb0EE2idE$p1=15;
var __ZZNKSt9money_getIwSt19istreambuf_iteratorIwSt11char_traitsIwEEE6do_getES3_S3_bRSt8ios_baseRjReE5__src=new Uint8Array([48,49,50,51,52,53,54,55,56,57,0]);
var _$pstr$p15$p265=new Uint8Array([37,76,102,0]);
var _$pstr$p385=new Uint8Array([65,45,70,97,45,102,56,57,48,49,50,51,52,53,54,55,93,0]);
var _$pstr$p380=new Uint8Array([101,37,108,100,0]);
var _tinytens=new Float64Array([9.9999999999999997E-17,1.0E-32,9.9999999999999997E-65,1.0E-128,8.112963841460668E-225]);
var __ZZNKSt9money_getIcSt19istreambuf_iteratorIcSt11char_traitsIcEEE6do_getES3_S3_bRSt8ios_baseRjReE5__src=new Uint8Array([48,49,50,51,52,53,54,55,56,57,0]);
var __ZNSt8numpunctIwE2idE$p1=10;
var __ZNSt8numpunctIcE2idE$p1=9;
var __ZNSt14__num_get_base5__srcE=new Uint8Array([48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,65,66,67,68,69,70,120,88,43,45,112,80,105,73,110,78,0]);
var _$pstr$p8$p429=new Uint8Array([37,112,0]);
var _lc_ctype_charset=new Uint8Array([65,83,67,73,73,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
var _$pstr$p8$p249=new Uint8Array([74,73,83,0]);
var _$pstr$p12=new Uint8Array([83,74,73,83,0]);
var _$pstr$p11=new Uint8Array([69,85,67,74,80,0]);
var _b02cf=new Uint16Array([20124,21782,23043,38463,21696,24859,25384,23030,36898,33909,33564,31312,24746,25569,28197,26093,33894,33446,39925,26771,22311,26017,25201,23451,22992,34427,39156,32098,32190,39822,25110,31903,34999,23433,24245,25353,26263,26696,38343,38797,26447,20197,20234,20301,20381,20553,22258,22839,22996,23041,23561,24799,24847,24944,26131,26885,28858,30031,30064,31227,32173,32239,32963,33806,34915,35586,36949,36986,21307,20117,20133,22495,32946,37057,30959,19968,22769,28322,36920,31282,33576,33419,39983,20801,21360,21693,21729,22240,23035,24341,39154,28139,32996,34093,38498,38512,38560,38907,21515,21491,23431,28879,32701,36802,38632,21359,40284,31418,19985,30867,33276,28198,22040,21764,27421,34074,39995,23013,21417,28006,29916,38287,22082,20113,36939,38642,33615,39180,21473,21942,23344,24433,26144,26355,26628,27704,27891,27945,29787,30408,31310,38964,33521,34907,35424,37613,28082,30123,30410,39365,24742,35585,36234,38322,27022,21421,20870,22290,22576,22852,23476,24310,24616,25513,25588,27839,28436,28814,28948,29017,29141,29503,32257,33398,33489,34199,36960,37467,40219,22633,26044,27738,29989,20985,22830,22885,24448,24540,25276,26106,27178,27431,27572,29579,32705,35158,40236,40206,40644,23713,27798,33659,20740,23627,25014,33222,26742,29281,20057,20474,21368,24681,28201,31311,38899,19979,21270,20206,20309,20285,20385,20339,21152,21487,22025,22799,23233,23478,23521,31185,26247,26524,26550,27468,27827,28779,29634,31117,31166,31292,31623,33457,33499,33540,33655,33775,33747,34662,35506,22057,36008,36838,36942,38686,34442,20420,23784,25105,29273,30011,33253,33469,34558,36032,38597,39187,39381,20171,20250,35299,22238,22602,22730,24315,24555,24618,24724,24674,25040,25106,25296,25913,39745,26214,26800,28023,28784,30028,30342,32117,33445,34809,38283,38542,35997,20977,21182,22806,21683,23475,23830,24936,27010,28079,30861,33995,34903,35442,37799,39608,28012,39336,34521,22435,26623,34510,37390,21123,22151,21508,24275,25313,25785,26684,26680,27579,29554,30906,31339,35226,35282,36203,36611,37101,38307,38548,38761,23398,23731,27005,38989,38990,25499,31520,27179,27263,26806,39949,28511,21106,21917,24688,25324,27963,28167,28369,33883,35088,36676,19988,39993,21494,26907,27194,38788,26666,20828,31427,33970,37340,37772,22107,40232,26658,33541,33841,31909,21000,33477,29926,20094,20355,20896,23506,21002,21208,21223,24059,21914,22570,23014,23436,23448,23515,24178,24185,24739,24863,24931,25022,25563,25954,26577,26707,26874,27454,27475,27735,28450,28567,28485,29872,29976,30435,30475,31487,31649,31777,32233,32566,32752,32925,33382,33694,35251,35532,36011,36996,37969,38291,38289,38306,38501,38867,39208,33304,20024,21547,23736,24012,29609,30284,30524,23721,32747,36107,38593,38929,38996,39000,20225,20238,21361,21916,22120,22522,22855,23305,23492,23696,24076,24190,24524,25582,26426,26071,26082,26399,26827,26820,27231,24112,27589,27671,27773,30079,31048,23395,31232,32000,24509,35215,35352,36020,36215,36556,36637,39138,39438,39740,20096,20605,20736,22931,23452,25135,25216,25836,27450,29344,30097,31047,32681,34811,35516,35696,25516,33738,38816,21513,21507,21931,26708,27224,35440,30759,26485,40653,21364,23458,33050,34384,36870,19992,20037,20167,20241,21450,21560,23470,24339,24613,25937,26429,27714,27762,27875,28792,29699,31350,31406,31496,32026,31998,32102,26087,29275,21435,23621,24040,25298,25312,25369,28192,34394,35377,36317,37624,28417,31142,39770,20136,20139,20140,20379,20384,20689,20807,31478,20849,20982,21332,21281,21375,21483,21932,22659,23777,24375,24394,24623,24656,24685,25375,25945,27211,27841,29378,29421,30703,33016,33029,33288,34126,37111,37857,38911,39255,39514,20208,20957,23597,26241,26989,23616,26354,26997,29577,26704,31873,20677,21220,22343,24062,37670,26020,27427,27453,29748,31105,31165,31563,32202,33465,33740,34943,35167,35641,36817,37329,21535,37504,20061,20534,21477,21306,29399,29590,30697,33510,36527,39366,39368,39378,20855,24858,34398,21936,31354,20598,23507,36935,38533,20018,27355,37351,23633,23624,25496,31391,27795,38772,36705,31402,29066,38536,31874,26647,32368,26705,37740,21234,21531,34219,35347,32676,36557,37089,21350,34952,31041,20418,20670,21009,20804,21843,22317,29674,22411,22865,24418,24452,24693,24950,24935,25001,25522,25658,25964,26223,26690,28179,30054,31293,31995,32076,32153,32331,32619,33550,33610,34509,35336,35427,35686,36605,38938,40335,33464,36814,39912,21127,25119,25731,28608,38553,26689,20625,27424,27770,28500,31348,32080,34880,35363,26376,20214,20537,20518,20581,20860,21048,21091,21927,22287,22533,23244,24314,25010,25080,25331,25458,26908,27177,29309,29356,29486,30740,30831,32121,30476,32937,35211,35609,36066,36562,36963,37749,38522,38997,39443,40568,20803,21407,21427,24187,24358,28187,28304,29572,29694,32067,33335,35328,35578,38480,20046,20491,21476,21628,22266,22993,23396,24049,24235,24359,25144,25925,26543,28246,29392,31946,34996,32929,32993,33776,34382,35463,36328,37431,38599,39015,40723,20116,20114,20237,21320,21577,21566,23087,24460,24481,24735,26791,27278,29786,30849,35486,35492,35703,37264,20062,39881,20132,20348,20399,20505,20502,20809,20844,21151,21177,21246,21402,21475,21521,21518,21897,22353,22434,22909,23380,23389,23439,24037,24039,24055,24184,24195,24218,24247,24344,24658,24908,25239,25304,25511,25915,26114,26179,26356,26477,26657,26775,27083,27743,27946,28009,28207,28317,30002,30343,30828,31295,31968,32005,32024,32094,32177,32789,32771,32943,32945,33108,33167,33322,33618,34892,34913,35611,36002,36092,37066,37237,37489,30783,37628,38308,38477,38917,39321,39640,40251,21083,21163,21495,21512,22741,25335,28640,35946,36703,40633,20811,21051,21578,22269,31296,37239,40288,40658,29508,28425,33136,29969,24573,24794,39592,29403,36796,27492,38915,20170,22256,22372,22718,23130,24680,25031,26127,26118,26681,26801,28151,30165,32058,33390,39746,20123,20304,21449,21766,23919,24038,24046,26619,27801,29811,30722,35408,37782,35039,22352,24231,25387,20661,20652,20877,26368,21705,22622,22971,23472,24425,25165,25505,26685,27507,28168,28797,37319,29312,30741,30758,31085,25998,32048,33756,35009,36617,38555,21092,22312,26448,32618,36001,20916,22338,38442,22586,27018,32948,21682,23822,22524,30869,40442,20316,21066,21643,25662,26152,26388,26613,31364,31574,32034,37679,26716,39853,31545,21273,20874,21047,23519,25334,25774,25830,26413,27578,34217,38609,30352,39894,25420,37638,39851,30399,26194,19977,20632,21442,23665,24808,25746,25955,26719,29158,29642,29987,31639,32386,34453,35715,36059,37240,39184,26028,26283,27531,20181,20180,20282,20351,21050,21496,21490,21987,22235,22763,22987,22985,23039,23376,23629,24066,24107,24535,24605,25351,25903,23388,26031,26045,26088,26525,27490,27515,27663,29509,31049,31169,31992,32025,32043,32930,33026,33267,35222,35422,35433,35430,35468,35566,36039,36060,38604,39164,27503,20107,20284,20365,20816,23383,23546,24904,25345,26178,27425,28363,27835,29246,29885,30164,30913,31034,32780,32819,33258,33940,36766,27728,40575,24335,35672,40235,31482,36600,23437,38635,19971,21489,22519,22833,23241,23460,24713,28287,28422,30142,36074,23455,34048,31712,20594,26612,33437,23649,34122,32286,33294,20889,23556,25448,36198,26012,29038,31038,32023,32773,35613,36554,36974,34503,37034,20511,21242,23610,26451,28796,29237,37196,37320,37675,33509,23490,24369,24825,20027,21462,23432,25163,26417,27530,29417,29664,31278,33131,36259,37202,39318,20754,21463,21610,23551,25480,27193,32172,38656,22234,21454,21608,23447,23601,24030,20462,24833,25342,27954,31168,31179,32066,32333,32722,33261,33311,33936,34886,35186,35728,36468,36655,36913,37195,37228,38598,37276,20160,20303,20805,21313,24467,25102,26580,27713,28171,29539,32294,37325,37507,21460,22809,23487,28113,31069,32302,31899,22654,29087,20986,34899,36848,20426,23803,26149,30636,31459,33308,39423,20934,24490,26092,26991,27529,28147,28310,28516,30462,32020,24033,36981,37255,38918,20966,21021,25152,26257,26329,28186,24246,32210,32626,26360,34223,34295,35576,21161,21465,22899,24207,24464,24661,37604,38500,20663,20767,21213,21280,21319,21484,21736,21830,21809,22039,22888,22974,23100,23477,23558,23567,23569,23578,24196,24202,24288,24432,25215,25220,25307,25484,25463,26119,26124,26157,26230,26494,26786,27167,27189,27836,28040,28169,28248,28988,28966,29031,30151,30465,30813,30977,31077,31216,31456,31505,31911,32057,32918,33750,33931,34121,34909,35059,35359,35388,35412,35443,35937,36062,37284,37478,37758,37912,38556,38808,19978,19976,19998,20055,20887,21104,22478,22580,22732,23330,24120,24773,25854,26465,26454,27972,29366,30067,31331,33976,35698,37304,37664,22065,22516,39166,25325,26893,27542,29165,32340,32887,33394,35302,39135,34645,36785,23611,20280,20449,20405,21767,23072,23517,23529,24515,24910,25391,26032,26187,26862,27035,28024,28145,30003,30137,30495,31070,31206,32051,33251,33455,34218,35242,35386,36523,36763,36914,37341,38663,20154,20161,20995,22645,22764,23563,29978,23613,33102,35338,36805,38499,38765,31525,35535,38920,37218,22259,21416,36887,21561,22402,24101,25512,27700,28810,30561,31883,32736,34928,36930,37204,37648,37656,38543,29790,39620,23815,23913,25968,26530,36264,38619,25454,26441,26905,33733,38935,38592,35070,28548,25722,23544,19990,28716,30045,26159,20932,21046,21218,22995,24449,24615,25104,25919,25972,26143,26228,26866,26646,27491,28165,29298,29983,30427,31934,32854,22768,35069,35199,35488,35475,35531,36893,37266,38738,38745,25993,31246,33030,38587,24109,24796,25114,26021,26132,26512,30707,31309,31821,32318,33034,36012,36196,36321,36447,30889,20999,25305,25509,25666,25240,35373,31363,31680,35500,38634,32118,33292,34633,20185,20808,21315,21344,23459,23554,23574,24029,25126,25159,25776,26643,26676,27849,27973,27927,26579,28508,29006,29053,26059,31359,31661,32218,32330,32680,33146,33307,33337,34214,35438,36046,36341,36984,36983,37549,37521,38275,39854,21069,21892,28472,28982,20840,31109,32341,33203,31950,22092,22609,23720,25514,26366,26365,26970,29401,30095,30094,30990,31062,31199,31895,32032,32068,34311,35380,38459,36961,40736,20711,21109,21452,21474,20489,21930,22766,22863,29245,23435,23652,21277,24803,24819,25436,25475,25407,25531,25805,26089,26361,24035,27085,27133,28437,29157,20105,30185,30456,31379,31967,32207,32156,32865,33609,33624,33900,33980,34299,35013,36208,36865,36973,37783,38684,39442,20687,22679,24974,33235,34101,36104,36896,20419,20596,21063,21363,24687,25417,26463,28204,36275,36895,20439,23646,36042,26063,32154,21330,34966,20854,25539,23384,23403,23562,25613,26449,36956,20182,22810,22826,27760,35409,21822,22549,22949,24816,25171,26561,33333,26965,38464,39364,39464,20307,22534,23550,32784,23729,24111,24453,24608,24907,25140,26367,27888,28382,32974,33151,33492,34955,36024,36864,36910,38538,40667,39899,20195,21488,22823,31532,37261,38988,40441,28381,28711,21331,21828,23429,25176,25246,25299,27810,28655,29730,35351,37944,28609,35582,33592,20967,34552,21482,21481,20294,36948,36784,22890,33073,24061,31466,36799,26842,35895,29432,40008,27197,35504,20025,21336,22022,22374,25285,25506,26086,27470,28129,28251,28845,30701,31471,31658,32187,32829,32966,34507,35477,37723,22243,22727,24382,26029,26262,27264,27573,30007,35527,20516,30693,22320,24347,24677,26234,27744,30196,31258,32622,33268,34584,36933,39347,31689,30044,31481,31569,33988,36880,31209,31378,33590,23265,30528,20013,20210,23449,24544,25277,26172,26609,27880,34411,34935,35387,37198,37619,39376,27159,28710,29482,33511,33879,36015,19969,20806,20939,21899,23541,24086,24115,24193,24340,24373,24427,24500,25074,25361,26274,26397,28526,29266,30010,30522,32884,33081,33144,34678,35519,35548,36229,36339,37530,38263,38914,40165,21189,25431,30452,26389,27784,29645,36035,37806,38515,27941,22684,26894,27084,36861,37786,30171,36890,22618,26626,25524,27131,20291,28460,26584,36795,34086,32180,37716,26943,28528,22378,22775,23340,32044,29226,21514,37347,40372,20141,20302,20572,20597,21059,35998,21576,22564,23450,24093,24213,24237,24311,24351,24716,25269,25402,25552,26799,27712,30855,31118,31243,32224,33351,35330,35558,36420,36883,37048,37165,37336,40718,27877,25688,25826,25973,28404,30340,31515,36969,37841,28346,21746,24505,25764,36685,36845,37444,20856,22635,22825,23637,24215,28155,32399,29980,36028,36578,39003,28857,20253,27583,28593,30000,38651,20814,21520,22581,22615,22956,23648,24466,26007,26460,28193,30331,33759,36077,36884,37117,37709,30757,30778,21162,24230,22303,22900,24594,20498,20826,20908,20941,20992,21776,22612,22616,22871,23445,23798,23947,24764,25237,25645,26481,26691,26812,26847,30423,28120,28271,28059,28783,29128,24403,30168,31095,31561,31572,31570,31958,32113,21040,33891,34153,34276,35342,35588,35910,36367,36867,36879,37913,38518,38957,39472,38360,20685,21205,21516,22530,23566,24999,25758,27934,30643,31461,33012,33796,36947,37509,23776,40199,21311,24471,24499,28060,29305,30563,31167,31716,27602,29420,35501,26627,27233,20984,31361,26932,23626,40182,33515,23493,37193,28702,22136,23663,24775,25958,27788,35930,36929,38931,21585,26311,37389,22856,37027,20869,20045,20970,34201,35598,28760,25466,37707,26978,39348,32260,30071,21335,26976,36575,38627,27741,20108,23612,24336,36841,21250,36049,32905,34425,24319,26085,20083,20837,22914,23615,38894,20219,22922,24525,35469,28641,31152,31074,23527,33905,29483,29105,24180,24565,25467,25754,29123,31896,20035,24316,20043,22492,22178,24745,28611,32013,33021,33075,33215,36786,35223,34468,24052,25226,25773,35207,26487,27874,27966,29750,30772,23110,32629,33453,39340,20467,24259,25309,25490,25943,26479,30403,29260,32972,32954,36649,37197,20493,22521,23186,26757,26995,29028,29437,36023,22770,36064,38506,36889,34687,31204,30695,33833,20271,21093,21338,25293,26575,27850,30333,31636,31893,33334,34180,36843,26333,28448,29190,32283,33707,39361,40614,20989,31665,30834,31672,32903,31560,27368,24161,32908,30033,30048,20843,37474,28300,30330,37271,39658,20240,32624,25244,31567,38309,40169,22138,22617,34532,38588,20276,21028,21322,21453,21467,24070,25644,26001,26495,27710,27726,29256,29359,29677,30036,32321,33324,34281,36009,31684,37318,29033,38930,39151,25405,26217,30058,30436,30928,34115,34542,21290,21329,21542,22915,24199,24444,24754,25161,25209,25259,26000,27604,27852,30130,30382,30865,31192,32203,32631,32933,34987,35513,36027,36991,38750,39131,27147,31800,20633,23614,24494,26503,27608,29749,30473,32654,40763,26570,31255,21305,30091,39661,24422,33181,33777,32920,24380,24517,30050,31558,36924,26727,23019,23195,32016,30334,35628,20469,24426,27161,27703,28418,29922,31080,34920,35413,35961,24287,25551,30149,31186,33495,37672,37618,33948,34541,39981,21697,24428,25996,27996,28693,36007,36051,38971,25935,29942,19981,20184,22496,22827,23142,23500,20904,24067,24220,24598,25206,25975,26023,26222,28014,29238,31526,33104,33178,33433,35676,36000,36070,36212,38428,38468,20398,25771,27494,33310,33889,34154,37096,23553,26963,39080,33914,34135,20239,21103,24489,24133,26381,31119,33145,35079,35206,28149,24343,25173,27832,20175,29289,39826,20998,21563,22132,22707,24996,25198,28954,22894,31881,31966,32027,38640,25991,32862,19993,20341,20853,22592,24163,24179,24330,26564,20006,34109,38281,38491,31859,38913,20731,22721,30294,30887,21029,30629,34065,31622,20559,22793,29255,31687,32232,36794,36820,36941,20415,21193,23081,24321,38829,20445,33303,37610,22275,25429,27497,29995,35036,36628,31298,21215,22675,24917,25098,26286,27597,31807,33769,20515,20472,21253,21574,22577,22857,23453,23792,23791,23849,24214,25265,25447,25918,26041,26379,27861,27873,28921,30770,32299,32990,33459,33804,34028,34562,35090,35370,35914,37030,37586,39165,40179,40300,20047,20129,20621,21078,22346,22952,24125,24536,24537,25151,26292,26395,26576,26834,20882,32033,32938,33192,35584,35980,36031,37502,38450,21536,38956,21271,20693,21340,22696,25778,26420,29287,30566,31302,37350,21187,27809,27526,22528,24140,22868,26412,32763,20961,30406,25705,30952,39764,40635,22475,22969,26151,26522,27598,21737,27097,24149,33180,26517,39850,26622,40018,26717,20134,20451,21448,25273,26411,27819,36804,20397,32365,40639,19975,24930,28288,28459,34067,21619,26410,39749,24051,31637,23724,23494,34588,28234,34001,31252,33032,22937,31885,27665,30496,21209,22818,28961,29279,30683,38695,40289,26891,23167,23064,20901,21517,21629,26126,30431,36855,37528,40180,23018,29277,28357,20813,26825,32191,32236,38754,40634,25720,27169,33538,22916,23391,27611,29467,30450,32178,32791,33945,20786,26408,40665,30446,26466,21247,39173,23588,25147,31870,36016,21839,24758,32011,38272,21249,20063,20918,22812,29242,32822,37326,24357,30690,21380,24441,32004,34220,35379,36493,38742,26611,34222,37971,24841,24840,27833,30290,35565,36664,21807,20305,20778,21191,21451,23461,24189,24736,24962,25558,26377,26586,28263,28044,29494,29495,30001,31056,35029,35480,36938,37009,37109,38596,34701,22805,20104,20313,19982,35465,36671,38928,20653,24188,22934,23481,24248,25562,25594,25793,26332,26954,27096,27915,28342,29076,29992,31407,32650,32768,33865,33993,35201,35617,36362,36965,38525,39178,24958,25233,27442,27779,28020,32716,32764,28096,32645,34746,35064,26469,33713,38972,38647,27931,32097,33853,37226,20081,21365,23888,27396,28651,34253,34349,35239,21033,21519,23653,26446,26792,29702,29827,30178,35023,35041,37324,38626,38520,24459,29575,31435,33870,25504,30053,21129,27969,28316,29705,30041,30827,31890,38534,31452,40845,20406,24942,26053,34396,20102,20142,20698,20001,20940,23534,26009,26753,28092,29471,30274,30637,31260,31975,33391,35538,36988,37327,38517,38936,21147,32209,20523,21400,26519,28107,29136,29747,33256,36650,38563,40023,40607,29792,22593,28057,32047,39006,20196,20278,20363,20919,21169,23994,24604,29618,31036,33491,37428,38583,38646,38666,40599,40802,26278,27508,21015,21155,28872,35010,24265,24651,24976,28451,29001,31806,32244,32879,34030,36899,37676,21570,39791,27347,28809,36034,36335,38706,21172,23105,24266,24324,26391,27004,27028,28010,28431,29282,29436,31725,32769,32894,34635,37070,20845,40595,31108,32907,37682,35542,20525,21644,35441,27498,36036,33031,24785,26528,40434,20121,20120,39952,35435,34241,34152,26880,28286,30871,33109]);
var _d02f4=new Uint16Array([24332,19984,19989,20010,20017,20022,20028,20031,20034,20054,20056,20098,20101,35947,20106,33298,24333,20110,20126,20127,20128,20130,20144,20147,20150,20174,20173,20164,20166,20162,20183,20190,20205,20191,20215,20233,20314,20272,20315,20317,20311,20295,20342,20360,20367,20376,20347,20329,20336,20369,20335,20358,20374,20760,20436,20447,20430,20440,20443,20433,20442,20432,20452,20453,20506,20520,20500,20522,20517,20485,20252,20470,20513,20521,20524,20478,20463,20497,20486,20547,20551,26371,20565,20560,20552,20570,20566,20588,20600,20608,20634,20613,20660,20658,20681,20682,20659,20674,20694,20702,20709,20717,20707,20718,20729,20725,20745,20737,20738,20758,20757,20756,20762,20769,20794,20791,20796,20795,20799,20800,20818,20812,20820,20834,31480,20841,20842,20846,20864,20866,22232,20876,20873,20879,20881,20883,20885,20886,20900,20902,20898,20905,20906,20907,20915,20913,20914,20912,20917,20925,20933,20937,20955,20960,34389,20969,20973,20976,20981,20990,20996,21003,21012,21006,21031,21034,21038,21043,21049,21071,21060,21067,21068,21086,21076,21098,21108,21097,21107,21119,21117,21133,21140,21138,21105,21128,21137,36776,36775,21164,21165,21180,21173,21185,21197,21207,21214,21219,21222,39149,21216,21235,21237,21240,21241,21254,21256,30008,21261,21264,21263,21269,21274,21283,21295,21297,21299,21304,21312,21318,21317,19991,21321,21325,20950,21342,21353,21358,22808,21371,21367,21378,21398,21408,21414,21413,21422,21424,21430,21443,31762,38617,21471,26364,29166,21486,21480,21485,21498,21505,21565,21568,21548,21549,21564,21550,21558,21545,21533,21582,21647,21621,21646,21599,21617,21623,21616,21650,21627,21632,21622,21636,21648,21638,21703,21666,21688,21669,21676,21700,21704,21672,21675,21698,21668,21694,21692,21720,21733,21734,21775,21780,21757,21742,21741,21754,21730,21817,21824,21859,21836,21806,21852,21829,21846,21847,21816,21811,21853,21913,21888,21679,21898,21919,21883,21886,21912,21918,21934,21884,21891,21929,21895,21928,21978,21957,21983,21956,21980,21988,21972,22036,22007,22038,22014,22013,22043,22009,22094,22096,29151,22068,22070,22066,22072,22123,22116,22063,22124,22122,22150,22144,22154,22176,22164,22159,22181,22190,22198,22196,22210,22204,22209,22211,22208,22216,22222,22225,22227,22231,22254,22265,22272,22271,22276,22281,22280,22283,22285,22291,22296,22294,21959,22300,22310,22327,22328,22350,22331,22336,22351,22377,22464,22408,22369,22399,22409,22419,22432,22451,22436,22442,22448,22467,22470,22484,22482,22483,22538,22486,22499,22539,22553,22557,22642,22561,22626,22603,22640,27584,22610,22589,22649,22661,22713,22687,22699,22714,22750,22715,22712,22702,22725,22739,22737,22743,22745,22744,22757,22748,22756,22751,22767,22778,22777,22779,22780,22781,22786,22794,22800,22811,26790,22821,22828,22829,22834,22840,22846,31442,22869,22864,22862,22874,22872,22882,22880,22887,22892,22889,22904,22913,22941,20318,20395,22947,22962,22982,23016,23004,22925,23001,23002,23077,23071,23057,23068,23049,23066,23104,23148,23113,23093,23094,23138,23146,23194,23228,23230,23243,23234,23229,23267,23255,23270,23273,23254,23290,23291,23308,23307,23318,23346,23248,23338,23350,23358,23363,23365,23360,23377,23381,23386,23387,23397,23401,23408,23411,23413,23416,25992,23418,23424,23427,23462,23480,23491,23495,23497,23508,23504,23524,23526,23522,23518,23525,23531,23536,23542,23539,23557,23559,23560,23565,23571,23584,23586,23592,23608,23609,23617,23622,23630,23635,23632,23631,23409,23660,23662,20066,23670,23673,23692,23697,23700,22939,23723,23739,23734,23740,23735,23749,23742,23751,23769,23785,23805,23802,23789,23948,23786,23819,23829,23831,23900,23839,23835,23825,23828,23842,23834,23833,23832,23884,23890,23886,23883,23916,23923,23926,23943,23940,23938,23970,23965,23980,23982,23997,23952,23991,23996,24009,24013,24019,24018,24022,24027,24043,24050,24053,24075,24090,24089,24081,24091,24118,24119,24132,24131,24128,24142,24151,24148,24159,24162,24164,24135,24181,24182,24186,40636,24191,24224,24257,24258,24264,24272,24271,24278,24291,24285,24282,24283,24290,24289,24296,24297,24300,24305,24307,24304,24308,24312,24318,24323,24329,24413,24412,24331,24337,24342,24361,24365,24376,24385,24392,24396,24398,24367,24401,24406,24407,24409,24417,24429,24435,24439,24451,24450,24447,24458,24456,24465,24455,24478,24473,24472,24480,24488,24493,24508,24534,24571,24548,24568,24561,24541,24755,24575,24609,24672,24601,24592,24617,24590,24625,24603,24597,24619,24614,24591,24634,24666,24641,24682,24695,24671,24650,24646,24653,24675,24643,24676,24642,24684,24683,24665,24705,24717,24807,24707,24730,24708,24731,24726,24727,24722,24743,24715,24801,24760,24800,24787,24756,24560,24765,24774,24757,24792,24909,24853,24838,24822,24823,24832,24820,24826,24835,24865,24827,24817,24845,24846,24903,24894,24872,24871,24906,24895,24892,24876,24884,24893,24898,24900,24947,24951,24920,24921,24922,24939,24948,24943,24933,24945,24927,24925,24915,24949,24985,24982,24967,25004,24980,24986,24970,24977,25003,25006,25036,25034,25033,25079,25032,25027,25030,25018,25035,32633,25037,25062,25059,25078,25082,25076,25087,25085,25084,25086,25088,25096,25097,25101,25100,25108,25115,25118,25121,25130,25134,25136,25138,25139,25153,25166,25182,25187,25179,25184,25192,25212,25218,25225,25214,25234,25235,25238,25300,25219,25236,25303,25297,25275,25295,25343,25286,25812,25288,25308,25292,25290,25282,25287,25243,25289,25356,25326,25329,25383,25346,25352,25327,25333,25424,25406,25421,25628,25423,25494,25486,25472,25515,25462,25507,25487,25481,25503,25525,25451,25449,25534,25577,25536,25542,25571,25545,25554,25590,25540,25622,25652,25606,25619,25638,25654,25885,25623,25640,25615,25703,25711,25718,25678,25898,25749,25747,25765,25769,25736,25788,25818,25810,25797,25799,25787,25816,25794,25841,25831,33289,25824,25825,25260,25827,25839,25900,25846,25844,25842,25850,25856,25853,25880,25884,25861,25892,25891,25899,25908,25909,25911,25910,25912,30027,25928,25942,25941,25933,25944,25950,25949,25970,25976,25986,25987,35722,26011,26015,26027,26039,26051,26054,26049,26052,26060,26066,26075,26073,26080,26081,26097,26482,26122,26115,26107,26483,26165,26166,26164,26140,26191,26180,26185,26177,26206,26205,26212,26215,26216,26207,26210,26224,26243,26248,26254,26249,26244,26264,26269,26305,26297,26313,26302,26300,26308,26296,26326,26330,26336,26175,26342,26345,26352,26357,26359,26383,26390,26398,26406,26407,38712,26414,26431,26422,26433,26424,26423,26438,26462,26464,26457,26467,26468,26505,26480,26537,26492,26474,26508,26507,26534,26529,26501,26551,26607,26548,26604,26547,26601,26552,26596,26590,26589,26594,26606,26553,26574,26566,26599,27292,26654,26694,26665,26688,26701,26674,26702,26803,26667,26713,26723,26743,26751,26783,26767,26797,26772,26781,26779,26755,27310,26809,26740,26805,26784,26810,26895,26765,26750,26881,26826,26888,26840,26914,26918,26849,26892,26829,26836,26855,26837,26934,26898,26884,26839,26851,26917,26873,26848,26863,26920,26922,26906,26915,26913,26822,27001,26999,26972,27000,26987,26964,27006,26990,26937,26996,26941,26969,26928,26977,26974,26973,27009,26986,27058,27054,27088,27071,27073,27091,27070,27086,23528,27082,27101,27067,27075,27047,27182,27025,27040,27036,27029,27060,27102,27112,27138,27163,27135,27402,27129,27122,27111,27141,27057,27166,27117,27156,27115,27146,27154,27329,27171,27155,27204,27148,27250,27190,27256,27207,27234,27225,27238,27208,27192,27170,27280,27277,27296,27268,27298,27299,27287,34327,27323,27331,27330,27320,27315,27308,27358,27345,27359,27306,27354,27370,27387,27397,34326,27386,27410,27414,39729,27423,27448,27447,30428,27449,39150,27463,27459,27465,27472,27481,27476,27483,27487,27489,27512,27513,27519,27520,27524,27523,27533,27544,27541,27550,27556,27562,27563,27567,27570,27569,27571,27575,27580,27590,27595,27603,27615,27628,27627,27635,27631,40638,27656,27667,27668,27675,27684,27683,27742,27733,27746,27754,27778,27789,27802,27777,27803,27774,27752,27763,27794,27792,27844,27889,27859,27837,27863,27845,27869,27822,27825,27838,27834,27867,27887,27865,27882,27935,34893,27958,27947,27965,27960,27929,27957,27955,27922,27916,28003,28051,28004,27994,28025,27993,28046,28053,28644,28037,28153,28181,28170,28085,28103,28134,28088,28102,28140,28126,28108,28136,28114,28101,28154,28121,28132,28117,28138,28142,28205,28270,28206,28185,28274,28255,28222,28195,28267,28203,28278,28237,28191,28227,28218,28238,28196,28415,28189,28216,28290,28330,28312,28361,28343,28371,28349,28335,28356,28338,28372,28373,28303,28325,28354,28319,28481,28433,28748,28396,28408,28414,28479,28402,28465,28399,28466,28364,28478,28435,28407,28550,28538,28536,28545,28544,28527,28507,28659,28525,28546,28540,28504,28558,28561,28610,28518,28595,28579,28577,28580,28601,28614,28586,28639,28629,28652,28628,28632,28657,28654,28635,28681,28683,28666,28689,28673,28687,28670,28699,28698,28532,28701,28696,28703,28720,28734,28722,28753,28771,28825,28818,28847,28913,28844,28856,28851,28846,28895,28875,28893,28889,28937,28925,28956,28953,29029,29013,29064,29030,29026,29004,29014,29036,29071,29179,29060,29077,29096,29100,29143,29113,29118,29138,29129,29140,29134,29152,29164,29159,29173,29180,29177,29183,29197,29200,29211,29224,29229,29228,29232,29234,29243,29244,29247,29248,29254,29259,29272,29300,29310,29314,29313,29319,29330,29334,29346,29351,29369,29362,29379,29382,29380,29390,29394,29410,29408,29409,29433,29431,20495,29463,29450,29468,29462,29469,29492,29487,29481,29477,29502,29518,29519,40664,29527,29546,29544,29552,29560,29557,29563,29562,29640,29619,29646,29627,29632,29669,29678,29662,29858,29701,29807,29733,29688,29746,29754,29781,29759,29791,29785,29761,29788,29801,29808,29795,29802,29814,29822,29835,29854,29863,29898,29903,29908,29681,29920,29923,29927,29929,29934,29938,29936,29937,29944,29943,29956,29955,29957,29964,29966,29965,29973,29971,29982,29990,29996,30012,30020,30029,30026,30025,30043,30022,30042,30057,30052,30055,30059,30061,30072,30070,30086,30087,30068,30090,30089,30082,30100,30106,30109,30117,30115,30146,30131,30147,30133,30141,30136,30140,30129,30157,30154,30162,30169,30179,30174,30206,30207,30204,30209,30192,30202,30194,30195,30219,30221,30217,30239,30247,30240,30241,30242,30244,30260,30256,30267,30279,30280,30278,30300,30296,30305,30306,30312,30313,30314,30311,30316,30320,30322,30326,30328,30332,30336,30339,30344,30347,30350,30358,30355,30361,30362,30384,30388,30392,30393,30394,30402,30413,30422,30418,30430,30433,30437,30439,30442,34351,30459,30472,30471,30468,30505,30500,30494,30501,30502,30491,30519,30520,30535,30554,30568,30571,30555,30565,30591,30590,30585,30606,30603,30609,30624,30622,30640,30646,30649,30655,30652,30653,30651,30663,30669,30679,30682,30684,30691,30702,30716,30732,30738,31014,30752,31018,30789,30862,30836,30854,30844,30874,30860,30883,30901,30890,30895,30929,30918,30923,30932,30910,30908,30917,30922,30956,30951,30938,30973,30964,30983,30994,30993,31001,31020,31019,31040,31072,31063,31071,31066,31061,31059,31098,31103,31114,31133,31143,40779,31146,31150,31155,31161,31162,31177,31189,31207,31212,31201,31203,31240,31245,31256,31257,31264,31263,31104,31281,31291,31294,31287,31299,31319,31305,31329,31330,31337,40861,31344,31353,31357,31368,31383,31381,31384,31382,31401,31432,31408,31414,31429,31428,31423,36995,31431,31434,31437,31439,31445,31443,31449,31450,31453,31457,31458,31462,31469,31472,31490,31503,31498,31494,31539,31512,31513,31518,31541,31528,31542,31568,31610,31492,31565,31499,31564,31557,31605,31589,31604,31591,31600,31601,31596,31598,31645,31640,31647,31629,31644,31642,31627,31634,31631,31581,31641,31691,31681,31692,31695,31668,31686,31709,31721,31761,31764,31718,31717,31840,31744,31751,31763,31731,31735,31767,31757,31734,31779,31783,31786,31775,31799,31787,31805,31820,31811,31828,31823,31808,31824,31832,31839,31844,31830,31845,31852,31861,31875,31888,31908,31917,31906,31915,31905,31912,31923,31922,31921,31918,31929,31933,31936,31941,31938,31960,31954,31964,31970,39739,31983,31986,31988,31990,31994,32006,32002,32028,32021,32010,32069,32075,32046,32050,32063,32053,32070,32115,32086,32078,32114,32104,32110,32079,32099,32147,32137,32091,32143,32125,32155,32186,32174,32163,32181,32199,32189,32171,32317,32162,32175,32220,32184,32159,32176,32216,32221,32228,32222,32251,32242,32225,32261,32266,32291,32289,32274,32305,32287,32265,32267,32290,32326,32358,32315,32309,32313,32323,32311,32306,32314,32359,32349,32342,32350,32345,32346,32377,32362,32361,32380,32379,32387,32213,32381,36782,32383,32392,32393,32396,32402,32400,32403,32404,32406,32398,32411,32412,32568,32570,32581,32588,32589,32590,32592,32593,32597,32596,32600,32607,32608,32616,32617,32615,32632,32642,32646,32643,32648,32647,32652,32660,32670,32669,32666,32675,32687,32690,32697,32686,32694,32696,35697,32709,32710,32714,32725,32724,32737,32742,32745,32755,32761,39132,32774,32772,32779,32786,32792,32793,32796,32801,32808,32831,32827,32842,32838,32850,32856,32858,32863,32866,32872,32883,32882,32880,32886,32889,32893,32895,32900,32902,32901,32923,32915,32922,32941,20880,32940,32987,32997,32985,32989,32964,32986,32982,33033,33007,33009,33051,33065,33059,33071,33099,38539,33094,33086,33107,33105,33020,33137,33134,33125,33126,33140,33155,33160,33162,33152,33154,33184,33173,33188,33187,33119,33171,33193,33200,33205,33214,33208,33213,33216,33218,33210,33225,33229,33233,33241,33240,33224,33242,33247,33248,33255,33274,33275,33278,33281,33282,33285,33287,33290,33293,33296,33302,33321,33323,33336,33331,33344,33369,33368,33373,33370,33375,33380,33378,33384,33386,33387,33326,33393,33399,33400,33406,33421,33426,33451,33439,33467,33452,33505,33507,33503,33490,33524,33523,33530,33683,33539,33531,33529,33502,33542,33500,33545,33497,33589,33588,33558,33586,33585,33600,33593,33616,33605,33583,33579,33559,33560,33669,33690,33706,33695,33698,33686,33571,33678,33671,33674,33660,33717,33651,33653,33696,33673,33704,33780,33811,33771,33742,33789,33795,33752,33803,33729,33783,33799,33760,33778,33805,33826,33824,33725,33848,34054,33787,33901,33834,33852,34138,33924,33911,33899,33965,33902,33922,33897,33862,33836,33903,33913,33845,33994,33890,33977,33983,33951,34009,33997,33979,34010,34000,33985,33990,34006,33953,34081,34047,34036,34071,34072,34092,34079,34069,34068,34044,34112,34147,34136,34120,34113,34306,34123,34133,34176,34212,34184,34193,34186,34216,34157,34196,34203,34282,34183,34204,34167,34174,34192,34249,34234,34255,34233,34256,34261,34269,34277,34268,34297,34314,34323,34315,34302,34298,34310,34338,34330,34352,34367,34381,20053,34388,34399,34407,34417,34451,34467,34473,34474,34443,34444,34486,34479,34500,34502,34480,34505,34851,34475,34516,34526,34537,34540,34527,34523,34543,34578,34566,34568,34560,34563,34555,34577,34569,34573,34553,34570,34612,34623,34615,34619,34597,34601,34586,34656,34655,34680,34636,34638,34676,34647,34664,34670,34649,34643,34659,34666,34821,34722,34719,34690,34735,34763,34749,34752,34768,38614,34731,34756,34739,34759,34758,34747,34799,34802,34784,34831,34829,34814,34806,34807,34830,34770,34833,34838,34837,34850,34849,34865,34870,34873,34855,34875,34884,34882,34898,34905,34910,34914,34923,34945,34942,34974,34933,34941,34997,34930,34946,34967,34962,34990,34969,34978,34957,34980,34992,35007,34993,35011,35012,35028,35032,35033,35037,35065,35074,35068,35060,35048,35058,35076,35084,35082,35091,35139,35102,35109,35114,35115,35137,35140,35131,35126,35128,35148,35101,35168,35166,35174,35172,35181,35178,35183,35188,35191,35198,35203,35208,35210,35219,35224,35233,35241,35238,35244,35247,35250,35258,35261,35263,35264,35290,35292,35293,35303,35316,35320,35331,35350,35344,35340,35355,35357,35365,35382,35393,35419,35410,35398,35400,35452,35437,35436,35426,35461,35458,35460,35496,35489,35473,35493,35494,35482,35491,35524,35533,35522,35546,35563,35571,35559,35556,35569,35604,35552,35554,35575,35550,35547,35596,35591,35610,35553,35606,35600,35607,35616,35635,38827,35622,35627,35646,35624,35649,35660,35663,35662,35657,35670,35675,35674,35691,35679,35692,35695,35700,35709,35712,35724,35726,35730,35731,35734,35737,35738,35898,35905,35903,35912,35916,35918,35920,35925,35938,35948,35960,35962,35970,35977,35973,35978,35981,35982,35988,35964,35992,25117,36013,36010,36029,36018,36019,36014,36022,36040,36033,36068,36067,36058,36093,36090,36091,36100,36101,36106,36103,36111,36109,36112,40782,36115,36045,36116,36118,36199,36205,36209,36211,36225,36249,36290,36286,36282,36303,36314,36310,36300,36315,36299,36330,36331,36319,36323,36348,36360,36361,36351,36381,36382,36368,36383,36418,36405,36400,36404,36426,36423,36425,36428,36432,36424,36441,36452,36448,36394,36451,36437,36470,36466,36476,36481,36487,36485,36484,36491,36490,36499,36497,36500,36505,36522,36513,36524,36528,36550,36529,36542,36549,36552,36555,36571,36579,36604,36603,36587,36606,36618,36613,36629,36626,36633,36627,36636,36639,36635,36620,36646,36659,36667,36665,36677,36674,36670,36684,36681,36678,36686,36695,36700,36706,36707,36708,36764,36767,36771,36781,36783,36791,36826,36837,36834,36842,36847,36999,36852,36869,36857,36858,36881,36885,36897,36877,36894,36886,36875,36903,36918,36917,36921,36856,36943,36944,36945,36946,36878,36937,36926,36950,36952,36958,36968,36975,36982,38568,36978,36994,36989,36993,36992,37002,37001,37007,37032,37039,37041,37045,37090,37092,25160,37083,37122,37138,37145,37170,37168,37194,37206,37208,37219,37221,37225,37235,37234,37259,37257,37250,37282,37291,37295,37290,37301,37300,37306,37312,37313,37321,37323,37328,37334,37343,37345,37339,37372,37365,37366,37406,37375,37396,37420,37397,37393,37470,37463,37445,37449,37476,37448,37525,37439,37451,37456,37532,37526,37523,37531,37466,37583,37561,37559,37609,37647,37626,37700,37678,37657,37666,37658,37667,37690,37685,37691,37724,37728,37756,37742,37718,37808,37804,37805,37780,37817,37846,37847,37864,37861,37848,37827,37853,37840,37832,37860,37914,37908,37907,37891,37895,37904,37942,37931,37941,37921,37946,37953,37970,37956,37979,37984,37986,37982,37994,37417,38000,38005,38007,38013,37978,38012,38014,38017,38015,38274,38279,38282,38292,38294,38296,38297,38304,38312,38311,38317,38332,38331,38329,38334,38346,28662,38339,38349,38348,38357,38356,38358,38364,38369,38373,38370,38433,38440,38446,38447,38466,38476,38479,38475,38519,38492,38494,38493,38495,38502,38514,38508,38541,38552,38549,38551,38570,38567,38577,38578,38576,38580,38582,38584,38585,38606,38603,38601,38605,35149,38620,38669,38613,38649,38660,38662,38664,38675,38670,38673,38671,38678,38681,38692,38698,38704,38713,38717,38718,38724,38726,38728,38722,38729,38748,38752,38756,38758,38760,21202,38763,38769,38777,38789,38780,38785,38778,38790,38795,38799,38800,38812,38824,38822,38819,38835,38836,38851,38854,38856,38859,38876,38893,40783,38898,31455,38902,38901,38927,38924,38968,38948,38945,38967,38973,38982,38991,38987,39019,39023,39024,39025,39028,39027,39082,39087,39089,39094,39108,39107,39110,39145,39147,39171,39177,39186,39188,39192,39201,39197,39198,39204,39200,39212,39214,39229,39230,39234,39241,39237,39248,39243,39249,39250,39244,39253,39319,39320,39333,39341,39342,39356,39391,39387,39389,39384,39377,39405,39406,39409,39410,39419,39416,39425,39439,39429,39394,39449,39467,39479,39493,39490,39488,39491,39486,39509,39501,39515,39511,39519,39522,39525,39524,39529,39531,39530,39597,39600,39612,39616,39631,39633,39635,39636,39646,39647,39650,39651,39654,39663,39659,39662,39668,39665,39671,39675,39686,39704,39706,39711,39714,39715,39717,39719,39720,39721,39722,39726,39727,39730,39748,39747,39759,39757,39758,39761,39768,39796,39827,39811,39825,39830,39831,39839,39840,39848,39860,39872,39882,39865,39878,39887,39889,39890,39907,39906,39908,39892,39905,39994,39922,39921,39920,39957,39956,39945,39955,39948,39942,39944,39954,39946,39940,39982,39963,39973,39972,39969,39984,40007,39986,40006,39998,40026,40032,40039,40054,40056,40167,40172,40176,40201,40200,40171,40195,40198,40234,40230,40367,40227,40223,40260,40213,40210,40257,40255,40254,40262,40264,40285,40286,40292,40273,40272,40281,40306,40329,40327,40363,40303,40314,40346,40356,40361,40370,40388,40385,40379,40376,40378,40390,40399,40386,40409,40403,40440,40422,40429,40431,40445,40474,40475,40478,40565,40569,40573,40577,40584,40587,40588,40594,40597,40593,40605,40613,40617,40632,40618,40621,38753,40652,40654,40655,40656,40660,40668,40670,40669,40672,40677,40680,40687,40692,40694,40695,40697,40699,40700,40701,40711,40712,30391,40725,40737,40748,40766,40778,40786,40788,40803,40799,40800,40801,40806,40807,40812,40810,40823,40818,40822,40853,40860,40864,22575,27079,36953,29796,20956,29081]);
var _a1=new Uint16Array([12288,12289,12290,65292,65294,12539,65306,65307,65311,65281,12443,12444,180,65344,168,65342,8254,65343,12541,12542,12445,12446,12291,20189,12293,12294,12295,12540,8212,8208,65295,65340,12316,8214,65372,8230,8229,8216,8217,8220,8221,65288,65289,12308,12309,65339,65341,65371,65373,12296,12297,12298,12299,12300,12301,12302,12303,12304,12305,65291,8722,177,215,247,65309,8800,65308,65310,8806,8807,8734,8756,9794,9792,176,8242,8243,8451,165,65284,162,163,65285,65283,65286,65290,65312,167,9734,9733,9675,9679,9678,9671]);
var _a2=new Uint16Array([9670,9633,9632,9651,9650,9661,9660,8251,12306,8594,8592,8593,8595,12307,0,0,0,0,0,0,0,0,0,0,0,8712,8715,8838,8839,8834,8835,8746,8745,0,0,0,0,0,0,0,0,8743,8744,172,8658,8660,8704,8707,8745,0,0,0,0,0,0,0,0,0,0,8736,8869,8978,8706,8711,8801,8786,8810,8811,8730,8765,8733,8757,8747,8748,0,0,0,0,0,0,0,8491,8240,9839,9837,9834,8224,8225,182,8748,0,0,0,9711]);
var _a3=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
var _a6=new Uint16Array([913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,931,932,933,934,935,936,937,0,0,0,0,0,0,0,0,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,963,964,965,966,967,968,969]);
var _a7=new Uint16Array([1040,1041,1042,1043,1044,1045,1025,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1072,1073,1074,1075,1076,1077,1105,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103]);
var _a8=new Uint16Array([9472,9474,9484,9488,9496,9492,9500,9516,9508,9524,9532,9473,9475,9487,9491,9499,9495,9507,9523,9515,9531,9547,9504,9519,9512,9527,9535,9501,9520,9509,9528,9538]);
var __ZNSt7codecvtIcc10_mbstate_tE2idE$p1=5;
var __ZTVSt15basic_streambufIcSt11char_traitsIcEE={a0:__ZTISt15basic_streambufIcSt11char_traitsIcEE,a1:__ZNSt15basic_streambufIcSt11char_traitsIcEED2Ev,a2:__ZNSt15basic_streambufIcSt11char_traitsIcEED0Ev,a3:__ZNSt15basic_streambufIcSt11char_traitsIcEE5imbueERKSt6locale,a4:__ZNSt15basic_streambufIcSt11char_traitsIcEE6setbufEPcl,a5:__ZNSt15basic_streambufIcSt11char_traitsIcEE7seekoffElNSt8ios_base7seekdirEj,a6:__ZNSt15basic_streambufIcSt11char_traitsIcEE7seekposESt4fposI10_mbstate_tEj,a7:__ZNSt15basic_streambufIcSt11char_traitsIcEE4syncEv,a8:__ZNSt15basic_streambufIcSt11char_traitsIcEE9showmanycEv,a9:__ZNSt15basic_streambufIcSt11char_traitsIcEE6xsgetnEPcl,a10:__ZNSt15basic_streambufIcSt11char_traitsIcEE9underflowEv,a11:__ZNSt15basic_streambufIcSt11char_traitsIcEE5uflowEv,a12:__ZNSt15basic_streambufIcSt11char_traitsIcEE9pbackfailEi,a13:__ZNSt15basic_streambufIcSt11char_traitsIcEE6xsputnEPKcl,a14:__ZNSt15basic_streambufIcSt11char_traitsIcEE8overflowEi};
var __ZTVSt8ios_base={a0:__ZTISt8ios_base,a1:__ZNSt8ios_baseD2Ev,a2:__ZNSt8ios_baseD0Ev};
var __ZNSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE2idE$p1=13;
function constructor_class$p_ZSt9basic_iosIcSt11char_traitsIcEE(){
	this.a0=null;
	this.i1=0;
	this.i2=0;
	this.i3=0;
	this.i4=0;
	this.i5=0;
	this.a6=null;
	this.a7={a0:null};
	this.a8=nullArray;
	this.a8o=0;
	this.a9=nullArray;
	this.a9o=0;
	this.i10=0;
	this.i11=0;
	this.a12=null;
	this.i13=0;
	this.i14=0;
	this.a15=null;
	this.i16=0;
	this.i17=0;
	this.a18=null;
	this.i19=0;
	create_class$p_ZSt9basic_iosIcSt11char_traitsIcEE(this)}
function constructor_class$p_ZSt11__stdoutbufIcE(){
	this.a0=null;
	this.a1={a0:null};
	this.a2=null;
	this.a3=nullArray;
	this.a3o=0;
	this.a4=nullArray;
	this.a5=null;
	this.a6=nullArray;
	this.a6o=0;
	this.a7=nullArray;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	this.i11=0;
}
function constructor_struct$p_Z9lc_time_T(){
	this.a0=createPointerArray([],0,52,nullObj);
	this.a1=null;
	this.a2=null;
	this.a3=null;
	this.a4=null;
	this.a5=null;
	this.a6=null;
	this.a7=null;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	this.a11=null;
}
function construct_literal30(){
	this.a0=null;
	this.a1=null;
	this.a2=null;
	this.a3=null;
	this.a4=null;
	this.a5=null;
	this.a6=null;
	this.a7=null;
	this.a8=null;
}
function constructor_struct$p_Z11_prt_data_t(){
	this.i0=0;
	this.i1=0;
	this.i2=0;
	this.i3=0;
	this.i4=0;
	this.i5=0;
	this.i6=0;
	this.a7=[0];
	this.a8=[0];
	this.a9=new Uint8Array(50);
	this.d10=-0.;
	this.i11=0;
}
function construct_literal38(){
	this.a0=null;
	this.a1=null;
	this.a2=null;
	this.a3=null;
	this.a4=null;
	this.a5=null;
	this.a6=null;
	this.a7=null;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	this.a11=null;
	this.a12=null;
	this.a13=null;
	this.a14=null;
	this.a15=null;
}
function construct_literal40(){
	this.a0=null;
	this.a1=null;
	this.a2=null;
	this.a3=null;
	this.a4=null;
	this.a5=null;
	this.a6=null;
	this.a7=null;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	this.a11=null;
	this.a12=null;
}
function constructor_struct$p_ZN10__cxxabiv119__dynamic_cast_infoE(){
	this.a0=null;
	this.i1=0;
	this.a2=null;
	this.i3=0;
	this.a4=null;
	this.i5=0;
	this.i6=0;
	this.i7=0;
	this.i8=0;
	this.i9=0;
	this.i10=0;
	this.i11=0;
	this.i12=0;
	this.i13=0;
	this.i14=0;
	this.i15=0;
}
function constructor_class$p_Z10maxiSample(){
	this.d0=-0.;
	this.d1=-0.;
	this.d2=-0.;
	this.d3=-0.;
	this.a4={d0:-0.,d1:-0.,d2:-0.};
	this.i5=0;
	this.i6=0;
	this.a7={d0:-0.,i1:0};
	this.a8=null;
}
function construct_literal49(){
	this.a0=null;
	this.a1=null;
	this.a2=null;
	this.a3=null;
	this.a4=null;
	this.a5=null;
	this.a6=null;
	this.a7=null;
	this.a8=null;
	this.a9=null;
	this.a10=null;
}
function construct_literal59(){
	this.a0=null;
	this.a1=null;
	this.a2=null;
	this.a3=null;
	this.a4=null;
	this.a5=null;
	this.a6=null;
	this.a7=null;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	this.a11=null;
}
function constructor_struct$p_Z7__sFILE(){
	this.a0=nullArray;
	this.a0o=0;
	this.i1=0;
	this.i2=0;
	this.i3=0;
	this.a4={a0:nullArray,a0o:0,i1:0};
	this.i5=0;
	this.a6=null;
	this.a7=nullArray;
	this.a7o=0;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	this.a11=null;
	this.a12={a0:nullArray,a0o:0,i1:0};
	this.a13=nullArray;
	this.a13o=0;
	this.i14=0;
	this.a15=new Uint8Array(4);
	this.a16={a0:nullArray,a0o:0,i1:0};
	this.i17=0;
	this.i18=0;
	this.i19=0;
	this.a20={i0:0,i1:0};
	this.i21=0;
}
function constructor_struct$p_Z6_reent(){
	this.i0=0;
	this.a1=nullArray;
	this.a1o=0;
	this.a2=nullArray;
	this.a2o=0;
	this.a3=nullArray;
	this.a3o=0;
	this.i4=0;
	this.a5=null;
	this.i6=0;
	this.i7=0;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	this.i11=0;
	this.i12=0;
	this.a13=null;
	this.a14=null;
	this.a15=null;
	this.a16=null;
	this.a17=null;
	this.a18=null;
	this.a19={a0:null,i1:0,a2:createPointerArray([],0,32,null),a3:null};
	this.a20={a0:null,i1:0,a2:nullArray};
	this.a21=null;
	this.a22=null;
	this.a23=null;
}
function constructor_struct$p_Z11_misc_reent(){
	this.a0=null;
	this.a1={i0:0,i1:0};
	this.a2={i0:0,i1:0};
	this.a3={i0:0,i1:0};
	this.a4=new Uint8Array(8);
	this.i5=0;
	this.a6={i0:0,i1:0};
	this.a7={i0:0,i1:0};
	this.a8={i0:0,i1:0};
	this.a9={i0:0,i1:0};
	this.a10={i0:0,i1:0};
}
function construct_literal89(){
	this.a0=null;
	this.a1=null;
	this.a2=null;
	this.a3=null;
	this.a4=null;
	this.a5=null;
	this.a6=null;
	this.a7=null;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	this.a11=null;
	this.a12=null;
	this.a13=null;
	this.a14=null;
}
function constructor_struct$p_Z12_scan_data_t(){
	this.i0=0;
	this.i1=0;
	this.i2=0;
	this.i3=0;
	this.i4=0;
	this.a5=nullArray;
	this.i6=0;
	this.a7=new Uint8Array(350);
	this.a8=null;
	this.a9=null;
}
function constructor_class$p_Z10maxiFilter(){
	this.d0=-0.;
	this.d1=-0.;
	this.d2=-0.;
	this.a3=new Float64Array(20);
	this.d4=-0.;
	this.d5=-0.;
	this.d6=-0.;
	this.d7=-0.;
	this.d8=-0.;
	this.d9=-0.;
	this.d10=-0.;
}
function create_class$p_ZSt9basic_iosIcSt11char_traitsIcEE(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	return obj;}
function create_class$p_ZSt13basic_ostreamIcSt11char_traitsIcEE(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a1;
	obj.a1.o=1;
	obj.a1.a=a;
	return obj;}
function createArray_class$p_ZSbIcSt11char_traitsIcESaIcEE(e){
	var r=[];
	for(var i=0;i<e;i++)
	r[i]={i0:0,i1:0,a2:nullArray};
	return r;
}
function createArray_class$p_ZSbIwSt11char_traitsIwESaIwEE(e){
	var r=[];
	for(var i=0;i<e;i++)
	r[i]={i0:0,i1:0,a2:nullArray};
	return r;
}
function createArray_literal2(e){
	var r=[];
	for(var i=0;i<e;i++)
	r[i]=-0.;
	return r;
}
function createPointerArray(r,s,e,v){for(var i=s;i<e;i++)r[i]=v;return r;}
function handleVAArg(ptr){var ret=ptr.d[ptr.o];ptr.o++;return ret;}
function maxiSettings(){
	this.i0=0;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN12maxiSettingsC1Ev(this);
}
maxiSettings.setup=function (a0,a1,a2){
	return __ZN12maxiSettings5setupEiii(a0,a1,a2);
};
maxiSettings.getSampleRate=function (){
	return __ZN12maxiSettings13getSampleRateEv();
};
maxiSettings.setup=function (a0,a1,a2){
	return __ZN12maxiSettings5setupEiii(a0,a1,a2);
};
maxiSettings.getSampleRate=function (){
	return __ZN12maxiSettings13getSampleRateEv();
};
function maxiFilter(){
	this.d0=-0.;
	this.d1=-0.;
	this.d2=-0.;
	this.a3=new Float64Array(20);
	this.d4=-0.;
	this.d5=-0.;
	this.d6=-0.;
	this.d7=-0.;
	this.d8=-0.;
	this.d9=-0.;
	this.d10=-0.;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN10maxiFilterC1Ev(this);
}
maxiFilter.prototype.setCutoff=function (a0){
	return __ZN10maxiFilter9setCutoffEd(this,a0);
};
maxiFilter.prototype.setResonance=function (a0){
	return __ZN10maxiFilter12setResonanceEd(this,a0);
};
maxiFilter.prototype.getCutoff=function (){
	return __ZN10maxiFilter9getCutoffEv(this);
};
maxiFilter.prototype.getResonance=function (){
	return __ZN10maxiFilter12getResonanceEv(this);
};
maxiFilter.prototype.setCutoff=function (a0){
	return __ZN10maxiFilter9setCutoffEd(this,a0);
};
maxiFilter.prototype.setResonance=function (a0){
	return __ZN10maxiFilter12setResonanceEd(this,a0);
};
maxiFilter.prototype.getCutoff=function (){
	return __ZN10maxiFilter9getCutoffEv(this);
};
maxiFilter.prototype.getResonance=function (){
	return __ZN10maxiFilter12getResonanceEv(this);
};
maxiFilter.prototype.lopass=function (a0,a1){
	return __ZN10maxiFilter6lopassEdd(this,a0,a1);
};
maxiFilter.prototype.hipass=function (a0,a1){
	return __ZN10maxiFilter6hipassEdd(this,a0,a1);
};
maxiFilter.prototype.lores=function (a0,a1,a2){
	return __ZN10maxiFilter5loresEddd(this,a0,a1,a2);
};
maxiFilter.prototype.hires=function (a0,a1,a2){
	return __ZN10maxiFilter5hiresEddd(this,a0,a1,a2);
};
maxiFilter.prototype.bandpass=function (a0,a1,a2){
	return __ZN10maxiFilter8bandpassEddd(this,a0,a1,a2);
};
function maxiTrigger(){
	this.d0=-0.;
	this.i1=0;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN11maxiTriggerC1Ev(this);
}
maxiTrigger.prototype.onZX=function (a0){
	return __ZN11maxiTrigger4onZXEd(this,a0);
};
maxiTrigger.prototype.onChanged=function (a0,a1){
	return __ZN11maxiTrigger9onChangedEdd(this,a0,a1);
};
maxiTrigger.prototype.onZX=function (a0){
	return __ZN11maxiTrigger4onZXEd(this,a0);
};
maxiTrigger.prototype.onChanged=function (a0,a1){
	return __ZN11maxiTrigger9onChangedEdd(this,a0,a1);
};
function maxiSample(){
	this.d0=-0.;
	this.d1=-0.;
	this.d2=-0.;
	this.d3=-0.;
	this.a4={d0:-0.,d1:-0.,d2:-0.};
	this.i5=0;
	this.i6=0;
	this.a7={d0:-0.,i1:0};
	this.a8=null;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN10maxiSampleC1Ev(this);
}
maxiSample.prototype.getLength=function (){
	return __ZN10maxiSample9getLengthEv(this);
};
maxiSample.prototype.isReady=function (){
	return __ZN10maxiSample7isReadyEv(this);
};
maxiSample.prototype.setSample=function (a0){
	return __ZN10maxiSample9setSampleEPN6client12Float64ArrayE(this,a0);
};
maxiSample.prototype.setSampleAndRate=function (a0,a1){
	return __ZN10maxiSample16setSampleAndRateEPN6client12Float64ArrayEi(this,a0,a1);
};
maxiSample.prototype.clear=function (){
	return __ZN10maxiSample5clearEv(this);
};
maxiSample.prototype.loopRecord=function (a0,a1,a2,a3,a4){
	return __ZN10maxiSample10loopRecordEdbddd(this,a0,a1,a2,a3,a4);
};
maxiSample.prototype.reset=function (){
	return __ZN10maxiSample5resetEv(this);
};
maxiSample.prototype.getLength=function (){
	return __ZN10maxiSample9getLengthEv(this);
};
maxiSample.prototype.isReady=function (){
	return __ZN10maxiSample7isReadyEv(this);
};
maxiSample.prototype.setSample=function (a0){
	return __ZN10maxiSample9setSampleEPN6client12Float64ArrayE(this,a0);
};
maxiSample.prototype.setSampleAndRate=function (a0,a1){
	return __ZN10maxiSample16setSampleAndRateEPN6client12Float64ArrayEi(this,a0,a1);
};
maxiSample.prototype.clear=function (){
	return __ZN10maxiSample5clearEv(this);
};
maxiSample.prototype.loopRecord=function (a0,a1,a2,a3,a4){
	return __ZN10maxiSample10loopRecordEdbddd(this,a0,a1,a2,a3,a4);
};
maxiSample.prototype.reset=function (){
	return __ZN10maxiSample5resetEv(this);
};
maxiSample.prototype.trigger=function (){
	return __ZN10maxiSample7triggerEv(this);
};
maxiSample.prototype.play=function (){
	return __ZN10maxiSample4playEv(this);
};
maxiSample.prototype.setPosition=function (a0){
	return __ZN10maxiSample11setPositionEd(this,a0);
};
maxiSample.prototype.playAtSpeedBetweenPoints=function (a0,a1,a2){
	return __ZN10maxiSample24playAtSpeedBetweenPointsEddd(this,a0,a1,a2);
};
maxiSample.prototype.playAtSpeedBetweenPointsFromPos=function (a0,a1,a2,a3){
	return __ZN10maxiSample31playAtSpeedBetweenPointsFromPosEdddd(this,a0,a1,a2,a3);
};
maxiSample.prototype.play4=function (a0,a1,a2){
	return __ZN10maxiSample5play4Eddd(this,a0,a1,a2);
};
maxiSample.prototype.playLoop=function (a0,a1){
	return __ZN10maxiSample8playLoopEdd(this,a0,a1);
};
maxiSample.prototype.playUntil=function (a0){
	return __ZN10maxiSample9playUntilEd(this,a0);
};
maxiSample.prototype.playOnce=function (){
	return __ZN10maxiSample8playOnceEv(this);
};
maxiSample.prototype.playOnceAtSpeed=function (a0){
	return __ZN10maxiSample15playOnceAtSpeedEd(this,a0);
};
maxiSample.prototype.playOnZX=function (a0){
	return __ZN10maxiSample8playOnZXEd(this,a0);
};
maxiSample.prototype.playOnZXAtSpeed=function (a0,a1){
	return __ZN10maxiSample15playOnZXAtSpeedEdd(this,a0,a1);
};
maxiSample.prototype.playOnZXAtSpeedFromOffset=function (a0,a1,a2){
	return __ZN10maxiSample25playOnZXAtSpeedFromOffsetEddd(this,a0,a1,a2);
};
maxiSample.prototype.playOnZXAtSpeedBetweenPoints=function (a0,a1,a2,a3){
	return __ZN10maxiSample28playOnZXAtSpeedBetweenPointsEdddd(this,a0,a1,a2,a3);
};
maxiSample.prototype.loopSetPosOnZX=function (a0,a1){
	return __ZN10maxiSample14loopSetPosOnZXEdd(this,a0,a1);
};
maxiSample.prototype.playUntilAtSpeed=function (a0,a1){
	return __ZN10maxiSample16playUntilAtSpeedEdd(this,a0,a1);
};
maxiSample.prototype.normalise=function (a0){
	return __ZN10maxiSample9normaliseEd(this,a0);
};
maxiSample.prototype.autoTrim=function (a0,a1,a2,a3){
	return __ZN10maxiSample8autoTrimEffbb(this,a0,a1,a2,a3);
};
function maxiMap(){
	this.i0=0;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN7maxiMapC1Ev(this);
}
maxiMap.linlin=function (a0,a1,a2,a3,a4){
	return __ZN7maxiMap6linlinEddddd(a0,a1,a2,a3,a4);
};
maxiMap.linexp=function (a0,a1,a2,a3,a4){
	return __ZN7maxiMap6linexpEddddd(a0,a1,a2,a3,a4);
};
maxiMap.explin=function (a0,a1,a2,a3,a4){
	return __ZN7maxiMap6explinEddddd(a0,a1,a2,a3,a4);
};
maxiMap.clamp=function (a0,a1,a2){
	return __ZN7maxiMap5clampEddd(a0,a1,a2);
};
maxiMap.linlin=function (a0,a1,a2,a3,a4){
	return __ZN7maxiMap6linlinEddddd(a0,a1,a2,a3,a4);
};
maxiMap.linexp=function (a0,a1,a2,a3,a4){
	return __ZN7maxiMap6linexpEddddd(a0,a1,a2,a3,a4);
};
maxiMap.explin=function (a0,a1,a2,a3,a4){
	return __ZN7maxiMap6explinEddddd(a0,a1,a2,a3,a4);
};
maxiMap.clamp=function (a0,a1,a2){
	return __ZN7maxiMap5clampEddd(a0,a1,a2);
};
function maxiNonlinearity(){
	this.i0=0;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN16maxiNonlinearityC1Ev(this);
}
maxiNonlinearity.prototype.asymclip=function (a0,a1,a2){
	return __ZN16maxiNonlinearity8asymclipEddd(this,a0,a1,a2);
};
maxiNonlinearity.prototype.hardclip=function (a0){
	return __ZN16maxiNonlinearity8hardclipEd(this,a0);
};
maxiNonlinearity.prototype.softclip=function (a0){
	return __ZN16maxiNonlinearity8softclipEd(this,a0);
};
maxiNonlinearity.prototype.fastatan=function (a0){
	return __ZN16maxiNonlinearity8fastatanEd(this,a0);
};
maxiNonlinearity.prototype.atanDist=function (a0,a1){
	return __ZN16maxiNonlinearity8atanDistEdd(this,a0,a1);
};
maxiNonlinearity.prototype.fastAtanDist=function (a0,a1){
	return __ZN16maxiNonlinearity12fastAtanDistEdd(this,a0,a1);
};
maxiNonlinearity.prototype.asymclip=function (a0,a1,a2){
	return __ZN16maxiNonlinearity8asymclipEddd(this,a0,a1,a2);
};
maxiNonlinearity.prototype.hardclip=function (a0){
	return __ZN16maxiNonlinearity8hardclipEd(this,a0);
};
maxiNonlinearity.prototype.softclip=function (a0){
	return __ZN16maxiNonlinearity8softclipEd(this,a0);
};
maxiNonlinearity.prototype.fastatan=function (a0){
	return __ZN16maxiNonlinearity8fastatanEd(this,a0);
};
maxiNonlinearity.prototype.atanDist=function (a0,a1){
	return __ZN16maxiNonlinearity8atanDistEdd(this,a0,a1);
};
maxiNonlinearity.prototype.fastAtanDist=function (a0,a1){
	return __ZN16maxiNonlinearity12fastAtanDistEdd(this,a0,a1);
};
function maxiBiquad(){
	this.d0=-0.;
	this.d1=-0.;
	this.d2=-0.;
	this.d3=-0.;
	this.d4=-0.;
	this.i5=0;
	this.d6=-0.;
	this.a7=new Float64Array(3);
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN10maxiBiquadC1Ev(this);
}
maxiBiquad.prototype.play=function (a0){
	return __ZN10maxiBiquad4playEd(this,a0);
};
maxiBiquad.prototype.set=function (a0,a1,a2,a3){
	return __ZN10maxiBiquad3setENS_11filterTypesEddd(this,a0,a1,a2,a3);
};
maxiBiquad.prototype.play=function (a0){
	return __ZN10maxiBiquad4playEd(this,a0);
};
maxiBiquad.prototype.set=function (a0,a1,a2,a3){
	return __ZN10maxiBiquad3setENS_11filterTypesEddd(this,a0,a1,a2,a3);
};
function maxiIndex(){
	this.d0=-0.;
	this.i1=0;
	this.d2=-0.;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN9maxiIndexC1Ev(this);
}
maxiIndex.prototype.pull=function (a0,a1,a2){
	return __ZN9maxiIndex4pullEddPN6client12Float64ArrayE(this,a0,a1,a2);
};
maxiIndex.prototype.pull=function (a0,a1,a2){
	return __ZN9maxiIndex4pullEddPN6client12Float64ArrayE(this,a0,a1,a2);
};
function maxiRatioSeq(){
	this.d0=-0.;
	this.i1=0;
	this.i2=0;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN12maxiRatioSeqC1Ev(this);
}
maxiRatioSeq.prototype.playTrig=function (a0,a1){
	return __ZN12maxiRatioSeq8playTrigEdPN6client12Float64ArrayE(this,a0,a1);
};
maxiRatioSeq.prototype.playValues=function (a0,a1,a2){
	return __ZN12maxiRatioSeq10playValuesEdPN6client12Float64ArrayES2_(this,a0,a1,a2);
};
maxiRatioSeq.prototype.playTrig=function (a0,a1){
	return __ZN12maxiRatioSeq8playTrigEdPN6client12Float64ArrayE(this,a0,a1);
};
maxiRatioSeq.prototype.playValues=function (a0,a1,a2){
	return __ZN12maxiRatioSeq10playValuesEdPN6client12Float64ArrayES2_(this,a0,a1,a2);
};
function maxiPolyBLEP(){
	this.i0=0;
	this.d1=-0.;
	this.d2=-0.;
	this.d3=-0.;
	this.d4=-0.;
	this.d5=-0.;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN12maxiPolyBLEPC1Ev(this);
}
maxiPolyBLEP.prototype.play=function (a0){
	return __ZN12maxiPolyBLEP4playEd(this,a0);
};
maxiPolyBLEP.prototype.setWaveform=function (a0){
	return __ZN12maxiPolyBLEP11setWaveformEN8PolyBLEP8WaveformE(this,a0);
};
maxiPolyBLEP.prototype.setPulseWidth=function (a0){
	return __ZN12maxiPolyBLEP13setPulseWidthEd(this,a0);
};
function maxiOsc(){
	this.d0=-0.;
	this.d1=-0.;
	this.d2=-0.;
	this.d3=-0.;
	this.d4=-0.;
	this.d5=-0.;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN7maxiOscC1Ev(this);
}
maxiOsc.prototype.noise=function (){
	return __ZN7maxiOsc5noiseEv(this);
};
maxiOsc.prototype.phaseReset=function (a0){
	return __ZN7maxiOsc10phaseResetEd(this,a0);
};
maxiOsc.prototype.sinewave=function (a0){
	return __ZN7maxiOsc8sinewaveEd(this,a0);
};
maxiOsc.prototype.sinebuf4=function (a0){
	return __ZN7maxiOsc8sinebuf4Ed(this,a0);
};
maxiOsc.prototype.sinebuf=function (a0){
	return __ZN7maxiOsc7sinebufEd(this,a0);
};
maxiOsc.prototype.coswave=function (a0){
	return __ZN7maxiOsc7coswaveEd(this,a0);
};
maxiOsc.prototype.phasor=function (a0){
	return __ZN7maxiOsc6phasorEd(this,a0);
};
maxiOsc.prototype.square=function (a0){
	return __ZN7maxiOsc6squareEd(this,a0);
};
maxiOsc.prototype.pulse=function (a0,a1){
	return __ZN7maxiOsc5pulseEdd(this,a0,a1);
};
maxiOsc.prototype.impulse=function (a0){
	return __ZN7maxiOsc7impulseEd(this,a0);
};
maxiOsc.prototype.phasorBetween=function (a0,a1,a2){
	return __ZN7maxiOsc13phasorBetweenEddd(this,a0,a1,a2);
};
maxiOsc.prototype.saw=function (a0){
	return __ZN7maxiOsc3sawEd(this,a0);
};
maxiOsc.prototype.sawn=function (a0){
	return __ZN7maxiOsc4sawnEd(this,a0);
};
maxiOsc.prototype.rect=function (a0,a1){
	return __ZN7maxiOsc4rectEdd(this,a0,a1);
};
maxiOsc.prototype.triangle=function (a0){
	return __ZN7maxiOsc8triangleEd(this,a0);
};
function maxiDelayline(){
	this.d0=-0.;
	this.i1=0;
	this.d2=-0.;
	this.d3=-0.;
	this.d4=-0.;
	this.a5=new Float64Array(176400);
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN13maxiDelaylineC1Ev(this);
}
maxiDelayline.prototype.dl=function (a0,a1,a2){
	return __ZN13maxiDelayline2dlEdid(this,a0,a1,a2);
};
maxiDelayline.prototype.dlFromPosition=function (a0,a1,a2,a3){
	return __ZN13maxiDelayline14dlFromPositionEdidi(this,a0,a1,a2,a3);
};
maxiSettings.promise=
maxiFilter.promise=
maxiTrigger.promise=
maxiSample.promise=
maxiMap.promise=
maxiNonlinearity.promise=
maxiBiquad.promise=
maxiIndex.promise=
maxiRatioSeq.promise=
maxiPolyBLEP.promise=
maxiOsc.promise=
maxiDelayline.promise=
Promise.resolve();
__Z7webMainv();
//bindings- intended to mix this source in with the emscripten modules
Module.maxiMap = maxiMap;
Module.maxiTrigger = maxiTrigger;
Module.maxiNonlinearity = maxiNonlinearity;
Module.maxiJSSettings = maxiSettings;
Module.maxiBiquad = maxiBiquad;
Module.maxiOsc = maxiOsc;
Module.maxiRatioSeq = maxiRatioSeq;
Module.maxiIndex = maxiIndex;
Module.maxiFilter = maxiFilter;
Module.maxiDelayline = maxiDelayline;
Module.maxiSample = maxiSample;
Module.maxiPolyBLEP = maxiPolyBLEP;

// Module.cheerpTypes = cheerpTypes;
// Module.maxiFilter = maxiFilter;
// Module.maxiZeroCrossingDetector = maxiZeroCrossingDetector;

// Module.cheerpTypes2 = cheerpTypes2;
// Module.vectorTest = vectorTest;
