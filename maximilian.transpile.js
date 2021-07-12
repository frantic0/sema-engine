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
	tmp0=114;
	while(1){
		tmp3=String.fromCharCode(tmp0<<24>>24);
		tmp2=tmp2.concat(tmp3);
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if(_$pstr===_$pstr&&(0+Lgeptoindexphi|0)===34)return String(tmp2);
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
	var tmp0=0,tmp1=0,tmp2=0,tmp3=0,tmp4=0,tmp5=0,tmp6=-0.,L$poptgep11$poptgep$poptgepsqueezed=null,L$poptgep$poptgep$poptgepsqueezed=null,L$ppre$pi=0;
	L$poptgep11$poptgep$poptgepsqueezed=_impure_data$p14;
	if(L$poptgep11$poptgep$poptgepsqueezed!==null){
		L$poptgep$poptgep$poptgepsqueezed=L$poptgep11$poptgep$poptgepsqueezed.a2;
		L$ppre$pi=L$poptgep$poptgep$poptgepsqueezed[1]|0;
		tmp0=L$poptgep$poptgep$poptgepsqueezed[0]|0;
		tmp1=L$ppre$pi*1284865837|0;
	}else{
		L$poptgep11$poptgep$poptgepsqueezed={a0:new Uint16Array(6),i1:0,a2:new Int32Array(2)};
		_impure_data$p14=L$poptgep11$poptgep$poptgepsqueezed;
		L$poptgep$poptgep$poptgepsqueezed=L$poptgep11$poptgep$poptgepsqueezed.a0;
		L$poptgep$poptgep$poptgepsqueezed[0]=13070;
		L$poptgep$poptgep$poptgepsqueezed[1]=43981;
		L$poptgep$poptgep$poptgepsqueezed[2]=4660;
		L$poptgep$poptgep$poptgepsqueezed[3]=58989;
		L$poptgep$poptgep$poptgepsqueezed[4]=57068;
		L$poptgep$poptgep$poptgepsqueezed[5]=5;
		L$poptgep11$poptgep$poptgepsqueezed.i1=11;
		L$poptgep$poptgep$poptgepsqueezed=L$poptgep11$poptgep$poptgepsqueezed.a2;
		L$poptgep$poptgep$poptgepsqueezed[1]=0;
		L$poptgep$poptgep$poptgepsqueezed[0]=1;
		tmp1=0;
		tmp0=1;
	}
	tmp2=tmp0>>>16;
	L$ppre$pi=tmp0&65535;
	tmp3=(tmp2*32557|0)+(L$ppre$pi*19605|0)|0;
	tmp4=tmp3<<16;
	L$ppre$pi=L$ppre$pi*32557|0;
	tmp5=tmp4+L$ppre$pi|0;
	L$ppre$pi=(((((tmp0*1481765933|0)+tmp1|0)+(tmp2*19605|0)|0)+(tmp3>>>16)|0)+(tmp4>>>0>(L$ppre$pi^ -1)>>>0?1:0)|0)+((tmp5|0)===-1?1:0)|0;
	L$poptgep11$poptgep$poptgepsqueezed=L$poptgep11$poptgep$poptgepsqueezed.a2;
	L$poptgep11$poptgep$poptgepsqueezed[1]=L$ppre$pi;
	L$poptgep11$poptgep$poptgepsqueezed[0]=tmp5+1|0;
	tmp6=(+(L$ppre$pi&2147483647|0))*4.6566128730773926E-10*2+-1;
	Larg0.d4=tmp6;
	return tmp6;
}
function __ZN7maxiOscC1Ev(Larg0){
	Larg0.d1=0;
}
function __ZN12maxiRatioSeqC1Ev(Larg0){
	Larg0.d0=0;
	Larg0.i1=0;
}
function __ZN12maxiRatioSeq10playValuesEdPN6client12Float64ArrayES2_(Larg0,Larg1,Larg2,Larg3){
	var L$psroa$p7$p0=null,L$psroa$p7$p0o=0,tmp1=-0.,L$p=0,Lgeptoindexphi=0,L$psroa$p0$p0=null,Lgeptoindexphi2=0;
	L$p=~~ +Larg2.length;
	Lgeptoindexphi=L$p<<3;
	if((Lgeptoindexphi|0)!==0){
		L$psroa$p0$p0=new Float64Array(Lgeptoindexphi/8|0);
		if((Lgeptoindexphi|0)>0){
			L$p&=536870911;
			if((L$p|0)!==0){
				Lgeptoindexphi2=0;
				Lgeptoindexphi=0;
				while(1){
					L$psroa$p0$p0[Lgeptoindexphi2]=+Larg2[0+Lgeptoindexphi|0];
					Lgeptoindexphi2=Lgeptoindexphi2+1|0;
					if(L$psroa$p0$p0!==L$psroa$p0$p0||(0+L$p|0)!==(0+Lgeptoindexphi2|0)){
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						continue;
					}
					break;
				}
			}
		}
	}
	L$p=~~ +Larg3.length;
	Lgeptoindexphi=L$p<<3;
	if((Lgeptoindexphi|0)!==0){
		L$psroa$p0$p0=new Float64Array(Lgeptoindexphi/8|0);
		if((Lgeptoindexphi|0)>0){
			L$p&=536870911;
			if((L$p|0)!==0){
				Lgeptoindexphi2=0;
				Lgeptoindexphi=0;
				while(1){
					L$psroa$p0$p0[Lgeptoindexphi2]=+Larg3[0+Lgeptoindexphi|0];
					Lgeptoindexphi2=Lgeptoindexphi2+1|0;
					if(L$psroa$p0$p0!==L$psroa$p0$p0||(0+L$p|0)!==(0+Lgeptoindexphi2|0)){
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						continue;
					}
					break;
				}
				L$psroa$p7$p0o=0+L$p|0;
				L$psroa$p7$p0=L$psroa$p0$p0;
			}else{
				L$psroa$p7$p0o=0+L$p|0;
				L$psroa$p7$p0=L$psroa$p0$p0;
			}
		}else{
			L$psroa$p7$p0o=0;
			L$psroa$p7$p0=L$psroa$p0$p0;
		}
	}else{
		L$psroa$p0$p0=nullArray;
		L$psroa$p7$p0o=0;
		L$psroa$p7$p0=nullArray;
	}
	tmp1=+__ZN12maxiRatioSeq8playTrigEdPN6client12Float64ArrayE(Larg0,Larg1,Larg2);
	L$p=Larg0.i1|0;
	if(tmp1===0)return +L$psroa$p0$p0[L$p];
	L$p=L$p+1|0;
	L$p=(L$p|0)===(((L$psroa$p7$p0o)*8)-((0)*8)>>3|0)?0|0:L$p|0;
	Larg0.i1=L$p;
	return +L$psroa$p0$p0[L$p];
}
function __ZN12maxiRatioSeq8playTrigEdPN6client12Float64ArrayE(Larg0,Larg1,Larg2){
	var L$psroa$p9$p09=null,L$psroa$p9$p09o=0,tmp1=-0.,tmp2=-0.,tmp3=0,Lgeptoindexphi=0,L$psroa$p0$p010=null,tmp6=-0.,tmp7=-0.,tmp8=-0.,Lgeptoindexphi2=0;
	tmp3=~~ +Larg2.length;
	Lgeptoindexphi=tmp3<<3;
	if((Lgeptoindexphi|0)!==0){
		L$psroa$p0$p010=new Float64Array(Lgeptoindexphi/8|0);
		if((Lgeptoindexphi|0)>0){
			tmp3&=536870911;
			if((tmp3|0)===0){
				L$psroa$p9$p09o=0+tmp3|0;
				L$psroa$p9$p09=L$psroa$p0$p010;
				tmp1=0;
			}else{
				Lgeptoindexphi2=0;
				Lgeptoindexphi=0;
				while(1){
					L$psroa$p0$p010[Lgeptoindexphi2]=+Larg2[0+Lgeptoindexphi|0];
					Lgeptoindexphi2=Lgeptoindexphi2+1|0;
					if(L$psroa$p0$p010!==L$psroa$p0$p010||(0+tmp3|0)!==(0+Lgeptoindexphi2|0)){
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						continue;
					}
					break;
				}
				if((tmp3|0)===0){
					L$psroa$p9$p09o=0+tmp3|0;
					L$psroa$p9$p09=L$psroa$p0$p010;
					tmp1=0;
				}else{
					Lgeptoindexphi2=0;
					Lgeptoindexphi=0;
					while(1){
						Lgeptoindexphi2=~~( +L$psroa$p0$p010[Lgeptoindexphi]+(+(Lgeptoindexphi2|0)));
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						if(L$psroa$p0$p010!==L$psroa$p0$p010||(0+Lgeptoindexphi|0)!==(0+tmp3|0))continue;
						break;
					}
					L$psroa$p9$p09o=0+tmp3|0;
					L$psroa$p9$p09=L$psroa$p0$p010;
					tmp1=(+(Lgeptoindexphi2|0));
				}
			}
		}else{
			L$psroa$p9$p09o=0;
			L$psroa$p9$p09=L$psroa$p0$p010;
			tmp1=0;
		}
	}else{
		tmp1=0;
		L$psroa$p9$p09o=0;
		L$psroa$p9$p09=nullArray;
		L$psroa$p0$p010=nullArray;
	}
	tmp3=((0)*8);
	Lgeptoindexphi=((L$psroa$p9$p09o)*8);
	if((Lgeptoindexphi|0)===(tmp3|0)){
		Larg0.d0=Larg1;
		return 0;
	}
	tmp3=Lgeptoindexphi-tmp3>>3;
	tmp2=-1/(+(__ZN12maxiSettings10sampleRateE|0));
	tmp6=0;
	Lgeptoindexphi=0;
	while(1){
		tmp6+= +L$psroa$p0$p010[Lgeptoindexphi];
		tmp7=tmp6/tmp1;
		if(tmp7===1){
			tmp7=0;
		}
		tmp8=+Larg0.d0;
		if(tmp8>Larg1){
			Larg0.d0=tmp2;
			tmp8=tmp2;
		}
		Lgeptoindexphi2=tmp8<=tmp7?1:0;
		if(tmp7<Larg1)if(Lgeptoindexphi2){
			Larg0.d0=Larg1;
			return 1;
		}
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if(Lgeptoindexphi>>>0<tmp3>>>0)continue;
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
	var L$psroa$p7$p0=null,L$psroa$p7$p0o=0,tmp1=0,Lgeptoindexphi=0,L$psroa$p0$p0=null,Lgeptoindexphi2=0,tmp5=-0.;
	tmp1=~~ +Larg3.length;
	Lgeptoindexphi=tmp1<<3;
	if((Lgeptoindexphi|0)!==0){
		L$psroa$p0$p0=new Float64Array(Lgeptoindexphi/8|0);
		if((Lgeptoindexphi|0)>0){
			tmp1&=536870911;
			if((tmp1|0)!==0){
				Lgeptoindexphi2=0;
				Lgeptoindexphi=0;
				while(1){
					L$psroa$p0$p0[Lgeptoindexphi2]=+Larg3[0+Lgeptoindexphi|0];
					Lgeptoindexphi2=Lgeptoindexphi2+1|0;
					if(L$psroa$p0$p0!==L$psroa$p0$p0||(0+tmp1|0)!==(0+Lgeptoindexphi2|0)){
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						continue;
					}
					break;
				}
				L$psroa$p7$p0o=0+tmp1|0;
				L$psroa$p7$p0=L$psroa$p0$p0;
			}else{
				L$psroa$p7$p0o=0+tmp1|0;
				L$psroa$p7$p0=L$psroa$p0$p0;
			}
		}else{
			L$psroa$p7$p0o=0;
			L$psroa$p7$p0=L$psroa$p0$p0;
		}
	}else{
		L$psroa$p0$p0=nullArray;
		L$psroa$p7$p0o=0;
		L$psroa$p7$p0=nullArray;
	}
	a:{
		if( +Larg0.d0<=0){
			if(!(Larg1>0))break a;
		}else{
			tmp1=Larg0.i1|0;
			if(!(Larg1>0))break a;
			if((tmp1&255)===0)break a;
		}
		Larg0.d0=Larg1;
		Larg0.i1=0;
		if(Larg2<0){
			tmp5=0;
		}else if(Larg2>1){
			tmp5=1;
		}else{
			tmp5=Larg2;
		}
		tmp5=+Math.floor(tmp5*.99999998999999994*(+(((L$psroa$p7$p0o)*8)-((0)*8)>>3>>>0)));
		tmp5=+L$psroa$p0$p0[~~tmp5];
		Larg0.d2=tmp5;
		return tmp5;
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
	tmp1=+Math.abs(Larg4);
	tmp1=+Math.pow(10,tmp1/20);
	tmp2=+Math.tan(Larg2*3.1415926535897931/(+(__ZN12maxiSettings10sampleRateE|0)));
	switch(Larg1|0){
		case 0:
		tmp3=tmp2*tmp2;
		tmp2/=Larg3;
		tmp1=1/(tmp3+(tmp2+1));
		tmp4=tmp3*tmp1;
		Larg0.d0=tmp4;
		Larg0.d1=tmp4*2;
		Larg0.d2=tmp4;
		Larg0.d3=(tmp3+-1)*2*tmp1;
		Larg0.d4=(tmp3+(1-tmp2))*tmp1;
		break;
		case 1:
		tmp4=tmp2*tmp2;
		tmp2/=Larg3;
		tmp1=1/(tmp4+(tmp2+1));
		Larg0.d0=tmp1;
		Larg0.d1=tmp1*-2;
		Larg0.d2=tmp1;
		Larg0.d3=(tmp4+-1)*2*tmp1;
		Larg0.d4=(tmp4+(1-tmp2))*tmp1;
		break;
		case 2:
		tmp3=tmp2*tmp2;
		tmp2/=Larg3;
		tmp1=1/(tmp3+(tmp2+1));
		tmp4=tmp2*tmp1;
		Larg0.d0=tmp4;
		Larg0.d1=0;
		Larg0.d2=-tmp4;
		Larg0.d3=(tmp3+-1)*2*tmp1;
		Larg0.d4=(tmp3+(1-tmp2))*tmp1;
		break;
		case 3:
		tmp5=tmp2*tmp2;
		tmp2/=Larg3;
		tmp1=1/(tmp5+(tmp2+1));
		tmp4=(tmp5+1)*tmp1;
		Larg0.d0=tmp4;
		tmp3=(tmp5+-1)*2*tmp1;
		Larg0.d1=tmp3;
		Larg0.d2=tmp4;
		Larg0.d3=tmp3;
		Larg0.d4=(tmp5+(1-tmp2))*tmp1;
		break;
		case 4:
		if(Larg4>=0){
			tmp4=tmp2*tmp2;
			tmp3=1/Larg3*tmp2;
			tmp5=1/(tmp4+(tmp3+1));
			tmp2*=(tmp1/Larg3);
			Larg0.d0=(tmp4+(tmp2+1))*tmp5;
			tmp1=(tmp4+-1)*2*tmp5;
			Larg0.d1=tmp1;
			Larg0.d2=(tmp4+(1-tmp2))*tmp5;
			Larg0.d3=tmp1;
			Larg0.d4=(tmp4+(1-tmp3))*tmp5;
			break;
		}
		tmp4=tmp1/Larg3*tmp2;
		tmp3=tmp2*tmp2;
		tmp5=1/(tmp3+(tmp4+1));
		tmp2*=(1/Larg3);
		Larg0.d0=(tmp3+(tmp2+1))*tmp5;
		tmp1=(tmp3+-1)*2*tmp5;
		Larg0.d1=tmp1;
		Larg0.d2=(tmp3+(1-tmp2))*tmp5;
		Larg0.d3=tmp1;
		Larg0.d4=(tmp3+(1-tmp4))*tmp5;
		break;
		case 5:
		if(Larg4>=0){
			tmp4=tmp2*tmp2;
			tmp3=tmp2* +Larg0.d6;
			tmp5=1/(tmp4+(tmp3+1));
			tmp0=tmp2* +Math.sqrt(tmp1*2);
			tmp2*=(tmp1*tmp2);
			Larg0.d0=(tmp2+(tmp0+1))*tmp5;
			Larg0.d1=(tmp2+-1)*2*tmp5;
			Larg0.d2=tmp5*(tmp2+(1-tmp0));
			Larg0.d3=(tmp4+-1)*2*tmp5;
			Larg0.d4=(tmp4+(1-tmp3))*tmp5;
			break;
		}
		tmp5=tmp2* +Math.sqrt(tmp1*2);
		tmp1=tmp2*(tmp1*tmp2);
		tmp4=1/(tmp1+(tmp5+1));
		tmp3=tmp2*tmp2;
		tmp2*= +Larg0.d6;
		Larg0.d0=tmp4*(tmp3+(tmp2+1));
		Larg0.d1=(tmp3+-1)*2*tmp4;
		Larg0.d2=tmp4*(tmp3+(1-tmp2));
		Larg0.d3=(tmp1+-1)*2*tmp4;
		Larg0.d4=(tmp1+(1-tmp5))*tmp4;
		break;
		case 6:
		if(Larg4>=0){
			tmp4=tmp2*tmp2;
			tmp3=tmp2* +Larg0.d6;
			tmp5=1/(tmp4+(tmp3+1));
			tmp2*= +Math.sqrt(tmp1*2);
			Larg0.d0=(tmp4+(tmp1+tmp2))*tmp5;
			Larg0.d1=(tmp4-tmp1)*2*tmp5;
			Larg0.d2=tmp5*(tmp4+(tmp1-tmp2));
			Larg0.d3=(tmp4+-1)*2*tmp5;
			Larg0.d4=(tmp4+(1-tmp3))*tmp5;
			break;
		}
		tmp4=tmp2* +Math.sqrt(tmp1*2);
		tmp3=tmp2*tmp2;
		tmp5=1/(tmp3+(tmp1+tmp4));
		tmp2*= +Larg0.d6;
		Larg0.d0=tmp5*(tmp3+(tmp2+1));
		Larg0.d1=(tmp3+-1)*2*tmp5;
		Larg0.d2=tmp5*(tmp3+(1-tmp2));
		Larg0.d3=(tmp3-tmp1)*2*tmp5;
		Larg0.d4=(tmp3+(tmp1-tmp4))*tmp5;
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
	return (Larg4-Larg3)*( +Math.log((tmp0<Larg1?Larg1:tmp0)/Larg1)/ +Math.log(Larg2/Larg1))+Larg3;
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
	var tmp0=-0.,L$poptgep$poptgep2$poptgepsqueezed=null,tmp2=-0.,tmp3=-0.,tmp4=-0.;
	Larg0.d9=Larg2;
	tmp2=(+(__ZN12maxiSettings10sampleRateE|0));
	tmp3=tmp2*.5;
	if(tmp3<Larg2)Larg0.d9=tmp3;
	else{
		tmp3=Larg2;
	}
	if(Larg3>=1){
		tmp4=.99999899999999997;
	}else{
		tmp4=Larg3;
	}
	tmp3=+Math.cos(tmp3*6.2831853071795862/tmp2);
	Larg0.d7=tmp3;
	tmp0=(1-tmp4)* +Math.sqrt(tmp4*(tmp4-tmp3*tmp3*4+2)+1);
	L$poptgep$poptgep2$poptgepsqueezed=Larg0.a3;
	L$poptgep$poptgep2$poptgepsqueezed[0]=tmp0;
	tmp3=tmp4*(tmp3*2);
	L$poptgep$poptgep2$poptgepsqueezed[1]=tmp3;
	tmp4*=tmp4;
	L$poptgep$poptgep2$poptgepsqueezed[2]=tmp4;
	tmp2=+L$poptgep$poptgep2$poptgepsqueezed[11];
	tmp3=tmp0*Larg1+tmp3*tmp2+tmp4* +L$poptgep$poptgep2$poptgepsqueezed[12];
	Larg0.d2=tmp3;
	L$poptgep$poptgep2$poptgepsqueezed[12]=tmp2;
	L$poptgep$poptgep2$poptgepsqueezed[11]=tmp3;
	return tmp3;
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
	tmp2=2-tmp1*2;
	Larg0.d8=tmp2;
	tmp1+=-1;
	tmp0=+Math.sqrt(- +Math.pow(tmp1,3));
	tmp3*=tmp1;
	tmp1=+Larg0.d6;
	tmp2= +Larg0.d5+tmp2*(Larg1-tmp1);
	tmp1+=tmp2;
	Larg0.d6=tmp1;
	Larg0.d5=(tmp3+tmp0*1.4142135623730951)/tmp3*tmp2;
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
	tmp2=2-tmp1*2;
	Larg0.d8=tmp2;
	tmp1+=-1;
	tmp0=+Math.sqrt(- +Math.pow(tmp1,3));
	tmp3*=tmp1;
	tmp1=+Larg0.d6;
	tmp2= +Larg0.d5+tmp2*(Larg1-tmp1);
	tmp1+=tmp2;
	Larg0.d6=tmp1;
	Larg0.d5=(tmp3+tmp0*1.4142135623730951)/tmp3*tmp2;
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
var _$pstr=new Uint8Array([114,117,110,110,105,110,103,32,77,97,120,105,109,105,108,105,97,110,32,118,50,46,52,46,48,32,40,80,117,114,101,74,83,41,0]);
var __ZN12maxiSettings10sampleRateE=44100;
var _transition=new Float64Array([-0.500003,-0.500003,-0.500023,-0.500063,-0.500121,-0.500179,-0.500259,-0.50036,-0.500476,-0.500591,-0.500732,-0.500893,-0.501066,-0.501239,-0.50144,-0.501661,-0.501891,-0.502123,-0.502382,-0.502662,-0.502949,-0.50324,-0.503555,-0.503895,-0.504238,-0.504587,-0.504958,-0.505356,-0.505754,-0.506162,-0.506589,-0.507042,-0.507495,-0.50796,-0.508444,-0.508951,-0.509458,-0.509979,-0.510518,-0.511079,-0.511638,-0.512213,-0.512808,-0.51342,-0.51403,-0.514659,-0.515307,-0.51597,-0.51663,-0.517312,-0.518012,-0.518724,-0.519433,-0.520166,-0.520916,-0.521675,-0.522432,-0.523214,-0.524013,-0.524819,-0.525624,-0.526451,-0.527298,-0.528147,-0.528999,-0.52987,-0.530762,-0.531654,-0.532551,-0.533464,-0.534399,-0.535332,-0.536271,-0.537226,-0.538202,-0.539172,-0.540152,-0.541148,-0.542161,-0.543168,-0.544187,-0.54522,-0.546269,-0.54731,-0.548365,-0.549434,-0.550516,-0.55159,-0.552679,-0.553781,-0.554893,-0.555997,-0.557118,-0.558252,-0.559391,-0.560524,-0.561674,-0.562836,-0.564001,-0.565161,-0.566336,-0.567524,-0.568712,-0.569896,-0.571095,-0.572306,-0.573514,-0.574721,-0.575939,-0.577171,-0.578396,-0.579622,-0.580858,-0.582108,-0.583348,-0.58459,-0.585842,-0.587106,-0.588358,-0.589614,-0.590879,-0.592154,-0.593415,-0.594682,-0.595957,-0.59724,-0.598507,-0.599782,-0.601064,-0.602351,-0.603623,-0.604902,-0.606189,-0.607476,-0.60875,-0.610032,-0.61131899999999995,-0.612605,-0.613877,-0.615157,-0.616443,-0.617723,-0.618992,-0.620268,-0.62154799999999999,-0.62282,-0.624083,-0.62535,-0.626622,-0.627882,-0.629135,-0.630391,-0.631652,-0.632898,-0.634138,-0.63538,-0.636626,-0.637854,-0.639078,-0.640304,-0.641531,-0.64273899999999995,-0.643943,-0.645149,-0.646355,-0.647538,-0.64872,-0.649903,-0.651084,-0.652241,-0.653397,-0.654553,-0.65570499999999998,-0.656834,-0.657961,-0.659087,-0.660206,-0.661304,-0.66239899999999996,-0.66349199999999997,-0.664575,-0.665639,-0.666699,-0.667756,-0.6688,-0.66982699999999995,-0.670849,-0.671866,-0.672868,-0.673854,-0.674835,-0.675811,-0.676767,-0.677709,-0.678646,-0.679576,-0.680484,-0.68138,-0.682269,-0.683151,-0.684008,-0.684854,-0.685693,-0.686524,-0.687327,-0.688119,-0.688905,-0.689682,-0.690428,-0.691164,-0.691893,-0.692613,-0.6933,-0.693978,-0.694647,-0.695305,-0.695932,-0.696549,-0.697156,-0.697748,-0.69831299999999996,-0.698865,-0.699407,-0.699932,-0.700431,-0.700917,-0.701391,-0.701845,-0.702276,-0.702693,-0.703097,-0.703478,-0.703837,-0.704183,-0.704514,-0.704819,-0.705105,-0.705378,-0.70563299999999995,-0.70586,-0.706069,-0.706265,-0.706444,-0.706591,-0.706721,-0.706837,-0.706938,-0.707003,-0.707051,-0.707086,-0.707106,-0.707086,-0.707051,-0.70700099999999999,-0.706935,-0.706832,-0.706711,-0.706576,-0.70642099999999997,-0.706233,-0.706025,-0.705802,-0.70555699999999999,-0.705282,-0.704984,-0.704671,-0.704334,-0.703969,-0.703582,-0.703176,-0.702746,-0.702288,-0.70181,-0.701312,-0.70078499999999999,-0.700234,-0.699664,-0.69907,-0.698447,-0.6978,-0.697135,-0.696446,-0.695725,-0.694981,-0.694219,-0.693435,-0.692613,-0.691771,-0.690911,-0.69003,-0.689108,-0.688166,-0.68720599999999998,-0.686227,-0.685204,-0.684162,-0.68310099999999996,-0.682019,-0.680898,-0.679755,-0.678592,-0.677407,-0.676187,-0.674941,-0.673676,-0.672386,-0.671066,-0.669718,-0.66835,-0.66695499999999996,-0.665532,-0.66408299999999998,-0.662611,-0.661112,-0.659585,-0.658035,-0.656459,-0.654854,-0.653223,-0.651572,-0.649892,-0.648181,-0.646446,-0.644691,-0.642909,-0.641093,-0.639253,-0.637393,-0.63551,-0.633588,-0.631644,-0.62968,-0.627695,-0.625668,-0.62362099999999998,-0.621553,-0.619464,-0.617334,-0.615183,-0.61301099999999997,-0.610817,-0.608587,-0.606333,-0.60405799999999998,-0.60176,-0.59942899999999999,-0.597072,-0.594695,-0.592293,-0.589862,-0.587404,-0.584925,-0.58242,-0.579888,-0.577331,-0.574751,-0.572145,-0.569512,-0.566858,-0.564178,-0.561471,-0.558739,-0.555988,-0.553209,-0.550402,-0.547572,-0.544723,-0.54185,-0.538944,-0.536018,-0.533072,-0.530105,-0.527103,-0.524081,-0.52104,-0.51798,-0.514883,-0.511767,-0.508633,-0.505479,-0.502291,-0.499083,-0.495857,-0.492611,-0.489335,-0.486037,-0.48272,-0.479384,-0.476021,-0.472634,-0.46923,-0.465805,-0.462356,-0.458884,-0.455394,-0.451882,-0.448348,-0.444795,-0.44122,-0.437624,-0.434008,-0.430374,-0.426718,-0.423041,-0.419344,-0.415631,-0.411897,-0.40814,-0.404365,-0.400575,-0.396766,-0.392933,-0.389082,-0.385217,-0.381336,-0.377428,-0.373505,-0.369568,-0.365616,-0.361638,-0.357645,-0.353638,-0.349617,-0.345572,-0.341512,-0.337438,-0.33335,-0.329242,-0.325118,-0.32098,-0.316829,-0.31266,-0.308474,-0.304276,-0.300063,-0.295836,-0.291593,-0.287337,-0.283067,-0.278783,-0.274487,-0.270176,-0.265852,-0.261515,-0.257168,-0.252806,-0.248431,-0.244045,-0.239649,-0.23524,-0.230817,-0.226385,-0.221943,-0.21749,-0.213024,-0.208548,-0.204064,-0.199571,-0.195064,-0.190549,-0.186026,-0.181495,-0.176952,-0.1724,-0.167842,-0.163277,-0.1587,-0.154117,-0.149527,-0.14493,-0.140325,-0.135712,-0.131094,-0.12647,-0.121839,-0.117201,-0.112559,-0.10791,-0.103257,-0.0985979,-0.093934299999999998,-0.0892662,-0.0845935,-0.079917,-0.0752362,-0.0705516,-0.0658635,-0.0611729,-0.0564786,-0.0517814,-0.0470818,-0.0423802,-0.0376765,-0.0329703,-0.0282629,-0.0235542,-0.0188445,-0.0141335,-0.00942183,-0.00470983,2.41979E-6,.00471481,.00942681,.0141384,.0188494,.023559,.028268,.0329754,.0376813,.0423851,.0470868,.0517863,.0564836,.0611777,.0658683,.0705566,.075241199999999994,.0799218,.084598199999999998,.089271199999999995,.0939393,.0986028,.103262,.107915,.112563,.117206,.121844,.126475,.131099,.135717,.14033,.144935,.149531,.154122,.158705,.163281,.167847,.172405,.176956,.1815,.18603,.190553,.195069,.199576,.204068,.208552,.213028,.217495,.221947,.226389,.230822,.235245,.239653,.244049,.248436,.252811,.257173,.26152,.265857,.270181,.274491,.278788,.283071,.287341,.291597,.29584,.300068,.30428,.308478,.312664,.316833,.320984,.325122,.329246,.333354,.337442,.341516,.345576,.34962,.353642,.357649,.361642,.36562,.369572,.373509,.377432,.38134,.385221,.389086,.392936,.39677,.400579,.404369,.408143,.4119,.415634,.419347,.423044,.426721,.430377,.434011,.437627,.441223,.444798,.448351,.451885,.455397,.458887,.462359,.465807,.469232,.472637,.476024,.479386,.482723,.486039,.489338,.492613,.49586,.499086,.502294,.505481,.508635,.511769,.514885,.517982,.521042,.524083,.527105,.530107,.533074,.53602,.538946,.541851,.544725,.547574,.550404,.553211,.555989,.55874,.561472,.564179,.566859,.569514,.572146,.574753,.577332,.579889,.582421,.584926,.587405,.589863,.592294,.594696,.59707299999999996,.59943,.60176,.604059,.606333,.608588,.610818,.613012,.615183,.61733499999999997,.619464,.621553,.62362099999999998,.625669,.627696,.629681,.631645,.633588,.63551,.637393,.639253,.641093,.642909,.644691,.646446,.648181,.649892,.651572,.653223,.654854,.656459,.658035,.659585,.661112,.662611,.66408299999999998,.665532,.66695499999999996,.66835,.669718,.671066,.672386,.673676,.674941,.676187,.677407,.678592,.679755,.680898,.682019,.68310099999999996,.684162,.685204,.686227,.68720599999999998,.688166,.689108,.69003,.690911,.691771,.692613,.693435,.694219,.694981,.695725,.696447,.697135,.6978,.698447,.69907,.699664,.700234,.700786,.701312,.70181,.702288,.702746,.703177,.703582,.703969,.704334,.704671,.704984,.705282,.70555699999999999,.705802,.706025,.706233,.706422,.706576,.706712,.706832,.706936,.707002,.707051,.707086,.707106,.707086,.707051,.707003,.70693899999999998,.706838,.706721,.706592,.706445,.706265,.70607,.705861,.705634,.705378,.705105,.70482,.704515,.704184,.703837,.703478,.703097,.702694,.702276,.70184599999999997,.701392,.700917,.700432,.699932,.699408,.69886599999999999,.698314,.69774899999999995,.697156,.696549,.695933,.695305,.694648,.693979,.69330099999999995,.692613,.691894,.691165,.690428,.689683,.688905,.68812,.687327,.686525,.685693,.684854,.684009,.68315199999999998,.68227,.68138,.680485,.679577,.678647,.67771,.676768,.675811,.674836,.673855,.672869,.67186699999999999,.670849,.66982699999999995,.66880099999999998,.667757,.6667,.66564,.664576,.663493,.6624,.661305,.66020699999999999,.659088,.657962,.656834,.65570499999999998,.654553,.653398,.652241,.651085,.649903,.648721,.647539,.646356,.645149,.643944,.64273899999999995,.64153199999999999,.640304,.63907899999999995,.637855,.636626,.63538099999999997,.634139,.632899,.631652,.630392,.629136,.62788299999999997,.626622,.62535,.624083,.62282,.62154799999999999,.620268,.618993,.617724,.616443,.615158,.613878,.612605,.61132,.610032,.608751,.607477,.606189,.60490299999999997,.603623,.602351,.60106499999999996,.599782,.598508,.59724,.595957,.594682,.593415,.592154,.59088,.589615,.588359,.587106,.585843,.584591,.583349,.582108,.580859,.579623,.578397,.577172,.575939,.574721,.573515,.572307,.571095,.569897,.568713,.567525,.566337,.565161,.564002,.562837,.561674,.560525,.559392,.558252,.557119,.555998,.554893,.553782,.552679,.55159,.550516,.549434,.548365,.54731,.546269,.54522,.544187,.543168,.542161,.541148,.540153,.539173,.538202,.537226,.536271,.535332,.5344,.533464,.532551,.531654,.530762,.52987,.528999,.528147,.527298,.526451,.525624,.524819,.524014,.523214,.522432,.521675,.520916,.520166,.519433,.518724,.518012,.517312,.51663,.51597,.515307,.51466,.51403,.51342,.512808,.512213,.511638,.511079,.510518,.509979,.509458,.508951,.508444,.50796,.507495,.507042,.506589,.506162,.505754,.505356,.504958,.504587,.504237,.503895,.503555,.50324,.502949,.502662,.502382,.502123,.501891,.501661,.50144,.501239,.501066,.500893,.500732,.500591,.500476,.50036,.500259,.500179,.500121,.500063,.500023,.500003,.500003]);
var _sineBuffer=new Float64Array([0,.012268,.024536,.036804,.049042,.06131,.073547,.085785,.097991999999999995,.1102,.12241,.13455,.1467,.15884,.17093,.18301,.19507,.20709,.21909,.23105,.24295,.25485,.26669,.2785,.29025,.30197,.31366,.32529,.33685,.34839,.35986,.37128,.38266,.39395,.40521,.41641,.42752,.4386,.44958,.46051,.47137,.48215,.49286,.50351,.51407,.52457,.53497,.54529,.55554,.5657,.57578,.58575,.59567,.60547,.61519999999999997,.62482,.63437,.6438,.65314,.66237999999999997,.67151,.68057,.68951,.69833,.70706,.7157,.72421,.7326,.74091,.74907999999999997,.75717,.76514,.77298,.78069999999999994,.7883,.79581,.80316,.81042,.81754,.82455,.83142,.8382,.84482,.85132,.8577,.86392,.87006,.87604,.88187,.8876,.89319,.89861999999999997,.90396,.90912,.91415,.91907,.92383,.92847,.93294999999999995,.93728999999999995,.9415,.94555999999999995,.94948999999999994,.95325,.95691,.96038999999999996,.96374999999999999,.96692,.96999999999999997,.97289999999999998,.97565,.97826999999999997,.98073999999999994,.98306,.98523,.98724,.98914,.99084,.99243,.99387,.99514999999999998,.99628,.99724999999999997,.99807999999999996,.99875,.99926999999999999,.99965999999999999,.99987999999999999,.99997,.99987999999999999,.99965999999999999,.99926999999999999,.99875,.99807999999999996,.99724999999999997,.99628,.99514999999999998,.99387,.99243,.99084,.98914,.98724,.98523,.98306,.98073999999999994,.97826999999999997,.97565,.97289999999999998,.96999999999999997,.96692,.96374999999999999,.96038999999999996,.95691,.95325,.94948999999999994,.94555999999999995,.9415,.93728999999999995,.93294999999999995,.92847,.92383,.91907,.91415,.90912,.90396,.89861999999999997,.89319,.8876,.88187,.87604,.87006,.86392,.8577,.85132,.84482,.8382,.83142,.82455,.81754,.81042,.80316,.79581,.7883,.78069999999999994,.77298,.76514,.75717,.74907999999999997,.74091,.7326,.72421,.7157,.70706,.69833,.68951,.68057,.67151,.66237999999999997,.65314,.6438,.63437,.62482,.61519999999999997,.60547,.59567,.58575,.57578,.5657,.55554,.54529,.53497,.52457,.51407,.50351,.49286,.48215,.47137,.46051,.44958,.4386,.42752,.41641,.40521,.39395,.38266,.37128,.35986,.34839,.33685,.32529,.31366,.30197,.29025,.2785,.26669,.25485,.24295,.23105,.21909,.20709,.19507,.18301,.17093,.15884,.1467,.13455,.12241,.1102,.097991999999999995,.085785,.073547,.06131,.049042,.036804,.024536,.012268,0,-0.012268,-0.024536,-0.036804,-0.049042,-0.06131,-0.073547,-0.085785,-0.097991999999999995,-0.1102,-0.12241,-0.13455,-0.1467,-0.15884,-0.17093,-0.18301,-0.19507,-0.20709,-0.21909,-0.23105,-0.24295,-0.25485,-0.26669,-0.2785,-0.29025,-0.30197,-0.31366,-0.32529,-0.33685,-0.34839,-0.35986,-0.37128,-0.38266,-0.39395,-0.40521,-0.41641,-0.42752,-0.4386,-0.44958,-0.46051,-0.47137,-0.48215,-0.49286,-0.50351,-0.51407,-0.52457,-0.53497,-0.54529,-0.55554,-0.5657,-0.57578,-0.58575,-0.59567,-0.60547,-0.61519999999999997,-0.62482,-0.63437,-0.6438,-0.65314,-0.66237999999999997,-0.67151,-0.68057,-0.68951,-0.69833,-0.70706,-0.7157,-0.72421,-0.7326,-0.74091,-0.74907999999999997,-0.75717,-0.76514,-0.77298,-0.78069999999999994,-0.7883,-0.79581,-0.80316,-0.81042,-0.81754,-0.82455,-0.83142,-0.8382,-0.84482,-0.85132,-0.8577,-0.86392,-0.87006,-0.87604,-0.88187,-0.8876,-0.89319,-0.89861999999999997,-0.90396,-0.90912,-0.91415,-0.91907,-0.92383,-0.92847,-0.93294999999999995,-0.93728999999999995,-0.9415,-0.94555999999999995,-0.94948999999999994,-0.95325,-0.95691,-0.96038999999999996,-0.96374999999999999,-0.96692,-0.96999999999999997,-0.97289999999999998,-0.97565,-0.97826999999999997,-0.98073999999999994,-0.98306,-0.98523,-0.98724,-0.98914,-0.99084,-0.99243,-0.99387,-0.99514999999999998,-0.99628,-0.99724999999999997,-0.99807999999999996,-0.99875,-0.99926999999999999,-0.99965999999999999,-0.99987999999999999,-0.99997,-0.99987999999999999,-0.99965999999999999,-0.99926999999999999,-0.99875,-0.99807999999999996,-0.99724999999999997,-0.99628,-0.99514999999999998,-0.99387,-0.99243,-0.99084,-0.98914,-0.98724,-0.98523,-0.98306,-0.98073999999999994,-0.97826999999999997,-0.97565,-0.97289999999999998,-0.96999999999999997,-0.96692,-0.96374999999999999,-0.96038999999999996,-0.95691,-0.95325,-0.94948999999999994,-0.94555999999999995,-0.9415,-0.93728999999999995,-0.93294999999999995,-0.92847,-0.92383,-0.91907,-0.91415,-0.90912,-0.90396,-0.89861999999999997,-0.89319,-0.8876,-0.88187,-0.87604,-0.87006,-0.86392,-0.8577,-0.85132,-0.84482,-0.8382,-0.83142,-0.82455,-0.81754,-0.81042,-0.80316,-0.79581,-0.7883,-0.78069999999999994,-0.77298,-0.76514,-0.75717,-0.74907999999999997,-0.74091,-0.7326,-0.72421,-0.7157,-0.70706,-0.69833,-0.68951,-0.68057,-0.67151,-0.66237999999999997,-0.65314,-0.6438,-0.63437,-0.62482,-0.61519999999999997,-0.60547,-0.59567,-0.58575,-0.57578,-0.5657,-0.55554,-0.54529,-0.53497,-0.52457,-0.51407,-0.50351,-0.49286,-0.48215,-0.47137,-0.46051,-0.44958,-0.4386,-0.42752,-0.41641,-0.40521,-0.39395,-0.38266,-0.37128,-0.35986,-0.34839,-0.33685,-0.32529,-0.31366,-0.30197,-0.29025,-0.2785,-0.26669,-0.25485,-0.24295,-0.23105,-0.21909,-0.20709,-0.19507,-0.18301,-0.17093,-0.15884,-0.1467,-0.13455,-0.12241,-0.1102,-0.097991999999999995,-0.085785,-0.073547,-0.06131,-0.049042,-0.036804,-0.024536,-0.012268,0,.012268]);
var _impure_data$p14=null;
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
function createArray_literal0(e){
	var r=[];
	for(var i=0;i<e;i++)
	r[i]=-0.;
	return r;
}
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
maxiMap.promise=
maxiNonlinearity.promise=
maxiBiquad.promise=
maxiIndex.promise=
maxiRatioSeq.promise=
maxiOsc.promise=
maxiDelayline.promise=
Promise.resolve();
__Z7webMainv();
//bindings- intended to mix this source in with the emscripten modules
Module.maxiMap = maxiMap;
Module.maxiTrigger = maxiTrigger;
Module.maxiNonlinearity = maxiNonlinearity;
Module.maxiJSSettings = maxiSettings;
// Module.maxiSettings = maxiSettings;
Module.maxiBiquad = maxiBiquad;
Module.maxiOsc = maxiOsc;
Module.maxiRatioSeq = maxiRatioSeq;
Module.maxiIndex = maxiIndex;
Module.maxiFilter = maxiFilter;
Module.maxiDelayline = maxiDelayline;

// Module.cheerpTypes = cheerpTypes;
// Module.maxiFilter = maxiFilter;
// Module.maxiZeroCrossingDetector = maxiZeroCrossingDetector;

// Module.cheerpTypes2 = cheerpTypes2;
// Module.vectorTest = vectorTest;
