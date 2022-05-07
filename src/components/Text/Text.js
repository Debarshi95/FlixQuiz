import cn from 'clsx';
import { memo } from 'react';

const variants = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  div: 'div',
};
const Text = ({ variant, className, size, align, ...props }) => {
  const Component = variants[variant] || 'p';
  return <Component className={cn('text-lg', className)} {...props} />;
};

Text.defaultProps = {
  size: 'sm',
  align: 'center',
};
export default memo(Text);
