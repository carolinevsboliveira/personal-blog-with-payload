import { Language } from '@/types/languages'
import { useParams } from 'next/navigation'
import React from 'react'

const defaultLabels = {
  plural: 'Docs',
  singular: 'Doc',
}

const defaultCollectionLabels = {
  posts: {
    plural: 'Posts',
    singular: 'Post',
  },
}
const getTexts = (lang: Language) => {
  const translateText = {
    'pt-BR': {
      of: 'de',
      showing: 'Mostrando',
    },
    en: {
      of: 'of',
      showing: 'Showing',
    },
  }
  if(lang === 'pt-BR') return translateText['pt-BR']
  return translateText['en']
}
export const PageRange: React.FC<{
  className?: string
  collection?: keyof typeof defaultCollectionLabels
  collectionLabels?: {
    plural?: string
    singular?: string
  }
  currentPage?: number
  limit?: number
  totalDocs?: number
  lang?: Language
}> = (props) => {
  const {
    className,
    collection,
    collectionLabels: collectionLabelsFromProps,
    currentPage,
    limit,
    totalDocs,
    lang,
  } = props

  let indexStart = (currentPage ? currentPage - 1 : 1) * (limit || 1) + 1
  if (totalDocs && indexStart > totalDocs) indexStart = 0

  let indexEnd = (currentPage || 1) * (limit || 1)
  if (totalDocs && indexEnd > totalDocs) indexEnd = totalDocs

  const { plural, singular } =
    collectionLabelsFromProps ||
    (collection ? defaultCollectionLabels[collection] : undefined) ||
    defaultLabels ||
    {}
  const { of, showing } = getTexts(lang as Language)


  return (
    <div className={[className, 'font-semibold'].filter(Boolean).join(' ')}>
      {(typeof totalDocs === 'undefined' || totalDocs === 0) && 'Search produced no results.'}
      {typeof totalDocs !== 'undefined' &&
        totalDocs > 0 &&
        `${showing} ${indexStart}${indexStart > 0 ? ` - ${indexEnd}` : ''} ${of} ${totalDocs} ${
          totalDocs > 1 ? plural : singular
        }`}
    </div>
  )
}
