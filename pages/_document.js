import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import config from '~/appConfig';

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${config.GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${config.GA_TRACKING_ID}');
              `
            }}
          />
        {/* Yandex.Metrika counter */}
        <script type='text/javascript'
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(${config.YM_TRACKING_ID}, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });
            `
          }}
        />
        <noscript>
          <div>
            <img
              src={`https://mc.yandex.ru/watch/${config.YM_TRACKING_ID}`}
              style={{ position: 'absolute', left: -9999 }}
              alt=''
            />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
};
