import React from 'react'
import { stripIndent } from 'common-tags'

export const onRenderBody = function({ setPostBodyComponents }, pluginOptions) {
  const {
    locationId = 5800149,
    lang = 'fr',
    rating = true,
    nreviews = 4,
    writeReviewLink = true,
    border = true,
    popIdx = true,
    isWide = true,
  } = pluginOptions

  return setPostBodyComponents([
    <script
      key="trip-advisor-widget"
      dangerouslySetInnerHTML={{
        __html: stripIndent`
(function(t,r,i,p){
  i=t.createElement(r);
  i.src="https://www.tripadvisor.com/WidgetEmbed-selfserveprop?amp;locationId=${locationId}&amp;writereviewlink=${writeReviewLink}&amp;rating=${rating}&amp;border=${border}&amp;uniq=390&amp;iswide=${isWide}&amp;popIdx=${popIdx}&amp;lang=${lang}&amp;nreviews=${nreviews}&amp;display_version=2";
  i.async=true;
  p=t.getElementsByTagName(r)[0];
  p.parentNode.insertBefore(i,p);
})(document,"script");
    `,
      }}
    />,
  ])
}
