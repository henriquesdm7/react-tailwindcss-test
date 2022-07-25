import { DarkThemeToggle } from 'flowbite-react'
import React, { Component } from 'react'

export default class FloatingDarkThemeToggle extends Component {
    render() {
        return (
            <div className="fixed right-0 top-16 bg-gray-200 dark:bg-gray-900 w-10 sm:w-24 rounded-l-lg transition-colors">
                <DarkThemeToggle />
            </div>
        )
    }
}
