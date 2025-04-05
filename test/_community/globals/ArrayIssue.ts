import type { GlobalConfig } from 'payload'

export const ArrayIssue: GlobalConfig = {
  slug: 'ArrayIssue',
  label: 'Array Issue',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Array Issue',
          fields: [
            {
              type: 'array',
              name: 'outerAray',
              label: 'Outer array',
              required: true,
              minRows: 1,
              maxRows: 5,
              fields: [
                {
                  type: 'array',
                  label: 'Non required inner array but with minRows',
                  name: 'testArray',
                  fields: [
                    {
                      type: 'text',
                      name: 'text',
                      label: 'Text',
                      required: true,
                      maxLength: 10,
                    },
                  ],
                  minRows: 2,
                  maxRows: 7,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
