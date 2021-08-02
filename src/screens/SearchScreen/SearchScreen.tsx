import React from 'react'
import { Layout } from '../../components/core'
import { Typography } from '../../components/core/Typography'
import { SearchField } from './SearchScreen.style'

export function SearchScreen() {
    return (
       <Layout.Screen style={{paddingHorizontal: 20}}>
           <Layout.Block direction='column'>
                <Layout.Block
                    direction='row'
                    justify='space-between'
                    align='center'
                >
                        <Typography.H3 style={{color: 'white', fontWeight: 'bold'}}>
                            Search
                        </Typography.H3>
                </Layout.Block>
            </Layout.Block>

            <SearchField />
       </Layout.Screen>
    )
}