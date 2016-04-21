import { default as React, createElement, PropTypes } from 'react'
import { Flex } from 'reflexbox'
import { Base, Heading } from 'rebass'

const Badge = ({ backgroundColor, color, heading, height, icon, iconSize, width, ...props }, { rebass: { colors } }) => // eslint-disable-line max-len
    <Base
        style={{
            alignItems: 'center',
            backgroundColor: colors[backgroundColor] || backgroundColor,
            display: 'flex',
            color: colors[color] || color,
            height,
            width
        }}
        {...props}
    >
        <Base
            style={{
                margin: 'auto',
                maxWidth: 200,
                textAlign: 'center'
            }}
        >
            <Heading
                level={3}
                mb={2}
            >
                {heading}
            </Heading>
            <Flex justify="center">
                {createElement(icon, { size: iconSize })}
            </Flex>
        </Base>
    </Base>

Badge.defaultProps = {
    height: 200,
    iconSize: 80,
    width: 200
}

Badge.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    heading: PropTypes.string.isRequired,
    height: PropTypes.number,
    icon: PropTypes.func.isRequired,
    iconSize: PropTypes.number.isRequired,
    width: PropTypes.number
}

Badge.contextTypes = {
    breakpoints: PropTypes.object.isRequired,
    rebass: PropTypes.object.isRequired
}

const BrandBadges = ({ badges, ...props }) =>
    <Flex
        justify="space-around"
        wrap
    >
        {badges.map((badge, key) =>
            <Badge
                {...props}
                {...badge}
                key={key}
            />
        )}
    </Flex>

BrandBadges.propTypes = {
    badges: PropTypes.array.isRequired
}

export default BrandBadges
