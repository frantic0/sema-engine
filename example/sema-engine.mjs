class t{static getStorageForCapacity(t,e){if(!e.BYTES_PER_ELEMENT)throw"Pass in a ArrayBuffer subclass";var o=8+(t+1)*e.BYTES_PER_ELEMENT;return new SharedArrayBuffer(o)}constructor(t,e){if(!ArrayBuffer.__proto__.isPrototypeOf(e)&&void 0!==e.BYTES_PER_ELEMENT)throw"Pass a concrete typed array class as second argument";this._type=e,this.capacity=(t.byteLength-8)/e.BYTES_PER_ELEMENT,this.buf=t,this.write_ptr=new Uint32Array(this.buf,0,1),this.read_ptr=new Uint32Array(this.buf,4,1),this.storage=new e(this.buf,8,this.capacity)}type(){return this._type.name}push(t){var e=Atomics.load(this.read_ptr,0),o=Atomics.load(this.write_ptr,0);if((o+1)%this._storage_capacity()==e)return 0;let a=Math.min(this._available_write(e,o),t.length),s=Math.min(this._storage_capacity()-o,a),i=a-s;return this._copy(t,0,this.storage,o,s),this._copy(t,s,this.storage,0,i),Atomics.store(this.write_ptr,0,(o+a)%this._storage_capacity()),a}pop(t){var e=Atomics.load(this.read_ptr,0),o=Atomics.load(this.write_ptr,0);if(o==e)return 0;let a=Math.min(this._available_read(e,o),t.length),s=Math.min(this._storage_capacity()-e,t.length),i=a-s;return this._copy(this.storage,e,t,0,s),this._copy(this.storage,0,t,s,i),Atomics.store(this.read_ptr,0,(e+a)%this._storage_capacity()),a}empty(){var t=Atomics.load(this.read_ptr,0);return Atomics.load(this.write_ptr,0)==t}full(){var t=Atomics.load(this.read_ptr,0);return(Atomics.load(this.write_ptr,0)+1)%this.capacity!=t}capacity(){return this.capacity-1}available_read(){var t=Atomics.load(this.read_ptr,0),e=Atomics.load(this.write_ptr,0);return this._available_read(t,e)}available_write(){var t=Atomics.load(this.read_ptr,0),e=Atomics.load(this.write_ptr,0);return this._available_write(t,e)}_available_read(t,e){return e>t?e-t:e+this._storage_capacity()-t}_available_write(t,e){let o=t-e-1;return e>=t&&(o+=this._storage_capacity()),o}_storage_capacity(){return this.capacity}_copy(t,e,o,a,s){for(var i=0;i<s;i++)o[a+i]=t[e+i]}}const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o=t=>64===Module.maxiTools._keyStr.indexOf(t.charAt(t.length-1))?t.substring(0,t.length-1):t;class a extends AudioWorkletNode{constructor(t,e){console.log(),super(t,e,{numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[t.destination.maxChannelCount]})}}class s{constructor(){if(s.instance)return s.instance;s.instance=this,this.analysers={},this.sharedArrayBuffers={}}onProcessorMessageEventHandler(t){if(null!=t&&null!=t.data)if(null!=t.data.rq&&"send"===t.data.rq)switch(t.data.ttype){case"ML":this.messaging.publish("model-input-data",{type:"model-input-data",value:t.data.value,ch:t.data.ch});break;case"NET":this.peerNet.send(t.data.ch[0],t.data.value,t.data.ch[1])}else if(t.data.rq&&"buf"===t.data.rq)switch(console.log("buf",t.data),t.data.ttype){case"ML":this.messaging.publish("model-input-buffer",{type:"model-input-buffer",value:t.data.value,channelID:t.data.channelID,blocksize:t.data.blocksize})}else"giveMeSomeSamples"===t.data||t.data.phase}postAsyncMessageToProcessor(t){void 0!==t&&(console.log("DEBUG:AudioEngine:onMessagingEventHandler:"),console.log(t),this.audioWorkletNode.port.postMessage(t))}pollAnalyserData(t){if(void 0!==t){const e=new Uint8Array(t.fftSize),o=new Uint8Array(t.fftSize);return t.getByteTimeDomainData(e),t.getByteFrequencyData(o),{smoothingTimeConstant:t.smoothingTimeConstant,fftSize:t.fftSize,frequencyDataArray:o,timeDataArray:e}}}createAnalyser(t,e){if(void 0!==this.audioContext&&void 0!==event){let o=this.audioContext.createAnalyser();o.smoothingTimeConstant=.25,o.fftSize=256,o.minDecibels=-90,o.maxDecibels=-0,this.audioWorkletNode.connect(o);let a=-1,s={};this.analysers[t]={analyser:o,analyserFrameId:a,callback:e};const i=()=>(s=this.pollAnalyserData(this.analysers[t].analyser),this.analysers[t].callback(s),this.analysers[t].analyserFrameId=requestAnimationFrame(i),a);i()}else void 0===this.audioContext&&(this.analysers[analyser]={})}connectAnalysers(){Object.keys(this.analysers).map((t=>this.createAnalyser({id:t})))}removeAnalyser(t){if(void 0!==this.audioContext&&void 0!==this.audioWorkletNode){void 0!==this.analysers[t.id]&&(cancelAnimationFrame(this.analysers[t.id].analyserFrameId),delete this.analysers[t.id])}}createSharedArrayBuffer(e,o,a){let s=t.getStorageForCapacity(32*a,Float64Array),i=new t(s,Float64Array);this.audioWorkletNode.port.postMessage({func:"sab",value:s,ttype:o,channelID:e,blocksize:a}),this.sharedArrayBuffers[e]={sab:s,rb:i},console.log(this.sharedArrayBuffers)}async init(t){this.audioContext,this.audioWorkletProcessorName="maxi-processor",this.audioWorkletUrl=t,this.samplesLoaded=!1,void 0===this.audioContext&&(this.audioContext=new AudioContext({latencyHint:"playback"}),this.audioContext.destination.channelInterpretation="discrete",this.audioContext.destination.channelCountMode="explicit",this.audioContext.destination.channelCount=this.audioContext.destination.maxChannelCount,await this.loadWorkletProcessorCode(),this.audioWorkletNode.connect(this.audioContext.destination),this.createSharedArrayBuffer("mxy","mouseXY",2))}play(){if(void 0!==this.audioContext)return"suspended"!==this.audioContext.state?(this.stop(),!1):(this.audioContext.resume(),!0)}stop(){void 0!==this.audioWorkletNode&&this.audioContext.suspend()}stopAndRelease(){void 0!==this.audioWorkletNode&&(this.audioWorkletNode.disconnect(this.audioContext.destination),this.audioWorkletNode=void 0)}more(t){if(void 0!==this.audioWorkletNode){const e=this.audioWorkletNode.parameters.get(t);return e.value+=.5,console.log(t+": "+e.value),!0}return!1}less(t){if(void 0!==this.audioWorkletNode){const e=this.audioWorkletNode.parameters.get(t);return e.value-=.5,console.log(t+": "+e.value),!0}return!1}eval(t){return void 0!==this.audioWorkletNode&&("suspended"===this.audioContext.state&&this.audioContext.resume(),this.audioWorkletNode.port.postMessage({eval:1,setup:t.setup,loop:t.loop}),!0)}sendClockPhase(t,e){void 0!==this.audioWorkletNode&&this.audioWorkletNode.port.postMessage({phase:t,i:e})}onAudioInputInit(t){this.audioContext.createMediaStreamSource(t).connect(this.audioWorkletNode)}onAudioInputFail(t){console.log(`DEBUG:AudioEngine:AudioInputFail: ${t.message} ${t.name}`)}async connectMediaStream(){const t=window.constraints={audio:!0,video:!1};navigator.mediaDevices.getUserMedia(t).then((t=>this.onAudioInputInit(t))).catch(this.onAudioInputFail)}async loadWorkletProcessorCode(){if(void 0===this.audioContext)return!1;try{await this.audioContext.audioWorklet.addModule(this.audioWorkletUrl)}catch(t){return console.error("ERROR: AudioEngine:loadWorkletProcessorCode: AudioWorklet not supported in this browser: ",t.message),!1}try{return this.audioWorkletNode=new a(this.audioContext,this.audioWorkletProcessorName),this.audioWorkletNode.onprocessorerror=t=>{console.log("DEBUG:AudioEngine:loadWorkletProcessorCode: MaxiProcessor Error detected")},this.audioWorkletNode.port.onmessageerror=t=>{console.log("DEBUG:AudioEngine:loadWorkletProcessorCode: Error message from port: "+t.data)},this.audioWorkletNode.onprocessorstatechange=t=>{console.log("DEBUG:AudioEngine:loadWorkletProcessorCode: MaxiProcessor state change detected: "+audioWorkletNode.processorState)},this.audioWorkletNode.port.onmessage=t=>{this.onProcessorMessageEventHandler(t)},!0}catch(t){return console.error("ERROR: AudioEngine:loadWorkletProcessorCode: Custom AudioWorklet node creation: ",t.message),!1}}loadSample(t,a){if(void 0===this.audioContext)throw"Audio Context is not initialised!";((t,a,s,i)=>{var r=[],n=(t=>{if(-1!==t.indexOf(";base64,")){var e=t.indexOf(";base64,")+8;return!!t.slice(e).match(/^([A-Za-z0-9+\/]{4})*([A-Za-z0-9+\/]{4}|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{2}==)$/)&&t.slice(e)}return!1})(s);if(n){var d=n.length/4*3,l=new ArrayBuffer(d);n=o(o(n));var c,u,h,p,y,g,f,m=parseInt(n.length/4*3,10),A=0,v=0;for(c=new Uint8Array(l),n=n.replace(/[^A-Za-z0-9\+\/\=]/g,""),A=0;A<m;A+=3)u=e.indexOf(n.charAt(v++))<<2|(y=e.indexOf(n.charAt(v++)))>>4,h=(15&y)<<4|(g=e.indexOf(n.charAt(v++)))>>2,p=(3&g)<<6|(f=e.indexOf(n.charAt(v++))),c[A]=u,64!==g&&(c[A+1]=h),64!==f&&(c[A+2]=p);t.decodeAudioData(l,(function(t){let e=t.getChannelData(0);void 0!==r&&void 0!==i&&i.port.postMessage({sample:a,buffer:e})}),(function(t){console.log("Error decoding source!")}))}else{var _=new XMLHttpRequest;_.addEventListener("load",(()=>console.log("The transfer is complete."))),_.open("GET",s,!0),_.responseType="arraybuffer",_.onload=function(){t.decodeAudioData(_.response,(function(t){let e=t.getChannelData(0);void 0!==r&&void 0!==i&&i.port.postMessage({sample:a,buffer:e})}),(function(t){console.log("Error decoding source!")}))},_.send()}})(this.audioContext,t,a,this.audioWorkletNode)}}export{s as AudioEngine};
//# sourceMappingURL=sema-engine.mjs.map
