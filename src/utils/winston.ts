import w from 'winston';

const {
    createLogger,
    format: { combine, label, colorize, timestamp, simple },
    transports: { Console }
} = w;

export const winston = createLogger({
    format: combine(
        label({ label: 'Winston logger' }),
        colorize(),
        timestamp(),
        simple()
    ),
    transports: [
        new Console({
            level: 'error',
            handleExceptions: true
        }),
        new Console({
            level: 'info'
        })
    ]
});

