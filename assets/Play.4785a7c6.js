import{d as y,_ as w,r as i,o as n,c as d,w as l,a as c,b as g,e as b,F as v,f,g as u,h as m,t as O}from"./index.d04f7233.js";const N="/alessandropisano-page/assets/front_bis.0834a411.png",$="/alessandropisano-page/assets/front_jolly.587594c9.png",I="/alessandropisano-page/assets/front_park.a11a65d5.png",B="/alessandropisano-page/assets/front_pool.356ccbe9.png",S="/alessandropisano-page/assets/front_stonks.06736611.png",R="/alessandropisano-page/assets/front_wall.87f4c6b5.png",F="/alessandropisano-page/assets/bis.21689d71.jpg",J="/alessandropisano-page/assets/jolly.b90c3838.jpg",L="/alessandropisano-page/assets/park.281c3426.jpg",M="/alessandropisano-page/assets/pool.64090889.jpg",V="/alessandropisano-page/assets/stonks.f0f7321e.jpg",A="/alessandropisano-page/assets/wall.67a22a12.jpg",E="/alessandropisano-page/assets/challenge_1_1.92686df7.png",P="/alessandropisano-page/assets/challenge_1_2.6123ee1a.png",U="/alessandropisano-page/assets/challenge_1_3.475c9ada.png",D="/alessandropisano-page/assets/challenge_1_4.00a8ad66.png",T="/alessandropisano-page/assets/challenge_1_5.e773fabd.png",q="/alessandropisano-page/assets/challenge_1_6.e241766f.png",z="/alessandropisano-page/assets/challenge_2_1.17c46248.png",G="/alessandropisano-page/assets/challenge_2_2.af07fd4e.png",H="/alessandropisano-page/assets/challenge_2_3.9859df98.png",K="/alessandropisano-page/assets/challenge_2_4.6bad899f.png",Q="/alessandropisano-page/assets/challenge_2_5.21848a34.png",W="/alessandropisano-page/assets/challenge_2_6.89d9abde.png",X="/alessandropisano-page/assets/challenge_3_1.ad89c0a7.png",Y="/alessandropisano-page/assets/challenge_3_2.289cc565.png",Z="/alessandropisano-page/assets/challenge_3_3.3917c654.png",x="/alessandropisano-page/assets/challenge_3_4.0c0f6a65.png",ss="/alessandropisano-page/assets/challenge_3_5.7cddd052.png",es="/alessandropisano-page/assets/challenge_3_6.1f31472c.png",as=y({data(){return{numbers:{3:[1,2,14,15],4:[3,13],5:[4,12],6:[5,11],7:[6,10],8:[7,9],9:[8]},effects:{pool:9,stonks:18,bis:9,park:18,wall:18,jolly:9},final:[],offset:0,challenges:[1,2,3]}},methods:{init(){let s=[];for(const[a,p]of Object.entries(this.numbers))p.forEach(r=>{for(let _=0;_<Number(a);_++)s.push(r)});let e=[];for(const[a,p]of Object.entries(this.effects))for(let r=0;r<p;r++)e.push(a);this.shuffleArray(s),this.shuffleArray(e);let o=[];for(let a=0;a<81;a++)o.push({number:s[a],effect:e[a]});this.final=o},shuffleArray(s){for(var e=s.length-1;e>0;e--){var o=Math.floor(Math.random()*(e+1)),a=s[e];s[e]=s[o],s[o]=a}},getFrontCard(s){return new URL(Object.assign({"../assets/frontCards/front_bis.png":N,"../assets/frontCards/front_jolly.png":$,"../assets/frontCards/front_park.png":I,"../assets/frontCards/front_pool.png":B,"../assets/frontCards/front_stonks.png":S,"../assets/frontCards/front_wall.png":R})[`../assets/frontCards/front_${s}.png`],self.location).href},getBackCard(s){return new URL(Object.assign({"../assets/backCards/bis.jpg":F,"../assets/backCards/jolly.jpg":J,"../assets/backCards/park.jpg":L,"../assets/backCards/pool.jpg":M,"../assets/backCards/stonks.jpg":V,"../assets/backCards/wall.jpg":A})[`../assets/backCards/${s}.jpg`],self.location).href},getChallenge(s,e){return new URL(Object.assign({"../assets/challenges/challenge_1_1.png":E,"../assets/challenges/challenge_1_2.png":P,"../assets/challenges/challenge_1_3.png":U,"../assets/challenges/challenge_1_4.png":D,"../assets/challenges/challenge_1_5.png":T,"../assets/challenges/challenge_1_6.png":q,"../assets/challenges/challenge_2_1.png":z,"../assets/challenges/challenge_2_2.png":G,"../assets/challenges/challenge_2_3.png":H,"../assets/challenges/challenge_2_4.png":K,"../assets/challenges/challenge_2_5.png":Q,"../assets/challenges/challenge_2_6.png":W,"../assets/challenges/challenge_3_1.png":X,"../assets/challenges/challenge_3_2.png":Y,"../assets/challenges/challenge_3_3.png":Z,"../assets/challenges/challenge_3_4.png":x,"../assets/challenges/challenge_3_5.png":ss,"../assets/challenges/challenge_3_6.png":es})[`../assets/challenges/challenge_${s+1}_${e}.png`],self.location).href},startOver(){this.init(),this.offset=0},selectChallenges(){this.challenges=[];for(let s=0;s<3;s++)this.challenges.push(this.getRandomInt(6));console.log(this.challenges)},getRandomInt(s){return Math.floor(Math.random()*s+1)}},mounted(){this.init(),this.selectChallenges()},computed:{topCards(){var s;return JSON.parse(JSON.stringify(this.final)),(s=this.final)==null?void 0:s.slice(this.offset+3,this.offset+6)},bottomCards(){var s;return JSON.parse(JSON.stringify(this.final)),(s=this.final)==null?void 0:s.slice(this.offset,this.offset+3)}}});const ns={class:"objective"},ts={id:"topCards"},ls={class:"card"},os={class:"number"},_s={id:"botCards"},gs={class:"card"},rs={class:"buttonsContainer"},cs=m(" Previous "),ps=m(" Next "),is=m(" Start Over ");function ds(s,e,o,a,p,r){const _=i("v-img"),C=i("v-col"),h=i("v-btn"),k=i("v-row");return n(),d(k,{class:"container"},{default:l(()=>[c(C,{cols:"2",class:"objContainer"},{default:l(()=>[(n(!0),g(v,null,b(s.challenges,(t,j)=>(n(),g("div",ns,[c(_,{src:s.getChallenge(j,t),width:"200%",class:"objectiveImg cardImg frontmg"},null,8,["src"])]))),256))]),_:1}),c(C,{cols:"10",class:"cardsContainer"},{default:l(()=>[f("div",ts,[(n(!0),g(v,null,b(s.topCards,t=>(n(),g("div",ls,[c(_,{src:s.getFrontCard(t.effect),width:"100%",class:"frontImg cardImg"},{default:l(()=>[f("p",os,O(t.number),1)]),_:2},1032,["src"])]))),256))]),f("div",_s,[(n(!0),g(v,null,b(s.bottomCards,t=>(n(),g("div",gs,[c(_,{src:s.getBackCard(t.effect),width:"100%",class:"frontImg cardImg"},null,8,["src"])]))),256))])]),_:1}),f("div",rs,[s.offset>0?(n(),d(h,{key:0,class:"but",color:"blue",onClick:e[0]||(e[0]=t=>s.offset-=3)},{default:l(()=>[cs]),_:1})):u("",!0),s.offset<78?(n(),d(h,{key:1,class:"but",color:"green",onClick:e[1]||(e[1]=t=>s.offset+=3)},{default:l(()=>[ps]),_:1})):u("",!0),s.offset===78?(n(),d(h,{key:2,class:"but",color:"green",onClick:e[2]||(e[2]=t=>s.startOver())},{default:l(()=>[is]),_:1})):u("",!0)])]),_:1})}const hs=w(as,[["render",ds],["__scopeId","data-v-0726ff36"]]);export{hs as default};
