import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface LocalizedLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  children: React.ReactNode;
}

// Simple Link component (no language routing needed)
const LocalizedLink: React.FC<LocalizedLinkProps> = ({ to, children, ...props }) => {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
};

export default LocalizedLink;
