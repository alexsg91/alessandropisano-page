import{d as w,_ as y,r as p,o as a,c as d,w as l,a as o,b as _,e as f,F as h,f as b,g as C,h as k,t as O}from"./index.e2adac4b.js";const I="/alessandropisano-page/assets/front_bis.0834a411.png",N="/alessandropisano-page/assets/front_jolly.587594c9.png",$="/alessandropisano-page/assets/front_park.a11a65d5.png",S="/alessandropisano-page/assets/front_pool.356ccbe9.png",B="/alessandropisano-page/assets/front_stonks.06736611.png",R="/alessandropisano-page/assets/front_wall.87f4c6b5.png",F="/alessandropisano-page/assets/bis.21689d71.jpg",J="/alessandropisano-page/assets/jolly.b90c3838.jpg",L="/alessandropisano-page/assets/park.281c3426.jpg",M="/alessandropisano-page/assets/pool.64090889.jpg",V="/alessandropisano-page/assets/stonks.f0f7321e.jpg",A="/alessandropisano-page/assets/wall.67a22a12.jpg",E="/alessandropisano-page/assets/challenge_1_1.92686df7.png",P="/alessandropisano-page/assets/challenge_1_2.6123ee1a.png",U="/alessandropisano-page/assets/challenge_1_3.475c9ada.png",D="/alessandropisano-page/assets/challenge_1_4.00a8ad66.png",T="/alessandropisano-page/assets/challenge_1_5.e773fabd.png",q="/alessandropisano-page/assets/challenge_1_6.e241766f.png",z="/alessandropisano-page/assets/challenge_2_1.17c46248.png",G="/alessandropisano-page/assets/challenge_2_2.af07fd4e.png",H="/alessandropisano-page/assets/challenge_2_3.9859df98.png",K="/alessandropisano-page/assets/challenge_2_4.6bad899f.png",Q="/alessandropisano-page/assets/challenge_2_5.21848a34.png",W="/alessandropisano-page/assets/challenge_2_6.89d9abde.png",X="/alessandropisano-page/assets/challenge_3_1.ad89c0a7.png",Y="/alessandropisano-page/assets/challenge_3_2.289cc565.png",Z="/alessandropisano-page/assets/challenge_3_3.3917c654.png",x="/alessandropisano-page/assets/challenge_3_4.0c0f6a65.png",ss="/alessandropisano-page/assets/challenge_3_5.7cddd052.png",es="/alessandropisano-page/assets/challenge_3_6.1f31472c.png",as=w({data(){return{numbers:{3:[1,2,14,15],4:[3,13],5:[4,12],6:[5,11],7:[6,10],8:[7,9],9:[8]},effects:{pool:9,stonks:18,bis:9,park:18,wall:18,jolly:9},final:[],offset:0,challenges:[1,2,3]}},methods:{init(){let s=[];for(const[n,i]of Object.entries(this.numbers))i.forEach(c=>{for(let g=0;g<Number(n);g++)s.push(String(c).split("").join(`
`))});let e=[];for(const[n,i]of Object.entries(this.effects))for(let c=0;c<i;c++)e.push(n);this.shuffleArray(s),this.shuffleArray(e);let r=[];for(let n=0;n<81;n++)r.push({number:s[n],effect:e[n]});this.final=r},shuffleArray(s){for(var e=s.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),n=s[e];s[e]=s[r],s[r]=n}},getFrontCard(s){return new URL(Object.assign({"../assets/frontCards/front_bis.png":I,"../assets/frontCards/front_jolly.png":N,"../assets/frontCards/front_park.png":$,"../assets/frontCards/front_pool.png":S,"../assets/frontCards/front_stonks.png":B,"../assets/frontCards/front_wall.png":R})[`../assets/frontCards/front_${s}.png`],self.location).href},getBackCard(s){return new URL(Object.assign({"../assets/backCards/bis.jpg":F,"../assets/backCards/jolly.jpg":J,"../assets/backCards/park.jpg":L,"../assets/backCards/pool.jpg":M,"../assets/backCards/stonks.jpg":V,"../assets/backCards/wall.jpg":A})[`../assets/backCards/${s}.jpg`],self.location).href},getChallenge(s,e){return new URL(Object.assign({"../assets/challenges/challenge_1_1.png":E,"../assets/challenges/challenge_1_2.png":P,"../assets/challenges/challenge_1_3.png":U,"../assets/challenges/challenge_1_4.png":D,"../assets/challenges/challenge_1_5.png":T,"../assets/challenges/challenge_1_6.png":q,"../assets/challenges/challenge_2_1.png":z,"../assets/challenges/challenge_2_2.png":G,"../assets/challenges/challenge_2_3.png":H,"../assets/challenges/challenge_2_4.png":K,"../assets/challenges/challenge_2_5.png":Q,"../assets/challenges/challenge_2_6.png":W,"../assets/challenges/challenge_3_1.png":X,"../assets/challenges/challenge_3_2.png":Y,"../assets/challenges/challenge_3_3.png":Z,"../assets/challenges/challenge_3_4.png":x,"../assets/challenges/challenge_3_5.png":ss,"../assets/challenges/challenge_3_6.png":es})[`../assets/challenges/challenge_${s+1}_${e}.png`],self.location).href},startOver(){this.init(),this.offset=0},selectChallenges(){this.challenges=[];for(let s=0;s<3;s++)this.challenges.push(this.getRandomInt(6))},getRandomInt(s){return Math.floor(Math.random()*s+1)}},mounted(){this.init(),this.selectChallenges()},computed:{topCards(){var s;return JSON.parse(JSON.stringify(this.final)),(s=this.final)==null?void 0:s.slice(this.offset+3,this.offset+6)},bottomCards(){var s;return JSON.parse(JSON.stringify(this.final)),(s=this.final)==null?void 0:s.slice(this.offset,this.offset+3)}}});const ns={class:"objective"},ts={id:"topCards"},ls={class:"card"},os={class:"number"},_s={id:"botCards"},gs={class:"card"},rs={class:"card"},cs={class:"buttonsContainer"},is=k(" Previous "),ps=k(" Next "),ds=k(" Start Over ");function fs(s,e,r,n,i,c){const g=p("v-img"),u=p("v-col"),j=p("v-row"),v=p("v-btn");return a(),d(j,{class:"maincontainer"},{default:l(()=>[o(u,{cols:"2",class:"objContainer d-none d-lg-flex"},{default:l(()=>[(a(!0),_(h,null,f(s.challenges,(t,m)=>(a(),_("div",ns,[o(g,{src:s.getChallenge(m,t),width:"100%",class:"objectiveImg cardImg frontmg"},null,8,["src"])]))),256))]),_:1}),o(u,{cols:"12",lg:"10",md:"12",sm:"12",class:"cardsContainer"},{default:l(()=>[b("div",ts,[(a(!0),_(h,null,f(s.topCards,t=>(a(),_("div",ls,[o(g,{src:s.getFrontCard(t.effect),width:"100%",class:"frontImg cardImg"},{default:l(()=>[b("pre",os,O(t.number),1)]),_:2},1032,["src"])]))),256))]),b("div",_s,[(a(!0),_(h,null,f(s.bottomCards,t=>(a(),_("div",gs,[o(g,{src:s.getBackCard(t.effect),width:"100%",class:"frontImg cardImg"},null,8,["src"])]))),256))])]),_:1}),o(u,{cols:"12",md:"12",class:"objContainer d-fles d-lg-none"},{default:l(()=>[o(j,null,{default:l(()=>[(a(!0),_(h,null,f(s.challenges,(t,m)=>(a(),_("div",rs,[o(g,{src:s.getChallenge(m,t),width:"100%",class:"frontImg cardImg"},null,8,["src"])]))),256))]),_:1})]),_:1}),b("div",cs,[s.offset>0?(a(),d(v,{key:0,class:"but",color:"blue",onClick:e[0]||(e[0]=t=>s.offset-=3)},{default:l(()=>[is]),_:1})):C("",!0),s.offset<78?(a(),d(v,{key:1,class:"but",color:"green",onClick:e[1]||(e[1]=t=>s.offset+=3)},{default:l(()=>[ps]),_:1})):C("",!0),s.offset===78?(a(),d(v,{key:2,class:"but",color:"green",onClick:e[2]||(e[2]=t=>s.startOver())},{default:l(()=>[ds]),_:1})):C("",!0)])]),_:1})}const bs=y(as,[["render",fs],["__scopeId","data-v-36f23069"]]);export{bs as default};
