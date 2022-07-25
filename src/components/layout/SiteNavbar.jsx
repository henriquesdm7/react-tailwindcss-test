import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { Component } from 'react'
import Clock from '../content/Clock';

class SiteNavbar extends Component {
    render() {
        return (
            <Navbar
                fluid={false}
                rounded={false}
                border={true}
            >
                <Navbar.Brand href="#">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Teste de Aplicação React
                    </span>
                </Navbar.Brand>
                <Clock />
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar rounded={true} status="online" statusPosition="bottom-left" />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Usuário Teste
                            </span>
                            <span className="block truncate text-sm font-medium">
                                sem@login.atualmente
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/navbars"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default SiteNavbar;