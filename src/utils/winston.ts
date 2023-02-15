import w from 'winston';

export const winston = w.createLogger({
    format: w.format.combine(
        w.format.label({ label: 'Winston logger' }),
        w.format.colorize(),
        w.format.timestamp(),
        w.format.simple()
    ),
    transports: [
        new w.transports.Console({
            level: 'error',
            handleExceptions: true
        }),
        new w.transports.Console({
            level: 'info'
        })
    ]
});

