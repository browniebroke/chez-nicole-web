import React from 'react'
import { stripIndent } from 'common-tags'

export const onRenderBody = function({ setPostBodyComponents }, pluginOptions) {
  const {
    locationId = 5800149,
    lang = 'fr',
    rating = false,
    nreviews = 4,
    writeReviewLink = true,
    border = true,
    popIdx = true,
    isWide = true,
  } = pluginOptions

  return setPostBodyComponents([
    <script
      key="trip-advisor-widget"
      src={`https://www.tripadvisor.com/wejs?wtype=selfserveprop&amp;uniq=390&amp;locationId=${locationId}&amp;lang=${lang}&amp;rating=${rating}&amp;nreviews=${nreviews}&amp;writereviewlink=${writeReviewLink}&amp;popIdx=${popIdx}&amp;iswide=${isWide}&amp;border=${border}&amp;display_version=2`}
    />,
  ])
}
