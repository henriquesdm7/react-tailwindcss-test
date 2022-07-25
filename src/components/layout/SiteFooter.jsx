import { Footer } from 'flowbite-react';
import React, { Component } from 'react';
import { ReactComponent as BsGithub } from './../../assets/svg/github.svg';
import { ReactComponent as BsLinkedin } from './../../assets/svg/linkedin.svg';

class SiteFooter extends Component {
    render() {
        return (
            <Footer container={true}>
                <div className="w-full text-center">
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                        <Footer.Brand
                            href="https://flowbite.com"
                            src="https://flowbite.com/docs/images/logo.svg"
                            alt="Flowbite Logo"
                            name="Flowbite"
                        />
                        <Footer.LinkGroup>
                            <div className="mx-2">
                                <a href='https://github.com/henriquesdm7'
                                    target="_blank"
                                    rel='noreferrer'
                                >
                                    <Footer.Icon icon={BsGithub} />
                                </a>
                            </div>
                            <div className="mx-2">
                                <a href='https://www.linkedin.com/in/henrique-dos-santos-dias-mattos-822067161/'
                                    target="_blank"
                                    rel='noreferrer'
                                >
                                    <Footer.Icon icon={BsLinkedin} />
                                </a>
                            </div>
                        </Footer.LinkGroup>
                    </div>
                    <Footer.Divider />
                    <Footer.Copyright
                        href="#"
                        by="Flowbite™"
                        year={2022}
                    />
                </div>
            </Footer>
        )
    }
}

export default SiteFooter;