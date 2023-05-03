import { Footer } from 'flowbite-react';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterContent = () => {
    return (
        <div className='bg-slate-800'>
            <Footer bgDark={false} className='bg-slate-800 border-none container mx-auto'>
  <div className="w-full">
    <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
      <div>
        <Footer.Title title="Company" />
        <Footer.LinkGroup col={true}>
          <Footer.Link href="#">
            About
          </Footer.Link>
          <Footer.Link href="#">
            Careers
          </Footer.Link>
          <Footer.Link href="#">
            Brand Center
          </Footer.Link>
          <Footer.Link href="#">
            Blog
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div>
        <Footer.Title title="help center" />
        <Footer.LinkGroup col={true}>
          <Footer.Link href="#">
            Discord Server
          </Footer.Link>
          <Footer.Link href="#">
            Twitter
          </Footer.Link>
          <Footer.Link href="#">
            Facebook
          </Footer.Link>
          <Footer.Link href="#">
            Contact Us
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div>
        <Footer.Title title="legal" />
        <Footer.LinkGroup col={true}>
          <Footer.Link href="#">
            Privacy Policy
          </Footer.Link>
          <Footer.Link href="#">
            Licensing
          </Footer.Link>
          <Footer.Link href="#">
            Terms & Conditions
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div>
        <Footer.Title title="download" />
        <Footer.LinkGroup col={true}>
          <Footer.Link href="#">
            iOS
          </Footer.Link>
          <Footer.Link href="#">
            Android
          </Footer.Link>
          <Footer.Link href="#">
            Windows
          </Footer.Link>
          <Footer.Link href="#">
            MacOS
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
    </div>
    <div className="w-full bg-slate-800 border-t-2 border-slate-600 py-6 px-4 sm:flex sm:items-center sm:justify-between">
      <Footer.Copyright
        href="#"
        by="Flowbite™"
        year={2022}
      />
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        <Footer.Icon
          href="#"
          icon={FaFacebook}
        />
        <Footer.Icon
          href="#"
          icon={FaInstagram}
        />
        <Footer.Icon
          href="#"
          icon={FaTwitter}
        />
        <Footer.Icon
          href="#"
          icon={FaGithub}
        />
        <Footer.Icon
          href="#"
          icon={FaGoogle}
        />
      </div>
    </div>
  </div>
</Footer>
        </div>
    );
};

export default FooterContent;