import{e as n}from"./app.2fe72a15.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const e={},s=n(`<h1 id="\u4F7F\u7528docker" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528docker" aria-hidden="true">#</a> \u4F7F\u7528Docker</h1><p>go-cqhttp\u652F\u6301\u4F7F\u7528Docker\uFF0C\u76EE\u524D\u955C\u50CF\u6258\u7BA1\u5728GitHub Package\u3002</p><h2 id="\u62C9\u53D6\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6\u955C\u50CF" aria-hidden="true">#</a> \u62C9\u53D6\u955C\u50CF</h2><p>\u9996\u5148\uFF0C\u8BF7\u786E\u4FDD\u60A8\u7684Docker\u5DF2\u7ECF\u5B89\u88C5\u5B8C\u6BD5\uFF0C\u4E14Docker Daemon\u6B63\u5E38\u8FD0\u884C\u3002</p><p>\u6B64\u540E\uFF0C\u8BF7\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u62C9\u53D6go-cqhttp\u7684Docker\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull ghcr.io/mrs4s/go-cqhttp:master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u51C6\u5907\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u51C6\u5907\u914D\u7F6E\u6587\u4EF6</h2><p>\u90E8\u7F72\u5728\u670D\u52A1\u5668\u7684Docker\u4E0D\u9002\u5B9C\u7528\u4EA4\u4E92\u5F0F\u754C\u9762\u751F\u6210\u914D\u7F6E\u6587\u4EF6\uFF0C\u56E0\u6B64\u60A8\u9700\u8981\u4E8B\u5148\u51C6\u5907\u597D\u4F60\u7684\u914D\u7F6E\u6587\u4EF6\u3002\u6211\u4EEC\u5047\u8BBE\u60A8\u51C6\u5907\u597D\u7684\u914D\u7F6E\u6587\u4EF6\u672C\u5730\u8DEF\u5F84\u4F4D\u4E8E<code>/path/to/config.yml</code>\u3002</p><blockquote><p>\u60A8\u4E5F\u53EF\u4EE5\u540C\u65F6\u51C6\u5907\u597D\u8BBE\u5907\u6587\u4EF6<code>device.json</code>\uFF0C\u6B64\u65F6\u6211\u4EEC\u4E00\u6837\u5047\u8BBE\u672C\u5730\u8DEF\u5F84\u4E3A<code>/path/to/device.json</code>\u3002</p></blockquote><h2 id="\u5F00\u59CB\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB\u8FD0\u884C" aria-hidden="true">#</a> \u5F00\u59CB\u8FD0\u884C</h2><p>\u63A5\u4E0B\u6765\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\u4EE5\u542F\u52A8go-cqhttp</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
  -v /path/to/config.yml:/data/config.yml <span class="token punctuation">\\</span>
  -v /path/to/device.json:/data/device.json <span class="token punctuation">\\</span>
  -p <span class="token number">2333</span>:8080 <span class="token punctuation">\\</span>
  -d <span class="token punctuation">\\</span>
  --name cqhttp <span class="token punctuation">\\</span>
  ghcr.io/mrs4s/go-cqhttp:master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u63A5\u4E0B\u6765\u9010\u884C\u89E3\u91CA\u4E0A\u9762\u7684\u547D\u4EE4\uFF1A</p><ul><li><code>docker run</code> \u4EE3\u8868\u547D\u4EE4 Docker \u542F\u52A8\u5BB9\u5668\u3002</li><li><code>-v /path/to/config.yml:/data/config.yml</code> \u4EE3\u8868\u5C06\u672C\u5730\u8BA1\u7B97\u673A\u4E2D\u7684<code>/path/to/config.yml</code>\u6620\u5C04\u81F3\u5BB9\u5668\u5185\u7684<code>/data/config.yml</code>\u3002 Docker\u65E2\u652F\u6301\u6587\u4EF6\u6620\u5C04\u4E5F\u652F\u6301\u6587\u4EF6\u5939\u6620\u5C04\uFF0C\u56E0\u6B64\u82E5\u60A8\u9700\u8981\u8BFB\u53D6\u97F3\u89C6\u9891\u7F13\u5B58\u6587\u4EF6\uFF0C\u60A8\u53EF\u4EE5\u76F4\u63A5\u66FF\u6362<code>-v /path/to/config.yml:/data/config.yml -v /path/to/device.json:/data/device.json</code>\u4E3A<code>-v /path/to/data:/data</code>\u3002</li><li><code>-p 2333:8080</code> \u82E5\u60A8\u914D\u7F6E\u4E86<strong>\u6B63\u5411\u670D\u52A1\u5668\uFF08\u5305\u62EC\u6B63\u5411HTTP\u3001\u6B63\u5411WebSocket\uFF09</strong>\uFF0C\u60A8\u9700\u8981\u901A\u8FC7\u8FD9\u4E2A\u547D\u4EE4\u5C06\u5BB9\u5668\u5185\u670D\u52A1\u5668\u7AEF\u53E3\u66B4\u9732\u81F3\u672C\u5730\u8BA1\u7B97\u673A\u3002\u8BE5\u547D\u4EE4\u4EE3\u8868\u5C06<em>\u5BB9\u5668\u51858080\u7AEF\u53E3</em>\u6620\u5C04\u81F3<em>\u4E3B\u673A2333\u7AEF\u53E3</em>\u3002\u5728\u4E3B\u673A\u5185\u53EF\u4EE5\u901A\u8FC7<code>localhost:2333</code>\u6765\u8BBF\u95EE\u5BB9\u5668\u3002 \u82E5\u60A8\u53EA\u914D\u7F6E\u4E86\u53CD\u5411\u670D\u52A1\u5668\uFF0C\u5219\u65E0\u9700\u8F93\u5165\u8BE5\u884C\u547D\u4EE4\u3002</li><li><code>-d</code> \u4EE5\u540E\u53F0\u5F62\u5F0F\u8FD0\u884C\u3002\u82E5\u6CA1\u6709\u8FD9\u4E2A\u9009\u9879\u5C06\u4F1A\u5B9E\u65F6\u663E\u793A\u7A0B\u5E8F\u8F93\u51FA\u3002</li><li><code>--name cqhttp</code> \u5B9A\u4E49\u5BB9\u5668\u540D\u4E3A<code>cqhttp</code>\u3002</li><li><code>ghcr.io/mrs4s/go-cqhttp:master</code> \u955C\u50CF\u7684\u5730\u5740\u3002</li></ul><p>\u5728\u4EE5\u540E\u53F0\u5F62\u5F0F\u8FD0\u884C\u65F6\uFF0C\u60A8\u4F1A\u83B7\u5F97\u4E00\u4E2A\u5BB9\u5668\u7684\u8BC6\u522B\u7801\uFF0C\u5F62\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token punctuation">\\</span>
    -v /path/to/config.yml:/data/config.yml <span class="token punctuation">\\</span>
    -v /path/to/device.json:/data/device.json <span class="token punctuation">\\</span>
    -p <span class="token number">2333</span>:8080 <span class="token punctuation">\\</span>
    -d <span class="token punctuation">\\</span>
    --name cqhttp <span class="token punctuation">\\</span>
    ghcr.io/mrs4s/go-cqhttp:master
aa89d8943600a653b7e06a9d404fd6396b33c5c4e3b37d28c27df2437b3df033 <span class="token comment"># \u8FD9\u4E2A\u5C31\u662F\u5BB9\u5668\u7684\u8BC6\u522B\u7801</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u786E\u8BA4\u8FD0\u884C\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u786E\u8BA4\u8FD0\u884C\u72B6\u6001" aria-hidden="true">#</a> \u786E\u8BA4\u8FD0\u884C\u72B6\u6001</h2><p>\u8FD0\u884C\u540E\uFF0C\u8BF7\u52A1\u5FC5\u67E5\u770B\u5BB9\u5668\u7684log\uFF0C\u56E0\u4E3Ago-cqhttp\u53EF\u80FD\u4F1A\u8981\u6C42\u60A8\u626B\u7801\u9A8C\u8BC1\u3002\u83B7\u53D6log\u7684\u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> container logs cqhttp
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6B64\u5904\uFF0Ccqhttp\u4E3A\u5BB9\u5668\u540D\uFF0C\u82E5\u60A8\u5FD8\u8BB0\u5B9A\u4E49\u5BB9\u5668\u540D\uFF0C\u53EF\u4EE5\u66FF\u6362\u4E3A\u5BB9\u5668\u8BC6\u522B\u7801\u3002</p><p>\u786E\u8BA4\u767B\u9646\u6210\u529F\u540E\uFF0C\u8BF7\u518D\u4E00\u6B21\u83B7\u53D6log\uFF0C\u4EE5\u786E\u8BA4go-cqhttp\u6B63\u5E38\u8FD0\u884C\u3002</p><p>\u81F3\u6B64\uFF0C\u60A8\u5DF2\u7ECF\u5B66\u4F1A\u4E86\u5982\u4F55\u901A\u8FC7Docker\u5FEB\u901F\u90E8\u7F72go-cqhttp\u3002</p>`,22);function c(o,t){return s}var d=a(e,[["render",c]]);export{d as default};
