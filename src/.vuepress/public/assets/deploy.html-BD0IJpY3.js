import{_ as a,a as n,b as l,c as o}from"./depend-BZNAI9HR.js";import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as h,c as p,a as i,b as e,d,w as c,e as t,o as k}from"./app-DZBCzro6.js";const g={},u=t('<h2 id="_1-download-code" tabindex="-1"><a class="header-anchor" href="#_1-download-code"><span>1 Download Code</span></a></h2><p>Please download source code from <a href="https://github.com/sMythicalBird/ZenlessZoneZero-Auto/releases/tag/v2.2" target="_blank" rel="noopener noreferrer">ZenlessZoneZero-Auto-Release</a></p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>The <code>CPU version of the separate packaging</code> (<code>Zenlesszonezero-Auto.zip</code>) comes with the environment</p><p>If you want to use the <code>GPU version</code>, select <code>Source Code (ZIP)</code></p><p><code>Source code (tar.gz)</code> is a commonly used format for <code>linux</code>. At present, Zero Zero does not support the <code>Linux</code> system, we also do not support</p></div><p><img src="'+a+'" alt="Release" loading="lazy"></p><p>To decompress the code to any path, it is recommended to be <strong>full English</strong> Otherwise, unexpected errors may occur</p><p><img src="'+n+'" alt="解压代码" loading="lazy"></p><h2 id="_2-installation-dependence" tabindex="-1"><a class="header-anchor" href="#_2-installation-dependence"><span>2 Installation Dependence</span></a></h2><p>Run <code>start.exe</code>, you will see the following interface</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>The script must run as an administrator! Otherwise, the authority is not enough!</p></div><p><img src="'+l+'" alt="运行脚本" loading="lazy"></p><details class="hint-container details"><summary>Details</summary><p><strong>1. Installation dependencies:</strong> Use in the first run, the deployment environment</p><p><strong>2. Install the specified version dependencies:</strong> The default version may not be applicable for you, you can choose to install it yourself. Xiaobai users, please don&#39;t move!</p><p><strong>3. Running script:</strong> Started script, you must use it after installation and dependencies.</p><p><strong>4. Exit:</strong> Exit the script</p></details><p>Now we use it for the first time, choose <code>1. Installation dependencies</code>, we will see the following interface</p><p><img src="'+o+'" alt="安装依赖" loading="lazy"></p><p>If you do n’t know what to use, choose <code>0. Smart choice</code>, <code>CPU Version</code> will be very dependent on, about <code>5 GB</code>,<code>CPU Version</code>relatively smaller</p>',14),m={class:"hint-container details"},y=t("<summary>Details</summary><p><strong>0. Intelligent selection:</strong> Automatically judge the use of <code>CPU version</code> or <code>GPU version</code></p><p><strong>1. Install CPU version:</strong> Deployment <code>CPU</code> Environment and use the<code> CPU</code> Run script</p>",3),f=i("strong",null,"2. Install the GPU version:",-1),B=i("code",null,"GPU",-1),v=i("code",null," GPU",-1),F=i("p",null,[i("strong",null,"3. Exit:"),e(" Exit the script")],-1),C=t(`<p>Waiting for the installation, the program may be &quot;not moving&quot; in the middle, which is normal. The fast and slow download depends on your network speed</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Please close your <code>Watt Tookit</code>! Some acceleration tools will cause <code>ssh</code> to fail, which will cause download failure</p><p>If you find an error related to <code>ssh</code>, please turn off the acceleration software</p></div><p>If you don&#39;t have an accident, you can enjoy the convenience of the script</p><h2 id="_3-tutorial" tabindex="-1"><a class="header-anchor" href="#_3-tutorial"><span>3 Tutorial</span></a></h2><ol><li>Do not move the mouse during operation</li></ol><div class="hint-container tip"><p class="hint-container-title">shortcut key</p><p>Need to press on the terminal, not in the game</p><p><strong>F10：</strong> Restore</p><p><strong>F11：</strong> Suspend operation</p><p><strong>F12：</strong> Run</p></div><ol start="2"><li><p>Please run as an administrator</p></li><li><p>Configuration file description</p></li></ol><p>Copy a copy of the <code>Config.example.yaml</code> under the project folder</p><p>Refer to the parameters of the annotation instructions of <code>Config.example.yaml</code> to configure the parameters of the configuration <code>config.yaml</code> file</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#4c4f69;--shiki-dark:#abb2bf;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes catppuccin-latte one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#ZoneMap = {</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#    1: {</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#        &quot;name&quot;: &quot;旧都列车&quot;,</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#        &quot;level&quot;: {1: &quot;外围&quot;, 2: &quot;前线&quot;, 3: &quot;内部&quot;, 4: &quot;腹地&quot;, 5: &quot;核心&quot;},</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#    },</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#    2: {</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#        &quot;name&quot;: &quot;施工废墟&quot;,</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#        &quot;level&quot;: {1: &quot;前线&quot;, 2: &quot;内部&quot;, 3: &quot;腹地&quot;, 4: &quot;核心&quot;},</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#    },</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># Most of the model training sets come from the old capital trains. The script brushing is currently the most stable train. There will be more </span><span style="--shiki-light:#8839EF;--shiki-dark:#C678DD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">BUG</span><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> in other pictures.</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#ABB2BF;">targetMap</span><span style="--shiki-light:#7C7F93;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#ABB2BF;">    level</span><span style="--shiki-light:#7C7F93;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#FE640B;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                # Default level 1: 外围</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#ABB2BF;">    zone</span><span style="--shiki-light:#7C7F93;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#FE640B;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                 # Default area 1: 旧都列车</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#ABB2BF;">modeSelect</span><span style="--shiki-light:#7C7F93;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#FE640B;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">               # Pattern selection 1: Quan Customs Clearance 2: Brush Zero performance 3: Zero Bank 4: Zero Bank No. 0 performance together</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#ABB2BF;">maxFightTime</span><span style="--shiki-light:#7C7F93;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#FE640B;--shiki-dark:#D19A66;"> 300</span><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">           # The maximum battle time, the single battle time is default to 300s, and more than 300s will be reopened (some battle scenarios need to run the map, and the relevant process has not yet been processed.</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#ABB2BF;">maxMapTime</span><span style="--shiki-light:#7C7F93;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#FE640B;--shiki-dark:#D19A66;"> 1500</span><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            # The maximum time in the map defaults to 1500s, and the maximum time will be reopening without customs clearance.</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#ABB2BF;">hasBoom</span><span style="--shiki-light:#7C7F93;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#8839EF;--shiki-dark:#D19A66;"> True</span><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">               # Whether to unlock the bomb</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#ABB2BF;">useGpu</span><span style="--shiki-light:#7C7F93;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#8839EF;--shiki-dark:#D19A66;"> True</span><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                # Whether to use GPU, default TRUE, using GPU will accelerate model training. If it is changed to FALSE, the CPU will be used for OCR recognition</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#ABB2BF;">selBuff</span><span style="--shiki-light:#7C7F93;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#40A02B;--shiki-dark:#98C379;">&quot;冻结&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#40A02B;--shiki-dark:#98C379;"> &quot;暴击&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#40A02B;--shiki-dark:#98C379;"> &quot;决斗&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#40A02B;--shiki-dark:#98C379;"> &quot;闪避&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">       # Minghui Choose</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#ABB2BF;">characters</span><span style="--shiki-light:#7C7F93;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#40A02B;--shiki-dark:#98C379;">&quot;艾莲&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#40A02B;--shiki-dark:#98C379;"> &quot;莱卡恩&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#40A02B;--shiki-dark:#98C379;"> &quot;苍角&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#9CA0B0;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">       # What roles you brought here, you can fill it out here. Of course, you may not have the corresponding fighting logic, and the next version is added</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Copy all the files under the project folder <code>FIGHT/TACTICS_Defaults</code> to the<code> Fight/Tactics</code> folder</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>The project is designed for the default pseudo code of combat logic. Players can design the pseudo code according to their needs, and subsequently organize pseudo -code design rules for players to perform <code>diy</code></p><p><strong>默认.yaml：</strong> The default combat logic, in addition, players can customize the character&#39;s battle logic. At present, only Ailian, Laician, Cangjiao, Zhu Yu, Nicole</p><p><strong>红光&amp;黄光.yaml：</strong> For the action logic after the decision of Hongguang and Huang Guang, players can also edit themselves</p><p>In addition, players can even customize the logic of character skills, refer to <strong>艾莲技能.yaml</strong>. Once the ordinary module is executed twice, the skill module will be executed.</p></div>`,12);function A(b,_){const s=h("RouteLink");return k(),p("div",null,[u,i("details",m,[y,i("p",null,[f,e(" Deploy the "),B,e(" environment and use the"),v,e(" to run the script. See "),d(s,{to:"/demo/configure.html"},{default:c(()=>[e("Settings")]),_:1})]),F]),C])}const E=r(g,[["render",A],["__file","deploy.html.vue"]]),T=JSON.parse('{"path":"/demo/deploy.html","title":"Quick Start","lang":"en-US","frontmatter":{"title":"Quick Start","icon":"gears","category":["Use guide"],"tag":["Quick Start"],"editLink":false,"prev":false,"next":false,"comment":false,"description":"1 Download Code Please download source code from ZenlessZoneZero-Auto-Release Tips The CPU version of the separate packaging (Zenlesszonezero-Auto.zip) comes with the environmen...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://zzz.alphablog.site/zh/demo/deploy.html"}],["meta",{"property":"og:url","content":"https://zzz.alphablog.site/demo/deploy.html"}],["meta",{"property":"og:site_name","content":"ZonelessZero Automation Script"}],["meta",{"property":"og:title","content":"Quick Start"}],["meta",{"property":"og:description","content":"1 Download Code Please download source code from ZenlessZoneZero-Auto-Release Tips The CPU version of the separate packaging (Zenlesszonezero-Auto.zip) comes with the environmen..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zzz.alphablog.site/image/release.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-17T08:43:20.000Z"}],["meta",{"property":"article:author","content":"SmallPigPig"}],["meta",{"property":"article:tag","content":"Quick Start"}],["meta",{"property":"article:modified_time","content":"2024-08-17T08:43:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Quick Start\\",\\"image\\":[\\"https://zzz.alphablog.site/image/release.png\\",\\"https://zzz.alphablog.site/image/zip.png\\",\\"https://zzz.alphablog.site/image/runexe.png\\",\\"https://zzz.alphablog.site/image/depend.png\\"],\\"dateModified\\":\\"2024-08-17T08:43:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SmallPigPig\\",\\"url\\":\\"https://alphablog.site\\"}]}"]]},"headers":[{"level":2,"title":"1 Download Code","slug":"_1-download-code","link":"#_1-download-code","children":[]},{"level":2,"title":"2 Installation Dependence","slug":"_2-installation-dependence","link":"#_2-installation-dependence","children":[]},{"level":2,"title":"3 Tutorial","slug":"_3-tutorial","link":"#_3-tutorial","children":[]}],"git":{"createdTime":1723350423000,"updatedTime":1723884200000,"contributors":[{"name":"SmallPigPig","email":"3552354372@qq.com","commits":2}]},"readingTime":{"minutes":2.76,"words":829},"filePathRelative":"demo/deploy.md","localizedDate":"August 11, 2024","autoDesc":true}');export{E as comp,T as data};
