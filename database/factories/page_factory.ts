import factory from '@adonisjs/lucid/factories'
import Page from '#models/page'

export const PageFactory = factory
  .define(Page, async ({ faker }) => {
    return {}
  })
  .build()
