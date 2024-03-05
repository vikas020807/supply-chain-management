export default function ApplicationLogo(props) {
    const { className, ...otherProps } = props;
    return (
        <div className="flex items-center">
            <svg
                className={` dark:bg-slate-100` + className}
                {...otherProps}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="72 93 369 227"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
            >
                <path
                    d="M200.243685,214.04615c-20.338608-.156394-40.723757.117295-61.090289-.009775-8.954572.136844-18.002228-1.094754-26.891642.537602-7.846886,1.925593-15.37729,6.871534-19.286771,14.446837-4.002563,7.467783-5.147483,16.479951-3.592999,24.85677c2.904186,16.528824,13.711107,31.190702,28.148261,38.404345c8.684632,4.769998,18.5328,6.255735,28.185493,6.939956c5.287108-4.760223,15.256283-2.36545,17.090016,4.994813c1.740649,5.796329-3.136893,12.100936-8.759099,12.149809-2.718019.430082-5.249874-.772192-7.521096-2.189507-19.752185.645123-39.876702-7.370037-53.783283-22.237181-10.657989-11.064831-17.44373-26.137241-18.597958-41.844999-1.061145-11.338519,1.917507-22.970275,8.070285-32.314779c6.515801-9.246757,16.298811-15.991221,27.124349-18.043884c4.905467-1.016557,9.913326-.948135,14.883951-.948135c27.133657.117295,54.258006.058648,81.391664.166168"
                    transform="translate(0 0.000002)"
                    fill="#280c2d"
                    stroke="#280c2d"
                    strokeWidth="0.25"
                />
                <path
                    d="M200.243685,214.04615c-20.338608-.156394-40.723757.117295-61.090289-.009775-8.954572.136844-18.002228-1.094754-26.891642.537602-7.846886,1.925593-15.37729,6.871534-19.286771,14.446837-4.002563,7.467783-5.147483,16.479951-3.592999,24.85677c2.904186,16.528824,13.711107,31.190702,28.148261,38.404345c8.684632,4.769998,18.5328,6.255735,28.185493,6.939956c5.287108-4.760223,15.256283-2.36545,17.090016,4.994813c1.740649,5.796329-3.136893,12.100936-8.759099,12.149809-2.718019.430082-5.249874-.772192-7.521096-2.189507-19.752185.645123-39.876702-7.370037-53.783283-22.237181-10.657989-11.064831-17.44373-26.137241-18.597958-41.844999-1.061145-11.338519,1.917507-22.970275,8.070285-32.314779c6.515801-9.246757,16.298811-15.991221,27.124349-18.043884c4.905467-1.016557,9.913326-.948135,14.883951-.948135c27.133657.117295,54.258006.058648,81.391664.166168"
                    transform="matrix(-.999848 0.017452-.017452-.999848 423.185266 409.185881)"
                    fill="#280c2d"
                    stroke="#280c2d"
                    strokeWidth="0.25"
                />
                <path
                    d="M352.85,208.46c2.04-.06,4.09-.18,6.15-.08c2.63-.21,3.86,2.58,5.52,4.12-.29,3.06,1,7-1.83,9.2-2.33,2.78-6.18,1.79-9.33,1.94-2.09-2.05-4.36-4.49-4-7.66-.52-3.09,1.66-5.38,3.49-7.52Z"
                    fill="#e830a4"
                    stroke="#e830a4"
                    strokeWidth="0.25"
                />
                <path
                    d="M373.39,217.04c-.68-4.75,3.18-8.64,7.62-9.47c3.35.84,7.08,2.71,7.95,6.36.79,3.7-.65,8.1-4.14,9.91-4.76,2.56-11.81-1.12-11.43-6.8Z"
                    fill="#280c2d"
                    stroke="#280c2d"
                    strokeWidth="0.25"
                />
                <path
                    d="M402.4,208.66c4.59-2.78,11.1.36,11.7,5.72c1.66,5.84-4.33,11.67-10.12,10.07-7.34-1.26-7.84-12.73-1.58-15.79Z"
                    fill="#280c2d"
                    stroke="#280c2d"
                    strokeWidth="0.25"
                />
                <path
                    d="M429.11,207.87c4.75-.77,9.98,3.06,9.7,8.09.5,5.9-6.29,10.62-11.67,8.08-7.4-2.6-5.97-15.48,1.97-16.17Z"
                    fill="#280c2d"
                    stroke="#280c2d"
                    strokeWidth="0.25"
                />
                <path
                    d="M321.09,241.999995c5.41-4.169987,14.68-.06,14.52,6.949977-.27,7.119975-1.8,14.149952-3.58,21.01993-3.4,12.879957-11.21,24.18992-20.69,33.359889-9.56,8.549972-21.61,14.369953-34.28,16.429945-9.88,1.769995-19.97,1.049997-29.93.769998-3.55.959997-7.21,2.629991-10.93,1.379995-5.07-1.109996-9.59-6.369979-7.96-11.719961c1.79-8.449971,13.71-11.019963,19.78-5.469982c11.07-.129999,22.48,1.159997,33.19-2.399992c20.03-6.10998,35.49-25.269916,36.14-46.369846.29-4.729984-1.15-11.029963,3.74-13.949953Z"
                    transform="translate(-8.345125-5.90152)"
                    fill="#e830a4"
                    stroke="#e830a4"
                    strokeWidth="0.25"
                />
                <path
                    d="M321.089663,241.999977c5.409981-4.169978,14.679948-.06,14.519949,6.949962-.27,7.119963-1.799993,14.149925-3.579988,21.019889-3.399988,12.879931-11.20996,24.189871-20.689926,33.359821-9.559966,8.549955-21.609923,14.369924-34.279878,16.429913-9.879965,1.769991-19.96993,1.049994-29.929894.769996-3.549988.959995-7.209975,2.629985-10.929961,1.379992-5.069983-1.109994-9.589966-6.369966-7.959972-11.719937c1.789993-8.449954,13.709951-11.019941,19.77993-5.469971c11.069961-.129999,22.479919,1.159995,33.189881-2.399988c20.029929-6.109967,35.489875-25.269865,36.139873-46.369752.289999-4.729974-1.149996-11.02994,3.739986-13.949925Z"
                    transform="matrix(-.999998-.00189 0.00189-.999998 426.380229 419.747031)"
                    fill="#700965"
                    stroke="#700965"
                    strokeWidth="0.25"
                />
                <line
                    style={{ mixBlendMode: "luminosity" }}
                    x1="39.058525"
                    y1="-83.341866"
                    x2="-37.028631"
                    y2="82.345671"
                    transform="matrix(.996195-.087156 0.087156 0.996195 207.777515 208.118451)"
                    fill="#280c2d"
                    stroke="#280c2d"
                    strokeWidth="14"
                    strokeLinecap="round"
                />
            </svg>
            <span
                className="relative block -bottom-4 right-4 font-bold text-sm dark:text-gray-100"
                style={{
                    fontFamily: "'Major Mono Display', sans-serif",
                }}
            >
                AgileConnect
            </span>
        </div>
    );
}