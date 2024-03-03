import { definePathname } from '@tinloof/sanity-studio'
import { defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'page',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    definePathname({ name: 'pathname' }),
  ],
})
