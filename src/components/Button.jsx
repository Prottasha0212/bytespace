export default function Button({ children, variant = 'lime', as: Tag = 'button', className = '', ...props }) {
  return <Tag className={`btn btn--${variant} ${className}`} {...props}>{children}</Tag>
}
