import w from 'winston';

export const winston = w.createLogger({
    format: w.format.combine(
        w.format.label({ label: 'Winston logger' }),
        w.format.json(),
        w.format.prettyPrint(),
    ),
    transports: [
        new w.transports.Console({
            level: 'error',
            handleExceptions: true
        })
    ]
});

if (process.env.NODE_ENV !== 'production') {
    winston.add(new w.transports.Console({
        format: w.format.simple()
    }));
}
