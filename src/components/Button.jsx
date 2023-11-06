


function Button({color, size, text}) {
  
  const className = `bg-${color}-500 text-white font-bold py-2 px-4 rounded ${size}`

  return <button className={className}>{text}</button>
}

Button.defaultProps = {
  color: 'blue',
  size: 'text-sm',
  text: 'Click me',
}

export default Button
