import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

type Props = {}

const HomePage = (props: Props) => {
  const { t, i18n } = useTranslation()
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <>
      <div>
        <button className="mr-3 bg-gray-700 text-white px-3 rounded-md" onClick={() => changeLanguage('vi')}>
          Việt Nam
        </button>
        <button className="bg-gray-700 text-white px-3 rounded-md" onClick={() => changeLanguage('en')}>
          English
        </button>
      </div>
      <div>
        <Trans i18nKey="content.title"></Trans>
        <div>{t('content.name')}</div>
      </div>
    </>
  )
}

export default HomePage
