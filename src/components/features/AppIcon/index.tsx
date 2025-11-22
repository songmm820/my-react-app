import clsx from 'clsx'

type AppIconProps = {
    className?: string
    name: string
    icon?: string
}

const AppIcon = (props: AppIconProps) => {
    const { className, name, icon } = props
    return (
        <div className='rounded-md inline-flex flex-col text-center gap-2'>
            <div
                className={clsx(
                    'size-18 rounded-md border border-[#e7e7e7] bg-primary',
                    className
                )}
            >
                {/* <div>{name}</div> */}
                <img className="w-full h-auto select-none" src={icon} />
            </div>
            <div className='text-base'>{name}</div>
        </div>
    )
}

export default AppIcon
